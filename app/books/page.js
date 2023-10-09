import Landing from "@/components/Landing";

export default function Books(){
    return(
        <div id="books">
            <Landing name="Books & Audiobooks" imageUrl="/books-landing.jpg" />
            {/* <div id="books-nav">
                <a href="#daniel-j-header">
                    <div id="daniel-container">
                        <p>Daniel Jacobus Mysteries</p>
                    </div>
                </a>
                <a href="#more-books-header">
                    <div id="more-books-container">
                        <p>More by Gerald Elias</p>
                    </div>
                </a>
                <a href="#audiobooks-header">
                    <div id="audiobooks-container">
                        <p>Audiobooks</p>
                    </div>
                </a>
            </div> */}
            <h2 id="daniel-j-header">Daniel Jacobus Mysteries</h2>
            <div className="books-list">
                <a className="book" href="/books/murder-at-the-royal-albert">
                    <img src="/book-murder-at-the-royal-albert.jpg" />
                </a>
                <a className="book" href="/books/it's-a-crime">
                    <img src="/book-its-a-crime.jpg" />
                </a>
                <a className="book" href="/books/cloudy-with-a-chance-of-murder">
                    <img src="/book-cloudy-with-a-chance-of-murder.jpg" />
                </a>
                <a className="book" href="/books/spring-break">
                    <img src="/book-spring-break.jpg" />
                </a>
                <a className="book" href="/books/playing-with-fire">
                    <img src="/book-playing-with-fire.jpg" />
                </a>
                <a className="book" href="/books/death-and-disfiguration">
                    <img src="/book-death-and-disfiguration.jpg" />
                </a>
                <a className="book" href="/books/death-and-the-maiden">
                    <img src="/book-death-and-the-maiden.jpeg" />
                </a>
                <a className="book" href="/books/danse-macabre">
                    <img src="/book-danse-macabre.jpeg" />
                </a>
                <a className="book" href="/books/devil's-trill">
                    <img src="/book-devil's-trill.jpg" />
                </a>
            </div>
            <h2 id="more-books-header">More books by Gerald Elias</h2>
            <div className="books-list">
                <a className="book" href="/books/roundtree-days">
                    <img src="/roundtree-days.jpg" />
                </a>
                <a className="book" href="/books/the-beethoven-sequence">
                    <img src="/the-beethoven-sequence-book.jpg" />
                </a>
                <a className="book" href="/books/an-eclectic-anthology">
                    <img src="/book-anthology.jpg" />
                </a>
                <a className="book" href="/books/symphonies-&-scorpions">
                    <img src="/symphonies-and-scorpions.jpeg" />
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
                <a className="book" href="/books/prince-of-the-leaf-cutters">
                    <img src="/book-prince.jpg" />
                </a>
            </div>
            <h2 id="audiobooks-header">Audiobooks</h2>
            <div className="books-list">
                <a className="book" href="/books/symphonies-&-scorpions">
                    <img src="/symphonies-and-scorpions.jpeg" />
                </a>
            </div>
        </div>
    )
}