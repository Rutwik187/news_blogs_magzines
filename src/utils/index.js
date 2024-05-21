import { DateTime } from "luxon";
import { client } from "../client";

export async function fetchAllPostSlugs() {
  const query = `*[_type == "post"] {
    'slug': slug.current
  }`;
  const slugs = await client.fetch(query);
  return slugs.map((post) => post.slug);
}

export function generateSitemap(slugs) {
  const baseUrl = "https://www.https://theentrepreneurialchronicles.com";

  const urls = slugs
    .map((slug) => {
      return `
      <url>
        <loc>${baseUrl}/posts/${slug}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>
  `;
}

const slugify = function (text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};

const removeDuplicates = function (originalArray, prop) {
  var newArray = [];
  var lookupObject = {};

  for (var i in originalArray) {
    lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  for (i in lookupObject) {
    newArray.push(lookupObject[i]);
  }
  return newArray;
};

const SortingByDate = function (posts) {
  return posts.sort((post1, post2) => {
    const beforeDate = DateTime.fromFormat(post1.date, "LLL dd yyyy");
    const afterDate = DateTime.fromFormat(post2.date, "LLL dd yyyy");
    return afterDate - beforeDate;
  });
};

const dateFormate = function () {
  var day = new Date().getDate();
  var month = new Date().toLocaleString("en-US", { month: "long" });
  var year = new Date().getFullYear();

  var todayDate = day + " " + month + "," + " " + year;

  return todayDate;
};

export { slugify, removeDuplicates, SortingByDate, dateFormate };
