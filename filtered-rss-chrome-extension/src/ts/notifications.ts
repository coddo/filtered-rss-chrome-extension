import { DashboardItem } from "./types";
import { UserSettings, userSettingsDatabase } from "./database/user-settings.db";

export class Notifications {
    public static notifyNewItems(items: DashboardItem[],
        notificationClickedCallback: (event: Event) => void): DashboardItem[] {
        // check API lelvel permissions
        if (Notification.permission !== "granted") {
            return [];
        }

        const userSettings: UserSettings = userSettingsDatabase.data;

        // check user settings permissions
        if (!userSettings.notificationPopup) {
            return [];
        }

        // create the notifications for all the new and unnotified items
        const itemsToNotify: DashboardItem[] = items.filter((i: DashboardItem) => i.isNew && !i.isNotified);
        Notifications.createNotifications(itemsToNotify, userSettings, notificationClickedCallback);

        return itemsToNotify;
    }

    public static requestPermission(): void {
        if (Notification.permission === "default") {
            Notification.requestPermission();
        }
    }

    private static createNotifications(items: DashboardItem[], userSettings: UserSettings,
        notificationClickedCallback: (event: Event) => void): void {
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
                notificationClickedCallback,
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
                notificationClickedCallback,
            );
        }
    }

    private static createNotification(id: string, title: string, feedName: string, time: number, useSound: boolean,
        registerCallbacks: boolean, notificationClickedCallback: (event: Event) => void): void {
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
            notif.onclick = notificationClickedCallback;
        }
    }
}
