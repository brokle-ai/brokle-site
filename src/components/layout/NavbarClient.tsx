'use client';

import NavbarContent from './NavbarContent';
import { useScroll } from '@/contexts/ScrollContext';

export default function NavbarClient() {
  const { isScrolled } = useScroll();
  return <NavbarContent isScrolled={isScrolled} />;
}
