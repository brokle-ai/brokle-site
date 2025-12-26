import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { ReactNode } from 'react';

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
