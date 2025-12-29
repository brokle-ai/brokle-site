import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

const freeFeatures = [
  "Unlimited traces",
  "7-day data retention",
  "3 projects",
  "Basic analytics",
  "Community support",
  "Self-hosting available",
]

export default function PricingCards() {
  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Free Tier */}
            <Card className="border-primary shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Free</CardTitle>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold">$0</span>
                  <span className="ml-1 text-lg font-medium text-muted-foreground">/forever</span>
                </div>
                <CardDescription className="mt-2 text-sm">
                  Get started with full access. No credit card required.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2.5">
                  {freeFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="https://app.brokle.com/signup">
                    Get Started
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Coming Soon */}
            <Card className="border-dashed">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  Paid Plans
                </CardTitle>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-muted-foreground">Coming Soon</span>
                </div>
                <CardDescription className="mt-2 text-sm">
                  Pro and Team plans with extended retention, more projects, and priority support.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-sm text-muted-foreground">
                  We&apos;re working on paid plans for teams who need more.
                  Join the waitlist to get early access and help shape our pricing.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">
                    Join Waitlist
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-8 text-sm text-muted-foreground">
            Need enterprise features or self-hosting help? <Link href="/contact" className="text-primary hover:underline">Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
