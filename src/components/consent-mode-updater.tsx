'use client';

import { Suspense, useEffect, useRef } from 'react';
import { useCookieConsentContext } from '@/providers/cookie-consent-provider';
import { updateGoogleConsent } from '@/lib/cookie-service';

function ConsentModeUpdaterInner() {
  const { preferences, initialized } = useCookieConsentContext();
  const hasSentUpdate = useRef(false);

  useEffect(() => {
    if (!initialized) return;

    // Skip the very first render if user hasn't consented yet
    // (defaults are already set via the inline script in layout.tsx)
    if (!hasSentUpdate.current && !preferences.analytics && !preferences.marketing) {
      hasSentUpdate.current = true;
      return;
    }

    hasSentUpdate.current = true;
    updateGoogleConsent(preferences);
  }, [preferences, initialized]);

  return null;
}

export function ConsentModeUpdater() {
  return (
    <Suspense fallback={null}>
      <ConsentModeUpdaterInner />
    </Suspense>
  );
}
