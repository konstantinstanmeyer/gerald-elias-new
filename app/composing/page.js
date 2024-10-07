import Landing from "@/components/Landing";
import CompositionCard from "@/components/CompositionCard";
import compositions from "@/util/compositions";


export default function Composing(){
    return (
        <div id="composing">
            <Landing name="Composing" imageUrl="composing.jpeg" />
            <div id="composing-content">
                {/* {compositions.originalCompositions.map((comp, i) =>  */}
                    <CompositionCard />
                {/* )} */}
            </div>
        </div>
    )
}