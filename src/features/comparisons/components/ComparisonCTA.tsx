import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DisplayHeading } from "@/components/shared"
import { ArrowRight } from "lucide-react"
import { getSignupUrl } from "@/lib/app-urls"

interface ComparisonCTAProps {
  competitorName: string
}

export function ComparisonCTA({ competitorName }: ComparisonCTAProps) {
  return (
    <section className="py-20 md:py-28 lg:py-32 border-t bg-muted/20">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <DisplayHeading as="h2" className="mb-4">
            Ready to switch from {competitorName}?
          </DisplayHeading>
          <p className="text-lg text-muted-foreground mb-10">
            Get started with Brokle in minutes. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <Link href={getSignupUrl()}>
                Get Started Free <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Talk to Sales
              </Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required &bull; Self-host available
          </p>
        </div>
      </div>
    </section>
  )
}
