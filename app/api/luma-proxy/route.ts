import { NextRequest, NextResponse } from 'next/server';
import * as cheerio from 'cheerio';


export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const lumaUrl = searchParams.get('url');

  if (!lumaUrl) {
    return NextResponse.json({ error: 'Missing Luma URL parameter' }, { status: 400 });
  }

  // Validate the URL to prevent potential SSRF attacks
  try {
    const urlObject = new URL(lumaUrl);
    // Optional: Add more specific checks, e.g., ensure it's a lu.ma domain
    if (!urlObject.hostname.endsWith('lu.ma')) {
       return NextResponse.json({ error: 'Invalid URL domain' }, { status: 400 });
    }
  } catch (_) {
      return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 });
  }


  try {
    // Fetch directly from the server-side - no CORS issues here
    // Remove the mode: 'no-cors' as we need the response body now
    console.log('lumaUrl', lumaUrl);
    const response = await fetch(lumaUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const html = await response.text();

    // Parse HTML with cheerio
    const $ = cheerio.load(html);

    // Extract the meta image content
    const imageUrl = $('meta[name="image"]').attr('content') ||
                     $('meta[property="og:image"]').attr('content') ||
                     $('meta[name="twitter:image"]').attr('content') ||
                     'https://default-image-url.com/fallback.jpg';
    
    console.log('imageUrl', imageUrl);
    // Return the image URL as a plain string
    return new NextResponse(imageUrl, {
      status: 200, // Indicate success
      headers: { 'Content-Type': 'text/plain' }, // Specify the content type
    });

    

  } catch (error) {
    console.error('Error fetching from Luma proxy:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: `Internal server error: ${errorMessage}` }, { status: 500 });
  }
}
