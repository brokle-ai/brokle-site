import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HeroBackground, DisplayHeading } from "@/components/shared"

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <HeroBackground />
        <div className="container px-4 mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <DisplayHeading as="h1">Join Our Team</DisplayHeading>
            <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Help us build the future of LLM observability. We're looking for talented
              people who are passionate about AI and developer tools.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We don&apos;t have any open positions right now, but we&apos;re always
                interested in hearing from talented people.
              </p>
              <Button variant="outline" asChild>
                <Link href="mailto:careers@brokle.com">
                  Send General Application
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
