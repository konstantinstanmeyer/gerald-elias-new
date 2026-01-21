export const postMetadata = {
  "a-strange-and-wonderful-concert": {
    title: "A Strange and Wonderful Concert",
    date: "2024-03-15",
    image: "/general/open-book.webp"
  },
  "buried-treasure": {
    title: "Buried Treasure",
    date: "2022-03-12",
    image: "/general/open-book.webp"
  },
  "lacrymosa-and-the-triumph-of-constanze-mozart": {
    title: "LACRYMOSA, AND THE TRIUMPH OF CONSTANZE MOZART",
    image: "/posts/constanze.webp"
  },
  "passed-ball-mlb-rip": {
    title: "Passed Ball: MLB RIP",
    date: "2022-03-03",
    image: "/general/open-book.webp"
  },
  "scam-ai-or-am-i-paranoid": {
    title: "Scam, AI, or Am I Paranoid?",
    image: "/general/open-book.webp"
  },
  "tchaikovsky-and-the-future-of-contemporary-music": {
    title: "Tchaikovsky and the Future of Contemporary Music",
    image: "/posts/selfie.webp"
  },
  "the-burden-of-the-blacklist": {
    title: "The Burden of the Backlist",
    date: "2023-02-16",
    image: "/general/open-book.webp"
  },
  "the-day-after-memorial-day": {
    title: "The Day After Memorial Day",
    date: "2023-05-31",
    image: "/general/open-book.webp"
  },
  "the-most-kindest-cut-of-all": {
    title: "The Most Kindest Cut of All",
    image: "/general/open-book.webp"
  },
  "turkey-in-the-saw-short-story-contest": {
    title: "TURKEY IN THE SAW SHORT STORY CONTEST",
    date: "2023-11-24",
    image: "/posts/thanksgiving-blog.webp"
  },
  "wanna-be-a-crime-writer": {
    title: "Wanna Be a Crime Writer?",
    date: "2023-11-07",
    image: "/general/open-book.webp"
  },
  "youre-not-bad-for-a-democrat": {
    title: "You're not bad, for a Democrat",
    date: "2023-12-15",
    image: "/posts/donkey.webp"
  },
  "a-case-for-quality": {
    title: "A Case for Quality",
  }
};

export const getAllPostSlugs = () => Object.keys(postMetadata);

export const postExists = (slug) => slug in postMetadata;