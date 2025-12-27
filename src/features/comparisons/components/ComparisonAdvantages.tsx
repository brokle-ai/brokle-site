import { DisplayHeading } from "@/components/shared"
import { Check } from "lucide-react"

interface ComparisonAdvantagesProps {
  advantages: string[]
}

export function ComparisonAdvantages({ advantages }: ComparisonAdvantagesProps) {
  return (
    <section className="py-20 md:py-28 lg:py-32 border-t bg-muted/20">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <DisplayHeading as="h2" className="mb-4">
            Why choose Brokle
          </DisplayHeading>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key advantages that make Brokle the better choice for your team.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {advantages.map((advantage, index) => (
              <li
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-card border"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                </div>
                <span className="text-foreground/90 leading-relaxed">
                  {advantage}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
