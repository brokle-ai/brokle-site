import PricingHero from "./components/PricingHero"
import PricingCards from "./components/PricingCards"
// TODO: Uncomment when pricing is finalized
// import ComparisonTable from "./components/ComparisonTable"
// import PricingFAQ from "./components/PricingFAQ"

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      {/* TODO: Uncomment when pricing is finalized
      <ComparisonTable />
      <PricingFAQ />
      */}
    </>
  )
}
