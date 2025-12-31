import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { DisplayHeading } from "@/components/shared"
import type { ComparisonPageData } from "@/types/comparison"
import { getSignupUrl } from "@/lib/app-urls"

interface ComparisonHeroProps {
  data: ComparisonPageData
}

export function ComparisonHero({ data }: ComparisonHeroProps) {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          {/* Subtitle */}
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            Comparison
          </p>

          {/* Title */}
          <DisplayHeading as="h1" className="mb-6">
            {data.title}
          </DisplayHeading>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <Link href={getSignupUrl()}>
                Try Brokle Free <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/docs">
                View Documentation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
