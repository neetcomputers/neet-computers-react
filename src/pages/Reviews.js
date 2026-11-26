// Ported from reviews.html (static site source).
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Lazy widget component with reserved space
function LazyReviewWidget({ appId, widgetType }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const widgetRef = useRef(null);

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

  // Intersection Observer to detect when widget approaches viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        rootMargin: '200px', // Start loading 200px before widget enters viewport
        threshold: 0.1
      }
    );

    if (widgetRef.current) {
      observer.observe(widgetRef.current);
    }

    return () => {
      if (widgetRef.current) {
        observer.unobserve(widgetRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div 
      ref={widgetRef}
      className="lazy-widget-container"
      style={{
        position: 'relative',
        minHeight: getReservedHeight(),
        background: isVisible ? 'transparent' : '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {!isVisible && (
        <div className="widget-placeholder" style={{
          color: '#999',
          fontSize: '14px'
        }}>
          Loading reviews...
        </div>
      )}
      {isVisible && !isLoaded && (
        <div className="widget-loading" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f5f5f5'
        }}>
          <div className="loading-spinner" style={{
            width: '40px',
            height: '40px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #3498db',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }} />
        </div>
      )}
      {isVisible && (
        <div 
          className={`elfsight-app-${appId}`}
          data-elfsight-app-lazy
          style={{
            width: '100%',
            minHeight: getReservedHeight(),
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
          onLoad={() => setIsLoaded(true)}
        />
      )}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
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