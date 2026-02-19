import { source, getBlogPosts } from '@/lib/source';

export const revalidate = false;

const BASE_URL = 'https://brokle.com';

// Docs section definitions mirroring sidebar (meta.json order)
// Pages are assigned to sections by their top-level slug segment
const DOC_SECTIONS: { title: string; slugs: string[]; optional?: boolean }[] = [
  { title: 'Get Started', slugs: ['', 'quickstart', 'first-trace'] },
  { title: 'Core Concepts', slugs: ['concepts'] },
  { title: 'Tracing', slugs: ['tracing'] },
  { title: 'Evaluation', slugs: ['evaluation'] },
  { title: 'Prompt Management', slugs: ['prompt-management'] },
  { title: 'Analytics', slugs: ['analytics'] },
  { title: 'SDKs', slugs: ['sdk'] },
  { title: 'Integrations', slugs: ['integrations'] },
  { title: 'API Reference', slugs: ['api'] },
  { title: 'Self-Hosting', slugs: ['self-hosting'] },
  { title: 'Security', slugs: ['security'] },
  // Optional docs — agents can skip these for shorter context
  {
    title: 'Cookbook, FAQ & Troubleshooting',
    slugs: ['cookbook', 'faq', 'troubleshooting'],
    optional: true,
  },
];

// Static site pages (not from CMS/MDX collections)
const PRODUCT_PAGES: { title: string; url: string; description: string }[] = [
  {
    title: 'Tracing',
    url: '/tracing',
    description:
      'Product page for LLM tracing — capture every call, latency, and token usage',
  },
  {
    title: 'Evaluation',
    url: '/evaluation',
    description:
      'Product page for AI evaluation — automated quality scoring and human feedback',
  },
  {
    title: 'Prompt Management',
    url: '/prompt-management',
    description:
      'Product page for prompt management — version, test, and deploy prompts',
  },
];

const COMPARISON_PAGES: { title: string; url: string; description: string }[] =
  [
    {
      title: 'Brokle vs Langfuse',
      url: '/compare/vs-langfuse',
      description: 'Feature comparison between Brokle and Langfuse',
    },
    {
      title: 'Brokle vs LangSmith',
      url: '/compare/vs-langsmith',
      description: 'Feature comparison between Brokle and LangSmith',
    },
    {
      title: 'Brokle vs Phoenix',
      url: '/compare/vs-phoenix',
      description: 'Feature comparison between Brokle and Arize Phoenix',
    },
  ];

const SITE_PAGES: { title: string; url: string; description: string }[] = [
  { title: 'Pricing', url: '/pricing', description: 'Plans and pricing' },
  { title: 'About', url: '/about', description: 'About the Brokle team' },
  {
    title: 'Changelog',
    url: '/changelog',
    description: 'Product updates and release notes',
  },
  { title: 'Careers', url: '/careers', description: 'Open positions' },
  { title: 'Contact', url: '/contact', description: 'Get in touch' },
];

function formatLink(
  title: string,
  url: string,
  description?: string,
): string {
  const fullUrl = `${BASE_URL}${url}`;
  return description
    ? `- [${title}](${fullUrl}): ${description}`
    : `- [${title}](${fullUrl})`;
}

export async function GET() {
  const pages = source.getPages();
  const blogPosts = getBlogPosts();

  const lines: string[] = [
    '# Brokle',
    '',
    '> Brokle is an open-source AI observability platform providing tracing,',
    '> evaluation, cost analytics, and prompt management for AI applications.',
    '> Built on OpenTelemetry. Full documentation: https://brokle.com/docs',
    '',
    `The complete content of all documentation pages is available at ${BASE_URL}/llms-full.txt`,
    '',
  ];

  // --- Product Pages ---
  lines.push('## Product', '');
  for (const page of PRODUCT_PAGES) {
    lines.push(formatLink(page.title, page.url, page.description));
  }
  lines.push('');

  // --- Comparisons ---
  lines.push('## Comparisons', '');
  for (const page of COMPARISON_PAGES) {
    lines.push(formatLink(page.title, page.url, page.description));
  }
  lines.push('');

  // --- Documentation sections ---
  for (const section of DOC_SECTIONS) {
    const sectionPages = pages.filter((page) => {
      const topSlug = page.slugs[0] ?? '';
      return section.slugs.includes(topSlug);
    });

    if (sectionPages.length === 0) continue;

    const heading = section.optional
      ? `## Optional: ${section.title}`
      : `## ${section.title}`;
    lines.push(heading, '');

    for (const page of sectionPages) {
      lines.push(formatLink(page.data.title, page.url, page.data.description));
    }

    lines.push('');
  }

  // --- Blog ---
  if (blogPosts.length > 0) {
    lines.push('## Blog', '');
    for (const post of blogPosts) {
      lines.push(formatLink(post.data.title, post.url, post.data.description));
    }
    lines.push('');
  }

  // --- Other Site Pages ---
  lines.push('## Optional: Site Pages', '');
  for (const page of SITE_PAGES) {
    lines.push(formatLink(page.title, page.url, page.description));
  }
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
