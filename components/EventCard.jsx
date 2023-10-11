export default function EventCard({ event }){
    return (
        <div className="event-card">
            <div className="event-image-container">
                <img src={event.imageUrl} />
            </div>
            <div className="event-text">
                <h2>{event.name}</h2>
                <h3>{event.date}</h3>
                <h4>{event.location}<span>&nbsp;{event.address}</span></h4>
                <p>{event.description}</p>
            </div>
        </div>
    )
}