"use client";
// Enable client features for hero slideshow

import { useEffect, useState } from "react";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT US", href: "#about" },
  { name: "PORTFOLIO", href: "#portfolio" },
  { name: "WHAT WE OFFER", href: "#what-we-offer" },
  { name: "PROJECTS", href: "#projects" },
  { name: "CONTACT US", href: "#contact" },
];


const heroImages = [
  "/villa.jpg",
  "/apartment.jpg",
  "/GalleryDown.jpg",
  "/commercial.jpg",
];

const projects = [
  {
    title: "Luxury Residential Apartments & High-Rise Towers",
    images: [
      "/apartment1.jpg",
      "/apartment2.jpg",
      "/apartment3.jpg",
    ],
  },
  {
    title: "Signature Villas & Gated Communities",
    images: [
      "/villas1.jpg",
      "/villas2.jpg",
      "/villas3.jpg",
    ],
  },
  {
    title: "Premium Open Plots with Future Growth Vision",
    images: [
      "/plot1.jpg",
      "/plot2.jpg",
      "/plot3.jpg",
    ],
  },
  {
    title: "Commercial Spaces for High-Return Investors",
    images: [
      "/commercial1.jpg",
      "/commercial2.jpg",
      "/commercial3.jpg",
    ],
  },
];

const poolImages = [
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const experienceCenterImages = [
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0);
  const [projectImageIndices, setProjectImageIndices] = useState(
    projects.map(() => 0)
  );
  const [poolImageIndex, setPoolImageIndex] = useState(0);
  const [experienceImageIndex, setExperienceImageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        prev.map((idx, i) => {
          const nextIdx = idx + 1;
          // Cycle through all images, reset to 0 after showing all
          if (nextIdx >= projects[i].images.length) {
            // Wait a bit longer before resetting to avoid immediate repeat
            return 0;
          }
          return nextIdx;
        })
      );
    }, 4000); // Slightly longer interval to avoid rapid repeats
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeImage = heroImages[currentSlide];

  return (
    <main className="bg-white text-foreground">
      {/* Sticky Navbar that appears on scroll */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-5 transition-all duration-300 ${
          isScrolled ? 'translate-y-0 opacity-100 backdrop-blur-md shadow-lg' : '-translate-y-full opacity-0'
        }`}
        style={{
          background: isScrolled ? 'rgba(245, 245, 240, 0.95)' : 'transparent',
        }}
      >
        <div className="flex items-center gap-2 text-xl md:text-2xl">
          <span className="font-semibold tracking-tight" style={{ color: isScrolled ? '#1a1a1a' : '#f0ede6' }}>Space</span>
          <span className="text-base font-medium md:text-lg" style={{ color: isScrolled ? '#1a1a1a' : '#f0ede6' }}>| sphere</span>
        </div>

        <nav className="hidden items-center gap-10 mr-10 text-sm uppercase tracking-[0.08em] md:flex">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              className="nav-link" 
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                const element = document.querySelector(item.href);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'pointer', color: isScrolled ? '#1a1a1a' : '#f0ede6' }}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button - Only visible on mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="block md:hidden p-2 z-50"
          aria-label="Toggle menu"
          style={{ color: isScrolled ? '#1a1a1a' : '#f0ede6' }}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu - Only visible on mobile */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden absolute top-full left-0 right-0 backdrop-blur-md shadow-lg z-40"
            style={{ 
              background: 'rgba(245, 245, 240, 0.98)',
              animation: 'slideDown 0.3s ease-out',
              transformOrigin: 'top'
            }}
          >
           <nav
  className="flex flex-row flex-nowrap px-6 py-4 gap-6 overflow-x-auto w-full"
>
  {navLinks.map((item) => (
    <a
      key={item.name}
      href={item.href}
      onClick={(e) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }}
      className="
        nav-link 
        text-sm 
        uppercase 
        tracking-wide 
        px-6 
        py-2 
        whitespace-nowrap
      "
      style={{ cursor: "pointer", color: "#1a1a1a" }}
    >
      {item.name}
    </a>
  ))}
</nav>

          </div>
        )}
      </header>

      <section id="home" className="relative min-h-screen hero-bg text-white">
        <div
          className="hero-image"
          style={{
            // CSS var consumed in globals for layering gradient + photo
            ["--hero-url"]: `url("${activeImage}")`,
          }}
        />
        <div className="hero-overlay" />

        <div className="relative z-10 flex min-h-screen flex-col">
          <div className="hero-shell">
            <div className="hero-topbar">
              <div className="hero-brand">
                <span className="font-semibold">Space</span>
                <span className="opacity-80">| sphere</span>
              </div>

              <nav className="hero-nav">
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

              <div className="hero-actions">
                
                <button
                  className="hero-chat"
                  onClick={() => setIsModalOpen(true)}
                >
                  Enquire Now
                </button>
              </div>
            </div>

            <div className="hero-main">
              <div className="hero">
                <h1 className="hero-heading">
                SPACE SPHERE

                </h1>
                <p className="hero-subhead">
                  Where Luxury Meets Location. Where Investments Become Legacies.
                </p>
                <p className="hero-subhead alt">
                  Exclusive Homes. Investment-worthy Properties. Prestigious Addresses.
                  <br />
                  Not just choices – curated excellence.
                </p>
                <div className="hero-cta-row">
                  <button
                    className="hero-primary"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Book a Private Consultation
                  </button>
                </div>
              </div>
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
          href="#contact"
          className="floating-whatsapp cta-button gold-shadow"
          aria-label="Enquire Now"
          onClick={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
          style={{ textDecoration: 'none', marginTop: 0 }}
        >
          Enquire
        </a>
      </section>

      <section id="about" className="about-slab">
        <div className="about-wrap">
          <h2 className="about-hero-title">Welcome To Space Sphere</h2>
          <div className="about-grid">
            <div className="about-copy">
              <p>
                A Trusted Partner in Indian Real Estate, Space Sphere stands at the
                intersection of expert advisory, premium property sourcing, and seamless
                ownership experience. At Space Sphere, we believe a property is more than
                real estate - it is a statement, an asset, a lifetime belonging. With elite
                partnerships across premium developers in Pune, Hyderabad and surrounding
                regions, we bring you access to refined spaces built for those who desire more.
              </p>
              <p>
                Our strength lies in trust-driven relationships, transparent deals, and deep
                market expertise. We deal only in spaces worthy of legacy.
              </p>
              <div style={{ display: 'grid', gap: '8px' }}>
                <p style={{ margin: 0, fontWeight: 600 }}>
                  Every project we represent is hand-evaluated for:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '6px' }}>
                  <li>🔸 Design &amp; Architecture Value</li>
                  <li>🔸 Location Advantage &amp; Appreciation</li>
                  <li>🔸 Builder Credibility &amp; Delivery History</li>
                  <li>🔸 Lifestyle Amenities &amp; Luxury Quotient</li>
                </ul>
              </div>
              <button
                className="about-button"
                onClick={() => setIsModalOpen(true)}
              >
                Schedule a Site Experience 
              </button>
            </div>
            <div className="about-image-frame">
              <img src="/villas1.jpg" alt="Luxury estate poolside" />
            </div>
          </div>
        </div>
      </section>


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
              <div className="office-image">
                <img src="/apartment1.jpg" alt="Montecito coastline" />
              </div>
              <h3>Luxury Residential Apartments & High-Rise Towers</h3>
            </div>
            <div className="office-card">
              <div className="office-image">
                <img src="/villas2.jpg" alt="Santa Barbara city view" />
              </div>
              <h3>Signature Villas & Gated Communities</h3>
            </div>
            <div className="office-card">
              <div className="office-image">
                <img src="/plot1.jpg" alt="Santa Ynez vineyards" />
              </div>
              <h3>Premium Open Plots with Future Growth Vision</h3>
            </div>
            <div className="office-card">
              <div className="office-image">
                <img src="/commercial2.jpg" alt="Napa Valley estates" />
              </div>
              <h3>Commercial Spaces for High-Return Investors</h3>
            </div>
          </div>
        </div>
      </section>



      <section className="space-sphere-edge-section" style={{ display: 'none', padding: '60px 0', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)' }}>
        {/* Geometric Background Elements */}
        <div style={{ 
          position: 'absolute', 
          top: '-50px', 
          right: '-50px', 
          width: '250px', 
          height: '250px', 
          background: 'radial-gradient(circle, rgba(199, 154, 74, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 1
        }}></div>
        
        <div style={{ 
          position: 'absolute', 
          bottom: '-25px', 
          left: '-25px', 
          width: '200px', 
          height: '200px', 
          background: 'conic-gradient(from 0deg, rgba(199, 154, 74, 0.06) 0deg, transparent 120deg, rgba(199, 154, 74, 0.08) 240deg, transparent 360deg)',
          zIndex: 1,
          animation: 'rotate 20s linear infinite'
        }}></div>
        
        {/* Floating Geometric Shapes */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '50px',
          height: '50px',
          background: 'linear-gradient(45deg, rgba(199, 154, 74, 0.1), rgba(199, 154, 74, 0.05))',
          transform: 'rotate(45deg)',
          borderRadius: '8px',
          zIndex: 1,
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '25%',
          right: '15%',
          width: '40px',
          height: '40px',
          background: 'linear-gradient(135deg, rgba(199, 154, 74, 0.12), rgba(199, 154, 74, 0.08))',
          borderRadius: '50%',
          zIndex: 1,
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <p className="eyebrow" style={{ fontSize: '18px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c79a4a', fontWeight: 600, marginBottom: '8px' }}>
              The Space Sphere Edge
            </p>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#1a1a1a', margin: '0 0 12px 0', lineHeight: '1.2' }}>
              Because Luxury Deserves Precision
            </h2>
            <p style={{ fontSize: '16px', color: '#4a4a4a', maxWidth: '500px', margin: '0 auto', fontStyle: 'italic' }}>
              Where excellence meets innovation, and precision creates perfection.
            </p>
          </div>

          {/* Floating Cards Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '30px',
            position: 'relative',
            marginTop: '40px'
          }}>

            {/* Card 1 - Top Left */}
            <div className="floating-card" style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #fefefe 100%)',
              padding: '25px 20px',
              borderRadius: '16px',
              boxShadow: '0 12px 35px rgba(0, 0, 0, 0.08), 0 5px 15px rgba(199, 154, 74, 0.15)',
              border: '1px solid rgba(199, 154, 74, 0.2)',
              position: 'relative',
              transform: 'translateY(0)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 3
            }}>
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '20px',
                width: '35px',
                height: '35px',
                background: 'linear-gradient(135deg, #c79a4a, #d4af6a)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 5px 15px rgba(199, 154, 74, 0.4)',
                animation: 'pulse 3s ease-in-out infinite'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              
              <div style={{ marginTop: '20px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
                  Personalized Curation
                </h3>
                <p style={{ fontSize: '14px', color: '#4a4a4a', lineHeight: '1.5', margin: 0 }}>
                  Tailored to your taste & investment vision, every property is hand-selected for your unique lifestyle.
                </p>
              </div>
            </div>

            {/* Card 2 - Top Right */}
            <div className="floating-card" style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #fefefe 100%)',
              padding: '25px 20px',
              borderRadius: '16px',
              boxShadow: '0 12px 35px rgba(0, 0, 0, 0.08), 0 5px 15px rgba(199, 154, 74, 0.15)',
              border: '1px solid rgba(199, 154, 74, 0.2)',
              position: 'relative',
              transform: 'translateY(-15px)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 3
            }}>
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '20px',
                width: '35px',
                height: '35px',
                background: 'linear-gradient(135deg, #c79a4a, #d4af6a)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 5px 15px rgba(199, 154, 74, 0.4)',
                animation: 'pulse 3s ease-in-out infinite 0.5s'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              
              <div style={{ marginTop: '20px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
                  Elite Developer Network
                </h3>
                <p style={{ fontSize: '14px', color: '#4a4a4a', lineHeight: '1.5', margin: 0 }}>
                  Exclusive partnerships across premium developers in Pune & Hyderabad region.
                </p>
              </div>
            </div>

            {/* Card 3 - Bottom Left */}
            <div className="floating-card" style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #fefefe 100%)',
              padding: '25px 20px',
              borderRadius: '16px',
              boxShadow: '0 12px 35px rgba(0, 0, 0, 0.08), 0 5px 15px rgba(199, 154, 74, 0.15)',
              border: '1px solid rgba(199, 154, 74, 0.2)',
              position: 'relative',
              transform: 'translateY(15px)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 3
            }}>
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '20px',
                width: '35px',
                height: '35px',
                background: 'linear-gradient(135deg, #c79a4a, #d4af6a)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 5px 15px rgba(199, 154, 74, 0.4)',
                animation: 'pulse 3s ease-in-out infinite 1s'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              
              <div style={{ marginTop: '20px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
                  Complete Transparency
                </h3>
                <p style={{ fontSize: '14px', color: '#4a4a4a', lineHeight: '1.5', margin: 0 }}>
                  No hidden costs, no inflated numbers. Pure, honest dealings with crystal-clear pricing.
                </p>
              </div>
            </div>

            {/* Card 4 - Bottom Right */}
            <div className="floating-card" style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #fefefe 100%)',
              padding: '25px 20px',
              borderRadius: '16px',
              boxShadow: '0 12px 35px rgba(0, 0, 0, 0.08), 0 5px 15px rgba(199, 154, 74, 0.15)',
              border: '1px solid rgba(199, 154, 74, 0.2)',
              position: 'relative',
              transform: 'translateY(0)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 3
            }}>
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '20px',
                width: '35px',
                height: '35px',
                background: 'linear-gradient(135deg, #c79a4a, #d4af6a)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 5px 15px rgba(199, 154, 74, 0.4)',
                animation: 'pulse 3s ease-in-out infinite 1.5s'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              
              <div style={{ marginTop: '20px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
                  End-to-End Support
                </h3>
                <p style={{ fontSize: '14px', color: '#4a4a4a', lineHeight: '1.5', margin: 0 }}>
                  From search to keys, we guide you through every step of your property journey.
                </p>
              </div>
            </div>

            {/* Central Feature Card */}
            <div className="floating-card central-card" style={{
              background: 'linear-gradient(135deg, #c79a4a 0%, #d4af6a 100%)',
              padding: '35px 30px',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(199, 154, 74, 0.3), 0 10px 25px rgba(199, 154, 74, 0.4)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              position: 'relative',
              transform: 'scale(1.02)',
              zIndex: 4,
              margin: '15px auto',
              gridColumn: '1 / -1',
              maxWidth: '450px'
            }}>
              <div style={{
                position: 'absolute',
                top: '-15px',
                right: '30px',
                width: '45px',
                height: '45px',
                background: 'linear-gradient(135deg, #fff, rgba(255, 255, 255, 0.9))',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                animation: 'pulse 2s ease-in-out infinite'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#c79a4a">
                  <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
                </svg>
              </div>
              
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px', fontFamily: "'Playfair Display', serif" }}>
                  Investment-Led Advisory
                </h3>
                <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.5', margin: 0 }}>
                  Data-driven insights on growth potential, rental yields & market appreciation trends.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Quote */}
          <div style={{ textAlign: 'center', marginTop: '50px', position: 'relative' }}>
            <div style={{
              display: 'inline-block',
              padding: '20px 35px',
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '16px',
              border: '1px solid rgba(199, 154, 74, 0.2)',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
              backdropFilter: 'blur(10px)'
            }}>
              <p style={{ fontSize: '16px', color: '#1a1a1a', fontStyle: 'italic', fontWeight: 500, margin: 0, fontFamily: "'Playfair Display', serif" }}>
                "Luxury begins with clarity. We deliver both."
              </p>
            </div>
          </div>
        </div>
      </section>


      <section id="what-we-offer" className="what-we-offer" style={{ padding: '60px 0', position: 'relative', overflow: 'hidden', background: '#F6F7F5' }}>
        {/* Background Decorative Elements */}
        <div style={{ 
          position: 'absolute', 
          top: '-100px', 
          left: '-100px', 
          width: '300px', 
          height: '300px', 
          background: 'radial-gradient(circle, rgba(199, 154, 74, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 1
        }}></div>
        
        <div style={{ 
          position: 'absolute', 
          bottom: '-80px', 
          right: '-80px', 
          width: '250px', 
          height: '250px', 
          background: 'conic-gradient(from 180deg, rgba(199, 154, 74, 0.04) 0deg, transparent 90deg, rgba(199, 154, 74, 0.06) 180deg, transparent 270deg, rgba(199, 154, 74, 0.04) 360deg)',
          zIndex: 1,
          animation: 'rotate 25s linear infinite reverse'
        }}></div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <p className="eyebrow" style={{ fontSize: '18px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c79a4a', fontWeight: 600, marginBottom: '8px' }}>
              What We Offer?
            </p>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#1a1a1a', margin: '0 0 12px 0', lineHeight: '1.2' }}>
              A Seamless Ownership Journey
            </h2>
            <p style={{ fontSize: '16px', color: '#4a4a4a', maxWidth: '600px', margin: '0 auto', fontStyle: 'italic' }}>
              From first consultation to keys in hand, we make your property journey effortless and exceptional.
            </p>
          </div>

          {/* Timeline Process Flow */}
          <div style={{ position: 'relative', marginTop: '50px' }}>
            {/* Central Timeline Line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '4px',
              background: 'linear-gradient(180deg, #c79a4a 0%, #d4af6a 50%, #c79a4a 100%)',
              transform: 'translateX(-50%)',
              borderRadius: '2px',
              zIndex: 1
            }}></div>



            {/* Step 1 - Discovery Consultation */}
            <div className="timeline-step" style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '80px',
              position: 'relative',
              zIndex: 2
            }}>
              <div style={{ flex: '1', paddingRight: '50px', textAlign: 'right' }}>
                <div className="timeline-card" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #ffffff 0%, #fefefe 100%)',
                  padding: '35px 20px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08), 0 3px 10px rgba(199, 154, 74, 0.15)',
                  border: '1px solid rgba(199, 154, 74, 0.2)',
                  maxWidth: '350px',
                  position: 'relative',
                  transform: 'translateX(0)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                  
                  
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
                    Discovery Consultation
                  </h3>
                  <p style={{ fontSize: '14px', color: '#4a4a4a', lineHeight: '1.5', margin: 0 }}>
                    We understand your lifestyle, investment goals, and preferences to create a personalized property roadmap.
                  </p>
                </div>
              </div>
              
              {/* Timeline Node */}
              <div style={{
                width: '16px',
                height: '16px',
                background: 'linear-gradient(135deg, #c79a4a, #d4af6a)',
                borderRadius: '50%',
                border: '3px solid #ffffff',
                boxShadow: '0 3px 10px rgba(199, 154, 74, 0.3)',
                zIndex: 3
              }}></div>
              
              <div style={{ flex: '1', paddingLeft: '50px' }}>
                <div style={{
                  width: '350px',
                  height: '180px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                  border: '2px solid rgba(199, 154, 74, 0.2)',
                  margin: '0 auto',
                  position: 'relative'
                }}>
                  <img 
                    src="/1.jpg" 
                    alt="Consultation Meeting"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(1.1) contrast(1.05)'
                    }}
                  />
                 
                </div>
              </div>
            </div>



            {/* Step 2 - Curated Showcase */}
            <div className="timeline-step" style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '80px',
              position: 'relative',
              zIndex: 2
            }}>
              <div style={{ flex: '1', paddingRight: '50px', textAlign: 'right' }}>
                <div style={{
                  width: '350px',
                  height: '180px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                  border: '2px solid rgba(199, 154, 74, 0.2)',
                  margin: '0 auto',
                  position: 'relative'
                }}>
                  <img 
                    src="/2.jpg" 
                    alt="Premium Villa Properties"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(1.1) contrast(1.05)'
                    }}
                  />
                  
                </div>
              </div>
              
              {/* Timeline Node */}
              <div style={{
                width: '16px',
                height: '16px',
                background: 'linear-gradient(135deg, #c79a4a, #d4af6a)',
                borderRadius: '50%',
                border: '3px solid #ffffff',
                boxShadow: '0 3px 10px rgba(199, 154, 74, 0.3)',
                zIndex: 3
              }}></div>
              
              <div style={{ flex: '1', paddingLeft: '50px' }}>
                <div className="timeline-card" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #ffffff 0%, #fefefe 100%)',
                  padding: '35px 20px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08), 0 3px 10px rgba(199, 154, 74, 0.15)',
                  border: '1px solid rgba(199, 154, 74, 0.2)',
                  maxWidth: '350px',
                  position: 'relative',
                  transform: 'translateX(0)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                  
                  
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
                    Curated Project Showcase
                  </h3>
                  <p style={{ fontSize: '14px', color: '#4a4a4a', lineHeight: '1.5', margin: 0 }}>
                    Exclusive access to handpicked premium properties that align perfectly with your vision and investment strategy.
                  </p>
                </div>
              </div>
            </div>



            {/* Step 3 - Guided Site Tours */}
            <div className="timeline-step" style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '80px',
              position: 'relative',
              zIndex: 2
            }}>
              <div style={{ flex: '1', paddingRight: '50px', textAlign: 'right' }}>
                <div className="timeline-card" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #ffffff 0%, #fefefe 100%)',
                  padding: '35px 20px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08), 0 3px 10px rgba(199, 154, 74, 0.15)',
                  border: '1px solid rgba(199, 154, 74, 0.2)',
                  maxWidth: '350px',
                  position: 'relative',
                  transform: 'translateX(0)',

                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                  
                  
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
                    Guided Site Tours
                  </h3>
                  <p style={{ fontSize: '14px', color: '#4a4a4a', lineHeight: '1.5', margin: 0 }}>
                    Experience luxury firsthand with our expert-guided tours of premium developments and lifestyle amenities.
                  </p>
                </div>
              </div>
              
              {/* Timeline Node */}
              <div style={{
                width: '16px',
                height: '16px',
                background: 'linear-gradient(135deg, #c79a4a, #d4af6a)',
                borderRadius: '50%',
                border: '3px solid #ffffff',
                boxShadow: '0 3px 10px rgba(199, 154, 74, 0.3)',
                zIndex: 3
              }}></div>
              
              <div style={{ flex: '1', paddingLeft: '50px' }}>
                <div style={{
                  width: '350px',
                  height: '180px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                  border: '2px solid rgba(199, 154, 74, 0.2)',
                  margin: '0 auto',
                  position: 'relative'
                }}>
                  <img 
                    src="/3.jpg" 
                    alt="Luxury Apartment Tour"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(1.1) contrast(1.05)'
                    }}
                  />
                  
                </div>
              </div>
            </div>



            {/* Step 4 - Negotiation & Closure */}
            <div className="timeline-step" style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '80px',
              position: 'relative',
              zIndex: 2
            }}>
              <div style={{ flex: '1', paddingRight: '50px', textAlign: 'right' }}>
                <div style={{
                  width: '350px',
                  height: '180px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                  border: '2px solid rgba(199, 154, 74, 0.2)',
                  margin: '0 auto',
                  position: 'relative'
                }}>
                  <img 
                    src="/4.jpg" 
                    alt="Commercial Property Negotiation"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(1.1) contrast(1.05)'
                    }}
                  />
                  
                </div>
              </div>
              
              {/* Timeline Node */}
              <div style={{
                width: '16px',
                height: '16px',
                background: 'linear-gradient(135deg, #c79a4a, #d4af6a)',
                borderRadius: '50%',
                border: '3px solid #ffffff',
                boxShadow: '0 3px 10px rgba(199, 154, 74, 0.3)',
                zIndex: 3
              }}></div>
              
              <div style={{ flex: '1', paddingLeft: '50px' }}>
                <div className="timeline-card" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #ffffff 0%, #fefefe 100%)',
                  padding: '35px 20px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08), 0 3px 10px rgba(199, 154, 74, 0.15)',
                  border: '1px solid rgba(199, 154, 74, 0.2)',
                  maxWidth: '350px',
                  position: 'relative',
                  transform: 'translateX(0)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                  
                  
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
                    Negotiation & Closure
                  </h3>
                  <p style={{ fontSize: '14px', color: '#4a4a4a', lineHeight: '1.5', margin: 0 }}>
                    Expert negotiation to secure the best terms, followed by seamless documentation and transparent deal closure.
                  </p>
                </div>
              </div>
            </div>



            {/* Step 5 - Complete Assistance */}
            <div className="timeline-step" style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '60px',
              position: 'relative',
              zIndex: 2
            }}>
              <div style={{ flex: '1', paddingRight: '50px', textAlign: 'right' }}>
                <div className="timeline-card" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #c79a4a 0%, #d4af6a 100%)',
                  padding: '35px 20px',
                  borderRadius: '16px',
                  boxShadow: '0 15px 35px rgba(199, 154, 74, 0.3), 0 8px 20px rgba(199, 154, 74, 0.4)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  maxWidth: '350px',
                  position: 'relative',
                  transform: 'scale(1.02)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                  
                  
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
                    Complete Assistance
                  </h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.5', margin: 0 }}>
                    End-to-end support including paperwork, loan assistance, and handover until you receive your keys.
                  </p>
                </div>
              </div>
              
              {/* Timeline Node */}
              <div style={{
                width: '16px',
                height: '16px',
                background: 'linear-gradient(135deg, #c79a4a, #d4af6a)',
                borderRadius: '50%',
                border: '3px solid #ffffff',
                boxShadow: '0 3px 10px rgba(199, 154, 74, 0.3)',
                zIndex: 3,
                animation: 'pulse 2s ease-in-out infinite'
              }}></div>
              
              <div style={{ flex: '1', paddingLeft: '50px' }}>
                <div style={{
                  width: '350px',
                  height: '180px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                  border: '2px solid rgba(199, 154, 74, 0.2)',
                  margin: '0 auto',
                  position: 'relative'
                }}>
                  <img 
                    src="/5.jpg" 
                    alt="Property Handover & Keys"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(1.1) contrast(1.05)'
                    }}
                  />
                 
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Impact Statement */}
          <div style={{ textAlign: 'center', marginTop: '80px', position: 'relative' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px',
              marginBottom: '50px'
            }}>
              <div style={{
                padding: '30px',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '16px',
                border: '1px solid rgba(199, 154, 74, 0.2)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#c79a4a', marginBottom: '8px' }}>Effortless</h3>
                <p style={{ fontSize: '16px', color: '#4a4a4a', margin: 0 }}>Your journey is seamless</p>
              </div>
              <div style={{
                padding: '30px',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '16px',
                border: '1px solid rgba(199, 154, 74, 0.2)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#c79a4a', marginBottom: '8px' }}>Exceptional</h3>
                <p style={{ fontSize: '16px', color: '#4a4a4a', margin: 0 }}>The destination is extraordinary</p>
              </div>
            </div>
            
            <p style={{ fontSize: '18px', color: '#1a1a1a', fontStyle: 'italic', fontWeight: 500, fontFamily: "'Playfair Display', serif" }}>
              "Crafted for Comfort, Precision & Peace of Mind"
            </p>
          </div>
        </div>
      </section>

      <section id="projects" style={{ padding: '80px 24px', background: 'linear-gradient(135deg, rgba(199, 154, 74, 0.05) 0%, rgba(199, 154, 74, 0.02) 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px', fontFamily: "'Playfair Display', serif" }}>
            Featured Premium Properties
          </h2>
          <p style={{ fontSize: '18px', color: '#4a4a4a', marginBottom: '40px', fontStyle: 'italic' }}>
            Invest with confidence. Live with pride.
          </p>
          <div style={{ padding: '0', background: 'white', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
            <div style={{ position: 'relative' }}>
              <img
                src="/avinea.png"
                alt="Avinea Project Preview"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
                padding: '40px',
                color: 'white'
              }}>
                <p style={{ fontSize: '18px', color: '#F2C66E', marginBottom: '8px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Featured Project</p>

                <p style={{ fontSize: '32px', color: '#ffffff', fontWeight: 700, marginBottom: '12px', fontFamily: "'Playfair Display', serif" }}>Avinea Project Preview</p>
                <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '24px' }}>Premium gated community with luxury amenities</p>

                <a 
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    background: 'linear-gradient(135deg, #c79a4a 0%, #d4af6a 100%)',
                    border: 'none',
                    color: 'white',
                    padding: '14px 32px',
                    borderRadius: '50px',
                    fontSize: '16px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 6px 20px rgba(199, 154, 74, 0.4)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    position: 'relative',
                    overflow: 'hidden',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(199, 154, 74, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(199, 154, 74, 0.4)';
                  }}
                >
                  Explore More
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transition: 'transform 0.3s ease' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
            </div>
            </div>
          </div>
        </div>
      </section>


      <section style={{ padding: '60px 24px', background: '', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative background elements */}
        <div style={{ 
          position: 'absolute', 
          top: '10%', 
          left: '-5%', 
          fontSize: '120px', 
          color: 'rgba(199, 154, 74, 0.03)', 
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          lineHeight: 1,
          transform: 'rotate(-15deg)',
          zIndex: 0
        }}>"</div>
        <div style={{ 
          position: 'absolute', 
          bottom: '10%', 
          right: '-5%', 
          fontSize: '120px', 
          color: 'rgba(199, 154, 74, 0.03)', 
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          lineHeight: 1,
          transform: 'rotate(15deg)',
          zIndex: 0
        }}>"</div>
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <p className="eyebrow" style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c79a4a', fontWeight: 600, marginBottom: '10px' }}>
              Client Impressions
            </p>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a', marginBottom: '10px', fontFamily: "'Playfair Display', serif", lineHeight: '1.2' }}>
              Real Words. Refined Experiences.
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #c79a4a, #d4af6a)', margin: '15px auto 0' }}></div>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px', 
            alignItems: 'stretch', 
            position: 'relative'
          }}>
            {/* Featured Testimonial - Left Side */}
            <div style={{ 
              padding: '32px 28px', 
              background: 'linear-gradient(135deg, #ffffff 0%, #fefefe 100%)', 
              borderRadius: '16px', 
              boxShadow: '0 6px 24px rgba(0,0,0,0.08), 0 2px 6px rgba(199, 154, 74, 0.1)',
              border: '1px solid rgba(199, 154, 74, 0.15)',
              position: 'relative',
              zIndex: 2
            }}>
              {/* Decorative corner accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, rgba(199, 154, 74, 0.1) 0%, transparent 70%)',
                borderRadius: '0 16px 0 100%',
                zIndex: 0
              }}></div>
              
              {/* Large quote mark */}
              <div style={{ 
                fontSize: '80px', 
                color: 'rgba(199, 154, 74, 0.15)', 
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                lineHeight: 0.8,
                marginBottom: '15px',
                position: 'relative',
                zIndex: 1
              }}>"</div>
              
              {/* Star rating */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '18px', position: 'relative', zIndex: 1 }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#c79a4a" style={{ filter: 'drop-shadow(0 1px 2px rgba(199, 154, 74, 0.3))' }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              
              <p style={{ 
                fontSize: '16px', 
                lineHeight: '1.7', 
                color: '#1a1a1a', 
                fontStyle: 'italic', 
                marginBottom: '24px',
                position: 'relative',
                zIndex: 1,
                fontWeight: 500
              }}>
                "More than property guidance - it felt like <strong style={{ color: '#c79a4a', fontStyle: 'normal' }}>concierge service</strong>."
              </p>
              
              <div style={{ 
                borderTop: '2px solid rgba(199, 154, 74, 0.2)', 
                paddingTop: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #c79a4a, #d4af6a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: 700,
                  flexShrink: 0
                }}>SC</div>
                <div>
                  <p style={{ fontSize: '14px', color: '#1a1a1a', fontWeight: 600, margin: '0 0 4px 0' }}>Satisfied Client</p>
                  <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>Premium Property Owner</p>
                </div>
              </div>
            </div>
            
            {/* Second Testimonial - Right Side (Smaller, Offset) */}
            <div style={{ 
              padding: '28px 24px', 
              background: 'white', 
              borderRadius: '16px', 
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              border: '1px solid rgba(199, 154, 74, 0.1)',
              position: 'relative',
              transform: 'translateY(30px)',
              zIndex: 1
            }}>
              {/* Decorative line accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '3px',
                height: '100%',
                background: 'linear-gradient(180deg, #c79a4a, #d4af6a)',
                borderRadius: '16px 0 0 16px'
              }}></div>
              
              {/* Decorative corner accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, rgba(199, 154, 74, 0.1) 0%, transparent 70%)',
                borderRadius: '16px 0 0 0',
                zIndex: 0
              }}></div>
              
              {/* Large quote mark */}
              <div style={{ 
                fontSize: '80px', 
                color: 'rgba(199, 154, 74, 0.15)', 
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                lineHeight: 0.8,
                marginBottom: '15px',
                position: 'relative',
                zIndex: 1
              }}>"</div>
              
              {/* Star rating */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '18px', position: 'relative', zIndex: 1 }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#c79a4a" style={{ filter: 'drop-shadow(0 1px 2px rgba(199, 154, 74, 0.3))' }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              
              <p style={{ 
                fontSize: '16px', 
                lineHeight: '1.7', 
                color: '#1a1a1a', 
                fontStyle: 'italic', 
                marginBottom: '24px',
                position: 'relative',
                zIndex: 1,
                fontWeight: 500
              }}>
                "Luxury curated to precision. <strong style={{ color: '#c79a4a', fontStyle: 'normal' }}>Transparent, tasteful, trustworthy</strong>."
              </p>
              
              <div style={{ 
                borderTop: '2px solid rgba(199, 154, 74, 0.2)', 
                paddingTop: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #c79a4a, #d4af6a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: 700,
                  flexShrink: 0
                }}>VC</div>
                <div>
                  <p style={{ fontSize: '14px', color: '#1a1a1a', fontWeight: 600, margin: '0 0 4px 0' }}>Valued Customer</p>
                  <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>Investment Partner</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative bottom accent */}
          <div style={{ 
            marginTop: '40px', 
            textAlign: 'center',
            position: 'relative'
          }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px',
              padding: '12px 24px',
              background: 'rgba(199, 154, 74, 0.05)',
              borderRadius: '50px',
              border: '1px solid rgba(199, 154, 74, 0.15)'
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c79a4a' }}></div>
              <p style={{ fontSize: '12px', color: '#666', margin: 0, fontStyle: 'italic' }}>
                Trusted by discerning clients across Pune & Hyderabad
              </p>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c79a4a' }}></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section" style={{ padding: '80px 24px 100px', background: '#F6F7F5' }}>
        <h2 className="contact-title" style={{ marginBottom: '12px' }}>Connect With Us</h2>
        <p style={{ textAlign: 'center', fontSize: '18px', color: '#4a4a4a', marginBottom: '48px', fontStyle: 'italic' }}>
          Let's Discover Your Next Address of Prestige.
        </p>
        <div className="contact-grid" style={{ gap: '32px', alignItems: 'start', marginTop: '60px' }}>
          <div className="contact-info" style={{ display: 'grid', gap: '22px', marginTop: '30px' }}>
            <div className="contact-block" style={{ display: 'grid', gap: '6px' }}>
              <h3 className="contact-heading" style={{ margin: '0', color: '#c79a4a', fontWeight: 600 }}>📍 Hyderabad</h3>
              <p className="contact-text" style={{ margin: '0', fontSize: '14px' }}>
                Registered Headquarters
              </p>
            </div>
            <div className="contact-block" style={{ display: 'grid', gap: '6px' }}>
              <h3 className="contact-heading" style={{ margin: '0', color: '#c79a4a', fontWeight: 600 }}>📍 Pune</h3>
              <p className="contact-text" style={{ margin: '0', fontSize: '14px' }}>
                CP Network & Operations
              </p>
            </div>
            <div className="contact-block contact-inline" style={{ display: 'grid', gap: '12px', marginTop: '8px' }}>
              <div>
                <span className="contact-label" style={{ marginRight: '8px', fontWeight: 600 }}>📱</span>
                <span className="contact-text" style={{ margin: '0' }}>+91 XXXXX XXXXX</span>
              </div>
              <div>
                <span className="contact-label" style={{ marginRight: '8px', fontWeight: 600 }}>📩</span>
                <span className="contact-text" style={{ margin: '0' }}>contact@spacesphere.com</span>
              </div>
            </div>
            <div style={{ marginTop: '24px', padding: '20px', background: 'rgba(199, 154, 74, 0.05)', borderRadius: '8px' }}>
              <p style={{ fontSize: '15px', fontWeight: 600, color: '#1a1a1a', marginBottom: '12px' }}>Quick Actions:</p>
              <div style={{ display: 'grid', gap: '10px' }}>
                <button 
                  className="cta-button" 
                  style={{ padding: '12px 20px', fontSize: '14px', width: '100%' }}
                  onClick={() => setIsModalOpen(true)}
                >
                  Book a Private Consultation
                </button>
                <button 
                  className="cta-button" 
                  style={{ padding: '12px 20px', fontSize: '14px', width: '100%', background: 'transparent', border: '2px solid #c79a4a', color: '#c79a4a' }}
                  onClick={() => setIsModalOpen(true)}
                >
                  Schedule a Site Experience
                </button>
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
              <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#b8b3a8', margin: '0 0 16px 0' }}>
                Where Luxury Meets Location. Where Investments Become Legacies.
              </p>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#8a857a', margin: '0 0 24px 0', fontStyle: 'italic' }}>
                Your Trusted Partner for Smart Real Estate Choices.
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
                <li><a 
                  href="#home" 
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#home');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  style={{ color: '#b8b3a8', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s ease', cursor: 'pointer' }}
                >Home</a></li>
                <li><a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#about');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  style={{ color: '#b8b3a8', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s ease', cursor: 'pointer' }}
                >About Us</a></li>
                <li><a 
                  href="#projects" 
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#projects');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  style={{ color: '#b8b3a8', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s ease', cursor: 'pointer' }}
                >Projects</a></li>
                <li><a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  style={{ color: '#b8b3a8', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s ease', cursor: 'pointer' }}
                >Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#F2C66E', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Projects
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '12px' }}>
                <li><a 
                  href="#projects" 
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#projects');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  style={{ color: '#b8b3a8', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s ease', cursor: 'pointer' }}
                >Avinea by Vyom-Sigma</a></li>
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
                  <div>
                    <div style={{ color: '#b8b3a8', fontSize: '15px', lineHeight: '1.6', marginBottom: '8px' }}>
                      <strong style={{ color: '#F2C66E' }}>Hyderabad</strong> – Registered Headquarters
                    </div>
                    <div style={{ color: '#b8b3a8', fontSize: '15px', lineHeight: '1.6' }}>
                      <strong style={{ color: '#F2C66E' }}>Pune</strong> – CP Network & Operations
                    </div>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="18" height="18" fill="#c79a4a" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <a href="tel:+91XXXXXXXXXX" style={{ color: '#b8b3a8', textDecoration: 'none', fontSize: '15px' }}>+91 XXXXX XXXXX</a>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="18" height="18" fill="#c79a4a" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <a href="mailto:contact@spacesphere.com" style={{ color: '#b8b3a8', textDecoration: 'none', fontSize: '15px' }}>contact@spacesphere.com</a>
                </li>
              </ul>
            </div>
          </div>

      {/* Popup Modal Form */}
      {isModalOpen && (
        <div 
          className="modal-overlay"
          onClick={() => setIsModalOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '40px',
              maxWidth: '500px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              animation: 'slideUp 0.3s ease-out',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'transparent',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#666',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'background 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              ×
            </button>
            
            <h2 style={{ 
              fontSize: '28px', 
              fontWeight: 700, 
              color: '#1a1a1a', 
              marginBottom: '8px',
              fontFamily: "'Playfair Display', serif"
            }}>
              Get In Touch
            </h2>
            <p style={{ fontSize: '16px', color: '#666', marginBottom: '32px' }}>
              Fill out the form below and we'll get back to you shortly.
            </p>
            
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission here
                alert('Thank you for your inquiry! We will contact you soon.');
                setIsModalOpen(false);
              }}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#1a1a1a', marginBottom: '8px' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '15px',
                    transition: 'border-color 0.2s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#c79a4a'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#ddd'}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#1a1a1a', marginBottom: '8px' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '15px',
                    transition: 'border-color 0.2s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#c79a4a'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#ddd'}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#1a1a1a', marginBottom: '8px' }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '15px',
                    transition: 'border-color 0.2s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#c79a4a'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#ddd'}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#1a1a1a', marginBottom: '8px' }}>
                  Interested In
                </label>
                <select
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '15px',
                    transition: 'border-color 0.2s ease',
                    boxSizing: 'border-box',
                    background: '#fff',
                    color: '#000000'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#c79a4a'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#ddd'}
                >
                  <option value="" style={{ color: '#000000' }}>Select an option</option>
                  <option value="residential" style={{ color: '#000000' }}>Luxury Residential Apartments</option>
                  <option value="villas" style={{ color: '#000000' }}>Signature Villas & Gated Communities</option>
                  <option value="plots" style={{ color: '#000000' }}>Premium Open Plots</option>
                  <option value="commercial" style={{ color: '#000000' }}>Commercial Spaces</option>
                  <option value="consultation" style={{ color: '#000000' }}>General Consultation</option>
                </select>
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#1a1a1a', marginBottom: '8px' }}>
                  Message
                </label>
                <textarea
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '15px',
                    transition: 'border-color 0.2s ease',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#c79a4a'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#ddd'}
                />
              </div>
              
              <button
                type="submit"
                className="cta-button"
                style={{ 
                  width: '100%', 
                  padding: '14px 26px', 
                  marginTop: '8px',
                  fontSize: '16px'
                }}
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      )}

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
