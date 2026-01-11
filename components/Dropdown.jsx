"use client"

import Link from "next/link";
import { useState } from "react"

// options are 3 in length, ending on an index of 2
export default function Dropdown({ name, options }){
    const [isHover, setIsHover] = useState(false);

    return (
        <div id="nav-music" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <p>{name}</p>
            {!isHover ? null : 
                <div id="dropdown-options">
                    {options.map((option, i) => 
                       <Link key={"drop" + i} href={option.url} target={option?.externalLink ? "_blank" : null} className="option">{option.name}</Link>
                    )}
                </div>
            } 
        </div>
    )
}