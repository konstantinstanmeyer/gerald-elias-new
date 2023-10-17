export default function CompositionCard({ composition }){
    const { name, keywords, details, links, quotes, description } = composition;

    return (
        <div className="composition-card">
            <h3>
                {links.length === 1 ? <>"<a target="_blank" href={links[0]}>{name}</a>"</>
                : links.length === 2 ? <>"{name}"&nbsp;{`(`}<a href={links[0]}>part 1</a>,&nbsp;<a href={links[1]}>part 2</a>{`)`}</>
                : `"${name}"`}{keywords ? <span>&nbsp;&nbsp;{keywords}</span> : null}
            </h3>
            {details.length > 0 ? details.map((detail, i) => 
                <h4 key={`rand` + i}>{detail}</h4>
            ): null}
            <div className="quotes-wrapper">
                {quotes.length > 0 ? quotes.map((quote, i) =>
                    <p key={`com` + i} className="composition-quote">{quote.description}<span>&nbsp;{quote.author}</span></p>
                )
                : null}
            </div>
            <p className="composition-description">{description}</p>
        </div>
    )
}