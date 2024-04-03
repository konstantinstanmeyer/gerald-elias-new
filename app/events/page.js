import Landing from "@/components/Landing";
import events from "@/util/events";
import EventCard from "@/components/EventCard";
import formatDate from "@/util/formatDate";

export default function Events(){
    const upcomingEvents = [];
    const pastEvents = [];

    // sorts dates by convertion to supported string(DAY MONTH DATE YYYY) then compared via conversion to milliseconds
    function sortEvents(events){
        events.forEach((event) => {
            // temporary fix for handling the single "extended date" value, meaning the event spans muliple days, breaking the current event sorting function
            if(event?.name === "Left Coast Crime 2024: Seattle Shakedown mystery book convention"){
                console.log(event.date)
                event.date = "Thursday, April 14th, 2024"
            }

            let date = formatDate(event.date);
            // console.log((new Date(date)).getTime() > (new Date()).getTime());
            (new Date(date)).getTime() > (new Date()).getTime() ? upcomingEvents.push(event) : pastEvents.push(event);
            // console.log(upcomingEvents);
        });
    }

    sortEvents(events);

    return(
        <div id="events">
            <Landing name="Events" imageUrl='/events-landing.jpg' />
            <div id="events-container">
                <h2>Upcoming Events</h2>
                <div className="events-list">
                    {upcomingEvents.map((entry, i) => 
                            <EventCard event={entry} />
                        )}
                    {/* <EventCard event={events.upcoming[0]} /> */}
                </div>
                <h2 id="past-events">Past Events</h2>
                <div className="events-list">
                    {pastEvents.map((entry, i) => 
                        <EventCard key={i + "event"} event={entry} />
                    )}
                </div>
            </div>
        </div>
    )
}