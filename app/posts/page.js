import Landing from "@/components/Landing";
import Link from "next/link";

export default function Blog(){
    const hyperlinkName = "Gerald Elias's Three Favorite Reads of 2023";
    const hyperlinkUrl = "https://shepherd.com/bboy/2023/f/gerald-elias"

    return(
        <main id="posts">
            <Landing name="Posts" imageUrl="/blog-landing.jpg"/>
            <section id="posts-container">
                <div id="posts-content">
                    <h2>2025</h2>
                    <p>-&nbsp;<Link href="/posts/scam-ai-or-am-i-paranoid">Scam, AI, or Am I Paranoid</Link></p>
                    <h2>2024</h2>
                    <p>-&nbsp;<Link href="/posts/the-most-kindest-cut-of-all">The Most Kindest Cut of All</Link></p>
                    <p>-&nbsp;<Link href="/posts/tchaikovsky-and-the-future-of-contemporary-music">Tchaikovsky and the Future of Contemporary Music</Link></p>
                    <p>-&nbsp;<Link href="/posts/lacrymosa-and-the-triumph-of-constanze-mozart">Lacrymosa, and the Triumph of Constanze Mozart</Link></p>
                    <p>-&nbsp;<Link href="/posts/a-strange-and-wonderful-concert">A Strange and Wonderful Concert</Link></p>
                    <h2>2023</h2>
                    <h2>2022</h2>
                </div>
            </section>
        </main>
    )
}