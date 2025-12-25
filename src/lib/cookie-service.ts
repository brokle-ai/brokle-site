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
      console.warn('Google Analytics measurement ID not configured. Set NEXT_PUBLIC_GA_MEASUREMENT_ID environment variable.');
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

    console.log('Analytics initialized successfully');
    return analyticsInstance;
  } catch (error) {
    console.error('Failed to initialize analytics:', error);
    return null;
  }
};

export const trackPageView = async (path: string): Promise<void> => {
  const analytics = analyticsInstance || await initializeAnalytics();

  if (!analytics) {
    console.warn('Analytics not available. Page view not tracked.');
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
    console.warn('Analytics not available. Event not tracked.');
    return;
  }

  analytics.track(action, {
    category,
    label,
    value
  });
};

export const initializeMarketing = (): void => {
  // Initialize marketing pixels (Facebook, LinkedIn, etc.)
  console.log('Marketing cookies initialized');

  // Example: Facebook Pixel implementation would go here
};

export const applyPreferences = (preferences: CookiePreferences): boolean => {
  console.log("Applying cookie preferences:", preferences);

  // Set a flag to track initialization success
  let analyticsSuccess = false;

  if (preferences.analytics) {
    initializeAnalytics().then(result => {
      analyticsSuccess = !!result;
      console.log("Analytics initialization result:", analyticsSuccess ? "Success" : "Failed");
    });
  } else {
    // Disable analytics if previously enabled
    analyticsInstance = null;

    // Optionally remove Google Analytics cookies
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

  if (preferences.preferences) {
    // Enable preference cookies
    console.log('Preference cookies initialized');
  }

  // Return overall success status
  return preferences.analytics ? analyticsSuccess : true;
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
