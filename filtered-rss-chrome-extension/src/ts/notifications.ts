import { DashboardItem } from "./types";
import { UserSettings, userSettingsDatabase } from "./database/user.db";
import { dashboardDatabase } from "./database/dashboard.db";

export class Notifications {
    public static notifyNewItems(items: DashboardItem[]): void {
        // check API lelvel permissions
        if (Notification.permission !== "granted") {
            return;
        }

        const userSettings: UserSettings = userSettingsDatabase.get();

        // check user settings permissions
        if (!userSettings.notificationPopup) {
            return;
        }

        const newItems: DashboardItem[] = items.filter((i: DashboardItem) => i.isNew);

        // If there is only one item, create a notification just for it, otherwise create a generic notification
        if (newItems.length === 1) {
            const item: DashboardItem = newItems[0];
            Notifications.createNotification(
                item.id,
                item.title,
                item.feedName,
                new Date(item.date).getTime(),
                userSettings.notificationSound,
                true,
            );
            return;
        } else if (newItems.length > 1) {
            Notifications.createNotification(
                "no_id",
                "New updates in your feeds",
                "Multiple feeds",
                Date.now(),
                userSettings.notificationSound,
                false,
            )
        }
    }

    public static initialize(): void {
        if (Notification.permission === "default") {
            Notification.requestPermission();
        }
    }

    private static createNotification(id: string, title: string, feedName: string, time: number,
        // tslint:disable-next-line: align
        useSound: boolean, registerCallbacks: boolean): void {
        const config: NotificationOptions = {
            body: feedName,
            renotify: true,
            silent: !useSound,
            tag: id,
            timestamp: time,
        } as NotificationOptions;

        try {
            config.icon = chrome.extension.getURL("favicon.png");
        } catch {
            // nothing to do here, we're on localhost
        }

        const notif: Notification = new Notification(title, config);

        if (registerCallbacks) {
            notif.onclick = notif.onclose = Notifications.notificationClickedOrClosed;
        }
    }

    private static notificationClickedOrClosed(event: Event): void {
        dashboardDatabase.markAsNotNew((event.target as Notification).tag);
    }
}
