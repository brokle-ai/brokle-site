import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Brokle',
    },
    githubUrl: 'https://github.com/brokle-ai/brokle',
    links: [
      {
        text: 'Documentation',
        url: '/docs',
      },
    ],
  };
}
