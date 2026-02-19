import TermsOfServicePage from '@/features/terms-of-service/terms-of-service-page';
import { seoMetadata } from '@/data/seo-metadata';
import { resolvePageMetadata } from '@/lib/metadata';

export const metadata = resolvePageMetadata(seoMetadata.terms, '/terms');

export default function Terms() {
  return <TermsOfServicePage />;
}
