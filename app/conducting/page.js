import Landing from '@/components/Landing';
import conducting from '@/util/conducting';

export default function Conducting() {
  return (
    <main id="conducting">
      <Landing name="Conducting" imageUrl="/general/conducting-landing.webp" />
      <section id="conducting-content">
        {conducting.textBlocks.map((block, index) => (
          <p key={`text-${index}`}>{block}</p>
        ))}
        {conducting.quotes.map((quote, index) => (
          <p key={`quote-${index}`} className="conducting-quotes">
            {quote.content} <span>—{quote.author}</span>
          </p>
        ))}
      </section>
    </main>
  );
}