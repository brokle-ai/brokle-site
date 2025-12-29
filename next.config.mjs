import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // URL consistency for SEO
  trailingSlash: false,
  // Redirect www to non-www (handled at DNS/CDN level typically)
  async redirects() {
    return [
      // Redirect any uppercase URLs to lowercase
      {
        source: '/:path((?:[A-Z])+.*)',
        destination: '/:path',
        permanent: true,
      },
    ];
  },
};

export default withMDX(config);
