export const postMetadata = {
  "a-strange-and-wonderful-concert": {
    title: "A Strange and Wonderful Concert",
    date: "2024-03-15",
    image: "/open-book.jpg"
  },
  "buried-treasure": {
    title: "Buried Treasure",
    date: "2022-03-12",
    image: "/open-book.jpg"
  },
  "lacrymosa": {
    title: "LACRYMOSA, AND THE TRIUMPH OF CONSTANZE MOZART",
    image: "/constanze.png"
  },
  "passed-ball-mlb-rip": {
    title: "Passed Ball: MLB RIP",
    date: "2022-03-03",
    image: "/open-book.jpg"
  },
  "scam-ai-or-am-i-paranoid": {
    title: "Scam, AI, or Am I Paranoid?",
    image: "/open-book.jpg"
  },
  "tchaikovsky-and-the-future-of-contemporary-music": {
    title: "Tchaikovsky and the Future of Contemporary Music",
    image: "/selfie.png"
  },
  "the-burden-of-the-blacklist": {
    title: "The Burden of the Backlist",
    date: "2023-02-16",
    image: "/open-book.jpg"
  },
  "the-day-after-memorial-day": {
    title: "The Day After Memorial Day",
    date: "2023-05-31",
    image: "/open-book.jpg"
  },
  "the-most-kindest-cut-of-all": {
    title: "The Most Kindest Cut of All",
    image: "/open-book.jpg"
  },
  "turkey-in-the-saw-short-story-contest": {
    title: "TURKEY IN THE SAW SHORT STORY CONTEST",
    date: "2023-11-24",
    image: "/thanksgiving-blog.png"
  },
  "wanna-be-a-crime-writer": {
    title: "Wanna Be a Crime Writer?",
    date: "2023-11-07",
    image: "/open-book.jpg"
  },
  "youre-not-bad-for-a-democrat": {
    title: "You're not bad, for a Democrat",
    date: "2023-12-15",
    image: "/donkey.png"
  },
  "a-case-for-quality": {
    title: "A Case for Quality",
  }
};

export const getAllPostSlugs = () => Object.keys(postMetadata);

export const postExists = (slug) => slug in postMetadata;