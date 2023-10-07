import Dropdown from "./Dropdown"
import options from "@/util/options"

export default function Navbar(){

    return (
        <div className="navbar">
            <h3 className={`gerald-elias`}>Gerald Elias</h3>
            <nav className="nav-menu">
                <Dropdown options={options[0]} />
                <a href="/books">BOOKS AND MORE</a>
                <a href="">MUSIC</a>
                <a href="/blog">BLOG</a>
                <a>ABOUT</a>
                <a href="/events">EVENTS</a>
                <a href="/contact">CONTACT</a>
            </nav>
            <div className="divider"/>
        </div>
    )
}