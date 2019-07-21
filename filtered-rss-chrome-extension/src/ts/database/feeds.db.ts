import { Feed, FeedSettings } from "../types";

// storage keys
const KEY_CONFIGURED_FEEDS: string = "configured-feeds";
const KEY_DASHBOARD_ITEMS: string = "dashboard-items";

// database class
class FeedsDatabase {
    public getConfiguredFeeds(): FeedSettings[] {
        const feedsValue: string | null = localStorage.getItem(KEY_CONFIGURED_FEEDS);

        return feedsValue === null ? [] : JSON.parse(feedsValue) as FeedSettings[];
    }

    public updateConfiguredFeeds(feeds: FeedSettings[]): void {
        localStorage.setItem(KEY_CONFIGURED_FEEDS, JSON.stringify(feeds));
    }
}

// data access layer singleton variable that is used everywhere
export const feedsDatabase: FeedsDatabase = new FeedsDatabase();