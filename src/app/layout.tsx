import { RootProvider } from 'fumadocs-ui/provider/next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from '@/components/theme-provider';
import { CookieConsentProvider } from '@/providers/cookie-consent-provider';
import { CookieConsent } from '@/components/cookie-consent';
import { AnalyticsTracker } from '@/components/analytics-tracker';
import { Toaster } from 'sonner';
import type { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
  title: {
    default: 'Brokle - Open Source AI Observability Platform',
    template: '%s | Brokle',
  },
  description:
    'Debug and improve your AI applications with traces, evals, prompt management, and metrics. Open source, OpenTelemetry-native, enterprise-ready.',
  keywords: [
    'AI observability',
    'LLM observability',
    'LLM tracing',
    'prompt management',
    'AI monitoring',
    'LLM evaluation',
    'OpenTelemetry',
  ],
  authors: [{ name: 'Brokle' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Brokle - Open Source AI Observability Platform',
    description:
      'Debug and improve your AI applications with traces, evals, prompt management, and metrics.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Brokle',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Brokle - AI Observability Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brokle - Open Source AI Observability Platform',
    description:
      'Debug and improve your AI applications with traces, evals, prompt management, and metrics.',
    images: ['/images/twitter-card.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col antialiased">
        <CookieConsentProvider>
          <AnalyticsTracker />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <RootProvider>{children}</RootProvider>
            <CookieConsent />
            <Toaster />
          </ThemeProvider>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
