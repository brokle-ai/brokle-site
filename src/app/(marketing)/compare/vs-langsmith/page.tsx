import type { Metadata } from 'next';
import { ComparisonPage } from '@/features/comparisons/ComparisonPage';
import { vsLangsmithData } from '@/features/comparisons/data/vs-langsmith';
import { seoMetadata } from '@/data/seo-metadata';
import { resolvePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = resolvePageMetadata(
  seoMetadata.vsLangsmith,
  '/compare/vs-langsmith',
);

export default function VsLangsmithPage() {
  return <ComparisonPage data={vsLangsmithData} />;
}
