import PricingPage from '@/features/pricing/pricing-page';
import { FAQSchema } from '@/components/seo';
import { pricingFaqs } from '@/data/pricing-faqs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - Brokle',
  description:
    'Simple, usage-based pricing for LLM observability. Start free, scale as you grow. No hidden fees, no per-seat pricing.',
  openGraph: {
    title: 'Pricing - Brokle',
    description:
      'Simple, usage-based pricing for LLM observability. Start free, scale as you grow.',
    url: 'https://brokle.com/pricing',
    siteName: 'Brokle',
    type: 'website',
  },
};

export default function Pricing() {
  return (
    <>
      <FAQSchema faqs={pricingFaqs} />
      <PricingPage />
    </>
  );
}
