import CareersPage from '@/features/careers/careers-page';
import { seoMetadata } from '@/data/seo-metadata';
import { resolvePageMetadata } from '@/lib/metadata';

export const metadata = resolvePageMetadata(seoMetadata.careers, '/careers');

export default function Careers() {
  return <CareersPage />;
}
