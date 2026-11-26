// Ported from workstations.html (static site source).
import React from 'react';
import { Link } from 'react-router-dom';

export default function Workstations() {
  return (
    <main>
		<article>
            <h2>Workstations</h2>
            <section id="mods" className="showcase">
                <div className="showcase-container">
                    <div className="row">
                        <div className="col-3">
                            <h6>UE 5, VR, and 3D Rendering Workstation</h6>
                            <p>Commission to deliver the most performant workstation possible on a $3K budget in Unreal Engine 5, Virtual Reality, and 3D rendering. With an i9-13900K, an RTX 4090, 64GB of RAM, and a 2TB Gen 4 NVME SSD, top-tier performance was a given. Even so, extensive tuning was necessary to ensure decent thermals and noise were achieved without holding back any component.
                            </p>
                            <button id="4090-button" data-fn="toggleExpand" data-arg="4090">Click to Expand</button>
                            <div id="4090-content" className="expandable-content">
                            <p>The 13900K is notoriously hot and power hungry, with even Hardware Unboxed's 420mm AIO liquid cooler being insufficient to prevent throttling, resulting in their chip only scoring 38k points after a 10 minute loop in Cinebench R23. In this system, diligent testing resulted in a 5.7GHz p-core boost / 5.4GHz allcore, 3.8GHz E-core frequency, and 4.5GHz RING clock, rock solid stable at just 1.21v. This brought CPU package power from 350+ watts to below 300, eliminating throttling and resulting in R23 scores exceeding 40k.
                            </p>
                            <p>These frequencies are 100-300MHz higher than the usual Turbo Boost 2.0 tech and match those of Turbo boost Max 3.0 + Adaptive Boost. When considering that a 13900K is usually running a -300MHz AVX offset, this i9 undervolted with a dual-tower cooler faster across the board even compared to Turbo Velocity Boost. 
                            </p>
                            <p>While Raptor Lake does benefit from the bandwidth of DDR5, a well-tuned kit of DDR4 still delivers lower latency and similar performance while saving a hundred bucks. As such, the 64GB of DDR4 is overclocked from 3600MHz CL18-22-22-42 to 3733MHz CL16-21-21-38, with tightened secondary timings resulting in 10 nanoseconds less latency than TechPowerUp's 6GHz CL32 DDR5. 
                            </p>
                            <p>Finally, the PNY XLR8 RTX 4090 may lack a factory overclock, but even this reference board will outperform the best AIB tuned models after some manual tweaking. Der8aur has found Lovelace to be far more voltage limited than power limited, so the absence of a 600 Watt vBios is negligible, with MSI Afterburner's +100% voltage limit resulting in higher sustained frequencies than more power would. Consequently, with maxxed voltage, a custom fan curve, +100MHz core offset to best the STRIX OC, and a stable +1GHz on the VRAM, this PNY card tops the charts in EzBench (UE 5), OctaneBench, and V-Ray when compared to the results of the factory overclocked cards benchmarked by Tech Yes City, EposVox, and the Octane database. It's also really fast in VR and games.
                            </p>
                            <p>
                            <br />Specifications:
                            <br />GPU- Nvidia RTX 4090 PNY XLR8 Gaming VERTO EPIX-X RGB (w/ 24GB GDDR6X)
                            <br />CPU- Intel Core i9-13900K (24 cores, 32 Threads @ up to 5.7GHz)
                            <br />RAM- 64GB G.SKILL Trident Z RGB DDR4 in Dual Channel @3733MHz (16-21-21-38-CR2)
                            <br />SSD- 2TB NVME Inland Performance Plus Gen4 Solid State Drive
                            <br />Mobo- MSI Z690 Gaming Edge WIFI D4 ATX Motherboard
                            <br />PSU- 1300 Watt EVGA G+ Power Supply (80+ Gold Certified)
                            <br />Case- Fractal Design Torrent Black E-ATX Full-Tower w/ Two 180mm Fractal Fans and Three 140mm Fractal Fans and One 140mm Arctic Fan
                            <br />Cooler- DeepCool AK620 Tower Cooler w/ Two DeepCool Fans
                            <br />OS- Windows 11 Professional (latest version, activated)
                            <br />Connectivity- 2.5Gb LAN, WiFi 6, Bluetoot 5.2                                                           
                            </p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="carousel showcase-carousel" id="carousel-4090">
                                <img src="/images/workstations/4090side.webp" className="carousel-image" alt="Side view of UE 5, VR, and 3D Rendering workstation" />
                                <img src="/images/workstations/4090front.webp" className="carousel-image" alt="Front view of UE 5, VR, and 3D Rendering workstation" />
                                <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-4090">&#10094;</button>
                                <button className="carousel-next" data-fn="nextImage" data-arg="carousel-4090">&#10095;</button>
                            </div>            
                        </div>
                    </div>
                </div>
                <br />
                <div className="showcase-container">
                    <div className="row">
                        <div className="col-3">
                            <h6>X399 Threadripper Dual-Boot Workstation</h6>
                            <p>Commission to deliver a crazy amount of CPU multicore performance, memory bandwidth, and storage on the X399 Threadripper platform. At the heart is a TR 2970WX with twenty-four cores and fourty-eight threads unleashed with PBO to achieve 10% more performance than stock with 4.2GHz boost clocks and sustaining 3.8GHz during multi-core torture. It's paired with 128GB of quad-channel, triple-rank DDR4 with tightened timings to achieve DDR5 levels of memory bandwidth. The Threadripper's PCIe lanes are put to good use with Windows 11 installed on the 2TB Raid 0 array of four 500GB Samsung 970 EVO Plus NVME SSD's which combine to deliver PCIe 5.0 NVME speeds. For Kali Linux, an additional 4TB of NVME SSD's are present, as well as seven 4TB hard drives to make a total of 34TB of local storage. Finally, for encoding and CUDA acceleration, the RTX 3070 MSI Ventus 3X OC boasts a 10% boost to its VRAM and a 5% core bump to achieve 3070 TI performance. 
                            </p>
                            <button id="x399-button" data-fn="toggleExpand" data-arg="x399">Click to Expand</button>
                            <div id="x399-content" className="expandable-content">
                            <p>Specifications:
                            <br />GPU- Nvidia RTX 3070 MSI Ventus 3X OC (w/ 8GB GDDR6)
                            <br />CPU- AMD Threadripper 2970WX (24 cores, 48 Threads @ up to 4.2GHz)
                            <br />RAM- 128GB G.SKILL Ripjaw V DDR4 in Quad Channel @2666MHz (16-18-18-36-CR1)
                            <br />SSD- 2TB Raid 0 NVME Array (Four 500GB Samsung 970 EVO Plus
                            <br />SSD- 2TB NVME Fanxiang S550 Pro Solid State Drive
                            <br />SSD- 2TB NVME Intel 670P Solid State Drive
                            <br />SSD- 120GB Kingston Solid State Drive
                            <br />HDD- Seven 4TB Western Digital Purple 5400RPM Hard Drive
                            <br />Mobo- Asrock X399 Professional Gaming ATX Motherboard
                            <br />PSU- 1300 Watt EVGA SuperNOVA G2 Power Supply (80+ Gold Certified)
                            <br />Case- Corsair Vengeance C70 ATX Mid-Tower w/ Two 140mm Noctua Redux Fans and Two 120mm Noctua Redux Fans
                            <br />Cooler- Arctic Freezer 50 TR Dual Tower Cooler
                            <br />OS- Windows 11 Professional(latest version, activated)
                            <br />Connectivity- 10Gb LAN, Dual Gigabit LAN, Dual-Band WiFi, Bluetooth 4.2                                          
                            </p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="carousel showcase-carousel" id="carousel-x399">
                                <img src="/images/workstations/x399side.webp" className="carousel-image" alt="Side view of X399 Threadripper Dual-Boot workstation" />
                                <img src="/images/workstations/x399front.webp" className="carousel-image" alt="Front view of X399 Threadripper Dual-Boot workstation" />
                                <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-x399">&#10094;</button>
                                <button className="carousel-next" data-fn="nextImage" data-arg="carousel-x399">&#10095;</button>
                            </div>            
                        </div>
                    </div>
                </div>
                <br />
                <div className="showcase-container">
                    <div className="row">
                        <div className="col-3">
                            <h6>Ultra-Budget X58 Adobe Suite Workstation</h6>
                            <p>This is my favorite kind of job. The best computer hardware $ could buy in 2010, $200 budget, fix it and make it faster. X58 Sabertooth motherboard, top of the line i7-980X with six cores and twelve threads, maxed out 24GB DDR3 in triple channel (6x4GB).                                
                            </p>
                            <button id="x58-button" data-fn="toggleExpand" data-arg="x58">Click to Expand</button>
                            <div id="x58-content" className="expandable-content">
                            <p>Tuning/Upgrades: 
                            <br />- i7-980X at 3.33GHz stock before, 4.46GHz all-core overclock after
                            <br />- 24GB RAM at 1066MHz before, 1624MHz with tightened secondary timings after
                            <br />- 2132MHz North Bridge before, 3248MHz North Bridge after (synchronous 1:1 with DRAM)
                            <br />- tiny 90mm tower cooler (mounting failed) before, Thermalright Frost Commander 140 after (jerryrigged a half dozen cooler mounts to make it fit LGA 1366)
                            <br />- 250GB Samsung 860 EVO (died) before, 1TB Samsung 870 EVO + 1TB 7200RPM HDD for backup after
                            <br />- 80GB Sata II SSD (died) before, 120GB Sata III SSD as a dedicated 60GB pagefile after
                            <br />- GT 710 + GT 730 before, after, the addition of a GTX 1650 for its CUDA performance, 4GB of GDDR5 VRAM (recommended specification for Premiere), and NVENC for hardware transcoding. Manually overclocked 10%. 
                            <br />
                            <br />All together, a 30% boost in CPU performance (Cinebench R15 exceeds a stock i7-7700K), 30% increase in memory bandwidth (13 nanosecond reduction in system latency), and a 4x multiplier in GPU performance combined with other upgrades to give this legendary platform a life extension. 
                            </p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="carousel showcase-carousel" id="carousel-x58">
                                <img src="/images/workstations/x58side.webp" className="carousel-image" alt="Side view of X58 i7-980X Refurbished Adobe Suite Workstation" />
                                <img src="/images/workstations/x58front.webp" className="carousel-image" alt="Front view of X58 i7-980X Refurbished Adobe Suite Workstation" />
                                <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-x58">&#10094;</button>
                                <button className="carousel-next" data-fn="nextImage" data-arg="carousel-x58">&#10095;</button>
                            </div>            
                        </div>
                    </div>
                </div>
                <div className="showcase-container">
                    <div className="row">
                        <div className="col-3">
                            <h6>Affordable Ableton Music Production and PLS CADD Workstation</h6>
                            <p>Commission to deliver responsive music production in Ableton, good performance in PLS CADD, and smooth 1080p gaming on a $600 budget.
                            Unlike other CAD/CAM applications that prefer hardware acceleration and many CPU cores/threads, PLS CADD more wants as much fast system memory as possible backed by excellent single-core muscle. Ableton isn't CPU demanding, but its experience does benefit significantly from minimal system latency and low memory latency. 
                            </p>
                            <button id="ableton-button" data-fn="toggleExpand" data-arg="ableton">Click to Expand</button>
                            <div id="ableton-content" className="expandable-content">
                            <p>This made the i5-8600K overclocked to 4.8GHz allcore and 4.6GHz cache perfect for the budget, with its Skylake-based ring bus architecture possessing ~10ns less core-to-core and DRAM latency than Ryzen alternatives while providing the desired single-core horsepower. It's paired with 64GB of dual-channel, dual-rank RAM overclocked from 3200MHz CL16-20-20-38 to 3333MHz CL16-18-18-36 to achieve both maximum capacity and under 52ns latency.  
                            <br />Despite being a Dell OEM model, the GTX 1660 TI is a silicon lottery winner that holds a 5% core overclock and a +15% VRAM frequency. Every component comes together on a 1TB NVME SSD backed by an additional 240GB Crucial SSD as a dedicated page file / virtual memory / cache drive.
                            Specifications: 
                            <br />GPU- Nvidia GTX 1660 TI DELL (w/ 6B GDDR6)
                            <br />CPU- Intel Core i5-8600K 6 cores @4.8GHz)
                            <br />RAM- 64GB DDR4 Oloy RGB White in Dual Channel @3333MHz (16-18-18-36-CR2)
                            <br />SSD- 1TB NVME Vansuny Solid State Drive
                            <br />SSD- 240GB Crucial BX200 Solid State Drive
                            <br />Mobo- MSI Z370-A PRO ATX Motherboard
                            <br />PSU- 600 Watt Aresgame AGW Power Supply (80+ Bronze Certified)
                            <br />Case- NZXT Phantom 820 White ATX Mid-Tower
                            <br />Cooler- Thermalright FS140 White V3
                            <br />OS- Windows 10 Professional(latest version, activated)
                            <br />Connectivity- Gigabit LAN, Dual-Band WiFi, Bluetooth 4.2
                            </p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="carousel showcase-carousel" id="carousel-ableton">
                                <img src="/images/workstations/abletonfront.webp" className="carousel-image" alt="Front view of Affordable Ableton Music Production and PLS CADD Workstation" />
                                <img src="/images/workstations/abletonside.webp" className="carousel-image" alt="Side view of Affordable Ableton Music Production and PLS CADD Workstation" />
                                <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-ableton">&#10094;</button>
                                <button className="carousel-next" data-fn="nextImage" data-arg="carousel-ableton">&#10095;</button>
                            </div>            
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="showcase-container">
                    <div className="row">
                        <div className="col-3">
                            <h6>Audiovisual Production on a Budget</h6>
                            <p>Budget workstation commission to deliver solid music production (Ableton), Photoshop, and Premiere editing performance on a limited budget. With Adobe apps utilizing the iGPU of 6th gen processors as an additional hardware encoder via Quicksync Acceleration, the i7-6700 unleashed from its power limits for infinite turbo was a perfect fit. Its eight threads boosting up to 4GHz were plenty to push 64 duplicated tracks in Ableton before any hiccups occur, double of what the Macbook M1 Pro achieves.
                            </p>
                            <button id="able-button" data-fn="toggleExpand" data-arg="able">Click to Expand</button>
                            <div id="able-content" className="expandable-content">
                            <p>The motherboard was similarly perfect for these use cases, with the higher end Realtek ALC1220 chip delivering enthusiast audio performance on this B250 board. The platform even packs an extra USB 3.2 Gen 2 10 gig chip in addition to the chipset's USB 3.0, eliminating USB lane saturation when audio gear is hooked up. With 20GB of dual-channel RAM with tightened (CL13) timings, a GTX 1050 TI providing its NVENC encoder, CUDA acceleration, and 4GB of VRAM for editing, and a 1TB NVME SSD + 1TB HDD storage configuration, every component comes together to make a responsive, capable, bang-for-buck desktop perfectly tuned and configured for its use cases. 
                            </p>
                            <p>Specifications:
                            <br />GPU- Nvidia GTX 1050 TI ASUS Phoenix (w/ 4GB GDDR5)
                            <br />CPU- Intel Core i7-6700 (4 cores, 8 threads @ up to 4.0GHz)
                            <br />RAM- 20GB G.SKILL and Crucial RGB DDR4 in Dual Channel @2133MHz (13-14-14-32-CR1)
                            <br />SSD- 1TB NVME Inland QN322 Solid State Drive
                            <br />HDD- 1TB Seagate Desktop 7200RPM Hard Drive
                            <br />Mobo- Gigabyte GA-Gaming B8 B250 ATX Motherboard
                            <br />PSU- 500 Watt Enermax CyberBron Power Supply (80+ Bronze Certified)
                            <br />Case- AZZA Spectra 280B ATX Mid-Tower w/ Five ID-Cooling aRGB Fans
                            <br />Cooler- DeepCool Gammax Tower Cooler w/ One ID-Cooling aRGB Fan
                            <br />OS- Windows 10 Professional (latest version, activated)
                            <br />Connectivity- Gigabit LAN, WiFi 6E, Bluetooth 5.2                                          
                            </p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="carousel showcase-carousel" id="carousel-able">
                                <img src="/images/workstations/ablefront.webp" className="carousel-image" alt="Front view of audiovisual production workstation" />
                                <img src="/images/workstations/ableside.webp" className="carousel-image" alt="Side view of audiovisual production workstation" />
                                <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-able">&#10094;</button>
                                <button className="carousel-next" data-fn="nextImage" data-arg="carousel-able">&#10095;</button>
                            </div>            
                        </div>
                    </div>
                </div>
                <br />
                <div className="showcase-container">
                    <div className="row">
                        <div className="col-3">
                            <h6>Ultra-Budget Workstation for CAD / CAM</h6>
                            <p>Commission to deliver a CAD/CAM workstation on a $300 budget. At the heart is an FX-8350 with all eight logical cores overclocked to 4.55GHz and kept cool by a Corsair H90 140mm AIO. The RAM, HT Link, and North Bridge are all locked at a synchronous 2.6GHz. The result is single and multi-core performance on par with hexacore Ivy Bridge Xeons. Paired with a GTX 960 optimized for compute and a 512GB SSD, this rig CAM do it.
                            </p>
                            <button id="UltraBudget-button" data-fn="toggleExpand" data-arg="UltraBudget">Click to Expand</button>
                            <div id="UltraBudget-content" className="expandable-content">
                            <p>
                            <br />Specifications:
                            <br />GPU- Nvidia GTX 960 (EVGA, 2GB GDDR5)
                            <br />CPU- AMD FX 8350 (8 cores, 8 Threads @4.55GHz)
                            <br />RAM- 16GB Corsair Vengeance Pro DDR3 in Dual Channel @2649MHz (CL12-14-14-28-CR2)
                            <br />SSD- 512GB Inland Professional Solid State Drive
                            <br />Mobo- ASUS CROSSHAIR V FORMULA-Z ATX Motherboard
                            <br />PSU- 750 Watt Corsair CX750 Power Supply (80+ Bronze Certified)
                            <br />Case- NZXT H510 ATX Mid-Tower w/ One Red Arc Fan and One 140mm EVGA Fan
                            <br />Cooler- 140mm Corsair H90 AIO Liquid Cooler w/ One 140mm EVGA Fan
                            <br />OS- Windows 10 Professional(latest version, activated)
                            <br />Connectivity- Gigabit LAN                                
                            </p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="carousel showcase-carousel" id="carousel-UltraBudget">
                                <img src="/images/workstations/fxfront.webp" className="carousel-image" alt="Front view of ultra-budget CAD workstation" />
                                <img src="/images/workstations/fxside.webp" className="carousel-image" alt="Side view of ultra-budget CAD workstation" />
                                <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-UltraBudget">&#10094;</button>
                                <button className="carousel-next" data-fn="nextImage" data-arg="carousel-UltraBudget">&#10095;</button>
                            </div>            
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-3">
                        <h6>CAM Workstation for Baseline Design</h6>
                        <p>CAM workstation commission for local small biz Baseline Design (https://www.baselinedesignco.com/). The goal was the most performance possible in Autodesk, Enscape, and Adobe Suite for under $1k budget.
                        </p>
                        <button id="newbase-button" data-fn="toggleExpand" data-arg="newbase">Click to Expand</button>
                        <div id="newbase-content" className="expandable-content">
                        <p>For excellent single and multicore CPU performance, an i7-10700K is at the heart of the build, with eight cores and sixteen threads locked to an AVX2 stable 4.8GHz. This processor packs Quicksync acceleration for Adobe applications, and the Intel platform enables the use of Optane memory. 
                        </p>
                        <p>Since those programs tend to use as much system memory as is available, the i7 is paired with 64GB of dual-channel, dual-rank DDR4 overclocked to 3600MHz with tightened low-latency timings. 
                        </p>
                        <p>Enscape is a 3D rendering software that benefits significantly from the RTX / DLSS feature set and 8GB of VRAM, making the RTX 3060 TI EVGA XC perfect for the build. Its CUDA performance and NVENC encoder also benefit the other software.
                        </p>
                        <p>Every component comes together on a 1TB NVME SSD backed by an additional 1TB Optane-accelerated hard drive.                         </p>
                        <p>
                        <br />Specifications:
                        <br />GPU- Nvidia RTX 3060 TI EVGA XC Gaming (w/ 8GB GDDR6)
                        <br />CPU- Intel Core i7-10700K (8 cores, 16 Threads @4.8GHz)
                        <br />RAM- 64GB TeamGroup T-Create Expert DDR4 in Dual Channel @3600MHz (16-20-20-40-CR2)
                        <br />SSD- 1TB NVME Fanxiang S500 PRO Solid State Drive
                        <br />SSHD- Intel Optane M10 16gb M.2 + 1TB Western Digital Green 5400RPM HDD
                        <br />Mobo- MSI Z490-A PRO ATX Motherboard
                        <br />PSU- 750 Watt EVGA SuperNOVA GT Power Supply (80+ Gold Certified)
                        <br />Case- Lian Li 205 ATX Mid-Tower w/ Five Lian Li Fans
                        <br />Cooler- Thermalright Phantom Spirit 120 SE Dual Tower Cooler w/ Two Corsair Fans
                        <br />OS- Windows 10 Professional (latest version, activated)
                        <br />Connectivity- 2.5Gb LAN, Dual-Band WiFi, Bluetooth 4.2
                        </p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="carousel showcase-carousel" id="carousel-newbase">
                            <img src="/images/workstations/baseside.webp" className="carousel-image" alt="Side view of CAM workstation for Baseline Design" />
                            <img src="/images/workstations/basefront.webp" className="carousel-image" alt="Front view of CAM workstation for Baseline Design" />
                            <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-newbase">&#10094;</button>
                            <button className="carousel-next" data-fn="nextImage" data-arg="carousel-newbase">&#10095;</button>
                        </div>            
                    </div>
                </div>
            <br />
            <div className="row">
                <div className="col-3">
                    <h6>Intel Arc Alchemist Resolve Rig</h6>
                    <p>Commission to deliver an excellent Photoshop, Resolve, gaming, and music production experience for less than $1k. 
                    </p>
                    <p>For music production, minimal latency is key. This makes the monolithic architecture of Rocket Lake paired with DDR4 preferrable over AMD's chiplet designs and the hybrid architectures of 12th/13th/14th gen Intel, which increase frequency and IPC at the cost of core-to-core latency by moving the I/O die to separate silicon. Additionally, while DDR5 boosts bandwidth, this comes at the cost of bolstered latency. The i7-11700F with 8 cores and 16 threads unleashed from their PLIM boost up to 4.9Ghz and achieve the necessary single-core performance for this task while delivering excellent multi-core for photo/video editing. It's paired with 64GB of dual-channel, dual-rank 3200MHz RAM with timings tightened from CL22-22-22-42 to CL18-19-19-38. 
                    </p>
                    <button id="arc-button" data-fn="toggleExpand" data-arg="arc">Click to Expand</button>
                    <div id="arc-content" className="expandable-content">
                    <p>The recent implementation of Quicksync for ARC GPU's into workstation applications make the A770 16GB the ideal price/performance pick. Resolve loves VRAM, and this BiFrost OC model with 16GB of GDDR6 outperforms the RTX 4060 TI in Resolve and Photoshop. Combined with the unleashed i7 and tuned 64GB of system memory, this pairing achieved over 20k points in PugetBench for DaVinci Resolve.
                    </p>
                    <p>And thanks to firmware and driver improvements, Arc Alchemist GPU's are finally a good price/performance gaming option, with this system pushing ~120 FPS in COD and Cyberpunk and over 200 FPS in CS2 and R6 Seige.
                    </p>
                    <p>Specifications: 
                    <br />GPU- Intel ARC A770 Acer BiFrost OC (16GB GDDR6)
                    <br />CPU- Intel Core i7-11700F (8C, 16T, 4.9GHz)
                    <br />RAM- 64GB DDR4 @3200MHz CL18-19-19-38
                    <br />SSD- 1TB NVME Fanxiang SP610 Gen 4 SSD
                    <br />SSHD- Intel Optane M10 M.2 + 4TB WD Purple HDD
                    <br />Mobo- MSI Z590-A PRO ATX Motherboard
                    <br />PSU- 650 Watt Powerspec (80+ Bronze)
                    <br />Case- SAMA Sama-M2-BK
                    <br />Cooler- Thermalright Peerless Assassin 120 SE
                    <br />Connectivity- Gigabit LAN, Dual-Band WiFi, Bluetooth 4.2
                    </p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="carousel showcase-carousel" id="carousel-arc">
                        <img src="/images/workstations/arcback.webp" className="carousel-image" alt="Back view of Intel Arc Alchemist Resolve rig" />
                        <img src="/images/workstations/arcfront.webp" className="carousel-image" alt="Front view of Intel Arc Alchemist Resolve rig" />
                        <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-arc">&#10094;</button>
                        <button className="carousel-next" data-fn="nextImage" data-arg="carousel-arc">&#10095;</button>
                    </div>            
                </div>
            </div>
        <br />
            <div className="row">
                <div className="col-3">
                    <h6>Overclocked 12th Gen CAD Workstation</h6>
                    <p>Commission to deliver the most price-to-performance CAD workstation possible. At the heart is an overclocked i7-12700K (5GHz P-cores, 3.8GHz E-cores, 4GHz RING) paired with 64GB of dual-channel, quad-rank DDR4 overclocked from 3200MHz to 3333MHz in Gear 1 with tightened timings. Everything comes together with an RTX 3060 TI packing 8GB of Samsung GDDR6 overclocked to 3070 bandwidth and a Sabrent Rocket 4 Plus NVME SSD to make a performant and capable workstation.
                    </p>
                    <button id="12-button" data-fn="toggleExpand" data-arg="12">Click to Expand</button>
                    <div id="12-content" className="expandable-content">
                    <p>Specifications:
                    <br />Nvidia RTX 3060 TI DELL (w/ 8GB GDDR6)
                    <br />CPU- Intel Core i7-12700K (12 cores, 20 Threads @5GHz)
                    <br />RAM- 64GB Neo Forza DDR4 in Dual Channel @3333MHz (16-18-18-36-CR2)
                    <br />SSD- 1TB NVME Sabrent Rocket 4.0 PLUS Gen4 Solid State Drive
                    <br />Mobo- Gigabyte Z690 UD AX D4 ATX Motherboard
                    <br />PSU- 850 Watt EVGA G3 Power Supply (80+ Gold Certified)
                    <br />Case- Lian Li O11 AIR Mini ATX Mid-Tower w/ Three Fans 
                    <br />Cooler- 280mm EVGA CLC AIO Liquid Cooler w/ Two 140mm EVGA CLC Fans and Two 140mm Lian Li Fans in push-pull
                    <br />OS- Windows 11 Professional (latest version, activated)
                    <br />Connectivity- 2.5Gb LAN, WiFi 6, Bluetoot 5.2                        
                    </p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="carousel showcase-carousel" id="carousel-12">
                        <img src="/images/workstations/12front.webp" className="carousel-image" alt="Front view of overclocked 12th gen CAD workstation" />
                        <img src="/images/workstations/12side.webp" className="carousel-image" alt="Side view of overclocked 12th gen CAD workstation" />
                        <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-12">&#10094;</button>
                        <button className="carousel-next" data-fn="nextImage" data-arg="carousel-12">&#10095;</button>
                    </div>            
                </div>
            </div>
            <br />
                <div className="showcase-container">
                    <div className="row">
                        <div className="col-3">
                            <h6>Alienware Area-51 R3 Threadripper Edition</h6>
                            <p>Found the perfect home for this refurbished and upgraded Alienware. With a new clients' quad-core i7-4790 no longer up to the task of their ever-growing 3D modeling and animation projects, this 16-Core TR 1950X finally gets to do what it was designed for: shredding through Cinema4D and Blender renders. Paired with an RTX 3060 for its stellar CUDA acceleration and 12GB VRAM buffer, 64GB of Quad-Channel DDR4 memory locked at 3200MHz in a 1:1 ratio with the infinity fabric, 1.5TB of SSD storage, and 8TB of hard disk storage, this is a true workstation, with an R7 240 from my shelf needing to be slotted in for my client to use all six of his monitors.
                            </p>
                            <div id="alien-content" className="expandable-content">
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="carousel showcase-carousel" id="carousel-alien">
                                <img src="/images/workstations/alienfront.webp" className="carousel-image" alt="Front view of Alienware Area-51 R3 Threadripper edition workstation" />
                                <img src="/images/workstations/alienside.webp" className="carousel-image" alt="Side view of Alienware Area-51 R3 Threadripper edition workstation" />
                                <img src="/images/workstations/alienback.webp" className="carousel-image" alt="Back view of Alienware Area-51 R3 Threadripper edition workstation" />
                                <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-alien">&#10094;</button>
                                <button className="carousel-next" data-fn="nextImage" data-arg="carousel-alien">&#10095;</button>
                            </div>            
                        </div>
                    </div>
                </div>
                <br />
                <div className="showcase-container">
                    <div className="row">
                        <div className="col-3">
                            <h6>Budget Adobe Editing for FRVS</h6>
                            <p>Thank so much to Front Range Vital Signs for letting us spec and build their new workstation! Specifically designed for their use of Photoshop and Illustrator, we were able to squeeze in an i7-8700, a GTX 1050 TI, 32GB of RAM, and a 2TB HDD to backup the two 1TB NVME SSD's they provided. The  Fractal Design Define R5 is perfect for their understandably dusty workshop, featuring noise-dampening mesh filters on the side, top, and front intake, ensuring the longevity of the build. The i7 not only sports excellent single-core and multi-core performance, but also an iGPU for Quicksync Acceleration in Adobe programs. The OEM GTX 1050 TI we pulled from a golf simulator may not look like much, but its 4GB of VRAM and CUDA acceleration surpass the software's recommendations. Finally, with an upgrade cooler that let us unleash the i7's power limits, tuned memory timings on the dual-channel 32GB kit, and plenty of both NVME and backup HDD storage, I'm really happy that this wonderful business finally has a design workstation that'll help them do what they do to their best!
                            </p>
                            <div id="frvs-content" className="expandable-content">
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="carousel showcase-carousel" id="carousel-frvs">
                                <img src="/images/workstations/frvsfront.webp" className="carousel-image" alt="Front view of budget Adobe editing workstation for FRVS" />
                                <img src="/images/workstations/frvsside.webp" className="carousel-image" alt="Side view of budget Adobe editing workstation for FRVS" />
                                <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-frvs">&#10094;</button>
                                <button className="carousel-next" data-fn="nextImage" data-arg="carousel-frvs">&#10095;</button>
                            </div>            
                        </div>
                    </div>
                </div>
                <br />
                <div className="showcase-container">
                    <div className="row">
                        <div className="col-3">
                            <h6>Budget CAD for Baseline Design</h6>
                            <p>When a client let me know one of my $500 gaming systems was better specc'd than the $800 Dell workstations they were looking at, it was time to do this commission. Built for peak performance in Autodesk/Autocad, Revit, and the Adobe Suite, this system manages to exceed the recommended specs of each of these programs on a tight budget. With a Ryzen 7 Pro 1700X overclocked to 3.775GHz on all cores, the 25MHz loss to single core boost is far outweighed by the 275MHz increase to all core frequency for these production apps. Benefitted further by 32GB of 3GHz dual-channel RAM, and a 1TB NVME SSD, the package comes together with an EVGA Classified GTX 770 4GB for CUDA acceleration, hardware encoding, and Shader Model 5.1 support.                                
                            </p>
                            <div id="baseline-content" className="expandable-content">
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="carousel showcase-carousel" id="carousel-baseline">
                                <img src="/images/workstations/baselinefront.webp" className="carousel-image" alt="Front view of budget CAD workstation for Baseline Design" />
                                <img src="/images/workstations/baselineside.webp" className="carousel-image" alt="Side view of budget CAD workstation for Baseline Design" />
                                <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-baseline">&#10094;</button>
                                <button className="carousel-next" data-fn="nextImage" data-arg="carousel-baseline">&#10095;</button>
                            </div>            
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
