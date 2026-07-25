import { cacheLife } from "next/cache";
import type { SpotifyTrack } from "@/types/spotify";

const TOKEN_URL = "https://accounts.spotify.com/api/token";
const RECENTLY_PLAYED_URL =
  "https://api.spotify.com/v1/me/player/recently-played";

function getBasicAuth() {
  return Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");
}

async function getAccessToken(): Promise<string> {
  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${getBasicAuth()}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error_description ?? data.error);
  }

  return data.access_token;
}

type RecentlyPlayedResponse = {
  items: Array<{
    track: {
      name: string;
      artists: Array<{ name: string }>;
      album: { images: Array<{ url: string }> };
      external_urls: { spotify: string };
    };
  }>;
};

export async function getSpotifyData(): Promise<SpotifyTrack[] | null> {
  "use cache";
  cacheLife({ revalidate: 900 });

  try {
    const accessToken = await getAccessToken();

    const response = await fetch(`${RECENTLY_PLAYED_URL}?limit=5`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const data: RecentlyPlayedResponse = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch recently played tracks");
    }

    return data.items.map((item) => ({
      name: item.track.name,
      artist: item.track.artists.map((a) => a.name).join(", "),
      albumArt: item.track.album.images[0]?.url ?? null,
      url: item.track.external_urls.spotify,
    }));
  } catch (e) {
    console.error(e);
    return null;
  }
}
