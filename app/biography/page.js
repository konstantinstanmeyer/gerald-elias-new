import Landing from "@/components/Landing"
import biography from "@/util/biography"

export default function Biography(){
    return (
        <div id="biography">
            <Landing imageUrl="/biography-landing.jpg" name='Biography' />
            <div id="bio-content">
                <h2>Short Bio</h2>
                <div id="short-bio">
                    <img src="/short-bio.png" />
                    {biography.shortBio.textBlocks.map((block) => 
                        <p>{block}</p>
                    )}
                </div>
                <h2>Long Bio</h2>
                <div id="long-bio">
                <img src="/long-bio.jpeg" />
                    {biography.longBio.textBlocks.map((block) => 
                        <p>{block}</p>
                    )}
                </div>
            </div>
        </div>
    )
}