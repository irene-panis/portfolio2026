import { LIST_OF_BLOG_POSTS, BlogPost } from "./_helpers";

const BlogList = () => {
  return (
    <div>
      <h2 className="text-muted uppercase font-semibold tracking-wider border-b-1 border-accent mb-4">Blog</h2>
      <div className="flex flex-col gap-6">
        {LIST_OF_BLOG_POSTS.map((post: BlogPost) => (
          <a href={`blog/${post.slug}`} key={post.title} className="hover:bg-accent/15 transition duration-100 ease-in-out">
            <div className="flex w-full justify-between mb-1">
              <span>{post.title}</span>
              <span className="text-sm uppercase text-muted">{post.date}</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {(post.tags ?? []).map((tag: string) => (
                <span
                  key={`${post.slug}-${tag}`}
                  className="text-xs bg-accent uppercase rounded-sm px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default BlogList;
