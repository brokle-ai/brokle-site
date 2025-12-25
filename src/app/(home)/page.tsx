import HomePageComponent from '@/features/home/HomePage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brokle - Open Source LLM Observability Platform',
  description:
    'Debug and improve your LLM applications with traces, evals, prompt management, and metrics. Open source, OpenTelemetry-native, enterprise-ready.',
  openGraph: {
    title: 'Brokle - Open Source LLM Observability Platform',
    description:
      'Debug and improve your LLM applications with traces, evals, prompt management, and metrics.',
    url: 'https://brokle.ai',
    siteName: 'Brokle',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brokle - Open Source LLM Observability Platform',
    description:
      'Debug and improve your LLM applications with traces, evals, prompt management, and metrics.',
  },
};

export default function Home() {
  return <HomePageComponent />;
}
