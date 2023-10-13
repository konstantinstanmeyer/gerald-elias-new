"use client"

export default function CloseMenu(){

    const handleClick = (e) => {
        let nav = document.querySelector('#mobile-nav');
        nav.classList.toggle('active');
    }

    return (
        <p onClick={e => handleClick(e)}>+</p>
    )
}