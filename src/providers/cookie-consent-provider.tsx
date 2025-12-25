'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useCookieConsent } from '@/hooks/use-cookie-consent';
import type { CookiePreferences } from '@/components/cookie-consent';

interface CookieConsentContextType {
  preferences: CookiePreferences;
  updatePreferences: (newPreferences: Partial<CookiePreferences>) => void;
  hasConsented: (cookieType: keyof CookiePreferences) => boolean;
  resetConsent: () => void;
  initialized: boolean;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const CookieConsentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const cookieConsent = useCookieConsent();

  return (
    <CookieConsentContext.Provider value={cookieConsent}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsentContext = (): CookieConsentContextType => {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsentContext must be used within a CookieConsentProvider');
  }
  return context;
};
