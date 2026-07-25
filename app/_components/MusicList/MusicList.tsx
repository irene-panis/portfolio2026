import { getSpotifyData } from "@/lib/spotify";
import ShelfCover from "@/app/_components/ShelfCover";

const MusicList = async () => {
  const tracks = await getSpotifyData();

  if (!tracks?.length) return null;

  return (
    <div>
      <h2 className="text-muted uppercase font-semibold tracking-wider border-b-1 border-accent mb-4">
        Music
      </h2>
      <div className="flex gap-3">
        {tracks.map((track) => (
          <a
            key={`${track.name}-${track.url}`}
            href={track.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex min-w-0 flex-1 flex-col items-center gap-2"
          >
            <div className="relative w-full">
              <ShelfCover
                imageUrl={track.albumArt}
                alt={`${track.name} by ${track.artist}`}
                fallbackText={`${track.name} by ${track.artist}`}
                aspectRatio="square"
              />
            </div>
            <span className="text-xs text-muted line-clamp-3">{track.name} - {track.artist}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MusicList;