'use client';

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, HelpCircle, Github } from "lucide-react"
import Link from "next/link"

export default function PricingFAQ() {
  return (
    <>
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about Brokle pricing and plans.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What counts as a trace?</AccordionTrigger>
                <AccordionContent>
                  A trace represents a single LLM request or a chain of related LLM calls. For simple applications,
                  one user request typically equals one trace. For complex chains or agents, multiple LLM calls
                  within the same execution flow count as a single trace with multiple spans.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How does the free trial work?</AccordionTrigger>
                <AccordionContent>
                  All paid plans include a 14-day free trial with full access to all features. No credit card is required
                  to start. At the end of the trial, you can choose to upgrade to a paid plan or continue with the free
                  Hobby tier.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Can I self-host Brokle?</AccordionTrigger>
                <AccordionContent>
                  Yes! Brokle is open-source and can be self-hosted on your own infrastructure. The self-hosting
                  option is available for all plans and is especially popular with Enterprise customers who need
                  to keep data within their own environment for compliance reasons.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>What happens if I exceed my trace limit?</AccordionTrigger>
                <AccordionContent>
                  We won&apos;t cut off your service. If you approach your trace limit, we&apos;ll notify you and offer
                  options to upgrade your plan or purchase additional trace capacity. For Enterprise customers,
                  we can set up custom overage pricing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Do you offer discounts for startups?</AccordionTrigger>
                <AccordionContent>
                  Yes! We offer special pricing for early-stage startups, open-source projects, and non-profit
                  organizations. Please contact our team to learn more about our discount programs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>What&apos;s the difference between cloud and self-hosted?</AccordionTrigger>
                <AccordionContent>
                  The cloud version is fully managed by us - no infrastructure to maintain. Self-hosted gives you
                  complete control over your data and infrastructure. Both versions use the same open-source codebase
                  and have feature parity. Enterprise customers often start with cloud and migrate to self-hosted
                  as their needs evolve.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>What compliance certifications do you have?</AccordionTrigger>
                <AccordionContent>
                  Brokle Cloud is SOC 2 Type II certified and GDPR compliant. For HIPAA compliance, we recommend
                  our Enterprise plan with a signed BAA, or self-hosting within your own HIPAA-compliant
                  infrastructure.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-8 p-4 bg-muted/50 rounded-lg border flex items-center gap-4">
              <div className="text-primary">
                <HelpCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="font-medium">Still have questions?</p>
                <p className="text-sm text-muted-foreground">
                  Join our Discord or contact our team for personalized help.
                </p>
              </div>
              <Button variant="outline" className="ml-auto" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start with the free Hobby plan and upgrade as you grow. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link href="https://app.brokle.ai/signup">
                  Get Started Free <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link
                  href="https://github.com/brokle-ai/brokle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  Self-Host
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
