interface BlogPost {
  title: string;
  date: string;
  tags?: string[];
  slug: string;
}

export const LIST_OF_BLOG_POSTS: BlogPost[] = [
  {
    title: 'Placeholder Blog Post',
    date: '13 Jul. 2026',
    tags: ['markdown', 'test'],
    slug: 'test',
  },
];