import { userSettingsDatabase } from "../database/user-settings.db";
import { coreService } from "../core";

export class IntervalBackgroundTimer implements IBackgroundTimer {
    private timerHandle: number = 0;

    public start(instantExecute: boolean = true): void {
        if (this.timerHandle !== 0) {
            this.stop();
        }

        // reset the timer event
        this.timerHandle = setInterval(
            async () => await this.handlerAsync(),
            userSettingsDatabase.data.refreshIntervalMinutes * 60000
        );

        if (instantExecute) {
            this.handlerAsync();
        }
    }

    public stop(): void {
        if (this.timerHandle !== 0) {
            clearInterval(this.timerHandle);
        }
        this.timerHandle = 0;
    }

    private async handlerAsync(): Promise<void> {
        await coreService.refreshDashboardCache();
    }
}
