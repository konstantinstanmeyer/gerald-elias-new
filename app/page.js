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
        <div id="book-deal-landing">
          <p id="ad-coming-soon">COMING SOON!</p>
          <p className="ad-block">
            I’m very pleased to announce a two-book deal with publisher Aakenbaaken &amp; Kent, for the publication of two
            volumes featuring retired NYPD police chief Maury Gross. <em>Murder on Vacation</em>, a collection of 16 short
            mysteries, will be released this fall, followed by three novelettes in <em>Murder Goes Abroad</em>.
          </p>
          <p className="ad-block">
            <strong>Maury Gross thought retirement meant relaxation, travel, and quality time with his wife, Bobbi. Instead, he&#39;s tripping over dead bodies from coast to coast.</strong>
          </p>
          <p className="ad-block">
            Meet Maury Gross: retired NYPD Police Chief, reluctant vacationer, and accidental detective extraordinaire.
            With his sharp wit, keen eye, and long-suffering wife Bobbi by his side, Maury can&#39;t seem to take a trip without
            stumbling into a mystery.
          </p>
          <p className="ad-block">
            From the sun-soaked beaches of California to the snowy peaks of Utah, from the quaint towns of New England
            to the bustling streets of Tokyo, Maury's &quot;golden years&quot; are filled with anything but rest. Each destination brings
            a new adventure, a baffling crime, and a cast of colorful suspects.
          </p>
          <p className="ad-block">In this collection of 16 short stories, you'll join Maury as he:</p>
          <p className="ad-block">• Unravels a perplexing murder at a ski resort</p>
          <p className="ad-block">• Investigates a suspicious death among the elephant seals</p>
          <p className="ad-block">• Solves a puzzling case of sushi and sabotage in Japan</p>
          <p className="ad-block">• And much more!</p>
          <p className="ad-block">
            With a perfect blend of humor, suspense, and armchair travel, &quot;Murder on Vacation&quot; offers a fresh take on the
            mystery genre. Maury&#39;s dry wit, Bobbi&#39;s pragmatic wisdom, and their endearing relationship anchor each story,
            while exotic locales and intricate plots keep the pages turning.
          </p>
          <p className="ad-block">
            Ideal for fans of cozy mysteries, travel enthusiasts, and anyone who believes that retirement should be
            anything but boring. Whether you&#39;re a seasoned mystery lover or new to the genre, Maury Gross will charm
            you with his reluctant heroics and sharp deductions.
          </p>
          <p className="ad-block">
            Pack your bags, bring your reading glasses, and join Maury and Bobbi on a globetrotting adventure where the
            only thing deadlier than the criminals... is retirement itself!
          </p>
          <img id="ad-image" src="/murder-on-vacation.jpg"/>
          <p id="ad-quote">
            <em>“Move over Nick and Nora, there’s a new crime-fighting duo in town. The game’s afoot with this fun and
            endearing couple.”</em> — James L’Etoile, award-winning author of <em>Face of Greed</em> and <em>River of Lies</em>.
          </p>
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
