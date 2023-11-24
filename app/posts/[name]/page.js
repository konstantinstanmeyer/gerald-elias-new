import NotFound from "@/components/NotFound";
import posts from "@/util/posts";

export default function BlogByName({ params }){
    const { name = undefined } = params;
    const post = posts.blogsContent[decodeURI(name?.replace("%3A", ":"))];

    if(!post) return <NotFound />;
    // console.log(post)

    return (
        <div className={post?.image ? "thanksgiving-font" : ""} id="blog-post">
            {post?.image ? <div id="blog-post-image-container"><img id="blog-post-image" src={post.image} /></div>  : null}
            <h2>{post.name}</h2>
            <h4>{post.date}</h4>
            {post.textBlocks.map((block, i) =>
                <>
                    <p id={"123" + i}>{block}</p>
                    {post?.image && i===4 ? <a id="thanksgiving-hyperlink" target="_blank" href="https://www.mysteriesandmusic.com/books">{post.textHyperlink}</a>:null}
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