import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Star, BookOpen } from "lucide-react"
import { DisplayHeading, HeroBackground, IsometricIllustration } from "@/components/shared"
import { getSignupUrl } from "@/lib/app-urls"

export function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <HeroBackground />

      <div className="container px-4 mx-auto max-w-7xl relative">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left side: Content */}
          <div className="text-left">
            {/* GitHub stars badge */}
            <Link
              href="https://github.com/brokle-ai/brokle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Brokle on GitHub - Open Source LLM Observability"
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-sm font-medium rounded-full border bg-background/80 backdrop-blur-sm hover:bg-muted transition-colors"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              <span className="text-muted-foreground">Open Source</span>
              {/* TODO: Uncomment when star count is meaningful
              <span className="flex items-center gap-1 text-foreground">
                <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                2.5K
              </span>
              */}
            </Link>

            <DisplayHeading as="h1" className="mb-6 leading-[1.1]">
              Open source LLM observability{" "}
              <span className="text-muted-foreground">for production AI</span>
            </DisplayHeading>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Debug, evaluate, and optimize your LLM applications with complete visibility.
              Open source at heart. OpenTelemetry-native. Self-host anywhere.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="gap-2" asChild>
                <Link href={getSignupUrl()}>
                  Get Started Free <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link href="https://github.com/brokle-ai/brokle" target="_blank" rel="noopener noreferrer" aria-label="Star Brokle on GitHub">
                  <Github className="h-4 w-4" aria-hidden="true" />
                  Star on GitHub
                </Link>
              </Button>
              <Button size="lg" variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground" asChild>
                <Link href="/docs" aria-label="View Brokle documentation">
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  View Docs
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
