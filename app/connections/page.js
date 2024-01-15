import Landing from "@/components/Landing"

export default function Connections(){
    return (
        <div id="connections">
            <Landing name="Connections" imageUrl="snow.jpg" />
            <div id="connections-content">
                <h2>Past Media Features and Ways to Connect</h2>
                <div id="connections-list">
                    <h3>December 2023</h3>
                    <p>Listen to Gerald's interview on NBC about his book "Murder at the Royal Albert".&nbsp;<a target="_blank" href="https://shows.acast.com/houseofmysteryradio/episodes/gerald-elias-murder-at-the-royal-albert">here</a></p>
                    <p>Enjoy learning about the blending of writing and the life of a professional concert musician from Gerald Elias.&nbsp;<a target="_blank" href="https://www.youtube.com/watch?v=hl2H3i9yF-g">here</a></p>
                </div>
            </div>
        </div>
    )
}

const media = {
    2023: [
        {
            name: "December",
            items: [
                {
                    description: `Listen to Gerald Elias' interview on NBC about his book "Murder at the Royal Albert."`,
                    link: "https://www.youtube.com/watch?v=hl2H3i9yF-g",
                },
                {
                    description: "",
                    link: "https://shows.acast.com/houseofmysteryradio/episodes/gerald-elias-murder-at-the-royal-albert"
                }
            ]
        }
    ],
    2024: [

    ]
}