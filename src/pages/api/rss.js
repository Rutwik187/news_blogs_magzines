import Parser from "rss-parser";

export default async function handler(req, res) {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL("https://insightssuccess.com/feed/");

    // Create the RSS feed content
    let rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>${feed.title}</title>
  <link>${feed.link}</link>
  <description>${feed.description}</description>
  ${feed.items
    .map(
      (item) => `
    <item>
      <title>${item.title}</title>
      <link>${item.link}</link>
      <pubDate>${item.pubDate}</pubDate>
      <description><![CDATA[${item.content}]]></description>
    </item>
  `
    )
    .join("")}
</channel>
</rss>`;

    // Set the appropriate headers
    res.setHeader("Content-Type", "application/rss+xml; charset=UTF-8");
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

    res.status(200).send(rssContent);
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    res.status(500).json({ error: "Error fetching RSS feed" });
  }
}
