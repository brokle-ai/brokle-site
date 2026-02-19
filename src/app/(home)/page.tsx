import HomePageComponent from '@/features/home/HomePage';
import { seoMetadata } from '@/data/seo-metadata';
import { resolvePageMetadata } from '@/lib/metadata';

export const metadata = resolvePageMetadata(seoMetadata.home, '/', {
  absolute: true,
});

export default function Home() {
  return <HomePageComponent />;
}
