import Image from 'next/image';
import Landing from '@/components/Landing';
import biography from '@/util/biography';

export default function Biography() {
    return (
        <main id="biography">
            <Landing imageUrl="/general/biography-landing.webp" name="Biography" />
            <section id="bio-content">
                <h2>Short Bio</h2>
                <div id="short-bio">
                    <Image 
                        src="/general/gerald-headshot.webp"
                        alt="Gerald Elias Headshot"
                        width={280}
                        height={373}
                        priority
                    />
                    <h2 className="bio-mobile">Short Bio</h2>
                    {biography.shortBio.textBlocks.map((block, index) => (
                        <p key={`short-bio-${index}`}>{block}</p>
                    ))}
                </div>
                <h2>Long Bio</h2>
                <div id="long-bio">
                    <Image 
                        src="/general/long-bio.webp"
                        alt="Gerald Elias"
                        width={280}
                        height={373}
                    />
                    <h2 className="bio-mobile">Long Bio</h2>
                    {biography.longBio.textBlocks.map((block, index) => (
                        <div key={`long-bio-${index}`}>
                            {index === 4 && (
                                <Image 
                                    src="/general/gerald-elias-profile.webp"
                                    alt="Gerald Elias Profile"
                                    width={280}
                                    height={373}
                                />
                            )}
                            <p>{block}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}