import NotFound from "@/components/NotFound";
import blogs from "@/util/blogs";

export default function BlogByName({ params }){
    const { name = undefined } = params;
    const blog = blogs.blogsContent[decodeURI(name?.replace("%3A", ":"))];

    if(!blog) return <NotFound />;
    // console.log(blog)

    return (
        <div id="blog-post">
            <h2>{blog.name}</h2>
            <h4>{blog.date}</h4>
            {blog.textBlocks.map((block, i) => 
                <p id={"123" + i}>{block}</p>
            )}
        </div>
    )
}