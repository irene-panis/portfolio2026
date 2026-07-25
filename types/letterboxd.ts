export interface LetterboxdMovie {
  title: string;
  slug: string;
  year: number;
  myRating: number;
  poster: string;
}

export interface LetterboxdData {
  username: string;
  profileUrl: string;
  movies: LetterboxdMovie[];
}