import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bug, Github, Lightbulb, Settings, Zap } from "lucide-react"
import Link from "next/link"

export default function ChangelogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Product Updates</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Changelog</h1>
            <p className="text-xl text-muted-foreground">
              Stay up to date with the latest features, improvements, and fixes in Brokle.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Release */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <Badge variant="outline" className="mb-2">
                  Latest Release
                </Badge>
                <h2 className="text-3xl font-bold">Version 2.5.0</h2>
                <p className="text-muted-foreground">Released on November 28, 2025</p>
              </div>
              <Button variant="outline" className="gap-2" asChild>
                <Link href="https://github.com/brokle-ai/brokle/releases" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  Release Notes
                </Link>
              </Button>
            </div>

            <Card className="mb-8 border-0 shadow-none bg-background">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <CardTitle>New Features</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium text-lg">Span-Level Cost Attribution</h3>
                  <p className="text-muted-foreground">
                    Track costs at the individual span level. See exactly how much each LLM call
                    costs within complex chains and agents.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg">Prompt Playground Improvements</h3>
                  <p className="text-muted-foreground">
                    New side-by-side comparison mode for A/B testing prompts. Test multiple
                    variants simultaneously and compare outputs.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg">LangGraph Integration</h3>
                  <p className="text-muted-foreground">
                    First-class support for LangGraph state machines. Visualize graph execution
                    paths and debug complex agent workflows.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8 border-0 shadow-none bg-background">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  <CardTitle>Improvements</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium text-lg">Trace Loading Performance</h3>
                  <p className="text-muted-foreground">
                    3x faster trace loading for large spans. Improved pagination and lazy loading
                    for traces with thousands of spans.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg">Enhanced Search Filters</h3>
                  <p className="text-muted-foreground">
                    New filters for model name, cost range, and token count. Save and share
                    custom filter presets with your team.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg">Python SDK Async Support</h3>
                  <p className="text-muted-foreground">
                    Improved async/await support in the Python SDK. Better integration with
                    FastAPI and async frameworks.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none bg-background">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Bug className="h-5 w-5 text-primary" />
                  <CardTitle>Bug Fixes</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium text-lg">Streaming Response Capture</h3>
                  <p className="text-muted-foreground">
                    Fixed an issue where streaming responses could be truncated in certain edge cases.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg">Evaluation Score Display</h3>
                  <p className="text-muted-foreground">
                    Fixed incorrect rounding of evaluation scores in the dashboard.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg">Time Zone Handling</h3>
                  <p className="text-muted-foreground">
                    Fixed time zone display issues in trace timestamps for non-UTC users.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Previous Releases */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Previous Releases</h2>

            <div className="space-y-12">
              {/* Version 2.4.0 */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Version 2.4.0</h3>
                    <p className="text-muted-foreground">Released on October 15, 2025</p>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-1" asChild>
                    <Link href="https://github.com/brokle-ai/brokle/releases/tag/v2.4.0" target="_blank" rel="noopener noreferrer">
                      Details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Custom Evaluators</span>
                      <p className="text-muted-foreground">
                        Create custom evaluation functions with Python. Define your own quality metrics and scoring logic.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Settings className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Anthropic Claude 3.5 Support</span>
                      <p className="text-muted-foreground">
                        Full support for Claude 3.5 Sonnet including function calling and tool use tracing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Bug className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Bug Fixes</span>
                      <p className="text-muted-foreground">
                        Fixed SDK initialization issues and improved error handling for rate-limited APIs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Version 2.3.0 */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Version 2.3.0</h3>
                    <p className="text-muted-foreground">Released on September 1, 2025</p>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-1" asChild>
                    <Link href="https://github.com/brokle-ai/brokle/releases/tag/v2.3.0" target="_blank" rel="noopener noreferrer">
                      Details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Prompt Version Comparison</span>
                      <p className="text-muted-foreground">
                        Visual diff view for comparing prompt versions. See exactly what changed between deployments.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Settings className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Team Collaboration Features</span>
                      <p className="text-muted-foreground">
                        Comments on traces, shared annotations, and team activity feed for better collaboration.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Bug className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Multiple Bug Fixes</span>
                      <p className="text-muted-foreground">
                        Fixed dashboard refresh issues and improved WebSocket connection stability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Version 2.2.0 */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Version 2.2.0</h3>
                    <p className="text-muted-foreground">Released on July 20, 2025</p>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-1" asChild>
                    <Link href="https://github.com/brokle-ai/brokle/releases/tag/v2.2.0" target="_blank" rel="noopener noreferrer">
                      Details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">OpenTelemetry Native</span>
                      <p className="text-muted-foreground">
                        Native OTLP ingestion endpoint. Send traces using any OpenTelemetry-compatible SDK.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Settings className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Cost Analytics Dashboard</span>
                      <p className="text-muted-foreground">
                        New analytics dashboard with provider breakdown, daily spend trends, and cost alerts.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Bug className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Performance Improvements</span>
                      <p className="text-muted-foreground">
                        50% reduction in SDK overhead. Improved batching and compression for high-volume tracing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link href="https://github.com/brokle-ai/brokle/releases" target="_blank" rel="noopener noreferrer">
                  View All Releases
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Coming Soon</Badge>
              <h2 className="text-3xl font-bold mb-4">Product Roadmap</h2>
              <p className="text-xl text-muted-foreground">
                See what we&apos;re working on next. Have a feature request? Let us know!
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-none bg-background">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    <CardTitle>Q1 2026</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg">Real-time Alerting</h3>
                    <p className="text-muted-foreground">
                      Set up alerts for cost thresholds, error rates, latency spikes, and quality score drops.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-lg">AI-Powered Debugging</h3>
                    <p className="text-muted-foreground">
                      Automatic root cause analysis for failed traces. Get suggestions for fixing prompt issues.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-lg">Dataset Management</h3>
                    <p className="text-muted-foreground">
                      Create and manage evaluation datasets directly from production traces.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-none bg-background">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    <CardTitle>Q2 2026</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg">Fine-tuning Integration</h3>
                    <p className="text-muted-foreground">
                      Export curated traces for fine-tuning. Direct integration with OpenAI and Anthropic fine-tuning APIs.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-lg">Multi-Model Routing Analytics</h3>
                    <p className="text-muted-foreground">
                      Detailed analytics for model routing decisions. Optimize cost vs quality tradeoffs.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-lg">Compliance Reports</h3>
                    <p className="text-muted-foreground">
                      Automated compliance reporting for SOC 2, GDPR, and HIPAA requirements.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Have a feature request? We&apos;d love to hear from you!</p>
              <Button asChild>
                <Link href="https://github.com/brokle-ai/brokle/discussions" target="_blank" rel="noopener noreferrer">
                  Submit Feature Request
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Follow our GitHub repository to get notified about new releases.
            </p>
            <Button variant="outline" className="gap-2" asChild>
              <Link href="https://github.com/brokle-ai/brokle" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                Watch on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
