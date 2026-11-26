// Ported from wraps.html (static site source).
import React from 'react';
import { Link } from 'react-router-dom';

export default function Wraps() {
  return (
    <main>
		<article>
            <h2>Custom Vinyl Wraps</h2>
            <section id="mods" className="showcase">
                <div className="showcase-container">
                    <div className="row">
                        <div className="col-3">
                            <h6>Violet Evergarden NZXT H500 Webserver</h6>
                            <p>The Debian / Apache2 webserver currently hosting this website. An i9-10900KF was chosen for its being the most powerful chip on Intel's legendary Ring Bus architecture. With 10 cores overclocked to 5GHz, the ring locked to 4.6GHz, and 64GB of quad-rank 3600MHz CL16 RAM, this ought to deliver a snappier experience than a third party. We custom painted a factory-OC'd RTX 3070 white for hardware-accelerated HTTPS encryption / decryption, custom vinyl wrapped an NZXT H500 with best girl Violet Evergarden (art by Akiko Takase), and put it all on a 2TB Samsung 970 EVO Plus w/ 2GB of DRAM cache to make the most responsive server possible.
                            </p>
                            <button id="webserver-button" data-fn="toggleExpand" data-arg="webserver">Click to Expand</button>
                            <div id="webserver-content" className="expandable-content">
                                <p>CPU- Intel Core i9-10900KF (10 Cores, 20 Threads, 5.0GHz all-core OC)
                                <br />RAM- 64GB DDR4 in Dual Channel @3600MHz (16-20-20-40-CR2)
                                <br />GPU- Nvidia RTX 3070 ASUS DUAL OC (8GB GDDR6)
                                <br />SSD- 2TB NVME Samsung 970 EVO PLUS SSD
                                <br />HDD- 4TB WD Purple @5400RPM (backups)
                                <br />Mobo- MSI Z490-A PRO ATX Motherboard
                                <br />Cooler- Thermalright FC 140 White
                                <br />PSU- 1000W EVGA SuperNOVA GT
                                <br />Case- NZXT H500
                                </p>
                            </div>
                        </div>
                            <div className="col-4">
                                <div className="carousel showcase-carousel" id="carousel-webserver">
                                    <img src={process.env.PUBLIC_URL + "/images/wraps/violetfront.webp"} className="carousel-image" alt="Violet Evergarden custom vinyl wrap" />
                                    <img src={process.env.PUBLIC_URL + "/images/wraps/violetback.webp"} className="carousel-image" alt="NZXT H500 Custom Vinyl Wrap" />
                                    <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-webserver">&#10094;</button>
                                    <button className="carousel-next" data-fn="nextImage" data-arg="carousel-webserver">&#10095;</button>
                                </div>                  
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="showcase-container">
                        <div className="row">
                            <div className="col-3">
                                <h6>Yuno Gasai 011 Dynamic XL</h6>
                                <p>Commission to upgrade to an 011 Dynamic XL wrapped in Yuno Gasai from Mirai Nikki / Future Diary. The print applied to the rear, top, and tempered glass bezels is on white vinyl, with the stickers put on the tempered glass being a translucent film that's made visible by the PC's interior lighting. 
                                </p>
                                <div id="gasai-content" className="expandable-content">
                                </div>
                            </div>
                                <div className="col-4">
                                    <div className="carousel showcase-carousel" id="carousel-gasai">
                                        <img src={process.env.PUBLIC_URL + "/images/wraps/yunofront.webp"} className="carousel-image" alt="Mirai Nikki custom vinyl wrap" />
                                        <img src={process.env.PUBLIC_URL + "/images/wraps/yunoside.webp"} className="carousel-image" alt="Future Diary custom vinyl wrap" />
                                        <img src={process.env.PUBLIC_URL + "/images/wraps/yunotop.webp"} className="carousel-image" alt="011 Dynamic XL vinyl wrap" />
                                        <img src={process.env.PUBLIC_URL + "/images/wraps/yunoback.webp"} className="carousel-image" alt="Yuno Gasai translucent tempered glass stickers on 011 Dynamic XL case" />
                                        <img src={process.env.PUBLIC_URL + "/images/wraps/yunosetup.webp"} className="carousel-image" aly="Yuno Gasai custom vinyl wrap" />
                                        <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-gasai">&#10094;</button>
                                        <button className="carousel-next" data-fn="nextImage" data-arg="carousel-gasai">&#10095;</button>
                                    </div>                  
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="showcase-container">
                            <div className="row">
                                <div className="col-3">
                                    <h6>Esdeath NZXT H510</h6>
                                    <p>Commission to deliver a system that even the great General Esdeath would be proud of. Asiahorse Crystal aRGB fans and 32GB of 3600MHz G.Skill Trident Z Royal RAM compliment her blue ice crystals, while the ASUS STRIX OC RTX 2080 TI and i5-12600K oc'd to 5GHz embody her relentless strength.
                                    </p>
                                    <button id="esdeath-button" data-fn="toggleExpand" data-arg="esdeath">Click to Expand</button>
                                    <div id="esdeath-content" className="expandable-content">
                                        <p>Specifications:
                                            <br />GPU- Nvidia RTX 2080 TI ASUS STRIX OC (w/ 11GB GDDR6)
                                            <br />CPU- Intel Core i5-12600K (10 cores, 16 Threads @5GHz)
                                            <br />RAM- 32GB Trident Z Royal DDR4 in Dual Channel @3600MHz (18-22-22-40-CR2)
                                            <br />SSD- 2TB NVME Samsung 970 EVO PLUS Solid State Drive
                                            <br />Mobo- Asus PRIME Z690-P D4 ATX Motherboard
                                            <br />PSU- 850 Watt XPG Core Reactor Power Supply (80+ Gold Certified)
                                            <br />Case- Custon Esdeath Vinyl Wrapped NZXT H510 ATX Mid-Tower w/ Two Crystal AsiaHorse aRGB Fans and Two White 140mm AsiaHorse aRGB Fans
                                            <br />Cooler- Thermalright Frost Spirit 140 White V3 ARGB w/ One White Thermalright TL-D14W-S aRGB Fan
                                            <br />OS- Windows 11 Professional(latest version, activated)
                                            <br />Connectivity- 2.5Gb LAN, Dual-Band WiFi, Bluetooth 4.0
                                        </p>
                                    </div>
                                </div>
                                    <div className="col-4">
                                        <div className="carousel showcase-carousel" id="carousel-esdeath">
                                            <img src={process.env.PUBLIC_URL + "/images/wraps/esdeathfront.webp"} className="carousel-image" alt="Esdeath vinyl wrap" />
                                            <img src={process.env.PUBLIC_URL + "/images/wraps/esdeathside.webp"} className="carousel-image" alt="Akame Ga Kill vinyl wrap" />
                                            <img src={process.env.PUBLIC_URL + "/images/wraps/esdeathtop.webp"} className="carousel-image" alt="Esdese vinyl wrap" />
                                            <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-esdeath">&#10094;</button>
                                            <button className="carousel-next" data-fn="nextImage" data-arg="carousel-esdeath">&#10095;</button>
                                        </div>                  
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="showcase-container">
                                <div className="row">
                                    <div className="col-3">
                                        <h6>Abalone Shell NZXT H7</h6>
                                        <p>Commission  with our best attempt at a trippy abalone shell wrap, i9-12900K OC'd to 5.4GHz boost, 64GB of DDR5 tuned to 5600MHz CL32, and a factory-overclocked RTX 3070 further pushed to TI speeds.
                                        </p>
                                        <button id="shell-button" data-fn="toggleExpand" data-arg="shell">Click to Expand</button>
                                        <div id="shell-content" className="expandable-content">
                                            <p>Specifications:
                                            <br />GPU- Nvidia RTX 3070 Gigabyte Vision OC (w/ 8GB GDDR6)
                                            <br />CPU- Intel Core i9-12900K (16 Cores, 24 Threads @ up to 5.4GHz)
                                            <br />RAM- 64GB G.SKILL Ripjaws S5 DDR5 in Dual Channel @5600MHz (32-34-34-76-CR2)
                                            <br />SSD- 2TB NVME Solidigm P41 PLUS Gen 4 Solid State Drive
                                            <br />Mobo- Asus PRIME Z790-V WIFI ATX Motherboard
                                            <br />PSU- 1000 Watt Corsair RM 1000 Power Supply (80+ Gold Certified) w/ White Sleeved Cable Extensions
                                            <br />Case- Custon Vinyl Wrapped NZXT H7 ATX Mid-Tower w/ Three White Thermalright aRGB Fans One 140mm White Asiahorse aRGB Fan
                                            <br />Cooler- 360MM NZXT Kraken Elite RGB AIO Liquid Cooler
                                            <br />OS- Windows 11 Professional (latest version, activated)
                                            <br />Connectivity- Gigabit LAN, Dual-Band WiFi, Bluetooth 5.0
                                            </p>
                                        </div>
                                    </div>
                                        <div className="col-4">
                                            <div className="carousel showcase-carousel" id="carousel-shell">
                                                <img src={process.env.PUBLIC_URL + "/images/wraps/shellfront.webp"} className="carousel-image" alt="Abalone shell wrap on NZXT H7 case" />
                                                <img src={process.env.PUBLIC_URL + "/images/wraps/shellback.webp"} className="carousel-image" alt="NZXT H7 vinyl wrap" />
                                                <img src={process.env.PUBLIC_URL + "/images/wraps/shellside.webp"} className="carousel-image" alt="Side view of Abalone shell wrap on NZXT H7 case" />
                                                <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-shell">&#10094;</button>
                                                <button className="carousel-next" data-fn="nextImage" data-arg="carousel-shell">&#10095;</button>
                                            </div>                  
                                        </div>
                                    </div>
                                </div>
                                <br />
                            <div className="showcase-container">
                                <div className="row">
                                    <div className="col-3">
                                        <h6>Neko Lian Li Lancool 205M</h6>
                                        <p>Gaming and streaming build commissioned by @viviqcutie.
                                        </p>
                                        <button id="neko-button" data-fn="toggleExpand" data-arg="neko">Click to Expand</button>
                                        <div id="neko-content" className="expandable-content">
                                            <p>Specifications:
                                            <br />GPU- Nvidia RTX 3060 TI ASUS KO (w/ 8GB GDDR6)
                                            <br />CPU- AMD Ryzen 5 5600X (6 cores, 12 Threads @up to 4.725GHz)
                                            <br />RAM- 32GB TeamGroup T-Force Delta White DDR4 in Dual Channel @3600MHz (16-21-21-42-CR1)
                                            <br />SSD- 1TB NVME Samsung 970 Evo Plus Solid State Drive
                                            <br />HDD- 1TB Western Digital Blue 7200RPM Hard Drive
                                            <br />Mobo- Asrock B550M Pro4 Micro-ATX Motherboard
                                            <br />PSU- 850 Watt Corsair RMX White Dell Power Supply (80+ Gold Certified)
                                            <br />Case- Custom Vinyl Wrapped Lian Li 205m Micro-ATX Mid-Tower w/ Two NZXT Aer2 White aRGB Fans and One Enermax White aRGB Fan
                                            <br />Cooler- 240mm NZXT Kraken Z53 RGB White AIO Liquid Cooler w/ Two Enermax White aRGB fans
                                            <br />OS- Windows 10 Professional(latest version, activated)
                                            <br />Connectivity- Gigabit LAN, Dual-Band WiFi, Bluetooth
                                            </p>
                                        </div>
                                    </div>
                                        <div className="col-4">
                                            <div className="carousel showcase-carousel" id="carousel-neko">
                                                <img src={process.env.PUBLIC_URL + "/images/wraps/nekofront.webp"} className="carousel-image" alt="Neko-themed wrap on Lian Li Lancool 205M case" />
                                                <img src={process.env.PUBLIC_URL + "/images/wraps/nekoback.webp"} className="carousel-image" alt="Back view of Neko-themed wrap on Lian Li Lancool 205M case" />
                                                <img src={process.env.PUBLIC_URL + "/images/wraps/nekoside.webp"} className="carousel-image" alt="Side view of Neko-themed wrap on Lian Li Lancool 205M case" />
                                                <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-neko">&#10094;</button>
                                                <button className="carousel-next" data-fn="nextImage" data-arg="carousel-neko">&#10095;</button>
                                            </div>                  
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="showcase-container">
                                    <div className="row">
                                        <div className="col-3">
                                            <h6>Yuno Gasai Fractal Torrent</h6>
                                            <p>Finally upgraded my personal workstation to 12th gen, with every other component being brought up to spec. The i9-12900K is pushed to 5.2GHz on its P-cores, 64GB of Trident Z RGB is overclocked to 3733MHz CL16, 8TB of NVME storage (6TB being gen 4) is made possible by the Z690 platform, and my RTX 3090 Suprim X no longer needs its undervolt.
                                            </p>
                                            <button id="torrent-button" data-fn="toggleExpand" data-arg="torrent">Click to Expand</button>
                                            <div id="torrent-content" className="expandable-content">
                                                <p>This is all thanks to the Fractal Torrent case, whose direct bottom intake 180mm fans dropped my GPU temps by 18 degrees vs my former NZXT H710i. It's a perfect pair for the Corsair H170i 420mm AIO liquid cooler, which handles a sustained 260w CPU heat load without breaking 90c. The stock Fractal case fans have even higher CFM and static pressure than the ones Corsair give you, so they're in push-pull with a few SP140's. 
                                                </p>
                                            </div>
                                        </div>
                                            <div className="col-4">
                                                <div className="carousel showcase-carousel" id="carousel-torrent">
                                                    <img src={process.env.PUBLIC_URL + "/images/wraps/jadefront.webp"} className="carousel-image" alt="Front view of Yuno Gasai-themed wrap on Fractal Torrent case" />
                                                    <img src={process.env.PUBLIC_URL + "/images/wraps/jadetop.webp"} className="carousel-image" alt="Top view of Yuno Gasai-themed wrap on Fractal Torrent case" />
                                                    <img src={process.env.PUBLIC_URL + "/images/wraps/jadeback.webp"} className="carousel-image" alt="Back view of Yuno Gasai-themed wrap on Fractal Torrent case" />
                                                    <img src={process.env.PUBLIC_URL + "/images/wraps/jadeside.webp"} className="carousel-image" alt="Side view of Yuno Gasai-themed wrap on Fractal Torrent case" />
                                                    <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-torrent">&#10094;</button>
                                                    <button className="carousel-next" data-fn="nextImage" data-arg="carousel-torrent">&#10095;</button>
                                                </div>                  
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                <div className="showcase-container">
                                    <div className="row">
                                        <div className="col-3">
                                            <h6>Displacer Beast NZXT H510i</h6>
                                            <p>Commissioned build to deliver beastly performance on a budget. At the heart is an i5-10600K overclocked to 5GHz across its six cores and twelve threads. 32GB of 3600MHz RAM, a 1TB NVME SSD, and a 4TB Optane-Accelerated hard disk ensure a responsive and versatile desktop. Finally, an RTX 3060 TI provides the horsepower for high-refresh-rate 1080p gaming and streaming.
                                            </p>
                                            <button id="displacer-button" data-fn="toggleExpand" data-arg="displacer">Click to Expand</button>
                                            <div id="displacer-content" className="expandable-content">
                                                <p>Art credits to John Tedrick, Halycon450, and the DnD Monster Manual (4th Edition)
                                                <br />https://www.deviantart.com/halycon450/art/Displacer-Beast-948095797
                                                <br />https://www.artstation.com/artwork/ZKD8m
                                                </p>
                                                <p>Specifications:
                                                <br />GPU- Nvidia RTX 3060 TI DELL (w/ 8GB GDDR6)
                                                <br />CPU- Intel Core i5-10600K (6 cores, 12 Threads @5GHz)
                                                <br />RAM- 32GB Oloy OWL RGB DDR4 in Dual Channel @3600MHz (17-21-21-40-CR2)
                                                <br />SSD- 1TB NVME Inland QN322 Solid State Drive
                                                <br />SSHD- Intel Optane M10 16gb M.2 + 4TB Western Digital Purple 5400RPM HDD
                                                <br />Mobo- MSI Z490 PLUS ATX Motherboard
                                                <br />PSU- 750 Watt Corsair CX750M Power Supply (80+ Bronze Certified)
                                                <br />Case- NZXT H510i ATX Mid-Tower w/ One 140mm Cooler Master Fan and One 120mm AVC Fan
                                                <br />Cooler- 280mm ID-COOLING Frost Flow AIO Liquid Cooler w/ Two 140mm ID-COOLING Fans
                                                <br />OS- Windows 10 Professional (latest version, activated)
                                                <br />Connectivity- Gigabit LAN                                                                                                    </p>
                                            </div>
                                        </div>
                                            <div className="col-4">
                                                <div className="carousel showcase-carousel" id="carousel-displacer">
                                                    <img src={process.env.PUBLIC_URL + "/images/wraps/displacerfront.webp"} className="carousel-image" alt="Front view of Displacer Beast-themed wrap on NZXT H510i case" />
                                                    <img src={process.env.PUBLIC_URL + "/images/wraps/displacerback.webp"} className="carousel-image" alt="Back view of Displacer Beast-themed wrap on NZXT H510i case" />
                                                    <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-displacer">&#10094;</button>
                                                    <button className="carousel-next" data-fn="nextImage" data-arg="carousel-displacer">&#10095;</button>
                                                </div>                  
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                <div className="showcase-container">
                    <div className="row">
                        <div className="col-3">
                            <h6>Custom Loop with Wrapped Waterblock</h6>
                                <p>Commission to execute a dual-radiator custom soft loop in a Corsair 500D. As the GPU was originally a Gigbyte Aorus XTREME, we took inspiration from their Waterforce WB line to wrap the OCCOOL block in a similar aesthetic.</p>
                                <button id="CLC-button" data-fn="toggleExpand" data-arg="CLC">Click to Expand</button>
                                <div id="CLC-content" className="expandable-content">    
                                <p>GPU- Nvidia RTX 2080 Ti Gigabyte AORUS XTREME (w/ 11GB GDDR6)
                                <br />GPU Block- Alphacool Eisblock Aurora GPX-N GPU Water Block (w/ custom Aorus Eagle vinyl wrap)
                                <br />CPU- Intel Core i9-9900K (8 cores, 16 Threads @ up to 5.2GHz)
                                <br />RAM- 32GB G.SKILL Trident Z RGB DDR4 in Dual Channel @3600MHz (16-19-19-39-CR2)
                                <br />SSD- 2TB NVME Crucial P2 Solid State Drive
                                <br />SSHD- 2TB (16GB Intel Optane M.2 Memory Module + 2TB Seagate Barracuda 7200RPM Hard Drive)
                                <br />Mobo- Gigabyte Z390 AORUS MASTER ATX Motherboard
                                <br />PSU- 850 Watt G.SKILL RIPJAWS PS850G Power Supply (80+ Gold Certified)
                                <br />Case- Corsair 500D RGB SE ATX Mid-Tower w/ 12v RGB Strip
                                <br />CPU Block/Pump- Alphacool Eisbaer Solo Chrome water block with integrated 100 liters per hour DC-LT 2600RPM Pump
                                <br />Reservoir and 2nd Pump- Bykski CP-PA-X-CT60-V2 aRGB with 300 liters per hour Pump
                                <br />Radiators- 280mm Corsair Hydro X Radiator (top), 240mm Corsair Hydro X Radiator in push-pull (front)
                                <br />Fans- Eight aRGB Corsair Fans (4x LL120, 2x SP120, 2x SP140)
                                <br />Coolant- Clear EKWB EK-CryoFuel Concentrate Coolant
                                <br />Hub- iCUE Commander PRO Smart RGB Lighting and Fan Speed Controller
                                <br />Fittings- Ten Alphacool Chrome Fittings (6x 90 Degree, 2x Straight, 2x 45 Degree)
                                </p>
                                </div>
                        </div>
                        <div className="col-4">
                            <iframe width="9999" height="9999" src="https://www.youtube.com/embed/flIy_ODrcIo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
                <br />
                <div className="showcase-container">
                    <div className="row">
                        <div className="col-3">
                            <h6>D.VA Overwatch DIYPC DIY-D2-RGB-W</h6>
                            <p>Commission build featuring D.Va from Overwatch, packing an RTX 2070 Super, Ryzen 7 3700X, 1TB NVME SSD, and 32GB of RAM oc'd to 3333MHz.
                            </p>
                            <button id="dva-button" data-fn="toggleExpand" data-arg="dva">Click to Expand</button>
                            <div id="dva-content" className="expandable-content">
                                <p>Specifications:
                                <br />GPU- Nvidia RTX 2070 SUPER MSI Ventus OC w/ Custom D.VA Vinyl Wrap (w/ 8GB GDDR6)
                                <br />CPU- AMD Ryzen 7 3700X (8 cores, 16 Threads @ up to 4.5GHz)
                                <br />RAM- 32GB TeamGroup T-Force Delta RGB White DDR4 in Dual Channel @3466MHz (16-18-18-36-CR2)
                                <br />SSD- 1TB NVME Micron 2300 Solid State Drive
                                <br />Mobo- ASUS PRIME B550M-A AC Micro-ATX Motherboard
                                <br />PSU- 650 Watt Corsair CX650M Power Supply (80+ Bronze Certified)
                                <br />Case- DIYPC DIY-D2-RGB-W White Steel Custom D.VA Vinyl Wrap ATX Mid-Tower w/ Three upHere White aRGB Fans
                                <br />Cooler- 240MM ID-COOLING PINKFLOW 240X AIO Liquid Cooler w/ Two ID-COOLING aRGB LED Fans
                                <br />OS- Windows 10 Enterprise(latest version, activated)
                                <br />Connectivity- Gigabit LAN, Dual-Band WiFi, Bluetooth 5
                                </p>
                            </div>
                        </div>
                            <div className="col-4">
                                <div className="carousel showcase-carousel" id="carousel-dva">
                                    <img src={process.env.PUBLIC_URL + "/images/wraps/dvafront.webp"} className="carousel-image" alt="Front view of D.VA-themed wrap on DIYPC case" />
                                    <img src={process.env.PUBLIC_URL + "/images/wraps/dvatop.webp"} className="carousel-image" alt="Top view of D.VA-themed wrap on DIYPC case" />
                                    <img src={process.env.PUBLIC_URL + "/images/wraps/dvasetup.webp"} className="carousel-image" alt="Full setup view featuring D.VA-themed wrap on DIYPC case" />
                                    <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-dva">&#10094;</button>
                                    <button className="carousel-next" data-fn="nextImage" data-arg="carousel-dva">&#10095;</button>
                                </div>                  
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="showcase-container">
                        <div className="row">
                            <div className="col-3">
                                <h6>Violet Evergarden Lian Li Lancool 205</h6>
                                <p>Commissioned build to deliver excellent 1080p gaming and streaming performance on a budget. This is enabled by the X99 platform, delivering heaps of PCIe lanes, USB 3.2, NVME support, and stellar performance on older architectures. The i7-5930K is overclocked to 4.4GHz on its six cores and twelve threads with a RING of 4GHz, and thanks to the ASUS Rampage V Extreme motherboard, this i7 can be upgraded to both a ten-core i9 or twenty-two core Xeon down the line. 
                                </p>
                                <button id="evergarden-button" data-fn="toggleExpand" data-arg="evergarden">Click to Expand</button>
                                <div id="evergarden-content" className="expandable-content">
                                    <p>Complimenting the processor and platform is 24GB of quad-channel DDR4 overclocked from 2133MHz to 2800MHz with tightened timings for minimal latency. A 1TB NVME SSD is backed by 4TB of spinning disk storage. The factory-overclocked GTX 1080 provides its horsepower for high-refresh-rate 1080p gaming and its NVENC encoder for streaming. 
                                    </p>
                                    <p>Finally, the Lian Li 205 case is wrapped in my favourite anime ever. Violet Evergarden helped my wife and I better understand each other, better connect through letters, and make it through our international LDR during the pandemic. We even commissioned our business mascot in her namesake.
                                    </p>
                                    <p>Specifications:
                                    <br />GPU- Nvidia GTX 1080 MSI AEORO OC (w/ 8GB GDDR5X)
                                    <br />CPU- Intel Core i7-5930K (6 cores, 12 Threads @4.4GHz)
                                    <br />RAM- 24GB Pny and SK Hynix DDR4 in Quad Channel @2800MHz (16-18-18-36-CR1)
                                    <br />SSD- 1TB NVME Inland QN322 Solid State Drive
                                    <br />HDD- 4TB Western Digital Purple 5400RPM HDD
                                    <br />Mobo- Asus RAMPAGE V EXTREME ATX Motherboard
                                    <br />PSU- 750 Watt Gamdias Kratos P1A Power Supply (80+ Gold Certified)
                                    <br />Case- Custom Vinyl Wrapped Lian Li 205 ATX Mid-Tower w/ Three ID-COOLING aRGB Fans
                                    <br />Cooler- 360mm Enermax LIQMAX III AIO Liquid Cooler w/ Three Enermax aRGB Fans
                                    <br />OS- Windows 10 Professional (latest version, activated)
                                    <br />Connectivity- Gigabit LAN, Dual-Band WiFi, Bluetooth 4.0                                        
                                    </p>
                                </div>
                            </div>
                                <div className="col-4">
                                    <div className="carousel showcase-carousel" id="carousel-evergarden">
                                        <img src={process.env.PUBLIC_URL + "/images/wraps/violet205front.webp"} className="carousel-image" alt="Front view of Violet Evergarden-themed wrap on Lian Li Lancool 205 case" />
                                        <img src={process.env.PUBLIC_URL + "/images/wraps/violet205back.webp"} className="carousel-image" alt="Back view of Violet Evergarden-themed wrap on Lian Li Lancool 205 case" />
                                        <img src={process.env.PUBLIC_URL + "/images/wraps/violet205side.webp"} className="carousel-image" alt="Side view of Violet Evergarden-themed wrap on Lian Li Lancool 205 case" />
                                        <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-evergarden">&#10094;</button>
                                        <button className="carousel-next" data-fn="nextImage" data-arg="carousel-evergarden">&#10095;</button>
                                    </div>                  
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="showcase-container">
                            <div className="row">
                                <div className="col-3">
                                    <h6>Black Samurai NZXT H510</h6>
                                    <p>Commission by @Synsei2k for a system that excels at high-refresh-rate 1080p gaming while functioning as a PS5 capture and editing rig. At the heart is a Ryzen 5 5600X boosting 200MHz above stock with similarly accelerated infinity fabric thanks to the 32GB of dual-channel 3600MHz RAM. 2x16GB G.Skill Ripjaws V made before 2021, like this kit, is not only dual-rank, but also Samsung B-Die, making this 400MHz overclock a breeze. An Elgato 4k60 Pro capture card is complimented by the Ampere NVENC encoder onboard the factory-overclocked RTX 3060. Every component comes together on a 1TB NVME SSD backed by an additional 4TB spinning disk to make a responsive and capable desktop.
                                    </p>
                                    <button id="sam-button" data-fn="toggleExpand" data-arg="sam">Click to Expand</button>
                                    <div id="sam-content" className="expandable-content">
                                        <p>Specifications:
                                        <br />GPU- Nvidia RTX 3060 Gigabyte Gaming OC (w/ 12GB GDDR6)
                                        <br />CPU- AMD Ryzen 5 5600X (6 cores, 12 Threads @ up to 4.8GHz)
                                        <br />RAM- 32GB G.SKILL RIPJAWS V DDR4 in Dual Channel @3600MHz (16-19-19-38-CR1)
                                        <br />SSD- 1TB NVME Western Digital Blue SN550 Solid State Drive
                                        <br />HDD- 4TB Western Digital Purple 5400RPM Hard Drive
                                        <br />Mobo- MSI B550-A PRO[CEC] ATX Motherboard
                                        <br />PSU- 650 Watt Cooler Master Masterwatt Power Supply (80+ Bronze Certified)
                                        <br />Case- Custon Afro Samurai Wrapped NZXT H510 ATX Mid-Tower w/ Three 140mm Phanteks aRGB Fans  One ID-COOLING XF-12025 aRGB Fan
                                        <br />Cooler- DeepCool Tower Cooler w/ One ID-COOLING XF-12025 aRGB Fan
                                        <br />OS- Windows 10 Professional(latest version, activated)
                                        <br />Connectivity- Gigabit LAN, Dual-Band WiFi, Bluetooth 4.2
                                        </p>
                                    </div>
                                </div>
                                    <div className="col-4">
                                        <div className="carousel showcase-carousel" id="carousel-sam">
                                            <img src={process.env.PUBLIC_URL + "/images/wraps/samfront.webp"} className="carousel-image" alt="Front view of Afro Samurai-themed wrap on NZXT H510 case" />
                                            <img src={process.env.PUBLIC_URL + "/images/wraps/samtop.webp"} className="carousel-image" alt="Top view of Afro Samurai-themed wrap on NZXT H510 case" />
                                            <img src={process.env.PUBLIC_URL + "/images/wraps/samside.webp"} className="carousel-image" alt="Side view of Afro Samurai-themed wrap on NZXT H510 case" />
                                            <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-sam">&#10094;</button>
                                            <button className="carousel-next" data-fn="nextImage" data-arg="carousel-sam">&#10095;</button>
                                        </div>                  
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="showcase-container">
                                <div className="row">
                                    <div className="col-3">
                                        <h6>Naruto Shippuden Itachi and Sasuke Fishtank</h6>
                                        <p>Commissioned build for @DeGodTV for dual-streaming NBA 2K and GTA V in 1080p. The Turing NVENC encoder is capable of such a feat, so an RTX 2070 Super EVGA Advanced overclocked to exceed RTX 2080 / RTX 4060 performance was perfect price/performance for the job, pushing plenty frames in those titles. At the heart is a Ryzen 7 5800X unleashed with precision boost overdrive to exceed 4.9GHz, paired with 64GB of dual-channel, quad-rank RAM tuned to 3333MHz with tightened, low-latency timings. Every component comes together on a 2TB Gen 4 NVME SSD to make a performant and versatile desktop.
                                        </p>
                                        <button id="degod-button" data-fn="toggleExpand" data-arg="degod">Click to Expand</button>
                                        <div id="degod-content" className="expandable-content">
                                            <p>Specifications:
                                            <br />GPU- Nvidia RTX 2070 SUPER ASUS STRIX GAMING ADVANCED (w/ 8GB GDDR6)
                                            <br />CPU- AMD Ryzen 7 5800X (8 cores, 16 threads @4.9GHz)
                                            <br />RAM- 64GB DDR4 Timetec Pinnacle Konduit in Dual Channel @3333MHz (16-18-18-36-CR1)
                                            <br />SSD- 2TB NVME PHIXERO P5000 Gen 4 Solid State Drive
                                            <br />Mobo- ASUS ROG STRIX B550-F GAMING ATX Motherboard
                                            <br />PSU- 750 Watt EVGA GA Power Supply (80+ Gold Certified)
                                            <br />Case- Custom Vinyl Wrapped Sama Newview 2351 ATX Mid-Tower
                                            <br />Cooler- 360mm Thermalright Frozen Notte 360 AIO Liquid Cooler
                                            <br />OS- Windows 11 Professional(latest version, activated)
                                            <br />Connectivity- 2.5Gb LAN
                                            </p>
                                        </div>
                                    </div>
                                        <div className="col-4">
                                            <div className="carousel showcase-carousel" id="carousel-degod">
                                                <img src={process.env.PUBLIC_URL + "/images/wraps/degodfront.webp"} className="carousel-image" alt="Front view of Naruto Shippuden Itachi and Sasuke-themed wrap on fishtank case" />
                                                <img src={process.env.PUBLIC_URL + "/images/wraps/degodback.webp"} className="carousel-image" alt="Rear view of Naruto Shippuden Itachi and Sasuke-themed wrap on fishtank case" />
                                                <img src={process.env.PUBLIC_URL + "/images/wraps/degodside.webp"} className="carousel-image" alt="Side view of Naruto Shippuden Itachi and Sasuke-themed wrap on fishtank case" />
                                                <img src={process.env.PUBLIC_URL + "/images/wraps/degodfront2.webp"} className="carousel-image" alt="Clear Front view of Naruto Shippuden Itachi and Sasuke-themed wrap on fishtank case" />
                                                <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-degod">&#10094;</button>
                                                <button className="carousel-next" data-fn="nextImage" data-arg="carousel-degod">&#10095;</button>
                                            </div>                  
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="showcase-container">
                                    <div className="row">
                                        <div className="col-3">
                                            <h6>Mobile Workstation for Echo</h6>
                                            <p>After over five years of working with creators, we finally delivered our first fully sponsored system! This mobile workstation is going to our beloved artist / streamer / vTuber EchoThorns, the talent behind our business mascot Violet, who's on our logo, website, custom software, and PC listings. Hustled from the local used market for just a few hundred dollars, this Gigabyte AERO 15S OLED SA should deliver everything needed continue her work even when away from her desktop.
                                            </p>
                                            <button id="echo-button" data-fn="toggleExpand" data-arg="echo">Click to Expand</button>
                                            <div id="echo-content" className="expandable-content">
                                                <p>At the heart is an i7-9750H with six cores and twelve threads boosting up to 4.5GHz and a modern Quicksync transcoder to accelerate Adobe applications. It's paired with a GTX 1660 TI, capable of playing the older games Echo enjoys on her streams with good performance. More importantly, it possesses the same Turing NVENC encoder as the RTX 2080 TI, enabling high-quality broadcasting at the same time as accelerating DesignDoll and Photoshop with its CUDA capabilities. 
                                                </p>
                                                <p>We repaired the keyboard and upgraded the memory and storage appropriately. The RAM is upgraded to the best 32GB dual-channel, dual-rank kit supported by the unit, sporting the tightest CL16 timings allowed by JDEC. The NVME SSD is also swapped to a Samsung 970 EVO Plus, the best consumer 1TB Gen 3 NVME available with a gigabyte of DRAM cache. 
                                                </p>
                                                <p>Most significantly, this specific AERO 15S is the superior South American edition, sporting a 4K AMOLED display that's been factory-calibrated for perfect color accuracy and and a Thunderbolt 3 port for high-bandwidth peripherals. As always, huge thanks to Kevin and Adam at Front Range Vital Signs for the stellar vinyl print and application.
                                                </p>
                                                <p>Hooves crossed for Echo as she continues to grow as a creator; hoping to do more of these in the future! The way I see it, even if their reciprocal efforts to promote my business don't generate any leads, sponsoring creators is still the best advertising, as the worst case scenario is that I've helped a fellow entrepreneur.
                                                </p>
                                            </div>
                                        </div>
                                            <div className="col-4">
                                                <div className="carousel showcase-carousel" id="carousel-echo">
                                                    <img src={process.env.PUBLIC_URL + "/images/pcs/58.webp"} className="carousel-image" alt="Vinyl wrapped Gigabyte AERO 15S OLED SA" />
                                                    <img src={process.env.PUBLIC_URL + "/images/wraps/echo2.webp"} className="carousel-image" alt="Custom vinyl wrapped laptop" />
                                                    <img src={process.env.PUBLIC_URL + "/images/wraps/echo3.webp"} className="carousel-image" alt="Mobile workstation for EchoThorns" />
                                                    <img src={process.env.PUBLIC_URL + "/images/wraps/echo4.webp"} className="carousel-image" alt="Gigabyte AERO 15S OLED SA" />
                                                    <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-echo">&#10094;</button>
                                                    <button className="carousel-next" data-fn="nextImage" data-arg="carousel-echo">&#10095;</button>
                                                </div>                  
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                <div className="showcase-container">
                    <div className="row">
                        <div className="col-3">
                            <h6>Yuno Gasai Wrapped 011D XL Setup</h6>
                            <p>Video shot by our client after getting his PC home and set up.</p>
                            <div id="dual-LCD-content" className="expandable-content">
                            </div>
                        </div>
                        <div className="col-4">
                            <iframe width="9999" height="9999" src="https://www.youtube.com/embed/KaR5_JSRcx8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
