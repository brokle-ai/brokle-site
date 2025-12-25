import PrivacyPolicyPage from '@/features/privacy-policy/privacy-policy-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Brokle',
  description: 'Brokle privacy policy. How we handle and protect your data.',
  openGraph: {
    title: 'Privacy Policy - Brokle',
    description: 'Brokle privacy policy. How we handle and protect your data.',
    url: 'https://brokle.ai/privacy',
    siteName: 'Brokle',
    type: 'website',
  },
};

export default function Privacy() {
  return <PrivacyPolicyPage />;
}
