export const pricingFaqs = [
  {
    question: "What counts as a trace?",
    answer:
      "A trace represents a single LLM request or a chain of related LLM calls. For simple applications, one user request typically equals one trace. For complex chains or agents, multiple LLM calls within the same execution flow count as a single trace with multiple spans.",
  },
  {
    question: "How does the free trial work?",
    answer:
      "All paid plans include a 14-day free trial with full access to all features. No credit card is required to start. At the end of the trial, you can choose to upgrade to a paid plan or continue with the free Hobby tier.",
  },
  {
    question: "Can I self-host Brokle?",
    answer:
      "Yes! Brokle is open-source and can be self-hosted on your own infrastructure. The self-hosting option is available for all plans and is especially popular with Enterprise customers who need to keep data within their own environment for compliance reasons.",
  },
  {
    question: "What happens if I exceed my trace limit?",
    answer:
      "We won't cut off your service. If you approach your trace limit, we'll notify you and offer options to upgrade your plan or purchase additional trace capacity. For Enterprise customers, we can set up custom overage pricing.",
  },
  {
    question: "Do you offer discounts for startups?",
    answer:
      "Yes! We offer special pricing for early-stage startups, open-source projects, and non-profit organizations. Please contact our team to learn more about our discount programs.",
  },
  {
    question: "What's the difference between cloud and self-hosted?",
    answer:
      "The cloud version is fully managed by us - no infrastructure to maintain. Self-hosted gives you complete control over your data and infrastructure. Both versions use the same open-source codebase and have feature parity. Enterprise customers often start with cloud and migrate to self-hosted as their needs evolve.",
  },
  {
    question: "What compliance certifications do you have?",
    answer:
      "Brokle Cloud is SOC 2 Type II certified and GDPR compliant. For HIPAA compliance, we recommend our Enterprise plan with a signed BAA, or self-hosting within your own HIPAA-compliant infrastructure.",
  },
];
