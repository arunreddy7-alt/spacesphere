import React from "react";

const ConnectWithUsSection = ({
  contactSectionRef,
  contactSectionInView,
  setIsInquiryModalOpen,
}) => {
  return (
    <section
      id="contact"
      ref={contactSectionRef}
      className="luxury-connect-section"
      style={{
        position: "relative",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: 'url("/contact.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        overflow: "hidden",
      }}
    >
      {/* Parallax Background Layer */}
      <div
        className="parallax-bg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/villa1.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          transform: "translateZ(0)",
          willChange: "transform",
        }}
      />

      {/* Dark Glassmorphism Overlay */}
      <div
        className="glassmorphism-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(15, 15, 15, 0.4)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />

      {/* Soft Vignette Edges */}
      <div
        className="vignette-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.3) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content Container */}
      <div
        className="connect-content"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          width: "100%",
          padding: "80px 24px",
          textAlign: "center",
          opacity: contactSectionInView ? 1 : 0,
          transform: contactSectionInView
            ? "translateY(0)"
            : "translateY(50px)",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Primary Heading */}
        <h1
          className="consultation-heading"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#F2C66E",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            margin: "0 0 24px 0",
            fontFamily: "'Playfair Display', serif",
            textShadow: "0 2px 15px rgba(0, 0, 0, 0.5)",
            lineHeight: 1.2,
          }}
        ></h1>

        <h1
          className="connect-heading"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 300,
            color: "#ffffff",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            margin: "0 0 32px 0",
            fontFamily:
              "'Inter', 'Neue Haas Grotesk', 'Helvetica Neue', sans-serif",
            textShadow: "0 2px 20px rgba(0, 0, 0, 0.5)",
            lineHeight: 1.1,
          }}
        >
          CONNECT WITH US
        </h1>

        {/* Subheading */}
        <p
          className="connect-subheading"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            color: "rgba(255, 255, 255, 0.88)",
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            margin: "0 0 64px 0",
            fontWeight: 400,
            textShadow: "0 1px 10px rgba(0, 0, 0, 0.3)",
            lineHeight: 1.4,
          }}
        >
          Let's Discover Your Next Address of Prestige.
        </p>

        {/* Premium CTAs */}
        <div
          className="premium-ctas"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {/* Primary CTA - Book a Private Consultation */}
          <button
            className="primary-cta"
            onClick={() => {
              setIsInquiryModalOpen(true);
            }}
            style={{
              background: "transparent",
              border: "2px solid #C79A4A",
              color: "#ffffff",
              padding: "18px 32px",
              fontSize: "0.9rem",
              fontWeight: 300,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              backdropFilter: "blur(10px)",
              position: "relative",
              overflow: "hidden",
              minWidth: "280px",
              flex: "1",
              maxWidth: "320px",
              fontFamily:
                "'Inter', 'Neue Haas Grotesk', 'Helvetica Neue', sans-serif",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 15px 40px rgba(199, 154, 74, 0.4)";
              e.currentTarget.style.borderColor = "#D4AF6A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "#C79A4A";
            }}
          >
            <span style={{ position: "relative", zIndex: 2 }}>
              Book a Private Consultation
            </span>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(90deg, transparent, rgba(199, 154, 74, 0.1), transparent)",
                transition: "left 0.6s ease",
              }}
              className="cta-shine"
            />
          </button>

          {/* Secondary CTA - Schedule a Site Experience */}
          <button
            className="secondary-cta"
            onClick={() => {
              setIsInquiryModalOpen(true);
            }}
            style={{
              background: "transparent",
              border: "2px solid #C79A4A",
              color: "#ffffff",
              padding: "18px 32px",
              fontSize: "0.9rem",
              fontWeight: 300,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              backdropFilter: "blur(10px)",
              position: "relative",
              overflow: "hidden",
              minWidth: "280px",
              flex: "1",
              maxWidth: "320px",
              fontFamily:
                "'Inter', 'Neue Haas Grotesk', 'Helvetica Neue', sans-serif",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 15px 40px rgba(199, 154, 74, 0.4)";
              e.currentTarget.style.borderColor = "#D4AF6A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "#C79A4A";
            }}
          >
            Schedule a Site Experience
          </button>
        </div>
      </div>

      {/* Floating Elements for Depth */}
      <div
        className="floating-element"
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "80px",
          height: "80px",
          background:
            "radial-gradient(circle, rgba(199, 154, 74, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite",
          zIndex: 1,
        }}
      />
      <div
        className="floating-element"
        style={{
          position: "absolute",
          bottom: "25%",
          right: "15%",
          width: "60px",
          height: "60px",
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite reverse",
          zIndex: 1,
        }}
      />
    </section>
  );
};

export default ConnectWithUsSection;