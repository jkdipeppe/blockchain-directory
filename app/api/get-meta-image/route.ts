import { NextRequest, NextResponse } from 'next/server';

// Basic function to extract og:image URL using string matching (less robust)
// For production, using an HTML parser like 'cheerio' is recommended.
function extractOgImage(html: string): string | null {
  // Try to find the og:image meta tag
  const match = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
  if (match && match[1]) {
    return match[1];
  }

  // Fallback: Look for twitter:image (sometimes used)
  const twitterMatch = html.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i);
  if (twitterMatch && twitterMatch[1]) {
    return twitterMatch[1];
  }

  return null; // Not found
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  try {
    const response = await fetch(url, {
      headers: {
        // Pretend to be a browser to avoid some simple blocks
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
       // Add a timeout? Consider request caching?
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch URL: ${response.statusText}`);
    }

    const html = await response.text();
    const imageUrl = extractOgImage(html);

    if (!imageUrl) {
      return NextResponse.json({ error: 'Meta image tag not found' }, { status: 404 });
    }

    // Potentially resolve relative URLs, although og:image should be absolute
    const absoluteImageUrl = new URL(imageUrl, url).toString();

    return NextResponse.json({ imageUrl: absoluteImageUrl });

  } catch (error) {
    console.error("Error fetching meta image:", error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: 'Failed to fetch or parse URL', details: errorMessage }, { status: 500 });
  }
} 