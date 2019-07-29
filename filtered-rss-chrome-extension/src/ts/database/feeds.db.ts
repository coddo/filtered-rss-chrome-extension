import { FeedItemFilter, FeedSettings } from "../types";
import { Database } from "./database";

// database class
class FeedsDatabase extends Database<FeedSettings[]> {
    public constructor() {
        super("configured-feeds", new Array<FeedSettings>());
    }

    public get(id: string): FeedSettings | null {
        const feed: FeedSettings | undefined = this.data.find((f) => f.id === id);

        return feed ? feed : null;
    }

    public add(feed: FeedSettings): string | null {
        if (!feed) {
            return "No feed details provider to add to the database";
        }

        const feeds: FeedSettings[] = this.data;

        if (feeds.find((f) => f.name === feed.name)) {
            return "You already have a feed with this name";
        }

        if (feeds.find((f) => f.url === feed.url)) {
            return "You already have a feed with this url";
        }

        // add the feed to the list
        feeds.push(feed);

        // persist the new array of feeds
        this.data = feeds;

        // no error message to return
        return null;
    }

    public update(feed: FeedSettings): string | null {
        if (!feed) {
            return "No feed details provider to updated";
        }

        const feeds: FeedSettings[] = this.data;
        const feedIndex: number = feeds.findIndex((f) => f.id === feed.id);

        // check if the feed exists
        if (feedIndex < 0) {
            return "This feed is not yet persisted, so it cannot be updated";
        }

        // remove the old feed and add the new one
        feeds.splice(feedIndex, 1);
        feeds.push(feed);

        // persist the new array of feeds
        this.data = feeds;

        // no error message to return
        return null;
    }

    public delete(id: string): string | null {
        const feeds: FeedSettings[] = this.data;
        const feedIndex: number = feeds.findIndex((f) => f.id === id);

        if (feedIndex < 0) {
            return "This feed is not yet persisted, so it cannot be deleted";
        }

        // remove the feed from the list
        feeds.splice(feedIndex, 1);

        // persist the new array of feeds
        this.data = feeds;

        // no error message to return
        return null;
    }

    protected refreshStore(): void {
        const feedsValue: string | null = localStorage.getItem(this.storageKey);

        if (!feedsValue) {
            this.store.data = [];
            return;
        }

        // clear the data and reconstruct it based on the local storage value
        this.store.data = [];

        JSON.parse(feedsValue).forEach((feedValue: any) => {
            const feed: FeedSettings = new FeedSettings();

            feed.id = feedValue.id;
            feed.name = feedValue.name;
            feed.url = feedValue.url;
            feed.filters = [];

            feedValue.filters.forEach((filterValue: any) => {
                const filter: FeedItemFilter = new FeedItemFilter();
                filter.target = filterValue.target;
                filter.action = filterValue.action;
                filter.value = filterValue.value;

                feed.filters.push(filter);
            });

            this.store.data.push(feed);
        });
    }
}

// data access layer singleton variable that is used everywhere
export const feedsDatabase: FeedsDatabase = new FeedsDatabase();
