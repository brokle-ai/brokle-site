import PrivacyPolicyPage from '@/features/privacy-policy/privacy-policy-page';
import { seoMetadata } from '@/data/seo-metadata';
import { resolvePageMetadata } from '@/lib/metadata';

export const metadata = resolvePageMetadata(seoMetadata.privacy, '/privacy');

export default function Privacy() {
  return <PrivacyPolicyPage />;
}
