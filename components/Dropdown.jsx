"use client"

import { useState } from "react"

// options are 3 in length, ending on an index of 2
export default function Dropdown({ options, name }){
    const [isHover, setIsHover] = useState(false)
    const optionsLength = options.length;

    return (
        <div className="dropdown">
            <div className="dropdown-hitbox" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} />
            <p className="">{name}</p>
            {!isHover ? null : 
                <div className="options-list" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                    {options.map((option, i) =>
                        <>
                            <a href={option.url} target={option?.externalLink ? "_blank" : null} className="option">{option.name}</a>
                            {i === optionsLength - 1 ? null : <div className="option-br" />}
                        </>
                    )}
                </div>
            }  
        </div>
    )
}