import TermsOfServicePage from '@/features/terms-of-service/terms-of-service-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Brokle',
  description: 'Brokle terms of service. Terms and conditions for using Brokle.',
  openGraph: {
    title: 'Terms of Service - Brokle',
    description:
      'Brokle terms of service. Terms and conditions for using Brokle.',
    url: 'https://brokle.com/terms',
    siteName: 'Brokle',
    type: 'website',
  },
};

export default function Terms() {
  return <TermsOfServicePage />;
}
