import CloseMenu from "./CloseMenu"
import Hamburger from "./Hamburger"

export default function MobileNav(){
    return (
        <div id="mobile-nav">
            <div id="mobile-nav-header">
                <a href="/">
                    <h3 id="mobile-gerald-elias">GERALD ELIAS</h3>
                </a>
                <Hamburger />
                <CloseMenu />
            </div>
            <div id="mobile-nav-links">
                <a href="/books">BOOKS</a>
                <div className="mobile-options">
                    <h3>MUSIC</h3>
                    <a href="/concerts-and-recordings">Concerts & Recordings</a>
                    <a href="/conducting">Conducting</a>
                    <a href="/composing">Composing</a>
                    <a href="/teaching">Teaching</a>
                </div>
                <div className="mobile-options">
                    <h3>ABOUT</h3>
                    <a href="/biography">Biography</a>
                    <a target="_blank" href="https://www.goodreads.com/goodreadscomauthorgeraldelias">Goodreads</a>
                </div>
                <a href="/events">EVENTS</a>
                <a href="/blog">BLOG</a>
                <a href="/contact">CONTACT</a>
            </div>
        </div>
    )
}