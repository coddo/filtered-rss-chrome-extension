import { FeedSettings } from "./types";

export function getMockConfiguredFeeds(): FeedSettings[] {
    return [
        <FeedSettings>{
            name: "HorribleSubs 1080p feed",
            url: "http://www.horriblesubs.info/rss.php?res=1080"
        }
    ];
}