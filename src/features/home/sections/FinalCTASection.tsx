import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { DisplayHeading } from "@/components/shared"

export function FinalCTASection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 border-t">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <DisplayHeading as="h2" className="mb-6">
            Start building reliable AI today
          </DisplayHeading>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of developers using Brokle to debug, evaluate,
            and improve their LLM applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button size="lg" className="gap-2 h-13 px-8 text-base" asChild>
              <Link href="https://app.brokle.ai/signup">
                Get Started Free <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 h-13 px-8 text-base"
              asChild
            >
              <Link href="/contact">
                Talk to Sales
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>No credit card required</span>
            <span className="text-border">|</span>
            <span>SOC 2 compliant</span>
          </div>
        </div>
      </div>
    </section>
  )
}
