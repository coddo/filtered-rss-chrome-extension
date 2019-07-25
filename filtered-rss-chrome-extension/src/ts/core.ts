import { DashboardItem, Feed, FeedSettings } from "./types";
import { dashboardDatabase } from "./database/dashboard.db";
import { fetchFeedsAsync } from "./fetcher";
import { feedsDatabase } from "./database/feeds.db";
import { convertFeedsToDashboardItems } from "./converters";
import { Notifications } from "./notifications";

class DashboardService {
    public async getDashboardAsync(): Promise<DashboardItem[]> {
        const items: DashboardItem[] = dashboardDatabase.get();

        // return the DB data if available
        if (items && items.length > 0) {
            return items;
        }

        return await this.refreshDashboardCache();
    }

    public async refreshDashboardCache(): Promise<DashboardItem[]> {
        // retrieve both data sets
        let dbItems: DashboardItem[] = dashboardDatabase.get();
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
            }
        }

        // save the new live data into the db
        dashboardDatabase.set(items);

        // notify the user about all the new items
        Notifications.notifyNewItems(items);

        // return the data
        return items;
    }

    private async getLiveDataAsync(): Promise<DashboardItem[]> {
        const configuredFeeds: FeedSettings[] = feedsDatabase.getAll();
        const liveFeeds: Feed[] = await fetchFeedsAsync(configuredFeeds);

        return convertFeedsToDashboardItems(liveFeeds);
    }
}

export const dashboardService: DashboardService = new DashboardService();
