import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function CultureSection() {
  return (
    <section id="culture" className="py-16 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Culture</Badge>
            <h2 className="text-3xl font-bold mb-4">Life at Brokle</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know our team, culture, and what makes working at Brokle special.
            </p>
          </div>

          {/* Team Photos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Team building activity"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Office environment"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Team lunch"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Company offsite"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Benefits & Perks</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4 mx-auto">
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
                      className="lucide lucide-heart-pulse"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      <path d="M3.22 12H9.5l.5-1 2 4 .5-1h8.78" />
                    </svg>
                  </div>
                  <h4 className="font-medium">Health & Wellness</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive health insurance and wellness programs
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4 mx-auto">
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
                      className="lucide lucide-calendar-days"
                    >
                      <path d="M8 2v4" />
                      <path d="M16 2v4" />
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="M3 10h18" />
                      <path d="M8 14h.01" />
                      <path d="M12 14h.01" />
                      <path d="M16 14h.01" />
                      <path d="M8 18h.01" />
                      <path d="M12 18h.01" />
                      <path d="M16 18h.01" />
                    </svg>
                  </div>
                  <h4 className="font-medium">Flexible PTO</h4>
                  <p className="text-sm text-muted-foreground">Take time off when you need it</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4 mx-auto">
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
                      className="lucide lucide-graduation-cap"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                    </svg>
                  </div>
                  <h4 className="font-medium">Learning Budget</h4>
                  <p className="text-sm text-muted-foreground">Resources for professional development</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4 mx-auto">
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
                      className="lucide lucide-laptop"
                    >
                      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                    </svg>
                  </div>
                  <h4 className="font-medium">Remote Flexibility</h4>
                  <p className="text-sm text-muted-foreground">Work from anywhere options</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4 mx-auto">
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
                      className="lucide lucide-utensils"
                    >
                      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                      <path d="M7 2v20" />
                      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                    </svg>
                  </div>
                  <h4 className="font-medium">Free Meals</h4>
                  <p className="text-sm text-muted-foreground">Catered lunches and snacks</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4 mx-auto">
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
                      className="lucide lucide-piggy-bank"
                    >
                      <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z" />
                      <path d="M2 9v1c0 1.1.9 2 2 2h1" />
                      <path d="M16 11h0" />
                    </svg>
                  </div>
                  <h4 className="font-medium">Equity</h4>
                  <p className="text-sm text-muted-foreground">Competitive equity packages</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4 mx-auto">
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
                      className="lucide lucide-party-popper"
                    >
                      <path d="M5.8 11.3 2 22l10.7-3.79" />
                      <path d="M4 3h.01" />
                      <path d="M22 8h.01" />
                      <path d="M15 2h.01" />
                      <path d="M22 20h.01" />
                      <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
                      <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17" />
                      <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7" />
                      <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
                    </svg>
                  </div>
                  <h4 className="font-medium">Team Events</h4>
                  <p className="text-sm text-muted-foreground">Regular team building activities</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4 mx-auto">
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
                      className="lucide lucide-home"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <h4 className="font-medium">Home Office</h4>
                  <p className="text-sm text-muted-foreground">Stipend for your workspace</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
