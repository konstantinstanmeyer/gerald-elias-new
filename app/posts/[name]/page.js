import NotFound from "@/components/NotFound";
import posts from "@/util/posts";

export default function BlogByName({ params }){
    const { name = undefined } = params;
    const post = posts.blogsContent[decodeURI(name?.replace("%3A", ":"))];

    if(!post) return <NotFound />;
    // console.log(post)

    return (
        <div id="blog-post">
            <h2>{post.name}</h2>
            <h4>{post.date}</h4>
            {post.textBlocks.map((block, i) => 
                <p id={"123" + i}>{block}</p>
            )}
        </div>
    )
}