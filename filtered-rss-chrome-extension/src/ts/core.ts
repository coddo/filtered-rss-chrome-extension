import { DashboardItem, Feed, FeedSettings } from "./types";
import { dashboardDatabase } from "./database/dashboard.db";
import { fetchFeedsAsync } from "./fetcher";
import { feedsDatabase } from "./database/feeds.db";
import { convertFeedsToDashboardItems } from "./converters";

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
        // retrieve live data
        const items: DashboardItem[] = await this.getLiveDataAsync();

        // save the new live data into the db
        dashboardDatabase.set(items);

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
