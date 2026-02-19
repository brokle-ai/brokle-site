import type { Metadata } from 'next';
import type { PageSEO } from '@/data/seo-metadata';

const baseUrl = 'https://brokle.com';

/**
 * Build a complete Next.js Metadata object from a PageSEO entry.
 *
 * - Title goes through the root template (`%s | Brokle`) unless the page
 *   is the home page, which uses `absolute` to bypass it.
 * - OG and Twitter cards always get explicit values so they never fall
 *   back to the generic root-layout defaults.
 * - Canonical is auto-computed from `path` unless overridden.
 */
export function resolvePageMetadata(
  seo: PageSEO,
  path: string,
  options?: { absolute?: boolean },
): Metadata {
  const metaTitle = seo.metaTitle ?? seo.title;
  const metaDescription = seo.metaDescription ?? seo.description;
  const ogTitle = seo.ogTitle ?? metaTitle;
  const ogDescription = seo.ogDescription ?? metaDescription;
  const canonicalUrl = seo.canonicalUrl ?? `${baseUrl}${path}`;

  return {
    title: options?.absolute ? { absolute: metaTitle } : metaTitle,
    description: metaDescription,
    ...(seo.keywords && { keywords: seo.keywords }),
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonicalUrl,
      siteName: 'Brokle',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@brokleai',
      creator: '@brokleai',
      title: ogTitle,
      description: ogDescription,
      images: ['/images/twitter-card.png'],
    },
  };
}
