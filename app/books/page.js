import Landing from "@/components/Landing";
import Image from "next/image";

const FEATURED_BOOKS = [
    {
        href: "/books/murder-at-the-royal-albert",
        src: "/book-murder-at-the-royal-albert.jpg",
        alt: "Murder at the Royal Albert",
    },
    {
        href: "/books/audiobooks/murder-at-the-royal-albert",
        src: "/albert-audiobook-transparent.png",
        alt: "Murder at the Royal Albert Audiobook",
    },
    {
        href: "/books/roundtree-days",
        src: "/roundtree-days.jpg",
        alt: "Roundtree Days",
    },
    {
        href: "/books/symphonies-&-scorpions",
        src: "/book-symphonies-and-scorpions.jpg",
        alt: "Symphonies & Scorpions",
    },
]

const JACOBUS_BOOKS = [
    {
        href: "/books/devil's-trill",
        src: "/book-devil's-trill.jpg",
        alt: "Devil's Trill",
    },
    {
        href: "/books/danse-macabre",
        src: "/book-danse-macabre.jpg",
        alt: "Danse Macabre",
    },
    {
        href: "/books/death-and-the-maiden",
        src: "/book-death-and-the-maiden.jpg",
        alt: "Death and the Maiden",
    },
    {
        href: "/books/death-and-disfiguration",
        src: "/book-death-and-disfiguration.jpg",
        alt: "Death and Disfiguration",
    },
    {
        href: "/books/playing-with-fire",
        src: "/book-playing-with-fire.jpg",
        alt: "Playing with Fire",
    },
    {
        href: "/books/spring-break",
        src: "/book-spring-break.jpg",
        alt: "Spring Break",
    },
    {
        href: "/books/cloudy-with-a-chance-of-murder",
        src: "/book-cloudy-with-a-chance-of-murder.jpg",
        alt: "Cloudy with a Chance of Murder",
    },
    {
        href: "/books/murder-at-the-royal-albert",
        src: "/book-murder-at-the-royal-albert.jpg",
        alt: "Murder at the Royal Albert",
    },
]

const MORE_BOOKS = [
    {
        href: "/books/roundtree-days",
        src: "/roundtree-days.jpg",
        alt: "Roundtree Days",
    },
    {
        href: "/books/it's-a-crime",
        src: "/book-its-a-crime.jpg",
        alt: "It's a Crime",
    },
    {
        href: "/books/the-beethoven-sequence",
        src: "/the-beethoven-sequence-book.jpg",
        alt: "The Beethoven Sequence",
    },
    {
        href: "/books/symphonies-&-scorpions",
        src: "/book-symphonies-and-scorpions.jpg",
        alt: "Symphonies & Scorpions",
    },
    {
        href: "/books/getting-through",
        src: "/book-getting-through.jpeg",
        alt: "Getting Through",
    },
    {
        href: "/books/maestro-the-potbellied-pig",
        src: "/book-maestro.jpg",
        alt: "Maestro the Potbellied Pig",
    },
    {
        href: "/books/maestro-the-potbellied-pig-es",
        src: "/book-maestro-es.jpg",
        alt: "Maestro the Potbellied Pig (Spanish)",
    },
];

const AUDIOBOOKS = [
    {
        href: "/books/audiobooks/devil's-trill",
        src: "/audiobook-devil's-trill.jpeg",
        alt: "Devil's Trill Audiobook",
        audiobook: true
    },
    {
        href: "/books/audiobooks/danse-macabre",
        src: "/audiobook-danse-macabre.jpeg",
        alt: "Danse Macabre Audiobook",
        audiobook: true
    },
    {
        href: "/books/audiobooks/dances-with-death",
        src: "/audiobook-dances-with-death.jpeg",
        alt: "Dances with Death Audiobook",
        audiobook: true
    },
    {
        href: "/books/audiobooks/murder-at-the-royal-albert",
        src: "/murder-at-the-royal-albert-audiobook.jpeg",
        alt: "Murder at the Royal Albert Audiobook",
        audiobook: true
    },
    {
        href: "/books/audiobooks/maestro-the-potbellied-pig",
        src: "/audiobook-maestro.jpeg",
        alt: "Maestro the Potbellied Pig Audiobook",
        audiobook: true
    },
    {
        href: "/books/audiobooks/maestro-the-potbellied-pig-es",
        src: "/audiobook-maestro-es.jpeg",
        alt: "Maestro the Potbellied Pig (Spanish) Audiobook",
        audiobook: true
    },
]

function BookCard({ href, src, alt, audiobook = false }){
    return (
        <a href={href}>
            <Image
                height={audiobook ? 200 : 280}
                width={200}
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
            <Landing name="Books & Audiobooks" imageUrl="/books-landing.jpg" />
            <div id="books-content">
                <div id="book-award">
                    <Image alt="KILLER NASHVILLE SILVER FALCHION AWARD" width={300} height={225} src="/insignia.png" />
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

// return(
//         <div id="books">
//             <Landing name="Books & Audiobooks" imageUrl="/books-landing.jpg" />
//             <div id="award">
//                 <img src="/insignia.png" />
//             </div>
//             <div id="hint-container">
//                 <h5>click covers for more info</h5>
//                 &nbsp;
//                 <img src="/cursor.png" />
//             </div>
//             <h2 id="featured-titles-header">Featured Titles</h2>
//             <div className="books-list">
//                 <a className="book" href="/books/murder-at-the-royal-albert">
//                     <img src="/book-murder-at-the-royal-albert.jpg" />
//                 </a>
//                 <a className="book" href="/books/audiobooks/murder-at-the-royal-albert">
//                     <img src="/albert-audiobook-transparent.png" />
//                 </a>
//                 <a className="book" href="/books/roundtree-days">
//                     <img src="/roundtree-days.jpg" />
//                 </a>
//                 <a className="book" href="/books/symphonies-&-scorpions">
//                     <img src="/book-symphonies-and-scorpions.jpg" />
//                 </a>
//             </div>
//             <h2 id="daniel-j-header">Daniel Jacobus Mysteries</h2>
//             <div className="books-list">
//                 <a className="book" href="/books/devil's-trill">
//                     <img src="/book-devil's-trill.jpg" />
//                 </a>
//                 <a className="book" href="/books/danse-macabre">
//                     <img src="/book-danse-macabre.jpg" />
//                 </a>
//                 <a className="book" href="/books/death-and-the-maiden">
//                     <img src="/book-death-and-the-maiden.jpg" />
//                 </a>
//                 <a className="book" href="/books/death-and-disfiguration">
//                     <img src="/book-death-and-disfiguration.jpg" />
//                 </a>
//                 <a className="book" href="/books/playing-with-fire">
//                     <img src="/book-playing-with-fire.jpg" />
//                 </a>
//                 <a className="book" href="/books/spring-break">
//                     <img src="/book-spring-break.jpg" />
//                 </a>
//                 <a className="book" href="/books/cloudy-with-a-chance-of-murder">
//                     <img src="/book-cloudy-with-a-chance-of-murder.jpg" />
//                 </a>
//                 <a className="book" href="/books/murder-at-the-royal-albert">
//                     <img src="/book-murder-at-the-royal-albert.jpg" />
//                 </a>
//             </div>
//             <h2 id="more-books-header">More books by Gerald Elias</h2>
//             <div className="books-list">
//                 <a className="book" href="/books/roundtree-days">
//                     <img src="/roundtree-days.jpg" />
//                 </a>
//                 <a className="book" href="/books/it's-a-crime">
//                     <img src="/book-its-a-crime.jpg" />
//                 </a>
//                 <a className="book" href="/books/the-beethoven-sequence">
//                     <img src="/the-beethoven-sequence-book.jpg" />
//                 </a>
//                 <a className="book" href="/books/symphonies-&-scorpions">
//                     <img src="/book-symphonies-and-scorpions.jpg" />
//                 </a>
//                 <a className="book" href="/books/getting-through">
//                     <img src="/book-getting-through.jpeg" />
//                 </a>
//                 <a className="book" href="/books/maestro-the-potbellied-pig">
//                     <img src="/book-maestro.jpg" />
//                 </a>
//                 <a className="book" href="/books/maestro-the-potbellied-pig-es">
//                     <img src="/book-maestro-es.jpg" />
//                 </a>
//             </div>
//             <h2 id="audiobooks-header">Audiobooks</h2>
//             <div className="books-list">
//                 <a className="audiobook" href="/books/audiobooks/devil's-trill">
//                     <img src="/audiobook-devil's-trill.jpeg" />
//                 </a>
//                 <a className="audiobook" href="/books/audiobooks/danse-macabre">
//                     <img src="/audiobook-danse-macabre.jpeg" />
//                 </a>
//                 <a className="audiobook" href="/books/audiobooks/dances-with-death">
//                     <img src="/audiobook-dances-with-death.jpeg" />
//                 </a>
//                 <a className="audiobook" href="/books/audiobooks/murder-at-the-royal-albert">
//                     <img src="/murder-at-the-royal-albert-audiobook.jpeg" />
//                 </a>
//                 <a className="audiobook" href="/books/audiobooks/maestro-the-potbellied-pig">
//                     <img src="/audiobook-maestro.jpeg" />
//                 </a>
//                 <a className="audiobook" href="/books/audiobooks/maestro-the-potbellied-pig-es">
//                     <img src="/audiobook-maestro-es.jpeg" />
//                 </a>
//             </div>
//         </div>
//     )