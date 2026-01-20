"use client";
import React from "react";
import {
  FaStar,
  FaBullseye,
  FaShieldAlt,
  FaHeart,
  FaBolt,
} from "react-icons/fa";

export default function SpaceSphereEdge() {
  const items = [
    { title: "Personalized Curation", desc: "Tailored to taste & investment vision", icon: <FaStar /> },
    { title: "Elite Developer", desc: "Access to elite developers across Pune & Hyderabad", icon: <FaBullseye /> },
    { title: "Complete Transparency", desc: "No grey lines, no inflated numbers", icon: <FaShieldAlt /> },
    { title: "End-to-End Support", desc: "Till the moment you hold your keys", icon: <FaHeart /> },
    { title: "Investment-Led Advisory", desc: "Growth, rental yield & long-term value", icon: <FaBolt /> },
  ];

  return (
    <div style={styles.section}>
      {/* 3D elements scattered (not center) */}
      <div style={{ ...styles.orb, top: "6%", left: "3%" }} />
      <div style={{ ...styles.orbSmall, top: "20%", right: "5%" }} />
      <div style={{ ...styles.orb, bottom: "10%", left: "8%" }} />
      <div style={{ ...styles.orbSmall, bottom: "18%", right: "10%" }} />
      <div style={{ ...styles.orbTiny, top: "40%", left: "2%" }} />
      <div style={{ ...styles.orbTiny, top: "45%", right: "2%" }} />

      {/* Glow layers */}
      <div style={styles.bgGlow1}></div>
      <div style={styles.bgGlow2}></div>

      <h2 className="about-hero-title">THE SPACE SPHERE EDGE</h2>
<h4 className="office-subheading5">
  Because luxury deserves precision.
</h4>


      {/* First row */}
      <div style={styles.row} className="row">
        {items.slice(0, 3).map((item, i) => (
          <div key={i} className="lux-card" style={styles.card}>
            <div style={styles.icon}>{item.icon}</div>
            <div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDesc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Second row */}
      <div style={styles.rowCenter} className="rowCenter">
      {items.slice(3).map((item, i) => (
          <div key={i} className="lux-card" style={styles.card}>
            <div style={styles.icon}>{item.icon}</div>
            <div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDesc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
        .lux-card {
          position: relative;
          display: flex;
          gap: 16px;
          align-items: center;
          transition: all 0.45s ease;
          cursor: pointer;
          overflow: hidden;
        }

        .lux-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 26px 70px rgba(0,0,0,0.12);
        }

        .lux-card:hover > div:first-child {
          transform: scale(1.15) rotate(4deg);
        }

        .lux-card > div:first-child {
          transition: transform 0.4s ease;
        }

        @media (orientation: landscape) {
          .lux-card {
            width: 380px;
            height: 190px;
            padding: 26px 34px;
          }
        }

        @media (orientation: portrait) {
          .lux-card {
            width: 280px;
            height: 180px;
            padding: 24px 26px;
          }
        }

        @keyframes float3d {
          0% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          50% { transform: translateY(-18px) rotateX(8deg) rotateY(10deg); }
          100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
        }
          /* Mobile fix for 4th & 5th cards */
@media (max-width: 768px) {
  .rowCenter {
    flex-wrap: wrap;
    gap: 40px;
  }

  .rowCenter .lux-card {
    width: 90% !important;
    max-width: 320px;
    height: auto !important;
  }

  .row .lux-card {
    width: 90% !important;
    max-width: 320px;
    height: auto !important;
  }
}

      `}
      </style>
    </div>
  );
}

const baseOrb = {
  position: "absolute",
  borderRadius: "50%",
  background:
    "radial-gradient(circle at 30% 30%, #ffffff, #c7b089, #8c6b3f)",
  boxShadow: "0 25px 70px rgba(0,0,0,0.25)",
  animation: "float3d 12s ease-in-out infinite",
  zIndex: 0,
  opacity: 0.6,
};

const styles = {
  section: {
    position: "relative",
    background: "linear-gradient(180deg, #f6f4f1, #efebe5)",
    padding: "70px 40px 120px",
    textAlign: "center",
    fontFamily: "Inter, sans-serif",
    overflow: "hidden",
  },

  /* Different sized 3D elements */
  orb: {
    ...baseOrb,
    width: "130px",
    height: "130px",
  },

  orbSmall: {
    ...baseOrb,
    width: "90px",
    height: "90px",
    opacity: 0.45,
  },

  orbTiny: {
    ...baseOrb,
    width: "60px",
    height: "60px",
    opacity: 0.35,
  },

  bgGlow1: {
    position: "absolute",
    width: "450px",
    height: "450px",
    background: "radial-gradient(circle, rgba(176,144,92,0.22), transparent 70%)",
    top: "-120px",
    left: "20%",
    filter: "blur(90px)",
    zIndex: 0,
  },

  bgGlow2: {
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle, rgba(176,144,92,0.18), transparent 70%)",
    bottom: "-120px",
    right: "20%",
    filter: "blur(90px)",
    zIndex: 0,
  },

  title: {
    position: "relative",
    zIndex: 2,
    fontFamily: "'Playfair Display', serif",
    fontSize: "46px",
    letterSpacing: "4px",
  },

  subtitle: {
    position: "relative",
    zIndex: 2,
    fontSize: "14px",
    letterSpacing: "2px",
    color: "#777",
  },

  row: {
    position: "relative",
    zIndex: 2,
    marginTop: "90px",
    display: "flex",
    justifyContent: "center",
    gap: "50px",
    flexWrap: "wrap",
  },

  rowCenter: {
    position: "relative",
    zIndex: 2,
    marginTop: "60px",
    display: "flex",
    justifyContent: "center",
    gap: "70px",
  },

  card: {
    background: "linear-gradient(145deg, #ffffff, #faf7f3)",
    borderRadius: "22px",
    boxShadow: "0 14px 45px rgba(0,0,0,0.08)",
    border: "1px solid rgba(176,144,92,0.15)",
    zIndex: 2,
  },

  icon: {
    minWidth: "46px",
    height: "46px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #8c6b3f, #b0905c)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    boxShadow: "0 6px 18px rgba(140,107,63,0.4)",
  },

  cardTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "20px",
    marginBottom: "6px",
    textAlign: "left",
  },

  cardDesc: {
    fontSize: "13.5px",
    color: "#666",
    lineHeight: "1.6",
    textAlign: "left",
  },
};

