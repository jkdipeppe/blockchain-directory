'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
      setImageUrl(null); // Reset image URL on new fetch

      // Construct the proxy URL
      const proxyUrl = `/api/luma-proxy?url=${encodeURIComponent(event.lumaUrl)}`;

      try {
        // Fetch from your API route
        const response = await fetch(proxyUrl);
        if (!response.ok) {
          // Try to get error message from API response body
          const errorData = await response.json().catch(() => ({})); // Gracefully handle non-JSON error response
          // Use the error message from the proxy if available
          throw new Error(errorData.error || `Proxy request failed: ${response.status} ${response.statusText}`);
        }

        // Parse the response as text
        const data = await response.text();

        // Check if the API route returned an imageUrl
        setImageUrl(data);
     

      } catch (err) {
        console.error(`Failed to fetch image for ${event.title} via proxy:`, err);
        setError(err instanceof Error ? err.message : 'Could not load image');
        setImageUrl('/event-images/placeholder.png'); // Fallback image on error
      } finally {
        setIsLoading(false);
      }
    };

    if (event.lumaUrl) { // Only fetch if lumaUrl is provided
      fetchMetaImage();
    } else {
        // Handle case where no Luma URL is provided for the event
        setIsLoading(false);
        setError('No event URL provided');
        setImageUrl('/event-images/placeholder.png'); // Set fallback if no URL
    }

  }, [event.lumaUrl, event.title]); // Re-fetch if URL or title changes

  return (
    <div className="border rounded-lg shadow-sm overflow-hidden">
      <a
        href={event.lumaUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View event details for ${event.title}`}
        className="block"
      >
        <div className="relative w-full bg-muted flex items-center justify-center aspect-video">
          {isLoading && (
            <div className="text-sm text-muted-foreground">Loading image...</div>
          )}
          {!isLoading && imageUrl && (
            <Image
              key={imageUrl} // Add key to force re-render if URL changes but component doesn't unmount
              src={imageUrl} // Use fetched URL
              alt={`${event.title} banner`}
              fill // Add fill prop
              style={{ objectFit: 'cover' }} // Move objectFit to style
              unoptimized // Consider if optimization is desired/possible
              onError={() => {
                // Handle cases where the fetched URL is invalid or image fails to load client-side
                console.warn(`Failed to load image client-side: ${imageUrl}`);
                setError('Image failed to load'); // Set specific error
                setImageUrl('/event-images/placeholder.png'); // Set fallback on error
              }}
            />
          )}
          {!isLoading && error && !imageUrl?.startsWith('/') && ( // Show error only if not already showing placeholder
             <div className="text-xs text-red-500 px-2 text-center">Error: {error}</div>
          )}
          {/* Fallback placeholder is handled by setting imageUrl to '/event-images/placeholder.png' on error or missing URL */}
           {!isLoading && !imageUrl && !error && ( // Only show initial placeholder if no URL/error yet
              <Image
                src="/event-images/placeholder.png"
                alt={`${event.title} banner placeholder`}
                fill // Add fill prop
                style={{ objectFit: 'cover' }} // Move objectFit to style
                unoptimized
              />
          )}
        </div>
      </a>
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