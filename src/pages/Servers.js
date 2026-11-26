// Ported from servers.html (static site source).
import React from 'react';
import { Link } from 'react-router-dom';

export default function Servers() {
  return (
    <main>
		<article>
            <h2>Servers</h2>
            <section id="mods" className="showcase">
                <div className="showcase-container">
                    <div className="row">
                        <div className="showcase-container">
                            <div className="row">
                                <div className="col-3">
                                    <h6>W790 AI Server for VESL</h6>
                                    <p>Commission for veslsolutions.tech to deliver the best server for Solidworks, CAD, AI model training, and OpenFoam on a $6k budget. Each of these applications benefits significantly from one performance factor: memory bandwidth. Fast, multi-channel RAM was a top priority, and right now, there's only one platform that can deliver eight-channel DDR5 on this budget: the new W790 series for Intel Sapphire Rapids. W790 is the latest HEDT platform from Intel, and its chipset is fully leveraged by the ASUS SAGE board to deliver 112 PCIe 5.0 lanes, additional PCIe 4.0 chipset lanes, and dual 10-gig LAN.
                                    </p>
                                    <button id="VESL-button" data-fn="toggleExpand" data-arg="VESL">Click to Expand</button>
                                    <div id="VESL-content" className="expandable-content">
                                    <p>At the heart of this beast is an overclockable Xeon W5 with all 16 P-cores and 32 threads tuned to 4.2GHz allcore without giving up the 4.7GHz max boost. Unlike its consumer counterpart, these W790 Xeons support AVX-512 and new AMX instructions for AI acceleration. With multicore performance that exceeds 32-core Threadrippers and single core that rivals the latest i9's, the Xeon W5-3435X was the perfect choice. Most importantly, it's the most affordable processor that enables eight-channel DDR5 on the W790 platform. After a tune, the 128GB of DDR5 is locked at 5GHz with tightened timings and bandwidth exceeding 200GB/s. 
                                    </p>
                                    <p>While a used RTX 3090 or 4090 would have normally been my go for the GPU, Solidworks requires the Quadro tax for stable operation. The RTX A4000 was the best workstation GPU that fit the budget, and after a 15% overclock, it's outperforming the new Ada Lovelace RTX 4000 and RTX 4060 TI.
                                    </p>
                                    <p>Finally, we made the most of the board and Fractal Design Define R2 XL case, slotting 2TB Gen 4 NVME SSD's into the three M.2 slots and packing all eight 3.5" bays with 4TB HDD's. In Raid 6, these disks perform on par with a Sata SSD while supporting 20TB of usable space and two drive failures. 
                                    </p>
                                    <p>
                                    <br />Specifications:
                                    <br />GPU- Two Nvidia RTX A4500's with NVLink (PNY, 20GB GDDR6 each)
                                    <br />CPU- Intel Xeon W5-3435X (16 cores, 32 threads, 4.7GHz boost, 4.3GHz allcore)
                                    <br />RAM- 128GB A-Tech ECC Registered DDR5 RDIMMs in Octa Channel @6000MHz (46-46-47-89-CR1)
                                    <br />SSD- 4TB Samsung 990 PRO Gen 4 NVME Solid State Drive
                                    <br />SSD- 2TB LEVEN JPS850 Gen 4 NVME Solid State Drive
                                    <br />SSD- 2TB LEVEN JPS850 Gen 4 NVME Solid State Drive
                                    <br />Storage Pool- 11TB Tiered Raid 10 Array of 6x4TB Western Digital Purple 5400RPM Hard Drives + 2x128GB SATA SSD's
                                    <br />Mobo- ASUS Pro WS W790 SAGE SE EEB Form Factor Motherboard
                                    <br />PSU- 1300 Watt EVGA G2 SuperNova 80+ Gold Supply
                                    <br />Case- Fractal Design Define 7 XL Full Tower Case w/ Six 140mm Fans
                                    <br />Cooler- Noctua NH-U14S DX-4677 w/ Two Noctua NF-A15 Fans
                                    <br />OS- Windows Server 2022 Datacenter, Kubuntu on VMWare Workstation 17 Pro
                                    <br />Connectivity- Dual 10Gb LAN, WiFi 6, Bluetooth 5.0
                                    </p>
                                </div>
                            </div>
                                <div className="col-4">
                                    <div className="carousel showcase-carousel" id="carousel-VESL">
                                        <img src={process.env.PUBLIC_URL + "/images/servers/aifront.webp"} className="carousel-image" alt="Front view of W790 AI Server for VESL" />
                                        <img src={process.env.PUBLIC_URL + "/images/servers/aiside.webp"} className="carousel-image" alt="Side view of W790 AI Server for VESL" />
                                        <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-VESL">&#10094;</button>
                                        <button className="carousel-next" data-fn="nextImage" data-arg="carousel-VESL">&#10095;</button>
                                    </div>            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                        <br />
                        <div className="showcase-container">
                            <div className="row">
                                <div className="col-3">
                                    <h6>X299 TrueNAS Scale Server</h6>
                                    <p>This is our home server. It handles local backups, high-speed file sharing, and the streaming and transcoding of anime to wherever we may be in our home.
                                    </p>
                                    <button id="true-button" data-fn="toggleExpand" data-arg="true">Click to Expand</button>
                                    <div id="true-content" className="expandable-content">
                                    <p>At the heart is an i9-7900X with ten cores and twenty threads. Thanks to lapping, delidding, and liquid metal, this Skylake-X chip is stable on air cooling with a 4.6GHz all-core overclock. It also packs ample PCIe lanes for the four M.2 NVME SSD's, 2.5 gig networking, and a GPU for debugging. This leaves the X299 motherboard to handle the eight 4TB hard drives and 64GB of quad-channel 3200MHz DDR4. Effectively, this results in i9-10900K performance with over twice the PCIe lanes, twice the memory channels, and the extra Sata ports needed to fully populate a Fractal Define R3. 
                                    </p>
                                    <p>The system runs TrueNAS Scale and its legendary ZFS file system, which utilizes system memory as an adaptive cache and can further advantage NVME SSD's as write and read caches. We're running the eight HDD's in Raid Z2, which is similar to Raid 6, resulting in over 20TB of space. After configuring the RAM cache and having an Optane configured as a write cache, the spinning disks match SSD performance to the point where my daily workflow involves running Photoshop projects straight off the server. 
                                    </p>
                                    <p>All together, the file system is fast enough to make the our 2.5 gig network the bottleneck, and the CPU has yet to buckle under multiple 4K anime streams.
                                    </p>
                                    <p>
                                    <br />Specifications:
                                    <br />OS- TrueNAS SCALE
                                    <br />Mobo- MSI X299 RAIDER ATX Motherboard
                                    <br />CPU- Intel Core i9-7900X (10 cores, 20 threads @4.6GHz)
                                    <br />RAM- 64GB G.SKILL Ripjaws V in Quad Channel @2933MHz (16-18-18-36-CR2)
                                    <br />GPU- AMD Radeon HD 7470 (w/ 1GB DDR3, BIOS flashed to support UEFI)
                                    <br />ZFS Array- 8x 4TB Seagate Skyhawk 5900RPM Hard Drives
                                    <br />Read Cache- 500GB WD Black SN700 NVME SSD
                                    <br />Write Cache- 16GB Intel M10 M.2 Optane Drive
                                    <br />OS SSD- 1TB Intel 660P NVME Solid State Drive
                                    <br />Cooler- Thermalright FC140 Dual-Tower Cooler
                                    <br />Case- Fractal Design Define R3 Black Pearl ATX Case
                                    <br />PSU- 850 Watt Seasonic Focus 80+ Gold Certified Power Supply
                                    <br />Connectivity- 2.5GB LAN                            
                                    </p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="carousel showcase-carousel" id="carousel-true">
                                        <img src={process.env.PUBLIC_URL + "/images/servers/truenasside.webp"} className="carousel-image" alt="Side view of X299 TrueNAS Scale Server" />
                                        <img src={process.env.PUBLIC_URL + "/images/servers/truenasback.webp"} className="carousel-image" alt="Back view of X299 TrueNAS Scale Server" />
                                        <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-true">&#10094;</button>
                                        <button className="carousel-next" data-fn="nextImage" data-arg="carousel-true">&#10095;</button>
                                    </div>            
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="showcase-container">
                            <div className="row">
                                <div className="col-3">
                                    <h6>Dual-RTX AI Server for VESL</h6>
                                        <p>Our second server commission for veslsolutions.tech and their use cases of Solidworks, CAD, AI model training, and OpenFoam, this time with a $7K budget. This extra grand for this new server not only enabled the upgrade from a single RTX A4000 to two NVLink'd RTX A4500's; improvements in ECC DDR5 supply, advances in NVME SSD's over the past years, and our own improvements in our overclocking processes resulted in performance upticks across the board.
                                        </p>
                                        <button id="RTX-button" data-fn="toggleExpand" data-arg="RTX">Click to Expand</button>
                                        <div id="RTX-content" className="expandable-content">
                                        <p>A year ago, ECC DDR5 RDIMMs were in their infancy, with affordable options limited to 4800MHz Micron silicon. In 2024, 5600MHz kits with Samsung B-Die are at the same price. A stable 6GHz overclock was achieved across the 128GB of RAM across all eight channels with tightened timings for minimal latency. Consequently, a ~20% uptick in memory bandwidth, ~13% reduction in memory latency, and a proportional boost in OpenFoam performance are observed. 
                                       </p>
                                        <p>This improvement in memory bandwidth and latency resulted in a ~3% improvement in CPU horsepower on its own. However, with some luck from the silicon lottery, we were able to sustain 4.7GHz boost on the best two cores, 4.6GHz boost on the next best two cores, 4.5GHz boost on the rest, and achieve a 600MHz all-core overclock to  sustain 4.3GHz across a sixteen-core, thirty-two thread workload. This tune achieved a 5-7% uplift over the previous server in CPU performance and two multicore records on OCCT's benchmark leaderboard.
                                        </p>
                                        <p>Each RTX A4500 possesses 20GB of VRAM, which when connected with NVLINK, result in 40GB total usable for the majority of AI models, CAD programs, and Solidworks. This solution delivered similar compute as an RTX 6000 Ada for a fifth of the price, and a 10% manual overclock on each card means that the new server delivers ~250% more graphics compute and VRAM than the previous server, proportionally accelerating GPU dependent CAD, AI, and Solidworks models. 
                                        </p>
                                        <p>Simultaneous multi-user RDP is configured, with remote access available to both multiple Windows Server user logins, in addition to any VMWare virtual machine, with the ability to be remoted into both Windows and its own Kubuntu VM at the same time from the same client.
                                        </p>
                                        <p>Windows Server 2022 Datacenter is installed on a 4TB Samsung 990 Pro Gen 4 NVME SSD. Another 2TB Gen 4 NVME SSD stores VMWare and its virtual machines. A third 2TB Gen 4 NVME functions as the pagefile for both. Finally, six 4TB hard drives combine with two 128GB SSD's for caching to make a tiered Raid 10 accelerated storage pool that sustains solid-state performance, redundancy, and 11TB usable capacity.  
                                        </p>
                                        <p>
                                        <br />Specifications:
                                        <br />GPU- Nvidia RTX A4000 PNY (w/ 16GB GDDR6)
                                        <br />CPU- Intel Xeon W5-3435X (16 cores, 32 threads @ up to 4.7GHz)
                                        <br />RAM- 128GB Supermicro DDR5 in Octa Channel @5000MHz (38-39-39-78-CR2)
                                        <br />SSD- 2TB NVME Samsung 980 PRO Gen 4 Solid State Drive
                                        <br />SSD- 2TB NVME Fanxiang S660 Gen 4 Solid State Drive
                                        <br />SSD- 2TB NVME Silicon Power UD90 Gen 4 Solid State Drive
                                        <br />HDD- 8x 4TB Western Digital Purple 5400RPM Hard Drives
                                        <br />Mobo- ASUS Pro WS W790 SAGE SE EEB Form Factor Motherboard
                                        <br />PSU- 1200 Watt Maingear Ignition Power Supply (80+ Platinum Certified)
                                        <br />Case- Fractal Design Define XL R2 Full Tower Case w/ Six 140mm Fans
                                        <br />Cooler- Noctua NH-U14S DX-4677 w/ Two Noctua NF-A15 Fans
                                        <br />OS- Windows Server 2022 Datacenter
                                        <br />Connectivity- Dual 10Gb LAN, WiFi 6E, Bluetooth 5.2
                                        </p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="carousel showcase-carousel" id="carousel-RTX">
                                <img src={process.env.PUBLIC_URL + "/images/servers/ai2front.webp"} className="carousel-image" alt="Front view of Dual-RTX AI Server for VESL" />
                                <img src={process.env.PUBLIC_URL + "/images/servers/ai2side.webp"} className="carousel-image" alt="Side view of Dual-RTX AI Server for VESL" />
                                <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-RTX">&#10094;</button>
                                <button className="carousel-next" data-fn="nextImage" data-arg="carousel-RTX">&#10095;</button>
                            </div>            
                        </div>
                    </div>
                </div>
                <br />
                <div className="showcase-container">
                    <div className="row">
                        <div className="col-3">
                            <h6>NAS for OEC Engineering Corporation</h6>
                            <p>Windows Server NAS Commission for OEC Engineering Corporation that packs eight hot-swappable 4TB hard drives accelerated by three 250GB Samsung SSD's with a Windows Server 2022 Database installation on a 256GB Western Digital Black NVME SSD. The i7-6700 paired with 32GB of dual-channel, dual-rank RAM was chosen for its affordability and DMI 3.0 (PCIe 3.0x4) connection between the chipset and CPU. A server-grade NIC and PCIe to SATA card complete the build to enable a 28TB tiered storage space that exceed 900MBps sequential reads and 400MBps sequential writes.
                            </p>
                            <button id="OEC-button" data-fn="toggleExpand" data-arg="OEC">Click to Expand</button>
                            <div id="OEC-content" className="expandable-content">
                            <p>Specifications:
                            <br />CPU- Intel Core i7-6700 (4 cores, 8 Threads @ up to 4.0GHz)
                            <br />RAM- 32GB DDR4 in Dual Channel @2133MHz (15-15-15-35-CR2)
                            <br />SSD- 256GB NVME Western Digital SN730 Solid State Drive
                            <br />HDD- Tiered Storage Space w/ 3x250GB Samsung SSD's and 8x4TB Western Digital HDD's
                            <br />Mobo- ASUS PRIME B250M-C/CSM Micro-ATX Motherboard
                            <br />PSU- 850 Watt Seasonic GM-850 Power Supply (80+ Gold Certified)
                            <br />Case- SilverStone Technology CS382 Micro-ATX Mid-Tower
                            <br />Cooler- Cooler Master Hyper 212
                            <br />OS- Windows 10 Professional (latest version, activated)
                            <br />Connectivity- Gigabit LAN
                            </p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="carousel showcase-carousel" id="carousel-OEC">
                                <img src={process.env.PUBLIC_URL + "/images/servers/silverside.webp"} className="carousel-image" alt="Side view of NAS for OEC Engineering Corporation" />
                                <img src={process.env.PUBLIC_URL + "/images/servers/silverfront.webp"} className="carousel-image" alt="Front view of NAS for OEC Engineering Corporation" />
                                <img src={process.env.PUBLIC_URL + "/images/servers/silverhdds.webp"} className="carousel-image" alt="Hot-swappable 4TB hard drives in NAS for OEC Engineering Corporation" />
                                <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-OEC">&#10094;</button>
                                <button className="carousel-next" data-fn="nextImage" data-arg="carousel-OEC">&#10095;</button>
                            </div>            
                        </div>
                    </div>
                </div>
                <br />
                <div className="showcase-container">
                    <div className="row">
                        <div className="col-3">
                            <h6>Budget NAS for OEC Engineering Corporation</h6>
                            <p>Windows Server 2019 commission to deliver over 24TB of storage capacity for an SSD accelerated Raid 5 array. With the right Microsoft certified NIC, any hardware will happily run Windows Server, including the i7-4770K locked to 4.4GHz, 32GB of DDR3, and GT 545 present in this rig, emphasizing the strong single core performance you want in a Windows NAS. The ASUS Sabertooth Z87 motherboard enabled eight Sata devices, one for an OS SSD, one for a cache SSD, and six more for the Raid 5 array of 4TB Western Digital Purple HDD's.
                            </p>
                            <button id="NAS-button" data-fn="toggleExpand" data-arg="NAS">Click to Expand</button>
                            <div id="NAS-content" className="expandable-content">
                            <p>Specifications:
                            <br />GPU- Nvidia GTX 545 (w/ 1GB GDDR5)
                            <br />CPU- Intel Core i7-4770K (4 cores, 8 Threads @4.4GHz)
                            <br />RAM- 32GB DDR3 in Dual Channel @1600MHz (10-10-10-26-CR2)
                            <br />Boot disk: 120GB HP S700 SSD
                            <br />20TB Storage Pool: 120GB Samsung 840 EVO SSD + Raid 5 Array of Six 4TB Western Digital Purple 5400RPM Hard drives
                            <br />Mobo- ASUS Sabertooth Z87 ATX Motherboard
                            <br />PSU- 700 Watt EVGA BR Power Supply (80+ Bronze Certified)
                            <br />Case- Fractal Design Define R5 Case ATX Mid-Tower w/ Two 140mm DeepCool Fans and Two Fractal Design Fans
                            <br />Cooler- ThermalRight Peerless Assassin 120 SE w/ Two ThermalRight Fans
                            <br />OS- Windows Server 2019
                            <br />Connectivity- 1.25Gb LAN
                            </p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="carousel showcase-carousel" id="carousel-NAS">
                                <img src={process.env.PUBLIC_URL + "/images/servers/nasfront.webp"} className="carousel-image" alt="Front view of Budget NAS for OEC Engineering Corporation" />
                                <img src={process.env.PUBLIC_URL + "/images/servers/nasside.webp"} className="carousel-image" alt="Side view of Budget NAS for OEC Engineering Corporation" />
                                <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-NAS">&#10094;</button>
                                <button className="carousel-next" data-fn="nextImage" data-arg="carousel-NAS">&#10095;</button>
                            </div>            
                        </div>
                    </div>
                </div>
                <br />
                <div className="showcase-container">
                    <div className="row">
                        <div className="col-3">
                            <h6>File Sharing and Quickbooks Server for Southpaw Electric Corporation</h6>
                            <p>Windows Server 2025 commission to deliver the fastest local shared storage solution possible on a $1.2k budget. 
                                This was achieved by bifurcating sixteen of Ryzen 5000's twenty PCIe 4.0 lanes into four seperate Gen 4 NVME SSD's. 
                                These drives were then configured in Raid 10 to exceed PCIe 5.0 speeds while benefitting from fault tolerance. 
                                At the heart is a Ryzen 9 5900X unleashed with Precision Boost overdrive to exceed 5.1GHz, paired with 64GB of
                                3200MHz quad-rank RAM with tightened, low-latency timings. The final four CPU lanes are used for a 1TB Gen 4 NVME
                                SSD boot drive, and a 4TB Western Digital Hard Drive provides a local backup.
                            </p>
                            <button id="Southpaw" data-fn="toggleExpand" data-arg="Southpaw">Click to Expand</button>
                            <div id="Southpaw-content" className="expandable-content">
                            <p>Specifications:
                            <br />GPU- Nvidia GT 710 (w/ 2GB DDR3)
                            <br />CPU- Ryzen 9 5900X (12 cores, 24 Threads up to @5.15GHz)
                            <br />RAM- 64GB Quad-Rank DDR4 in Dual Channel @3200MHz (16-20-20-38-CR1)
                            <br />Boot disk: 1TB NVME Fanxiang SP610 Gen 4 Solid State Drive
                            <br />NVME SSD Storage Pool: Raid 10 Array of Four JPS850 Gen 4 Solid State Drives 
                            <br />HDD Backup: 4TB Western Digital Purple 5400RPM Hard Drive
                            <br />Mobo- ASUS PRIME B550-PLUS AC-HES ATX Motherboard
                            <br />PSU- 750 Watt EVGA GA Power Supply (80+ Gold Certified)
                            <br />Case- FRACTAL MESHIFY C TEMPERED GLASS ATX Compact Mid-Tower
                            <br />Cooler- Thermalright Peerless Assassin 140
                            <br />OS- Windows Server 2025
                            <br />Connectivity- 2.5Gb LAN, WiFi 6, Bluetooth 5.2
                            </p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="carousel showcase-carousel" id="carousel-Southpaw">
                                <img src={process.env.PUBLIC_URL + "/images/servers/southpawside.webp"} className="carousel-image" alt="Side view of NVME SSD RAID Server for Southpaw" />
                                <img src={process.env.PUBLIC_URL + "/images/servers/southpawfront.webp"} className="carousel-image" alt="Front view of NVME SSD RAID Server for Southpaw" />
                                <img src={process.env.PUBLIC_URL + "/images/servers/southpawback.webp"} className="carousel-image" alt="Back view of NVME SSD RAID Server for Southpaw" />
                                <button className="carousel-prev" data-fn="prevImage" data-arg="carousel-Southpaw">&#10094;</button>
                                <button className="carousel-next" data-fn="nextImage" data-arg="carousel-Southpaw">&#10095;</button>
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
