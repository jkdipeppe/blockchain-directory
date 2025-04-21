'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet library
import 'leaflet/dist/leaflet.css';
import { getEvents } from '@/lib/data';
import type { Event } from '@/lib/types';
import Link from 'next/link';

// Fix Leaflet's default icon path issue with bundlers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export function EventMap() {
  const events = getEvents();

  // Filter out events without coordinates (or use default if needed)
  const eventsWithCoords = events.filter(event => event.lat !== undefined && event.lon !== undefined);

  // Calculate center of the US (simple average - adjust as needed)
  const centerLat = 39.8283;
  const centerLon = -98.5795;
  const zoomLevel = 4;

  return (
    <MapContainer
      center={[centerLat, centerLon]}
      zoom={zoomLevel}
      scrollWheelZoom={false} // Optional: disable scroll wheel zoom
      className="w-full h-[500px] rounded-lg z-0" // Ensure z-index is low
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {eventsWithCoords.map((event) => (
        <Marker key={event.id} position={[event.lat!, event.lon!]}>
          <Popup>
            <div className="space-y-1 text-sm">
              <h4 className="font-medium">{event.title}</h4>
              <p className="text-muted-foreground">{event.location}</p>
              <p className="text-xs text-muted-foreground">{event.date}</p>
              <Link href={event.lumaUrl} target="_blank" rel="noopener noreferrer" className="text-primary-accent hover:underline text-xs font-medium">
                Event Link
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
} 