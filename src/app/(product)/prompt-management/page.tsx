import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prompt Management - Brokle',
  description:
    'Version, test, and deploy prompts. Collaborative prompt engineering with version control.',
  openGraph: {
    title: 'Prompt Management - Brokle',
    description:
      'Version, test, and deploy prompts. Collaborative prompt engineering with version control.',
    url: 'https://brokle.ai/prompt-management',
    siteName: 'Brokle',
    type: 'website',
  },
};

export default function PromptManagement() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Prompt Management</h1>
      <p className="text-lg text-muted-foreground max-w-md">
        Version control for prompts. Test, iterate, and deploy with confidence.
      </p>
    </main>
  );
}
