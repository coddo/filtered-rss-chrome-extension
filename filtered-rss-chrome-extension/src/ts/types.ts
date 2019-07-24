import { FilterTarget, FilterAction } from "./filters";

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
export class DashboardItemViewModel {
    public title!: string;
    public link!: string;
    public date!: string;
    public feedName!: string;
    public isNew: boolean = false;
}

// helper functions
function generateGuid(): string {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c: string) => {
        // tslint:disable-next-line:no-bitwise
        const r: number = (Math.random() * 16) | 0;
        // tslint:disable-next-line:no-bitwise
        const v: number = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
