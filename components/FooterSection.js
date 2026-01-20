import React from "react";

const FooterSection = ({
  isMobile,
  isModalOpen,
  setIsModalOpen,
  isInquiryModalOpen,
  setIsInquiryModalOpen,
  dateOptions,
}) => {
  return (
    <>
      <footer
        className="footer"
        style={{
          background: "#111111",
          color: "#F2C66E",
          padding: "80px 24px 40px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "48px",
              marginBottom: "60px",
              ...(isMobile && {
                gridTemplateColumns: "1fr",
                gap: "32px",
                textAlign: "left",
              }),
            }}
          >
            {/* Logo + description + socials */}
            <div style={{ textAlign: isMobile ? "left" : "center" }}>
              <div
                style={{
                  marginTop: "0",
                  marginRight: "0",
                  marginBottom: "20px",
                  marginLeft: "0",
                }}
              >
                <img
                  src="/logo2.png"
                  alt="Space Sphere Logo"
                  style={{
                    height: isMobile ? "60px" : "140px",
                    maxHeight: isMobile ? "140px" : "160px",
                    maxWidth: isMobile ? "90px" : "180px",
                    width: "auto",
                    display: "block",
                    marginTop: "0px",
                    marginRight: isMobile ? "auto" : "0px",
                    marginBottom: isMobile ? "10px" : "20px",
                    marginLeft: isMobile ? "-24px" : "83px",
                    transition: "all 0.3s ease",
                  }}
                />
              </div>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: "1.7",
                  color: "#b8b3a8",
                  margin: "0 0 16px 0",
                  transform: "translateY(-15px)",
                }}
              >
                Where Luxury Meets Location. Where Investments Become Legacies.
              </p>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.6",
                  color: "#8a857a",
                  margin: "0 0 24px 0",
                  fontStyle: "italic",
                  transform: "translateY(-15px)",
                }}
              >
                Your Trusted Partner for Smart Real Estate Choices.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  justifyContent: isMobile ? "flex-start" : "center",
                }}
              >
                {/* Social icons */}
                {[
                  // Facebook
                  (props) => (
                    <svg width="38" height="38" fill="currentColor" viewBox="0 0 24 24" {...props}>
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                  // Twitter
                  (props) => (
                    <svg width="38" height="38" fill="currentColor" viewBox="0 0 24 24" {...props}>
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  ),
                  // Instagram
                  (props) => (
                    <svg width="38" height="38" fill="currentColor" viewBox="0 0 24 24" {...props}>
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319.937 20.651.525 19.86.22c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.07-1.649-.07-4.844 0-3.18.015-3.586.07-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  ),
                  // LinkedIn
                  (props) => (
                    <svg width="38" height="38" fill="currentColor" viewBox="0 0 24 24" {...props}>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                ].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "rgba(199, 154, 74, 0.1)",
                      border: "1px solid rgba(199, 154, 74, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#c79a4a",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div style={{ textAlign: isMobile ? "left" : "center" }}>
              <h4
                style={{
                  fontSize: isMobile ? "22px" : "20px",
                  fontWeight: 600,
                  color: "#F2C66E",
                  margin: "0 0 20px 0",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Quick Links
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gap: "12px",
                  textAlign: isMobile ? "left" : "center",
                }}
              >
                {[
                  { href: "#home", label: "Home" },
                  { href: "#about", label: "About Us" },
                  { href: "#projects", label: "Projects" },
                  { href: "#contact", label: "Contact Us" },
                ].map((item, idx) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={
                        "footer-nav-link" +
                        (idx === 0 ? " footer-nav-link-first" : "")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }
                      }}
                      style={{
                        color: "#b8b3a8",
                        textDecoration: "none",
                        fontSize: "17px",
                        transition: "color 0.3s ease",
                        cursor: "pointer",
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div style={{ textAlign: isMobile ? "left" : "center" }}>
              <h4
                style={{
                  fontSize: isMobile ? "22px" : "20px",
                  fontWeight: 600,
                  color: "#F2C66E",
                  margin: "0 0 20px 0",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Projects
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gap: "12px",
                  textAlign: isMobile ? "left" : "center",
                }}
              >
                <li>
                  <a
                    href="#projects"
                    className="footer-nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector("#projects");
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                    style={{
                      color: "#b8b3a8",
                      fontSize: "17px",
                      lineHeight: "1.6",
                      marginBottom: "8px",
                    }}
                  >
                    Avinea by Vyom-Sigma
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div style={{ textAlign: isMobile ? "left" : "center" }}>
              <h4
                className="office-subheading"
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#F2C66E",
                  margin: "0 0 20px 0",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Contact Info
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gap: "16px",
                  textAlign: isMobile ? "left" : "center",
                }}
              >
                <li
                  style={{
                    display: "flex",
                    alignItems: "start",
                    gap: "12px",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    fill="#c79a4a"
                    viewBox="0 0 24 24"
                    style={{ marginTop: "5px", flexShrink: 0 }}
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>

                  <div
                    style={{ textAlign: isMobile ? "left" : "left" }}
                  >
                    <div
                      style={{
                        color: "#b8b3a8",
                        fontSize: "17px",
                        lineHeight: "1.6",
                        marginBottom: "8px",
                      }}
                    >
                      204 Sapphire Chambers, First Floor, Suite 1186, Baner
                      Road, Baner, Pune 411045
                    </div>
                  </div>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    fill="#c79a4a"
                    viewBox="0 0 24 24"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <a
                    href="tel:+919121772320"
                    style={{
                      color: "#b8b3a8",
                      textDecoration: "none",
                      fontSize: isMobile ? "21px" : "17px",
                    }}
                  >
                    +91 9121772320
                  </a>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    fill="#c79a4a"
                    viewBox="0 0 24 24"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <a
                    href="mailto:crm@spacesphere.in"
                    style={{
                      color: "#b8b3a8",
                      textDecoration: "none",
                      fontSize: isMobile ? "21px" : "17px",
                    }}
                  >
                    crm@spacesphere.in
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: "1px solid rgba(199, 154, 74, 0.2)",
              paddingTop: "40px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: isMobile ? "flex-start" : "center",
              textAlign: isMobile ? "left" : "center",
            }}
          >
            <p
              style={{
                color: "#8a857a",
                fontSize: "16px",
                margin: 0,
              }}
            >
              © {new Date().getFullYear()} SpaceSphere Realty. All rights
              reserved.
            </p>

            <div
              style={{
                display: "flex",
                gap: "24px",
                flexWrap: "wrap",
                justifyContent: isMobile ? "flex-start" : "center",
                textAlign: isMobile ? "left" : "center",
                width: "100%",
              }}
            >
              {["Privacy Policy", "Terms & Conditions", "Disclaimer"].map(
                (label, idx) => (
                  <React.Fragment key={label}>
                    {idx !== 0 && (
                      <span style={{ color: "#8a857a" }}>|</span>
                    )}
                    <a
                      href="#"
                      style={{
                        color: "#8a857a",
                        textDecoration: "none",
                        fontSize: "16px",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {label}
                    </a>
                  </React.Fragment>
                )
              )}
            </div>
          </div>
        </div>
      </footer>

      {/* Popup Modal Form */}
      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsModalOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100000,
            padding: "20px",
            animation: "fadeIn 0.3s ease-out",
            pointerEvents: "auto",
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: isMobile ? "12px" : "40px",
              maxWidth: isMobile ? "95vw" : "500px",
              width: "100%",
              maxHeight: isMobile ? "95vh" : "95vh",
              overflowY: "auto",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
              animation: "slideUp 0.3s ease-out",
              position: "relative",
              zIndex: 100001,
              pointerEvents: "auto",
            }}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: "absolute",
                top: "8px",
                right: "16px",
                background: "transparent",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "#666",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              ×
            </button>

            <h2
              style={{
                fontSize: isMobile ? "18px" : "28px",
                fontWeight: 700,
                color: "#1a1a1a",
                marginBottom: isMobile ? "4px" : "8px",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Get In Touch
            </h2>
            <p
              style={{
                fontSize: isMobile ? "12px" : "16px",
                color: "#666",
                marginBottom: isMobile ? "10px" : "32px",
              }}
            >
              Fill out the form below and we'll get back to you shortly.
            </p>

            <form
              action="https://formspree.io/f/xaqqylqe"
              method="POST"
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                try {
                  const response = await fetch(
                    "https://formspree.io/f/xaqqylqe",
                    {
                      method: "POST",
                      body: formData,
                      headers: {
                        Accept: "application/json",
                      },
                    }
                  );
                  if (response.ok) {
                    alert(
                      "Thank you for your inquiry! Our team will contact you soon to schedule your private consultation."
                    );
                    setIsModalOpen(false);
                  } else {
                    alert("Something went wrong. Please try again.");
                  }
                } catch (error) {
                  console.error("Error:", error);
                  alert("Something went wrong. Please try again.");
                }
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: "8px",
                  }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "15px",
                    transition: "border-color 0.2s ease",
                    boxSizing: "border-box",
                    color: "black",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#c79a4a")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#ddd")
                  }
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: isMobile ? "11px" : "14px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: isMobile ? "2px" : "8px",
                  }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  style={{
                    width: "100%",
                    padding: isMobile ? "8px 10px" : "12px 16px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: isMobile ? "13px" : "15px",
                    transition: "border-color 0.2s ease",
                    boxSizing: "border-box",
                    color: "black",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#c79a4a")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#ddd")
                  }
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: isMobile ? "11px" : "14px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: isMobile ? "2px" : "8px",
                  }}
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  style={{
                    width: "100%",
                    padding: isMobile ? "8px 10px" : "12px 16px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: isMobile ? "13px" : "15px",
                    transition: "border-color 0.2s ease",
                    boxSizing: "border-box",
                    color: "black",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#c79a4a")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#ddd")
                  }
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: isMobile ? "11px" : "14px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: isMobile ? "2px" : "8px",
                  }}
                >
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  name="whatsappNumber"
                  style={{
                    width: "100%",
                    padding: isMobile ? "8px 10px" : "12px 16px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: isMobile ? "13px" : "15px",
                    transition: "border-color 0.2s ease",
                    boxSizing: "border-box",
                    color: "black",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#c79a4a")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#ddd")
                  }
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: isMobile ? "4px" : "12px",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: isMobile ? "11px" : "14px",
                      fontWeight: 600,
                      color: "#1a1a1a",
                      marginBottom: isMobile ? "2px" : "8px",
                    }}
                  >
                    Preferred Time *
                  </label>
                  {isMobile ? (
                    <select
                      name="preferredTime"
                      required
                      defaultValue=""
                      style={{
                        width: "100%",
                        padding: isMobile ? "8px 10px" : "12px 16px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        fontSize: isMobile ? "13px" : "15px",
                        transition: "border-color 0.2s ease",
                        boxSizing: "border-box",
                        color: "black",
                        appearance: "none",
                        cursor: "pointer",
                        backgroundColor: "white",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "#c79a4a")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "#ddd")
                      }
                    >
                      <option value="" disabled>
                        Select Time
                      </option>
                      {[
                        "09:00",
                        "10:00",
                        "11:00",
                        "12:00",
                        "14:00",
                        "15:00",
                        "16:00",
                        "17:00",
                      ].map((time) => (
                        <option key={time} value={time}>
                          {time.replace(
                            /(\d{2}):(\d{2})/,
                            (_, h, m) =>
                              `${(+h % 12 || 12)
                                .toString()
                                .padStart(2, "0")}:${m} ${
                                +h < 12 ? "AM" : "PM"
                              }`
                          )}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="time"
                      name="preferredTime"
                      required
                      style={{
                        width: "100%",
                        padding: isMobile ? "8px 10px" : "12px 16px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        fontSize: isMobile ? "13px" : "15px",
                        transition: "border-color 0.2s ease",
                        boxSizing: "border-box",
                        color: "black",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "#c79a4a")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "#ddd")
                      }
                    />
                  )}
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: isMobile ? "11px" : "14px",
                      fontWeight: 600,
                      color: "#1a1a1a",
                      marginBottom: isMobile ? "2px" : "8px",
                    }}
                  >
                    Preferred Date *
                  </label>
                  {isMobile ? (
                    <select
                      name="preferredDate"
                      required
                      defaultValue=""
                      style={{
                        width: "100%",
                        padding: isMobile ? "8px 10px" : "12px 16px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        fontSize: isMobile ? "13px" : "15px",
                        transition: "border-color 0.2s ease",
                        boxSizing: "border-box",
                        color: "black",
                        appearance: "none",
                        cursor: "pointer",
                        backgroundColor: "white",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "#c79a4a")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "#ddd")
                      }
                    >
                      <option value="" disabled>
                        Select Date
                      </option>
                      {dateOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="date"
                      name="preferredDate"
                      required
                      style={{
                        width: "100%",
                        padding: isMobile ? "8px 10px" : "12px 16px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        fontSize: isMobile ? "13px" : "15px",
                        transition: "border-color 0.2s ease",
                        boxSizing: "border-box",
                        color: "black",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "#c79a4a")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "#ddd")
                      }
                    />
                  )}
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: isMobile ? "11px" : "14px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: isMobile ? "2px" : "8px",
                  }}
                >
                  Interests
                </label>
                <div
                  style={{
                    padding: isMobile ? "8px" : "16px",
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    display: "grid",
                    gridTemplateColumns: isMobile
                      ? "repeat(2, 1fr)"
                      : "repeat(3, 1fr)",
                    gap: isMobile ? "6px" : "12px",
                  }}
                >
                  {["2 BHK", "3 BHK", "4 BHK", "5 BHK", "6 BHK"].map(
                    (item) => (
                      <label
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: isMobile ? "4px" : "8px",
                          cursor: "pointer",
                          fontSize: isMobile ? "11px" : "14px",
                          color: "#1a1a1a",
                        }}
                      >
                        <input
                          type="checkbox"
                          name="interests"
                          value={item}
                          style={{
                            width: isMobile ? "12px" : "16px",
                            height: isMobile ? "12px" : "16px",
                            cursor: "pointer",
                            accentColor: "#c79a4a",
                          }}
                        />
                        {item}
                      </label>
                    )
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="cta-button"
                style={{
                  width: "100%",
                  padding: isMobile ? "10px 16px" : "14px 26px",
                  marginTop: isMobile ? "4px" : "8px",
                  fontSize: isMobile ? "13px" : "16px",
                  cursor: "pointer",
                  background:
                    "linear-gradient(135deg, #c79a4a 0%, #d4af6a 100%)",
                  border: "none",
                  borderRadius: "8px",
                  color: "white",
                  fontWeight: 600,
                  transition:
                    "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(199, 154, 74, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Inquiry Form Modal */}
      {isInquiryModalOpen && (
        <div
          className="inquiry-modal-overlay"
          onClick={() => setIsInquiryModalOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100000,
            padding: "20px",
            animation: "fadeIn 0.3s ease-out",
            pointerEvents: "auto",
          }}
        >
          <div
            className="inquiry-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: isMobile ? "20px" : "48px",
              maxWidth: isMobile ? "90vw" : "600px",
              width: "100%",
              maxHeight: "95vh",
              overflowY: "auto",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
              animation: "slideUp 0.3s ease-out",
              position: "relative",
              zIndex: 100001,
              pointerEvents: "auto",
            }}
          >
            <button
              onClick={() => setIsInquiryModalOpen(false)}
              style={{
                position: "absolute",
                top: isMobile ? "-1px" : "8px",
                right: isMobile ? "1px" : "16px",
                background: "transparent",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "#1a1a1a",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              ×
            </button>

            <h2
              style={{
                fontSize: isMobile ? "20px" : "28px",
                fontWeight: 700,
                color: "#1a1a1a",
                marginBottom: "8px",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Get In Touch
            </h2>

            <p
              style={{
                fontSize: "16px",
                color: "#666",
                marginBottom: isMobile ? "20px" : "35px",
                marginTop: isMobile ? "10px" : "0px",
              }}
            >
              Let us understand your requirements better. Please fill
              out the form below.
            </p>

            <form
              action="https://formspree.io/f/xaqqylqe"
              method="POST"
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                try {
                  const response = await fetch(
                    "https://formspree.io/f/xaqqylqe",
                    {
                      method: "POST",
                      body: formData,
                      headers: {
                        Accept: "application/json",
                      },
                    }
                  );
                  if (response.ok) {
                    alert(
                      "Thank you for your inquiry! Our team will contact you soon to schedule your private consultation."
                    );
                    setIsInquiryModalOpen(false);
                  } else {
                    alert("Something went wrong. Please try again.");
                  }
                } catch (error) {
                  console.error("Error:", error);
                  alert("Something went wrong. Please try again.");
                }
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: "8px",
                  }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "15px",
                    transition: "border-color 0.2s ease",
                    boxSizing: "border-box",
                    color: "black",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#c79a4a")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#ddd")
                  }
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: "8px",
                  }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "15px",
                    transition: "border-color 0.2s ease",
                    boxSizing: "border-box",
                    color: "black",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#c79a4a")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#ddd")
                  }
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: "8px",
                  }}
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "15px",
                    transition: "border-color 0.2s ease",
                    boxSizing: "border-box",
                    color: "black",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#c79a4a")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#ddd")
                  }
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: "8px",
                  }}
                >
                  Additional Message
                </label>
                <textarea
                  name="message"
                  rows={isMobile ? 1 : 3}
                  style={{
                    width: "100%",
                    padding: "0px 5px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "15px",
                    transition: "border-color 0.2s ease",
                    boxSizing: "border-box",
                    resize: "vertical",
                    fontFamily: "inherit",
                    color: "black",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#c79a4a")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#ddd")
                  }
                  placeholder="Tell us about your requirements"
                />
              </div>

              <button
                type="submit"
                className="cta-button"
                style={{
                  width: "100%",
                  padding: "14px 26px",
                  marginTop: "8px",
                  fontSize: "16px",
                  cursor: "pointer",
                  background:
                    "linear-gradient(135deg, #c79a4a 0%, #d4af6a 100%)",
                  border: "none",
                  borderRadius: "8px",
                  color: "white",
                  fontWeight: 600,
                  transition:
                    "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(199, 154, 74, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterSection;
