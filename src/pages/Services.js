// Ported from services.html (static site source).
import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <main>
        <div className="services-text">
            <p>
            <br /><Link to="/terms">Terms & Conditions</Link>
            </p>
        </div>
        <h2>Commission Pricing Sheet</h2>
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price Range</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Desktop PC for Home or Office</td>
                    <td>$100-$995</td>
                </tr>
                <tr>
                    <td>Budget PC (Roblox, Minecraft, Fortnite, School)</td>
                    <td>$195-$295</td>
                </tr>
                <tr>
                    <td>Desktop PC for Modern Gaming</td>
                    <td>$395-$2,995</td>
                </tr>
                <tr>
                    <td>File Sharing and Quickbooks Server</td>
                    <td>$495-$1,995</td>
                </tr>
                <tr>
                    <td>Network Attached Storage Server</td>
                    <td>$495-$2,800</td>
                </tr>
                <tr>
                    <td>Desktop PC for Stock Trading</td>
                    <td>$500-$1,295</td>
                </tr>
                <tr>
                    <td>Desktop PC for Gaming and Streaming</td>
                    <td>$695-$3,500</td>
                </tr>
                <tr>
                    <td>Workstation PC (Video, Photo, Audio, VFX)</td>
                    <td>$695-$3,000</td>
                </tr>
                <tr>
                    <td>Workstation PC (CAD, CAM, Compiling, AI, Sims)</td>
                    <td>$795-$5,000</td>
                </tr>
                <tr>
                    <td>Do-It-All Gaming, Streaming, and Workstation PC</td>
                    <td>$995-$5,000</td>
                </tr>
                <tr>
                    <td>AI Training, Simulations, and Development Server</td>
                    <td>$4000-$25,000</td>
                </tr>
            </tbody>
        </table>
        <div className="services-text">
            <p>Your current PC or other computer parts can be exchanged for a trade-in discount off your purchase. 
            <br />Pricing is based on historical data; reality is flexible and based on your specific budget and use cases.
            </p>
        </div>
        <h2>Services Pricing Sheet</h2>
        <table>
            <thead>
                <tr>
                    <th>Service</th>
                    <th>Price Range</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Diagnostic Service for New Clients</td>
                    <td>No Charge</td>
                </tr>
                <tr>
                    <td>Unsuccessful Repair, Upgrade, or Other Service Attempt</td>
                    <td>No Charge</td>
                </tr>
                <tr>
                    <td>Laptop Upgrades or Laptop Repair</td>
                    <td>Parts Cost + $50-$160</td>
                </tr>
                <tr>
                    <td>Desktop Upgrades or Desktop Repair</td>
                    <td>Parts Cost + $40-$160</td>
                </tr>
                <tr>
                    <td>Custom Vinyl Wrap for Desktop PC Case</td>
                    <td>$140-$280</td>
                </tr>
                <tr>
                    <td>Vinyl Wrap for Desktop PC Case with Tempered Glass Sticker</td>
                    <td>$200-$300</td>
                </tr>
                <tr>
                    <td>Custom Vinyl Wrap for PC Case and GPU Backplate with TG Sticker</td>
                    <td>~$300</td>
                </tr>
                <tr>
                    <td>Laptop Refurbish: <br />Deep Clean, CPU/GPU Repaste and Repad, GPU Overclock, OS Tune, Driver Optimization, Stability Validation</td>
                    <td>$95-$140</td>
                </tr>
                <tr>
                    <td>Desktop Refurbish: <br />Deep Clean, CPU/GPU Repaste and Repad, CPU/GPU/RAM Overclock, OS Tune, Driver Optimization, Stability Validation</td>
                    <td>$95-$160</td>
                </tr>
            </tbody>
        </table>
        <div className="services-text">
            <p>Other services for your network, Apple devices, and other hardware, software, or IT services are available upon request.</p>
        </div>
        <h2>Business Service Rates</h2>
        <table>
            <thead>
                <tr>
                    <th>Service</th>
                    <th>Hourly Rate</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Rate for Remote Work via Teamviewer, Phone, or Video Calls</td>
                    <td>$25-$50</td>
                </tr>
                <tr>
                    <td>Rate for Time in Transit to On-Site Work or Delivering Hardware</td>
                    <td>$25-$50</td>
                </tr>
                <tr>
                    <td>Rate for On-Site Work (Network Services, Hardware Upgrades, Etc)</td>
                    <td>$35-$65</td>
                </tr>
            </tbody>
        </table>
        <div className="services-text">
            <p>The lower rate is for if it’s just Jade or just Aria working. The higher rate is for when both Jade and Aria are on the task.
            <br />We are most effective and time efficient as a team, so the cost of a duo mission is offset by us getting the work done faster.
            </p>
        </div>
        <br />
    </main>
  );
}
