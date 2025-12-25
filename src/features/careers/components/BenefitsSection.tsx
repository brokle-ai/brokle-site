import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"

export function BenefitsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Why Join Us</Badge>
            <h2 className="text-3xl font-bold mb-4">What Makes Brokle Special</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;re not just building a product, we&apos;re building a team that values innovation, collaboration, and impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background/60 backdrop-blur">
              <div className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Collaborative Culture</h3>
                <p className="text-muted-foreground">
                  Work alongside talented individuals who are passionate about AI and data labeling. We value diverse perspectives and open communication.
                </p>
              </div>
            </Card>

            <Card className="bg-background/60 backdrop-blur">
              <div className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
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
                    className="lucide lucide-brain"
                  >
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04Z" />
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
                <p className="text-muted-foreground">
                  Work on the forefront of AI and machine learning, solving complex problems with innovative solutions that impact thousands of AI teams worldwide.
                </p>
              </div>
            </Card>

            <Card className="bg-background/60 backdrop-blur">
              <div className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
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
                    className="lucide lucide-rocket"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Growth & Impact</h3>
                <p className="text-muted-foreground">
                  We&apos;re growing rapidly, offering abundant opportunities for career advancement and the chance to make a meaningful impact on the future of AI.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
