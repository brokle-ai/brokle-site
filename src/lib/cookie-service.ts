import { CookiePreferences } from '@/components/cookie-consent';
import Cookies from 'js-cookie';

// Default cookie options
const cookieDefaults = {
  expires: 365, // days
  path: '/',
  sameSite: 'strict' as const,
  secure: typeof window !== 'undefined' ? window.location.protocol === 'https:' : true,
};

// Analytics instance placeholder
let analyticsInstance: ReturnType<typeof import('analytics').default> | null = null;

export const initializeAnalytics = async (): Promise<ReturnType<typeof import('analytics').default> | null> => {
  if (analyticsInstance) return analyticsInstance;

  try {
    // Dynamically import analytics to avoid SSR issues
    const Analytics = (await import('analytics')).default;
    const googleAnalyticsPlugin = (await import('@analytics/google-analytics')).default;

    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

    if (!measurementId) {
      // GA measurement ID not configured - analytics will be disabled
      return null;
    }

    analyticsInstance = Analytics({
      app: 'Brokle',
      plugins: [
        googleAnalyticsPlugin({
          measurementIds: [measurementId],
          gtagConfig: {
            anonymize_ip: true,
            send_page_view: false,
            cookie_flags: 'SameSite=None;Secure'
          }
        })
      ]
    });

    return analyticsInstance;
  } catch (error) {
    console.error('Failed to initialize analytics:', error);
    return null;
  }
};

export const trackPageView = async (path: string): Promise<void> => {
  const analytics = analyticsInstance || await initializeAnalytics();

  if (!analytics) {
    return;
  }

  analytics.page({
    path: path,
    title: typeof document !== 'undefined' ? document.title : ''
  });
};

export const trackEvent = async (category: string, action: string, label?: string, value?: number): Promise<void> => {
  const analytics = analyticsInstance || await initializeAnalytics();

  if (!analytics) {
    return;
  }

  analytics.track(action, {
    category,
    label,
    value
  });
};

export const initializeMarketing = (): void => {
  // TODO: Initialize marketing pixels (Facebook, LinkedIn, etc.)
  // Implementation would go here when marketing integrations are added
};

export const applyPreferences = async (preferences: CookiePreferences): Promise<boolean> => {
  if (preferences.analytics) {
    const result = await initializeAnalytics();
    if (!result) {
      return false;
    }
  } else {
    // Disable analytics if previously enabled
    analyticsInstance = null;

    // Remove Google Analytics cookies
    removeCookie('_ga');
    removeCookie('_gid');
    removeCookie('_gat');

    // Remove GA cookies from all potential domains
    if (typeof window !== 'undefined') {
      const domains = [window.location.hostname, `.${window.location.hostname}`, 'www.' + window.location.hostname, '.' + window.location.hostname];
      domains.forEach(domain => {
        removeCookie('_ga', { domain });
        removeCookie('_gid', { domain });
        removeCookie('_gat', { domain });
      });
    }
  }

  if (preferences.marketing) {
    initializeMarketing();
  }

  return true;
};

export const setCookie = (name: string, value: string, options: Record<string, unknown> = {}): void => {
  Cookies.set(name, value, { ...cookieDefaults, ...options });
};

export const getCookie = (name: string): string | undefined => {
  return Cookies.get(name);
};

export const removeCookie = (name: string, options: Record<string, unknown> = {}): void => {
  Cookies.remove(name, { path: cookieDefaults.path, ...options });
};
