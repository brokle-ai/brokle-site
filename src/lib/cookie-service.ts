import { CookiePreferences } from '@/components/cookie-consent';
import Cookies from 'js-cookie';

// Default cookie options
const cookieDefaults = {
  expires: 365, // days
  path: '/',
  sameSite: 'strict' as const,
  secure: typeof window !== 'undefined' ? window.location.protocol === 'https:' : true,
};

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
  }
}

export const trackPageView = (path: string): void => {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'virtualPageview',
    pageUrl: path,
    pageTitle: document.title,
  });
};

export const trackEvent = (category: string, action: string, label?: string, value?: number): void => {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: action,
    event_category: category,
    event_action: action,
    event_label: label,
    event_value: value,
  });
};

export const initializeMarketing = (): void => {
  // TODO: Initialize marketing pixels (Facebook, LinkedIn, etc.)
  // Implementation would go here when marketing integrations are added
};

export const updateGoogleConsent = (preferences: CookiePreferences): void => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  window.gtag('consent', 'update', {
    analytics_storage: preferences.analytics ? 'granted' : 'denied',
    ad_storage: preferences.marketing ? 'granted' : 'denied',
    ad_user_data: preferences.marketing ? 'granted' : 'denied',
    ad_personalization: preferences.marketing ? 'granted' : 'denied',
  });
};

export const applyPreferences = (preferences: CookiePreferences): boolean => {
  updateGoogleConsent(preferences);

  if (!preferences.analytics) {
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
