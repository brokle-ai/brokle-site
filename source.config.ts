import {
  defineCollections,
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { remarkMdxMermaid } from 'fumadocs-core/mdx-plugins';
import { z } from 'zod';

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export const blogPosts = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  schema: frontmatterSchema.extend({
    author: z.array(z.string()),
    date: z.string().date().or(z.date()),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    draft: z.boolean().default(false),
    lastModified: z.string().date().or(z.date()).optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    ogTitle: z.string().optional(),
    ogDescription: z.string().optional(),
    canonicalUrl: z.string().url().optional(),
  }),
  postprocess: {
    includeProcessedMarkdown: true,
  },
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMdxMermaid],
  },
});
