import Landing from '@/components/Landing';
import EventCard from '@/components/EventCard';
import events from '@/util/events';
import { isFutureDate, sortEventsByDate } from '@/util/dateFormatting';

export default function Events() {
  const upcomingEvents = events.filter(event => isFutureDate(event.date));
  const pastEvents = events.filter(event => !isFutureDate(event.date));
  
  // sort events
  const sortedUpcoming = sortEventsByDate(upcomingEvents, true); // ascending
  const sortedPast = sortEventsByDate(pastEvents, false); // descending (newest first)

  return (
    <main id="events">
        <Landing name="Events" imageUrl="/events-landing.jpg" />
      
        <section id="events-container">
            <h2>Upcoming Events</h2>
            <div className="events-list">
                {sortedUpcoming.length > 0 ? (
                    sortedUpcoming.map((event, index) => (
                        <EventCard key={`upcoming-${index}`} event={event} />
                    ))
                ) : (
                    <p className="empty-state">No upcoming events at this time.</p>
                )}
            </div>
            <h2 id="past-events">Past Events</h2>
            <div className="events-list">
                {sortedPast.length > 0 ? (
                    sortedPast.map((event, index) => (
                    <EventCard key={`past-${index}`} event={event} />
                    ))
                ) : (
                    <p className="empty-state">No past events to display.</p>
                )}
            </div>
        </section>
    </main>
  );
}