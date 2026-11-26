// Ported from reviews.html (static site source).
import React from 'react';
import { Link } from 'react-router-dom';

export default function Reviews() {
  return (
    <main>
		<article>
            <h2>Facebook Reviews</h2>
            <div className="card-container">
                
                <div className="elfsight-app-efd88dc5-2313-4ed6-9a25-398a440a5b38" data-elfsight-app-lazy></div>
            </div>
            <br />
            <h2>Google Reviews</h2>
            <div className="card-container">
                
                <div className="elfsight-app-f2d7397a-fb66-488b-8f36-29437ad034be" data-elfsight-app-lazy></div>
            </div>
        </article>
        <div className="direct-contact">
            <h2>Other Reviews:</h2>
            <div className="contact-methods">
                <div>
                    <a href="https://nextdoor.com/pages/neet-computers-boulder-co/">
                    <img src={process.env.PUBLIC_URL + "/images/ui-icons/Nextdoor-Logo.webp"} alt="Nextdoor Logo" />
                    <h3>Nextdoor</h3>
                    </a>
                </div>
                <div>
                    <a href="https://offerup.com/p/48780284">
                    <img src={process.env.PUBLIC_URL + "/images/ui-icons/offeruplogo.webp"} alt="Offerup Logo" />
                    <h3>Offerup</h3>
                    </a>
                </div>
                <div>
                    <a href="https://www.yelp.com/biz/neet-computers-boulder">
                    <img src={process.env.PUBLIC_URL + "/images/ui-icons/Yelp_Logo.webp"} alt="Yelp Logo" />
                    <h3>Yelp</h3>
                    </a>
                </div>
                <div>
                    <a href="https://www.facebook.com/marketplace/profile/100024614416481/">
                    <img src={process.env.PUBLIC_URL + "/images/ui-icons/fbmarketplace.webp"} alt="Facebook Marketplace Logo" />
                    <h3>Marketplace</h3>
                    </a>
                </div>
                <div>
                    <a href="https://business.colgbtqcc.org/list/member/neet-computers-llc-2386">
                    <img src={process.env.PUBLIC_URL + "/images/ui-icons/CLBGTQCOC.webp"} alt="Colorado LGBTQ Chamber of Commerce" />
                    <h3>LGBTQ CoC</h3>
                    </a>
                    </div>
                </div>
        </div>
        <div className="reviews">
            <img src={process.env.PUBLIC_URL + "/images/ui-icons/nextdoor.webp"} alt="Nextdoor Neighborhood Fave" />
        </div>
        <br />
    </main>
  );
}
