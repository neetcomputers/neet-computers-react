// Ported from 404.html (static site source).
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main>
    <div className="container">
            <h2>404 - Page Not Found</h2>
            <img src={process.env.PUBLIC_URL + "/images/company/confused.webp"} alt="Violet did not read the manual. Always read the manual. RTFM." />
            <br />
            <Link to="/" className="no-style-link">Go to Home</Link>
        </div>
    </main>
  );
}
