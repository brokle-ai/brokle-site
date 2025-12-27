import { Check, X, Minus } from "lucide-react"
import { DisplayHeading } from "@/components/shared"
import type { ComparisonFeature } from "@/types/comparison"

interface ComparisonTableProps {
  competitorName: string
  features: ComparisonFeature[]
}

function renderValue(value: boolean | string) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="h-5 w-5 text-emerald-500" />
    ) : (
      <X className="h-5 w-5 text-muted-foreground/50" />
    )
  }
  if (value === "partial") {
    return <Minus className="h-5 w-5 text-amber-500" />
  }
  return <span className="text-sm">{value}</span>
}

export function ComparisonTable({ competitorName, features }: ComparisonTableProps) {
  // Group features by category
  const categories = [...new Set(features.map((f) => f.category))]

  return (
    <section className="py-20 md:py-28 lg:py-32 border-t">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <DisplayHeading as="h2" className="mb-4">
            Feature comparison
          </DisplayHeading>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Brokle compares to {competitorName} across key features.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-4 font-medium w-1/2">Feature</th>
                <th className="text-center py-4 px-4 font-semibold text-primary w-1/4">
                  Brokle
                </th>
                <th className="text-center py-4 px-4 font-medium w-1/4">
                  {competitorName}
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <>
                  {/* Category Header */}
                  <tr key={category} className="bg-muted/30">
                    <td
                      colSpan={3}
                      className="py-3 px-4 font-semibold text-sm uppercase tracking-wider"
                    >
                      {category}
                    </td>
                  </tr>
                  {/* Features in Category */}
                  {features
                    .filter((f) => f.category === category)
                    .map((feature, i) => (
                      <tr key={`${category}-${i}`} className="border-b">
                        <td className="py-3 px-4 text-sm">{feature.feature}</td>
                        <td className="py-3 px-4 text-center">
                          <div className="flex justify-center">
                            {renderValue(feature.brokle)}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <div className="flex justify-center">
                            {renderValue(feature.competitor)}
                          </div>
                        </td>
                      </tr>
                    ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
