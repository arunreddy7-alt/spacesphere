import React from "react";

const HeroSection = ({
  heroImages,
  currentSlide,
  nextSlide,
  isTransitioning,
  isMobile,
  navLinks,
  setIsMobileMenuOpen,
  setIsInquiryModalOpen,
}) => {
  return (
    <section id="home" className="relative min-h-screen hero-bg text-white">
      {/* Current slide layer - always visible */}
      <div
        className="hero-fade-layer hero-fade-current"
        style={{
          ["--hero-url"]: `url("${heroImages[currentSlide]}")`,
        }}
      />

      {/* Next slide layer - fades in over current */}
      <div
        className={`hero-fade-layer hero-fade-next ${
          isTransitioning ? "hero-fade-active" : ""
        }`}
        style={{
          ["--hero-url"]: `url("${heroImages[nextSlide]}")`,
        }}
      />

      <div className="hero-overlay" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="hero-shell">
          <div className="hero-topbar">
            <div className="hero-brand ml-4 sm:ml-6 md:ml-10 ">
              <img
                src="/logo2.png"
                alt="Space Sphere Logo"
                className="hidden md:block h-14 sm:h-16 md:h-20 lg:h-24 max-w-[100px] sm:max-w-[140px] md:max-w-[180px] lg:max-w-[220px] object-contain transition-all duration-300"
                style={{
                  height: "140px",
                  maxWidth: "220px",
                  width: "auto",
                  transform: "translateY(-35px)", // moves image up slightly
                  transition:
                    "height 0.3s ease, max-width 0.3s ease, transform 0.3s ease",
                }}
              />
            </div>

            <nav
              className="hero-nav"
              style={{
                transform: "translateY(-35px)", // move a little up
                transition: "transform 0.3s ease",
              }}
            >
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  className="hero-nav-link"
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div
              className="hero-actions"
              style={{
                transform: "translateY(-35px)", // same upward shift
                transition: "transform 0.3s ease",
              }}
            >
              <button
                className="hero-chat"
                onClick={() => {
                  setIsInquiryModalOpen(true);
                }}
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div
            className="hero-main"
            style={{
              width: "100%",
              display: "flex",
              transform: "translateY(-45px)",
              justifyContent: "center",
              padding: "100px 20px 90px",
            }}
          >
            <div
              style={{
                maxWidth: "900px",
                width: "100%",
                margin: "0 auto",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              {/* Top line */}
              <p
                style={{
                  fontSize: isMobile ? "15px" : "15px",
                  letterSpacing: isMobile ? "0.22em" : "0.3em",
                  fontWeight: 600,
                  marginBottom: isMobile ? "12px" : "18px",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  paddingLeft: isMobile ? "0" : "17px",
                }}
              >
                CONNECTING PEOPLE
              </p>

              {/* Heading block */}
              <div
                style={{
                  display: "inline-block",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                <h1
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: isMobile
                      ? "clamp(2.9rem, 8vw, 3.2rem)"
                      : "clamp(4rem, 6.5vw, 5.8rem)",
                    fontWeight: 600,
                    lineHeight: "1.05",
                    margin: "0",
                    color: "#ffffff",
                    textShadow:
                      "0 4px 30px rgba(0,0,0,0.6), 0 1px 0 rgba(0,0,0,0.3)",
                  }}
                >
                  With Properties
                </h1>

                {/* Subtitle */}
                <div
                  style={{
                    textAlign: isMobile ? "center" : "right",
                    marginTop: isMobile ? "4px" : "6px",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: isMobile ? "15px" : "15px",
                      fontWeight: 1000,
                      marginTop: isMobile ? "10px" : "14px",
                      letterSpacing: isMobile ? "0.22em" : "0.3em",
                      fontFamily: "inherit",
                      textTransform: "uppercase",
                    }}
                  >
                    That Matter
                  </span>
                </div>
              </div>

              {/* Bottom text */}
              <div
                style={{
                  marginTop: isMobile ? "68px" : "48px",
                  paddingLeft: isMobile ? "0px" : "18px",
                  transform: isMobile
                    ? "translateX(56px)"
                    : "translateY(15px)",
                  borderLeft: isMobile
                    ? "2px solid #F5C36A"
                    : "3px solid #F5C36A",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    marginLeft: isMobile ? "-55px" : "0px", // stronger pull
                    fontSize: isMobile ? "1.1rem" : "1.4rem",
                    fontWeight: 500,
                    color: "#ffffff",
                    letterSpacing: "0.04em",
                  }}
                >
                  Discover{" "}
                  <span
                    style={{
                      color: "#F5C36A",
                      fontStyle: "italic",
                      fontWeight: 600,
                    }}
                  >
                    Your Space
                  </span>
                </p>

                <p
                  style={{
                    margin: isMobile ? "6px 0 0" : "10px 0 0",
                    fontSize: isMobile ? "1.05rem" : "1.4rem",
                    fontWeight: 500,
                  }}
                />

                <p
                  style={{
                    margin: 0,
                    marginLeft: isMobile ? "-55px" : "0px", // same pull here
                    fontSize: isMobile ? "1.1rem" : "1.4rem",
                    fontWeight: 500,
                    color: "#ffffff",
                    letterSpacing: "0.04em",
                  }}
                >
                  Expand{" "}
                  <span
                    style={{
                      color: "#F5C36A",
                      fontStyle: "italic",
                      fontWeight: 600,
                    }}
                  >
                    Your Sphere
                  </span>
                </p>

                <p
                  style={{
                    margin: isMobile ? "6px 0 0" : "10px 0 0",
                    fontSize: isMobile ? "1.05rem" : "1.4rem",
                    fontWeight: 500,
                  }}
                />
              </div>

              <div
                style={{
                  marginTop: isMobile ? "32px" : "58px",
                  display: "flex",
                  transform: isMobile ? "none" : "translateX(-140px)",
                  justifyContent: "center",
                }}
              >
                <button
                  style={{
                    padding: isMobile ? "14px 26px" : "16px 42px",
                    fontSize: isMobile ? "12px" : "14px",
                    fontWeight: 700,
                    letterSpacing: isMobile ? "0.14em" : "0.18em",
                    textTransform: "uppercase",
                    color: "#0e0e0e",
                    backgroundColor: "#ffd36a",
                    border: "none",
                    borderRadius: "999px",
                    cursor: "pointer",
                    boxShadow: "0 10px 35px rgba(0,0,0,0.45)",
                    transition:
                      "transform 0.25s ease, box-shadow 0.25s ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 16px 45px rgba(0,0,0,0.55)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 35px rgba(0,0,0,0.45)";
                  }}
                  onClick={() => {
                    setIsInquiryModalOpen(true);
                  }}
                >
                  Book a Private Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


