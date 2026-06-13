import Image from "next/image";

export default function EventCard({ event }) {
    const {
    date,
    name,
    location,
    address,
    description,
    imageUrl,
    hyperlink
    } = event;

    return (
        <article className="event-card">
            <div className="event-card-image-wrapper">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={name}
                        fill
                        className="event-card-image"
                        style={{ objectFit: 'cover' }}
                    />
                ) : (
                    <div className="event-card-placeholder">🎵</div>
                )}
            </div>
            <div className="event-card-content">
                <div className="event-card-date">{date}</div>
                <h3 className="event-card-name">{name}</h3>
                {location && (
                    <div className="event-card-location">
                    <span>{location}</span>
                    </div>
                )}
                {address && <div className="event-card-address">{address}</div>}
                {description && <p className="event-card-description">{description}</p>}
                {hyperlink && (
                    <a
                    href={hyperlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="event-card-link"
                    >
                    Learn More
                    </a>
                )}
            </div>
        </article>
    );
}