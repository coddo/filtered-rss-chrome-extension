import { dashboardDatabase } from "./database/dashboard.db";
import { DashboardItem } from "./types";

export default class Badge {
    public static updatedBadge(): void {
        let newItemsCount: number = 0;

        if (dashboardDatabase.data && dashboardDatabase.data.length > 0) {
            newItemsCount = dashboardDatabase.data.filter((item: DashboardItem) => item.isNew).length;
        }

        try {
            if (newItemsCount > 0) {
                chrome.browserAction.setBadgeText({ text: newItemsCount.toString() } as chrome.browserAction.BadgeTextDetails);
            } else {
                chrome.browserAction.setBadgeText({ text: "" } as chrome.browserAction.BadgeTextDetails);
            }
        } catch {
            // thrown only when not in Chrome context
        }
    }
}