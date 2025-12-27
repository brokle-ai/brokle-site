import { Users, TrendingUp, Zap, Shield, GitBranch, BarChart3 } from "lucide-react"
import type { UseCasePageData } from "@/types/use-case-page"

export const llmTeamsData: UseCasePageData = {
  slug: "llm-teams",
  title: "Observability for LLM Teams",
  subtitle: "Built for AI engineers who ship fast",
  metaDescription:
    "Complete observability for LLM development teams. Debug faster, ship confidently, and iterate continuously with Brokle.",
  heroDescription:
    "Give your AI engineering team the tools they need to build, debug, and optimize LLM applications. From individual developers to enterprise teams, Brokle scales with you.",
  features: [
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Share traces, annotations, and insights across your team. Collaborate on debugging and optimization in real-time.",
    },
    {
      icon: TrendingUp,
      title: "Performance Insights",
      description:
        "Track latency, throughput, and error rates across your entire LLM pipeline. Identify bottlenecks before they impact users.",
    },
    {
      icon: Zap,
      title: "Real-time Debugging",
      description:
        "See every LLM call as it happens. Jump from an error alert to the exact trace in seconds.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "SOC 2 compliant with SSO, RBAC, and audit logs. Self-host for complete data control.",
    },
    {
      icon: GitBranch,
      title: "Prompt Versioning",
      description:
        "Version control for prompts with A/B testing. Roll back instantly if something goes wrong.",
    },
    {
      icon: BarChart3,
      title: "Cost Analytics",
      description:
        "Track spend across providers and models. Optimize costs without sacrificing quality.",
    },
  ],
  codeExamples: [
    {
      title: "Install the SDK",
      language: "bash",
      code: `pip install brokle`,
    },
    {
      title: "Initialize and trace",
      language: "python",
      code: `from brokle import Brokle

brokle = Brokle()

@brokle.trace()
def generate_response(user_input: str):
    # Your LLM logic here
    response = openai.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": user_input}]
    )
    return response.choices[0].message.content`,
    },
  ],
}
