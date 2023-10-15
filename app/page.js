export default function Home() {
  return (
    <>
      <div id="home" className="">
        <div id="landing" className="">
          <img loading="lazy" id="landing-image" src="/murder-at-the-royal-albert-audiobook.jpeg" />
          <div id="landing-text">
            <h2>PRE-ORDER <span>'MURDER AT THE ROYAL ALBERT'</span> AUDIOBOOK</h2>
            <p id="landing-description">experience the thrill of live performances woven into the tale</p>
            <a id="learn-more" href="/books/audiobooks/murder-at-the-royal-albert">MORE DETAILS</a>
          </div>
        </div>
        <div id="home-books-container">
          <div id="home-books-list">
            <h2 id="home-books-header">Books</h2>
            <a className="home-book" href="/books/roundtree-days">
                <img src="/roundtree-days.jpg" />
            </a>
            <a className="home-book" href="/books/it's-a-crime">
                <img src="/book-its-a-crime.jpg" />
            </a>
            <a className="home-book" href="/books/murder-at-the-royal-albert">
                <img src="/book-murder-at-the-royal-albert.jpg" />
            </a>
            <a className="home-book" href="/books/cloudy-with-a-chance-of-murder">
                <img src="/book-cloudy-with-a-chance-of-murder.jpg" />
            </a>
            <a className="home-book" href="/books/the-beethoven-sequence">
                <img src="/the-beethoven-sequence-book.jpg" />
            </a>
            <a className="home-book" href="/books/symphonies-&-scorpions">
                <img src="/symphonies-and-scorpions.jpeg" />
            </a>
          </div>
          <a id="all-books" href="/books">
            ALL BOOKS
          </a>
        </div>
        <div id="about">
          <img src="/gerald-elias-statues.jpeg" id="about-image" />
          <div id="about-text">
            <h2 id="about-gerald">About Gerald</h2>
            <p id="about-description">Gerald Elias, an accomplished author, seamlessly blends his background in music with his passion for writing, creating captivating mystery and crime novels. Before becoming a writer, Elias was a renowned violinist, lending his lyrical and evocative talents to prestigious orchestras. His novels reflect his love for adventure and travel, drawing inspiration from his life's rich experiences. Join us on a literary journey through the works of an author whose past is as diverse and captivating as the stories he crafts, where music and mystery intertwine to transport readers into thrilling realms of suspense and intrigue.</p>
            <a href="/" id="about-more">LEARN MORE</a>
          </div>
          <img id="about-mobile-img" src="/about-mobile.jpeg" />
          <h2 className="about-mobile" id="about-gerald-mobile">About Gerald</h2>
          <p className="about-mobile about-mobile-text" id="about-description">Gerald Elias, an accomplished author, seamlessly blends his background in music with his passion for writing, creating captivating mystery and crime novels. Before becoming a writer, Elias was a renowned violinist, lending his lyrical and evocative talents to prestigious orchestras. His novels reflect his love for adventure and travel, drawing inspiration from his life's rich experiences. Join us on a literary journey through the works of an author whose past is as diverse and captivating as the stories he crafts, where music and mystery intertwine to transport readers into thrilling realms of suspense and intrigue.</p>
          <a className="about-mobile about-mobile-text" href="/" id="about-more">LEARN MORE</a>
        </div>
      </div>
    </>
  )
}
