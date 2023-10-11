import Landing from "@/components/Landing";
import concerts from "@/util/concerts";

export default function Performances(){
    return (
        <div id="concerts">
            <Landing name="Concerts & Recording" imageUrl="/concerts-landing.jpeg" />
            <div id="concerts-content">
                <div id="concerts-ad">
                    <img src="/concerts-promo.jpeg" />
                    <p>News flash! When my recording of the <span>12 Sonatas for violin, OP. 1</span>, by the Baroque Virtuoso Pietro Castrucci-the first complete recording ever-it was the #1 best-selling new chamber music release on Amazon! It is also available for streaming and download on major listening platforms <a target="_blank" href="https://www.amazon.com/dp/B09T77XL2D">here</a>.</p>
                </div>
                <h2>Orchestra Life</h2>
                <p>{concerts.sections.orchestraLife[0].text}</p>
                <h2>Solo</h2>
                {concerts.sections.solo.map((textBlock, i) => 
                    <p className={`${textBlock.type === 'quote' ? "italic" : ""} concerts-text`}>{textBlock.text}{textBlock.type === 'quote' ? <span>{" -" + textBlock.author}</span> : ""}</p>
                )}
            </div>
        </div>
    )
}