import { cacheLife } from "next/cache";
import Parser from "rss-parser";
import type { LetterboxdMovie } from "@/types/letterboxd";

const FEED_URL = "https://letterboxd.com/irenesucks/rss/";
const LIMIT = 5;

type LetterboxdItem = {
  link?: string;
  filmTitle?: string;
  filmYear?: string;
  memberRating?: string;
  watchedDate?: string;
  content?: string;
};

const parser = new Parser<Record<string, never>, LetterboxdItem>({
  headers: { "User-Agent": "Mozilla/5.0" },
  customFields: {
    item: [
      ["letterboxd:filmTitle", "filmTitle"],
      ["letterboxd:filmYear", "filmYear"],
      ["letterboxd:memberRating", "memberRating"],
      ["letterboxd:watchedDate", "watchedDate"],
    ],
  },
});

export async function getLetterboxdRssData(): Promise<LetterboxdMovie[] | null> {
  "use cache";
  cacheLife({ revalidate: 86400 });

  try {
    const feed = await parser.parseURL(FEED_URL);

    return feed.items
      .filter((item) => item.filmTitle && item.memberRating) // skip lists / unrated
      .sort((a, b) => (b.watchedDate ?? "").localeCompare(a.watchedDate ?? ""))
      .slice(0, LIMIT)
      .map((item) => ({
        title: item.filmTitle!,
        slug: item.link?.replace(/\/$/, "").split("/").pop() ?? item.filmTitle!,
        year: Number(item.filmYear),
        myRating: Number(item.memberRating),
        poster: item.content?.match(/<img[^>]+src="([^"]+)"/)?.[1]?.split("?")[0] ?? null,
      }));
  } catch (e) {
    console.error(e);
    return null;
  }
}
