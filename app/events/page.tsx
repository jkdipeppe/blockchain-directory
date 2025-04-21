'use client'; // Add use client directive

import { useState, useMemo } from 'react'; // Import hooks
import { PageHeader } from "@/components/page-header";
import { EventCard } from "@/components/event-card";
import { getEvents } from "@/lib/data"; // Import getEvents
import type { Event } from "@/lib/types"; // Import Event type
// Import Select components (assuming Shadcn UI)
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// // Define the event type - MOVED TO lib/types.ts
// interface Event {
//   id: string;
//   title: string;
//   date: string;
//   location: string;
//   lumaUrl: string;
//   state?: string;
//   country?: string;
// }

// // Sample event data structure - MOVED TO lib/data.ts
// const events: Event[] = [
//   // ... event data ...
// ];

export default function EventsPage() {
  const events = getEvents(); // Get events from the imported function
  const [selectedState, setSelectedState] = useState<string>('All');
  const [selectedCountry, setSelectedCountry] = useState<string>('All');

  // Derive unique states and countries for filters
  const uniqueStates = useMemo(() => {
    const states = new Set(
        events.map(event => event.state).filter((state): state is string => typeof state === 'string')
    );
    return ['All', ...Array.from(states).sort()];
  // Depend on the fetched events array
  }, [events]);

  const uniqueCountries = useMemo(() => {
    const countries = new Set(
        events.map(event => event.country).filter((country): country is string => typeof country === 'string')
    );
    return ['All', ...Array.from(countries).sort()];
  // Depend on the fetched events array
  }, [events]);

  // Filter events based on selection
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const stateMatch = selectedState === 'All' || event.state === selectedState;
      const countryMatch = selectedCountry === 'All' || event.country === selectedCountry;
      return stateMatch && countryMatch;
    });
  // Depend on fetched events and selections
  }, [events, selectedState, selectedCountry]);

  return (
    <div className="container relative py-6">
      <PageHeader
        title="Upcoming IRL & Online Events"
        description="Find and join blockchain events happening around the world and online."
      />

      {/* Filter Section */}
      <section className="mt-8 flex flex-col md:flex-row gap-4 mb-8">
        <div>
          <label htmlFor="state-filter" className="block text-sm font-medium text-muted-foreground mb-1">State</label>
          <Select value={selectedState} onValueChange={setSelectedState}>
            <SelectTrigger id="state-filter" className="w-[180px]">
              <SelectValue placeholder="Filter by state" />
            </SelectTrigger>
            <SelectContent>
              {uniqueStates.map(state => (
                <SelectItem key={state} value={state}>{state}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="country-filter" className="block text-sm font-medium text-muted-foreground mb-1">Country</label>
          <Select value={selectedCountry} onValueChange={setSelectedCountry}>
            <SelectTrigger id="country-filter" className="w-[180px]">
              <SelectValue placeholder="Filter by country" />
            </SelectTrigger>
            <SelectContent>
              {uniqueCountries.map(country => (
                <SelectItem key={country} value={country}>{country}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-zinc-400">Events List</h2>
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Map over FILTERED events */}
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <p className="mt-6 text-center text-muted-foreground">
            No events match the current filters.
          </p>
        )}
      </section>
    </div>
  );
} 