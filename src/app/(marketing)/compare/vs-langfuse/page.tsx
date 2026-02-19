import type { Metadata } from 'next';
import { ComparisonPage } from '@/features/comparisons/ComparisonPage';
import { vsLangfuseData } from '@/features/comparisons/data/vs-langfuse';
import { seoMetadata } from '@/data/seo-metadata';
import { resolvePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = resolvePageMetadata(
  seoMetadata.vsLangfuse,
  '/compare/vs-langfuse',
);

export default function VsLangfusePage() {
  return <ComparisonPage data={vsLangfuseData} />;
}
