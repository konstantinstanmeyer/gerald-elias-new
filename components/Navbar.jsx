export default function Navbar(){
    return (
        <div className="navbar">
            <h3 className={`gerald-elias`}>Gerald Elias</h3>
            <nav className="nav-menu">
                <a href="/">HOME</a>
                <a href="/books">BOOKS AND MORE<span className="down-carrot">▼</span></a>
                <a href="">MUSIC<span className="down-carrot">▼</span></a>
                <a href="/blog">BLOG</a>
                <a >ABOUT<span className="down-carrot">▼</span></a>
                <a href="/events">EVENTS</a>
                <a href="/contact">CONTACT</a>
            </nav>
            <div className="divider"/>
        </div>
    )
}