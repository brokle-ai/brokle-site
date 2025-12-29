import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // URL consistency for SEO
  trailingSlash: false,
  // Note: www to non-www redirect is handled at DNS/CDN level
  // Note: Lowercase URL enforcement removed - causes redirect loops with static files
};

export default withMDX(config);
