import { NextResponse } from 'next/server';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const res = await fetch('https://api.github.com/repos/brokle-ai/brokle', {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        // Use token if available to avoid rate limiting
        ...(process.env.GITHUB_TOKEN && {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        }),
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({ stars: null }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json({ stars: data.stargazers_count });
  } catch {
    return NextResponse.json({ stars: null }, { status: 500 });
  }
}
