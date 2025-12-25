'use client';

import { Suspense } from 'react';
import { usePageTracking } from '@/hooks/use-page-tracking';

function AnalyticsTrackerInner() {
  usePageTracking();
  return null;
}

export function AnalyticsTracker() {
  return (
    <Suspense fallback={null}>
      <AnalyticsTrackerInner />
    </Suspense>
  );
}
