'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from '@/lib/cookie-service';

export const usePageTracking = (): void => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Push to dataLayer unconditionally on every route change.
    // GTM handles consent filtering via Consent Mode v2:
    // - analytics_storage: 'denied' → cookieless consent-mode pings
    // - analytics_storage: 'granted' → full GA4 tracking
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    trackPageView(url);
  }, [pathname, searchParams]);
};
