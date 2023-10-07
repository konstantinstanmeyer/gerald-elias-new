import Dropdown from "./Dropdown"
import options from "@/util/options"

export default function Navbar(){

    return (
        <div className="navbar">
            <a href="/">
                <h3 className={`gerald-elias`}>Gerald Elias</h3>
            </a>
            <nav className="nav-menu">
                <Dropdown name={'BOOKS & MORE'} options={options[0]} />
                <Dropdown name={'MUSIC'} options={options[1]} />
                <a href="/blog">BLOG</a>
                <Dropdown name={'ABOUT'} options={options[2]} />
                <a href="/events">EVENTS</a>
                <a href="/contact">CONTACT</a>
            </nav>
            <div className="divider"/>
        </div>
    )
}