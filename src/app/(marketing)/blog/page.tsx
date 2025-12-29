import BlogPage from '@/features/blog/blog-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Brokle',
  description:
    'Insights, tutorials, and updates from the Brokle team on AI observability.',
  openGraph: {
    title: 'Blog - Brokle',
    description:
      'Insights, tutorials, and updates from the Brokle team on AI observability.',
    url: 'https://brokle.com/blog',
    siteName: 'Brokle',
    type: 'website',
  },
};

export default function Blog() {
  return <BlogPage />;
}
