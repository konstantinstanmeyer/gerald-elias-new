import formatDate from "@/util/formatDate";
import Inglewood from "./Inglewood";
import LeftCoastCrime from "./LeftCoastCrime";
import VivaldiConcert from "./VivaldiConcert";

export default function EventCard({ event, key }){
    const { imageUrl, name, date, location, address, hyperlink} = event;

    if (name === "Fiddlers Four") return (
        <div key={key} className="event-card">
            <div className="event-image-container">
                <img src={imageUrl} />
            </div>
            <div className="event-text">
                <h2>Fiddlers Four</h2>
                <h3>Thursday, July 31st, 2025</h3>
                <h4 id="slight-lower">Allen Center at Newton Cultural Alliance<span>&nbsp;35 Webster Street, Newton, MA 02465</span></h4>
                <h3>Sunday, August 3rd, 2025</h3>
                <h4>Saint James Place<span>&nbsp;352 Main Street, Great Barrington, MA 01230</span></h4>
                <p>Program includes Vivaldi's ever-popular Four Seasons and music by Purcell, Pachelbel, Legrenzi and Telemann</p>
                {hyperlink ? <a target="_blank" className="event-hyperlink" href={event.hyperlink}>Learn more</a> : null}
            </div>
        </div>
    )

    if (name === `"In the Mood"`) return (
        <div key={key} className="event-card">
            <div className="event-image-container">
                <img src={imageUrl} />
            </div>
            <div className="event-text">
                <h2>"In the Mood"</h2>
                <h3>Tuesday, September 9th, 2025</h3>
                <p>Release date of my quirky short story, "In the Mood," in Crimeucopia's mystery magazine, What the Butler Didn't See, published by Murderous Ink Press.</p>
                <p><em>A murder in an assisted living residence? Couldn't happen! Or could it?</em></p>
                <p>Now available for preorder.</p>
                {hyperlink ? <a target="_blank" className="event-hyperlink" href={event.hyperlink}>Learn more</a> : null}
            </div>
        </div>
    )

    return (
        <div key={key} className="event-card">
            <div className="event-image-container">
                <img src={imageUrl} />
            </div>
            <div className="event-text">
                <h2>{name}</h2>
                <h3>{event?.name === "Left Coast Crime 2024: Seattle Shakedown mystery book convention" ? "April 11th-14th, 2024" : event?.name === "Madame Mozart, the Lacrimosa" ? "July 10-27, 2025": date}</h3>
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