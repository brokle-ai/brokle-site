'use client';

import NavbarContent from '@/components/layout/NavbarContent';
import { DocsNavTabs } from '@/components/docs/DocsNavTabs';
import { useScroll } from '@/contexts/ScrollContext';

export function DocsHeader() {
  const { isScrolled } = useScroll();

  return (
    <div
      className={`sticky top-0 z-40 border-b border-border/50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md'
          : 'bg-background'
      }`}
    >
      <NavbarContent isScrolled={isScrolled} variant="docs" />
      <DocsNavTabs />
    </div>
  );
}
