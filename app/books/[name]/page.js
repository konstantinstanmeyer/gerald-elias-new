import { books } from "@/util/books"
import NotFound from "@/components/NotFound";

export default function Book({ params }){
    // console.log(params)
    const book = books[params?.name?.replace("%26", "&")];
    console.log(params)
    console.log(book)
    const [quote, author] = book?.details?.split(' -') || [];
    const linksLength = book ? Object.keys(book?.links)?.length : undefined;

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
                {!quote ? null : 
                    <p id="preview-details">{book.details.split(' -')[0] + " "}<span id="preview-details-author">{"-" + author}</span></p>
                }
                <p id="preview-hyperlinks-list">Buy on {
                    Object.entries(book.links).map(([siteName,url], i) => 
                    <>
                        <a target="_blank" className="preview-hyperlink" key={i+'50'} href={url}>{siteName}</a>{i < linksLength - 1 ? <span>,</span> : null}
                        </>
                    )
                }</p>
                {!book?.audiobook ? null : <p id="audiobook-link-text">Check out the audiobook version, too!&nbsp;<a href={'/books/audiobooks/' + book.audiobook.url} id="audiobook-link">More Details</a></p>}
                {book.description.map((textBlock, i) => 
                    <p key={i+'40'} className="preview-paragraph">{textBlock}</p>
                )}
            </div>
        </div>
    )
}