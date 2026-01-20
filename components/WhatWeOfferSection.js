import React from "react";

const WhatWeOfferSection = ({ isMobile, timelineScrollProgress, timelineSectionRef, setIsModalOpen }) => {
  return (
    <>
      <section
        style={{
          paddingTop: "80px",
          paddingRight: "80px",
          paddingBottom: "60px",
          paddingLeft: "80px",
          background:
            "linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95))",
          minHeight: "30vh",
          backgroundImage: `url('/villa1.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: isMobile ? "scroll" : "fixed",
          color: "#000000",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
          }}
        >
          <h4
            className="connecting-people-heading"
            style={{
              color: "white",
              fontSize: isMobile
                ? "clamp(2.5rem, 12vw, 4rem)"
                : "47px",
              marginTop: isMobile ? "9px" : "26px",
              fontWeight: 600,
              textAlign: "center",
              lineHeight: "1.1",
              textShadow:
                "0 4px 30px rgba(0,0,0,0.6), 0 1px 0 rgba(0,0,0,0.3)",
              transition: "font-size 0.3s ease",
              whiteSpace: "normal",
            }}
          >
            Connecting People With Properties That Matter.
          </h4>
        </div>
      </section>

      <section
        id="what-we-offer"
        ref={timelineSectionRef}
        className="what-we-offer"
        style={{
          padding: "80px 0",
          position: "relative",
          overflow: "hidden",
          background: "#1a1a1a",
        }}
      >
        {/* Background Decorative Elements */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(199, 154, 74, 0.12) 0%, transparent 70%)",
            borderRadius: "50%",
            zIndex: 1,
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "250px",
            height: "250px",
            background:
              "conic-gradient(from 180deg, rgba(199, 154, 74, 0.08) 0deg, transparent 90deg, rgba(199, 154, 74, 0.1) 180deg, transparent 270deg, rgba(199, 154, 74, 0.08) 360deg)",
            zIndex: 1,
            animation: "rotate 25s linear infinite reverse",
          }}
        ></div>

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 className="about-hero-title">What We Offer? </h2>
            <h4
              className="office-subheading"
              style={{ color: "white" }}
            >
              A Seamless Ownership Journey
            </h4>
          </div>

          {/* Timeline Process Flow */}
          <div style={{ position: "relative", marginTop: "50px" }}>
            {/* Central Timeline Line - Dynamic Background */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "0",
                bottom: "0",
                width: "4px",
                background:
                  "linear-gradient(180deg, rgba(199, 154, 74, 0.2) 0%, rgba(212, 175, 106, 0.15) 50%, rgba(199, 154, 74, 0.2) 100%)",
                transform: "translateX(-50%)",
                borderRadius: "2px",
                zIndex: 1,
                boxShadow:
                  "0 0 10px rgba(199, 154, 74, 0.1)",
              }}
            ></div>

            {/* Central Timeline Line - Dynamic Filled Portion */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "0",
                width: "4px",
                height: `${timelineScrollProgress * 100}%`,
                background:
                  "linear-gradient(180deg, rgba(199, 154, 74, 0.8) 0%, rgba(212, 175, 106, 0.9) 50%, rgba(199, 154, 74, 0.8) 100%)",
                transform: "translateX(-50%)",
                borderRadius: "2px",
                zIndex: 2,
                boxShadow:
                  timelineScrollProgress > 0
                    ? "0 0 20px rgba(199, 154, 74, 0.4), 0 0 40px rgba(199, 154, 74, 0.2)"
                    : "none",
                transition: "height 0.1s ease-out",
                overflow: "hidden",
              }}
            >
              {/* Animated glow effect */}
              {timelineScrollProgress > 0.1 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    width: "20px",
                    height: "20px",
                    background:
                      "radial-gradient(circle, rgba(212, 175, 106, 0.6) 0%, transparent 70%)",
                    borderRadius: "50%",
                    transform: "translateX(-50%)",
                    animation: "pulse 2s ease-in-out infinite",
                  }}
                />
              )}
            </div>

            {/* Step 1 - Discovery Consultation */}
            <div
              className="timeline-step"
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "80px",
                position: "relative",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  flex: "1",
                  paddingRight: "50px",
                  textAlign: "right",
                }}
              >
                <div
                  className="timeline-card"
                  style={{
                    display: "inline-block",
                    background:
                      "linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)",
                    padding: "35px 20px",
                    borderRadius: "16px",
                    boxShadow:
                      "0 15px 35px rgba(0, 0, 0, 0.3), 0 5px 15px rgba(199, 154, 74, 0.15)",
                    border:
                      "1px solid rgba(199, 154, 74, 0.3)",
                    maxWidth: "350px",
                    position: "relative",
                    transform: "translateX(0)",
                    transition:
                      "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#f5f5f5",
                      marginBottom: "8px",
                      fontFamily:
                        "'Playfair Display', serif",
                    }}
                  >
                    Discovery Consultation
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#b8b3a8",
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    Define requirements, expectations &
                    aspirations
                  </p>
                </div>
              </div>

              {/* Timeline Node */}
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  background:
                    "linear-gradient(135deg, #c79a4a, #d4af6a)",
                  borderRadius: "50%",
                  border: "3px solid #1a1a1a",
                  boxShadow:
                    "0 0 15px rgba(199, 154, 74, 0.5), 0 0 25px rgba(199, 154, 74, 0.3)",
                  zIndex: 3,
                }}
              ></div>

              <div
                style={{
                  flex: "1",
                  paddingLeft: "50px",
                }}
              >
                <div
                  style={{
                    width: "350px",
                    height: "180px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow:
                      "0 15px 35px rgba(0, 0, 0, 0.4)",
                    border:
                      "2px solid rgba(199, 154, 74, 0.4)",
                    margin: "0 auto",
                    position: "relative",
                    background:
                      "linear-gradient(135deg, rgba(199, 154, 74, 0.1), rgba(199, 154, 74, 0.05))",
                  }}
                >
                  <img
                    src="/1.webp"
                    alt="Consultation Meeting"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter:
                        "brightness(1.05) contrast(1.05) saturate(1.1)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Step 2 - Curated Showcase */}
            <div
              className="timeline-step"
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "80px",
                position: "relative",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  flex: "1",
                  paddingRight: "50px",
                  textAlign: "right",
                }}
              >
                <div
                  style={{
                    width: "350px",
                    height: "180px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)",
                    border: "2px solid rgba(199, 154, 74, 0.4)",
                    margin: "0 auto",
                    position: "relative",
                    background:
                      "linear-gradient(135deg, rgba(199, 154, 74, 0.1), rgba(199, 154, 74, 0.05))",
                  }}
                >
                  <img
                    src="/2.webp"
                    alt="Premium Villa Properties"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter:
                        "brightness(1.05) contrast(1.05) saturate(1.1)",
                    }}
                  />
                </div>
              </div>

              {/* Timeline Node */}
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  background:
                    "linear-gradient(135deg, #c79a4a, #d4af6a)",
                  borderRadius: "50%",
                  border: "3px solid #1a1a1a",
                  boxShadow:
                    "0 0 15px rgba(199, 154, 74, 0.5), 0 0 25px rgba(199, 154, 74, 0.3)",
                  zIndex: 3,
                }}
              ></div>

              <div
                style={{
                  flex: "1",
                  paddingLeft: "50px",
                }}
              >
                <div
                  className="timeline-card"
                  style={{
                    display: "inline-block",
                    background:
                      "linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)",
                    padding: "35px 20px",
                    borderRadius: "16px",
                    boxShadow:
                      "0 15px 35px rgba(0, 0, 0, 0.3), 0 5px 15px rgba(199, 154, 74, 0.15)",
                    border:
                      "1px solid rgba(199, 154, 74, 0.3)",
                    maxWidth: "350px",
                    position: "relative",
                    transform: "translateX(0)",
                    transition:
                      "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#f5f5f5",
                      marginBottom: "8px",
                      fontFamily:
                        "'Playfair Display', serif",
                    }}
                  >
                    Curated Project Showcase
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#b8b3a8",
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    Only premium & value-aligned options
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 - Guided Site Tours */}
            <div
              className="timeline-step"
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "80px",
                position: "relative",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  flex: "1",
                  paddingRight: "50px",
                  textAlign: "right",
                }}
              >
                <div
                  className="timeline-card"
                  style={{
                    display: "inline-block",
                    background:
                      "linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)",
                    padding: "35px 20px",
                    borderRadius: "16px",
                    boxShadow:
                      "0 15px 35px rgba(0, 0, 0, 0.3), 0 5px 15px rgba(199, 154, 74, 0.15)",
                    border:
                      "1px solid rgba(199, 154, 74, 0.3)",
                    maxWidth: "350px",
                    position: "relative",
                    transform: "translateX(0)",
                    transition:
                      "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#f5f5f5",
                      marginBottom: "8px",
                      fontFamily:
                        "'Playfair Display', serif",
                    }}
                  >
                    Guided Site Tours
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#b8b3a8",
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    Experience spaces before deciding
                  </p>
                </div>
              </div>

              {/* Timeline Node */}
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  background:
                    "linear-gradient(135deg, #c79a4a, #d4af6a)",
                  borderRadius: "50%",
                  border: "3px solid #1a1a1a",
                  boxShadow:
                    "0 0 15px rgba(199, 154, 74, 0.5), 0 0 25px rgba(199, 154, 74, 0.3)",
                  zIndex: 3,
                }}
              ></div>

              <div
                style={{
                  flex: "1",
                  paddingLeft: "50px",
                }}
              >
                <div
                  style={{
                    width: "350px",
                    height: "180px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow:
                      "0 15px 35px rgba(0, 0, 0, 0.4)",
                    border:
                      "2px solid rgba(199, 154, 74, 0.4)",
                    margin: "0 auto",
                    position: "relative",
                    background:
                      "linear-gradient(135deg, rgba(199, 154, 74, 0.1), rgba(199, 154, 74, 0.05))",
                  }}
                >
                  <img
                    src="/3.webp"
                    alt="Luxury Apartment Tour"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter:
                        "brightness(1.05) contrast(1.05) saturate(1.1)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Step 4 - Negotiation & Closure */}
            <div
              className="timeline-step"
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "80px",
                position: "relative",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  flex: "1",
                  paddingRight: "50px",
                  textAlign: "right",
                }}
              >
                <div
                  style={{
                    width: "350px",
                    height: "180px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow:
                      "0 15px 35px rgba(0, 0, 0, 0.4)",
                    border:
                      "2px solid rgba(199, 154, 74, 0.4)",
                    margin: "0 auto",
                    position: "relative",
                    background:
                      "linear-gradient(135deg, rgba(199, 154, 74, 0.1), rgba(199, 154, 74, 0.05))",
                  }}
                >
                  <img
                    src="/4.webp"
                    alt="Commercial Property Negotiation"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter:
                        "brightness(1.05) contrast(1.05) saturate(1.1)",
                    }}
                  />
                </div>
              </div>

              {/* Timeline Node */}
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  background:
                    "linear-gradient(135deg, #c79a4a, #d4af6a)",
                  borderRadius: "50%",
                  border: "3px solid #1a1a1a",
                  boxShadow:
                    "0 0 15px rgba(199, 154, 74, 0.5), 0 0 25px rgba(199, 154, 74, 0.3)",
                  zIndex: 3,
                }}
              ></div>

              <div
                style={{
                  flex: "1",
                  paddingLeft: "50px",
                }}
              >
                <div
                  className="timeline-card"
                  style={{
                    display: "inline-block",
                    background:
                      "linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)",
                    padding: "35px 20px",
                    borderRadius: "16px",
                    boxShadow:
                      "0 15px 35px rgba(0, 0, 0, 0.3), 0 5px 15px rgba(199, 154, 74, 0.15)",
                    border:
                      "1px solid rgba(199, 154, 74, 0.3)",
                    maxWidth: "350px",
                    position: "relative",
                    transform: "translateX(0)",
                    transition:
                      "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#f5f5f5",
                      marginBottom: "8px",
                      fontFamily:
                        "'Playfair Display', serif",
                    }}
                  >
                    Negotiation & Closure
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#b8b3a8",
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    Transparent & confident pricing
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 - Complete Assistance */}
            <div
              className="timeline-step"
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "60px",
                position: "relative",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  flex: "1",
                  paddingRight: "50px",
                  textAlign: "right",
                }}
              >
                <div
                  className="timeline-card"
                  style={{
                    display: "inline-block",
                    background:
                      "linear-gradient(135deg, rgba(199, 154, 74, 0.1), rgba(199, 154, 74, 0.05))",
                    padding: "35px 20px",
                    borderRadius: "16px",
                    boxShadow:
                      "0 15px 35px rgba(0, 0, 0, 0.4)",
                    border:
                      "1px solid rgba(199, 154, 74, 0.4)",
                    maxWidth: "350px",
                    position: "relative",
                    transform: "scale(1.02)",
                    transition:
                      "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "8px",
                      fontFamily:
                        "'Playfair Display', serif",
                    }}
                  >
                    Complete Assistance
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "rgba(255, 255, 255, 0.9)",
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    We simplify everything
                  </p>
                </div>
              </div>

              {/* Timeline Node */}
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  background:
                    "linear-gradient(135deg, #c79a4a, #d4af6a)",
                  borderRadius: "50%",
                  border: "3px solid #1a1a1a",
                  boxShadow:
                    "0 0 20px rgba(199, 154, 74, 0.6), 0 0 30px rgba(199, 154, 74, 0.4)",
                  zIndex: 3,
                  animation: "pulse 2s ease-in-out infinite",
                }}
              ></div>

              <div
                style={{
                  flex: "1",
                  paddingLeft: "50px",
                }}
              >
                <div
                  style={{
                    width: "350px",
                    height: "180px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow:
                      "0 15px 35px rgba(0, 0, 0, 0.4)",
                    border:
                      "2px solid rgba(199, 154, 74, 0.4)",
                    margin: "0 auto",
                    position: "relative",
                    background:
                      "linear-gradient(135deg, rgba(199, 154, 74, 0.1), rgba(199, 154, 74, 0.05))",
                  }}
                >
                  <img
                    src="/5.webp"
                    alt="Property Handover & Keys"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter:
                        "brightness(1.05) contrast(1.05) saturate(1.1)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Impact Statement */}
          <div
            style={{
              textAlign: "center",
              marginTop: "80px",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "30px",
                marginBottom: "50px",
              }}
            >
              <div
                style={{
                  padding: "30px",
                  background:
                    "linear-gradient(135deg, #c79a4a 0%, #d4af6a 100%)",
                  borderRadius: "16px",
                  boxShadow:
                    "0 20px 40px rgba(199, 154, 74, 0.4), 0 10px 25px rgba(199, 154, 74, 0.3), 0 0 30px rgba(199, 154, 74, 0.2)",
                  border:
                    "2px solid rgba(255, 255, 255, 0.25)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "black",
                    marginBottom: "8px",
                  }}
                >
                  Effortless
                </h3>
                <p
                  style={{
                    fontSize: "20px",
                    color: "white",
                    margin: 0,
                  }}
                >
                  Your journey is seamless
                </p>
              </div>
              <div
                style={{
                  padding: "30px",
                  background:
                    "linear-gradient(135deg, #c79a4a 0%, #d4af6a 100%)",
                  borderRadius: "16px",
                  boxShadow:
                    "0 20px 40px rgba(199, 154, 74, 0.4), 0 10px 25px rgba(199, 154, 74, 0.3), 0 0 30px rgba(199, 154, 74, 0.2)",
                  border:
                    "2px solid rgba(255, 255, 255, 0.25)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "black",
                    marginBottom: "8px",
                  }}
                >
                  Exceptional
                </h3>
                <p
                  style={{
                    fontSize: "20px",
                    color: "white",
                    margin: 0,
                  }}
                >
                  The destination is extraordinary
                </p>
              </div>
            </div>

            <p
              style={{
                fontSize: "18px",
                color: "#f5f5f5",
                fontStyle: "italic",
                fontWeight: 500,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              "Crafted for Comfort, Precision & Peace of Mind"
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeOfferSection;

