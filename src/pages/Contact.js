// Ported from contact.html (static site source).
import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <main>
        <div className="social-media-contact">
            <h2>Feel Free to DM us on Facebook or Instagram!</h2>
            <div className="social-icons">
                <a href="https://www.facebook.com/neetcomputers">
                    <div className="facebook-logo">
                    <img src={process.env.PUBLIC_URL + "/images/ui-icons/facebook.webp"} alt="Facebook" />
                    </div>
                    <p>facebook.com/neetcomputers</p>
                </a>
                <a href="https://www.instagram.com/neet_pcs_/">
                    <div className="instagram-logo">
                    <img src={process.env.PUBLIC_URL + "/images/ui-icons/instagram.webp"} alt="Instagram" />
                    </div>
                    <p>instagram.com/neet_pcs_</p>
                </a>
            </div>
        </div>
        <br />
        <div className="direct-contact">
            <h2>Or contact us here:</h2>
            <div className="contact-methods">
                <div>
                    <img src={process.env.PUBLIC_URL + "/images/ui-icons/messenger.webp"} alt="Facebook Messenger Logo" />
                    <h3>Facebook Messenger</h3>
                    <a href="https://m.me/jade.isler" target="_blank">m.me/jade.isler</a>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/images/ui-icons/email.webp"} alt="Email Logo" />
                    <h3>Email</h3>
                    <a href="mailto:jade@neet.computer">jade@neet.computer</a>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/images/ui-icons/discord.webp"} alt="Discord Logo" />
                    <h3>Discord</h3>
                    <a href="https://discordapp.com/users/573627562375512093">@jadepone</a>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/images/ui-icons/text.webp"} alt="Text Logo" />
                    <h3>Text / Phone</h3>
                    <span>720-432-4280</span>
                </div>
            </div>
        </div>
        <br />
        <br />
        <section className="contact-background">
            <section className="contact-form">
                <h2>Contact Us</h2>
                <form method="POST" action="contact-form.php" id="contact-form">
                    <fieldset className="firstfield">
                        <label htmlFor="first-name"><input id="first-name" type="text" name="first-name" placeholder="First Name" required /></label>
                        <label htmlFor="last-name"><input id="last-name" type="text" name="last-name" placeholder="Last Name" required /></label>
                        <label htmlFor="email"><input id="email" type="email" name="email" placeholder="Email" aria-required="true" /></label>
                        <label htmlFor="phone-number"><input id="phone-number" type="tel" placeholder="Phone Number" name="phone-number" required /></label>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="contact-reason"><select id="contact-reason" name="contact-reason">
                                <option value="">Reason for Contact</option>
                                <option value="Commission Request">Commission Request</option>
                                <option value="Service Request">Service Request</option>
                                <option value="B2B">Business-to-Business Inquiry</option>
                                <option value="Problem with Purchase">Problems with a Purchase</option>
                                <option value="Website Issue">Problem with the Website</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>
                        <label htmlFor="contact-explanation"><textarea rows="3" cols="30" id="contact-explanation" placeholder="Type your reason here" name="contact-text" minLength="20" required></textarea>
                        </label>
                    </fieldset>
                    <div id="status-message"></div>
                    <div id="loading-spinner" style={{ display: 'none' }}>Loading...</div>
                    <input defaultValue="Send Message" type="submit" />
                </form>
            </section>
        </section>
        <br />
    </main>
  );
}
