export default function Home() {
  return (
    <>
      <div id="home" className="">
        <div loading="lazy" id="landing" className="">
          <img loading="lazy" id="landing-image" src="/murder-at-the-royal-albert-audiobook.jpeg" />
          <div id="landing-text">
            <p>NEW RELEASE: <span>'MURDER AT THE ROYAL ALBERT'</span> AUDIOBOOK</p>
            <p id="landing-description">"...an altogether delightful listen." -AudioFile Magazine</p>
            <a id="learn-more" href="/books/audiobooks/murder-at-the-royal-albert">MORE DETAILS</a>
          </div>
        </div>
        <div id="home-announcement">
          <h1>NEW BOOK DEAL SIGNED WITH LEVEL BEST BOOKS</h1>
          <p>
            Gerald Elias has just signed a new contract with Level Best Books for two additional mysteries,&nbsp;
            <strong>Murder on Vacation: From the Files of Maury Gross, NYPD (Ret.) and Wild Horses: A Jefferson Dance Western Mystery.&nbsp;</strong>
            <em>A big shout out to my publisher, Verena Rose at Level Best Books and my agent, Josh Getzler (HG Literary) for putting together this exciting deal.</em>
          </p>
          <a href="/posts">Read More</a>
        </div>
        <div id="home-books-container">
          <div id="home-books-list">
            <h2 id="home-books-header">Books</h2>
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
            <a className="home-book" href="/books/cloudy-with-a-chance-of-murder">
                <img src="/book-cloudy-with-a-chance-of-murder.jpg" />
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
