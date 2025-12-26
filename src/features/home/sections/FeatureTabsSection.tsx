'use client'

import { useState, useRef, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DisplayHeading } from "@/components/shared"
import {
  Search,
  BarChart3,
  MessageSquare,
  FlaskConical,
  Play,
  Check,
  Copy,
  ExternalLink,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react"
import Link from "next/link"

const featureTabs = [
  {
    id: "observability",
    label: "Observability",
    icon: Search,
    title: "Capture every LLM call",
    description: "Complete traces of your LLM applications. Debug failures, understand latency, and track costs across all requests.",
    code: `from brokle import observe

@observe()  # Decorator auto-traces all nested calls
def handle_request(text: str) -> str:
    res = openai.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "Summarize:"},
            {"role": "user", "content": text},
        ],
    )
    return res.choices[0].message.content`,
    docsLink: "/tracing",
    docsText: "Documentation",
    demoLink: "#",
    demoText: "Watch Demo",
  },
  {
    id: "metrics",
    label: "Metrics",
    icon: BarChart3,
    title: "Track cost, latency, and quality",
    description: "Real-time dashboards showing token usage, API costs, response times, and error rates across all your LLM providers.",
    code: `# Metrics are captured automatically
# View in your Brokle dashboard:
#
# - Token usage by model
# - Cost breakdown by provider
# - P50/P95/P99 latency
# - Error rates and types
# - Request volume over time

# Custom metrics
brokle.track("user_satisfaction", score=4.5)
brokle.track("response_length", value=len(response))`,
    docsLink: "/analytics",
    docsText: "Documentation",
    demoLink: "#",
    demoText: "Watch Demo",
  },
  {
    id: "prompts",
    label: "Prompt Management",
    icon: MessageSquare,
    title: "Version and deploy prompts",
    description: "Manage prompts as code. Version control, A/B testing, and instant rollbacks without code deployments.",
    code: `from brokle import get_prompt

# Fetch the latest production prompt
prompt = brokle.get_prompt(
    name="summarizer",
    label="production"  # or "staging", "v1.2.0"
)

# Use with your LLM
response = openai.chat.completions.create(
    model=prompt.config["model"],
    messages=prompt.compile(text=user_input)
)`,
    docsLink: "/prompt-management",
    docsText: "Documentation",
    demoLink: "#",
    demoText: "Watch Demo",
  },
  {
    id: "evaluation",
    label: "Evaluation",
    icon: FlaskConical,
    title: "Score and evaluate outputs",
    description: "Automated evals with LLM-as-judge, custom scorers, and human annotation. Build quality benchmarks at scale.",
    code: `from brokle import evaluate

# Run evaluation on a dataset
results = brokle.evaluate(
    dataset="golden_set_v2",
    evaluators=[
        "relevance",      # Built-in scorer
        "hallucination",  # LLM-as-judge
        my_custom_scorer, # Your own logic
    ],
    model="gpt-4",
)

# Results tracked in dashboard`,
    docsLink: "/evaluation",
    docsText: "Documentation",
    demoLink: "#",
    demoText: "Watch Demo",
  },
  {
    id: "playground",
    label: "Playground",
    icon: Play,
    title: "Test prompts interactively",
    description: "Iterate on prompts in real-time. Compare outputs across models, test with different inputs, and save winning variants.",
    code: `# The Playground is a UI feature
# Access it at app.brokle.ai/playground
#
# Features:
# - Side-by-side model comparison
# - Variable substitution
# - Save prompt versions
# - Share with teammates
# - Export to SDK code`,
    docsLink: "/docs/playground",
    docsText: "Documentation",
    demoLink: "#",
    demoText: "Watch Demo",
  },
]

// Placeholder dashboard component for each tab
function DashboardPlaceholder({ tabId }: { tabId: string }) {
  if (tabId === "observability") {
    return (
      <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/30">
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Traces</span>
          </div>
          <Badge variant="outline" className="text-xs">Live</Badge>
        </div>
        {/* Trace list */}
        <div className="divide-y">
          {[
            { id: "QA-Chatbot", duration: "12.7s", status: "success", tokens: 1171 },
            { id: "handle-chatbot-message", duration: "12.7s", status: "success", tokens: 890 },
            { id: "get-brokle-prompt", duration: "0.08s", status: "success", tokens: 0 },
            { id: "create-mcp-client", duration: "0.08s", status: "success", tokens: 0 },
            { id: "ai.streamText", duration: "12.63s", status: "success", tokens: 1171 },
          ].map((trace, i) => (
            <div key={i} className="px-4 py-2.5 hover:bg-muted/30 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {trace.status === "success" ? (
                    <CheckCircle className="h-3.5 w-3.5 text-success" />
                  ) : (
                    <AlertCircle className="h-3.5 w-3.5 text-destructive" />
                  )}
                  <span className="text-sm font-mono">{trace.id}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {trace.duration}
                  </span>
                  {trace.tokens > 0 && (
                    <span>{trace.tokens} tokens</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (tabId === "metrics") {
    return (
      <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b bg-muted/30">
          <span className="text-sm font-medium">Dashboard</span>
        </div>
        <div className="p-4 grid grid-cols-2 gap-4">
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="text-xs text-muted-foreground mb-1">Total Requests</div>
            <div className="text-2xl font-bold">3,310,278</div>
            <div className="text-xs text-success mt-1">+12.5% vs last week</div>
          </div>
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="text-xs text-muted-foreground mb-1">Total Cost</div>
            <div className="text-2xl font-bold">$93,128</div>
            <div className="text-xs text-muted-foreground mt-1">This month</div>
          </div>
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="text-xs text-muted-foreground mb-1">Avg Latency</div>
            <div className="text-2xl font-bold">6.05s</div>
            <div className="text-xs text-muted-foreground mt-1">P50: 4.2s</div>
          </div>
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="text-xs text-muted-foreground mb-1">Error Rate</div>
            <div className="text-2xl font-bold">0.13%</div>
            <div className="text-xs text-success mt-1">Below threshold</div>
          </div>
        </div>
      </div>
    )
  }

  if (tabId === "prompts") {
    return (
      <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b bg-muted/30 flex items-center justify-between">
          <span className="text-sm font-medium">Prompt: summarizer</span>
          <Badge variant="secondary" className="text-xs">v3.2</Badge>
        </div>
        <div className="p-4 space-y-3">
          <div className="space-y-2">
            <div className="text-xs font-medium text-muted-foreground">System</div>
            <div className="bg-muted/30 rounded p-3 text-sm font-mono">
              You are a helpful assistant that summarizes text concisely.
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-xs font-medium text-muted-foreground">User Template</div>
            <div className="bg-muted/30 rounded p-3 text-sm font-mono">
              Summarize the following in 2-3 sentences: {"{{text}}"}
            </div>
          </div>
          <div className="flex items-center gap-2 pt-2">
            <Badge className="bg-success/10 text-success border-success/20">production</Badge>
            <Badge variant="outline">staging</Badge>
          </div>
        </div>
      </div>
    )
  }

  if (tabId === "evaluation") {
    return (
      <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b bg-muted/30">
          <span className="text-sm font-medium">Evaluation Results</span>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            {[
              { name: "Relevance", score: 0.92, status: "pass" },
              { name: "Hallucination", score: 0.05, status: "pass" },
              { name: "Coherence", score: 0.88, status: "pass" },
              { name: "Completeness", score: 0.76, status: "warn" },
            ].map((eval_) => (
              <div key={eval_.name} className="flex items-center justify-between">
                <span className="text-sm">{eval_.name}</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        eval_.status === "pass" ? "bg-success" : "bg-warning"
                      }`}
                      style={{ width: `${eval_.score * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-mono w-12 text-right">{eval_.score.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (tabId === "playground") {
    return (
      <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b bg-muted/30 flex items-center justify-between">
          <span className="text-sm font-medium">Playground</span>
          <div className="flex gap-2">
            <Badge variant="outline" className="text-xs">GPT-4</Badge>
            <Badge variant="outline" className="text-xs">Claude 3</Badge>
          </div>
        </div>
        <div className="p-4 space-y-3">
          <div className="bg-muted/30 rounded p-3">
            <div className="text-xs text-muted-foreground mb-2">Input</div>
            <div className="text-sm">Explain quantum computing to a 5 year old</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-muted/20 rounded p-3">
              <div className="text-xs text-muted-foreground mb-2">GPT-4</div>
              <div className="text-sm text-muted-foreground">
                Imagine you have magic building blocks...
              </div>
            </div>
            <div className="bg-muted/20 rounded p-3">
              <div className="text-xs text-muted-foreground mb-2">Claude 3</div>
              <div className="text-sm text-muted-foreground">
                Think of a really special computer...
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export function FeatureTabsSection() {
  const [copiedTab, setCopiedTab] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("observability")
  const copyTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current)
      }
    }
  }, [])

  const copyToClipboard = (code: string, tab: string) => {
    navigator.clipboard.writeText(code)
    setCopiedTab(tab)

    // Clear existing timeout before setting new one
    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current)
    }
    copyTimeoutRef.current = setTimeout(() => setCopiedTab(null), 2000)
  }

  return (
    <section className="py-20 md:py-28 lg:py-32 border-t">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <DisplayHeading as="h2" className="mb-4">
            Complete visibility into your AI stack
          </DisplayHeading>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, debug, and optimize production AI applications.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <TabsList className="h-auto p-1 bg-muted flex-wrap">
              {featureTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex items-center gap-2 px-4 py-2.5 data-[state=active]:bg-background"
                >
                  <tab.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Content */}
          {featureTabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Left: Code */}
                <div className="space-y-4">
                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{tab.title}</h3>
                    <p className="text-muted-foreground">{tab.description}</p>
                  </div>

                  {/* Code Block */}
                  <div className="relative rounded-lg border bg-zinc-950 text-zinc-50 overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500/80" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                          <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <span className="text-xs text-zinc-500 ml-2">Python SDK</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 text-xs text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800"
                        onClick={() => copyToClipboard(tab.code, tab.id)}
                      >
                        {copiedTab === tab.id ? (
                          <>
                            <Check className="h-3 w-3 mr-1" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3 mr-1" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                    <pre className="p-4 text-sm overflow-x-auto max-h-80">
                      <code className="font-mono text-zinc-300">{tab.code}</code>
                    </pre>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <Link
                      href={tab.docsLink}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {tab.docsText}
                    </Link>
                    <Link
                      href={tab.demoLink}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      <Play className="h-3.5 w-3.5" />
                      {tab.demoText}
                    </Link>
                  </div>
                </div>

                {/* Right: Dashboard Placeholder */}
                <div className="lg:sticky lg:top-24">
                  <DashboardPlaceholder tabId={tab.id} />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
