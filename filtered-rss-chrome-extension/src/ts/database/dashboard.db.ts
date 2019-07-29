import { DashboardItem } from "../types";
import { Database } from "./database";

// database class
class DashboardDatabase extends Database<DashboardItem[]> {
    public constructor() {
        super("dashboard-items", new Array<DashboardItem>());
    }

    public markAsNotNew(id: string): void {
        const items: DashboardItem[] = this.data;

        for (const item of items) {
            if (item.id === id) {
                item.isNew = false;
                item.isNotified = true;
                break;
            }
        }

        this.data = items;
    }

    public markAsNotified(ids: string[]): void {
        const items: DashboardItem[] = this.data;

        for (const id of ids) {
            for (const item of items) {
                if (item.id === id) {
                    item.isNotified = true;
                    break;
                }
            }
        }

        this.data = items;
    }

    protected refreshStore(): void {
        // read data from the localstorage
        const dasboardItemsValue: string | null = localStorage.getItem(this.storageKey);
        if (!dasboardItemsValue) {
            return;
        }

        // clear the data and reconstruct it based on the local storage value
        this.store.data.length = 0;

        JSON.parse(dasboardItemsValue).forEach((dashboardItemValue: any) => {
            const dashboardItem: DashboardItem = new DashboardItem();

            dashboardItem.id = dashboardItemValue.id;
            dashboardItem.title = dashboardItemValue.title;
            dashboardItem.link = dashboardItemValue.link;
            dashboardItem.date = dashboardItemValue.date;
            dashboardItem.feedName = dashboardItemValue.feedName;
            dashboardItem.isNew = dashboardItemValue.isNew;
            dashboardItem.isNotified = dashboardItemValue.isNotified;

            this.store.data.push(dashboardItem);
        });
    }
}

// data access layer singleton variable that is used everywhere
export const dashboardDatabase: DashboardDatabase = new DashboardDatabase();
