import Landing from "@/components/Landing";

export default function Events(){
    return(
        <div id="events">
            <Landing name="Events" imageUrl='/events-landing.jpg' />
            <div id="events-container">
                <h2>Upcoming Events</h2>
                <div className="events-list">
                    <div className="event">
                        
                    </div>
                </div>
                <h2>Past Events</h2>
                <div className="events-list">
                    <div className="event">

                    </div>
                </div>
            </div>
        </div>
    )
}