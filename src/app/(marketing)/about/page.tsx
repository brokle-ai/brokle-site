import AboutPage from '@/features/about/about-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Brokle',
  description:
    'Learn about Brokle, the open-source AI observability platform built for developers.',
  openGraph: {
    title: 'About - Brokle',
    description:
      'Learn about Brokle, the open-source AI observability platform built for developers.',
    url: 'https://brokle.com/about',
    siteName: 'Brokle',
    type: 'website',
  },
};

export default function About() {
  return <AboutPage />;
}
