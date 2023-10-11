import Landing from "@/components/Landing";
import blogs from "@/util/blogs";

export default function Blog(){
    return(
        <div id="blog">
            <Landing name="Blog" imageUrl="/blog-landing.jpg"/>
            <div id="blog-content">
                {blogs.index["2023"].map((value, i) => 
                    <div>
                        <h2>{2023}</h2>
                        <span>-<a href={"/blog/" + value}>{value}</a></span>
                    </div>
                )}
            </div>
        </div>
    )
}