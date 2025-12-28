import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroBackground } from "@/components/shared"
import { ArrowRight } from "lucide-react"

interface ProductHeroProps {
  title: string
  highlight: string
  description: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta: {
    text: string
    href: string
  }
}

export function ProductHero({
  title,
  highlight,
  description,
  primaryCta,
  secondaryCta,
}: ProductHeroProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <HeroBackground />

      <div className="container px-4 mx-auto relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {title}{" "}
            <span className="text-primary">{highlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <Link href={primaryCta.href}>
                {primaryCta.text} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={secondaryCta.href}>
                {secondaryCta.text}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
