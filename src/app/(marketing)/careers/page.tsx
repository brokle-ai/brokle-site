import CareersPage from '@/features/careers/careers-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers - Brokle',
  description:
    'Join the Brokle team. We are building the future of AI observability.',
  openGraph: {
    title: 'Careers - Brokle',
    description:
      'Join the Brokle team. We are building the future of AI observability.',
    url: 'https://brokle.ai/careers',
    siteName: 'Brokle',
    type: 'website',
  },
};

export default function Careers() {
  return <CareersPage />;
}
