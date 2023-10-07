"use client"

import { useState } from "react"

// options are 3 in length, ending on an index of 2
export default function Dropdown({ options }){
    const [isHover, setIsHover] = useState(false)
    const optionsLength = options.length;

    return (
        <div className="dropdown" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <p className="">HOME</p>
            {!isHover ? null : 
                <div className="options-list">
                    {options.map((option, i) =>
                        <>
                            <a className="option">{option}</a>
                            {i === optionsLength - 1 ? null : <div className="option-br" />}
                        </>
                    )}
                </div>
            }  
        </div>
    )
}