// Ported from about.html (static site source).
import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main>
        <h2>Certifications</h2>
        <div className="certifications">
            <img src="/images/certifications/A+.webp" alt="A+ Certified" />
            <img src="/images/certifications/Network+.webp" alt="Network+ Certified" />
            <img src="/images/certifications/Security+.webp" alt="Security+ Certified" />
            <img src="/images/certifications/CIOS.webp" alt="CIOS Specialist" />
            <img src="/images/certifications/CSIS.webp" alt="CSIS Specialist" />
        </div>
    <section id="jade" className="about">
    <div className="about-container">
        <div className="row">
            <div className="col-2">
                <h4>Jade</h4>
                <a href="https://www.linkedin.com/in/jadeisler/" style={{ textDecoration: 'none' }}>LinkedIn</a>
                    <p>Jade is the hardware expert and salesmare of the duo. She was gifted her first PC on one condition: 
                    that in addition to her audio engineering and video editing, she would use the computer to play 
                    Counter-Strike. CS is a competitive tactical shooter notorious for being the most 
                    latency-sensitive, neurosis-inducing esport in the world. Consequently, this gift sent Jade down 
                    the rabbit hole of mastering overclocking, network management, and operating system optimization 
                    to eliminate any external variables to her play.</p>
                <button data-fn="toggleExpand" data-arg="jade">Click to Expand</button>
                <div id="jade-content" className="expandable-content">
                    <p>Jade chased her dreams of becoming a Counter-Strike pro, upgrading and tuning both her own PC and network and those of her teammates to ensure that the only limiting reagent was the player. This philosophy carries through to all of her custom builds and commissions, with the goal of removing any restricting factors that may prevent the user from achieving their full potential.</p>    
                    <p>After working for a GPU mining firm, Jade began sniping every good deal on the used market, combining them with snags from the University IT surplus shop to deploy her own small farm at home. Jade hosted and configured servers for her teammates while mastering Linux, LUA, and implementing operational security measures against bad actors. To further fund her endeavors, any excess inventory was used to sell gaming PC’s on the local market. The extra hustle finding the best deals and the additional time tweaking the hardware results in flips possessing unparalleled price-to-performance, an approach that carries through to the present.</p>   
                    <p>Eight years of building hundreds of systems at every price point gives Jade a photographic memory of every CPU and GPU skew from the past two decades, the techniques to unlock their full performance, and the knowledge of how they perform in modern applications.</p>
                    <p>In 2024, Jade earned an Associate of Applied Science in Computer Information Systems, 
                        became a <a href="https://lh3.googleusercontent.com/pw/AP1GczNd8Pq6UlFd32c5gM_Ji3gbSjs0q3cRbOLvsFLcJt1-6EY_bRc3ypU9kidyrcJpK35OhAe5dfHN7EBGoD__KATeLcsMZMWO0YQeCAIe6V_ei2dd4cnbTGISFIc1jt8xbuYkJNxp53og9KyEego-ad5x=w1720-h1271-s-no-gm">
                        Certified Network Technician</a>, and earned the additional certificates of Cybersecurity Fundamentals, Networking, 
                        and Web Development (HTML, CSS, Javascript, PHP, SQL). Jade is A+, Networking+, and Security+ Certified by <a href="https://www.credly.com/users/jadeisler">CompTIA</a>.
                        She's a CompTIA Secure Infrastructure 
                        Specialist (CSIS), CompTIA IT Operations Specialist (CIOS), and holds a Level 4 Black Belt 
                        in Microsoft Access (<a href="https://certificates.simnetonline.com/1d6550d2-7b90-4ebc-a2c7-1ada87b3d90a#gs.cp78tk">McGraw Hill</a>). 
                        </p>
                </div>
            </div>
            <div className="col-1">
                <img className="align-right" src="/images/company/jadewitharia2.webp" alt="Jade (left) and Aria (right) at Twenty Ninth Street" />
            </div>
        </div>

        <div className="row">
            <div className="col-1">
                <h4>Aria</h4>
                <a href="https://github.com/ariaisler" style={{ textDecoration: 'none' }}>Github</a>
                <p>Born and raised in Gera, Thuringia, Aria is a German engineered import. With the chancellor’s choice to deploy copper cabling nationwide instead of fiber, her hypersensitivity to latency drove her to optimize all factors within her control. Aria relentlessly tweaked and tuned everything from the TAE connector to the applications running on her local machine and everything in between. Now in Colorado, she’s able to apply these skills towards improving the networks of her clients.</p>
                <button data-fn="toggleExpand" data-arg="aria">Click to Expand</button>
                <div id="aria-content" className="expandable-content">            
                    <p>Aria is a purebred gamer and creative, eager to master any skill that bolsters her in-game experience or is useful to her friends. She mastered Cinema4D to produce realistic three-dimensional YouTube intros with Turbulence FD, V-Ray, and Octane. She learned PAC3 to make custom characters, textures, and animations in GMOD. Autodesk Maya was utilized for more complex models and textures, which combined with her Java expertise to create Minecraft animations. In the Adobe Suite, After Effects and Photoshop were used to decorate her friends’ steam profiles with custom, moving artwork. This was all done in spite of her relatively low-spec, budget hardware, necessitating optimization on every level. Aria’s familiarity with an expanse of creative and workstation applications ensures that every commission is tuned and validated for peak performance in its specific use case.</p> 
                    <p>With a technical degree in economics and business administration, Aria worked for her city’s Stadtverwaltung, handling local taxes ranging from property and sales to the fee you have to pay for owning a dog. Now finally across the pond, Aria has fallen in love with America and American values. In fact, she’s gone so far as to learn the tax codes of Boulder City, Boulder County, Colorado, and the federal government, all to take care of the accounting.</p>
                    <p>In short, Aria is the software expert, keeping everything in order behind the scenes, with her impeccable intuition and acute pattern recognition finding solutions at otherwise dead ends. She is a CompTIA Secure Infrastructure Specialist (CSIS) and a CompTIA IT Operations Specialist (CIOS) with a Level 4 Black Belt in Microsoft Access (<a href="https://certificates.simnetonline.com/e6eb38f8-986c-4123-9e44-02560232a6cd#gs.cp79yq">McGraw Hill</a>). Aria’s earning her Associates of Applied Science in Programming (Spring 2025), a Certificate in Programming from Front Range Community College (C++, C, C#, Python, Java), and is <a href="https://www.credly.com/users/aria-isler">CompTIA Certified</a> in A+, Network+, and Security+.</p>
                </div>
            </div>
            <div className="col-2">
                <img className="align-right" src="/images/company/jadewitharia.webp" alt="Jade (left) and Aria (right) at Pearl Street" />
            </div>
        </div>
        <div className="row centered-image">
            <div className="love-story-text">
                <h4>Love Story</h4>
                <p>Jade and Aria met on Steam in the summer of 2018, immediately connecting over their mutual games and passion for technology. They fell in love over countless clutches in Wingmare and spent the next two years enjoying CS:GO, computer hardware YouTube videos, and legally acquired anime over whatever ping Valve and Discord would allow across the Atlantic Ocean.</p>
                <button data-fn="toggleExpand" data-arg="love-story">Click to Expand</button>
                <div id="love-story-content" className="expandable-content">
                    <p>When COVID restrictions saw Jade move back with her family and the travel ban compromised Aria’s first visit to the United States, determination to set up for the future climaxed. Twenty-something year olds living in their mom’s basement do not have the highest success rate in turning a long-distance relationship (LDR) into a happy end. This is especially true when they are Not in Education, Employment, or Training (a NEET). Therefore, to obtain the taxable income necessary to sponsor Aria’s green card, Jade made her computer build and repair hustle a legal business, registering the basement as NEET Computers LLC.</p> 
                    <p>After enduring four years of LDR, Jade proposed to Aria in the case aisle of the <a href="https://maps.app.goo.gl/wuNFzyhgEsyggpBg6" target="_blank" rel="noopener noreferrer">Denver Micro Center</a>. They would marry less than a year later in a romantic Zoom call with the Boulder County Clerk.</p>
                    <p>Since then, Aria and Jade continue to grow the scope of NEET Computers, expanding from a focus on gaming, streaming, and workstation PC’s to mastering TrueNAS, Windows Server, and Linux to deploy business and enterprise solutions. Today, most of their work is commissions and IT for local businesses, with excess inventory turned into custom builds listed on their <a href="https://www.facebook.com/neetcomputers" target="_blank" rel="noopener noreferrer">Facebook page</a>, <a href="https://offerup.com/p/48780284" target="_blank" rel="noopener noreferrer">Offerup</a>, <a href="https://nextdoor.com/pages/neet-computers-boulder-co/" target="_blank" rel="noopener noreferrer">Nextdoor</a>, <a href="https://boulder.craigslist.org/search/sss?userpostingid=7760524008" target="_blank" rel="noopener noreferrer">Craigslist</a>, <a href="https://www.facebook.com/marketplace/profile/100024614416481/" target="_blank" rel="noopener noreferrer">Facebook Marketplace</a>, and <a href="https://www.instagram.com/neet_pcs_/shop" target="_blank" rel="noopener noreferrer">Instagram store</a>.</p>
                    <p>In 2025, NEET Computers was awarded the Transgender and Gender Expansive (TGX) Scholarship by Wells Fargo, approved as a Certified LGBT Business Enterprise by NGLCC, and accepted as a Small Business Member of the <a href="https://business.colgbtqcc.org/list/member/neet-computers-llc-2386" target="_blank" rel="noopener noreferrer">Colorado LGBTQ Chamber of Commerce.</a> This website is built, configured, deployed, and hosted locally by Aria and Jade.</p>
                </div>
            </div>
            <div className="image-container">
                <img src="/images/company/engaged.webp" alt="Jade and Aria getting engaged at Micro Center" />
                </div>
            </div>
            <br />
            <div className="member-badge">
                <div id="mni-membership-638725942868104156">
                    <div className="mn-widget-member">
                        <div className="mn-widget-member-name" style={{ textAlign: 'center' }}>NEET Computers LLC</div>
                        <div className="mn-widget-member-text" style={{ textAlign: 'center' }}>Proud Member of</div>
                        <br />
                        <div className="mn-widget-member-assoc">
                            <a href="https://business.colgbtqcc.org/list/member/neet-computers-llc-2386" target="_blank" className="mn-widget-member-link">
                                <img src="/images/partners/CLBGTQCOC_PrimaryLogo-5.webp" alt="Colorado LGBTQ Chamber of Commerce" title="Colorado LGBTQ Chamber of Commerce" className="mn-widget-member-logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="certificate-bar">
                <br />
                <img src="/images/certifications/NGLCC_business_enterprise_wt.webp" alt="Certified NGLCC LGBTBE Business Enterprise" />
                <br />
            </div>
        </div>           
    </section>
</main>
  );
}
