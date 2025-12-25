import Landing from '@/components/Landing';
import textArr from '@/util/teaching';

export default function Teaching() {
  return (
    <main id="teaching">
      <Landing name="Teaching" imageUrl="/teaching.jpg" />
      <section id="teaching-content">
        <img 
          id="teaching-image" 
          src="/teaching-profile.jpg" 
          alt="Gerald Elias Teaching"
        />
        {textArr.map((text, index) => (
          <p key={`teaching-${index}`}>{text}</p>
        ))}
      </section>
    </main>
  );
}