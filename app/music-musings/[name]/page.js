import { postMetadata, postExists } from "@/util/mdx-posts";
import { ResolveScroll } from "@/util/resolveScroll";

async function getMdxContent(slug) {
  try {
    const mdxModule = await import(`@/markdown/music-posts/${slug}.mdx`);
    return mdxModule.default;
  } catch (error) {
    console.error(`Error loading MDX file: ${slug}`, error);
    return null;
  }
}

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

export default async function MusicMusingsByName({ params }){
    const { name } = await params;

    if (!name || !postExists(name)) {
      console.error(`Post not found: ${name}`);
      return <NotFound />;
    }

    const MdxContent = await getMdxContent(name);

    if (!MdxContent) {
      console.error(`Failed to load MDX file: ${name}.mdx`);
      return <NotFound />;
    }

    return (
      <>
        <ResolveScroll />
        <main className="blog-post has-comments-container">
          <section className="blog-content has-comments">
            <MdxContent />
          </section>
        </main>
      </>
    )
}