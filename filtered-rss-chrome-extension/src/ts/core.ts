import { DashboardItem, Feed, FeedSettings } from "./types";
import { dashboardDatabase } from "./database/dashboard.db";
import { fetchFeedsAsync } from "./fetcher";
import { feedsDatabase } from "./database/feeds.db";
import { convertFeedsToDashboardItems } from "./converters";
import { Notifications } from "./notifications";

class CoreService {
    public async refreshDashboardCache(): Promise<DashboardItem[]> {
        // retrieve both data sets
        let dbItems: DashboardItem[] = dashboardDatabase.data;
        let items: DashboardItem[] = await this.getLiveDataAsync();

        // normalize the data asets
        if (!dbItems) {
            dbItems = [];
        }

        if (!items) {
            items = [];
        }

        // Mark live items that are not found in the db as new
        for (const item of items) {
            const dbItem: DashboardItem | undefined = dbItems.find((i: DashboardItem) => i.title === item.title);

            if (!dbItem) {
                item.isNew = true;
            } else {
                item.id = dbItem.id;
                item.isNew = dbItem.isNew;
                item.isNotified = dbItem.isNotified;
            }
        }

        // save the new live data into the db
        dashboardDatabase.data = items;

        // notify the user about all the new items
        const notifiedItems = Notifications.notifyNewItems(items, this.notificationClickedCallback);
        if (notifiedItems.length > 0) {
            // mark the new notifications as notified to user
            dashboardDatabase.markAsNotified(notifiedItems.map((item: DashboardItem) => item.id));
        }

        // return the data
        return items;
    }

    public openItem(item: DashboardItem): void {
        dashboardDatabase.markAsNotNew(item.id);
        window.open(item.link);
    }

    private async getLiveDataAsync(): Promise<DashboardItem[]> {
        const liveFeeds: Feed[] = await fetchFeedsAsync(feedsDatabase.data);

        return convertFeedsToDashboardItems(liveFeeds);
    }

    private notificationClickedCallback = (event: Event): void => {
        event.preventDefault();
        const item: DashboardItem | undefined = dashboardDatabase.get((event.target as Notification).tag);

        if (!item) {
            return;
        }

        this.openItem(item);
    }
}

export const coreService: CoreService = new CoreService();
