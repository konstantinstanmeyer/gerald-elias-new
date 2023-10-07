import Landing from "@/components/Landing";

export default function Books(){
    return(
        <div id="books">
            <Landing name="Books & Audiobooks" imageUrl="/books-landing.jpg" />
            <h2>Daniel Jacobus Mysteries</h2>
            <div id="books-list">
                <a className="book" href="/books/roundtree-days">
                    <img src="/roundtree-days.jpg" />
                </a>
                <a className="book" href="/books/its-a-crime">
                    <img src="/book-its-a-crime.jpg" />
                </a>
                <a className="book" href="/books/murder-at-the-royal-albert">
                    <img src="/book-murder-at-the-royal-albert.jpg" />
                </a>
                <a className="book" href="/books/cloudy-with-a-chance-of-murder">
                    <img src="/book-cloudy-with-a-chance-of-murder.jpg" />
                </a>
                <a className="book" href="/books/the-beethoven-sequence">
                    <img src="/the-beethoven-sequence-book.jpg" />
                </a>
                <a className="book" href="/books/symphonies-&-scorpions">
                    <img src="/symphonies-and-scorpions.jpeg" />
                </a>
                <a className="book" href="/books/death-and-disfiguration">
                    <img src="/book-death-and-disfiguration.jpg" />
                </a>
                <a className="book" href="/books/playing-with-fire">
                    <img src="/book-playing-with-fire.jpg" />
                </a>
            </div>
        </div>
    )
}