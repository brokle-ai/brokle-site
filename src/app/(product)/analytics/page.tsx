import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Analytics - Brokle',
  description:
    'LLM cost analytics and usage metrics. Track spending, optimize performance.',
  openGraph: {
    title: 'Analytics - Brokle',
    description:
      'LLM cost analytics and usage metrics. Track spending, optimize performance.',
    url: 'https://brokle.ai/analytics',
    siteName: 'Brokle',
    type: 'website',
  },
};

export default function Analytics() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Analytics</h1>
      <p className="text-lg text-muted-foreground max-w-md">
        Real-time cost analytics, usage tracking, and performance metrics for
        your LLM applications.
      </p>
    </main>
  );
}
