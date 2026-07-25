import fs from "fs";
import path from "path";
import { LetterboxdData } from "@/types/letterboxd";

export function getLetterboxdData(): LetterboxdData {
  const file = path.join(process.cwd(), "data", "letterboxd.json");
  return JSON.parse(fs.readFileSync(file, "utf8")) as LetterboxdData;
}