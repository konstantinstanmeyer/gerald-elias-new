import Image from 'next/image';
import Landing from '@/components/Landing';
import textArr from '@/util/teaching';

export default function Teaching() {
  return (
    <main id="teaching">
        <Landing name="Teaching" imageUrl="/general/teaching-landing.webp" />
        <section id="teaching-content">
        <Image 
            id="teaching-image" 
            src="/general/teaching-profile.webp" 
            alt="Gerald Elias Teaching"
            width={280}
            height={373}
            priority
        />
        {textArr.map((text, index) => (
            <p key={`teaching-${index}`}>{text}</p>
        ))}
        </section>
    </main>
  );
}