import { userSettingsDatabase } from "../database/user-settings.db";
import { coreService } from "../core";

export class IntervalBackgroundTimer implements IBackgroundTimer {
    private timerHandle: number = 0;

    public start(): void {
        if (this.timerHandle !== 0) {
            this.stop();
        }

        // reset the timer event
        this.timerHandle = setInterval(
            async () => await this.handlerAsync(),
            userSettingsDatabase.data.refreshIntervalMinutes * 60000
        );
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
