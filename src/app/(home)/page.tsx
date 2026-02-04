import HomePageComponent from '@/features/home/HomePage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brokle - The open source platform for AI teams',
  description:
    'Debug, evaluate, and optimize your LLM applications with complete visibility. Open source. OpenTelemetry-native. Self-host anywhere.',
  openGraph: {
    title: 'Brokle - The open source platform for AI teams',
    description:
      'Debug, evaluate, and optimize your LLM applications with complete visibility. Open source. OpenTelemetry-native. Self-host anywhere.',
    url: 'https://brokle.com',
    siteName: 'Brokle',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brokle - The open source platform for AI teams',
    description:
      'Debug, evaluate, and optimize your LLM applications with complete visibility. Open source. OpenTelemetry-native. Self-host anywhere.',
  },
};

export default function Home() {
  return <HomePageComponent />;
}
