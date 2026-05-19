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
              alt="The Strad — Back to Life article"
              width={500}
              height={350}
            />
          </div>
          <div id="breaking-news-text">
            <span className="section-label">Upcoming Releases</span>
            <div className="accent-line" />
            <div id="upcoming-release-text">
            <h3>
              A New Feature in{" "}
              <em className="gold-accent">Behold, A New Hero!</em>
            </h3>
            <p>
              First there was Hercule Poirot. Then came Sam Spade. Now, get ready for… Maury Gross.
            </p>
            <p>
              You heard right. Maury Gross, a retired, Jewish NYPD police chief: part cop, part philosopher, and if one is totally honest, part nebbish who could stand to lose a few pounds and who would like nothing better to do than lie on his couch in Queens with a nice sandwich and watch the Mets on TV.
            </p>
            <p>
              In <a href="https://whitecitypress.com/product/mov/WCP/49/" target="_blank" rel="">MURDER ON VACATION</a>, a collection of 16 delectable short crime stories, Maury&apos;s wife, Bobbi, takes (i.e. drags) the two of them to many of America&apos;s favorite holiday destinations, from headlands of the California coast to the headstones of Boston&apos;s historic burial grounds and all points in between. Unfortunately for Maury, his stellar reputation precedes him everywhere he tries to go for a little R&amp;R and, when a baffling heist or murder is committed, the local constabulary imposes upon him to solve it. Sometimes, for Maury, that means looking the other way when he has greater sympathy for the perp than the victim, but let&apos;s leave it at that for the moment.
            </p>
            <p>
              Like Nick and Nora Charles in Dashiell Hammett&apos;s classic The Thin Man series, Maury and Bobbi are a loveable and inseparable crime-solving team, providing plentiful laughs as they inevitably bring every ne&apos;er-do-well to justice.
            </p>
            <p>
              <strong><a className="black" id="breaking-accent-link" href="https://whitecitypress.com/product/mov/WCP/49/" target="_blank" rel="noopener noreferrer">MURDER ON VACATION, a perfect choice for your summer reading list, is now available for preorder from White City Press!</a></strong>
            </p>
            <p>
              Preorder from White City Press before May 19 and you&apos;ll receive the paperback for only $16. After the 19th it will be $18, still a lower price than at any retail outlet. Plus, White City Press provides FREE SHIPPING, ANYWHERE!
            </p>
            <p>
              If you preorder the ebook version for only $4.99, it will be delivered to the email address on the order.
            </p>
            <Link href="https://whitecitypress.com/product/mov/WCP/49/" target="_blank" className="text-link black">
              Here&apos;s the link! <span className="arrow">→</span>
            </Link>
            <p className="breaking-news-quote"><i>Wry, twisty, laced with humor and well-executed.</i></p>
            <p className="breaking-news-quote">-- Gary Phillips, Anthony Award-winning author of <i>Ash Dark as Night</i></p>
          </div>
          </div>
        </div>
      </section>
      {/* <section id="home-books-container">
        <div id="home-books-list">
          <h2 id="home-books-header">Upcoming Releases</h2>
        </div>
        <div id="upcoming-release">
          <Image
            className="upcoming-release-cover"
            src="/general/murder-on-vacation-breaking.webp"
            alt="Murder on Vacation"
            width={320}
            height={480}
          />
        </div>

        <Link id="all-books" href="/books">
          View All Books
        </Link>
      </section> */}
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
