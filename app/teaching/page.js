import Landing from "@/components/Landing"
import textArr from "@/util/teaching"

export default function Teaching(){
    return (
        <div id="teaching">
            <Landing name="Teaching" imageUrl="/teaching.jpg" />
            <div id="teaching-content">
                {textArr.map((string, i) => 
                    <>
                        <p key={"t"+i}>{string}</p>
                        {i===0 ? <img id="teaching-image" src="/teaching-profile.jpg" /> : null}
                    </>
                )}
            </div>
        </div>
    )
}