'use client';

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, HelpCircle, Github } from "lucide-react"
import Link from "next/link"
import { pricingFaqs } from "@/data/pricing-faqs"
import { getSignupUrl } from "@/lib/app-urls"

export default function PricingFAQ() {
  return (
    <>
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about Brokle pricing and plans.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {pricingFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}</Accordion>

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
                <Link href={getSignupUrl()}>
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
