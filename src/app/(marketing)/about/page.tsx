import AboutPage from '@/features/about/about-page';
import { seoMetadata } from '@/data/seo-metadata';
import { resolvePageMetadata } from '@/lib/metadata';

export const metadata = resolvePageMetadata(seoMetadata.about, '/about');

export default function About() {
  return <AboutPage />;
}
