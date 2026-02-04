import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Shield, Users } from "lucide-react"
import { HeroBackground, DisplayHeading } from "@/components/shared"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <HeroBackground />
        <div className="container px-4 mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <DisplayHeading as="h1">About Brokle</DisplayHeading>
            <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              We&apos;re building the AI engineering platform that helps teams
              observe, evaluate, and ship their AI agents and applications.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Making AI Teams Successful</h2>
            <p className="text-lg text-muted-foreground mb-6">
              As AI becomes central to software applications, teams need tools to build with confidence.
              Traditional monitoring wasn&apos;t built for the unique challenges of AI—non-deterministic
              outputs, complex agent workflows, and the need for continuous quality evaluation.
            </p>
            <p className="text-lg text-muted-foreground">
              Brokle provides the engineering platform that makes AI applications observable,
              testable, and improvable. We believe that open-source infrastructure is
              essential for building trustworthy AI systems.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What We Stand For</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These principles guide how we build our product and work with our community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-none bg-muted/30">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                    <Github className="h-6 w-6" />
                  </div>
                  <CardTitle>Open Source First</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Our core is MIT licensed. We believe observability infrastructure should be
                    transparent, auditable, and community-driven. No vendor lock-in, ever.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-none bg-muted/30">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <CardTitle>Privacy by Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Self-host to keep all data on your infrastructure. We never see your prompts,
                    completions, or business data. Your data stays yours.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-none bg-muted/30">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle>Community Driven</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Our roadmap is shaped by the community. We listen to feedback, welcome
                    contributions, and build what teams actually need.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Built Brokle */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why We Built Brokle</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We started building AI applications and quickly hit a wall—when something
              went wrong, we had no way to understand what happened inside our AI pipelines.
            </p>
            <p className="text-lg text-muted-foreground">
              We built Brokle to solve this, and made it open-source because we believe
              the infrastructure that powers AI applications should be transparent and
              accessible to everyone.
            </p>
          </div>
        </div>
      </section>

    </>
  )
}
