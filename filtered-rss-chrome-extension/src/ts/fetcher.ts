import { FeedSettings, Feed, FeedChannel, FeedItem } from "./types";

const CorsBackend: string = "https://vzir4xjww6.execute-api.eu-west-1.amazonaws.com/live/Fi-RSS-Reverse-Proxy";

export async function fetchFeedsAsync(configuredFeeds: FeedSettings[]): Promise<Feed[]> {
    const feeds: Feed[] = [];

    for (const configuredFeed of configuredFeeds) {
        const feed: Feed | null = await fetchFeedDataAsync(configuredFeed);

        if (feed !== null) {
            feeds.push(feed);
        }
    }

    return feeds;
}

export async function fetchFeedDataAsync(configuredFeed: FeedSettings): Promise<Feed | null> {
    const encodedFeedUrl: string = encodeURIComponent(configuredFeed.url);
    const response: Response = await fetch(`${CorsBackend}?feed=${encodedFeedUrl}`);

    if (!response || response.status !== 200 || !response.body) {
        return null;
    }

    const documentResponse: any = await response.text();

    return parseFeed(documentResponse, configuredFeed);
}

function parseFeed(data: string, configuredFeed: FeedSettings): Feed {
    const feed: Feed = {
        channel: {
            description: "",
            items: [],
            link: "",
            title: "",
        } as FeedChannel,
        settings: configuredFeed,
    } as Feed;

    const parser: DOMParser = new DOMParser();
    const xmlDocument: Document = parser.parseFromString(data, "application/xml");

    const channelNodes: HTMLCollectionOf<Element> = xmlDocument.getElementsByTagName("channel");
    if (!channelNodes || channelNodes.length !== 1) {
        return feed;
    }

    channelNodes[0].childNodes.forEach((xmlFeedItem) => {
        switch (xmlFeedItem.nodeName) {
            case "title": {
                feed.channel.title = xmlFeedItem.textContent!;
                break;
            }
            case "description": {
                feed.channel.description = xmlFeedItem.textContent!;
                break;
            }
            case "link": {
                feed.channel.link = xmlFeedItem.textContent!;
                break;
            }
            case "item": {
                feed.channel.items.push(parseFeedItem(xmlFeedItem));
                break;
            }
        }
    });

    return feed;
}

function parseFeedItem(node: ChildNode): FeedItem {
    const feedItem: FeedItem = new FeedItem();

    node.childNodes.forEach((childNode) => {
        switch (childNode.nodeName) {
            case "title": {
                feedItem.title = childNode.textContent!;
                break;
            }
            case "description": {
                feedItem.description = childNode.textContent!;
                break;
            }
            case "link": {
                feedItem.link = childNode.textContent!;
                break;
            }
            case "guid": {
                feedItem.guid = childNode.textContent!;
                break;
            }
            case "pubDate": {
                feedItem.pubDate = new Date(childNode.textContent!);
                break;
            }
        }
    });

    return feedItem;
}
