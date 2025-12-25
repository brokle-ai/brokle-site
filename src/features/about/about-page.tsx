import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Eye, Github, Heart, Lightbulb, Scale, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Story</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Brokle</h1>
            <p className="text-xl text-muted-foreground">
              We&apos;re building the open-source observability platform that helps teams
              understand, debug, and improve their LLM applications.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Mission</Badge>
              <h2 className="text-3xl font-bold mb-6">Making AI Systems Observable</h2>
              <p className="text-lg text-muted-foreground mb-6">
                As LLMs become central to software applications, teams need visibility into how
                their AI systems behave. Traditional monitoring tools weren&apos;t built for the
                unique challenges of LLM applications—non-deterministic outputs, complex prompt
                chains, and opaque model behavior.
              </p>
              <p className="text-lg text-muted-foreground">
                Brokle provides the observability layer that makes LLM applications transparent,
                debuggable, and improvable. We believe that open-source infrastructure is
                essential for building trustworthy AI systems.
              </p>
            </div>

            <div className="relative rounded-lg border bg-background p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Full Visibility</h3>
                    <p className="text-sm text-muted-foreground">See every LLM call, chain, and decision</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Developer-First</h3>
                    <p className="text-sm text-muted-foreground">Built by engineers, for engineers</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Scale className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Scale Without Limits</h3>
                    <p className="text-sm text-muted-foreground">From prototype to production</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Values</Badge>
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
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Journey</Badge>
              <h2 className="text-3xl font-bold mb-4">Why We Built Brokle</h2>
            </div>

            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We started building LLM applications in 2023 and quickly hit a wall. When something
                went wrong—hallucinations, slow responses, unexpected costs—we had no way to
                understand what happened inside our AI pipelines.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Traditional APM tools showed us HTTP requests and database queries, but they
                couldn&apos;t tell us which prompt variant performed better, why a chain failed
                midway, or how much we were spending per feature.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We built Brokle to solve this problem—first for ourselves, then for every team
                building with LLMs. We made it open-source because we believe the infrastructure
                that powers AI applications should be transparent and accessible to everyone.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, Brokle helps thousands of teams debug, evaluate, and improve their LLM
                applications. Whether you&apos;re building a chatbot or a complex AI agent,
                Brokle gives you the visibility you need to ship with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Open Source</Badge>
              <h2 className="text-3xl font-bold mb-4">Built in the Open</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Brokle is open-source at its core. Inspect the code, contribute features,
                or self-host on your own infrastructure.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">MIT</div>
                <p className="text-muted-foreground">Licensed Core</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-muted-foreground">Contributors</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5K+</div>
                <p className="text-muted-foreground">GitHub Stars</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link href="https://github.com/brokle-ai/brokle" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  View on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Community */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Community</Badge>
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with thousands of developers building LLM applications. Share knowledge,
              get help, and contribute to the future of AI observability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link href="https://discord.gg/brokle" target="_blank" rel="noopener noreferrer">
                  Join Discord <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/brokle-ai/brokle" target="_blank" rel="noopener noreferrer">
                  Star on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions about Brokle? Want to discuss enterprise requirements or
              partnership opportunities? We&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/contact">
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://app.brokle.ai/signup">
                  Try Brokle Free
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
