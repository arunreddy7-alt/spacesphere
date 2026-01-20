import React from "react";

const ClientImpressionSection = () => {
  return (
    <section
      id="client-impression"
      style={{
        padding: "30px 24px",
        background: "",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          fontSize: "120px",
          color: "rgba(199, 154, 74, 0.03)",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          lineHeight: 1,
          transform: "rotate(-15deg)",
          zIndex: 0,
        }}
      >
        "
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          fontSize: "120px",
          color: "rgba(199, 154, 74, 0.03)",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          lineHeight: 1,
          transform: "rotate(15deg)",
          zIndex: 0,
        }}
      >
        "
      </div>

      <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 className="about-hero-title" style={{ textAlign: "center" }}>
            Client Impressions{" "}
          </h2>
          <h4 className="office-subheading">Real Words. Refined Experiences.</h4>
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "linear-gradient(90deg, #c79a4a, #d4af6a)",
              margin: "15px auto 0",
            }}
          ></div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            alignItems: "stretch",
            position: "relative",
          }}
        >
          {/* Featured Testimonial - Left Side */}
          <div
            style={{
              padding: "22px 18px",
              background: "linear-gradient(135deg, #ffffff 0%, #fefefe 100%)",
              borderRadius: "16px",
              boxShadow:
                "0 6px 24px rgba(0,0,0,0.08), 0 2px 6px rgba(199, 154, 74, 0.1)",
              border: "1px solid rgba(199, 154, 74, 0.15)",
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* Decorative corner accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "80px",
                height: "80px",
                background:
                  "linear-gradient(135deg, rgba(199, 154, 74, 0.1) 0%, transparent 70%)",
                borderRadius: "0 16px 0 100%",
                zIndex: 0,
              }}
            ></div>

            {/* Large quote mark */}
            <div
              style={{
                fontSize: "80px",
                color: "rgba(199, 154, 74, 0.15)",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                lineHeight: 0.8,
                marginBottom: "15px",
                position: "relative",
                zIndex: 1,
              }}
            >
              "
            </div>

            {/* Star rating */}
            <div
              style={{
                display: "flex",
                gap: "4px",
                marginBottom: "18px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#c79a4a"
                  style={{
                    filter: "drop-shadow(0 1px 2px rgba(199, 154, 74, 0.3))",
                  }}
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#1a1a1a",
                fontStyle: "italic",
                marginBottom: "24px",
                position: "relative",
                zIndex: 1,
                fontWeight: 500,
              }}
            >
              "More than property guidance - it felt like{" "}
              <strong style={{ color: "#c79a4a", fontStyle: "normal" }}>
                concierge service
              </strong>
              ."
            </p>

            <div
              style={{
                borderTop: "2px solid rgba(199, 154, 74, 0.2)",
                paddingTop: "18px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #c79a4a, #d4af6a)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                VP
              </div>
              <div>
                <p
                  style={{
                    fontSize: "17px",
                    color: "#1a1a1a",
                    fontWeight: 600,
                    margin: "0 0 4px 0",
                  }}
                >
                  Venkat Prasad V
                </p>
                <p style={{ fontSize: "15px", color: "#666", margin: 0 }}>
                  Premium Property Owner
                </p>
              </div>
            </div>
          </div>

          {/* Second Testimonial - Right Side (Smaller, Offset) */}
          <div
            style={{
              padding: "20px 16px",
              background: "white",
              borderRadius: "16px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              border: "1px solid rgba(199, 154, 74, 0.1)",
              position: "relative",
              transform: "translateY(30px)",
              zIndex: 2,
              marginTop: "-10px",
            }}
          >
            {/* Decorative line accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "3px",
                height: "100%",
                background: "linear-gradient(180deg, #c79a4a, #d4af6a)",
                borderRadius: "16px 0 0 16px",
              }}
            ></div>

            {/* Decorative corner accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "80px",
                height: "80px",
                background:
                  "linear-gradient(135deg, rgba(199, 154, 74, 0.1) 0%, transparent 70%)",
                borderRadius: "16px 0 0 0",
                zIndex: 0,
              }}
            ></div>

            {/* Large quote mark */}
            <div
              style={{
                fontSize: "80px",
                color: "rgba(199, 154, 74, 0.15)",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                lineHeight: 0.8,
                marginBottom: "15px",
                position: "relative",
                zIndex: 1,
              }}
            >
              "
            </div>

            {/* Star rating */}
            <div
              style={{
                display: "flex",
                gap: "4px",
                marginBottom: "18px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#c79a4a"
                  style={{
                    filter: "drop-shadow(0 1px 2px rgba(199, 154, 74, 0.3))",
                  }}
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#1a1a1a",
                fontStyle: "italic",
                marginBottom: "24px",
                position: "relative",
                zIndex: 1,
                fontWeight: 500,
              }}
            >
              "Luxury curated to precision.{" "}
              <strong style={{ color: "#c79a4a", fontStyle: "normal" }}>
                Transparent, tasteful, trustworthy
              </strong>
              ."
            </p>

            <div
              style={{
                borderTop: "2px solid rgba(199, 154, 74, 0.2)",
                paddingTop: "18px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #c79a4a, #d4af6a)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                PM
              </div>
              <div>
                <p
                  style={{
                    fontSize: "17px",
                    color: "#1a1a1a",
                    fontWeight: 600,
                    margin: "0 0 4px 0",
                  }}
                >
                  Prathamesh Mhatre
                </p>
                <p style={{ fontSize: "15px", color: "#666", margin: 0 }}>
                  Investment Partner
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom accent */}
        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 24px",
              background: "rgba(199, 154, 74, 0.05)",
              borderRadius: "50px",
              border: "1px solid rgba(199, 154, 74, 0.15)",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#c79a4a",
              }}
            ></div>
            <p
              style={{
                fontSize: "18px",
                color: "#666",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              Trusted by discerning clients across Pune & Hyderabad
            </p>
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#c79a4a",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientImpressionSection;

