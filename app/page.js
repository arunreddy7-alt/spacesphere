"use client";
// Enable client features for hero slideshow

import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "What We Offer", href: "#what-we-offer" },
  { name: "Projects", href: "#projects" },
  { name: "Contact Us", href: "#contact" },
];

const heroImages = [
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const projects = [
  {
    title: "Luxury Residential Apartments & High-Rise Towers",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop",
    ],
  },
  {
    title: "Signature Villas & Gated Communities",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629236714859-3a1ec2d8f6c3?w=800&auto=format&fit=crop",
    ],
  },
  {
    title: "Premium Open Plots with Future Growth Vision",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&auto=format&fit=crop",
    ],
  },
  {
    title: "Commercial Spaces for High-Return Investors",
    images: [
      "https://images.unsplash.com/photo-1621293954908-907159247fc8?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop",
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

  // Navigation functions for portfolio section
  const goToPreviousProject = () => {
    setCurrentProjectSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNextProject = () => {
    setCurrentProjectSlide((prev) => (prev + 1) % projects.length);
  };

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
            <nav className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map((item) => (
                <a 
                  key={item.name} 
                  className="nav-link text-sm uppercase tracking-wide py-2" 
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  style={{ cursor: 'pointer', color: '#1a1a1a' }}
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
          <header className="flex items-center justify-between px-6 py-5 md:px-12 md:py-8 relative z-20">
            <div className="flex items-center gap-2 text-xl md:text-2xl">
              <span className="font-semibold tracking-tight">Space</span>
              <span className="text-base font-medium md:text-lg">| sphere</span>
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
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button - Only visible on mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="block md:hidden text-white p-2 relative z-50"
              aria-label="Toggle menu"
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
                className="md:hidden absolute top-full left-0 right-0 backdrop-blur-md shadow-lg z-50"
                style={{ 
                  background: 'rgba(245, 245, 240, 0.98)',
                  animation: 'slideDown 0.3s ease-out',
                  transformOrigin: 'top'
                }}
              >
                <nav className="flex flex-col px-4 py-4 gap-4">
                  {navLinks.map((item) => (
                    <a 
                      key={item.name} 
                      className="nav-link text-sm uppercase tracking-wide py-2" 
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      style={{ cursor: 'pointer', color: '#1a1a1a' }}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </header>

          <div className="relative flex flex-1 flex-col justify-end md:flex-row md:items-center md:justify-between md:gap-8 md:px-12 md:pb-16">
            <div className="max-w-3xl px-6 pb-14 md:px-0 md:pb-0">
              <h1 className="serif-heading text-4xl font-bold leading-tight md:text-6xl">
                SPACE SPHERE
              </h1>
              <p className="serif-subheading mt-3 text-xl text-[#e8e3d9] md:text-2xl" style={{ fontWeight: 500 }}>
                Where Luxury Meets Location. Where Investments Become Legacies.
              </p>
              <p className="serif-subheading mt-4 text-lg text-[#e8e3d9] md:text-xl" style={{ fontWeight: 400 }}>
                Exclusive Homes. Investment-worthy Properties. Prestigious Addresses.
              </p>
              <p className="serif-subheading mt-2 text-base text-[#e8e3d9] md:text-lg italic">
                Not just choices - curated excellence.
              </p>

              <button 
                className="cta-button gold-shadow" 
                style={{ marginTop: '28px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '14px 26px' }}
                onClick={() => setIsModalOpen(true)}
              >
                Book a Private Consultation
              </button>
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

      <section id="about" className="about-section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center', padding: '96px 24px' }}>
        <div className="about-content" style={{ display: 'grid', gap: '18px' }}>
          <p className="eyebrow" style={{ fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c79a4a', fontWeight: 600 }}>
            Welcome To Space Sphere
          </p>
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a', marginTop: '8px', fontFamily: "'Playfair Display', serif" }}>
            A Trusted Partner in Indian Real Estate
          </h2>
          <p className="body-copy" style={{ fontSize: '16px', lineHeight: '1.8', color: '#4a4a4a' }}>
            Space Sphere stands at the intersection of <strong style={{ color: '#1a1a1a', fontWeight: 600 }}>expert advisory</strong>, <strong style={{ color: '#1a1a1a', fontWeight: 600 }}>premium property sourcing</strong>, and <strong style={{ color: '#1a1a1a', fontWeight: 600 }}>seamless ownership experience</strong>. At Space Sphere, we believe a property is more than real estate - it is a <em style={{ color: '#c79a4a' }}>statement, an asset, a lifetime belonging</em>.
          </p>
          <p className="body-copy" style={{ fontSize: '16px', lineHeight: '1.8', color: '#4a4a4a' }}>
            With <strong style={{ color: '#1a1a1a', fontWeight: 600 }}>elite partnerships</strong> across premium developers in <span style={{ color: '#c79a4a', fontWeight: 600 }}>Pune, Hyderabad and surrounding regions</span>, we bring you access to refined spaces built for those who desire more.
          </p>
          <p className="body-copy" style={{ fontSize: '16px', lineHeight: '1.8', color: '#4a4a4a' }}>
            Our strength lies in <strong style={{ color: '#1a1a1a', fontWeight: 600 }}>trust-driven relationships</strong>, <strong style={{ color: '#1a1a1a', fontWeight: 600 }}>transparent deals</strong>, and <strong style={{ color: '#1a1a1a', fontWeight: 600 }}>deep market expertise</strong>. We deal only in spaces worthy of legacy.
          </p>
          <div style={{ marginTop: '24px', padding: '20px', background: 'rgba(199, 154, 74, 0.05)', borderRadius: '8px', borderLeft: '4px solid #c79a4a' }}>
            <p style={{ fontSize: '15px', fontWeight: 600, color: '#1a1a1a', marginBottom: '12px' }}>Every project we represent is hand-evaluated for:</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
              <li style={{ display: 'flex', alignItems: 'start', gap: '10px', fontSize: '15px', color: '#4a4a4a' }}>
                <span style={{ color: '#c79a4a', fontSize: '18px', lineHeight: '1' }}>🔸</span>
                <span><strong>Design & Architecture Value</strong></span>
              </li>
              <li style={{ display: 'flex', alignItems: 'start', gap: '10px', fontSize: '15px', color: '#4a4a4a' }}>
                <span style={{ color: '#c79a4a', fontSize: '18px', lineHeight: '1' }}>🔸</span>
                <span><strong>Location Advantage & Appreciation</strong></span>
              </li>
              <li style={{ display: 'flex', alignItems: 'start', gap: '10px', fontSize: '15px', color: '#4a4a4a' }}>
                <span style={{ color: '#c79a4a', fontSize: '18px', lineHeight: '1' }}>🔸</span>
                <span><strong>Builder Credibility & Delivery History</strong></span>
              </li>
              <li style={{ display: 'flex', alignItems: 'start', gap: '10px', fontSize: '15px', color: '#4a4a4a' }}>
                <span style={{ color: '#c79a4a', fontSize: '18px', lineHeight: '1' }}>🔸</span>
                <span><strong>Lifestyle Amenities & Luxury Quotient</strong></span>
              </li>
            </ul>
          </div>
          <button 
            className="link-button" 
            style={{ marginTop: '6px', display: 'inline-flex', gap: '6px', alignItems: 'center', padding: '10px 0' }}
            onClick={() => setIsModalOpen(true)}
          >
            Schedule a Site Experience &gt;&gt;
          </button>
        </div>
        
        <div className="about-visual" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          {/* Decorative background element */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(199, 154, 74, 0.08) 0%, transparent 50%)',
            borderRadius: '20px',
            transform: 'rotate(-2deg)',
            zIndex: 0
          }}></div>
          
          {/* Main image container with layered frames */}
          <div style={{ 
            position: 'relative', 
            zIndex: 2,
            padding: '24px',
            background: 'linear-gradient(135deg, #ffffff 0%, #fefefe 100%)',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(199, 154, 74, 0.2)',
            border: '2px solid rgba(199, 154, 74, 0.2)',
            transform: 'rotate(1deg)',
            transition: 'transform 0.3s ease',
            marginLeft: '40px'
          }}>
            {/* Inner decorative border */}
            <div style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              right: '12px',
              bottom: '12px',
              border: '1px solid rgba(199, 154, 74, 0.3)',
              borderRadius: '12px',
              pointerEvents: 'none',
              zIndex: 1
            }}></div>
            
            {/* Image with overlay effect */}
            <div style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '12px',
              boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.1)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Space Sphere premium properties"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '12px',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              {/* Subtle gradient overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40%',
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.1), transparent)',
                pointerEvents: 'none',
                borderRadius: '0 0 12px 12px'
              }}></div>
          </div>
            
            {/* Decorative corner accents */}
            <div style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #c79a4a, #d4af6a)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(199, 154, 74, 0.4)',
              zIndex: 3
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            
            <div style={{
              position: 'absolute',
              bottom: '-8px',
              left: '-8px',
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, rgba(199, 154, 74, 0.8), rgba(199, 154, 74, 0.6))',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(199, 154, 74, 0.3)',
              zIndex: 3
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" opacity="0.9">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
          
          {/* Floating decorative elements */}
          <div style={{
            position: 'absolute',
            top: '10%',
            right: '-20px',
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, rgba(199, 154, 74, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: 1,
            filter: 'blur(20px)'
          }}></div>
          
          <div style={{
            position: 'absolute',
            bottom: '15%',
            left: '-30px',
            width: '120px',
            height: '120px',
            background: 'radial-gradient(circle, rgba(199, 154, 74, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: 1,
            filter: 'blur(25px)'
          }}></div>
        </div>
      </section>

      <section id="portfolio" className="projects-section" style={{ padding: '20px 24px 40px' }}>
        <div className="projects-header" style={{ marginBottom: '48px' }}>
          <h2 className="projects-title">Our Portfolio</h2>
          <p className="projects-subtitle" style={{ margin: '12px auto 0', fontSize: '18px', color: '#4a4a4a', fontStyle: 'italic' }}>
            A Selection Reserved for the Discerning Buyer
          </p>
          <p style={{ margin: '16px auto 0', fontSize: '16px', color: '#666', maxWidth: '800px', lineHeight: '1.7' }}>
            Whether you seek a <strong style={{ color: '#1a1a1a' }}>prestigious home address</strong> or a <strong style={{ color: '#1a1a1a' }}>strategic asset</strong> - Space Sphere curates only the finest opportunities.
          </p>
        </div>




        <div className="projects-carousel" style={{ margin: '48px 0', position: 'relative' }}>
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
                <h3 className="project-title" style={{ margin: '20px 24px 12px 24px', fontSize: '20px' }}>{project.title}</h3>

                <p style={{ margin: '0 24px 12px 24px', fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                  {idx === 0 && "Premium high-rise living with world-class amenities"}
                  {idx === 1 && "Exclusive gated communities with signature villas"}
                  {idx === 2 && "Strategic land investments with high appreciation potential"}
                  {idx === 3 && "Prime commercial spaces for maximum returns"}
                </p>
               
              </div>
            ))}
          </div>

          {/* Mobile Navigation Buttons - Only visible on mobile, positioned at section bottom corners */}

          <button
            onClick={goToPreviousProject}
            className="md:hidden"
            style={{
              position: 'absolute',
              left: '20px',
              bottom: '-40px',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #caa44a, #f6e7b3)',
              border: '2px solid #e8d7a3',
              color: '#1a1207',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 16px rgba(199, 154, 74, 0.4)',
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(199, 154, 74, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(199, 154, 74, 0.4)';
            }}
            aria-label="Previous project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <button
            onClick={goToNextProject}
            className="md:hidden"
            style={{
              position: 'absolute',
              right: '20px',
              bottom: '-40px',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #caa44a, #f6e7b3)',
              border: '2px solid #e8d7a3',
              color: '#1a1207',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 16px rgba(199, 154, 74, 0.4)',
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(199, 154, 74, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(199, 154, 74, 0.4)';
            }}
            aria-label="Next project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

       
      </section>

      <section className="why-choose-section" style={{ gap: '0', padding: '80px 0' }}>
        <div className="why-choose-content" style={{ alignItems: 'center', padding: '0 60px' }}>
          <div className="content-wrapper">
            <p className="eyebrow" style={{ fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c79a4a', fontWeight: 600, marginBottom: '12px' }}>
              The Space Sphere Edge
            </p>
            <h2 className="why-choose-title" style={{ margin: '0 0 8px 0', fontSize: '28px', fontFamily: "'Playfair Display', serif" }}>Because Luxury Deserves Precision.</h2>
            <div style={{ marginTop: '32px', display: 'grid', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                <span style={{ color: '#c79a4a', fontSize: '20px', lineHeight: '1', marginTop: '2px' }}>💠</span>
                <div>
                  <strong style={{ color: '#1a1a1a', fontSize: '16px', display: 'block', marginBottom: '4px' }}>Personalized Property Curation</strong>
                  <span style={{ color: '#4a4a4a', fontSize: '15px' }}>Tailored to taste & investment vision</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                <span style={{ color: '#c79a4a', fontSize: '20px', lineHeight: '1', marginTop: '2px' }}>💠</span>
                <div>
                  <strong style={{ color: '#1a1a1a', fontSize: '16px', display: 'block', marginBottom: '4px' }}>Access to Elite Developers</strong>
                  <span style={{ color: '#4a4a4a', fontSize: '15px' }}>across Pune & Hyderabad</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                <span style={{ color: '#c79a4a', fontSize: '20px', lineHeight: '1', marginTop: '2px' }}>💠</span>
                <div>
                  <strong style={{ color: '#1a1a1a', fontSize: '16px', display: 'block', marginBottom: '4px' }}>Transparent Deals</strong>
                  <span style={{ color: '#4a4a4a', fontSize: '15px' }}>No grey lines, no inflated numbers</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                <span style={{ color: '#c79a4a', fontSize: '20px', lineHeight: '1', marginTop: '2px' }}>💠</span>
                <div>
                  <strong style={{ color: '#1a1a1a', fontSize: '16px', display: 'block', marginBottom: '4px' }}>End-to-end Assistance</strong>
                  <span style={{ color: '#4a4a4a', fontSize: '15px' }}>Till the moment you hold your keys</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                <span style={{ color: '#c79a4a', fontSize: '20px', lineHeight: '1', marginTop: '2px' }}>💠</span>
                <div>
                  <strong style={{ color: '#1a1a1a', fontSize: '16px', display: 'block', marginBottom: '4px' }}>Investment-Led Advisory</strong>
                  <span style={{ color: '#4a4a4a', fontSize: '15px' }}>Growth, rental yield & appreciation insights</span>
                </div>
              </div>
            </div>
            <p style={{ marginTop: '32px', fontSize: '16px', color: '#1a1a1a', fontStyle: 'italic', fontWeight: 500 }}>
              Luxury begins with clarity. We deliver both.
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

      <section id="what-we-offer" className="experience-center-section" style={{ gap: '0', padding: '80px 0' }}>
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
                  alt={`Premium property showcase ${idx + 1}`}
                  className="slider-image"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="experience-center-content" style={{ alignItems: 'center', padding: '0 60px' }}>
          <div className="vertical-divider-left"></div>
          <div className="content-wrapper">
            <p className="eyebrow" style={{ fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c79a4a', fontWeight: 600, marginBottom: '12px' }}>
              What We Offer?
            </p>
            <h2 className="experience-center-title" style={{ margin: '0 0 8px 0', fontSize: '28px', fontFamily: "'Playfair Display', serif" }}>
              A Seamless Ownership Journey
            </h2>
            <div style={{ marginTop: '28px', display: 'grid', gap: '18px' }}>
              <div>
                <strong style={{ color: '#1a1a1a', fontSize: '16px', display: 'block', marginBottom: '6px' }}>Discovery Consultation</strong>
                <span style={{ color: '#4a4a4a', fontSize: '15px' }}>Define requirements, expectations & aspirations</span>
              </div>
              <div>
                <strong style={{ color: '#1a1a1a', fontSize: '16px', display: 'block', marginBottom: '6px' }}>Curated Project Showcase</strong>
                <span style={{ color: '#4a4a4a', fontSize: '15px' }}>Only premium & value-aligned options</span>
              </div>
              <div>
                <strong style={{ color: '#1a1a1a', fontSize: '16px', display: 'block', marginBottom: '6px' }}>Guided Site Tours</strong>
                <span style={{ color: '#4a4a4a', fontSize: '15px' }}>Experience spaces before deciding</span>
              </div>
              <div>
                <strong style={{ color: '#1a1a1a', fontSize: '16px', display: 'block', marginBottom: '6px' }}>Closure & Negotiation Support</strong>
                <span style={{ color: '#4a4a4a', fontSize: '15px' }}>Transparent & confident pricing</span>
              </div>
              <div>
                <strong style={{ color: '#1a1a1a', fontSize: '16px', display: 'block', marginBottom: '6px' }}>Paperwork + Loan Assistance</strong>
                <span style={{ color: '#4a4a4a', fontSize: '15px' }}>We simplify everything</span>
              </div>
            </div>
            <p style={{ marginTop: '28px', fontSize: '16px', color: '#1a1a1a', fontStyle: 'italic' }}>
              Your journey is effortless.<br />
              <strong style={{ color: '#c79a4a' }}>The destination - exceptional.</strong>
            </p>
            <p style={{ marginTop: '16px', fontSize: '15px', color: '#4a4a4a', fontStyle: 'italic' }}>
              Crafted for Comfort, Precision & Peace of Mind
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
                <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.9)' }}>Premium gated community with luxury amenities</p>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 24px', background: 'linear-gradient(180deg, #fafafa 0%, #ffffff 50%, #fafafa 100%)', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative background elements */}
        <div style={{ 
          position: 'absolute', 
          top: '10%', 
          left: '-5%', 
          fontSize: '200px', 
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
          fontSize: '200px', 
          color: 'rgba(199, 154, 74, 0.03)', 
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          lineHeight: 1,
          transform: 'rotate(15deg)',
          zIndex: 0
        }}>"</div>
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <p className="eyebrow" style={{ fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c79a4a', fontWeight: 600, marginBottom: '12px' }}>
              Client Impressions
            </p>
            <h2 style={{ fontSize: '42px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px', fontFamily: "'Playfair Display', serif", lineHeight: '1.2' }}>
              Real Words. Refined Experiences.
            </h2>
            <div style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, #c79a4a, #d4af6a)', margin: '20px auto 0' }}></div>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px', 
            alignItems: 'stretch', 
            position: 'relative'
          }}>
            {/* Featured Testimonial - Left Side */}
            <div style={{ 
              padding: '48px 40px', 
              background: 'linear-gradient(135deg, #ffffff 0%, #fefefe 100%)', 
              borderRadius: '20px', 
              boxShadow: '0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(199, 154, 74, 0.1)',
              border: '1px solid rgba(199, 154, 74, 0.15)',
              position: 'relative',
              zIndex: 2
            }}>
              {/* Decorative corner accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '120px',
                height: '120px',
                background: 'linear-gradient(135deg, rgba(199, 154, 74, 0.1) 0%, transparent 70%)',
                borderRadius: '0 20px 0 100%',
                zIndex: 0
              }}></div>
              
              {/* Large quote mark */}
              <div style={{ 
                fontSize: '120px', 
                color: 'rgba(199, 154, 74, 0.15)', 
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                lineHeight: 0.8,
                marginBottom: '20px',
                position: 'relative',
                zIndex: 1
              }}>"</div>
              
              {/* Star rating */}
              <div style={{ display: 'flex', gap: '6px', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#c79a4a" style={{ filter: 'drop-shadow(0 1px 2px rgba(199, 154, 74, 0.3))' }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              
              <p style={{ 
                fontSize: '20px', 
                lineHeight: '1.8', 
                color: '#1a1a1a', 
                fontStyle: 'italic', 
                marginBottom: '32px',
                position: 'relative',
                zIndex: 1,
                fontWeight: 500
              }}>
                "More than property guidance - it felt like <strong style={{ color: '#c79a4a', fontStyle: 'normal' }}>concierge service</strong>."
              </p>
              
              <div style={{ 
                borderTop: '2px solid rgba(199, 154, 74, 0.2)', 
                paddingTop: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #c79a4a, #d4af6a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 700,
                  flexShrink: 0
                }}>SC</div>
                <div>
                  <p style={{ fontSize: '16px', color: '#1a1a1a', fontWeight: 600, margin: '0 0 4px 0' }}>Satisfied Client</p>
                  <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Premium Property Owner</p>
                </div>
              </div>
            </div>
            
            {/* Second Testimonial - Right Side (Smaller, Offset) */}
            <div style={{ 
              padding: '40px 36px', 
              background: 'white', 
              borderRadius: '20px', 
              boxShadow: '0 6px 24px rgba(0,0,0,0.06)',
              border: '1px solid rgba(199, 154, 74, 0.1)',
              position: 'relative',
              transform: 'translateY(40px)',
              zIndex: 1
            }}>
              {/* Decorative line accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '100%',
                background: 'linear-gradient(180deg, #c79a4a, #d4af6a)',
                borderRadius: '20px 0 0 20px'
              }}></div>
              
              {/* Decorative corner accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '120px',
                height: '120px',
                background: 'linear-gradient(135deg, rgba(199, 154, 74, 0.1) 0%, transparent 70%)',
                borderRadius: '20px 0 0 0',
                zIndex: 0
              }}></div>
              
              {/* Large quote mark */}
              <div style={{ 
                fontSize: '120px', 
                color: 'rgba(199, 154, 74, 0.15)', 
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                lineHeight: 0.8,
                marginBottom: '20px',
                position: 'relative',
                zIndex: 1
              }}>"</div>
              
              {/* Star rating */}
              <div style={{ display: 'flex', gap: '6px', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#c79a4a" style={{ filter: 'drop-shadow(0 1px 2px rgba(199, 154, 74, 0.3))' }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              
              <p style={{ 
                fontSize: '20px', 
                lineHeight: '1.8', 
                color: '#1a1a1a', 
                fontStyle: 'italic', 
                marginBottom: '32px',
                position: 'relative',
                zIndex: 1,
                fontWeight: 500
              }}>
                "Luxury curated to precision. <strong style={{ color: '#c79a4a', fontStyle: 'normal' }}>Transparent, tasteful, trustworthy</strong>."
              </p>
              
              <div style={{ 
                borderTop: '2px solid rgba(199, 154, 74, 0.2)', 
                paddingTop: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #c79a4a, #d4af6a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 700,
                  flexShrink: 0
                }}>VC</div>
                <div>
                  <p style={{ fontSize: '16px', color: '#1a1a1a', fontWeight: 600, margin: '0 0 4px 0' }}>Valued Customer</p>
                  <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Investment Partner</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative bottom accent */}
          <div style={{ 
            marginTop: '60px', 
            textAlign: 'center',
            position: 'relative'
          }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '12px',
              padding: '16px 32px',
              background: 'rgba(199, 154, 74, 0.05)',
              borderRadius: '50px',
              border: '1px solid rgba(199, 154, 74, 0.15)'
            }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#c79a4a' }}></div>
              <p style={{ fontSize: '14px', color: '#666', margin: 0, fontStyle: 'italic' }}>
                Trusted by discerning clients across Pune & Hyderabad
              </p>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#c79a4a' }}></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section" style={{ padding: '80px 24px 100px' }}>
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
