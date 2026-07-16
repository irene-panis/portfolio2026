import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getContentBySlug } from "@/lib/content";
import { BlogPost } from "@/types/blog";
import Link from "next/link";

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = getContentBySlug<BlogPost>("blog", slug);

  const tags = (blog.frontmatter.tags ?? []).join(', ');

  return (
    <article className="prose prose-lg dark:prose-invert text-base">
      <h1 className="mb-4">#{blog.frontmatter.order}: {blog.frontmatter.title}</h1>

      <p className="mb-0"><span className="bold uppercase">Published: </span>{blog.frontmatter.date}</p>

      <p className="mt-0">
        <span className="bold uppercase">Tags: </span>
        {tags}
      </p>

      <MDXRemote
        source={blog.content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
      <Link href="/" className="hover:bg-white hover:text-background transition duration-200 ease-in-out italic">
        ← Back to home
      </Link>
    </article>
  );
}