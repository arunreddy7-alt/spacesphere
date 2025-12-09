"use client";
// Enable client features for hero slideshow

import { useEffect, useState } from "react";

const navLinks = [
  "Home",
  "About Us",
  "Projects",
  "Contact Us",
];

const heroImages = [
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1629236714859-3a1ec2d8f6c3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const projects = [
  {
    title: "SpaceSphere Club Towers",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    title: "SpaceSphere",
    images: [
      "https://images.unsplash.com/photo-1629236714859-3a1ec2d8f6c3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    title: "SpaceSphere",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    title: "Luxury Villas",
    images: [
      "https://images.unsplash.com/photo-1629236714859-3a1ec2d8f6c3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
];

const poolImages = [
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const experienceCenterImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1497366754035-f200368a1e55?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0);
  const [projectImageIndices, setProjectImageIndices] = useState(
    projects.map(() => 0)
  );
  const [poolImageIndex, setPoolImageIndex] = useState(0);
  const [experienceImageIndex, setExperienceImageIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % heroImages.length),
      4500
    );
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentProjectSlide((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setProjectImageIndices((prev) =>
        prev.map((idx, i) => (idx + 1) % projects[i].images.length)
      );
    }, 3500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setPoolImageIndex((prev) => (prev + 1) % poolImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setExperienceImageIndex((prev) => (prev + 1) % experienceCenterImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const activeImage = heroImages[currentSlide];

  return (
    <main className="bg-white text-foreground">
      <section className="relative min-h-screen hero-bg text-white">
        <div
          className="hero-image"
          style={{
            // CSS var consumed in globals for layering gradient + photo
            ["--hero-url"]: `url("${activeImage}")`,
          }}
        />
        <div className="hero-overlay" />

        <div className="relative z-10 flex min-h-screen flex-col">
          <header className="flex items-center justify-between px-6 py-5 md:px-12 md:py-8">
            <div className="flex items-center gap-2 text-xl md:text-2xl">
              <span className="font-semibold tracking-tight">Space</span>
              <span className="text-base font-medium md:text-lg">| sphere</span>
            </div>

            <nav className="hidden items-center gap-10 -mr-129 text-sm uppercase tracking-[0.08em] md:flex">
              {navLinks.map((item) => (
                <a key={item} className="nav-link" href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  {item}
                  {item !== "Home"}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
              <div className="contact-icon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.72 11.72 0 0 0 3.68.59 1 1 0 0 1 1 1v3.75a1 1 0 0 1-1 1A17 17 0 0 1 3 5a1 1 0 0 1 1-1h3.75a1 1 0 0 1 1 1 11.72 11.72 0 0 0 .59 3.68 1 1 0 0 1-.24 1.01z" />
                </svg>
              </div>
              <div className="contact-icon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                >
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.51l-8 5-8-5V6Zm0 12H4V9.17l8 5 8-5Z" />
                </svg>
              </div>
            </div>
          </header>

          <div className="relative flex flex-1 flex-col justify-end md:flex-row md:items-center md:justify-between md:gap-8 md:px-12 md:pb-16">
            <div className="max-w-3xl px-6 pb-14 md:px-0 md:pb-0">
              <h1 className="serif-heading text-4xl font-bold leading-tight md:text-6xl">
                real estate  Club Towers
              </h1>
              <p className="serif-subheading mt-3 text-2xl text-[#e8e3d9] md:text-3xl">
                A Grand Way of Life
              </p>

              <button className="cta-button gold-shadow" style={{ marginTop: '28px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '14px 26px' }}>Experience More</button>
            </div>
          </div>
        </div>

        <div className="slider-dots-bar" style={{ display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'center', padding: '8px 14px' }}>
          {heroImages.map((_, dot) => (
            <span
              key={dot}
              className={`slider-dot ${dot === currentSlide ? "active" : ""}`}
              aria-label={`Slide ${dot + 1}`}
              onClick={() => setCurrentSlide(dot)}
              role="button"
              tabIndex={0}
            />
          ))}
        </div>

        <a
          href="#"
          className="floating-whatsapp gold-shadow"
          aria-label="Chat on WhatsApp"
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <svg
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <path d="M20.52 3.48a5.6 5.6 0 0 0-9.15 4.44c0 1 .26 2 .77 2.85l-.58 2.13 2.18-.57A5.55 5.55 0 0 0 14.95 13a5.6 5.6 0 0 0 5.57-5.58 5.57 5.57 0 0 0-1.66-3.94zm-11 15.28L4 21l2.26-5.61a8.1 8.1 0 0 1-1-3.88 8.27 8.27 0 1 1 8.26 8.27 8.07 8.07 0 0 1-3.86-1.02z" />
          </svg>
        </a>
      </section>

      <section className="about-section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center', padding: '96px 24px' }}>
        <div className="about-content" style={{ display: 'grid', gap: '18px' }}>
          <p className="eyebrow">
            SpaceSphere- A Trusted Real Estate Developer
          </p>
          <p className="body-copy">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.bwbfaibijebijbi fwanifnonwqonfoiqwn f foqwnfioniowqnfionqwiofnw ffqiownfioqnwionqwionfoiqwnf  nfioqwnoifnqiownfio fnonfioniofnioanf ionfiiofnq
          </p>
          <p className="body-copy">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.bwbfaibijebijbi fwanifnonwqonfoiqwn f foqwnfioniowqnfionqwiofnw ffqiownfioqnwionqwionfoiqwnf  nfioqwnoifnqiownfio fnonfioniofnioanf ionfiiofnq
          </p>
          <p className="body-copy">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.bwbfaibijebijbi fwanifnonwqonfoiqwn f foqwnfioniowqnfionqwiofnw ffqiownfioqnwionqwionfoiqwnf  nfioqwnoifnqiownfio fnonfioniofnioanf ionfiiofnq
          </p>
          <button className="link-button" style={{ marginTop: '6px', display: 'inline-flex', gap: '6px', alignItems: 'center', padding: '10px 0' }}>Experience More &gt;&gt;</button>
        </div>
        
        <div className="about-visual" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="about-frame ml-23" style={{ padding: '16px' }}>
            <img
              src="1.png"
              alt="Modern highway interchange aerial view"
            />
          </div>
        </div>
      </section>

      <section className="projects-section" style={{ padding: '20px 24px 40px' }}>
        <div className="projects-header" style={{ marginBottom: '48px' }}>
          <h2 className="projects-title">SpaceSphere Projects</h2>
          <p className="projects-subtitle" style={{ margin: '0', marginLeft: 'auto', marginRight: 'auto' }}>
            Luxury has a new name — discover the landmark projects by SpaceSphere.
          </p>
        </div>

        <div className="projects-carousel" style={{ margin: '48px 0' }}>
          <div
            className="projects-track"
            style={{
              transform: `translateX(-${currentProjectSlide * 100}%)`,
              gap: '24px',
            }}
          >
            {projects.map((project, idx) => (
              <div key={idx} className="project-card" style={{ padding: '0' }}>
                <div className="project-image-container">
                  <div
                    className="project-images-track"
                    style={{
                      transform: `translateX(-${projectImageIndices[idx] * 100}%)`,
                    }}
                  >
                    {project.images.map((img, imgIdx) => (
                      <img
                        key={imgIdx}
                        src={img}
                        alt={`${project.title} - Image ${imgIdx + 1}`}
                        className="project-image"
                      />
                    ))}
                  </div>
                </div>
                <h3 className="project-title" style={{ margin: '20px 24px 12px 24px' }}>{project.title}</h3>
                <a href="#" className="project-link" style={{ margin: '0 24px 24px 24px' }}>
                  Experience More &gt;&gt;
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="project-dots" style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '32px' }}>
          {projects.map((_, idx) => (
            <span
              key={idx}
              className={`project-dot ${idx === currentProjectSlide ? "active" : ""}`}
              onClick={() => setCurrentProjectSlide(idx)}
              role="button"
              tabIndex={0}
            />
          ))}
        </div>
      </section>

      <section className="why-choose-section" style={{ gap: '0', padding: '80px 0' }}>
        <div className="why-choose-content" style={{ alignItems: 'center', padding: '0 60px' }}>
          <div className="content-wrapper">
            <h2 className="why-choose-title" style={{ margin: '0 0 24px 0' }}>Why Choose SpaceSphere</h2>
            <p className="why-choose-text" style={{ margin: '0 0 20px 0' }}>
              Our luxury projects span across 10+ acres, where we focus on quality, aesthetics, and building hopes and lasting partnerships. We believe in creating spaces that resonate with your dreams and aspirations.
            </p>
            <p className="why-choose-text" style={{ margin: '0 0 20px 0' }}>
              At SpaceSphere, we are committed to transparency, RERA compliance, and assisting homebuyers at every step. We invite you to trust SpaceSphere for your next real estate investment and experience the difference that quality and integrity make.
            </p>
          </div>
          <div className="vertical-divider-right"></div>
        </div>
        <div className="why-choose-visual">
          <div className="image-slider-container">
            <div
              className="image-slider-track"
              style={{
                transform: `translateX(-${poolImageIndex * 100}%)`,
              }}
            >
              {poolImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Luxury pool ${idx + 1}`}
                  className="slider-image"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="experience-center-section" style={{ gap: '0', padding: '80px 0' }}>
        <div className="experience-center-visual">
          <div className="image-slider-container">
            <div
              className="image-slider-track"
              style={{
                transform: `translateX(-${experienceImageIndex * 100}%)`,
              }}
            >
              {experienceCenterImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Experience center ${idx + 1}`}
                  className="slider-image"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="experience-center-content" style={{ alignItems: 'center', padding: '0 60px' }}>
          <div className="vertical-divider-left"></div>
          <div className="content-wrapper">
            <h2 className="experience-center-title" style={{ margin: '0 0 24px 0' }}>
              Grandest Experience Centre in Lucknow
            </h2>
            <p className="experience-center-text" style={{ margin: '0' }}>
              . Explore our sample flats, models, floor plans, and visual representations to understand the overall appeal of SpaceSphere Elevate. Our team is ready to guide you through every detail and help you make an informed decision.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section" style={{ padding: '80px 24px 100px' }}>
        <h2 className="contact-title" style={{ marginBottom: '48px' }}>Get In Touch</h2>
        <div className="contact-grid" style={{ gap: '32px', alignItems: 'start', marginTop: '80px' }}>
          <div className="contact-info" style={{ display: 'grid', gap: '22px', marginTop: '30px' }}>
            <div className="contact-block" style={{ display: 'grid', gap: '6px' }}>
              <h3 className="contact-heading" style={{ margin: '0' }}>Head office</h3>
              <p className="contact-text" style={{ margin: '0' }}>
                B 124, South I, Sector 34, Gurugram, Haryana 122001
              </p>
            </div>
            <div className="contact-block" style={{ display: 'grid', gap: '6px' }}>
              <h3 className="contact-heading" style={{ margin: '0' }}>Branch office</h3>
              <p className="contact-text" style={{ margin: '0' }}>
                Office No.525, Felix Square, Sushant Golf City, Lucknow - 226030
              </p>
            </div>
            <div className="contact-block" style={{ display: 'grid', gap: '6px' }}>
              <h3 className="contact-heading" style={{ margin: '0' }}>Site address</h3>
              <p className="contact-text" style={{ margin: '0' }}>
                GH-3B, Sector-F, Pocket-52, Sushant Golf City, Lucknow - 226030
              </p>
            </div>
            <div className="contact-block contact-inline" style={{ display: 'grid', gap: '12px' }}>
              <div>
                <span className="contact-label" style={{ marginRight: '8px' }}>Call</span>
                <span className="contact-text" style={{ margin: '0' }}>+91 1234567885</span>
              </div>
              <div>
                <span className="contact-label" style={{ marginRight: '8px' }}>Email</span>
                <span className="contact-text" style={{ margin: '0' }}>info@spacesphere.com</span>
              </div>
            </div>
          </div>

          <div className="contact-card" style={{ padding: '24px' }}>
            <h3 className="contact-card-title" style={{ margin: '0 0 16px 0' }}>Contact Us</h3>
            <form className="contact-form" style={{ display: 'grid', gap: '16px' }}>
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <label className="form-field" style={{ display: 'grid', gap: '6px' }}>
                  <span>Name</span>
                  <input type="text" placeholder="Enter your full name" />
                </label>
                <label className="form-field" style={{ display: 'grid', gap: '6px' }}>
                  <span>Email</span>
                  <input type="email" placeholder="Enter your email" />
                </label>
              </div>

              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <label className="form-field" style={{ display: 'grid', gap: '6px' }}>
                  <span>Country Code</span>
                  <select defaultValue="India (+91)">
                    <option>India (+91)</option>
                    <option>UAE (+971)</option>
                    <option>USA (+1)</option>
                  </select>
                </label>
                <label className="form-field" style={{ display: 'grid', gap: '6px' }}>
                  <span>Mobile Number</span>
                  <input type="tel" placeholder="Enter your mobile number" />
                </label>
              </div>

              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <label className="form-field" style={{ display: 'grid', gap: '6px' }}>
                  <span>Project Name</span>
                  <select defaultValue="">
                    <option value="" disabled>
                      Select Project Name
                    </option>
                    <option>SpaceSphere Club Towers</option>
                    <option>SpaceSphere</option>
                    <option>Luxury Villas</option>
                  </select>
                </label>
                <label className="form-field" style={{ display: 'grid', gap: '6px' }}>
                  <span>Project Type</span>
                  <select defaultValue="">
                    <option value="" disabled>
                      Select Project Type
                    </option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Mixed Use</option>
                  </select>
                </label>
              </div>

              <div className="form-row single" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                <label className="form-field" style={{ display: 'grid', gap: '6px' }}>
                  <span>What's your budget?</span>
                  <input type="text" placeholder="How much would you like to invest?" />
                </label>
              </div>

              <label className="consent" style={{ display: 'flex', gap: '10px', alignItems: 'start', marginTop: '2px' }}>
                <input type="checkbox" defaultChecked style={{ marginTop: '8px' }} />
                <span>
                  I authorize SpaceSphere Realty and its representatives to Call, SMS,
                  Email or WhatsApp me with its products and offers. This will override any registry on DND/NDNC.
                </span>
              </label>

              <button type="button" className="submit-button" style={{ marginTop: '8px', padding: '14px' }}>
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer" style={{ background: '#111111', color: '#F2C66E', padding: '80px 24px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px', marginBottom: '60px' }}>
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, color: '#c79a4a', margin: '0 0 20px 0' }}>
                SpaceSphere
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#b8b3a8', margin: '0 0 24px 0' }}>
                Redefining luxury living through future-forward residential spaces. Building dreams, one home at a time.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(199, 154, 74, 0.1)', border: '1px solid rgba(199, 154, 74, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c79a4a', transition: 'all 0.3s ease' }}>
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(199, 154, 74, 0.1)', border: '1px solid rgba(199, 154, 74, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c79a4a', transition: 'all 0.3s ease' }}>
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(199, 154, 74, 0.1)', border: '1px solid rgba(199, 154, 74, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c79a4a', transition: 'all 0.3s ease' }}>
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319.937 20.651.525 19.86.22c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.07-1.649-.07-4.844 0-3.18.015-3.586.07-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
                <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(199, 154, 74, 0.1)', border: '1px solid rgba(199, 154, 74, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c79a4a', transition: 'all 0.3s ease' }}>
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#F2C66E', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '12px' }}>
                <li><a href="#" style={{ color: '#b8b3a8', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s ease' }}>Home</a></li>
                <li><a href="#" style={{ color: '#b8b3a8', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s ease' }}>About Us</a></li>
                <li><a href="#" style={{ color: '#b8b3a8', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s ease' }}>Projects</a></li>
                <li><a href="#" style={{ color: '#b8b3a8', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s ease' }}>Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#F2C66E', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Projects
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '12px' }}>
                <li><a href="#" style={{ color: '#b8b3a8', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s ease' }}>SpaceSphere Club Towers</a></li>
                <li><a href="#" style={{ color: '#b8b3a8', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s ease' }}>SpaceSphere</a></li>
                <li><a href="#" style={{ color: '#b8b3a8', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s ease' }}>Luxury Villas</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#F2C66E', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Contact Info
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '16px' }}>
                <li style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                  <svg width="18" height="18" fill="#c79a4a" viewBox="0 0 24 24" style={{ marginTop: '2px', flexShrink: 0 }}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span style={{ color: '#b8b3a8', fontSize: '15px', lineHeight: '1.6' }}>
                    B 124, South I, Sector 34,<br />Gurugram, Haryana 122001
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="18" height="18" fill="#c79a4a" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <a href="tel:+911234567885" style={{ color: '#b8b3a8', textDecoration: 'none', fontSize: '15px' }}>+91 1234567885</a>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="18" height="18" fill="#c79a4a" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <a href="mailto:info@spacesphere.com" style={{ color: '#b8b3a8', textDecoration: 'none', fontSize: '15px' }}>info@spacesphere.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(199, 154, 74, 0.2)', paddingTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', textAlign: 'center' }}>
            <p style={{ color: '#8a857a', fontSize: '14px', margin: 0 }}>
              © {new Date().getFullYear()} SpaceSphere Realty. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="#" style={{ color: '#8a857a', textDecoration: 'none', fontSize: '13px', transition: 'color 0.3s ease' }}>Privacy Policy</a>
              <span style={{ color: '#8a857a' }}>|</span>
              <a href="#" style={{ color: '#8a857a', textDecoration: 'none', fontSize: '13px', transition: 'color 0.3s ease' }}>Terms & Conditions</a>
              <span style={{ color: '#8a857a' }}>|</span>
              <a href="#" style={{ color: '#8a857a', textDecoration: 'none', fontSize: '13px', transition: 'color 0.3s ease' }}>Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
