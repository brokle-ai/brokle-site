import PricingHero from "./components/PricingHero"
import PricingCards from "./components/PricingCards"
import ComparisonTable from "./components/ComparisonTable"
import PricingFAQ from "./components/PricingFAQ"

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <ComparisonTable />
      <PricingFAQ />
    </>
  )
}
