const baseUrl = 'https://brokle.com';

// Placeholder blog posts - replace with actual content source when available
const blogPosts = [
  {
    title: 'Introducing Brokle: Open-Source LLM Observability',
    description:
      "Today we're excited to announce Brokle, the open-source platform for LLM observability. Learn why we built it and how it can help your team.",
    author: 'Brokle Team',
    date: '2025-11-15',
    slug: 'introducing-brokle',
  },
  {
    title: 'A Complete Guide to LLM Tracing',
    description:
      'Learn how to implement comprehensive tracing for your LLM applications, from simple chains to complex agents.',
    author: 'Engineering Team',
    date: '2025-11-10',
    slug: 'complete-guide-llm-tracing',
  },
  {
    title: 'Best Practices for Prompt Management',
    description:
      'How to version, test, and deploy prompts effectively. Lessons learned from production deployments.',
    author: 'Engineering Team',
    date: '2025-11-05',
    slug: 'best-practices-prompt-management',
  },
  {
    title: 'Evaluating LLM Output Quality at Scale',
    description:
      'Building automated evaluation pipelines with LLM-as-judge and custom evaluators.',
    author: 'Engineering Team',
    date: '2025-10-28',
    slug: 'evaluating-llm-output-quality',
  },
  {
    title: 'Reducing LLM Costs by 50%: A Case Study',
    description:
      'How one team used Brokle analytics to identify cost optimization opportunities and cut their AI spend in half.',
    author: 'Customer Success',
    date: '2025-10-20',
    slug: 'reducing-llm-costs-case-study',
  },
  {
    title: 'OpenTelemetry for LLM Applications',
    description:
      'Why we chose OpenTelemetry as our tracing foundation and how you can leverage it.',
    author: 'Engineering Team',
    date: '2025-10-15',
    slug: 'opentelemetry-llm-applications',
  },
  {
    title: 'Self-Hosting Brokle: Complete Setup Guide',
    description:
      'Step-by-step guide to deploying Brokle on your own infrastructure with Docker and Kubernetes.',
    author: 'DevOps Team',
    date: '2025-10-08',
    slug: 'self-hosting-brokle-guide',
  },
];

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Brokle Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Insights, tutorials, and updates on AI observability from the Brokle team</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/blog/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/images/og-image.png</url>
      <title>Brokle Blog</title>
      <link>${baseUrl}/blog</link>
    </image>
    ${blogPosts
      .map(
        (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>hello@brokle.com (${escapeXml(post.author)})</author>
    </item>`
      )
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
