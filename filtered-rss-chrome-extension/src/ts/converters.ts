import { Feed, DashboardItemViewModel } from "./types";

export function convertFeedsToDashboardItems(feeds: Feed[]): DashboardItemViewModel[] {
    const dashboardItems: DashboardItemViewModel[] = [];

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
                const dashboardItem: DashboardItemViewModel = new DashboardItemViewModel();
                dashboardItem.title = item.title;
                dashboardItem.link = item.link;
                dashboardItem.date = item.pubDate.toLocaleString();
                dashboardItem.feedName = feed.settings.name;

                dashboardItems.push(dashboardItem);
            }
        });
    });

    return dashboardItems.sort((a, b) => (a.date < b.date) ? 1 : -1);
}