import NewPost from "@/components/NewPost";
import NotFound from "@/components/NotFound";
import posts from "@/util/posts";

export default function BlogByName({ params }){
    let { name = undefined } = params;
    name = name?.replace("%2C", ",")
    const post = posts.blogsContent[decodeURI(name?.replace("%3A", ":"))];
    // console.log(name);

    if (name === "A%20Strange%20and%20Wonderful%20Concert") return <div className={post?.image ? "thanksgiving-font" : ""} id="blog-post"><NewPost /></div>;
    
    if(!post) return <NotFound />;

    return (
        <div className={post?.image ? "thanksgiving-font" : ""} id="blog-post">
            {post?.image ? <div id="blog-post-image-container"><img id="blog-post-image" src={post.image} /></div>  : null}
            <h2>{post.name}</h2>
            <h4>{post.date}</h4>
            {post?.textBlocks?.map((block, i) =>
                <>
                    <p id={"123" + i}>{block}</p>
                    {post?.image && i===4 ? <a style={{marginBottom: "2rem"}} id="thanksgiving-hyperlink" target="_blank" href="https://www.mysteriesandmusic.com/books">{post.textHyperlink}</a>:null}
                </>
            )}
            {post?.advert ? 
            <div id="post-advert">
                <p>{post.advert.text1}</p>
                <a href={post.advert.hyperlink}>{post.advert.hyperlinkText}</a>
                <p>{post.advert.text2}</p>
                <img src={post.advert.image} />
            </div> : null
            }
        </div>
    )
}