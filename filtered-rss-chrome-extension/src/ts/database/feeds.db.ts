import { Feed, FeedSettings } from "../types";

// storage keys
const KEY_CONFIGURED_FEEDS: string = "configured-feeds";
const KEY_DASHBOARD_ITEMS: string = "dashboard-items";

// database class
class FeedsDatabase {
    public getConfiguredFeeds(): FeedSettings[] {
        const feedsValue: string | null = localStorage.getItem(KEY_CONFIGURED_FEEDS);

        return feedsValue === null ? [] : (JSON.parse(feedsValue) as FeedSettings[]);
    }

    public addConfigurationFeed(feed: FeedSettings): boolean {
        const feeds: FeedSettings[] = this.getConfiguredFeeds();

        if (feeds.find(f => f.name === feed.name)) {
            alert(`You already have a feed with this name: ${feed.name}`);
            return false;
        }

        if (feeds.find(f => f.url === feed.url)) {
            alert(`You already have a feed with this url: ${feed.url}`);
            return false;
        }

        // add the feed to the list
        feeds.push(feed);

        // persist the new array of feeds
        localStorage.setItem(KEY_CONFIGURED_FEEDS, JSON.stringify(feeds));

        return true;
    }
}

// data access layer singleton variable that is used everywhere
export const feedsDatabase: FeedsDatabase = new FeedsDatabase();
