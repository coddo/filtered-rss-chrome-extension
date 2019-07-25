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

        // create the notifications for all the new and unnotified items
        const newItems: DashboardItem[] = items.filter((i: DashboardItem) => i.isNew && !i.isNotified);
        Notifications.createNotifications(newItems, userSettings);

        // mark the new notifications as notified to user
        dashboardDatabase.markAsNotified(newItems.map((item: DashboardItem) => item.id));
    }

    public static initialize(): void {
        if (Notification.permission === "default") {
            Notification.requestPermission();
        }
    }

    private static createNotifications(items: DashboardItem[], userSettings: UserSettings): void {
        // create specific notification if there is only one new item
        // create a generic notification for multiple items
        if (items.length === 1) {
            const item: DashboardItem = items[0];

            Notifications.createNotification(
                item.id,
                item.title,
                item.feedName,
                new Date(item.date).getTime(),
                userSettings.notificationSound,
                true,
            );
            return;
        } else if (items.length > 1) {
            Notifications.createNotification(
                "no_id",
                "New updates in your feeds",
                "Multiple feeds",
                Date.now(),
                userSettings.notificationSound,
                false,
            );
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
            // configuration specific to the chrome API, which works only when deployed
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
