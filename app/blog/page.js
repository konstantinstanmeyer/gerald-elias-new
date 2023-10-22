import Landing from "@/components/Landing";
import blogs from "@/util/blogs";

export default function Blog(){
    return(
        <div id="blog">
            <Landing name="Blog" imageUrl="/blog-landing.jpg"/>
            <div id="blog-content">
                <h2>{2023}</h2>
                {blogs.index["2023"].map((value, i) => 
                    <div>
                        <span>-<a href={"/blog/" + value}>{value}</a></span>
                    </div>
                )}
            </div>
        </div>
    )
}