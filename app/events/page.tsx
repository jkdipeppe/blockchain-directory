'use client'; // Add use client directive

import { useState, useMemo } from 'react'; // Import hooks
import { PageHeader } from "@/components/page-header";
import { EventCard } from "@/components/event-card";
// Import Select components (assuming Shadcn UI)
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define the event type
interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  lumaUrl: string;
  state?: string; // Add state
  country?: string; // Add country
}

// Sample event data structure - Added state/country
const events: Event[] = [
  {
    id: "1",
    title: "Solana Across America (Calendar)",
    date: "April 2025",
    location: "USA",
    lumaUrl: "https://lu.ma/solanamerica",
    state: undefined, // Example: National event
    country: "USA",
  },
  {
    id: "chicago",
    title: "Solana Across America — CHICAGO",
    date: "April 23rd, 2025",
    location: "Chicago, Illinois",
    lumaUrl: "https://lu.ma/cj2e58nb",
    state: "IL",
    country: "USA",
  },
  {
    id: "dc",
    title: "Solana Across America — WASHINGTON DC",
    date: "April 23rd 2025",
    location: "Arlington, VA",
    lumaUrl: "https://lu.ma/solanamerica_DC",
    state: "VA",
    country: "USA",
  },
  {
    id: "nyc",
    title: "Solana Across America — NYC",
    date: "April 23rd, 2025",
    location: "New York, New York",
    lumaUrl: "https://lu.ma/solanamerica_nyc",
    state: "NY",
    country: "USA",
  },
  {
    id: "philly",
    title: "Solana Across America — Philadelphia",
    date: "April 23rd, 2025",
    location: "Philadelphia, PA (Register for Location)",
    lumaUrl: "https://lu.ma/solanamerica_philly",
    state: "PA",
    country: "USA",
  },
  {
    id: "kentucky",
    title: "Solana Across America — KENTUCKY",
    date: "April 23rd, 2025",
    location: "Kentucky (The LongTail Building)",
    lumaUrl: "https://lu.ma/solanamerica_kentucky",
    state: "KY",
    country: "USA",
  },
  {
    id: "boston",
    title: "Solana Across America — BOSTON",
    date: "April 23rd, 2025",
    location: "Boston, MA (Industrious)",
    lumaUrl: "https://lu.ma/solanamerica_boston",
    state: "MA",
    country: "USA",
  },
  {
    id: "miami",
    title: "Solana Across America — MIAMI",
    date: "April 23rd, 2025",
    location: "Miami, Florida",
    lumaUrl: "https://lu.ma/solanamerica_miami",
    state: "FL",
    country: "USA",
  },
  {
    id: "houston",
    title: "Solana Across America — HOUSTON",
    date: "April 23rd, 2025",
    location: "Houston, TX (Cedar Creek)",
    lumaUrl: "https://lu.ma/solanamerica_houston",
    state: "TX",
    country: "USA",
  },
  {
    id: "west-texas",
    title: "Solana Across America — WEST TEXAS",
    date: "April 23rd, 2025",
    location: "West Texas (TBA)",
    lumaUrl: "https://lu.ma/solanamerica_westtexas",
    state: "TX",
    country: "USA",
  },
  {
    id: "dallas",
    title: "Solana Across America — DALLAS",
    date: "April 23rd, 2025",
    location: "Dallas, TX (Cowboys Club)",
    lumaUrl: "https://lu.ma/solanamerica_dallas",
    state: "TX",
    country: "USA",
  },
  {
    id: "denver",
    title: "Solana Across America — DENVER",
    date: "April 23rd, 2025",
    location: "Denver, CO (TBA)",
    lumaUrl: "https://lu.ma/solanamerica_denver",
    state: "CO",
    country: "USA",
  },
  {
    id: "seattle",
    title: "Solana Across America — SEATTLE",
    date: "April 23rd, 2025",
    location: "Seattle, WA (Niftmint)",
    lumaUrl: "https://lu.ma/v8ydyt4g",
    state: "WA",
    country: "USA",
  },
  {
    id: "vegas",
    title: "Solana Across America — LAS VEGAS",
    date: "April 23rd, 2025",
    location: "Las Vegas, NV",
    lumaUrl: "https://lu.ma/solanamerica_lasvegas",
    state: "NV",
    country: "USA",
  },
  {
    id: "sf",
    title: "Solana Across America — SAN FRANCISCO",
    date: "April 23rd, 2025",
    location: "San Francisco, CA (TBA)",
    lumaUrl: "https://lu.ma/solanamerica_sanfran",
    state: "CA",
    country: "USA",
  },
  {
    id: "portland",
    title: "Solana Across America — Portland",
    date: "April 23rd, 2025",
    location: "Portland, OR (TBA)",
    lumaUrl: "https://lu.ma/solanamerica_portland",
    state: "OR",
    country: "USA",
  },
  {
    id: "la",
    title: "tidalDAO: The Swell, Wave IV x Solana Across America",
    date: "April 23rd, 2025",
    location: "Los Angeles County, California",
    lumaUrl: "https://lu.ma/osv8nalb",
    state: "CA",
    country: "USA",
  },
  // Add more event objects here
];

export default function EventsPage() {
  const [selectedState, setSelectedState] = useState<string>('All');
  const [selectedCountry, setSelectedCountry] = useState<string>('All');

  // Derive unique states and countries for filters
  const uniqueStates = useMemo(() => {
    // Filter out undefined states before creating the Set
    const states = new Set(
        events.map(event => event.state).filter((state): state is string => typeof state === 'string')
    );
    return ['All', ...Array.from(states).sort()];
  }, []); // Depends only on the static events array

  const uniqueCountries = useMemo(() => {
    // Filter out undefined countries before creating the Set
    const countries = new Set(
        events.map(event => event.country).filter((country): country is string => typeof country === 'string')
    );
    return ['All', ...Array.from(countries).sort()];
  }, []); // Depends only on the static events array

  // Filter events based on selection
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const stateMatch = selectedState === 'All' || event.state === selectedState;
      const countryMatch = selectedCountry === 'All' || event.country === selectedCountry;
      return stateMatch && countryMatch;
    });
  }, [selectedState, selectedCountry]); // Re-filter when selections change

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
        <h2 className="text-2xl font-semibold mb-4">Events List</h2>
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