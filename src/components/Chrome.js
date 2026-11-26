import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
        <h1><Link to="/">NEET Computers</Link></h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/pay">Pay</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer id="main-footer">
        <div className="footer-columns">
            <div className="footer-navigation">
                <h4>Navigation</h4>
                <Link to="/">Home</Link><br />
                <Link to="/about">About</Link><br />
                <Link to="/reviews">Reviews</Link><br />
                <Link to="/portfolio">Portfolio</Link><br />
            </div>
            
            <div className="footer-policy">
                <h4>Policy</h4>
                <Link to="/services">Service Pricing</Link><br />
                <Link to="/contact">Contact Methods</Link><br />
                <Link to="/pay">Payment Methods</Link><br />
                <Link to="/terms">Terms & Conditions</Link><br />
            </div>

            <div className="footer-contact">
                <h4>Contact us</h4>
                <a>720-432-4280</a><br />
                <a>jade@neet.computer</a><br />
                
                <div className="footer-social">
                    <a href="https://www.facebook.com/neetcomputers" target="_blank"><i className="bi-facebook"></i></a>
                    <a href="https://www.instagram.com/neet_pcs_/" target="_blank"><i className="bi-instagram"></i></a>
                    <a href="https://discordapp.com/users/573627562375512093" target="_blank"><i className="bi-discord"></i></a>
                </div>
            </div>
        </div>

        <div className="footer-legal">
            <p>Site developed with <a href="https://github.com/cawfeekay" target="_blank">@CawfeeKay</a>. <br />
            Our mascot, Violet, is made by our artist <a href="https://echothorns.carrd.co/">@EchoThorns</a>. <br />
            All other content is Copyright ©2026 NEET Computers LLC.</p>
        </div>
	</footer>
  );
}
