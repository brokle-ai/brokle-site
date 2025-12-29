'use client';

import { createContext, useContext, useState, useEffect, useRef, useCallback, ReactNode } from 'react';

interface ScrollContextType {
  isScrolled: boolean;
}

const ScrollContext = createContext<ScrollContextType>({ isScrolled: false });

// Throttle function to reduce main thread work
function useThrottle<T extends (...args: unknown[]) => void>(
  callback: T,
  delay: number
): T {
  const lastCall = useRef(0);
  const lastArgs = useRef<unknown[] | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    ((...args: unknown[]) => {
      const now = Date.now();
      const timeSinceLastCall = now - lastCall.current;

      if (timeSinceLastCall >= delay) {
        lastCall.current = now;
        callback(...args);
      } else {
        // Store args for trailing call
        lastArgs.current = args;
        if (!timeoutRef.current) {
          timeoutRef.current = setTimeout(() => {
            lastCall.current = Date.now();
            if (lastArgs.current) {
              callback(...lastArgs.current);
            }
            timeoutRef.current = null;
          }, delay - timeSinceLastCall);
        }
      }
    }) as T,
    [callback, delay]
  );
}

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Throttled scroll handler - only fires every 100ms max
  const handleScroll = useThrottle(
    useCallback(() => {
      setIsScrolled(window.scrollY > 10);
    }, []),
    100
  );

  useEffect(() => {
    setIsMounted(true);
    // Set initial state only after mount
    setIsScrolled(window.scrollY > 10);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Return false during SSR and initial client render for consistency
  const value = { isScrolled: isMounted ? isScrolled : false };

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  return useContext(ScrollContext);
}
