import {
  Search,
  BarChart3,
  MessageSquare,
  FlaskConical,
  Play,
} from "lucide-react"
import type { FeatureTabData } from "./types"

export const featureTabsData: FeatureTabData[] = [
  {
    id: "observability",
    icon: Search,
    label: "Observability",
    title: "Capture every LLM call",
    description:
      "Complete traces of your LLM applications. Debug failures, understand latency, and track costs across all requests.",
    image: {
      src: "/images/features/traces.png",
      alt: "Brokle traces dashboard showing LLM call hierarchy with timing and token usage",
    },
    code: {
      python: `from brokle import observe

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
      javascript: `import { observe } from 'brokle';

// Wrapper auto-traces all nested calls
const handleRequest = observe(async (text: string) => {
  const res = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "Summarize:" },
      { role: "user", content: text },
    ],
  });
  return res.choices[0].message.content;
});`,
    },
    docsHref: "/docs/tracing",
    productHref: "/tracing",
    demoHref: "#",
  },
  {
    id: "metrics",
    icon: BarChart3,
    label: "Metrics",
    title: "Track cost, latency, and quality",
    description:
      "Real-time dashboards showing token usage, API costs, response times, and error rates across all your LLM providers.",
    image: {
      src: "/images/features/metrics.png",
      alt: "Brokle metrics dashboard with cost breakdown, latency charts, and usage analytics",
    },
    code: {
      python: `# Metrics are captured automatically
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
      javascript: `// Metrics are captured automatically
// View in your Brokle dashboard:
//
// - Token usage by model
// - Cost breakdown by provider
// - P50/P95/P99 latency
// - Error rates and types
// - Request volume over time

// Custom metrics
brokle.track("user_satisfaction", { score: 4.5 });
brokle.track("response_length", { value: response.length });`,
    },
    docsHref: "/docs/analytics",
    demoHref: "#",
  },
  {
    id: "prompts",
    icon: MessageSquare,
    label: "Prompt Management",
    title: "Version and deploy prompts",
    description:
      "Manage prompts as code. Version control, A/B testing, and instant rollbacks without code deployments.",
    image: {
      src: "/images/features/prompts.png",
      alt: "Brokle prompt management interface with version history and deployment labels",
    },
    code: {
      python: `from brokle import get_prompt

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
      javascript: `import { getPrompt } from 'brokle';

// Fetch the latest production prompt
const prompt = await brokle.getPrompt({
  name: "summarizer",
  label: "production"  // or "staging", "v1.2.0"
});

// Use with your LLM
const response = await openai.chat.completions.create({
  model: prompt.config.model,
  messages: prompt.compile({ text: userInput })
});`,
    },
    docsHref: "/docs/prompt-management",
    productHref: "/prompt-management",
    demoHref: "#",
  },
  {
    id: "evaluation",
    icon: FlaskConical,
    label: "Evaluation",
    title: "Score and evaluate outputs",
    description:
      "Automated evals with LLM-as-judge, custom scorers, and human annotation. Build quality benchmarks at scale.",
    image: {
      src: "/images/features/evaluations.png",
      alt: "Brokle evaluation results showing quality scores and benchmark comparisons",
    },
    code: {
      python: `from brokle import evaluate

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
      javascript: `import { evaluate } from 'brokle';

// Run evaluation on a dataset
const results = await brokle.evaluate({
  dataset: "golden_set_v2",
  evaluators: [
    "relevance",      // Built-in scorer
    "hallucination",  // LLM-as-judge
    myCustomScorer,   // Your own logic
  ],
  model: "gpt-4",
});

// Results tracked in dashboard`,
    },
    docsHref: "/docs/evaluation",
    productHref: "/evaluation",
    demoHref: "#",
  },
  {
    id: "playground",
    icon: Play,
    label: "Playground",
    title: "Test prompts interactively",
    description:
      "Iterate on prompts in real-time. Compare outputs across models, test with different inputs, and save winning variants.",
    image: {
      src: "/images/features/playground.png",
      alt: "Brokle playground with side-by-side model comparison and variable substitution",
    },
    displayMode: "image-only",
    docsHref: "/docs/playground",
    demoHref: "#",
  },
]
