import Parser from "rss-parser";

const parser = new Parser();

export async function fetchAINews() {
  const feed = await parser.parseURL(process.env.RSS_FEED_URL);

  return feed.items.slice(0, 5).map((item) => ({
    title: item.title,
    link: item.link,
  }));
}
