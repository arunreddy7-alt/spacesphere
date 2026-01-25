"use client";
import React from "react";
import Image from "next/image";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="office-section">
      <div className="office-wrap">
        <div className="office-header">
          <h2>Portfolio</h2>
          <h4 className="office-subheading">
            A Selection Reserved for the Discerning Buyer
          </h4>
        </div>

        <div className="office-grid">
          <div className="office-card">
            <div className="office-image relative">
              <Image src="/apartment1.webp" alt="Montecito coastline" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <h3>Luxury Residential Apartments & High-Rise Towers</h3>
          </div>
          <div className="office-card">
            <div className="office-image relative">
              <Image src="/villas2.webp" alt="Santa Barbara city view" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <h3>Signature Villas & Gated Communities</h3>
          </div>
          <div className="office-card">
            <div className="office-image relative">
              <Image src="/plot1.webp" alt="Santa Ynez vineyards" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <h3>Premium Open Plots with Future Growth Vision</h3>
          </div>
          <div className="office-card">
            <div className="office-image relative">
              <Image src="/commercial2.webp" alt="Napa Valley estates" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <h3>Commercial Spaces for High-Return Investors</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
