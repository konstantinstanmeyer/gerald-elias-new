export default function Home() {
  return (
    <>
      <div id="home" className="">
        <div loading="lazy" id="landing" className="">
          <img loading="lazy" id="landing-image" src="/murder-on-vacation.jpg" />
          <div id="landing-text">
            <p>COMING SOON! <span>'MURDER ON VACATION'</span></p>
            <p id="landing-description">Maury Gross thought retirement meant relaxation, travel, and quality time with his wife, Bobbi. Instead, he's tripping over dead bodies from coast to coast.</p>
            <a id="learn-more" href="/books/murder-on-vacation">MORE DETAILS</a>
          </div>
        </div>
        <div id="home-books-container">
          <div id="home-books-list">
            <h2 id="home-books-header">Books</h2>
            <a className="home-book" href="/books/murder-on-vacation">
              <img src="/murder-on-vacation.jpg" />
            </a>
            <a className="home-book" href="/books/murder-at-the-royal-albert">
                <img src="/book-murder-at-the-royal-albert.jpg" />
            </a>
            <a className="home-book" href="/books/roundtree-days">
                <img src="/roundtree-days.jpg" />
            </a>
            <a className="home-book" href="/books/symphonies-&-scorpions">
                <img src="/book-symphonies-and-scorpions.jpg" />
            </a>
            <a className="home-book" href="/books/it's-a-crime">
                <img src="/book-its-a-crime.jpg" />
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
            <a href="/biography" id="about-more">LEARN MORE</a>
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
