// Ported from portfolio.html (static site source).
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Lazy image component with reserved space
function LazyImage({ src, alt, priority = false, aspectRatio = 'auto', fixedSize = null }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const imgRef = useRef(null);

  // Calculate aspect ratio for space reservation
  const getAspectRatio = () => {
    if (aspectRatio === 'auto') return 'auto';
    const [w, h] = aspectRatio.split('/').map(Number);
    return (h / w) * 100;
  };

  // Start loading when visible or if priority
  useEffect(() => {
    if (priority || isVisible) {
      setImgSrc(src);
    }
  }, [isVisible, priority, src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return; // Skip observer for priority images

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        rootMargin: '200px', // Start loading 200px before entering viewport
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [priority]);

  const containerStyle = {
    position: 'relative',
    width: fixedSize ? `${fixedSize}px` : '100%',
    height: fixedSize ? `${fixedSize}px` : 'auto',
    ...(aspectRatio !== 'auto' && !fixedSize && {
      paddingBottom: `${getAspectRatio()}%`,
      height: 0
    })
  };

  const placeholderStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const imageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.3s ease'
  };

  return (
    <div ref={imgRef} style={containerStyle}>
      {!isLoaded && (
        <div style={placeholderStyle}>
          <span style={{ color: '#999', fontSize: '12px' }}>Loading...</span>
        </div>
      )}
      {imgSrc && (
        <img
          src={imgSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={handleLoad}
          style={imageStyle}
        />
      )}
    </div>
  );
}

export default function Portfolio() {
  return (
    <main>
      <article>
        <div className="portfolio">
          <h2>Showcased Builds</h2>
          <div className="categories">
            <Link to="/mods" className="catcard">
              <h2 className="catcard-title">Mods</h2>
              <LazyImage 
                src={process.env.PUBLIC_URL + "/images/ui-icons/mod.webp"} 
                alt="Desktop PC Modifications" 
                priority={true}
                aspectRatio="1/1"
                fixedSize={200}
              />
            </Link>
            <Link to="/wraps" className="catcard">
              <h2 className="catcard-title">Wraps</h2>
              <LazyImage 
                src={process.env.PUBLIC_URL + "/images/ui-icons/wrap.webp"} 
                alt="Custom Vinyl Wraps" 
                priority={true}
                aspectRatio="1/1"
                fixedSize={200}
              />
            </Link>
            <Link to="/workstations" className="catcard">
              <h2 className="catcard-title">Workstations</h2>
              <LazyImage 
                src={process.env.PUBLIC_URL + "/images/ui-icons/workstation.webp"} 
                alt="Workstation Computers" 
                priority={true}
                aspectRatio="1/1"
                fixedSize={200}
              />
            </Link>
            <Link to="/servers" className="catcard">
              <h2 className="catcard-title">Servers</h2>
              <LazyImage 
                src={process.env.PUBLIC_URL + "/images/ui-icons/server.webp"} 
                alt="Server" 
                priority={true}
                aspectRatio="1/1"
                fixedSize={200}
              />
            </Link>
          </div>
          <h2>Business Partners</h2>
          <div className="businesscard-container">
            <div className="businesscard">
              <LazyImage 
                src={process.env.PUBLIC_URL + "/images/partners/Front-Range-Vita-Signs.webp"} 
                alt="Front Range Vital Signs" 
                className="businesscard-image"
                aspectRatio="16/9"
              />
              <div className="businesscard-content">
                <div className="businesscard-title">Front Range Vital Signs</div>
                <p className="businesscard-description">Local sign, car wrap, and graphic design shop that became our first B2B partner, printing and implementing our PC vinyl wraps. <br /> <br />We give them photo and editing <a href="https://www.facebook.com/neetcomputers/posts/pfbid02qPtKt3GgLDxhDyTHCCo3DJ1YAkhNefwjafRLz1iTBW4TiCKdHhfQKWcssTCECk97l">workstations</a>, and they turn Aria's PSD's into <a href="https://www.instagram.com/p/CiLd2RlPTIC/">reality</a>.</p>
              </div>
              <a href="https://frontrangevitalsigns.com/" className="businesscard-arrow">FRVS Website ➔</a>
            </div>
            <div className="businesscard">
              <LazyImage 
                src={process.env.PUBLIC_URL + "/images/partners/Southpaw.webp"} 
                alt="Southpaw Electric Corp" 
                className="businesscard-image"
                aspectRatio="16/9"
              />
              <div className="businesscard-content">
                <div className="businesscard-title">Southpaw Electric Corp</div>
                <p className="businesscard-description">Southpaw is an electrical company specializing in commercial, residential, and industrial contracting. <br /> <br /> We manage their <a href="https://www.facebook.com/neetcomputers/posts/1006871058158619">servers</a>, software, remote access, and employee <a href="https://www.facebook.com/neetcomputers/posts/pfbid02PdzzVkFZAYaumpa8rYkuczhxYRZm3tygmXsehqDkXx4aQQenn4dqXTsX7PBeWENZl">desktops</a>.</p>
                <a href="https://southpawelectric.com//" className="businesscard-arrow">Southpaw Website ➔</a>
              </div>
            </div>
            <div className="businesscard">
              <LazyImage 
                src={process.env.PUBLIC_URL + "/images/partners/Echo-thorns.webp"} 
                alt="EchoThorns" 
                className="businesscard-image"
                aspectRatio="16/9"
              />
              <div className="businesscard-content">
                <div className="businesscard-title">EchoThorns</div>
                <p className="businesscard-description">Artist, vTuber, and Twitch streamer. She's the talented creator of our <a href="https://www.instagram.com/p/CvJPW3FsEuK/">mascot</a>, <a href="https://www.instagram.com/p/CS2pAsEFlZa/?img_index=3">Violet</a>. <br /> <br /> She's also our first sponsorship, receiving a refurbished, upgraded, and tuned <a href="https://www.instagram.com/p/DIsfHbJM9r1/?img_index=1">mobile workstation</a> to further her creative efforts!</p>
              </div>
              <a href="https://echothorns.carrd.co/" className="businesscard-arrow">Echo's Card ➔</a>
            </div>
            <div className="businesscard">
              <LazyImage 
                src={process.env.PUBLIC_URL + "/images/partners/MiHi Entertainment Logo Light Square.webp"} 
                alt="MiHi Entertainment" 
                className="businesscard-image"
                aspectRatio="1/1"
              />
              <div className="businesscard-content">
                <div className="businesscard-title">MiHi Entertainment</div>
                <p className="businesscard-description">MiHi Entertainment brings immersive experiences to weddings, events, and gatherings. <br /> <br /> We're proud to manage their fleet of <a href="https://www.facebook.com/neetcomputers/posts/pfbid0StPVsLRrCAaPocGMyfBamMSLks5kTMu3Ux3hP87ZdW51q1hbajf7tdBGU8WVbjvol">workstations</a>,
                  <a href="https://www.facebook.com/neetcomputers/posts/pfbid0qC6Ga925fMpwF13V74dERaSTBkmGwjfthgLJ4A6G8T1nHv8YoRobjLkbgmaDFqXel">editing rigs</a>, and <a href="https://www.facebook.com/neetcomputers/posts/pfbid033gvEDFwDf4NMJW5oPVKzH13Nepu3GZbLWAtLVscQZRs6Zze8PubfrLphAZLoNXAZl">Virtual Reality systems.</a></p>
              </div>
              <a href="https://www.mihiphotobooth.com/" className="businesscard-arrow">MiHi Website ➔</a>
            </div>
            <div className="businesscard">
              <LazyImage 
                src={process.env.PUBLIC_URL + "/images/partners/vesl-logo-white.webp"} 
                alt="VESL" 
                className="businesscard-image"
                aspectRatio="16/9"
              />
              <div className="businesscard-content">
                <div className="businesscard-title">VESL</div>
                <p className="businesscard-description">VESL provides virtual resources for modeling, data analytics, and automation. <br /> <br /> We're grateful to have deployed their latest CAM and AI <a href="https://www.facebook.com/neetcomputers/posts/pfbid0XAJ8GdKMS3iZcQpV8dK7TqA6RAwxFahmvuEhCVDQotVeWUjzrqYKtheQKg7Hr8KTl">server</a> and its related infrastructure.</p>
              </div>
              <a href="http://veslsolutions.tech/" className="businesscard-arrow">VESL Website ➔</a>
            </div>
            <div className="businesscard">
              <LazyImage 
                src={process.env.PUBLIC_URL + "/images/partners/oec-engineering.webp"} 
                alt="OEC Engineering Corporation" 
                className="businesscard-image"
                aspectRatio="16/9"
              />
              <div className="businesscard-content">
                <div className="businesscard-title">OEC Engineering Corporation</div>
                <p className="businesscard-description">Serving the Washington DC area, OEC Engineering creates custom architectural fabrication with metal, glass and stone materials. <br /> <br /> We supply their Network Attached Storage <a href="https://www.instagram.com/p/C6KOxUMMya9/?next=%2Foec_engineeringcorp%2F&img_index=1">Servers</a>.</p>
              </div>
              <a href="https://www.oecengineering.com/" className="businesscard-arrow">OEC Website ➔</a>
            </div>
            <div className="businesscard">
              <LazyImage 
                src={process.env.PUBLIC_URL + "/images/partners/Baseline Design.webp"} 
                alt="Baseline Design LLC" 
                className="businesscard-image"
                aspectRatio="16/9"
              />
              <div className="businesscard-content">
                <div className="businesscard-title">Baseline Design LLC</div>
                <p className="businesscard-description">Baseline Design is a design firm in Lafayette, Colorado, founded by husband and wife Kim and Juta Cinco. <br /> <br /> It's been a pleasure supplying another dynamic duo couple with their design <a href="https://www.facebook.com/neetcomputers/posts/668027615376300">workstations</a>.</p>
              </div>
              <a href="https://www.baselinedesignco.com/home" className="businesscard-arrow">Baseline Website ➔</a>
            </div>
            <div className="businesscard">
              <LazyImage 
                src={process.env.PUBLIC_URL + "/images/partners/Cooks Interiors.webp"} 
                alt="Cooks Interiors" 
                className="businesscard-image"
                aspectRatio="16/9"
              />
              <div className="businesscard-content">
                <div className="businesscard-title">Cooks Interiors</div>
                <p className="businesscard-description">Family-owned Brighton store that delivers interior design hardware with professional installation and free estimates. <br /> <br /> We upgrade and maintain their accounting, security, and business workstations.</p>
              </div>
              <a href="https://www.facebook.com/cooksinteriors" className="businesscard-arrow">Cooks Facebook ➔</a>
            </div>
          </div>
          <br />
          <h2>Partnered Creators</h2>
          <div className="partner-container">
            <div className="partner-card">
              <p className="partner-card-name">PacoFiestas</p>
              <LazyImage 
                src={process.env.PUBLIC_URL + "/images/creators/PacoFiestas.webp"} 
                alt="PacoFiestas" 
                className="partner-card-image"
                aspectRatio="1/1"
              />
              <a href="https://linktr.ee/PacoFiestas" target="_blank" className="partner-card-button">Linktree</a>
              <a href="https://www.instagram.com/p/CuyOe9osv-L/?img_index=1 " target="_blank" className="partner-card-button">Commission</a>
            </div>
            <div className="partner-card">
              <p className="partner-card-name">Viviqcutie</p>
              <LazyImage 
                src={process.env.PUBLIC_URL + "/images/creators/Viviqcutie.webp"} 
                alt="Viviqcutie" 
                className="partner-card-image"
                aspectRatio="1/1"
              />
              <a href="https://linktr.ee/viviqcutie" target="_blank" className="partner-card-button">Linktree</a>
              <a href="https://www.instagram.com/p/CdoFonJDvCC/?next=%2Foec_engineeringcorp%2F&img_index=1" target="_blank" className="partner-card-button">Commission</a>
            </div>
            <div className="partner-card">
              <p className="partner-card-name">Toofer</p>
              <LazyImage 
                src={process.env.PUBLIC_URL + "/images/creators/toofer.webp"} 
                alt="Toofer" 
                className="partner-card-image"
                aspectRatio="1/1"
              />
              <a href="https://toofermixed.carrd.co/" target="_blank" className="partner-card-button">Carrd.co</a>
              <a href="https://www.facebook.com/neetcomputers/posts/pfbid0Mzmcj1P9DgS7SQZ2zsBGgc99bMKEPpyvibXi6v5HQ9jd8Fo1DvNWUJDHRJ5n5Z3dl" target="_blank" className="partner-card-button">Commission</a>
            </div>
            <div className="partner-card">
              <p className="partner-card-name">Firebunny</p>
              <LazyImage 
                src={process.env.PUBLIC_URL + "/images/creators/firebunny.webp"} 
                alt="Firebunny" 
                className="partner-card-image"
                aspectRatio="1/1"
              />
              <a href="https://www.twitch.tv/firebunbun" target="_blank" className="partner-card-button">Twitch.tv</a>
              <a href="https://www.facebook.com/jade.isler/posts/pfbid02S41RFZpdLMDaRSXayejScDoDSTjzzsx2crsgQ2BtLQik5ZoDRsCjXmN4VS6DvQBrl" target="_blank" className="partner-card-button">Commission</a>
            </div>
            <div className="partner-card">
              <p className="partner-card-name">DeGodTV</p>
              <LazyImage 
                src={process.env.PUBLIC_URL + "/images/creators/degodtv.webp"} 
                alt="DeGodTV" 
                className="partner-card-image"
                aspectRatio="1/1"
              />
              <a href="https://www.twitch.tv/degodtv" target="_blank" className="partner-card-button">Twitch.tv</a>
              <a href="https://www.facebook.com/neetcomputers/posts/995147415997650" target="_blank" className="partner-card-button">Commission</a>
            </div>
            <div className="partner-card">
              <p className="partner-card-name">Motozono</p>
              <LazyImage 
                src={process.env.PUBLIC_URL + "/images/creators/motozono.webp"} 
                alt="Motozono" 
                className="partner-card-image"
                aspectRatio="1/1"
              />
              <a href="https://www.adm2k.com/adm-players/motozono" target="_blank" className="partner-card-button">Player Page</a>
              <a href="https://www.instagram.com/p/Cg3RHC-MCRk/" target="_blank" className="partner-card-button">Commission</a>
            </div>
            <div className="partner-card">
              <p className="partner-card-name">Hysteric</p>
              <LazyImage 
                src={process.env.PUBLIC_URL + "/images/creators/Hysteric.webp"} 
                alt="Hysteric" 
                className="partner-card-image"
                aspectRatio="1/1"
              />
              <a href="https://linktr.ee/hyst.eric_" target="_blank" className="partner-card-button">LinkTree</a>
            </div>
            <div className="partner-card">
              <p className="partner-card-name">Hannah</p>
              <LazyImage 
                src={process.env.PUBLIC_URL + "/images/creators/Hannah.webp"} 
                alt="Hannah" 
                className="partner-card-image"
                aspectRatio="1/1"
              />
              <a href="https://linktr.ee/nhicam17" target="_blank" className="partner-card-button">Linktree</a>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}