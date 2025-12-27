import { FileSearch, Database, CheckCircle, Gauge, GitBranch, Bug } from "lucide-react"
import type { UseCasePageData } from "@/types/use-case-page"

export const ragApplicationsData: UseCasePageData = {
  slug: "rag-applications",
  title: "RAG Application Observability",
  subtitle: "Debug and optimize your retrieval-augmented generation pipelines",
  metaDescription:
    "Trace and debug RAG applications with complete visibility into retrieval, context, and generation. Optimize relevance and reduce hallucinations with Brokle.",
  heroDescription:
    "RAG applications are complex. Brokle gives you visibility into every step—from document retrieval to context assembly to final generation. Debug retrieval failures, optimize relevance, and ship better RAG faster.",
  features: [
    {
      icon: FileSearch,
      title: "Retrieval Tracing",
      description:
        "See exactly what documents are retrieved for each query. Debug relevance issues and understand why certain documents are ranked higher.",
    },
    {
      icon: Database,
      title: "Context Visibility",
      description:
        "Inspect the full context passed to your LLM. Identify when context is too long, irrelevant, or missing key information.",
    },
    {
      icon: CheckCircle,
      title: "Relevance Evaluation",
      description:
        "Automatically evaluate retrieval relevance and answer quality. Catch issues before they impact users.",
    },
    {
      icon: Gauge,
      title: "Performance Metrics",
      description:
        "Track end-to-end latency, retrieval time, and generation time. Identify bottlenecks in your RAG pipeline.",
    },
    {
      icon: GitBranch,
      title: "Prompt Iteration",
      description:
        "Experiment with different prompts and context formats. A/B test changes and measure their impact.",
    },
    {
      icon: Bug,
      title: "Hallucination Detection",
      description:
        "Identify when your LLM generates content not grounded in the retrieved context. Build guardrails to prevent hallucinations.",
    },
  ],
  codeExamples: [
    {
      title: "Trace your RAG pipeline",
      language: "python",
      code: `from brokle import Brokle

brokle = Brokle()

@brokle.trace()
def rag_query(question: str):
    # Trace retrieval
    with brokle.span("retrieval") as span:
        docs = vector_store.similarity_search(question, k=5)
        span.set_attributes({
            "docs.count": len(docs),
            "docs.ids": [d.id for d in docs]
        })

    # Trace generation
    with brokle.span("generation") as span:
        context = "\\n".join([d.content for d in docs])
        response = llm.generate(question, context)
        span.set_attributes({
            "context.length": len(context),
            "response.length": len(response)
        })

    return response`,
    },
    {
      title: "Add relevance evaluation",
      language: "python",
      code: `# Automatically evaluate retrieval relevance
@brokle.trace()
def rag_with_eval(question: str):
    docs = retrieve_documents(question)
    response = generate_response(question, docs)

    # Run relevance evaluation
    brokle.evaluate(
        name="retrieval_relevance",
        input=question,
        output=response,
        context=[d.content for d in docs]
    )

    return response`,
    },
  ],
}
