import Image from 'next/image';
import { audiobooks } from '@/util/books';
import NotFound from '@/components/NotFound';

export default async function Audiobook({ params }) {
  const audiobookKey = (await params)?.name;
  const book = audiobooks[audiobookKey];

  if (!book) return <NotFound />;

  const purchaseLinks = Object.entries(book.links);

  return (
    <main id="book-preview">
        <div id="preview-image-container">
            <Image
                src={book.imageUrl}
                alt={book.name}
                width={350}
                height={350}
                id="preview-image"
                priority
            />
        </div>
        <section id="preview-text-col">
            <h2>
                {book.name}
                {book?.numInSeries && (
                <span id="series-num">Book #{book.numInSeries}</span>
                )}
            </h2>
            <p id="preview-date">{book.releaseDate}</p>
            <p id="preview-hyperlinks-list">
                {book?.preorder ? 'Pre-order on' : 'Buy on'}{' '}
                {purchaseLinks.map(([siteName, url], index) => (
                <span key={`link-${index}`}>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="preview-hyperlink"
                    >
                    {siteName}
                    </a>
                    {index < purchaseLinks.length - 1 && <span>,</span>}
                </span>
                ))}
            </p>
            {book.description.map((textBlock, index) => (
                <p key={`description-${index}`} className="preview-paragraph">
                {textBlock}
                </p>
            ))}
        </section>
    </main>
  );
}