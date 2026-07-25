import { Suspense } from "react";
import { cacheLife } from "next/cache";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getContentBySlug } from "@/lib/content";
import { Experience } from "@/types/experience";
import Link from "next/link";

export default function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense>
      <ExperiencePage params={params} />
    </Suspense>
  );
}

async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ExperienceArticle slug={slug} />;
}

async function ExperienceArticle({ slug }: { slug: string }) {
  "use cache";
  cacheLife("max");

  const work = getContentBySlug<Experience>("experience", slug);

  return (
    <article className="prose prose-lg dark:prose-invert text-base">
      <h1 className="mb-4">{work.frontmatter.title}</h1>

      <p className="mb-0">
        <span className="bold uppercase">Time: </span>
        {work.frontmatter.date}
      </p>

      <p className="mt-0">
        <span className="bold uppercase">Type: </span>
        {work.frontmatter.type}
      </p>

      <MDXRemote
        source={work.content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
      <Link
        href="/"
        className="hover:bg-white hover:text-background transition duration-200 ease-in-out italic"
      >
        ← Back to home
      </Link>
    </article>
  );
}
