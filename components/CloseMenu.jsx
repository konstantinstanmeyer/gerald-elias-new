"use client"

export default function CloseMenu(){

    const handleClick = (e) => {
        let nav = document.querySelector('#mobile-nav');
        nav.classList.toggle('active');

        document.body.style.overflow = "unset";
    }

    return (
        <p onClick={e => handleClick(e)}>+</p>
    )
}