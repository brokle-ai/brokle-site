import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Evaluation - Brokle',
  description:
    'LLM evaluation and testing. Measure quality, detect regressions, and improve outputs.',
  openGraph: {
    title: 'Evaluation - Brokle',
    description:
      'LLM evaluation and testing. Measure quality, detect regressions, and improve outputs.',
    url: 'https://brokle.ai/evaluation',
    siteName: 'Brokle',
    type: 'website',
  },
};

export default function Evaluation() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Evaluation</h1>
      <p className="text-lg text-muted-foreground max-w-md">
        Comprehensive LLM evaluation with custom scorers, regression detection,
        and quality metrics.
      </p>
    </main>
  );
}
