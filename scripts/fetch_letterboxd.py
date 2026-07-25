import json
from pathlib import Path

from letterboxdpy.movie import Movie
from letterboxdpy.user import User

LIMIT = 5
USERNAME = "irenesucks"
OUT_PATH = Path(__file__).resolve().parents[1] / "data" / "letterboxd.json"


def load_existing_data(path: Path) -> dict | None:
    if not path.exists():
        return None
    return json.loads(path.read_text(encoding="utf-8"))


def has_data_changed(new_payload: dict, existing: dict | None) -> bool:
    return new_payload != existing


def fetch_movies() -> list[dict]:
    user = User(USERNAME)
    diary = user.get_diary(page=1)
    entries = sorted(
        diary["entries"].values(), key=lambda e: e["date"], reverse=True
    )[:LIMIT]

    movies = []
    for entry in entries:
        movie = Movie(entry["slug"])
        movies.append(
            {
                "title": entry["name"],
                "slug": entry["slug"],
                "year": entry["release"],
                "myRating": entry["actions"]["rating"],
                "poster": movie.get_poster(),
            }
        )

    return movies


def main() -> None:
    payload = {
        "username": USERNAME,
        "profileUrl": f"https://letterboxd.com/{USERNAME}/",
        "movies": fetch_movies(),
    }

    existing = load_existing_data(OUT_PATH)
    if not has_data_changed(payload, existing):
        print(f"No changes detected; leaving {OUT_PATH} unchanged.")
        return

    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUT_PATH.write_text(json.dumps(payload, indent=2), encoding="utf-8")
    print(f"Updated {OUT_PATH}.")


if __name__ == "__main__":
    main()
