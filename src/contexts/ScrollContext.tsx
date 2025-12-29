'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ScrollContextType {
  isScrolled: boolean;
}

const ScrollContext = createContext<ScrollContextType>({ isScrolled: false });

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Set initial state only after mount
    setIsScrolled(window.scrollY > 10);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
