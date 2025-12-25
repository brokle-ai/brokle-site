import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security - Brokle',
  description:
    'Security and compliance at Brokle. SOC 2 Type II, GDPR, and enterprise-grade security.',
  openGraph: {
    title: 'Security - Brokle',
    description:
      'Security and compliance at Brokle. SOC 2 Type II, GDPR, and enterprise-grade security.',
    url: 'https://brokle.ai/security',
    siteName: 'Brokle',
    type: 'website',
  },
};

export default function Security() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Security & Compliance</h1>
      <p className="text-lg text-muted-foreground max-w-md">
        Enterprise-grade security with SOC 2 Type II compliance, GDPR support,
        and data encryption at rest and in transit.
      </p>
    </main>
  );
}
