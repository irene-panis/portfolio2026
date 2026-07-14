import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export function getAllContent<T extends { order?: number }>(type: string): (T & { slug: string })[] {
  const directory = path.join(contentDirectory, type);

  const files = fs.readdirSync(directory);

  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");

    const filePath = path.join(directory, file);
    const source = fs.readFileSync(filePath, "utf8");

    const { data } = matter(source);

    return {
      slug,
      ...data,
    } as T & { slug: string };
  })
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}


export function getContentBySlug<T>(
  type: string,
  slug: string
) {
  const filePath = path.join(
    contentDirectory,
    type,
    `${slug}.mdx`
  );

  const source = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(source);

  return {
    slug,
    frontmatter: data as T,
    content,
  };
}