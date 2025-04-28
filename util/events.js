const events = [
    {
        "date": "Thursday, July 31st, 2025",
        "name": `Fiddlers Four`,
        "hyperlink":"https://astonmagna.org/summer-festival/",
        "imageUrl":"st-james.jpg",
    },
    {
        "date": "Sunday, July 27th, 2025",
        "name": `Madame Mozart, the Lacrimosa`,
        "location":"Great Barrington Public Theater, Daniel Arts Center located at Bard College at Simon’s Rock",
        "address":"84 Alford Rd, Great Barrington, MA 01230",
        "description":"A stage adaptation of an Elias short story by playwright Anne Undeland of the miraculous achievement of Constanze Mozart to have her husband's final work, the immortal Requiem, completed and performed.",
        "imageUrl":"MadameMozart.png",
        "hyperlink":"https://berkshireonstage.blog/2025/04/25/great-barrington-public-theater-announces-cast-for-madame-mozart-the-lacrimosa/"
    },
    {
        "date":"Monday, March 3rd, 2025",
        "name":"Händel and Friends: A Baroque Tapestry",
        "location":"The Seattle Athenaeum",
        "description": "Join Gerald Elias and cellist Meeka Quan DiLorenzo at the Seattle Athenaeum for a captivating recital celebrating the brilliance and lasting influence of Georg Frideric Händel.",
        "imageUrl":"folio2.jpeg",
        "hyperlink":"https://www.folioseattle.org/event-details/handel-and-friends-a-baroque-tapestry"
    },
    {
        "date": "Sunday, November 10th, 2024 @ 3:00-4:15PM followed by reception",
        "name": `Violin Recital, "A Classical Kaleidoscope"`,
        "location":"Folio Anthenaeum Library, 93 Park St. #307, Seattle, WA",
        "description":"Joined by pianist Michelle Huang. A selection of virtuoso violin repertoire found in Elias's Daniel Jacobus mystery series",
        "imageUrl":"kaleidoscope.png",
        "hyperlink":"https://www.folioseattle.org/event-details/a-classical-kaleidoscope"
    },
    {
        "date": "Saturday, November 2nd, 2024 @ 1PM",
        "name":"Joint Book Presentation",
        "location":"The Seattle Public Library - West Seattle",
        "address":"2306 42nd Ave SW, Seattle, WA 98116",
        "description":"Joined by authors Erica Miner and Charles Philipp Martin. A discussion and music about the authors' recently released mysteries",
        "imageUrl":"west-seattle.jpeg",
        "hyperlink":"https://www.spl.org/hours-and-locations/west-seattle-branch"
    },
    {
        "date": "Friday, October 25th, 2024 @ 7:00-8:00PM",
        "name":"Interview and Performance on Northwest Focus",
        "location":"KING-FM Radio, Seattle, WA",
        "description":"Discussion with host Dave Beck about Elias's music and literary career, including performance of selections from his upcoming violin recitals.",
        "imageUrl":"king-fm.png",
    },
    {
        "date": "Wednesday, August 14th, 2024 @ 4:00-6:00PM",
        "name":"Book Presentation with Music",
        "location":"West Stockbridge Old Town Hall",
        "address":"9 Main St, West Stockbridge, MA 01266",
        "description":"Daniel Jacobus series and Murder on Vacation presented by Friends of the Library. Reception and book signing afterwards!",
        "imageUrl":"west-stockbridge-event.png",
        "hyperlink":"https://weststockbridgepl.org/about-us/"
    },
    {
        "date": "Monday, July 22nd, 2024 @ 5:30PM",
        "name":"Joint Book Presentation with author, Carol Goodman Kaufman",
        "location":"The Bookstore in Lenox",
        "address":"11 Housatonic Street, Lenox, MA",
        "imageUrl":"the-bookstore.png",
        "description":"In conversation with Kaufman about her novel, The First Murder and Elias's most recent Daniel Jacobus mystery, Murder at the Royal Albert.",
        "hyperlink":"https://www.bookstoreinlenox.com/events/"
    },
    {
        "date": "Saturday, June 8th, 2024 @ 10:00AM",
        "name":"Book presentation with music, Murder at the Royal Albert",
        "location":"Inglewood Golf Club (WA)",
        "address":"900 Bellevue Way NE, Bellevue, WA 98004",
        "imageUrl":"inglewood-golf-club.jpeg",
        "hyperlink":"https://leftcoastcrime.org/2024/index.html"
    },
    {
        "date":"Thursday, May 16th, 2024 @ 3:30-5:00PM PST",
        "name":"Mystery & Music at Oak Harbor Library",
        "location":"Oak Harbor Library",
        "address":"1000 SE Regatta Dr, Oak Harbor, WA 98277",
        "imageUrl":"IG-MysteryAndMusic.jpg",
        "description":"Critically acclaimed author and musician Gerald Elias blends music and mystery for a presentation to indulge the senses! He will discuss his books and play snippets of pieces featured in his novels.",
        "hyperlink":"https://sno-isle.bibliocommons.com/events/6579ff940825261328f3514c"
    },
    {
        "date": "April 11th-14th, 2024",
        "name":"Left Coast Crime 2024: Seattle Shakedown mystery book convention",
        "location":"Hyatt Regency Bellevue",
        "address":"900 Bellevue Way NE, Bellevue, WA 98004",
        "imageUrl":"left-coast-crime.png",
        "hyperlink":"https://leftcoastcrime.org/2024/index.html"
    },
    {
        "date":"Thursday, February 29th, 2024 @ 3:30PM PST",
        "name":"Noir at the Bar Radio, Episode 6, with Allen Warren",
        "location":"Skyline Retirement Community",
        "address":"725 9th Ave, Seattle, WA 98104",
        "imageUrl":"noir-at-the-bar.jpg",
        "description":"Episode also airs on KKNY Radio @ 1150AM",
        "hyperlink":"https://www.alanrwarren.com/noir-at-the-bar-radioshow"
    },
    {
        "date":"Friday, January 12th, 2024",
        "name":"Vivaldi violin sonata recital & book talk",
        "location":"Skyline Retirement Community",
        "address":"725 9th Ave, Seattle, WA 98104",
        "imageUrl":"event-seattle.jpeg",
        "description":"Joined by Gus Denhard on theorbo.",
    },
    {
        "date":"Friday, December 15th, 2023",
        "name":"House of Mystery",
        "location":"ABC News Radio",
        "description": "Radio Interview and Podcast with Alan R. Warren.",
        "imageUrl":"house-of-mystery.png",
        "hyperlink":"https://www.alanrwarren.com/house-of-mystery-radioshow"
    },
    {
        "date":"Thursday, December 14th, 2023",
        "name":"AUTHOR EVENT WITH STITCH",
        "location":"Online Event",
        "description": "Stitch is the world's largest companionship community created by members, for members, creating community and companionship for anyone over 50. Meet Gerald Elias and learn about writing mysteries, his writing process, and his books.",
        "imageUrl":"stitch.png",
        "hyperlink":"https://www.stitch.net/app/event/486764/united-states-crown-hill/author-eventgerald-elias"
    },
    {
        "date":"Saturday, December 2nd, 2023 @ 8:00pm MST",
        "name":"Conducting the annual Vivaldi by Candlelight Concert",
        "location":"First Presbyterian Church of Salt Lake City",
        "address":"12 C St E, Salt Lake City, UT 84103",
        "imageUrl":"vivaldi.jpeg",
        "hyperlink":"https://utahglobaldiplomacy.org/events/vivaldi"
    },
    {
        "date":"Friday, December 1st, 2023",
        "name":"Let It Snow",
        "location":"Online Event",
        "imageUrl":"let-it-snow.jpeg",
        "description":"A select group of authors joins forces with Uvi Poznansky to bring you amazing audiobooks!",
        "hyperlink":"https://www.facebook.com/events/821999746332037/"
    },
    {
        "date":"Saturday, November 18th, 2023 @ 6:30pm PST",
        "name":"Author Roundtable",
        "location":"Folio Library",
        "address":"93 Pike St #307, Seattle, WA 98101",
        "imageUrl":"folio.jpeg",
        "hyperlink":"https://www.folioseattle.org/event-details/musical-murder-mystery-an-author-roundtable"
    },
    {
        "date":"Monday, October 30th, 2023",
        "name":"AUDIOBOOK RELEASE! Murder at the Royal Albert",
        "imageUrl":"murder-at-the-royal-albert-audiobook.jpeg",
        "description":`Step into the world of intrigue and suspense with Gerald Elias' latest audiobook, 'Murder at the Royal Albert,' expertly narrated by Alison Larkin. A musical mystery masterpiece awaits your ears! Click "learn more" to pre-order!`,
        "hyperlink":"/books/audiobooks/murder-at-the-royal-albert"
    },
    {
        "date": "Saturday, December 7th, 2024",
        "name":"Annual Vivaldi by Candlelight concert",
        "location":"First Presbyterian Church of Salt Lake City",
        "address":"12 C St E, Salt Lake City, UT 84103",
        "imageUrl":"vivaldi.jpeg",
        "hyperlink":"https://utahglobaldiplomacy.org/events/vivaldi"
    },
];

export default events;