import CommentsSection from "@/components/Comments";
import NotFound from "@/components/NotFound";
import { postMetadata, postExists } from "@/util/mdx-posts";

async function getMdxContent(slug) {
  try {
    const mdxModule = await import(`@/markdown/blog-posts/${slug}.mdx`);
    return mdxModule.default;
  } catch (error) {
    console.error(`Error loading MDX file: ${slug}`, error);
    return null;
  }
}

// async function getComments(postName) {
//     const comments = await fetch(`../api/comments`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ postName }),
//     });
//     return await comments.json();
// }

export async function generateMetadata({ params }) {
  const { name } = await params;
  
  if (!name || !postExists(name)) return;
  
  const metadata = postMetadata[name];
  
  return {
    title: metadata.title,
    description: metadata.description || `Read ${metadata.title} by Gerald Elias`,
    openGraph: {
      title: metadata.title,
      description: metadata.description || `Read ${metadata.title} by Gerald Elias`,
      images: metadata.image ? [metadata.image] : ['/open-book.jpg'],
      type: 'article',
      publishedTime: metadata.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description || `Read ${metadata.title} by Gerald Elias`,
      images: metadata.image ? [metadata.image] : ['/open-book.jpg'],
    },
  };
}

// Main page component
export default async function BlogByName({ params }) {
    const { name } = await params;
    
    if (!name || !postExists(name)) {
        console.error(`Post not found: ${name}`);
        return <NotFound />;
    }
    
    // Load the MDX content
    const MdxContent = await getMdxContent(name);
    // const comments = await getComments(name);
    
    if (!MdxContent) {
        console.error(`Failed to load MDX file: ${name}.mdx`);
        return <NotFound />;
    }

    return (
        <main className="blog-post">
            <section className="blog-content has-comments">
                <MdxContent />
            </section>
              <CommentsSection postName={name} />
              {/* {comments.map((comment) => (
                  <div key={"comment" + comment._id} className="comment">
                      <Image height={50} width={50} src={comment.user.profileImage} alt={comment.user.name} />
                      <h4>{comment.user.name}</h4>
                      <p>{comment.content.text}</p>
                  </div>
              ))} */}
        </main>
    )

}

// export default async function BlogByName({ params }){
//     console.log("hello")
//     let { name = undefined } = await params;
//     name = name?.replaceAll("%2C", ",");
//     const post = posts.blogsContent[decodeURI(name?.replace("%3A", ":"))];
    
//     if(!post) return <NotFound />;
// }