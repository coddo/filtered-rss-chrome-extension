import { FilterTarget, FilterAction } from "./filters";

// types used for parsing RSS feed data
export class FeedItem {
    public title!: string;
    public link!: string;
    public description!: string;
    public guid!: string;
    public pubDate!: Date;
}

export class FeedItemFilter {
    public target: string = FilterTarget.Unknown;
    public action: string = FilterAction.Unknown;
    public value: string = "";
}

export class FeedSettings {
    public name!: string;
    public url!: string;

    public filters: FeedItemFilter[] = [];
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
