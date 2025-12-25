import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowRight, Check, X } from "lucide-react"
import Link from "next/link"

export default function ComparisonTable() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Feature Comparison</Badge>
            <h2 className="text-3xl font-bold mb-4">Compare Plan Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See exactly what&apos;s included in each plan to find the right fit for your team.
            </p>
          </div>

          <div className="overflow-x-auto">
            <Table className="border rounded-lg bg-background">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[280px]">Feature</TableHead>
                  <TableHead className="text-center">Hobby</TableHead>
                  <TableHead className="text-center bg-primary/5">Pro</TableHead>
                  <TableHead className="text-center">Team</TableHead>
                  <TableHead className="text-center">Enterprise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Usage & Limits */}
                <TableRow className="bg-muted/30 font-medium">
                  <TableCell>Usage & Limits</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center bg-primary/5"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Monthly Traces</TableCell>
                  <TableCell className="text-center">50K</TableCell>
                  <TableCell className="text-center bg-primary/5">500K</TableCell>
                  <TableCell className="text-center">5M</TableCell>
                  <TableCell className="text-center">Unlimited</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Data Retention</TableCell>
                  <TableCell className="text-center">7 days</TableCell>
                  <TableCell className="text-center bg-primary/5">30 days</TableCell>
                  <TableCell className="text-center">90 days</TableCell>
                  <TableCell className="text-center">Custom</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Projects</TableCell>
                  <TableCell className="text-center">1</TableCell>
                  <TableCell className="text-center bg-primary/5">5</TableCell>
                  <TableCell className="text-center">Unlimited</TableCell>
                  <TableCell className="text-center">Unlimited</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Team Members</TableCell>
                  <TableCell className="text-center">1</TableCell>
                  <TableCell className="text-center bg-primary/5">5</TableCell>
                  <TableCell className="text-center">Unlimited</TableCell>
                  <TableCell className="text-center">Unlimited</TableCell>
                </TableRow>

                {/* Core Features */}
                <TableRow className="bg-muted/30 font-medium">
                  <TableCell>Core Features</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center bg-primary/5"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Tracing & Debugging</TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Prompt Management</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Evaluation Framework</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Cost & Latency Analytics</TableCell>
                  <TableCell className="text-center">Basic</TableCell>
                  <TableCell className="text-center bg-primary/5">Advanced</TableCell>
                  <TableCell className="text-center">Advanced</TableCell>
                  <TableCell className="text-center">Custom</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Custom Dashboards</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>

                {/* Integrations */}
                <TableRow className="bg-muted/30 font-medium">
                  <TableCell>Integrations</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center bg-primary/5"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Python SDK</TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">TypeScript SDK</TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">REST API</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Webhooks</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">OpenTelemetry</TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>

                {/* Security & Compliance */}
                <TableRow className="bg-muted/30 font-medium">
                  <TableCell>Security & Compliance</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center bg-primary/5"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">SSO (Google, GitHub)</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">SAML SSO</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Audit Logs</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">Basic</TableCell>
                  <TableCell className="text-center">Advanced</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">SOC 2 Type II</TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">HIPAA Compliance</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Self-Hosting Option</TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>

                {/* Support */}
                <TableRow className="bg-muted/30 font-medium">
                  <TableCell>Support</TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center bg-primary/5"></TableCell>
                  <TableCell className="text-center"></TableCell>
                  <TableCell className="text-center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Community Support</TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Email Support</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Priority Support</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Dedicated Support</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-8">Custom SLA</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center bg-primary/5">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-center mt-8">
            <Button className="gap-2" asChild>
              <Link href="https://app.brokle.ai/signup">
                Get Started Free <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
