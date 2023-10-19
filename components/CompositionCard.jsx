"use client"

import { useState } from "react";

// coditional logic map:
// if (links.length === 1), return the name as an <a> tag wrapped with <q> tag, allowing for "display: inline" (on the parent <h3>) to be inherited on the quotations
// possible alternative: wrap <a> tag with <p> tag container quotations, change <a> to be "display: inline-block" on the parent
// if (links.length === 2), return the composition name as a <p> tag with its innerHTML including the quotations, then display hyperlinks in "(part 1, part 2)" format
// if (linnks.length === 0), return <p> tag containing quotes around name, no hyperlinks
// ALL CASES: return "space" HTML entity(&nbsp;) after name, before <span>{keywords}</span> to avoid line-break depending on <h3>s' "margin: ...", avoiding rivers between text at line-start

export default function CompositionCard({ composition }){
    const { name, keywords, details, links, quotes, description } = composition;
    const [open, setOpen] = useState(false);
    const isLegend = name === "The Legend of William Grandstaff";

    return (
        <div className="composition-card">
            <h3>
                {links.length === 1 ? <q><a target="_blank" href={links[0]}>{name}</a></q>
                : links.length === 2 ? <>{`"${name}"`}&nbsp;{`(`}<a href={links[0]}>part 1</a>,&nbsp;<a href={links[1]}>part 2</a>{`)`}&nbsp;&nbsp;</>
                : <>"{name}"&nbsp;&nbsp;</>}
                {keywords ? <span>{keywords}</span> : null}
            </h3>
            {details.length > 0 ? details.map((detail, i) => 
                <h4 key={`rand` + i}>{detail}</h4>
            ): null}
            {open ?
            <>
                <div className="quotes-wrapper">
                    {quotes.length > 0 ? quotes.map((quote, i) =>
                        <p key={`com` + i} className="composition-quote">{quote.description}<span>&nbsp;{quote.author}</span></p>
                    )
                    : null}
                </div>
                {name === "The Legend of William Grandstaff" ? 
                    <>
                        {description.map((text, i) => 
                            <p key={"leg" + i} className="composition-description">{text}</p>
                        )}
                    </>
                :
                    <p className="composition-description">{description}</p>
                }
                <p onClick={() => setOpen(false)} className="read-more">show less</p>
            </>
            : <p onClick={() => setOpen(true)} className="read-more">more info</p>
            }
        </div>
    )
}