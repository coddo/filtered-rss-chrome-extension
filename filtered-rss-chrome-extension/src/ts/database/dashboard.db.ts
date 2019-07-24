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

            dashboardItem.title = dashboardItemValue.title;
            dashboardItem.link = dashboardItemValue.link;
            dashboardItem.date = dashboardItemValue.date;
            dashboardItem.feedName = dashboardItemValue.feedName;
            dashboardItem.isNew = dashboardItemValue.isNew;

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
}

// data access layer singleton variable that is used everywhere
export const dashboardDatabase: DashboardDatabase = new DashboardDatabase();
