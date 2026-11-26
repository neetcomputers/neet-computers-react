// Ported from index.html (static site source).
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
        <article>
			<h2>Welcome!</h2>
            <div className="intro">
            <p>We're Jade and Aria, a couple striving to deliver the best IT solutions possible.
            Jade is a relentless overclocker with a hyperfocus on hardware, thermodynamics, and squeezing every bit of performance from every component.
            Aria is the software expert, her creative and programming background ensuring that all layers are tuned for proper utilization in your specific workload.
            Together, we deploy unparalleled price-to-performance, be it a custom gaming PC, streaming laptop, NAS, editing workstation, or an AI development server.
            And if you already have a system, we offer upgrade and repair services.
            We also build and service networks, remote access solutions, file sharing systems, servers, software integrations, and infrastructure installations.
            Located in Northeast Westminster, we're proud to be the IT team for other small businesses in the Denver area.
            We ship nationwide, as well as internationally to Canada or any US Military base.
            Questions are welcome, commissions are open, and we're happy to quote any individual or company interested in our services. 
            Hope to hear from you soon!</p>
            </div>
        </article>
        <br />
        <article>
			<h2>Gallery</h2>
            <div className="gallery" id="gallery">
                <div className="gallery-slide" id="slide1">
                    <img src="/images/pcs/1.webp" alt="AI Training Workstation" />
                    <img src="/images/pcs/2.webp" alt="Custom Liquid Cooling side" />
                    <img src="/images/pcs/3.webp" alt="Custom Liquid Cooling front" />
                    <img src="/images/pcs/4.webp" alt="Photo Editing Workstation" />
                    <img src="/images/pcs/5.webp" alt="CAD Workstation" />
                    <img src="/images/pcs/6.webp" alt="Violet Evergarden Vinyl Wrapped Webserver" />
                    <img src="/images/pcs/7.webp" alt="Cyberpunk Neko Vinyl Wrapped Threadripper Workstation" />
                    <img src="/images/pcs/8.webp" alt="Yuno Gasai Gaming PC Wrap top" />
                    <img src="/images/pcs/9.webp" alt="Yuno Gasai Gaming PC Wrap front" />
                    <img src="/images/pcs/10.webp" alt="Mikasa Vinyl Wrapped SG13" />
                    <img src="/images/pcs/11.webp" alt="Punk RGB Gaming PC" />
                    <img src="/images/pcs/12.webp" alt="Cyberpunk Neko Back" />
                    <img src="/images/pcs/13.webp" alt="Mikasa Vinyl Wrapped ITX PC" />
                    <img src="/images/pcs/14.webp" alt="Lian Li Lancool II" />
                    <img src="/images/pcs/15.webp" alt="Esdeath GPU Support Bracket" />
                    <img src="/images/pcs/16.webp" alt="011 Dynamic Gaming PC" />
                    <img src="/images/pcs/17.webp" alt="Yuno Gasai 011 Dynamic XL" />
                    <img src="/images/pcs/18.webp" alt="Yuno Gasai 011 Dynamic XL Custom Vinyl Wrap" />
                    <img src="/images/pcs/19.webp" alt="Mirai Nikki Custom Vinyl Wrap" />
                    <img src="/images/pcs/20.webp" alt="Purple and Teal RGB" />
                    <img src="/images/pcs/21.webp" alt="011 Dynamic Mini Vertical GPU" />
                    <img src="/images/pcs/22.webp" alt="Violet Evergarden Vinyl Wrap Back" />
                    <img src="/images/pcs/23.webp" alt="D.va Vinyl Wrap Backplate" />
                    <img src="/images/pcs/24.webp" alt="D.va Vinyl Wrap Front" />
                    <img src="/images/pcs/25.webp" alt="Shinobu Vinyl Wrap" />
                    <img src="/images/pcs/26.webp" alt="NZXT H710i" />
                    <img src="/images/pcs/27.webp" alt="Fractal Torrent Vinyl Wrap" />
                    <img src="/images/pcs/28.webp" alt="iBuypower Snowblind" />
                    <img src="/images/pcs/29.webp" alt="Pearlescent Vinyl Wrap" />
                    <img src="/images/pcs/30.webp" alt="Neko Tempered Glass Sticker" />
                    <img src="/images/pcs/31.webp" alt="Neko Vinyl Wrap Back" />
                    <img src="/images/pcs/32.webp" alt="Neko Vinyl Wrap Front" />
                    <img src="/images/pcs/33.webp" alt="NZXT H510 Vinyl Wrap Back" />
                    <img src="/images/pcs/34.webp" alt="NZXT H510 Vinyl Wrap Front" />
                    <img src="/images/pcs/35.webp" alt="011 Air Mini Vertical GPU" />
                    <img src="/images/pcs/36.webp" alt="Studio Ghibli Vinyl Wrap" />
                    <img src="/images/pcs/37.webp" alt="Esdeath Vinyl Wrap Side" />
                    <img src="/images/pcs/38.webp" alt="Fubuki Tempered Glass Sticker" />
                    <img src="/images/pcs/39.webp" alt="Esdeath Vinyl Wrap Front" />
                    <img src="/images/pcs/40.webp" alt="Violet Evergarden Lian Li Lancool 205" />
                    <img src="/images/pcs/41.webp" alt="Z87 Budget NAS" />
                    <img src="/images/pcs/42.webp" alt="Rukia Snowblind" />
                    <img src="/images/pcs/43.webp" alt="Vivy Snowblind" />
                    <img src="/images/pcs/44.webp" alt="Zen+ Threadripper Workstation" />
                    <img src="/images/pcs/45.webp" alt="Displacer Beast Vinyl Wrap Back" />
                    <img src="/images/pcs/46.webp" alt="Displacer Beast Vinyl Wrap Front" />
                    <img src="/images/pcs/47.webp" alt="Fractal Torrent AI Development Workstation" />
                    <img src="/images/servers/ai2side.webp" alt="Fractal Design Define 6 XL AI Server" />
                    <img src="/images/servers/ai2front.webp" alt="Fractal Design Define 6 XL AI Server" />
                    <img src="/images/pcs/48.webp" alt="Fractal Design Meshify C Compact NVME RAID Server" />
                    <img src="/images/pcs/49.webp" alt="Thermaltake View 300 with Thermalright Grand Vision LCD AIO Liquid Cooler" />
                    <img src="/images/pcs/50.webp" alt="Naruto Sasuka Custom Vinyl Wrap Streaming DeGodTV Custom PC Build" />
                    <img src="/images/pcs/51.webp" alt="Prism Fans with RTX 3060 TI ASUS STRIX OC" />
                    <img src="/images/pcs/52.webp" alt="Gaming PC Build with Vetroo U6 Dual Tower Cooler" />
                    <img src="/images/pcs/53.webp" alt="RTX 4070 TI Super Gigabyte Aero OC White PC Build" />
                    <img src="/images/pcs/54.webp" alt="RTX 4070 TI MSI Suprim X White PC Build in 011 Dynamic Mini Snow Edition" />
                    <img src="/images/pcs/55.webp" alt="Thermaltake View 300 with 140mm Reverse Blade Prism Fan and Custom Painted RTX 3070" />
                    <img src="/images/pcs/56.webp" alt="Antec Flux Pro workstation decked out with ten Noctua fans and a Noctua modded EVGA FTW3 Ultra Gaming RTX 3080 TI" />
                    <img src="/images/pcs/57.webp" alt="Antec Flux Pro gaming pc decked out with ten Noctua fans and a Noctua modded EVGA FTW3 Ultra Gaming RTX 3080 TI" />
                    <img src="/images/pcs/58.webp" alt="Custom vinyl wrapped Gigabyte AERO 15S OLED SA for EchoThorns" />
                    <img src="/images/pcs/59.webp" alt="Lian Li 011 Dynamic with Nvidia RTX 3080 FTW3 Ultra Gaming" />
                    <img src="/images/pcs/60.webp" alt="Lian Li 011 Dynamic with Thermalright TL-M12-S Infinity Mirror Fans" />
                    <img src="/images/pcs/61.webp" alt="Lian Li V100 White with Übel figure from Frienren" />
                    <img src="/images/pcs/62.webp" alt="Hyte Y60 with AMD Radeon RX 6600 XT PowerColor Hellhound" />
                    <img src="/images/pcs/63.webp" alt="Lian Li V100 White with Astolfo figurine from Fate" />
                </div>
                <div className="gallery-slide" id="slide2">
                    <img src="/images/pcs/1.webp" alt="AI Training Workstation" />
                    <img src="/images/pcs/2.webp" alt="Custom Liquid Cooling side" />
                    <img src="/images/pcs/3.webp" alt="Custom Liquid Cooling front" />
                    <img src="/images/pcs/4.webp" alt="Photo Editing Workstation" />
                    <img src="/images/pcs/5.webp" alt="CAD Workstation" />
                    <img src="/images/pcs/6.webp" alt="Violet Evergarden Vinyl Wrapped Webserver" />
                    <img src="/images/pcs/7.webp" alt="Cyberpunk Neko Vinyl Wrapped Threadripper Workstation" />
                    <img src="/images/pcs/8.webp" alt="Yuno Gasai Gaming PC Wrap top" />
                    <img src="/images/pcs/9.webp" alt="Yuno Gasai Gaming PC Wrap front" />
                    <img src="/images/pcs/10.webp" alt="Mikasa Vinyl Wrapped SG13" />
                    <img src="/images/pcs/11.webp" alt="Punk RGB Gaming PC" />
                    <img src="/images/pcs/12.webp" alt="Cyberpunk Neko Back" />
                    <img src="/images/pcs/13.webp" alt="Mikasa Vinyl Wrapped ITX PC" />
                    <img src="/images/pcs/14.webp" alt="Lian Li Lancool II" />
                    <img src="/images/pcs/15.webp" alt="Esdeath GPU Support Bracket" />
                    <img src="/images/pcs/16.webp" alt="011 Dynamic Gaming PC" />
                    <img src="/images/pcs/17.webp" alt="Yuno Gasai 011 Dynamic XL" />
                    <img src="/images/pcs/18.webp" alt="Yuno Gasai 011 Dynamic XL Custom Vinyl Wrap" />
                    <img src="/images/pcs/19.webp" alt="Mirai Nikki Custom Vinyl Wrap" />
                    <img src="/images/pcs/20.webp" alt="Purple and Teal RGB" />
                    <img src="/images/pcs/21.webp" alt="011 Dynamic Mini Vertical GPU" />
                    <img src="/images/pcs/22.webp" alt="Violet Evergarden Vinyl Wrap Back" />
                    <img src="/images/pcs/23.webp" alt="D.va Vinyl Wrap Backplate" />
                    <img src="/images/pcs/24.webp" alt="D.va Vinyl Wrap Front" />
                    <img src="/images/pcs/25.webp" alt="Shinobu Vinyl Wrap" />
                    <img src="/images/pcs/26.webp" alt="NZXT H710i" />
                    <img src="/images/pcs/27.webp" alt="Fractal Torrent Vinyl Wrap" />
                    <img src="/images/pcs/28.webp" alt="iBuypower Snowblind" />
                    <img src="/images/pcs/29.webp" alt="Pearlescent Vinyl Wrap" />
                    <img src="/images/pcs/30.webp" alt="Neko Tempered Glass Sticker" />
                    <img src="/images/pcs/31.webp" alt="Neko Vinyl Wrap Back" />
                    <img src="/images/pcs/32.webp" alt="Neko Vinyl Wrap Front" />
                    <img src="/images/pcs/33.webp" alt="NZXT H510 Vinyl Wrap Back" />
                    <img src="/images/pcs/34.webp" alt="NZXT H510 Vinyl Wrap Front" />
                    <img src="/images/pcs/35.webp" alt="011 Air Mini Vertical GPU" />
                    <img src="/images/pcs/36.webp" alt="Studio Ghibli Vinyl Wrap" />
                    <img src="/images/pcs/37.webp" alt="Esdeath Vinyl Wrap Side" />
                    <img src="/images/pcs/38.webp" alt="Fubuki Tempered Glass Sticker" />
                    <img src="/images/pcs/39.webp" alt="Esdeath Vinyl Wrap Front" />
                    <img src="/images/pcs/40.webp" alt="Violet Evergarden Lian Li Lancool 205" />
                    <img src="/images/pcs/41.webp" alt="Z87 Budget NAS" />
                    <img src="/images/pcs/42.webp" alt="Rukia Snowblind" />
                    <img src="/images/pcs/43.webp" alt="Vivy Snowblind" />
                    <img src="/images/pcs/44.webp" alt="Zen+ Threadripper Workstation" />
                    <img src="/images/pcs/45.webp" alt="Displacer Beast Vinyl Wrap Back" />
                    <img src="/images/pcs/46.webp" alt="Displacer Beast Vinyl Wrap Front" />
                    <img src="/images/pcs/47.webp" alt="Fractal Torrent AI Development Workstation" />
                    <img src="/images/servers/ai2side.webp" alt="Fractal Design Define 6 XL AI Server" />
                    <img src="/images/servers/ai2front.webp" alt="Fractal Design Define 6 XL AI Development Server" />
                    <img src="/images/pcs/48.webp" alt="Fractal Design Meshify C Compact NVME RAID Server" />
                    <img src="/images/pcs/49.webp" alt="Thermaltake View 300 with Thermalright Grand Vision LCD AIO Liquid Cooler" />
                    <img src="/images/pcs/50.webp" alt="Naruto Sasuka Custom Vinyl Wrap Streaming DeGodTV Custom PC Build" />
                    <img src="/images/pcs/51.webp" alt="Prism Fans with RTX 3060 TI ASUS STRIX OC" />
                    <img src="/images/pcs/52.webp" alt="Gaming PC Build with Vetroo U6 Dual Tower Cooler" />
                    <img src="/images/pcs/53.webp" alt="RTX 4070 TI Super Gigabyte Aero OC White PC Build" />
                    <img src="/images/pcs/54.webp" alt="RTX 4070 TI MSI Suprim X White PC Build in 011 Dynamic Mini Snow Edition" />
                    <img src="/images/pcs/55.webp" alt="Thermaltake View 300 with 140mm Reverse Blade Prism Fan and Custom Painted RTX 3070" />
                    <img src="/images/pcs/56.webp" alt="Antec Flux Pro workstation decked out with ten Noctua fans and a Noctua modded EVGA FTW3 Ultra Gaming RTX 3080 TI" />
                    <img src="/images/pcs/57.webp" alt="Antec Flux Pro gaming pc decked out with ten Noctua fans and a Noctua modded EVGA FTW3 Ultra Gaming RTX 3080 TI" />
                    <img src="/images/pcs/58.webp" alt="Custom vinyl wrapped Gigabyte AERO 15S OLED SA for EchoThorns" />
                    <img src="/images/pcs/59.webp" alt="Lian Li 011 Dynamic with Thermalright TL-M12-S Infinity Mirror Fans" />
                    <img src="/images/pcs/60.webp" alt="Lian Li 011 Dynamic with Thermalright TL-M12-S Infinity Mirror Fans" />
                    <img src="/images/pcs/61.webp" alt="Lian Li V100 White with Übel figure from Frienren" />
                    <img src="/images/pcs/62.webp" alt="Hyte Y60 with AMD Radeon RX 6600 XT PowerColor Hellhound" />
                    <img src="/images/pcs/63.webp" alt="Lian Li V100 White with Astolfo figurine from Fate" />
                </div>
            </div>
        </article>
    </main>
  );
}
