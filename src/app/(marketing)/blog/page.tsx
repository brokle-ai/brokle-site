import BlogPage, { type BlogPostData } from '@/features/blog/blog-page';
import { getBlogPosts, getAllTags } from '@/lib/source';
import { getAuthor } from '@/data/authors';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Blog - Brokle',
  description:
    'Technical guides and updates from the Brokle team.',
  openGraph: {
    title: 'Blog - Brokle',
    description:
      'Technical guides and updates from the Brokle team.',
    url: 'https://brokle.com/blog',
    siteName: 'Brokle',
    type: 'website',
  },
};

export default function Blog() {
  const posts: BlogPostData[] = getBlogPosts().map((post) => ({
    title: post.data.title,
    description: post.data.description,
    authors: post.data.author.map((id: string) => getAuthor(id).name),
    date: String(post.data.date),
    tags: post.data.tags,
    url: post.url,
    image: post.data.image,
  }));

  const tags = getAllTags();

  return (
    <Suspense>
      <BlogPage posts={posts} tags={tags} />
    </Suspense>
  );
}
