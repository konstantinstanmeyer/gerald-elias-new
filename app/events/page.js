import Landing from "@/components/Landing";
import events from "@/util/events";
import EventCard from "@/components/EventCard";

export default function Events(){
    return(
        <div id="events">
            <Landing name="Events" imageUrl='/events-landing.jpg' />
            <div id="events-container">
                <h2>Upcoming Events</h2>
                <div className="events-list">
                    {events.upcoming.length > 0 ? 
                        events.upcoming.map((entry, i) => 
                            <EventCard event={entry} />
                        )
                    : null}
                    {/* <EventCard event={events.upcoming[0]} /> */}
                </div>
                <h2 id="past-events">Past Events</h2>
                <div className="events-list">
                    {events.pastEvents.length > 0 ? 
                    events.pastEvents.map((entry, i) => 
                        <EventCard key={i + "event"} event={entry} />
                    )
                    : <h3 className="event-none">nothing to find here, yet...</h3>}
                </div>
            </div>
        </div>
    )
}