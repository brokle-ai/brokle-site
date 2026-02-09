import { getBlogPosts } from '@/lib/source';
import { getAuthorNames } from '@/data/authors';

const baseUrl = 'https://brokle.com';

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const posts = getBlogPosts();

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Brokle Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Technical guides and updates from the Brokle team</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/blog/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/images/og-image.png</url>
      <title>Brokle Blog</title>
      <link>${baseUrl}/blog</link>
    </image>
    ${posts
      .map((post) => {
        const authorNames = getAuthorNames(post.data.author);
        return `
    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${baseUrl}${post.url}</link>
      <guid isPermaLink="true">${baseUrl}${post.url}</guid>
      <description>${escapeXml(post.data.description ?? '')}</description>
      <pubDate>${new Date(post.data.date).toUTCString()}</pubDate>
      <author>hello@brokle.com (${escapeXml(authorNames)})</author>${post.data.tags.map((tag: string) => `
      <category>${escapeXml(tag)}</category>`).join('')}
    </item>`;
      })
      .join('')}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
