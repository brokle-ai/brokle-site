'use client';

import { trackEvent } from '@/lib/cookie-service';
import { useCookieConsentContext } from '@/providers/cookie-consent-provider';
import { useCallback } from 'react';

// Event categories
export enum EventCategory {
  ENGAGEMENT = 'engagement',
  CONVERSION = 'conversion',
  FORM = 'form',
  NAVIGATION = 'navigation',
  ERROR = 'error',
}

// Hook for components to use for tracking
export const useAnalytics = () => {
  const { hasConsented } = useCookieConsentContext();

  const trackCustomEvent = useCallback((
    category: EventCategory | string,
    action: string,
    label?: string,
    value?: number
  ) => {
    if (hasConsented('analytics')) {
      trackEvent(category, action, label, value);
    }
  }, [hasConsented]);

  return { trackEvent: trackCustomEvent };
};

// For non-component contexts (like utilities or services)
export const trackCustomEvent = (
  category: EventCategory | string,
  action: string,
  label?: string,
  value?: number
) => {
  // Get cookie preferences directly from localStorage
  try {
    const preferences = localStorage.getItem('cookie-consent-preferences');
    if (preferences) {
      const { analytics } = JSON.parse(preferences);
      if (analytics) {
        trackEvent(category, action, label, value);
      }
    }
  } catch (error) {
    console.error('Error checking analytics consent:', error);
  }
};
