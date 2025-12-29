import { RootProvider } from 'fumadocs-ui/provider/next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from '@/components/theme-provider';
import { CookieConsentProvider } from '@/providers/cookie-consent-provider';
import { CookieConsent } from '@/components/cookie-consent';
import { AnalyticsTracker } from '@/components/analytics-tracker';
import { ScrollProvider } from '@/contexts/ScrollContext';
import { OrganizationSchema, SoftwareApplicationSchema } from '@/components/seo';
import { Toaster } from 'sonner';
import type { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://brokle.com'),
  title: {
    default: 'Brokle - Open Source AI Observability Platform',
    template: '%s | Brokle',
  },
  description:
    'Open source LLM observability platform. Debug, evaluate, and optimize AI applications with traces, evals, prompt management, and analytics. Self-host or cloud. OpenTelemetry-native.',
  keywords: [
    'AI observability',
    'LLM observability',
    'open source LLM',
    'LLM tracing',
    'prompt management',
    'AI monitoring',
    'LLM evaluation',
    'OpenTelemetry',
    'langfuse alternative',
    'langsmith alternative',
    'self-hosted LLM monitoring',
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
      'Open source LLM observability. Debug, evaluate, and optimize AI applications. Self-host or cloud.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Brokle',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Brokle - Open Source AI Observability Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@brokleai',
    creator: '@brokleai',
    title: 'Brokle - Open Source AI Observability Platform',
    description:
      'Open source LLM observability. Debug, evaluate, and optimize AI applications. Self-host or cloud.',
    images: ['/images/twitter-card.png'],
  },
  alternates: {
    canonical: '/',
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
        <OrganizationSchema />
        <SoftwareApplicationSchema />
        <CookieConsentProvider>
          <AnalyticsTracker />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ScrollProvider>
              <RootProvider>{children}</RootProvider>
            </ScrollProvider>
            <CookieConsent />
            <Toaster />
          </ThemeProvider>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
