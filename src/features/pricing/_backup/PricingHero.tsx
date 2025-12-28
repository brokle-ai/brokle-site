import { HeroBackground, DisplayHeading } from "@/components/shared"

export default function PricingHero() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <HeroBackground />
      <div className="container px-4 mx-auto relative">
        <div className="max-w-3xl mx-auto text-center">
          <DisplayHeading as="h1">
            Simple, usage-based pricing
          </DisplayHeading>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no per-seat pricing.
            Pay only for the traces you use.
          </p>
        </div>
      </div>
    </section>
  )
}
