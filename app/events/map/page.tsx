// import dynamic from 'next/dynamic';
import { PageHeader } from "@/components/page-header";
import { Suspense } from 'react';
import { DynamicEventMap } from '@/components/dynamic-event-map';

// // Dynamically import the map component - MOVED TO DynamicEventMap
// const EventMap = dynamic(() => import('@/components/event-map').then((mod) => mod.EventMap), {
//   ssr: false,
//   loading: () => <div className="w-full h-[500px] bg-muted animate-pulse rounded-lg flex items-center justify-center">Loading Map...</div>
// });

export default function EventMapPage() {
  return (
    <div className="container relative py-6">
      <PageHeader
        title="Event Map"
        description="Find upcoming events on the map."
      />
      <section className="mt-8">
        {/* Use the new DynamicEventMap component */}
        <DynamicEventMap />
      </section>
    </div>
  );
} 