import { DisplayHeading } from "@/components/shared"
import type { UseCaseFeature } from "@/types/use-case-page"

interface UseCaseFeaturesProps {
  features: UseCaseFeature[]
}

export function UseCaseFeatures({ features }: UseCaseFeaturesProps) {
  return (
    <section className="py-20 md:py-28 lg:py-32 border-t bg-muted/20">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <DisplayHeading as="h2" className="mb-4">
            Key capabilities
          </DisplayHeading>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, debug, and optimize your application.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-xl bg-card border">
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
