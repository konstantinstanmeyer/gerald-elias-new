export default function EventCard({ event }){
    const { imageUrl, name, date, location, address, hyperlink} = event;

    return (
        <div className="event-card">
            <div className="event-image-container">
                <img src={imageUrl} />
            </div>
            <div className="event-text">
                <h2>{name}</h2>
                <h3>{date}</h3>
                {location ? <h4>{event.location}<span>&nbsp;{event.address}</span></h4> : null}
                {event?.description ? <p>{event.description}</p> : null}
                {hyperlink ? <a className="event-hyperlink" href={event.hyperlink}>Learn more</a> : null}
            </div>
        </div>
    )
}