'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ScrollContextType {
  isScrolled: boolean;
}

const ScrollContext = createContext<ScrollContextType>({ isScrolled: false });

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Set initial state
    setIsScrolled(window.scrollY > 10);

    // Simple, direct handler - matches old website pattern
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ isScrolled }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  return useContext(ScrollContext);
}
