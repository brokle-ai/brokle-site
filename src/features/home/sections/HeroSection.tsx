import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { DisplayHeading, IsometricIllustration } from "@/components/shared"

export function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left side: Content */}
          <div className="text-left">
            <DisplayHeading as="h1" className="mb-6 leading-[1.1]">
              The observability platform{" "}
              <span className="text-foreground/80">for AI teams</span>
            </DisplayHeading>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Debug, evaluate, and optimize your LLM applications with complete visibility.
              OpenTelemetry-native, enterprise-ready.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2 h-13 px-8 text-base" asChild>
                <Link href="https://app.brokle.ai/signup">
                  Get Started Free <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 h-13 px-8 text-base" asChild>
                <Link href="#demo">
                  Take a Tour
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side: Illustration */}
          <div className="hidden lg:block relative">
            <IsometricIllustration className="w-full max-w-lg mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
