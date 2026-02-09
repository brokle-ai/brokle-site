import BlogPage, { type BlogPostData } from '@/features/blog/blog-page';
import { getBlogPosts, getAllTags } from '@/lib/source';
import { getAuthor } from '@/data/authors';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Blog - Brokle',
  description:
    'Technical guides and updates from the Brokle team.',
  keywords: [
    'AI observability',
    'LLM tracing',
    'AI evaluation',
    'prompt management',
  ],
  alternates: {
    canonical: 'https://brokle.com/blog',
  },
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Brokle Blog',
            description:
              'Technical guides and updates from the Brokle team.',
            url: 'https://brokle.com/blog',
            publisher: {
              '@type': 'Organization',
              name: 'Brokle',
              url: 'https://brokle.com',
            },
          }),
        }}
      />
      <Suspense>
        <BlogPage posts={posts} tags={tags} />
      </Suspense>
    </>
  );
}
