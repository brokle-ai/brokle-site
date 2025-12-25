import ContactPage from '@/features/contact/contact-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Brokle',
  description:
    'Get in touch with the Brokle team. We are here to help with your AI observability needs.',
  openGraph: {
    title: 'Contact - Brokle',
    description:
      'Get in touch with the Brokle team. We are here to help with your AI observability needs.',
    url: 'https://brokle.ai/contact',
    siteName: 'Brokle',
    type: 'website',
  },
};

export default function Contact() {
  return <ContactPage />;
}
