import defaultMdxComponents from 'fumadocs-ui/mdx';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import { Mermaid } from '@/components/mdx/mermaid';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    pre: ({ ref: _ref, ...props }) => (
      <CodeBlock {...props} className="shadow-none">
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
    Mermaid,
    ...components,
  };
}
