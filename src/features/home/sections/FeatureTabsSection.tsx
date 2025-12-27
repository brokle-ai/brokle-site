"use client"

import { FeatureTabs, featureTabsData } from "../feature-tabs"

export function FeatureTabsSection() {
  return (
    <section className="pb-20 md:pb-28 lg:pb-32">
      <div className="container px-4 mx-auto max-w-7xl">
        <FeatureTabs features={featureTabsData} autoAdvanceInterval={10000} />
      </div>
    </section>
  )
}
