"use client"

import { useState } from "react";

// coditional logic map:
// if (links.length === 1), return the name as an <a> tag wrapped with <q> tag, allowing for "display: inline" (on the parent <h3>) to be inherited on the quotations
// possible alternative: wrap <a> tag with <p> tag container quotations, change <a> to be "display: inline-block" on the parent
// if (links.length === 2), return the composition name as a <p> tag with its innerHTML including the quotations, then display hyperlinks in "(part 1, part 2)" format
// if (linnks.length === 0), return <p> tag containing quotes around name, no hyperlinks
// ALL CASES: return "space" HTML entity(&nbsp;) after name, before <span>{keywords}</span> to avoid line-break depending on <h3>s' "margin: ...", avoiding rivers between text at line-start

export default function CompositionCard({ composition }){
    // const { name, keywords, details, links, quotes, description } = composition;
    // const [open, setOpen] = useState(false);
    // const isLegend = name === "The Legend of William Grandstaff";

    return (
        <div className="composition-card">
            {/* <h3>
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
            } */}
            <h1 className="composition-header">Original Compositions and Transcriptions by Gerald Elias</h1>
            <h5>Parts, recordings, and reviews available upon request</h5>
            <div className="composition-divider" />
            <h3>Concerto Cadenzas</h3>
            <p>Brahms</p>
            <p>Mozart No. 3 in G Major</p>
            <p className="section-bottom">Mozart No. 5 in A Major</p>
            <h3>Transcriptions for Violin and Piano</h3>
            <p>Bartok, &quot;Intermezzo Interrotto&quot; from Concerto for Orchestra</p>
            <p>Bazzini, &quot;Second Round of the Goblins&quot; (a parody for 4 violins)</p>
            <p>Faure, &quot;Pavane&quot;</p>
            <p>Gottschalk, &quot;Pasquinade&quot; (also arranged for 8 flutes and orchestra)</p>
            <p>Kodaly, &quot;Intermezzo&quot; from the Hary Janos Suite</p>
            <p>Mozart, &quot;Papageno&#39;s Aria&quot;</p>
            <p>Rossini, &quot;Ai Caprici,&quot; from L&#39;Italiana in Algeri</p>
            <p>Schubert, &quot;Death and the Maiden&quot; (violin solo)</p>
            <p>Sir Arthur Sullivan, &quot;The Moon &amp; I&quot; from the Mikado</p>
            <p>Traditional, &quot;El Condor Pasa&quot; (violin solo)</p>
            <p className="section-bottom">William Walton, &quot;Touch Her Soft Lips and Part,&quot; from the film Henry V.</p>

            <h3>Chamber Music</h3>
            <p>String Quartet No. 1: &quot;When Mr. Mozart Went to the Ball.&quot; Variations (a la Young Persons Guide to the Orchestra by Benjamin Britten) on Mozart&#39;s Violin Sonata in G</p>
            <p>Major, K.379, for string quartet and narrators</p>
            <p>String Quartet No. 2</p>
            <p>&quot;Mack the Knife&quot; Fantasy for String Quartet</p>
            <p>&quot;V&#39;adoro&quot; Variations for Violin Solo and tape (Handel&#39;s &quot;V&#39;adoro Pupille)</p>
            <p>&quot;William Grandstaff,&quot; Operatic Scene for 3 voices, violin, flute, and piano</p>
            <p>&quot;The Legend of William Grandstaff&quot; for baritone, string bass and piano</p>
            <p>&quot;Conversations with Essie&quot; for female narrator and chamber ensemble</p>
            <p className="section-bottom">&quot;Piccolino&#39;s Sarabanda&quot; for solo violin</p>
            <h3>Orchestra</h3>
            <p>Transcription of the Aaron Copland Sonata for violin and orchestra. [Pub. Boosey &amp; Hawkes]</p>
            <p>“The Raven,” Monodrama for Baritone and Orchestra (also a chamber music version for voice, viola, and piano), based upon the poem by Edgar Allan Poe</p>
            <p>Concerto Grosso for Violin and Chamber Orchestra (also for violin and piano)</p>
            <p className="section-bottom">"Dear Great Salt Lake," for narrator, violin, flute, and cimbalom. (Co-composed with Igor Iachimciuc, poem by Raisa Tolchinsky)</p>

            <h3>Overture in the Classical Style</h3>
            <p>Transcription of &quot;Devil&#39;s Trill&quot; Sonata for string orchestra</p>
            <p>Transcription of the Andante from Bach&#39;s Violin Sonata in A Minor for string orchestra (can be used as a 2nd mvt. in the 3rd Brandenburg Concerto)</p>
        </div>
    )
}