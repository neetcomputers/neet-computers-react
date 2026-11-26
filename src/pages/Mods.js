// Ported from mods.html (static site source).
import React from 'react';
import { Link } from 'react-router-dom';

export default function Mods() {
  return (
    <main>
        <article>
            <h2>Mods</h2>
            <section id="mods" className="showcase">
                <div className="showcase-container">
                    <div className="row">
                        <div className="col-3">
                            <h6>Dual-LCD 011 Dynamic Mini Mod</h6>
                            <p>White 011 Dynamic Mini dual-LCD mod upgrade, complete with an RTX 3080 Vision OC, 32GB of Trident Z Royal, and a couple packs of Asiahorse crystal fans. Added white carbon vinyl on the rear of the front display to finish the look.</p>
                            <button id="dual-LCD-button" data-fn="toggleExpand" data-arg="dual-LCD">Click to Expand</button>
                            <div id="dual-LCD-content" className="expandable-content">
                                <p>Specifications:
                                    <br />GPU- Nvidia RTX 3080 GIGABYTE VISION OC (w/ 10GB GDDR6X)
                                    <br />CPU- AMD Ryzen 7 5800X (8 Cores, 16 Threads @ up to 4.9GHz)
                                    <br />RAM- 32GB G.Skill Trident Z Royal DDR4 in Dual Channel @3200MHz (16-18-18-38-CR1)
                                    <br />SSD- 2TB NVME Inland Platinum Solid State Drive
                                    <br />Mobo- AsRock B550M Pro4 Micro-ATX Motherboard
                                    <br />PSU- 750 Watt Cooler Master V750 SFX Power Supply (80+ Gold Certified) with White Cable Extensions
                                </p>
                            </div>
                        </div>
                        <div className="col-4">
                            <iframe width="999" height="999" src="https://www.youtube.com/embed/1kqgbVnn-Ho" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
                <div className="showcase-container">
                    <div className="row">
                        <div className="col-3">
                            <h6>Custom Power Switches</h6>
                            <p>Cockpit-style power switch mod on an NZXT H510 commissioned build.</p>
                            <button id="switches-button" data-fn="toggleExpand" data-arg="switches">Click to Expand</button>
                            <div id="switches-content" className="expandable-content">
                                <p>Specifications:
                                    <br />GPU- Nvidia RTX 3070 MSI Gaming X Trio (w/ 8GB GDDR6)
                                    <br />CPU- AMD Ryzen 7 5700X (8 cores, 16 Threads @ up to 4.65GHz)
                                    <br />RAM- 32GB G.SKILL Ripjaws V DDR4 in Dual Channel @3466MHz (16-19-19-38-CR1)
                                    <br />SSD- 1TB NVME Western Digital Blue SN550 Solid State Drive
                                    <br />HDD- 4TB Western Digital Purple 5400RPM Hard Drive
                                    <br />Mobo- MSI X570-A PRO ATX Motherboard
                                    <br />PSU- 850 Watt Seasonic Focus Power Supply (80+ Gold Certified)
                                    <br />Case- Modded NZXT H510 ATX Mid-Tower w/ One 140mm Phanteks aRGB Fans and One ID-COOLING aRGB Fan
                                    <br />Cooler- 280mm DEEP COOL Castle 280EX AIO Liquid Cooler w/ Two 140mm Phanteks aRGB Fans
                                </p>
                            </div>
                        </div>
                        <div className="col-4">
                            <iframe width="999" height="999" src="https://www.youtube.com/embed/jysCMrw7QVk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
                <div className="showcase-container">
                    <div className="row">
                        <div className="col-3">
                            <h6>Front LCD 011 Dynamic Mini Mod</h6>
                            <p>Front panel LCD mod on one of my Lian Li 011 Dynamic Mini builds, packing an RTX 3090 MSI Gaming X Trio on a gen 4 riser, 32GB of 4000MHz DDR4 running a 1:1 fabric ratio with the Ryzen 7 5800X, and a 280MM NZXT Kraken AIO.</p>
                            <div id="front-LCD-content" className="expandable-content">
                            </div>
                        </div>
                        <div className="col-4">
                            <iframe width="999" height="999" src="https://www.facebook.com/plugins/video.php?&amp;href=https%3A%2F%2Fwww.facebook.com%2Fneetcomputers%2Fvideos%2F415907886938539%2F" scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </article>
        <div className="reviews">
            <h5>
             <Link to="/mods">Mods</Link>
             | <Link to="/wraps">Wraps</Link>
             | <Link to="/workstations">Workstations</Link>
             | <Link to="/servers">Servers</Link>
             <br /><Link to="/portfolio">Back to Portfolio</Link>
             </h5>
         </div>
         <br />
	</main>
  );
}
