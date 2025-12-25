import Image from 'next/image';
import Link from 'next/link';
import { books } from '@/util/books';
import NotFound from '@/components/NotFound';

export default async function Book({ params }) {
  const bookKey = (await params)?.name?.replace('%26', '&');
  const book = books[bookKey];

  if (!book) return <NotFound />;

  const [quote, author] = book?.details?.split(' -') || [];
  
  const purchaseLinks = Object.entries(book.links);

  return (
    <main id="book-preview">
        <div id="preview-image-container">
        <Image
            src={book.imageUrl}
            alt={book.name}
            width={350}
            height={525}
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
        {quote && (
            <p id="preview-details">
            {quote}{' '}
            <span id="preview-details-author">—{author}</span>
            </p>
        )}
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
        {book?.subtext && (
            <p className="speakeasy">From Speakeasy Editions</p>
        )}
        {book?.audiobook && (
            <p id="audiobook-link-text">
            Check out the audiobook version, too!{' '}
            <Link href={`/books/audiobooks${book.audiobook.url}`} id="audiobook-link">
                More Details
            </Link>
            </p>
        )}
        {book.description.map((textBlock, index) => (
            <p key={`description-${index}`} className="preview-paragraph">
            {textBlock}
            </p>
        ))}
        </section>
    </main>
  );
}