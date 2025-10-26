import Landing from "@/components/Landing"

export default function FreeStory(){
    return (
        <div id="free-story">
            <Landing name="Free Story" imageUrl='/events-landing.jpg' />
            <h2>Stories</h2>
            <div id="story-container">
                <a className="story">
                    <img src="/egg.png" />
                    <p>Bonbons</p>
                </a>
            </div>
        </div>
    )
}