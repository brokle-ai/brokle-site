import { source } from '@/lib/source';

export const revalidate = false;

export async function GET() {
  const pages = source.getPages().map(
    (page) => `- [${page.data.title}](${page.url})`,
  );

  return new Response(pages.join('\n'));
}
