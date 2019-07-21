import { FeedSettings, Feed, FeedChannel, FeedItem } from "./types";

const CorsBackend: string = "https://cors-anywhere.herokuapp.com";

export async function fetchFeedsAsync(configuredFeeds: FeedSettings[]): Promise<Feed[]> {
    const feeds: Feed[] = [];

    for (let i: number = 0; i < configuredFeeds.length; i++) {
        const feed: Feed | null = await fetchFeedDataAsync(configuredFeeds[i]);

        if (feed !== null) {
            feeds.push(feed);
        }
    }

    return feeds;
}

export async function fetchFeedDataAsync(configuredFeed: FeedSettings): Promise<Feed | null> {
    const response: Response = await fetch(`${CorsBackend}/${configuredFeed.url}`);

    if (!response || response.status !== 200 || !response.body) {
        return null;
    }

    var documentResponse: any = await response.text();

    return parseFeed(documentResponse, configuredFeed);
}

function parseFeed(data: string, configuredFeed: FeedSettings): Feed {
    const feed: Feed = <Feed>{
        settings: configuredFeed,
        channel: <FeedChannel>{
            items: [],
            title: "",
            link: "",
            description: ""
        }
    };

    const parser: DOMParser = new DOMParser();
    var xmlDocument: Document = parser.parseFromString(data, "application/xml");

    const xmlFeedItems: NodeListOf<ChildNode> = xmlDocument.firstChild!.firstChild!.childNodes;

    xmlFeedItems.forEach(xmlFeedItem => {
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

    node.childNodes.forEach(childNode => {
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
