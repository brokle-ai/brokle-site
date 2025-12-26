'use client';

import { useState, useEffect } from 'react';
import NavbarContent from './NavbarContent';

export default function NavbarClient() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollTime = 0;
    const THROTTLE_MS = 100; // Throttle to 100ms for performance

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime < THROTTLE_MS) return;
      lastScrollTime = now;
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <NavbarContent isScrolled={isScrolled} />;
}
