import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main id="home">
      <section id="landing">
        <div id="landing-text">
          <div id="subtext-container">
            <span id="subtext">AUTHOR • VIOLINIST</span>
            <div id="line" />
          </div>
          <h1 id="landing-title">
            <strong>Gerald Elias</strong> proudly performs on violins made by
            his son, <strong className="gold-accent">Jacob</strong>
          </h1>
          <p id="landing-description">
            Handcrafted, bespoke violins from Brooktondale, NY — craftsmanship meets innovative artistry.
          </p>
          <div className="button-container">
            <a href="mailto:eliasviolins@gmail.com" className="btn-primary">
              Contact Jacob Elias
            </a>
            <a
              href="https://www.eliasviolins.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Learn More
            </a>
          </div>
        </div>
        <div id="landing-image-container">
          <Image
            id="landing-image"
            src="/general/jerry-and-jacob.webp"
            alt="Violins crafted by Jacob Elias"
            width={600}
            height={450}
            priority
          />
        </div>
      </section>
      <section id="breaking-news">
        <div id="breaking-news-container">
          <div id="breaking-news-image">
            <Image
              src="/general/murder-on-vacation-breaking.webp"
              alt="Publishers Marketplace announcement"
              width={500}
              height={350}
            />
          </div>
          <div id="breaking-news-text">
            <span className="section-label">Breaking News</span>
            <h2>
              A New Feature in{" "}
              <em className="gold-accent">Behold, A New Hero!</em>
            </h2>
            <div className="accent-line" />
            <p>
              {/* Gerald Elias and White City Press have announced an exciting new
              partnership. Keep your eyes out for{" "}
              <strong>NYPD Chief Maury Gross</strong> and Western lawman{" "}
              <strong>Jefferson Dance</strong> in 2026. */}
              First there was Hercule Poirot. Then came Sam Spade. Now, get ready for…Maury Gross.
            </p>
            <p>
              You heard right. Maury Gross, a retired, Jewish NYPD police chief: part cop, part philosopher, and if one is totally honest, part nebbish who could stand to lose a few pounds and who would like nothing better to do than lie on his couch in Queens with a nice sandwich and watch the Mets on TV.
            </p>
            <p>
              In <a href="https://whitecitypress.com/product/mov/WCP/49/ " target="_blank" rel="">MURDER ON VACATION</a>, a collection of 16 delectable short crime stories, Maury’s wife, Bobbi, takes (i.e. drags) the two of them to many of America’s favorite holiday destinations, from headlands of the California coast to the headstones of Boston’s historic burial grounds and all points in between. Unfortunately for Maury, his stellar reputation precedes him everywhere he tries to go for a little R&R and, when a baffling heist or murder is committed, the local constabulary imposes upon him to solve it. Sometimes, for Maury, that means looking the other way when he has greater sympathy for the perp than the victim, but let’s leave it at that for the moment.
            </p>
            <p>
              Like Nick and Nora Charles in Dashiell Hammett’s classic The Thin Man series, Maury and Bobbi are a loveable and inseparable crime-solving team, providing plentiful laughs as they inevitably bring every ne’er-do-well to justice.
            </p>
            <p>
              <strong><a id="breaking-accent-link" href="https://whitecitypress.com/product/mov/WCP/49/" target="_blank" rel="noopener noreferrer">MURDER ON VACATION, a perfect choice for your summer reading list, is now available for preorder from White City Press!</a></strong>
            </p>
            <p>
              Preorder from White City Press before May 19 and you’ll receive the paperback for only $16. After the 19th it will be $18, still a lower price than at any retail outlet. Plus, White City Press provides FREE SHIPPING, ANYWHERE!
            </p>
            <p>
              If you preorder the ebook version for only $4.99, it will be delivered to the email address on the order.
            </p>
            {/* <div className="accent-line" /> */}
            <Link href="https://whitecitypress.com/product/mov/WCP/49/" target="_blank" className="text-link">
              Here's the link! <span className="arrow">→</span>
            </Link>
            <p className="breaking-news-quote"><i>Wry, twisty, laced with humor and well-executed.</i></p>
            <p className="breaking-news-quote">-- Gary Phillips, Anthony Award-winning author of <i>Ash Dark as Night</i></p>
          </div>
        </div>
      </section>
      <section id="home-books-container">
        <div id="home-books-list">
          <h2 id="home-books-header">Upcoming Releases</h2>
        </div>
        <div id="upcoming-release">
          <Image
            className="upcoming-release-cover"
            src="/books/coterie.webp"
            alt="Crimeucopia: A Coterie of Dicks"
            width={320}
            height={480}
          />
          <div id="upcoming-release-text">
            <h3>And the Skies Are Not Cloudy All Day</h3>
            <p>
              A <strong>Jefferson Dance</strong> short mystery, appearing in an
              upcoming <em>Crimeucopia</em> anthology,{" "}
              <em className="gold-accent">A Coterie of Dicks</em>.
            </p>
            <p className="release-details">
              Murderous Ink Press · March 10 release
            </p>
          </div>
        </div>
  <Link id="all-books" href="/books">
    View All Books
  </Link>
      </section>
      <section id="about">
        <Image
          src="/general/gerald-elias-statues.webp"
          id="about-image"
          alt="Gerald Elias"
          fill
          style={{ objectFit: "cover" }}
        />
        <div id="about-text">
          <span className="section-label light">About the Author</span>
          <h2 id="about-gerald">Gerald Elias</h2>
          <p id="about-description">
            Gerald Elias, an accomplished author, seamlessly blends his
            background in music with his passion for writing, creating
            captivating mystery and crime novels. Before becoming a writer,
            Elias was a renowned violinist, lending his lyrical and evocative
            talents to prestigious orchestras. His novels reflect his love for
            adventure and travel, drawing inspiration from his life's rich
            experiences.
          </p>
          <Link href="/biography" id="about-more">
            Read Full Biography
          </Link>
        </div>
        <div id="about-mobile">
          <Image
            id="about-mobile-img"
            src="/general/about-mobile.webp"
            alt="Gerald Elias"
            width={200}
            height={280}
          />
          <h2 id="about-gerald-mobile">About Gerald</h2>
          <p className="about-mobile-text">
            Gerald Elias, an accomplished author, seamlessly blends his
            background in music with his passion for writing, creating
            captivating mystery and crime novels. Before becoming a writer,
            Elias was a renowned violinist, lending his lyrical and evocative
            talents to prestigious orchestras.
          </p>
          <Link href="/biography" className="about-mobile-link">
            Read Full Biography
          </Link>
        </div>
      </section>
    </main>
  );
}
