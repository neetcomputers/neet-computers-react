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
  s.async = true;
  document.body.appendChild(s);
}

function LazyReviewWidget({ appId, widgetType, isFirst = false }) {
  useEffect(() => {
    ensureElfsightScript();
  }, []);

  return (
    <div
      className={`lazy-widget-container ${widgetType === 'facebook' ? 'facebook-widget' : 'google-widget'}`}
    >
      <div
        className={`elfsight-app-${appId}`}
        {...(!isFirst && { 'data-elfsight-app-lazy': true })}
        style={{
          width: '100%'
        }}
      />
    </div>
  );
}

export default function Reviews() {
  return (
    <>
      <style>{`
        .lazy-widget-container {
          position: relative;
          width: 100%;
        }
        .facebook-widget {
          min-height: 400px;
        }
        .google-widget {
          min-height: 350px;
        }
        @media (max-width: 768px) {
          .facebook-widget {
            min-height: 500px;
          }
          .google-widget {
            min-height: 450px;
          }
        }
      `}</style>
      <main>
      <article>
        <h2>Facebook Reviews</h2>
        <div className="card-container">
          <LazyReviewWidget appId="efd88dc5-2313-4ed6-9a25-398a440a5b38" widgetType="facebook" isFirst={true} />
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
              <div className="logo-placeholder" style={{ minHeight: '60px', marginBottom: '8px' }}>
                <img src={process.env.PUBLIC_URL + "/images/ui-icons/Nextdoor-Logo.webp"} alt="Nextdoor Logo" style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
              <h3>Nextdoor</h3>
            </a>
          </div>
          <div>
            <a href="https://offerup.com/p/487680284">
              <div className="logo-placeholder" style={{ minHeight: '60px', marginBottom: '8px' }}>
                <img src={process.env.PUBLIC_URL + "/images/ui-icons/offeruplogo.webp"} alt="Offerup Logo" style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
              <h3>Offerup</h3>
            </a>
          </div>
          <div>
            <a href="https://www.yelp.com/biz/neet-computers-boulder">
              <div className="logo-placeholder" style={{ minHeight: '60px', marginBottom: '8px' }}>
                <img src={process.env.PUBLIC_URL + "/images/ui-icons/Yelp_Logo.webp"} alt="Yelp Logo" style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
              <h3>Yelp</h3>
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/marketplace/profile/100024614416481/">
              <div className="logo-placeholder" style={{ minHeight: '60px', marginBottom: '8px' }}>
                <img src={process.env.PUBLIC_URL + "/images/ui-icons/fbmarketplace.webp"} alt="Facebook Marketplace Logo" style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
              <h3>Marketplace</h3>
            </a>
          </div>
          <div>
            <a href="https://business.colgbtqcc.org/list/member/neet-computers-llc-2386">
              <div className="logo-placeholder" style={{ minHeight: '60px', marginBottom: '8px' }}>
                <img src={process.env.PUBLIC_URL + "/images/ui-icons/CLBGTQCOC.webp"} alt="Colorado LGBTQ Chamber of Commerce" style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
              <h3>LGBTQ CoC</h3>
            </a>
          </div>
        </div>
      </div>
      <div className="reviews">
        <div className="logo-placeholder" style={{ minHeight: '60px', marginBottom: '8px' }}>
          <img src={process.env.PUBLIC_URL + "/images/ui-icons/nextdoor.webp"} alt="Nextdoor Neighborhood Fave" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
      <br />
    </main>
    </>
  );
}