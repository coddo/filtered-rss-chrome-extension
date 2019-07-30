import { userSettingsDatabase, UserSettings } from "./database/user-settings.db";
import { coreService } from "./core";

class FeedRefreshTimer {
    private timerHandle: number = 0;

    public restart(): void {
        if (this.timerHandle !== 0) {
            this.stop();
        }

        const userSettings: UserSettings = userSettingsDatabase.data;
        this.timerHandle = setTimeout(this.timerHandler.bind(this), userSettings.refreshIntervalMinutes * 60000);
    }

    public stop(): void {
        clearTimeout(this.timerHandle);
        this.timerHandle = 0;
    }

    private async timerHandler(): Promise<void> {
        try {
            await coreService.refreshDashboardCache();
        } finally {
            this.restart();
        }
    }
}

export const feedRefreshTimer: FeedRefreshTimer = new FeedRefreshTimer();
