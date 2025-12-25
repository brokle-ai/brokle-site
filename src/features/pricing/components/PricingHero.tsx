import { Badge } from "@/components/ui/badge"

export default function PricingHero() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, usage-based pricing
          </h1>
          <p className="text-xl text-muted-foreground">
            Start free, scale as you grow. No hidden fees, no per-seat pricing.
            Pay only for the traces you use.
          </p>
        </div>
      </div>
    </section>
  )
}
