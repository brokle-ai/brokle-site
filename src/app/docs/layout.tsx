import { source } from '@/lib/source';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { DocsNavTabs } from '@/components/docs/DocsNavTabs';
import type { ReactNode } from 'react';
import { DocsLayoutWrapper } from '@/components/docs/DocsLayoutWrapper';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <DocsNavTabs />
      <DocsLayoutWrapper pageTree={source.pageTree}>
        {children}
      </DocsLayoutWrapper>
      <Footer />
    </>
  );
}
