import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integrations - Brokle',
  description:
    'Connect Brokle with your favorite tools. OpenAI, Anthropic, LangChain, and more.',
  openGraph: {
    title: 'Integrations - Brokle',
    description:
      'Connect Brokle with your favorite tools. OpenAI, Anthropic, LangChain, and more.',
    url: 'https://brokle.ai/integrations',
    siteName: 'Brokle',
    type: 'website',
  },
};

export default function Integrations() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Integrations</h1>
      <p className="text-lg text-muted-foreground max-w-md">
        Connect Brokle with OpenAI, Anthropic, LangChain, LlamaIndex, and more.
      </p>
    </main>
  );
}
