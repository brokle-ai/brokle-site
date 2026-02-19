import ContactPage from '@/features/contact/contact-page';
import { seoMetadata } from '@/data/seo-metadata';
import { resolvePageMetadata } from '@/lib/metadata';

export const metadata = resolvePageMetadata(seoMetadata.contact, '/contact');

export default function Contact() {
  return <ContactPage />;
}
