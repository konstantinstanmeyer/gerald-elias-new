"use client"

export default function Hamburger(){
    const handleClick = (e) => {
        let nav = document.querySelector('#mobile-nav');
        nav.classList.toggle('active');
        document.body.style.overflow = "hidden";
    }

    return (
        <div id="hamburger-container">
            <a id="hamburger" className="nav-toggle" onClick={(e) => handleClick(e)} > 
                <span className="bar"></span> 
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
        </div>
    )
}