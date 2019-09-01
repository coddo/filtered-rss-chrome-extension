import { DashboardItem } from "./types";
import { UserSettings, userSettingsDatabase } from "./database/user-settings.db";

export class Notifications {
    public static createNotification(id: string, title: string, text: string, time: number,
        notificationClickedCallback?: (event: Event) => void): void {
        // check that the user has enabled notifications
        const userSettings: UserSettings = userSettingsDatabase.data;
        if (!userSettings.notificationPopup) {
            return;
        }

        const config: NotificationOptions = {
            body: text,
            renotify: true,
            silent: !userSettings.notificationSound,
            tag: id,
            timestamp: time,
        } as NotificationOptions;

        try {
            // configuration specific to the chrome API, which works only when deployed
            config.icon = chrome.extension.getURL("favicon.png");
        } catch {
            config.icon = "favicon.png";
        }

        const notif: Notification = new Notification(title, config);

        if (notificationClickedCallback) {
            notif.onclick = notificationClickedCallback;
        }
    }

    public static notifyNewItems(items: DashboardItem[], notificationClickedCallback: (event: Event) => void): DashboardItem[] {
        // check API lelvel permissions
        if (Notification.permission !== "granted") {
            return [];
        }

        // create the notifications for all the new and unnotified items
        const itemsToNotify: DashboardItem[] = items.filter((i: DashboardItem) => i.isNew && !i.isNotified);
        Notifications.createNotifications(itemsToNotify, notificationClickedCallback);

        return itemsToNotify;
    }

    public static requestPermission(): void {
        if (Notification.permission === "default") {
            Notification.requestPermission();
        }
    }

    private static createNotifications(items: DashboardItem[], notificationClickedCallback: (event: Event) => void): void {
        // create specific notification if there is only one new item
        // create a generic notification for multiple items
        if (items.length === 1) {
            const item: DashboardItem = items[0];

            Notifications.createNotification(
                item.id,
                item.title,
                item.feedName,
                new Date(item.date).getTime(),
                notificationClickedCallback,
            );
            return;
        } else if (items.length > 1) {
            Notifications.createNotification(
                "no_id",
                "New updates in your feeds",
                "Multiple feeds",
                Date.now()
            );
        }
    }
}
