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

    static Equals: string = "Equals";
    static NotEquals: string = "NotEquals";

    static Contains: string = "Contains";
    static NotContains: string = "NotContains";

    static StartWith: string = "StartWith";
    static NotStartsWith: string = "NotStartsWith";

    static EndsWith: string = "EndsWith";
    static NotEndsWith: string = "NotEndsWith";

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
            return (target: string, filterValue: string) => target === filterValue;
        case FilterAction.NotEquals:
            return (target: string, filterValue: string) => target !== filterValue;
        case FilterAction.Contains:
            return (target: string, filterValue: string) => target.includes(filterValue);
        case FilterAction.NotContains:
            return (target: string, filterValue: string) => !target.includes(filterValue);
        case FilterAction.StartWith:
            return (target: string, filterValue: string) => target.startsWith(filterValue);
        case FilterAction.NotStartsWith:
            return (target: string, filterValue: string) => !target.startsWith(filterValue);
        case FilterAction.EndsWith:
            return (target: string, filterValue: string) => target.endsWith(filterValue);
        case FilterAction.NotEndsWith:
            return (target: string, filterValue: string) => !target.endsWith(filterValue);
        default:
            return () => false;
    }
}
