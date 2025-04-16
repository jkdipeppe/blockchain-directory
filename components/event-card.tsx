'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
const cheerio = require('cheerio');

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  lumaUrl: string;
  // imageUrl is removed, will be fetched
}

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMetaImage = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(event.lumaUrl);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const html = await response.text();

        // Load HTML into cheerio
        const $ = cheerio.load(html);

        // Extract the meta image content
        const imageUrl = $('meta[name="image"]').attr('content') ||
                     $('meta[property="og:image"]').attr('content') || // Fallback to Open Graph image
                     $('meta[name="twitter:image"]').attr('content') || // Fallback to Twitter image
                     'https://default-image-url.com/fallback.jpg'; // Fallback image if not found


        setImageUrl(imageUrl);
      } catch (err) {
        console.error(`Failed to fetch image for ${event.title}:`, err);
        setError(err instanceof Error ? err.message : 'Could not load image');
        setImageUrl('/event-images/placeholder.png'); // Fallback image on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchMetaImage();
  }, [event.lumaUrl, event.title]); // Re-fetch if URL changes

  return (
    <div className="border rounded-lg shadow-sm overflow-hidden">
      <div className="relative w-full h-40 bg-muted flex items-center justify-center"> {/* Container for image */}
        {isLoading && (
          <div className="text-sm text-muted-foreground">Loading image...</div>
        )}
        {!isLoading && imageUrl && (
          <Image
            src={imageUrl} // Use fetched URL
            alt={`${event.title} banner`}
            layout="fill"
            objectFit="cover"
            unoptimized // Use next/image optimization if configured
            onError={() => {
              // Handle cases where the fetched URL is invalid or image fails to load
              console.warn(`Failed to load image: ${imageUrl}`);
              setImageUrl('/event-images/placeholder.png'); // Set fallback on error
            }}
          />
        )}
        {!isLoading && !imageUrl && error && (
           <div className="text-xs text-red-500 px-2 text-center">Error: {error}</div>
        )}
         {/* Fallback if not loading, no image, and no specific error shown */}
        {!isLoading && !imageUrl && !error && (
            <Image
              src="/event-images/placeholder.png" // Default fallback
              alt={`${event.title} banner placeholder`}
              layout="fill"
              objectFit="cover"
              unoptimized
            />
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
        <p className="text-sm text-muted-foreground mb-1">{event.date}</p>
        <p className="text-sm text-muted-foreground mb-3">{event.location}</p>
        <a
          href={event.lumaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline"
        >
          View Event Details
        </a>
      </div>
    </div>
  );
} 