import { intervalBackgroundTimer, alarmBackgroundTimer } from "./background";

class FeedRefreshTimer implements IBackgroundTimer {
    public start(instantExecute: boolean = true): void {
        try {
            alarmBackgroundTimer.start(instantExecute);
        } catch {
            intervalBackgroundTimer.start(instantExecute);
        }
    }

    public stop(): void {
        intervalBackgroundTimer.stop();
        alarmBackgroundTimer.stop();
    }

    public restart(): void {
        this.stop();
        this.start(true);
    }
}

export const feedRefreshTimer: FeedRefreshTimer = new FeedRefreshTimer();
