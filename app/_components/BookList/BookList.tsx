import { getGoodreadsData } from "@/lib/goodreads";
import ShelfCover from "@/app/_components/ShelfCover";

const BookList = async () => {
  const books = await getGoodreadsData();

  if (!books?.length) {
    return null;
  }

  return (
    <div>
      <h2 className="text-muted uppercase font-semibold tracking-wider border-b-1 border-accent mb-4">
        Books
      </h2>
      <div className="flex gap-3">
        {books.map((book) => (
          <div
            key={`${book.title}-${book.author}`}
            className="group relative flex min-w-0 flex-1 flex-col items-center gap-2"
          >
            <div className="relative w-full">
              <ShelfCover
                imageUrl={book.cover}
                alt={`${book.title} by ${book.author}`}
                fallbackText={`${book.title} by ${book.author}`}
              />
              <div
                role="tooltip"
                className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity duration-150 group-hover:opacity-100"
              >
                {book.title} by {book.author}
              </div>
            </div>
            <span className="text-sm text-muted">
              {book.rating != null ? `${book.rating}/5` : "—"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
