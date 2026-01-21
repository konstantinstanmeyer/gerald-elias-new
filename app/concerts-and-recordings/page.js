import Landing from "@/components/Landing";
import concerts from "@/util/concerts";

export default function Performances(){
    return (
        <main id="concerts">
            <Landing name="Concerts & Recordings" imageUrl="/general/concerts-landing.webp" />
            <section id="concerts-content">
                <div id="play-video-container">
                    <p>Gerald Elias with Pamela Palmer-Jones and Noriko Kishi</p>
                    <iframe 
                    id="iframe"
                    src="https://www.youtube.com/embed/o2j3pmFFaaY" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                    title="Castrucci Op 1 Sonatas Trailer"
                    />
                    <p id="copyright">© Scribe Studios</p>
                </div>

                <div id="concerts-advert">
                    <p>
                        When my recording of the <span>12 Sonatas for violin, OP. 1</span>, by the{' '}
                        <span>Baroque Virtuoso Pietro Castrucci</span> was released in 2021-the first 
                        complete recording ever-it was the #1 best-selling new chamber music release on 
                        Amazon! It is also available for streaming on major listening platforms.
                    </p>
                    <p>
                        Read&nbsp;
                        <a 
                            target="_blank" 
                            rel="noopener noreferrer"
                            href="https://www.thestrad.com/reviews/gerald-elias-pietro-castrucci/15073.article"
                        >
                        this incredible review
                        </a>
                        &nbsp;from <span>The Strad!</span>
                    </p>
                </div>
                <h2>Orchestra Life</h2>
                {concerts.sections.orchestraLife.map((textBlock, i) => (
                    <p key={i} className="concerts-text">
                        {textBlock.text}
                    </p>
                ))}
                <h2>Solo</h2>
                {concerts.sections.solo.map((textBlock, i) => (
                <p 
                    key={i} 
                    className={`concerts-text ${textBlock.type === 'quote' ? 'italic' : ''}`}
                >
                    {textBlock.text}
                    {textBlock.type === 'quote' && (
                        <span> -{textBlock.author}</span>
                    )}
                </p>
                ))}
                <h2>Chamber Ensembles</h2>
                {concerts.sections.chamberEnsembles.map((textBlock, i) => (
                    <p 
                        key={i} 
                        className={`concerts-text ${textBlock.type === 'quote' ? 'italic' : ''}`}
                    >
                    {textBlock.text}
                    {textBlock.type === 'quote' && (
                        <span> -{textBlock.author}</span>
                    )}
                    </p>
                ))}
            </section>
        </main>
    )
}