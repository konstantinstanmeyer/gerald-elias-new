import Dropdown from "./Dropdown"
import options from "@/util/options"
import Hamburger from "./Hamburger"

export default function Navbar(){



    return (
        <div id="navbar">
            <a href="/">
                <h3 id="gerald-elias">GERALD ELIAS</h3>
            </a>
            <Hamburger />
            <ul id="nav-links">
                <a href="/books">BOOKS</a>
                <Dropdown name={'MUSIC'} options={options[0]} />
                <Dropdown name={'ABOUT'} options={options[1]} />
                <a href="/events">EVENTS</a>
                <a href="/blog">BLOG</a>
                <a href="/contact">CONTACT</a>
                {/* <a href="/admin">ADMIN</a> */}
            </ul>
        </div>
    )
}