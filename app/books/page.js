import Landing from "@/components/Landing";

export default function Books(){
    return(
        <div id="books">
            <Landing name="Books & Audiobooks" imageUrl="/books-landing.jpg" />
            <div id="award">
                <img src="/insignia.png" />
            </div>
            <div id="hint-container">
                <h5>click covers for more info</h5>
                &nbsp;
                <img src="/cursor.png" />
            </div>
            <h2 id="featured-titles-header">Featured Titles</h2>
            <div className="books-list">
                <a className="book" href="/books/murder-on-vacation">
                    <img src="/murder-on-vacation.jpg" />
                </a>
                <a className="book" href="/books/murder-at-the-royal-albert">
                    <img src="/book-murder-at-the-royal-albert.jpg" />
                </a>
                <a className="book" href="/books/roundtree-days">
                    <img src="/roundtree-days.jpg" />
                </a>
                <a className="book" href="/books/symphonies-&-scorpions">
                    <img src="/book-symphonies-and-scorpions.jpg" />
                </a>
                <a className="book" href="/books/it's-a-crime">
                <img src="/book-its-a-crime.jpg" />
            </a>
            </div>
            <h2 id="daniel-j-header">Daniel Jacobus Mysteries</h2>
            <div className="books-list">
                <a className="book" href="/books/devil's-trill">
                    <img src="/book-devil's-trill.jpg" />
                </a>
                <a className="book" href="/books/danse-macabre">
                    <img src="/book-danse-macabre.jpg" />
                </a>
                <a className="book" href="/books/death-and-the-maiden">
                    <img src="/book-death-and-the-maiden.jpg" />
                </a>
                <a className="book" href="/books/death-and-disfiguration">
                    <img src="/book-death-and-disfiguration.jpg" />
                </a>
                <a className="book" href="/books/playing-with-fire">
                    <img src="/book-playing-with-fire.jpg" />
                </a>
                <a className="book" href="/books/spring-break">
                    <img src="/book-spring-break.jpg" />
                </a>
                <a className="book" href="/books/cloudy-with-a-chance-of-murder">
                    <img src="/book-cloudy-with-a-chance-of-murder.jpg" />
                </a>
                <a className="book" href="/books/murder-at-the-royal-albert">
                    <img src="/book-murder-at-the-royal-albert.jpg" />
                </a>
            </div>
            <h2 id="more-books-header">More books by Gerald Elias</h2>
            <div className="books-list">
                <a className="book" href="/books/murder-on-vacation">
                    <img src="/murder-on-vacation.jpg" />
                </a>
                <a className="book" href="/books/roundtree-days">
                    <img src="/roundtree-days.jpg" />
                </a>
                <a className="book" href="/books/it's-a-crime">
                    <img src="/book-its-a-crime.jpg" />
                </a>
                <a className="book" href="/books/the-beethoven-sequence">
                    <img src="/the-beethoven-sequence-book.jpg" />
                </a>
                <a className="book" href="/books/symphonies-&-scorpions">
                    <img src="/book-symphonies-and-scorpions.jpg" />
                </a>
                <a className="book" href="/books/getting-through">
                    <img src="/book-getting-through.jpeg" />
                </a>
                <a className="book" href="/books/maestro-the-potbellied-pig">
                    <img src="/book-maestro.jpg" />
                </a>
                <a className="book" href="/books/maestro-the-potbellied-pig-es">
                    <img src="/book-maestro-es.jpg" />
                </a>
            </div>
            <h2 id="audiobooks-header">Audiobooks</h2>
            <div className="books-list">
                <a className="audiobook" href="/books/audiobooks/devil's-trill">
                    <img src="/audiobook-devil's-trill.jpeg" />
                </a>
                <a className="audiobook" href="/books/audiobooks/danse-macabre">
                    <img src="/audiobook-danse-macabre.jpeg" />
                </a>
                <a className="audiobook" href="/books/audiobooks/dances-with-death">
                    <img src="/audiobook-dances-with-death.jpeg" />
                </a>
                <a className="audiobook" href="/books/audiobooks/murder-at-the-royal-albert">
                    <img src="/murder-at-the-royal-albert-audiobook.jpeg" />
                </a>
                <a className="audiobook" href="/books/audiobooks/maestro-the-potbellied-pig">
                    <img src="/audiobook-maestro.jpeg" />
                </a>
                <a className="audiobook" href="/books/audiobooks/maestro-the-potbellied-pig-es">
                    <img src="/audiobook-maestro-es.jpeg" />
                </a>
            </div>
        </div>
    )
}