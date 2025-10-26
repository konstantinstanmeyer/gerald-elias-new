export default function Home() {
  return (
    <>
      <div id="home" className="">
        <div loading="lazy" id="landing" className="">
          <div id="landing-text">
            <p><span className="embolden">Gerald Elias</span> proudly performs on violins made by his son, <span className="embolden">Jacob</span></p>
            {/* <p id="landing-description">Jacob Elias creates bespoke violins in Brooktondale, NY, combining traditional craftsmanship with innovative techniques to produce high-quality, personalized instruments.</p> */}
            {/* <a id="learn-more" target="_blank" href="https://jacobeliasdotart.wordpress.com/">MORE DETAILS</a>
            <a id="learn-more" href="mailto:eliasviolins@gmail.com">CONTACT</a> */}
            <div className="button-container">
              <a href="mailto:eliasviolins@gmail.com" className="landing-button">Contact Jacob Elias</a>
            </div>
          </div>
          <img loading="lazy" id="landing-image" src="/new-violins.jpg" />
        </div>
        <div className="white-city">
          <div id="white-city-container">
            <img src="/publishers-marketplace.jpg" />
            <div id="white-city-text">
              <h2>BREAKING NEWS</h2>
              <p>Gerald Elias and White City Press have a new, four-book deal! Keep your eyes out for NYPD Chief Maury Gross and Western lawman Jefferson Dance in 2026.</p>
            </div>
          </div>
        </div>
        <div id="home-books-container">
          <div id="home-books-list">
            <h2 id="home-books-header">Featured Titles</h2>
            <a className="home-book" href="/books/murder-at-the-royal-albert">
                <img src="/book-murder-at-the-royal-albert.jpg" />
            </a>
            <a className="home-book" href="/books/audiobooks/murder-at-the-royal-albert">
                <img src="/albert-audiobook-transparent.png" />
            </a>
            <a className="home-book" href="/books/roundtree-days">
                <img src="/roundtree-days.jpg" />
            </a>
            <a className="home-book" href="/books/symphonies-&-scorpions">
                <img src="/book-symphonies-and-scorpions.jpg" />
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
