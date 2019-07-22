import { FeedSettings, FeedItemFilter } from "../types";

// storage keys
const KEY_CONFIGURED_FEEDS: string = "configured-feeds";
const KEY_DASHBOARD_ITEMS: string = "dashboard-items";

// database class
class FeedsDatabase {
    public getAll(): FeedSettings[] {
        const feedsValue: string | null = localStorage.getItem(KEY_CONFIGURED_FEEDS);

        if (!feedsValue) {
            return [];
        }

        const feeds: FeedSettings[] = [];

        JSON.parse(feedsValue).forEach((feedValue: any) => {
            const feed: FeedSettings = new FeedSettings();

            feed.id = feedValue.id;
            feed.name = feedValue.name;
            feed.url = feedValue.url;
            feed.filters = [];

            feedValue.filters.forEach((filterValue: any) => {
                const filter: FeedItemFilter = new FeedItemFilter();
                filter.target = filterValue.target;
                filter.action = filterValue.actions;
                filter.value = filterValue.value;

                feed.filters.push(filter);
            });

            feeds.push(feed);
        });

        return feeds;
    }

    public get(id: string): FeedSettings | null {
        const feeds: FeedSettings[] = this.getAll();
        const feed: FeedSettings | undefined = feeds.find(feed => feed.id === id);

        return feed ? feed : null;
    }

    public add(feed: FeedSettings): string | null {
        if (!feed) {
            return "No feed details provider to add to the database";
        }

        const feeds: FeedSettings[] = this.getAll();

        if (feeds.find(f => f.name === feed.name)) {
            return "You already have a feed with this name";
        }

        if (feeds.find(f => f.url === feed.url)) {
            return "You already have a feed with this url";
        }

        // add the feed to the list
        feeds.push(feed);

        // persist the new array of feeds
        localStorage.setItem(KEY_CONFIGURED_FEEDS, JSON.stringify(feeds));

        // no error message to return
        return null;
    }

    public update(feed: FeedSettings): string | null {
        if (!feed) {
            return "No feed details provider to updated";
        }

        let feeds: FeedSettings[] = this.getAll();
        const feedIndex: number = feeds.findIndex(f => f.id === feed.id);

        // check if the feed exists
        if (feedIndex < 0) {
            return "This feed is not yet persisted, so it cannot be updated";
        }

        // remove the old feed and add the new one
        feeds.splice(feedIndex, 1);
        feeds.push(feed);

        // persist the new array of feeds
        localStorage.setItem(KEY_CONFIGURED_FEEDS, JSON.stringify(feeds));

        // no error message to return
        return null;
    }

    public delete(id: string): string | null {
        const feeds: FeedSettings[] = this.getAll();
        const feedIndex: number = feeds.findIndex(f => f.id === id);

        if (feedIndex < 0) {
            return "This feed is not yet persisted, so it cannot be deleted";
        }

        // remove the feed from the list
        feeds.splice(feedIndex, 1);

        // persist the new array of feeds
        localStorage.setItem(KEY_CONFIGURED_FEEDS, JSON.stringify(feeds));

        // no error message to return
        return null;
    }
}

// data access layer singleton variable that is used everywhere
export const feedsDatabase: FeedsDatabase = new FeedsDatabase();
