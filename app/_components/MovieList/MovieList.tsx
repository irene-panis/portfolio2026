import { getLetterboxdRssData } from "@/lib/letterboxdRss";
import ShelfCover from "@/app/_components/ShelfCover";

const MovieList = async () => {
  const movies = await getLetterboxdRssData();

  if (!movies?.length) {
    return null;
  }

  return (
    <div>
      <h2 className="text-muted uppercase font-semibold tracking-wider border-b-1 border-accent mb-4">
        Movies
      </h2>
      <div className="flex gap-3">
        {movies.map((movie) => (
          <div
            key={movie.slug}
            className="group relative flex min-w-0 flex-1 flex-col items-center gap-2"
          >
            <div className="relative w-full">
              <ShelfCover
                imageUrl={movie.poster}
                alt={`${movie.title} (${movie.year})`}
                fallbackText={`${movie.title} (${movie.year})`}
              />
              <div
                role="tooltip"
                className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity duration-150 group-hover:opacity-100"
              >
                {movie.title} ({movie.year})
              </div>
            </div>
            <span className="text-sm text-muted">{movie.myRating}/5</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;