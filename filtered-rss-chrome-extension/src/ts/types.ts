// types used for parsing RSS feed data
export class FeedItem {
    public title!: string;
    public link!: string;
    public description!: string;
    public guid!: string;
    public pubDate!: Date;
}

export class FeedSettings {
    public name!: string;
    public url!: string;

    public filters: ((item: FeedItem) => boolean)[] = [];
}

export class FeedChannel {
    public title!: string;
    public link!: string;
    public description!: string;

    public items: FeedItem[] = [];
}

export class Feed {
    public channel!: FeedChannel;
    public settings!: FeedSettings;
}

// view models
export class DashboardItemViewModel {
    public title!: string;
    public link!: string;
    public date!: string;
    public feedName!: string;
}