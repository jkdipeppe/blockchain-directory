import { PageHeader } from "@/components/page-header";
import { EventCard } from "@/components/event-card"; // Import the new card component

// Define the event type (can be moved to types.ts)
interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  lumaUrl: string;
}

// Sample event data structure (without imageUrl)
const events: Event[] = [
  {
    id: "1",
    title: "Solana Across America (Calendar)",
    date: "April 2025",
    location: "USA",
    lumaUrl: "https://lu.ma/solanamerica",
  },
  {
    id: "chicago",
    title: "Solana Across America — CHICAGO",
    date: "April 23rd, 2025",
    location: "Chicago, Illinois",
    lumaUrl: "https://lu.ma/cj2e58nb",
  },
  {
    id: "nyc",
    title: "Solana Across America — NYC",
    date: "April 23rd, 2025",
    location: "New York, New York",
    lumaUrl: "https://lu.ma/solanamerica_nyc",
  },
  {
    id: "dc",
    title: "Solana Across America — WASHINGTON DC",
    date: "April 23rd 2025",
    location: "Arlington, VA",
    lumaUrl: "https://lu.ma/solanamerica_DC",
  },
  {
    id: "philly",
    title: "Solana Across America — Philadelphia",
    date: "April 23rd, 2025",
    location: "Philadelphia, PA (Register for Location)",
    lumaUrl: "https://lu.ma/solanamerica_philly",
  },
  {
    id: "kentucky",
    title: "Solana Across America — KENTUCKY",
    date: "April 23rd, 2025",
    location: "Kentucky (The LongTail Building)",
    lumaUrl: "https://lu.ma/solanamerica_kentucky",
  },
  {
    id: "boston",
    title: "Solana Across America — BOSTON",
    date: "April 23rd, 2025",
    location: "Boston, MA (Industrious)",
    lumaUrl: "https://lu.ma/solanamerica_boston",
  },
  {
    id: "miami",
    title: "Solana Across America — MIAMI",
    date: "April 23rd, 2025",
    location: "Miami, Florida",
    lumaUrl: "https://lu.ma/solanamerica_miami",
  },
  {
    id: "houston",
    title: "Solana Across America — HOUSTON",
    date: "April 23rd, 2025",
    location: "Houston, TX (Cedar Creek)",
    lumaUrl: "https://lu.ma/solanamerica_houston",
  },
  {
    id: "west-texas",
    title: "Solana Across America — WEST TEXAS",
    date: "April 23rd, 2025",
    location: "West Texas (TBA)",
    lumaUrl: "https://lu.ma/solanamerica_westtexas",
  },
  {
    id: "dallas",
    title: "Solana Across America — DALLAS",
    date: "April 23rd, 2025",
    location: "Dallas, TX (Cowboys Club)",
    lumaUrl: "https://lu.ma/solanamerica_dallas",
  },
  {
    id: "denver",
    title: "Solana Across America — DENVER",
    date: "April 23rd, 2025",
    location: "Denver, CO (TBA)",
    lumaUrl: "https://lu.ma/solanamerica_denver",
  },
  {
    id: "seattle",
    title: "Solana Across America — SEATTLE",
    date: "April 23rd, 2025",
    location: "Seattle, WA (Niftmint)",
    lumaUrl: "https://lu.ma/v8ydyt4g",
  },
  {
    id: "vegas",
    title: "Solana Across America — LAS VEGAS",
    date: "April 23rd, 2025",
    location: "Las Vegas, NV",
    lumaUrl: "https://lu.ma/solanamerica_lasvegas",
  },
  {
    id: "sf",
    title: "Solana Across America — SAN FRANCISCO",
    date: "April 23rd, 2025",
    location: "San Francisco, CA (TBA)",
    lumaUrl: "https://lu.ma/solanamerica_sanfran",
  },
  {
    id: "portland",
    title: "Solana Across America — Portland",
    date: "April 23rd, 2025",
    location: "Portland, OR (TBA)",
    lumaUrl: "https://lu.ma/solanamerica_portland",
  },
  {
    id: "la",
    title: "tidalDAO: The Swell, Wave IV x Solana Across America",
    date: "April 23rd, 2025",
    location: "Los Angeles County, California",
    lumaUrl: "https://lu.ma/osv8nalb",
  },
  // Add more event objects here
];

export default function EventsPage() {
  return (
    <div className="container relative py-6">
      <PageHeader
        title="Upcoming IRL & Online Events"
        description="Find and join blockchain events happening around the world and online."
      />
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Events List</h2>
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Map over events and render EventCard for each */}
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <p className="mt-6 text-center text-muted-foreground">
            No upcoming events listed currently.
          </p>
        )}
      </section>
    </div>
  );
} 