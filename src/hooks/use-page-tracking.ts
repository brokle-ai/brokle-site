'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from '@/lib/cookie-service';
import { useCookieConsentContext } from '@/providers/cookie-consent-provider';

export const usePageTracking = (): void => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { hasConsented, initialized } = useCookieConsentContext();

  useEffect(() => {
    if (!initialized || !hasConsented('analytics')) return;

    const url = typeof window !== 'undefined'
      ? window.location.pathname + window.location.search
      : pathname;

    trackPageView(url);
  }, [pathname, searchParams, hasConsented, initialized]);
};
