import Landing from "@/components/Landing"

export const metadata = {
    title: "Bonbons",
    description: "Chocolate-Inspired Flash Fiction",
    openGraph: {
      title: "Bonbons",
      description: "Chocolate-Inspired Flash Fiction",
      url: "https://www.mysteriesandmusic.com/free-story",
      type: "website",
      images: [
        {
          url: "https://www.mysteriesandmusic.com/egg.png",
          width: 1200,
          height: 630,
          alt: "Bonbons cover image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Bonbons",
      description: "Chocolate-Inspired Flash Fiction",
      images: ["https://www.mysteriesandmusic.com/egg.png"],
    },
  }

export default function FreeStory(){
    return (
        <>
            <div id="free-story">
                <Landing imageUrl='/open-book.jpg' />
                <div className="bonbons" id="blog-post">
                <h3>Chocolate-Inspired Flash Fiction</h3>
                <img id="blog-post-image" src="/egg.png" />
                <h2>Bonbons</h2>
                <p><i>Your call is important to us.</i></p>
                <p>Yeah, right. While I waited, I sipped my egg cream which, by the way, has neither egg nor cream, but it has chocolate, so –</p>
                <p>“Aunt Lulu’s Famous Chocolates. My name is Imelda. How may I help you today?”</p>
                <p>“I bought one of your seventy-percent dark chocolate Easter eggs.”</p>
                <p>“My favorite! Don’t you love ’em?”</p>
                <p>“Usually.”</p>
                <p>“Was there a problem with the item, ma’am?”</p>
                <p>“The other thirty percent was a finger.”</p>
                <p>Imelda put me on hold to connect to Jason, her supervisor. Again, I waited,
    Hoovering up the dregs of my egg cream. Any day now.</p>
                <p>“Madame,” Jason said, his tone concerned though annoyingly defensive. “I’m
    sorry to hear you’ve reported a negative experience, but I can assure you that we never
    put fingers in our Easter eggs.”</p>
                <p>“Well, it wasn’t nougat.”</p>
                <p>“If I may ask, was it a <i>human</i> finger?”</p>
                <p>“Is there another kind?”</p>
                <p>“We need to be accurate.”</p>
                <p>“Look, Jason, you can imagine the level of distress this has caused me.
    Chomping into a finger when you think it’s a chocolate egg is highly disconcerting. I
    haven’t been able to eat or sleep, and ––”</p>
                <p>“I commiserate with you, believe me! However, to resolve this issue to your
    satisfaction, we do require you to send us the finger. Standard policy. We’ll pay for
    shipping, of course.”</p>
                <p>“Never mind, I’ll just contact the police and my lawyer.”</p>
                <p>“Please, madame. There’s no need to get hasty. What if you were to simply text
    us a photo in order for us to consider how best to compensate you for
    your…unpleasantness?”</p>
                <p>“You don’t want me to do that.”</p>
                <p>“Why not?”</p>
                <p>“These days, AI can generate a perfect virtual image of a finger, and you wouldn’t
    know the difference, so why bother? Jason, if you don’t trust me ––”</p>
                <p>“May I put you on hold for a moment?”</p>
                <p>“Of course.”</p>
                <p>“<i>Raindrops fallin’ on my head…</i>” I was all too familiar with the tape loop
    endurance test. It must have gradually dawned on Jason that he couldn’t outlast me. He
    was back in less than ten minutes.</p>
                <p>“I personally apologize for your recent experience,” he said. “Would you accept a
    year’s supply of our Deluxe Truffle Bonbons as our way of saying how much we value
    customers such as yourself?”</p>
                <p>“That’s so kind of you, Jason. May I make a counteroffer?”</p>
                <p>After a reasonable period of haggling, I came away minus the year’s supply but
    with a five-thousand-dollar check.</p>
                <p>“Is there anything else we can help you with today?”</p>
                <p>“No, that’s all, Jason. Thank you for being proactive.”</p>
                <p>I hung up, did my next online search, and punched in a phone number. I listened
    to the menu: <i>If you are experiencing a problem, press 5.</i></p>
                <p>“Serendipity Fudge Company. How may we help you today?”</p>
                <p><i>###</i></p>
                <p><i>If you enjoyed this story, I hope you’ll take a look at my mystery novels

    and sign up for my newsletter.</i></p>
                <p><i>Thank you!</i></p>
            </div>
            </div>
        </>
    )
}