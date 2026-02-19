import PricingPage from '@/features/pricing/pricing-page';
import { FAQSchema } from '@/components/seo';
import { pricingFaqs } from '@/data/pricing-faqs';
import { seoMetadata } from '@/data/seo-metadata';
import { resolvePageMetadata } from '@/lib/metadata';

export const metadata = resolvePageMetadata(seoMetadata.pricing, '/pricing');

export default function Pricing() {
  return (
    <>
      <FAQSchema faqs={pricingFaqs} />
      <PricingPage />
    </>
  );
}
