import { Feed, DashboardItem, FeedItem, FeedItemFilter } from "./types";
import { getFilterTargetValue, getFilterFunction } from "./filters";

export function convertFeedsToDashboardItems(feeds: Feed[]): DashboardItem[] {
    const dashboardItems: DashboardItem[] = [];

    feeds.forEach(feed => {
        if (!feed.channel || !feed.channel.items || feed.channel.items.length === 0) {
            return;
        }

        feed.channel.items.forEach(item => {
            let isAcceptable: boolean = true;

            if (feed.settings.filters && feed.settings.filters.length > 0) {
                isAcceptable = false;

                for (const filter of feed.settings.filters) {
                    if (isFeedItemValid(item, filter)) {
                        isAcceptable = true;
                        break;
                    }
                }
            }

            if (isAcceptable) {
                const dashboardItem: DashboardItem = new DashboardItem();
                dashboardItem.title = item.title;
                dashboardItem.link = item.link;
                dashboardItem.date = item.pubDate.toLocaleString();
                dashboardItem.feedName = feed.settings.name;

                dashboardItems.push(dashboardItem);
            }
        });
    });

    return dashboardItems.sort((a, b) => (a.date < b.date ? 1 : -1));
}

function isFeedItemValid(item: FeedItem, filter: FeedItemFilter): boolean {
    const filterTarget: string = getFilterTargetValue(filter.target, item);
    const filterFunction: (target: string, filterValue: string) => boolean = getFilterFunction(filter.action);

    return filterFunction(filterTarget, filter.value);
}
