import { DashboardItem } from "../types";

// storage keys
const KEY_DASHBOARD_ITEMS: string = "dashboard-items";

// database class
class DashboardDatabase {
    public get(): DashboardItem[] {
        const dasboardItemsValue: string | null = localStorage.getItem(KEY_DASHBOARD_ITEMS);

        if (!dasboardItemsValue) {
            return [];
        }

        const dashboardItems: DashboardItem[] = [];

        JSON.parse(dasboardItemsValue).forEach((dashboardItemValue: any) => {
            const dashboardItem: DashboardItem = new DashboardItem();

            dashboardItem.id = dashboardItemValue.id;
            dashboardItem.title = dashboardItemValue.title;
            dashboardItem.link = dashboardItemValue.link;
            dashboardItem.date = dashboardItemValue.date;
            dashboardItem.feedName = dashboardItemValue.feedName;
            dashboardItem.isNew = dashboardItemValue.isNew;
            dashboardItem.isNotified = dashboardItemValue.isNotified;

            dashboardItems.push(dashboardItem);
        });

        return dashboardItems;
    }

    public set(dashboardItems: DashboardItem[]): void {
        if (!dashboardItems) {
            dashboardItems = [];
        }

        localStorage.setItem(KEY_DASHBOARD_ITEMS, JSON.stringify(dashboardItems));
    }

    public markAsNotNew(id: string): void {
        const items: DashboardItem[] = this.get();

        for (const item of items) {
            if (item.id === id) {
                item.isNew = false;
                item.isNotified = true;
                break;
            }
        }

        this.set(items);
    }

    public markAsNotified(ids: string[]): void {
        const items: DashboardItem[] = this.get();

        for (const id of ids) {
            for (const item of items) {
                if (item.id === id) {
                    item.isNotified = true;
                    break;
                }
            }
        }

        this.set(items);
    }
}

// data access layer singleton variable that is used everywhere
export const dashboardDatabase: DashboardDatabase = new DashboardDatabase();
