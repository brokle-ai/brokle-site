import { docs, blogPosts } from 'fumadocs-mdx:collections/server';
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server';
import { type InferPageType, loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

export const blog = loader({
  baseUrl: '/blog',
  source: toFumadocsSource(blogPosts, []),
});

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: `/og/docs/${segments.join('/')}`,
  };
}

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title} (${page.url})

${processed}`;
}

/** Get all published blog posts sorted by date (newest first) */
export function getBlogPosts() {
  return blog
    .getPages()
    .filter((post) => !post.data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
    );
}

/** Get unique tags from all published posts */
export function getAllTags(): string[] {
  const tags = new Set<string>();
  getBlogPosts().forEach((post) =>
    post.data.tags.forEach((t: string) => tags.add(t)),
  );
  return Array.from(tags).sort();
}
