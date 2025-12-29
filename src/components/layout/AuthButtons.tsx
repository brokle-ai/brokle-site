'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type AuthState = 'loading' | 'authenticated' | 'unauthenticated';

interface AuthButtonsProps {
  className?: string;
  mobile?: boolean;
}

// Environment-configurable URLs with production fallbacks
const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.brokle.com';
const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://app.brokle.com';

export function AuthButtons({ className, mobile }: AuthButtonsProps) {
  const [authState, setAuthState] = useState<AuthState>('loading');

  useEffect(() => {
    let isMounted = true;

    // Check auth state via /api/v1/auth/me endpoint (Dashboard routes use /api/v1 prefix)
    fetch(`${apiUrl}/api/v1/auth/me`, {
      credentials: 'include', // Include httpOnly cookies
    })
      .then((res) => {
        if (isMounted) {
          setAuthState(res.ok ? 'authenticated' : 'unauthenticated');
        }
      })
      .catch((error) => {
        // Log in development for debugging
        if (process.env.NODE_ENV === 'development') {
          console.debug('[AuthButtons] Auth check failed:', error.message);
        }
        if (isMounted) {
          setAuthState('unauthenticated');
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (authState === 'loading') {
    // Show skeleton during loading
    if (mobile) {
      return (
        <div className={className}>
          <div className="h-10 w-full animate-pulse rounded-md bg-muted" />
          <div className="h-10 w-full animate-pulse rounded-md bg-muted" />
        </div>
      );
    }
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="h-9 w-16 animate-pulse rounded-md bg-muted" />
        <div className="h-9 w-24 animate-pulse rounded-md bg-muted" />
      </div>
    );
  }

  if (authState === 'authenticated') {
    if (mobile) {
      return (
        <div className={className}>
          <Button className="w-full justify-center" asChild>
            <Link href={appUrl}>Dashboard</Link>
          </Button>
        </div>
      );
    }
    return (
      <Button size="sm" asChild className={className}>
        <Link href={appUrl}>Dashboard</Link>
      </Button>
    );
  }

  // Unauthenticated state
  if (mobile) {
    return (
      <div className={`space-y-2 ${className}`}>
        <Button variant="outline" className="w-full justify-center" asChild>
          <Link href={`${appUrl}/login`}>Sign In</Link>
        </Button>
        <Button className="w-full justify-center" asChild>
          <Link href={`${appUrl}/signup`}>Get Started</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <Button variant="ghost" size="sm" asChild>
        <Link href={`${appUrl}/login`}>Sign In</Link>
      </Button>
      <Button size="sm" asChild>
        <Link href={`${appUrl}/signup`}>Get Started</Link>
      </Button>
    </>
  );
}
