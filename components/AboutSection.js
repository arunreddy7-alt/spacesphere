"use client";
import React from "react";
import Image from "next/image";

const AboutSection = React.memo(({ isMobile, setIsInquiryModalOpen }) => {
  return (
    <section id="about" className="about-slab">
      <div className="about-wrap">
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h2 className="about-hero-title">Welcome To Space Sphere</h2>
          <h4 className="office-subheading">
            Exclusive Homes. Investment-worthy Properties. Prestigious
            Addresses.
          </h4>

          {/* Mobile-only image after subheading */}
          <div
            className="about-image-frame md:hidden relative"
            style={{ margin: "20px auto 0", maxWidth: "300px", height: "300px" }}
          >
            <Image src="/about1.webp" alt="Luxury estate poolside" fill className="object-cover" />
          </div>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p>
              Space Sphere is a trusted partner in Indian real estate, bringing
              together expert advisory, premium property sourcing, and a
              seamless ownership experience. With elite partnerships across
              premium developers in Pune, Hyderabad, and surrounding regions, we
              offer access to refined spaces for those who desire more.
            </p>

            <div style={{ display: "grid", gap: "8px" }}>
              <p
                className="text-center md:text-center"
                style={{ margin: 0, fontWeight: 600 }}
              >
                With Us You Get :
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "14px 24px",
                }}
              >
                <li
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#b67e5b"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="6" width="7" height="15" rx="1" />
                    <rect x="14" y="3" width="7" height="18" rx="1" />
                    <path d="M6 10h1M6 13h1M6 16h1" />
                    <path d="M17 7h1M17 10h1M17 13h1M17 16h1" />
                  </svg>

                  <span
                    style={{
                      fontSize: isMobile ? "16px" : "19px",
                      lineHeight: "1.4",
                    }}
                  >
                    Design & Architecture Value
                  </span>
                </li>

                <li
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#b67e5b"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 3v18" />
                    <circle cx="15" cy="15" r="2" />
                  </svg>

                  <span
                    style={{
                      fontSize: isMobile ? "15px" : "19px",
                      lineHeight: "1.4",
                    }}
                  >
                    Location Edge & Appreciation
                  </span>
                </li>

                <li
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#b67e5b"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="4" y="3" width="14" height="18" rx="2" />
                    <path d="M8 7h6M8 11h6" />
                    <circle cx="18" cy="16" r="2" />
                    <path d="M20 16h2" />
                  </svg>

                  <span
                    style={{
                      fontSize: isMobile ? "15px" : "19px",
                      lineHeight: "1.4",
                    }}
                  >
                    Builder Credibility & Delivery
                  </span>
                </li>

                <li
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#b67e5b"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="5" y="4" width="5" height="17" />
                    <rect x="14" y="2" width="5" height="19" />
                    <path d="M7.5 8h0M7.5 11h0M7.5 14h0" />
                    <path d="M16.5 6h0M16.5 9h0M16.5 12h0M16.5 15h0" />
                  </svg>

                  <span
                    style={{
                      fontSize: isMobile ? "15px" : "19px",
                      lineHeight: "1.4",
                    }}
                  >
                    Luxury Lifestyle Amenities
                  </span>
                </li>
              </ul>
            </div>

            <button
              className="about-button"
              onClick={() => {
                setIsInquiryModalOpen(true);
              }}
            >
              Get in touch
            </button>
          </div>

          <div className="about-image-frame hidden md:block relative">
            <Image src="/about1.webp" alt="Luxury estate poolside" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
