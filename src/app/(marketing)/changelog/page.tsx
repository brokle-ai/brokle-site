import ChangelogPage from '@/features/changelog/changelog-page';
import { seoMetadata } from '@/data/seo-metadata';
import { resolvePageMetadata } from '@/lib/metadata';

export const metadata = resolvePageMetadata(seoMetadata.changelog, '/changelog');

export default function Changelog() {
  return <ChangelogPage />;
}
