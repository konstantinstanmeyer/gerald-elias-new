import Landing from "@/components/Landing"
import Link from "next/link"

const POSTS = [
    {
      href: "/music-musings/a-case-for-quality",
      title: "A Case for Quality"
    }
]

export default function MusicMusings(){
    return (
        <main id="music-musings">
            <Landing name="Music Musings" imageUrl="/general/music-musings.webp" />
            <div id="music-musings-content">
                <h2>These essays, archived from years of writing about music, have been gently updated. Your comments are most welcome!</h2>
                <ul>
                    {POSTS.map(({ href, title, external }) => (
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
            </div>
        </main>
    )
}