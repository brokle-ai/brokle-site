import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Users, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  return (
    <>
      {/* Employee Testimonials */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Meet Our Team</h3>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-background/60 backdrop-blur">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 relative">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Sarah Chen"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Sarah Chen</h4>
                        <p className="text-sm text-muted-foreground mb-4">Senior ML Engineer, 2 years at Brokle</p>
                        <p className="text-muted-foreground">
                          &quot;Working at Brokle has been the highlight of my career. I get to solve challenging ML problems
                          while collaborating with brilliant minds who are passionate about AI.&quot;
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background/60 backdrop-blur">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 relative">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Michael Rodriguez"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Michael Rodriguez</h4>
                        <p className="text-sm text-muted-foreground mb-4">Product Designer, 1.5 years at Brokle</p>
                        <p className="text-muted-foreground">
                          &quot;The culture at Brokle encourages creativity and innovation. I&apos;ve grown so much as a designer
                          by working on complex problems and getting feedback from our amazing users.&quot;
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Stay Connected</Badge>
              <h2 className="text-3xl font-bold mb-4">Follow Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay updated on company news, events, and job openings by following us on social media.
              </p>
            </div>

            <div className="flex justify-center gap-6 mb-12">
              <Button variant="outline" size="lg" className="gap-2">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Twitter className="h-5 w-5" />
                Twitter
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                Instagram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs & Contact */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">FAQs</Badge>
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our hiring process and working at Brokle.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full mb-12">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is the hiring process like?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Our hiring process typically includes an initial screening call with a recruiter, followed by a
                    technical or role-specific interview, and a final interview with the team you&apos;ll be working with.
                    For engineering roles, we also include a technical assessment. The entire process usually takes 2-3
                    weeks.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Do you offer remote work options?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes, we offer flexible work arrangements including fully remote, hybrid, and in-office options
                    depending on the role and team. We have offices in San Francisco, New York, London, and Singapore
                    for those who prefer to work in-person.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>What&apos;s the onboarding process like?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    New team members go through a comprehensive onboarding program that includes product training,
                    company culture sessions, and team introductions. You&apos;ll be paired with a buddy who will help you
                    navigate your first few weeks at Brokle.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Do you sponsor work visas?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes, we do sponsor work visas for exceptional candidates. Please note your visa requirements in your
                    application, and we&apos;ll discuss the details during the interview process.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What&apos;s the company culture like?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    We value collaboration, innovation, and impact. Our team is passionate about AI and data labeling,
                    and we work together to solve complex problems. We maintain a healthy work-life balance and
                    celebrate our successes together.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our open positions and take the next step in your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <a href="#open-positions" className="flex items-center gap-2">
                  View Open Positions <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <a href="#" className="flex items-center gap-2">
                  Join Talent Pool <Users className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
