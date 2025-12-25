import NotFound from "@/components/NotFound";

import posts from "@/util/posts";

export async function generateMetadata({ params, searchParams }){
    if(params?.name === "Tchaikovsky%20and%20the%20Future%20of%20Contemporary%20Music"){
        return {
            openGraph: {
              title: "Tchaikovsky and the Future of Contemporary Music",
              images: "/selfie.png",
            },
        }
    }
}

export default async function BlogByName({ params }){
    console.log("hello")
    let { name = undefined } = await params;
    name = name?.replaceAll("%2C", ",");
    const post = posts.blogsContent[decodeURI(name?.replace("%3A", ":"))];
    
    if(!post) return <NotFound />;

    return (
        <main className="blog-post" id="free-story">
            <Landing imageUrl='/open-book.jpg' />
            <section id="bonbons" className="blog-content">
                <MDX />
            </section>
        </main>
    )
}