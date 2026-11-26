import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { Header, Footer } from './components/Chrome';
import { runPageEffects } from './siteEffects';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Reviews from './pages/Reviews';
import Pay from './pages/Pay';
import Contact from './pages/Contact';
import Mods from './pages/Mods';
import Servers from './pages/Servers';
import Terms from './pages/Terms';
import Workstations from './pages/Workstations';
import Wraps from './pages/Wraps';
import NotFound from './pages/NotFound';

// After every route renders: start at the top (like a fresh page load on the
// static site) and run the behaviors ported from js/main.js.
function RouteEffects() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    runPageEffects();
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <RouteEffects />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about.html" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services.html" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio.html" element={<Portfolio />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews.html" element={<Reviews />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/pay.html" element={<Pay />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact.html" element={<Contact />} />
        <Route path="/mods" element={<Mods />} />
        <Route path="/mods.html" element={<Mods />} />
        <Route path="/servers" element={<Servers />} />
        <Route path="/servers.html" element={<Servers />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/terms.html" element={<Terms />} />
        <Route path="/workstations" element={<Workstations />} />
        <Route path="/workstations.html" element={<Workstations />} />
        <Route path="/wraps" element={<Wraps />} />
        <Route path="/wraps.html" element={<Wraps />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
