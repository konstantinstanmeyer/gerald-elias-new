import Landing from "@/components/Landing";
import Link from "next/link";

const POSTS_BY_YEAR = [
    {
      year: 2025,
      posts: [
        {
          href: "/posts/scam-ai-or-am-i-paranoid",
          title: "Scam, AI, or Am I Paranoid",
        },
      ],
    },
    {
      year: 2024,
      posts: [
        { href: "/posts/the-most-kindest-cut-of-all", title: "The Most Kindest Cut of All" },
        { href: "/posts/tchaikovsky-and-the-future-of-contemporary-music", title: "Tchaikovsky and the Future of Contemporary Music" },
        { href: "/posts/lacrymosa-and-the-triumph-of-constanze-mozart", title: "Lacrymosa, and the Triumph of Constanze Mozart" },
        { href: "/posts/a-strange-and-wonderful-concert", title: "A Strange and Wonderful Concert" },
      ],
    },
    {
      year: 2023,
      posts: [
        { href: "/posts/youre-not-bad-for-a-democrat", title: "You're not bad, for a Democrat" },
        { href: "/posts/turkey-in-the-saw-short-story-contest", title: `"TURKEY IN THE SAW" SHORT STORY CONTEST` },
        { href: "/posts/wanna-be-a-crime-writer", title: "Wanna Be a Crime Writer? (ENDED)" },
        {
          href: "https://shepherd.com/bboy/2023/f/gerald-elias",
          title: "Gerald Elias's Three Favorite Reads of 2023",
          external: true,
        },
        { href: "/posts/the-day-after-memorial-day", title: "The Day After Memorial Day" },
        { href: "/posts/the-burden-of-the-blacklist", title: "The Burden of the Backlist" },
      ],
    },
    {
      year: 2022,
      posts: [
        { href: "/posts/buried-treasure", title: "Buried Treasure" },
        { href: "/posts/passed-ball-mlb-rip", title: "Passed Ball: MLB RIP" },
      ],
    },
  ];

export default function Blog(){
    const hyperlinkName = "Gerald Elias's Three Favorite Reads of 2023";
    const hyperlinkUrl = "https://shepherd.com/bboy/2023/f/gerald-elias"

    return(
        <main id="posts">
            <Landing name="Posts" imageUrl="/general/blog-landing.webp" />
            <section id="posts-container">
                <div id="posts-content">
                {POSTS_BY_YEAR.map(({ year, posts }) => (
                    <section key={year} aria-labelledby={`posts-${year}`}>
                        <h2 id={`posts-${year}`}>{year}</h2>
                        <ul>
                            {posts.map(({ href, title, external }) => (
                            <li key={href}>
                                <Link
                                  href={href}
                                  {...(external && {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                  })}
                                >
                                  {title}
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </section>
                ))}
                </div>
            </section>
        </main>
    )
}

<p>-&nbsp;<Link href="/posts/"></Link></p>