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
import type { Metadata } from 'next';

function buildBreadcrumbs(slugs: string[], title: string) {
  const baseUrl = 'https://brokle.com';
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

  // Add current page
  items.push({
    name: title,
    url: `${baseUrl}/docs/${slugs.join('/')}`,
  });

  return items;
}

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const breadcrumbs = buildBreadcrumbs(params.slug || [], page.data.title);

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <DocsPage toc={page.data.toc} full={page.data.full}>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
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

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
