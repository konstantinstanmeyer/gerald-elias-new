import formatDate from "@/util/formatDate";
import Inglewood from "./Inglewood";
import LeftCoastCrime from "./LeftCoastCrime";
import VivaldiConcert from "./VivaldiConcert";

export default function EventCard({ event, key }){
    const { imageUrl, name, date, location, address, hyperlink} = event;

    return (
        <div key={key} className="event-card">
            <div className="event-image-container">
                <img src={imageUrl} />
            </div>
            <div className="event-text">
                <h2>{name}</h2>
                <h3>{event?.name !== "Left Coast Crime 2024: Seattle Shakedown mystery book convention" ? date : "April 11th-14th, 2024"}</h3>
                {location ? <h4>{event.location}<span>&nbsp;{event.address}</span></h4> : null}
                {event?.description ? <p>{event.description}</p> : null}
                {event?.name === "Left Coast Crime 2024: Seattle Shakedown mystery book convention" ? <LeftCoastCrime /> : null}
                {event?.name === "Book presentation with music, Murder at the Royal Albert" ? <Inglewood /> : null}
                {event?.name === "Annual Vivaldi by Candlelight concert" ? <VivaldiConcert /> : null}
                {hyperlink ? <a target="_blank" className="event-hyperlink" href={event.hyperlink}>Learn more</a> : null}
            </div>
        </div>
    )
}