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
            {/* <a
              href="https://jacobeliasdotart.wordpress.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Learn More
            </a> */}
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
              src="/general/publishers-marketplace.webp"
              alt="Publishers Marketplace announcement"
              width={500}
              height={350}
            />
          </div>
          <div id="breaking-news-text">
            <span className="section-label">Breaking News</span>
            <h2>
              A New Four-Book Deal with{" "}
              <em className="gold-accent">White City Press</em>
            </h2>
            <div className="accent-line" />
            <p>
              {/* Gerald Elias and White City Press have announced an exciting new
              partnership. Keep your eyes out for{" "}
              <strong>NYPD Chief Maury Gross</strong> and Western lawman{" "}
              <strong>Jefferson Dance</strong> in 2026. */}
              Gerald Elias and White City Press have announced an exciting new partnership. 
              Keep your eyes out in 2026 for two short crime fiction collections, <i>Murder on Vacation</i> and <i>Murder Goes Abroad</i>, featuring the likeable, retired <strong>NYPD Police Chief Maury Gross</strong>; 
              a new edition of <i>Roundtree Days</i> featuring Western hero, <strong>Jefferson Dance</strong>, and an as-yet-unnamed sequel. Propose a title and I'll consider it!
            </p>
            <Link href="/books" className="text-link">
              Explore All Books <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section id="home-books-container">
        <div id="home-books-list">
          <h2 id="home-books-header">Featured Titles</h2>
          <Link className="home-book" href="/books/murder-at-the-royal-albert">
            <Image
              src="/books/murder-at-the-royal-albert.webp"
              alt="Murder at the Royal Albert"
              width={220}
              height={350}
            />
          </Link>
          <Link className="home-book" href="/books/symphonies-&-scorpions">
            <Image
              src="/books/symphonies-and-scorpions.webp"
              alt="Symphonies and Scorpions"
              width={220}
              height={350}
            />
          </Link>
          <Link className="home-book" href="/books/roundtree-days">
            <Image
              src="/books/roundtree-days.webp"
              alt="Roundtree Days"
              width={220}
              height={350}
            />
          </Link>
          <Link
            className="home-book"
            href="/books/audiobooks/murder-at-the-royal-albert"
            style={{display: "flex", justifyContent: "center", height: "320px", width: "320px"}}
            id="home-audiobook"
          >
            <Image
              src="/books/audiobook-murder-at-the-royal-albert.webp"
              alt="Murder at the Royal Albert Audiobook"
              width={220}
              height={220}
            />
          </Link>
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
