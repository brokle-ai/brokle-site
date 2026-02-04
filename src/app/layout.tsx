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
    default: 'Brokle - The Open Source Platform for AI Teams',
    template: '%s | Brokle',
  },
  description:
    'Brokle is the open source platform for AI teams — debug, evaluate, and optimize your LLM applications with full visibility.',
  keywords: [
    'AI engineering platform',
    'AI observability',
    'LLM observability',
    'AI teams',
    'AI agents',
    'open source AI',
    'AI tracing',
    'prompt management',
    'AI evaluation',
    'OpenTelemetry',
    'langfuse alternative',
    'langsmith alternative',
    'self-hosted AI monitoring',
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
    title: 'Brokle - The Open Source Platform for AI Teams',
    description:
      'Debug, evaluate, and optimize your LLM applications with complete visibility. Open source. OpenTelemetry-native. Self-host anywhere.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Brokle',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Brokle - The Open Source Platform for AI Teams',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@brokleai',
    creator: '@brokleai',
    title: 'Brokle - The Open Source Platform for AI Teams',
    description:
      'Debug, evaluate, and optimize your LLM applications with complete visibility. Open source. OpenTelemetry-native. Self-host anywhere.',
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
      <head>
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://github.com" />

        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://github.com" crossOrigin="anonymous" />

        {/* RSS Feed */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Brokle Blog RSS Feed"
          href="/blog/feed.xml"
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased" suppressHydrationWarning>
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
