"use client"

import { useState } from "react"

// options are 3 in length, ending on an index of 2
export default function Dropdown({ name, options }){
    const [isHover, setIsHover] = useState(false)

    const option = {
        externalLink: false,
    }

    return (
        // <div className="dropdown">
        //     <div className="dropdown-hitbox" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} />
        //     <p className=""></p>
        //     {!isHover ? null : 
        //         <div className="options-list" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        //             <a href={option.url} target={option?.externalLink ? "_blank" : null} className="option">{option.name}</a>
        //             {i === optionsLength - 1 ? null : <div className="option-br" />}
        //         </div>
        //     }  
        // </div>
        <p id="nav-music" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            {name}
            {!isHover ? null : 
                <div id="dropdown-options">
                    {options.map((option) => 
                       <a href={option.url} target={option?.externalLink ? "_blank" : null} className="option">{option.name}</a>
                    )}
                </div>
            } 
        </p>
    )
}