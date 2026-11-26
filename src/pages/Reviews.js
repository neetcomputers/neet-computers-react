// Ported from reviews.html (static site source).
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Review widget with reserved space. The Elfsight div renders right
// away inside its reserved box, and Elfsight's own lazy attribute
// defers the actual widget initialization until it approaches the
// viewport, which is the platform's supported lazy behavior. The
// platform script is ensured on mount, while the div is already in
// the DOM, the same order the original static page used.
function ensureElfsightScript() {
  if (
    document.querySelector(
      'script[src="https://static.elfsight.com/platform/platform.js"]'
    )
  ) {
    return;
  }
  const s = document.createElement('script');
  s.src = 'https://static.elfsight.com/platform/platform.js';
  s.defer = true;
  document.body.appendChild(s);
}

function LazyReviewWidget({ appId, widgetType }) {
  // Reserve space based on widget type (mobile vs desktop dimensions)
  const getReservedHeight = () => {
    // Facebook reviews widget: ~400px desktop, ~500px mobile
    // Google reviews widget: ~350px desktop, ~450px mobile
    if (widgetType === 'facebook') {
      return '400px';
    } else if (widgetType === 'google') {
      return '350px';
    }
    return '350px'; // default
  };

  useEffect(() => {
    ensureElfsightScript();
  }, []);

  return (
    <div
      className="lazy-widget-container"
      style={{
        position: 'relative',
        minHeight: getReservedHeight()
      }}
    >
      <div
        className={`elfsight-app-${appId}`}
        data-elfsight-app-lazy
        style={{
          width: '100%',
          minHeight: getReservedHeight()
        }}
      />
    </div>
  );
}

export default function Reviews() {
  return (
    <main>
      <article>
        <h2>Facebook Reviews</h2>
        <div className="card-container">
          <LazyReviewWidget appId="efd88dc5-2313-4ed6-9a25-398a440a5b38" widgetType="facebook" />
        </div>
        <br />
        <h2>Google Reviews</h2>
        <div className="card-container">
          <LazyReviewWidget appId="f2d7397a-fb66-488b-8f36-29437ad034be" widgetType="google" />
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
            <a href="https://offerup.com/p/487680284">
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