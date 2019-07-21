import { Feed, DashboardItem } from "./types";

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

                feed.settings.filters.forEach(filter => {
                    if (filter(item)) {
                        isAcceptable = true;
                    }
                });
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

    const sortedItems: DashboardItem[] = dashboardItems.sort((a, b) => (a.date < b.date) ? 1 : -1);
    console.log(feeds);

    return sortedItems;
}