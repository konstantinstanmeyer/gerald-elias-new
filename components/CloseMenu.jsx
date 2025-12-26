"use client"

export default function CloseMenu(){
    const handleClick = (e) => {
        let nav = document.querySelector('#mobile-nav');
        nav.classList.toggle('active');

        document.body.style.overflow = "unset";
    }

    return (
        <div id="close-menu" onClick={e => handleClick(e)}>
            <p>+</p>
        </div>
    )
}