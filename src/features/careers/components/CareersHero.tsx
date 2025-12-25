import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users } from "lucide-react"

export function CareersHero() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge className="mb-4">Careers</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team & Shape the Future!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            At Brokle, we&apos;re building the next generation of AI data labeling tools. Join us in our mission to accelerate AI development through better data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <a href="#open-positions" className="flex items-center gap-2">
                View Open Positions <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <a href="#culture" className="flex items-center gap-2">
                Our Culture <Users className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
