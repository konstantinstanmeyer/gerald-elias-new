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
                    <EventCard event={events.upcoming[0]} />
                </div>
                <h2>Past Events</h2>
                <div className="events-list">
                    <EventCard event={events.pastEvents[0]} />
                </div>
            </div>
        </div>
    )
}