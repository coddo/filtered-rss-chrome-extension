import { FilterTarget, FilterAction } from "./filters";
import { generateGuid } from "./utils";

// types used for parsing RSS feed data
export class FeedItem {
    public title!: string;
    public link!: string;
    public description!: string;
    public guid!: string;
    public pubDate!: Date;
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

export class FeedItemFilter {
    public target: string = FilterTarget.Unknown;
    public action: string = FilterAction.Unknown;
    public value: string = "";
}

export class FeedSettings {
    public id: string;
    public name!: string;
    public url!: string;

    public filters: FeedItemFilter[] = [];

    constructor() {
        this.id = generateGuid();
    }
}

// view models
export class DashboardItem {
    // data fields
    public id: string;
    public title!: string;
    public link!: string;
    public date!: string;
    public feedName!: string;

    // configuration fields
    public isNew: boolean = false;
    public isNotified: boolean = false;

    constructor() {
        this.id = generateGuid();
    }
}
