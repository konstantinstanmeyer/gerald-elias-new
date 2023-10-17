import Landing from "@/components/Landing"
import biography from "@/util/biography"

export default function Biography(){
    return (
        <div id="biography">
            <Landing imageUrl="/biography-landing.jpg" name='Biography' />
            <div id="bio-content">
                <h2>Short Bio</h2>
                <div id="short-bio">
                    <img src="/gerald-headshot.jpg" />
                    <h2 className="bio-mobile">Short Bio</h2>
                    {biography.shortBio.textBlocks.map((block) => 
                        <p>{block}</p>
                    )}
                </div>
                <h2>Long Bio</h2>
                <div id="long-bio">
                    <img src="/long-bio.jpeg" />
                    <h2 className="bio-mobile">Long Bio</h2>
                    {biography.longBio.textBlocks.map((block, i) => 
                        <>
                            {i === 4 ? <img src="/gerald-desert.jpg" /> : null}
                            <p>{block}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}