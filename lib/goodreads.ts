import { cacheLife } from "next/cache";
import type { GoodreadsBook } from "@/types/goodreads";

const API_URL = "https://api.piratereads.com";
const USER_ID = "41246573-irene";

type PirateReadsBook = {
  book_title: string;
  book_author: string;
  book_cover_large?: string;
  rating?: number | null;
};

export async function getGoodreadsData(): Promise<GoodreadsBook[] | null> {
  "use cache";
  cacheLife({ revalidate: 86400 });

  try {
    const res = await fetch(`${API_URL}/${USER_ID}/read`);
    if (!res.ok) {
      throw new Error("Failed to fetch Goodreads data");
    }
    const data = (await res.json()) as { books: PirateReadsBook[] };
    return data.books.slice(0, 5).map((book) => ({
      title: book.book_title,
      author: book.book_author,
      cover: book.book_cover_large ?? null,
      rating: book.rating ?? null,
    }));
  } catch (e) {
    console.error(e);
    return null;
  }
}