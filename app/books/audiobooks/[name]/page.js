import { audiobooks } from "@/util/books"
import NotFound from "@/components/NotFound";

export default async function Audiobook({ params }){
    const book = audiobooks[(await params)?.name];
    const linksLength = Object.keys(book.links).length;

    // console.log(linksLength)
    // console.log(book)

    if (!book) return <NotFound />;

    return (
        <div id="book-preview">
            <div id="preview-image-container">
                <img src={book.imageUrl} id="preview-image" />
            </div>
            <div id="preview-text-col">
                <h2>{book.name}<span id="series-num">{book?.numInSeries ? "Book #" + book.numInSeries : null}</span></h2>
                <p id="preview-date">{book.releaseDate}</p>
                <p id="preview-hyperlinks-list">{book?.preorder ? "Pre-order on" : "Buy on"} {
                    Object.entries(book.links).map(([siteName,url], i) => 
                    <>
                        <a target="_blank" className="preview-hyperlink" key={i+'50'} href={url}>{siteName}</a>{i < linksLength - 1 ? <span>,</span> : null}
                        </>
                    )
                }</p>
                {book.description.map((textBlock, i) => 
                    <p key={i+'40'} className="preview-paragraph">{textBlock}</p>
                )}
            </div>
        </div>
    )
}