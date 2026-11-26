// Ported from pay.html (static site source).
import React from 'react';
import { Link } from 'react-router-dom';

export default function Pay() {
  return (
    <main>
        <div className="services-text">
            <article>
                <h2>Fee-Free Methods</h2>
                <p>We accept a variety of payment methods, including cash and the electronic ones listed below.<br />
                If you use one of these payment methods, neither party will be charged additional fees.</p>
                <div className="card-container">
                    <div className="card">
                        <div className="imgCard">
                            <img src={process.env.PUBLIC_URL + "/images/payments/paypal.webp"} alt="PayPal QR Code" />
                        </div>
                        <div className="contentCard">
                            <h2>Paypal</h2>
                            <p>Send as Friends and Family <br />(not Goods and Services)<br /><a href="https://paypal.me/ariaisler">https://paypal.me/ariaisler</a></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgCard">
                            <img src={process.env.PUBLIC_URL + "/images/payments/cashapp.webp"} alt="CashApp QR Code" />
                        </div>
                        <div className="contentCard">
                            <h2>Cashapp</h2>
                            <p><a href="https://cash.app/$M1str3ss">https://cash.app/$M1str3ss</a></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgCard">
                            <img src={process.env.PUBLIC_URL + "/images/payments/zelle.webp"} alt="Zelle logo" />
                        </div>
                        <div className="contentCard">
                            <h2>Zelle</h2>
                            <p>Jade Isler<br /> 210-540-5635<br /> <a href="mailto:islerjade@gmail.com">islerjade@gmail.com</a></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgCard">
                            <img src={process.env.PUBLIC_URL + "/images/payments/venmo.webp"} alt="Venmo QR code" />
                        </div>
                        <div className="contentCard">
                            <h2>Venmo</h2>
                            <p>Send as a Gift<br />(not Goods and Services)<br /><a href="https://venmo.com/u/jadepone">https://venmo.com/u/jadepone</a></p>
                        </div>
                    </div>
                </div>
                <h2>Other Methods</h2>
                <div className="services-text">
                    <p>If you use one of these payment methods, please send an additional 4%
                    <br />on top of the requested amount to compensate for the fees we'll pay.</p>
                </div>
                <div className="card-container">
                    <div className="card">
                        <div className="imgCard">
                            <img src={process.env.PUBLIC_URL + "/images/payments/paypal_business.webp"} alt="PayPal Business QR Code" />
                        </div>
                        <div className="contentCard">
                            <h2>Paypal Business</h2>
                            <p><a href="https://www.paypal.me/neetpc">https://www.paypal.me/neetpc</a></p>
                        </div>
                    </div>
                                        <div className="card">
                        <div className="imgCard">
                            <img src={process.env.PUBLIC_URL + "/images/payments/venmo.webp"} alt="Venmo QR Code" />
                        </div>
                        <div className="contentCard">
                            <h2>Venmo with Fee</h2>
                            <p>Send as Goods and Services<br /><a href="https://venmo.com/u/jadepone">https://venmo.com/u/jadepone</a></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgCard">
                            <img src={process.env.PUBLIC_URL + "/images/payments/paylater.webp"} alt="Paypal Pay Later" />
                        </div>
                        <div className="contentCard">
                            <h2>PayPal Secure Checkout</h2>
                            <p>Paypal, Paypal Pay Later, Venmo, Debit & Credit Cards<br /><a href="https://www.paypal.com/ncp/payment/P4CSBYMG8PQCA">https://paypal.com/ncp/payment/</a></p>
                        </div>
                    </div>
                        <div className="card">
                        <div className="imgCard">
                            <img src={process.env.PUBLIC_URL + "/images/payments/google-pay.webp"} alt="Google Pay logo" />
                        </div>
                        <div className="contentCard">
                            <br />
                            <h2>Google Pay</h2>
                            <p>Secure payments with Google Pay, Debit Cards, & Credit Cards<br />
                            <a href="https://pay.neet.computer/">https://pay.neet.computer/</a></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgCard">
                            <img src={process.env.PUBLIC_URL + "/images/payments/BuyNowPayLater.webp"} alt="BuyNowPayLater logo" />
                        </div>
                        <div className="contentCard">
                            <h2>Buy Now Pay Later</h2>
                            <p>Enter $35 or more, click Google Pay, & use Affirm, Zip, or Klarna<br /><a href="https://pay.neet.computer/">https://pay.neet.computer/</a></p>
                        </div>
                    </div>
                </div>
                <h2>Paypal Checkout</h2>
                    <p>Paypal button supporting Paypal, Paypal Pay Later, Credit Cards, Debit Cards, and Venmo.
                    <br />Please send an extra 4% on top of the requested amount to compensate for fees.</p>
                <div className="paypal-container">
                    
                    <form action="https://www.paypal.com/ncp/payment/P4CSBYMG8PQCA" method="post" target="_top" style={{ display: 'inline-grid', justifyItems: 'center', alignContent: 'start', gap: '0.5rem' }}>
                      <input className="pp-P4CSBYMG8PQCA" type="submit" defaultValue="Send Money Now" />
                      <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
                      <section> Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style={{ height: '0.875rem', verticalAlign: 'middle' }} /></section>
                    </form>
                </div>
            </article>            
        </div>
        <br />
	</main>
  );
}
