import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ProductCTAProps {
  title: string
  description: string
  cta: {
    text: string
    href: string
  }
}

export function ProductCTA({ title, description, cta }: ProductCTAProps) {
  return (
    <section className="py-20 border-t">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="text-lg text-muted-foreground mb-8">{description}</p>
          <Button size="lg" className="gap-2" asChild>
            <Link href={cta.href}>
              {cta.text} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
