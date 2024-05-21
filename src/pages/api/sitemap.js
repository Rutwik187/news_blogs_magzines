import { fetchAllPostSlugs, generateSitemap } from "../../utils";

export default async function handler(req, res) {
  const slugs = await fetchAllPostSlugs();
  const sitemap = generateSitemap(slugs);

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(sitemap);
}
