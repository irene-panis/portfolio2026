import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getContentBySlug } from "@/lib/content";
import { Experience } from "@/types/experience";

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const work = getContentBySlug<Experience>("experience", slug);

  return (
    <article className="prose prose-lg dark:prose-invert text-base">
      <h1 className="mb-4">{work.frontmatter.title}</h1>

      <p className="mb-0"><span className="bold uppercase">Time: </span>{work.frontmatter.date}</p>

      <p className="mt-0"><span className="bold uppercase">Type: </span>{work.frontmatter.type}</p>

      <MDXRemote
        source={work.content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </article>
  );
}