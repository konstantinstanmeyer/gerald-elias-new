import Landing from "@/components/Landing";
import Image from "next/image";

const FEATURED_BOOKS = [
    {
        href: "/books/murder-at-the-royal-albert",
        src: "/books/murder-at-the-royal-albert.webp",
        alt: "Murder at the Royal Albert",
    },
    {
        href: "/books/audiobooks/murder-at-the-royal-albert",
        src: "/books/albert-audiobook-vertical.webp",
        alt: "Murder at the Royal Albert Audiobook",
    },
    {
        href: "/books/roundtree-days",
        src: "/books/roundtree-days.webp",
        alt: "Roundtree Days",
    },
    {
        href: "/books/symphonies-&-scorpions",
        src: "/books/symphonies-and-scorpions.webp",
        alt: "Symphonies & Scorpions",
    },
]

const JACOBUS_BOOKS = [
    {
        href: "/books/devil's-trill",
        src: "/books/devil's-trill.webp",
        alt: "Devil's Trill",
    },
    {
        href: "/books/danse-macabre",
        src: "/books/danse-macabre.webp",
        alt: "Danse Macabre",
    },
    {
        href: "/books/death-and-the-maiden",
        src: "/books/death-and-the-maiden.webp",
        alt: "Death and the Maiden",
    },
    {
        href: "/books/death-and-disfiguration",
        src: "/books/death-and-disfiguration.webp",
        alt: "Death and Disfiguration",
    },
    {
        href: "/books/playing-with-fire",
        src: "/books/playing-with-fire.webp",
        alt: "Playing with Fire",
    },
    {
        href: "/books/spring-break",
        src: "/books/spring-break.webp",
        alt: "Spring Break",
    },
    {
        href: "/books/cloudy-with-a-chance-of-murder",
        src: "/books/cloudy-with-a-chance-of-murder.webp",
        alt: "Cloudy with a Chance of Murder",
    },
    {
        href: "/books/murder-at-the-royal-albert",
        src: "/books/murder-at-the-royal-albert.webp",
        alt: "Murder at the Royal Albert",
    },
]

const MORE_BOOKS = [
    {
        href: "/books/roundtree-days",
        src: "/books/roundtree-days.webp",
        alt: "Roundtree Days",
    },
    {
        href: "/books/it's-a-crime",
        src: "/books/its-a-crime.webp",
        alt: "It's a Crime",
    },
    {
        href: "/books/the-beethoven-sequence",
        src: "/books/the-beethoven-sequence.webp",
        alt: "The Beethoven Sequence",
    },
    {
        href: "/books/symphonies-&-scorpions",
        src: "/books/symphonies-and-scorpions.webp",
        alt: "Symphonies & Scorpions",
    },
    {
        href: "/books/getting-through",
        src: "/books/getting-through.webp",
        alt: "Getting Through",
    },
    {
        href: "/books/maestro-the-potbellied-pig",
        src: "/books/maestro.webp",
        alt: "Maestro the Potbellied Pig",
    },
    {
        href: "/books/maestro-the-potbellied-pig-es",
        src: "/books/maestro-es.webp",
        alt: "Maestro the Potbellied Pig (Spanish)",
    },
];

const AUDIOBOOKS = [
    {
        href: "/books/audiobooks/devil's-trill",
        src: "/books/audiobook-devil's-trill.webp",
        alt: "Devil's Trill Audiobook",
        audiobook: true
    },
    {
        href: "/books/audiobooks/danse-macabre",
        src: "/books/audiobook-danse-macabre.webp",
        alt: "Danse Macabre Audiobook",
        audiobook: true
    },
    {
        href: "/books/audiobooks/dances-with-death",
        src: "/books/audiobook-dances-with-death.webp",
        alt: "Dances with Death Audiobook",
        audiobook: true
    },
    {
        href: "/books/audiobooks/murder-at-the-royal-albert",
        src: "/books/audiobook-murder-at-the-royal-albert.webp",
        alt: "Murder at the Royal Albert Audiobook",
        audiobook: true
    },
    {
        href: "/books/audiobooks/maestro-the-potbellied-pig",
        src: "/books/audiobook-maestro.webp",
        alt: "Maestro the Potbellied Pig Audiobook",
        audiobook: true
    },
    {
        href: "/books/audiobooks/maestro-the-potbellied-pig-es",
        src: "/books/audiobook-maestro-es.webp",
        alt: "Maestro the Potbellied Pig (Spanish) Audiobook",
        audiobook: true
    },
]

function BookCard({ href, src, alt, audiobook = false }){
    return (
        <a className="book-card" href={href}>
            <Image
                height={audiobook ? 220 : 320}
                width={220}
                src={src}
                alt={alt}
                loading="lazy"
            />
        </a>
    )
}

function BookSection({ name, books }){
    return(
        <section className="books-page-section">
            <h3>{name}</h3>
            <div className="books-page-list">
                {books.map((book, i) => 
                    <BookCard 
                        href={book.href}
                        src={book.src}
                        alt={book.alt}
                        audiobook={book?.audiobook}
                        key={"book-item-" + i}
                    />
                )}
            </div>
        </section>
    )
}

export default function Books(){
    return(
        <main id="books">
            <Landing name="Books & Audiobooks" imageUrl="/general/books-landing.webp" />
            <div id="books-content">
                <div id="book-award">
                    <Image alt="KILLER NASHVILLE SILVER FALCHION AWARD" width={300} height={225} src="/icons/insignia.webp" />
                </div>
                <BookSection 
                    name="Featured Titles"
                    books={FEATURED_BOOKS}
                />
                <BookSection 
                    name="Daniel Jacobus Mysteries"
                    books={JACOBUS_BOOKS}
                />
                <BookSection 
                    name="More Books"
                    books={MORE_BOOKS}
                />
                <BookSection 
                    name="Audiobooks"
                    books={AUDIOBOOKS}
                />
            </div>
        </main>
    )
}