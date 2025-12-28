import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  Github,
  Mail,
  MessageSquare,
} from "lucide-react";
import Link from "next/link"
import { ContactForm } from "./contact-form";
import { HeroBackground, DisplayHeading } from "@/components/shared"

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <HeroBackground />
        <div className="container px-4 mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <DisplayHeading as="h1">Get in Touch</DisplayHeading>
            <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Have questions about Brokle? Need help with your LLM observability setup?
              We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-0 shadow-none bg-muted/30">
              <CardHeader>
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Send us an email and we&apos;ll get back to you within 24 hours.
                </CardDescription>
                <a href="mailto:hello@brokle.ai" className="text-primary hover:underline">
                  hello@brokle.ai
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-none bg-muted/30">
              <CardHeader>
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary mb-4">
                  <MessageSquare className="h-8 w-8" />
                </div>
                <CardTitle>Discord Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Join our Discord for real-time support from the community and team.
                </CardDescription>
                <Button variant="outline" asChild>
                  <Link href="https://discord.gg/brokle" target="_blank" rel="noopener noreferrer">
                    Join Discord
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-none bg-muted/30">
              <CardHeader>
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary mb-4">
                  <Github className="h-8 w-8" />
                </div>
                <CardTitle>GitHub</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Found a bug? Have a feature request? Open an issue on GitHub.
                </CardDescription>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/brokle-ai/brokle/issues" target="_blank" rel="noopener noreferrer">
                    Open Issue
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form and we&apos;ll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Product Questions</h3>
                    <p className="text-muted-foreground">
                      Ask about tracing, prompt management, evaluations, or analytics features.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Technical Support</h3>
                    <p className="text-muted-foreground">
                      Get help with SDK integration, self-hosting, or debugging issues.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Enterprise Inquiries</h3>
                    <p className="text-muted-foreground">
                      Discuss enterprise plans, SSO, compliance, or custom requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Partnership Opportunities</h3>
                    <p className="text-muted-foreground">
                      Explore integrations, partnerships, or investment discussions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="pt-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </>
  )
}
