import Landing from "@/components/Landing";
import posts from "@/util/posts";

export default function Blog(){
    const hyperlinkName = "Gerald Elias's Three Favorite Reads of 2023";
    const hyperlinkUrl = "https://shepherd.com/bboy/2023/f/gerald-elias"

    return(
        <div id="blog">
            <Landing name="Posts" imageUrl="/blog-landing.jpg"/>
            <div id="blog-content">
                <h2>{2023}</h2>
                {posts.index["2023"].map((value, i) => 
                    <div>
                        <span>-<a target={value === hyperlinkName ? "_blank" : null} href={value !== hyperlinkName ? "/posts/" + value : hyperlinkUrl}>{value}</a></span>
                    </div>
                )}
                <h2>{2022}</h2>
                {posts.index["2022"].map((value, i) => 
                    <div>
                        <span>-<a href={"/posts/" + value}>{value}</a></span>
                    </div>
                )}
            </div>
        </div>
    )
}