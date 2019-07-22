import { FeedItem } from "./types";

export class FilterTarget {
    static Unknown: string = "Unknown";

    static Title: string = "Title";
    static Link: string = "Link";
    static Description: string = "Description";
    static Guid: string = "Guid";
    static PublishDate: string = "PublishDate";

    static get list(): string[] {
        return [
            FilterTarget.Unknown,
            FilterTarget.Title,
            FilterTarget.Link,
            FilterTarget.Description,
            FilterTarget.Guid,
            FilterTarget.PublishDate
        ];
    }
}

export class FilterAction {
    static Unknown: string = "Unknown";

    static Equals: string = "Is exactly";
    static NotEquals: string = "Is not exactly";

    static Contains: string = "Contains";
    static NotContains: string = "Does not contain";

    static StartWith: string = "Starts with";
    static NotStartsWith: string = "Does not start with";

    static EndsWith: string = "Ends with";
    static NotEndsWith: string = "Does not end with";

    static get list(): string[] {
        return [
            FilterAction.Unknown,
            FilterAction.Equals,
            FilterAction.NotEquals,
            FilterAction.Contains,
            FilterAction.NotContains,
            FilterAction.StartWith,
            FilterAction.NotStartsWith,
            FilterAction.EndsWith,
            FilterAction.NotEndsWith
        ];
    }
}

export function getFilterTargetValue(filterTarget: string, feedItem: FeedItem): string {
    switch (filterTarget) {
        case FilterTarget.Title:
            return feedItem.title;
        case FilterTarget.Link:
            return feedItem.link;
        case FilterTarget.Description:
            return feedItem.description;
        case FilterTarget.Guid:
            return feedItem.guid;
        case FilterTarget.PublishDate:
            return feedItem.pubDate.toLocaleString();
        default:
            return "";
    }
}

export function getFilterFunction(filterAction: string): (target: string, filterValue: string) => boolean {
    switch (filterAction) {
        case FilterAction.Equals:
            return (target: string, filterValue: string) => target.toLowerCase() === filterValue.toLowerCase();
        case FilterAction.NotEquals:
            return (target: string, filterValue: string) => target.toLowerCase() !== filterValue.toLowerCase();
        case FilterAction.Contains:
            return (target: string, filterValue: string) => target.toLowerCase().includes(filterValue.toLowerCase());
        case FilterAction.NotContains:
            return (target: string, filterValue: string) => !target.toLowerCase().includes(filterValue.toLowerCase());
        case FilterAction.StartWith:
            return (target: string, filterValue: string) => target.toLowerCase().startsWith(filterValue.toLowerCase());
        case FilterAction.NotStartsWith:
            return (target: string, filterValue: string) => !target.toLowerCase().startsWith(filterValue.toLowerCase());
        case FilterAction.EndsWith:
            return (target: string, filterValue: string) => target.toLowerCase().endsWith(filterValue.toLowerCase());
        case FilterAction.NotEndsWith:
            return (target: string, filterValue: string) => !target.toLowerCase().endsWith(filterValue.toLowerCase());
        default:
            return () => false;
    }
}
