import ChangelogPage from '@/features/changelog/changelog-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Changelog - Brokle',
  description: 'Latest updates and improvements to the Brokle platform.',
  openGraph: {
    title: 'Changelog - Brokle',
    description: 'Latest updates and improvements to the Brokle platform.',
    url: 'https://brokle.com/changelog',
    siteName: 'Brokle',
    type: 'website',
  },
};

export default function Changelog() {
  return <ChangelogPage />;
}
