// Ported from reviews.html (static site source).
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Review widget with reserved space. Elfsight's supported integration:
// - Platform script loads async on mount
// - First visible widget initializes immediately (no lazy attribute)
// - Below-fold widgets use data-elfsight-app-lazy for IntersectionObserver-based lazy init
// - Google widget bundle deferred until it approaches viewport
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
  // Append to head for earlier execution, before React fully renders
  document.head.appendChild(s);
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
        {...(isFirst ? {} : { 'data-elfsight-app-lazy': true })}
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
          {/* First visible widget - initializes immediately without lazy */}
          <LazyReviewWidget appId="efd88dc5-2313-4ed6-9a25-398a440a5b38" widgetType="facebook" isFirst={true} />
        </div>
        <br />
        <h2>Google Reviews</h2>
        <div className="card-container">
          {/* Lazy widget - bundle deferred until viewport */}
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
}// trigger rebuild Thu Nov 26 22:36:02 UTC 2026
