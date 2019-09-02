import { userSettingsDatabase } from "../database/user-settings.db";
import { coreService } from "../core";

export class AlarmBackgroundTimer implements IBackgroundTimer {
    private readonly alarmName: string = "FeedRefreshAlarm";

    private executeEventListener!: (alarm: chrome.alarms.Alarm) => Promise<void>;

    public start(instantExecute: boolean = true): void {
        chrome.alarms.get(this.alarmName, alarm => this.getAlarmHandler(alarm, instantExecute));
    }

    public stop(): void {
        if (chrome.alarms.onAlarm.hasListener(this.getExecuteEventListener())) {
            chrome.alarms.onAlarm.removeListener(this.getExecuteEventListener());
        }
        chrome.alarms.clearAll();
    }

    private getAlarmHandler(alarm: chrome.alarms.Alarm, instantExecute: boolean = true): void {
        // do nothing if alarm is already registered
        if (alarm) {
            this.stop();
        }

        // register the alarm
        chrome.alarms.create(this.alarmName, {
            delayInMinutes: instantExecute ? undefined : userSettingsDatabase.data.refreshIntervalMinutes,
            periodInMinutes: userSettingsDatabase.data.refreshIntervalMinutes
        } as chrome.alarms.AlarmCreateInfo);

        // register the even listener
        chrome.alarms.onAlarm.addListener(this.getExecuteEventListener());
    }

    private async executeAlarmHandlerAsync(alarm: chrome.alarms.Alarm): Promise<void> {
        if (!alarm.name || alarm.name === "") {
            chrome.alarms.clear("");
        }

        if (alarm.name === this.alarmName) {
            await coreService.refreshDashboardCache();
        }
    }

    private getExecuteEventListener(): (alarm: chrome.alarms.Alarm) => Promise<void> {
        if (!this.executeEventListener) {
            this.executeEventListener = this.executeAlarmHandlerAsync.bind(this);
        }

        return this.executeEventListener;
    }
}
