import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

type EventStatus = "all" | "completed" | "upcoming";

const events = [
  {
    date: "March 15, 2025",
    title: "Annual Community Picnic",
    description: "A fun-filled day at the park with games, food, and entertainment for all ages.",
    location: "Community Park",
    status: "upcoming" as const,
    testId: "event-picnic",
  },
  {
    date: "February 28, 2025",
    title: "Health & Wellness Workshop",
    description: "Expert-led sessions on nutrition, exercise, and mental well-being.",
    location: "Community Hall",
    status: "upcoming" as const,
    testId: "event-wellness",
  },
  {
    date: "January 26, 2025",
    title: "Republic Day Celebration",
    description: "Patriotic celebration with flag hoisting, cultural programs, and refreshments.",
    location: "Main Gate Area",
    status: "completed" as const,
    testId: "event-republic",
  },
  {
    date: "December 25, 2024",
    title: "Christmas Carnival",
    description: "Festive celebration with carol singing, gift exchange, and community dinner.",
    location: "Community Hall",
    status: "completed" as const,
    testId: "event-christmas",
  },
  {
    date: "November 10, 2024",
    title: "Diwali Festival",
    description: "Grand celebration with rangoli competition, cultural performances, and fireworks.",
    location: "Community Grounds",
    status: "completed" as const,
    testId: "event-diwali",
  },
];

export default function EventsTimeline() {
  const [filter, setFilter] = useState<EventStatus>("all");

  const filteredEvents = events.filter(
    (event) => filter === "all" || event.status === filter
  );

  return (
    <section id="events" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-events-title">
            Community Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8" data-testid="text-events-subtitle">
            Stay connected with our vibrant community through regular events and celebrations
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              data-testid="button-filter-all"
            >
              All Events
            </Button>
            <Button
              variant={filter === "upcoming" ? "default" : "outline"}
              onClick={() => setFilter("upcoming")}
              data-testid="button-filter-upcoming"
            >
              Upcoming
            </Button>
            <Button
              variant={filter === "completed" ? "default" : "outline"}
              onClick={() => setFilter("completed")}
              data-testid="button-filter-completed"
            >
              Past Events
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          {filteredEvents.map((event, index) => (
            <Card key={event.testId} className={`${index % 2 === 0 ? '' : 'lg:ml-auto'} lg:max-w-3xl`} data-testid={event.testId}>
              <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0 pb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={event.status === "upcoming" ? "default" : "secondary"} data-testid={`${event.testId}-status`}>
                      {event.status === "upcoming" ? "Upcoming" : "Completed"}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl" data-testid={`${event.testId}-title`}>
                    {event.title}
                  </CardTitle>
                  <CardDescription data-testid={`${event.testId}-description`}>
                    {event.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2" data-testid={`${event.testId}-date`}>
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2" data-testid={`${event.testId}-location`}>
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
