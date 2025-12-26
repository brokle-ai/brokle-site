import { source } from '@/lib/source';
import Footer from '@/components/layout/Footer';
import { DocsHeader } from '@/components/docs/DocsHeader';
import type { ReactNode } from 'react';
import { DocsLayoutWrapper } from '@/components/docs/DocsLayoutWrapper';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <DocsHeader />
      <DocsLayoutWrapper pageTree={source.pageTree}>
        {children}
      </DocsLayoutWrapper>
      <Footer />
    </>
  );
}
