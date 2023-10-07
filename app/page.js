import Image from 'next/image'


export default function Home() {
  return (
    <>
      <div className="landing">
        <img src="/gerald-elias-hat.jpg" className="landing-profile" />
        <div className="landing-text">
          <div className="landing-header">
            <h2 className="gerald-elias-name">GERALD ELIAS</h2>
            <p className="landing-occupation">AUTHOR & MUSICIAN</p>
          </div>
          <div className="quotes-list">
            <p className="quote">
              <img className="quotation-mark" src="/quotation-mark.png" />
              Gerald Elias is a maestro of mystery." <span>– Gabriel Valjan, author of the Shane Cleary Mystery series</span>
            </p>
            <p className="quote">
              <img className="quotation-mark" src="/quotation-mark.png" />
              Music lovers' favorite curmudgeon is back." <span>– bestselling author Paul Adam on <span>Murder at the Royal Albert</span></span>
            </p>
          </div>
          <a className="about-link">ABOUT ME</a>
          <div />
        </div>
      </div>
      <div className="featured">
        <img src="/murder-at-the-royal-albert-audiobook.jpeg" className="featured-image" />
        <div className="featured-text">
          <h4 className="featured-header">MURDER AT THE ROYAL ALBERT: A DANIEL JACOBUS MYSTERY, WRITTEN BY MYSELF</h4>
          <p className="">Experience the thrill of live performances woven into the tale, as you unravel a symphony of secrets in the English countryside.</p>
        </div>
      </div>
      <div className="about">
        <div className="about-text">
            <h2 className="about-header">About Gerald</h2>
            <div className="about-line" />
            <p className="about-description">
                Gerald Elias, an accomplished author, seamlessly blends his background in music with his passion for writing, creating captivating mystery and crime novels. Before becoming a writer, Elias was a renowned violinist, lending his lyrical and evocative talents to prestigious orchestras. His novels reflect his love for adventure and travel, drawing inspiration from his life's rich experiences. Join us on a literary journey through the works of an author whose past is as diverse and captivating as the stories he crafts, where music and mystery intertwine to transport readers into thrilling realms of suspense and intrigue.
            </p>
        </div>
        <img className="about-image" src="/gerald-elias-portrait.jpeg"/>
      </div>
      <div className="home-books-container">
        <h2 className="home-books-header">Books by Gerald Elias</h2>
        <div className="home-books-list">
          <a href="/books/roundtree-days" className="home-book">
              <img src="/roundtree-days.jpg" />
          </a>
          <a href="/books/its-a-crime" className="home-book">
              <img src="/book-its-a-crime.jpg" />
          </a>
          <a href="/books/murder-at-the-royal-albert" className="home-book">
              <img src="/book-murder-at-the-royal-albert.jpg" />
          </a>
          <a href="/books/cloudy-with-a-chance-of-murder" className="home-book">
              <img src="/book-cloudy-with-a-chance-of-murder.jpg" />
          </a>
          <a href="/books" className="home-book">
              <p href="/books">All Books</p>
          </a>
        </div>
      </div>
    </>
  )
}
