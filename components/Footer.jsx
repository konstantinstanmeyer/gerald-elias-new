import NewsletterForm from "./NewsletterForm";

export default function Footer(){
    return (
        <div id="footer">
            <div id="socials">
                <h3>FOLLOW <span>GERALD</span></h3>
                <div id="socials">
                    <a target="_blank" href="https://www.facebook.com/EliasBooks/">
                        <img src="/facebook.png" />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/geraldelias504">
                        <img src="/instagram.png" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/gerald-elias-6a67a0157/">
                        <img src="/linkedin.png" />
                    </a>
                </div>
            </div>
            <div id="newsletter">
                <div id="newsletter-divider" />
                <div>
                    <h3>NEWSLETTER</h3>
                    <div id="newsletter-input-container">
                        <NewsletterForm />
                    </div>
                </div>
            </div>
        </div>
    )
}