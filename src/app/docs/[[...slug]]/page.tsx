import { getPageImage, source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import { BreadcrumbSchema } from '@/components/seo';
import { LLMCopyButton, ViewOptions } from '@/components/page-actions';
import type { Metadata } from 'next';

const baseUrl = 'https://brokle.com';

function buildBreadcrumbs(slugs: string[], title: string, canonicalUrl?: string) {
  const items = [
    { name: 'Home', url: baseUrl },
    { name: 'Documentation', url: `${baseUrl}/docs` },
  ];

  // Add intermediate path segments
  let currentPath = '/docs';
  for (let i = 0; i < slugs.length - 1; i++) {
    currentPath += `/${slugs[i]}`;
    // Capitalize and format the slug for display
    const name = slugs[i]
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    items.push({ name, url: `${baseUrl}${currentPath}` });
  }

  // Add current page (use canonical URL if set)
  items.push({
    name: title,
    url: canonicalUrl ?? `${baseUrl}/docs/${slugs.join('/')}`,
  });

  return items;
}

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const canonicalUrl = page.data.canonicalUrl ?? undefined;
  const breadcrumbs = buildBreadcrumbs(params.slug || [], page.data.title, canonicalUrl);

  const markdownUrl = `${page.url}.mdx`;
  const githubUrl = `https://github.com/brokle-ai/brokle-site/blob/main/content/docs/${page.path}`;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <DocsPage toc={page.data.toc} full={page.data.full}>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <div className="flex flex-row gap-2 items-center border-b pt-2 pb-6">
          <LLMCopyButton markdownUrl={markdownUrl} />
          <ViewOptions markdownUrl={markdownUrl} githubUrl={githubUrl} />
        </div>
        <DocsBody>
          <MDX components={getMDXComponents()} />
        </DocsBody>
      </DocsPage>
    </>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/docs/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const { title, description } = page.data;
  const metaTitle = page.data.metaTitle ?? title;
  const metaDescription = page.data.metaDescription ?? description;
  const ogTitle = page.data.ogTitle ?? metaTitle;
  const ogDescription = page.data.ogDescription ?? metaDescription;
  const slugPath = params.slug?.join('/') ?? '';
  const canonicalUrl =
    page.data.canonicalUrl ?? `${baseUrl}/docs${slugPath ? `/${slugPath}` : ''}`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonicalUrl,
      siteName: 'Brokle',
      images: getPageImage(page).url,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@brokleai',
      creator: '@brokleai',
      title: ogTitle,
      description: ogDescription,
      images: [getPageImage(page).url],
    },
  };
}
