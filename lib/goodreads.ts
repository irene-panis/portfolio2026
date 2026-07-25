import { cacheLife } from "next/cache";
import GoodreadsShelf from "goodreads-bookshelf-api";
import type { GoodreadsBook } from "@/types/goodreads";

const myReadShelf = new GoodreadsShelf({
  username: "41246573-irene",
  shelf: "read",
});

export async function getGoodreadsData(): Promise<GoodreadsBook[] | null> {
  "use cache";
  cacheLife({ revalidate: 86400 });

  try {
    const data = (await myReadShelf.fetch()).slice(0, 5);
    return data.map((book) => ({
      title: book.title,
      author: book.author,
      cover: book.imageLink ?? null,
      rating: book.rating ?? null,
    }));
  } catch (e) {
    console.error(e);
    return null;
  }
}
