"use client"

import Landing from "@/components/Landing"
import MDX from '@/markdown/free-story.mdx'

export default function FreeStory(){
    return (
      <main className="blog-post" id="free-story">
        <Landing imageUrl='/open-book.jpg' />
        <section id="bonbons" className="blog-content">
          <MDX />
        </section>
      </main>
    )
}