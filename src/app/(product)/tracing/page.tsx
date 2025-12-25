import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tracing - Brokle',
  description:
    'Distributed tracing for LLM applications. Debug and optimize your AI workflows.',
  openGraph: {
    title: 'Tracing - Brokle',
    description:
      'Distributed tracing for LLM applications. Debug and optimize your AI workflows.',
    url: 'https://brokle.ai/tracing',
    siteName: 'Brokle',
    type: 'website',
  },
};

export default function Tracing() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Tracing</h1>
      <p className="text-lg text-muted-foreground max-w-md">
        OpenTelemetry-native distributed tracing for LLM applications. Debug
        latency, track token usage, and optimize your AI workflows.
      </p>
    </main>
  );
}
