import type { Metadata } from 'next';
import { ComparisonPage } from '@/features/comparisons/ComparisonPage';
import { vsPhoenixData } from '@/features/comparisons/data/vs-phoenix';
import { seoMetadata } from '@/data/seo-metadata';
import { resolvePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = resolvePageMetadata(
  seoMetadata.vsPhoenix,
  '/compare/vs-phoenix',
);

export default function VsPhoenixPage() {
  return <ComparisonPage data={vsPhoenixData} />;
}
