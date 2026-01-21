"use client"

import Landing from "@/components/Landing"
import MDX from '@/markdown/free-story.mdx'

export default function FlashFiction(){
    return (
      <main className="blog-post" id="free-story">
        <Landing name="Flash Fiction" imageUrl='/general/open-book.webp' />
        <section id="bonbons" className="blog-content">
          <MDX />
        </section>
      </main>
    )
}