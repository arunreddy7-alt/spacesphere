import React from "react";

const ProjectsSection = ({ isMobile, setIsModalOpen }) => {
  return (
    <section
      id="projects"
      style={{
        padding: "80px 24px",
        background:
          "linear-gradient(135deg, rgba(199, 154, 74, 0.05) 0%, rgba(199, 154, 74, 0.02) 100%)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <h2 className="about-hero-title" style={{ textAlign: "center" }}>
          Featured Premium Properties
        </h2>
        <h4 className="office-subheading">Invest with confidence. Live with pride.</h4>

        {/* Ultra-Luxury Vineyard Estate Hero Section */}
        <div
          style={{
            position: "relative",
            borderRadius: "20px",
            marginTop: "37px",
            overflow: "hidden",
            boxShadow:
              "0 25px 80px rgba(0,0,0,0.15), 0 10px 30px rgba(0,0,0,0.1)",
            aspectRatio: "16/9",
            minHeight: "600px",
            background: "#1a1a1a",
          }}
        >
          {/* Hero Image with Cinematic Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: 'url("/avinea.webp")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(1.02) contrast(1.05) saturate(1.1)",
            }}
          />

          {/* Premium Gradient Overlays - Golden Hour Effect */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(26, 26, 26, 0.4) 0%, transparent 50%, rgba(199, 154, 74, 0.15) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(26, 26, 26, 0.85) 0%, rgba(26, 26, 26, 0.4) 35%, transparent 60%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "200px",
              background:
                "linear-gradient(to bottom, rgba(26, 26, 26, 0.3) 0%, transparent 100%)",
            }}
          />

          {/* Subtle Warm Light Accent */}
          <div
            style={{
              position: "absolute",
              top: "20%",
              right: "-10%",
              width: "400px",
              height: "400px",
              background:
                "radial-gradient(circle, rgba(212, 175, 106, 0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Content Container with Ample Negative Space */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "0px 0 0px 0",
              color: "white",
            }}
          >
            {/* Top Badge */}
            <div
              style={{
                position: "absolute",
                top: isMobile ? "70px" : "120px",
                left: "60px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                className="exclusive-collection"
                style={{
                  width: "40px",
                  height: "2px",
                  background:
                    "linear-gradient(90deg, #c79a4a, #d4af6a)",
                }}
              />
              <span
                className="exclusive-collection"
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                Exclusive Collection
              </span>
            </div>

            {/* Main Content Area */}
            <div
              style={{
                maxWidth: "800px",
                margin: "0 0 60px 60px",
                textAlign: "left",
              }}
            >
              {/* Category Tag */}
              <div
                className="exclusive-collection1"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                  padding: "8px 16px",
                  background: "rgba(199, 154, 74, 0.15)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "50px",
                  border: "1px solid rgba(199, 154, 74, 0.3)",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#d4af6a",
                    boxShadow: "0 0 10px rgba(212, 175, 106, 0.5)",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#d4af6a",
                  }}
                >
                  Featured Estate
                </span>
              </div>

              {/* Title */}
              <h3
                className="exclusive-collection2"
                style={{
                  fontSize: "clamp(36px, 5vw, 52px)",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "16px",
                  fontFamily: "'Playfair Display', serif",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  textShadow: "0 2px 20px rgba(0,0,0,0.3)",
                }}
              >
                Avinea Estate
              </h3>

              {/* Subtitle */}
              <p
                className="exclusive-collection3"
                style={{
                  fontSize: isMobile ? "32px" : "19px",
                  color: "#ffffff",
                  transform: isMobile
                    ? "translateX(-64px) translateY(-18px)"
                    : "translateX(-1px) translateY(-2px)",
                  marginBottom: "32px",
                  lineHeight: isMobile ? 1.5 : 1.7,
                  maxWidth: "500px",
                }}
              >
                Modern Luxury Living with Premium Amenities
              </p>

              {/* Description */}
              <p
                className="exclusive-collection4"
                style={{
                  fontSize: isMobile ? "30px" : "19px",
                  color: "#ffffff",
                  transform: isMobile
                    ? "translateX(-64px) translateY(-29px)"
                    : "translateX(-1px) translateY(-22px)",
                  marginBottom: "32px",
                  lineHeight: isMobile ? 1.5 : 1.7,
                  maxWidth: "500px",
                }}
              >
                Experience contemporary architecture with thoughtful design,
                expansive layouts, and world-class amenities in an exclusive
                gated community.
              </p>

              {/* CTA Buttons */}
              <div
                className="exclusive-collection5"
                style={{
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <a
                  href="https://avinea.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background:
                      "linear-gradient(135deg, #c79a4a 0%, #d4af6a 100%)",
                    border: "none",
                    color: "white",
                    padding: "16px 36px",
                    borderRadius: "4px",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition:
                      "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0 8px 25px rgba(199, 154, 74, 0.35)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 40px rgba(199, 154, 74, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(199, 154, 74, 0.35)";
                  }}
                >
                  Explore Estate
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsModalOpen(true);
                  }}
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "white",
                    padding: "16px 32px",
                    borderRadius: "4px",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition:
                      "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.14)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.08)";
                  }}
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

