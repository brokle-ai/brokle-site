'use client';

import { CookiePreferences } from "@/components/cookie-consent";
import { useEffect, useState } from "react";
import { applyPreferences } from '@/lib/cookie-service';

const COOKIE_CONSENT_KEY = "cookie-consent-preferences";

export const useCookieConsent = () => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  const [initialized, setInitialized] = useState(false);

  // Load initial preferences
  useEffect(() => {
    const savedPreferences = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (savedPreferences) {
      try {
        const parsedPreferences = JSON.parse(savedPreferences) as CookiePreferences;
        setPreferences(parsedPreferences);
      } catch (error) {
        console.error("Error parsing cookie preferences:", error);
      }
    }
    setInitialized(true);
  }, []);

  // Apply preferences whenever they change
  useEffect(() => {
    if (initialized) {
      applyPreferences(preferences);
    }
  }, [preferences, initialized]);

  const updatePreferences = (newPreferences: Partial<CookiePreferences>) => {
    const updatedPreferences = { ...preferences, ...newPreferences };
    setPreferences(updatedPreferences);
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(updatedPreferences));
  };

  const hasConsented = (cookieType: keyof CookiePreferences): boolean => {
    return preferences[cookieType];
  };

  const resetConsent = () => {
    const defaultPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setPreferences(defaultPreferences);
    localStorage.removeItem(COOKIE_CONSENT_KEY);
  };

  return {
    preferences,
    updatePreferences,
    hasConsented,
    resetConsent,
    initialized,
  };
};
