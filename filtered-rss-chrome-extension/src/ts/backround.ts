import { intervalBackgroundTimer, alarmBackgroundTimer } from "./background";

class FeedRefreshTimer implements IBackgroundTimer {
    public start(): void {
        try {
            alarmBackgroundTimer.start();
        } catch {
            intervalBackgroundTimer.start();
        }
    }

    public stop(): void {
        intervalBackgroundTimer.stop();
        alarmBackgroundTimer.stop();
    }
}

export const feedRefreshTimer: FeedRefreshTimer = new FeedRefreshTimer();
