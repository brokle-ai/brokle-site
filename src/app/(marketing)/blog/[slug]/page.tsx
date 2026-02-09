import { blog, getBlogPosts } from '@/lib/source';
import { getMDXComponents } from '@/mdx-components';
import BlogPostPage from '@/features/blog/blog-post-page';
import { getAuthor } from '@/data/authors';
import { notFound } from 'next/navigation';
import readingTime from 'reading-time';
import type { Metadata } from 'next';
import fs from 'node:fs';
import path from 'node:path';

const baseUrl = 'https://brokle.com';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = blog.getPage([slug]);
  if (!page || page.data.draft) notFound();

  const MDX = page.data.body;

  // Read raw MDX file for accurate reading time
  const mdxPath = path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`);
  const rawContent = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, 'utf-8')
    : (page.data.description ?? '');
  const stats = readingTime(rawContent, { wordsPerMinute: 200 });

  // Find related posts by matching tags
  const allPosts = getBlogPosts();
  const related = allPosts
    .filter(
      (p) =>
        p.url !== page.url &&
        p.data.tags.some((t: string) => page.data.tags.includes(t)),
    )
    .slice(0, 3)
    .map((p) => ({
      title: p.data.title,
      description: p.data.description,
      url: p.url,
      date: String(p.data.date),
    }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: page.data.title,
            description: page.data.description,
            datePublished: page.data.date,
            author: page.data.author.map((id: string) => ({
              '@type': 'Person',
              name: getAuthor(id).name,
            })),
            publisher: {
              '@type': 'Organization',
              name: 'Brokle',
              url: baseUrl,
            },
            url: `${baseUrl}${page.url}`,
            ...(page.data.image && {
              image: `${baseUrl}${page.data.image}`,
            }),
          }),
        }}
      />
      <BlogPostPage
        title={page.data.title}
        description={page.data.description}
        authorIds={page.data.author}
        date={String(page.data.date)}
        readingTime={stats.text}
        tags={page.data.tags}
        relatedPosts={related}
      >
        <MDX components={getMDXComponents()} />
      </BlogPostPage>
    </>
  );
}

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({
    slug: post.slugs[0],
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = blog.getPage([slug]);
  if (!page || page.data.draft) notFound();

  return {
    title: `${page.data.title} - Brokle Blog`,
    description: page.data.description,
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      type: 'article',
      publishedTime: String(page.data.date),
      authors: page.data.author.map((id: string) => getAuthor(id).name),
      tags: page.data.tags,
      url: `${baseUrl}${page.url}`,
      siteName: 'Brokle',
      ...(page.data.image && {
        images: [{ url: `${baseUrl}${page.data.image}` }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: page.data.title,
      description: page.data.description,
      ...(page.data.image && {
        images: [`${baseUrl}${page.data.image}`],
      }),
    },
  };
}
