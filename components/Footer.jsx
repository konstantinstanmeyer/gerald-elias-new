import NewsletterForm from "./NewsletterForm";

export default function Footer(){
    return (
        <>
            <div id="footer">
                <div id="socials">
                    <h3>FOLLOW <span>GERALD</span></h3>
                    <div id="socials-images">
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
                <div id="footer-divider" />
                <div id="newsletter">
                    <div id="newsletter-divider" />
                    <div id="newsletter-text">
                        <h3>NEWSLETTER</h3>
                        <div id="newsletter-input-container">
                            <NewsletterForm />
                        </div>
                    </div>
                </div>
            </div>
            <div id="dev-credits">
                <p>&#169; Gerald Elias | All Rights Reserved | Website by&nbsp;<a target="_blank" href="https://www.linkedin.com/in/konstantin-stanmeyer/"><strong>Konstantin Stanmeyer</strong></a></p>
            </div>
        </>
    )
}