import Dropdown from "./Dropdown"
import options from "@/util/options"
import Hamburger from "./Hamburger"

export default function Navbar(){
    const { writing, music, about } = options;

    return (
        <div id="navbar">
            <a href="/">
                <h3 id="gerald-elias">GERALD ELIAS</h3>
            </a>
            <Hamburger />
            <ul id="nav-links">
                <Dropdown name={'WRITING'} options={writing} />
                <Dropdown name={'MUSIC'} options={music} />
                <Dropdown name={'ABOUT'} options={about} />
                <a href="/media">MEDIA</a>
                <a href="/events">EVENTS</a>
                <a href="/posts">POSTS</a>
                <a href="/contact">CONTACT</a>
                {/* <a href="/admin">ADMIN</a> */}
            </ul>
        </div>
    )
}