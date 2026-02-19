import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // URL consistency for SEO
  trailingSlash: false,
  // Note: www to non-www redirect is handled at DNS/CDN level
  // Note: Lowercase URL enforcement removed - causes redirect loops with static files

  // Rewrite .mdx extension to serve raw markdown for LLM copy/open features
  async rewrites() {
    return [
      {
        source: '/docs/:path*.mdx',
        destination: '/llms.mdx/docs/:path*',
      },
      {
        source: '/docs.mdx',
        destination: '/llms.mdx/docs',
      },
    ];
  },

  // Essential security headers (CSP removed - overkill for marketing site)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
        ],
      },
    ];
  },
};

export default withMDX(config);
