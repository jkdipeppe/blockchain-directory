'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import the actual map component
const EventMap = dynamic(() => import('@/components/event-map').then((mod) => mod.EventMap), {
  ssr: false,
  loading: () => <div className="w-full h-[500px] bg-muted animate-pulse rounded-lg flex items-center justify-center">Loading Map...</div>
});

// This component is responsible for dynamically loading the EventMap
export function DynamicEventMap() {
  return (
    <Suspense fallback={<div className="w-full h-[500px] bg-muted animate-pulse rounded-lg flex items-center justify-center">Loading Map Wrapper...</div>}>
        <EventMap />
    </Suspense>
  );
} 