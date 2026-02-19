import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { DisplayHeading } from "@/components/shared"
import { getSignupUrl } from "@/lib/app-urls"

export function FinalCTASection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 border-t">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <DisplayHeading as="h2" className="mb-6">
            Start building reliable AI today
          </DisplayHeading>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of AI teams using Brokle to observe, evaluate,
            and ship their AI agents and applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
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
        </div>
      </div>
    </section>
  )
}
