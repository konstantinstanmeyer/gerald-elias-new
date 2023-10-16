import Landing from "@/components/Landing";
import concerts from "@/util/concerts";

export default function Performances(){
    return (
        <div id="concerts">
            <Landing name="Concerts & Recording" imageUrl="/concerts-landing.jpeg" />
            <div id="concerts-content">
                <div id="play-video-container">
                    <p>Gerald Elias with Gus Denhard</p>
                    <iframe id="iframe" src="https://www.youtube.com/embed/ojnk-eVvevU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Embedded youtube" showinfo="0" controls="0" autohide="1"/>
                    <p id="copyright">© Scribe Studios</p>
                </div>
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
                <h2>Chamber Ensembles</h2>
                {concerts.sections.chamberEnsembles.map((textBlock, i) => 
                    <p className={`${textBlock.type === 'quote' ? "italic" : ""} concerts-text`}>{textBlock.text}{textBlock.type === 'quote' ? <span>{" -" + textBlock.author}</span> : ""}</p>
                )}
            </div>
        </div>
    )
}