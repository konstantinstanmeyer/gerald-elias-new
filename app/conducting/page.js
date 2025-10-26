import Landing from "../../components/Landing";
import conducting from "../../util/conducting";

export default function Conducting(){
    return (
        <div id="conducting">
            <Landing name="Conducting" imageUrl="conducting-landing.jpg" />
            <div id="conducting-content">
                {conducting.textBlocks.map((block, i) => 
                    <p key={'300' + i}>{block}</p>
                )}
                {conducting.quotes.map((quote, i) =>
                    <p key={'200' + i} className="conducting-quotes">{quote.content}&nbsp;<span>-{quote.author}</span></p>  
                )}
            </div>
        </div>
    )
}