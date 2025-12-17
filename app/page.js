

"use client";
// Enable client features for hero slideshow


import { useEffect, useState, useRef, useCallback } from "react";

const navLinks = [
  { name: "HOME", href: "#space-sphere-edge-section" },
  { name: "WHAT WE OFFER", href: "#what-we-offer" },
  { name: "PORTFOLIO", href: "#portfolio" },
  { name: "PROJECTS", href: "#projects" },
  { name: "ABOUT US", href: "#about" },
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
  const [isMobile, setIsMobile] = useState(false);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timelineScrollProgress, setTimelineScrollProgress] = useState(0);
  const timelineSectionRef = useRef(null);
  
  // Contact section animation states
  const [contactSectionInView, setContactSectionInView] = useState(false);
  const contactSectionRef = useRef(null);

  // Contact form state management with localStorage
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: 'India (+91)',
    mobileNumber: '',
    projectName: '',
    projectType: '',
    budget: '',
    consent: true
  });

  // Load saved form data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('spacesphere_contact_form');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
      } catch (error) {
        console.warn('Failed to parse saved form data:', error);
      }
    }
  }, []);

  // Save form data to localStorage whenever form data changes
  useEffect(() => {
    localStorage.setItem('spacesphere_contact_form', JSON.stringify(formData));
  }, [formData]);

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Clear form data from localStorage
  const clearFormData = () => {
    localStorage.removeItem('spacesphere_contact_form');
    setFormData({
      name: '',
      email: '',
      countryCode: 'India (+91)',
      mobileNumber: '',
      projectName: '',
      projectType: '',
      budget: '',
      consent: true
    });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your inquiry! We will contact you soon.');
    
    // Clear form data after successful submission
    clearFormData();
    
    // Close modal if open
    setIsModalOpen(false);
  };

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

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Set initial mobile state
    setIsMobile(window.innerWidth < 768);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  // Timeline scroll progress animation
  useEffect(() => {
    const handleTimelineScroll = () => {
      if (!timelineSectionRef.current) return;

      const section = timelineSectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      // Calculate scroll progress through the timeline section
      // Start animation when section top reaches 20% of viewport
      const startPoint = sectionTop - windowHeight * 0.8;
      // End animation when section bottom reaches 80% of viewport  
      const endPoint = sectionTop + sectionHeight - windowHeight * 0.2;
      
      let progress = 0;
      
      if (scrollPosition <= startPoint) {
        progress = 0;
      } else if (scrollPosition >= endPoint) {
        progress = 1;
      } else {
        // Calculate progress between start and end points
        progress = (scrollPosition - startPoint) / (endPoint - startPoint);
        progress = Math.max(0, Math.min(1, progress)); // Clamp between 0 and 1
      }
      
      // Apply smooth easing
      const easedProgress = easeInOutCubic(progress);
      setTimelineScrollProgress(easedProgress);
    };


    // Throttled scroll handler for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleTimelineScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    // Initial calculation
    handleTimelineScroll();

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  // Parallax effect for contact section background
  useEffect(() => {
    const handleParallaxScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      
      parallaxElements.forEach(element => {
        const speed = 0.5; // Slower than foreground for parallax effect
        const yPos = -(scrolled * speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };

    // Throttled parallax scroll handler
    let ticking = false;
    const throttledParallaxScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleParallaxScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledParallaxScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledParallaxScroll);
    };
  }, []);


  // Contact section intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setContactSectionInView(true);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of section is visible
      }
    );

    if (contactSectionRef.current) {
      observer.observe(contactSectionRef.current);
    }

    return () => {
      if (contactSectionRef.current) {
        observer.unobserve(contactSectionRef.current);
      }
    };
  }, []);

  // Card connection dots animation states
  const [cardPositions, setCardPositions] = useState({});
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  //jjjj
  useEffect(() => {
    const brand = document.getElementById("mobile-brand");
    if (!brand) return;
  
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
  
    if (!isMobile) return;
  
    // Force hidden on load
    brand.classList.remove("visible");
  
    const handleScroll = () => {
      if (window.scrollY > 80) {
        brand.classList.add("visible");
      } else {
        brand.classList.remove("visible");
      }
    };
  
    // Run once in case page loads scrolled
    handleScroll();
  
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
   

  // Easing function for smooth animation
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const activeImage = heroImages[currentSlide];

  return (
    <main className="bg-white text-foreground">
      {/* Sticky Navbar that appears on scroll */}



      <header 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-5 transition-all duration-300 ${
          isScrolled ? 'translate-y-0 opacity-100 backdrop-blur-md shadow-lg' : 'md:-translate-y-full md:opacity-0'
        }`}
        style={{
          background: isScrolled ? 'rgba(245, 245, 240, 0.95)' : 'transparent',
        }}
      >

<div
  id="mobile-brand"
  className={`flex items-center gap-2 text-xl md:text-2xl ${isScrolled ? 'visible' : ''}`}
>
  <span className="font-semibold" style={{ color: isScrolled ? '#1a1a1a' : '#f0ede6' }}>SPACE</span>
  <span className="opacity-80" style={{ color: isScrolled ? '#1a1a1a' : '#f0ede6' }}>| SPHERE</span>
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
              background: isScrolled ? 'rgba(245, 245, 240, 0.98)' : 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              animation: 'slideDown 0.3s ease-out',
              transformOrigin: 'top'
            }}
          >
           <nav
  className="flex flex-col px-6 py-4 gap-2 w-full"
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
        px-4 
        py-3 
        rounded-lg
        transition-all
        duration-200
        hover:bg-white
        hover:shadow-sm
        active:scale-95
      "
      style={{ 
        cursor: "pointer", 
        color: isScrolled ? "#1a1a1a" : "#f0ede6",
        fontWeight: 500,
        textAlign: "center",
        border: "none"
      }}
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
                <span className="font-semibold">SPACE</span>
                <span className="opacity-80">| SPHERE</span>
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



            <div className="hero" style={{ 
                textAlign: 'center', 
                width: '100%',
                position: 'relative',
                padding: '25px 20px 15px',
                maxWidth: '1200px',
                margin: '0 auto',
                overflow: 'hidden'
              }}>




                {/* Enhanced decorative accent line */}
                <div style={{
                  position: 'relative',
                  width: '120px',
                  height: '2px',
                  margin: '0 auto 40px',
                  animation: 'fadeInUp 1s ease-out 0.3s both'
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(199, 154, 74, 0.4), rgba(199, 154, 74, 0.8), rgba(199, 154, 74, 0.4), transparent)',
                    borderRadius: '2px',
                    boxShadow: '0 0 15px rgba(199, 154, 74, 0.6)'
                  }} />
                </div>


                {/* Main heading with enhanced gradient effect and glow */}
                <h1 className="hero-heading" style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(4rem, 7vw + 1.5rem, 6.5rem)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  marginBottom: '20px',
                  textAlign: 'center',
                  lineHeight: '1.1',
                  position: 'relative',
                  display: 'inline-block',
                  transform: 'translateY(15px)',
                  animation: 'fadeInUp 1s ease-out 0.2s both',
                  filter: 'drop-shadow(0 0 30px rgba(199, 154, 74, 0.3))'
                }}>
                  {/* Glow effect behind text */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '120%',
                    height: '120%',
                    background: 'radial-gradient(ellipse at center, rgba(199, 154, 74, 0.15) 0%, transparent 70%)',
                    zIndex: -1,
                    animation: 'pulse 4s ease-in-out infinite'
                  }} />
                  
                  <span
  style={{
    display: 'block',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1.1em',
    background:
      'linear-gradient(135deg, #ffffff 0%, #f5f5f0 40%, rgba(199, 154, 74, 0.4) 60%, #ffffff 100%)',
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'shimmer 5s ease-in-out infinite',
    textShadow:
      '0 4px 30px rgba(0, 0, 0, 0.4), 0 0 60px rgba(199, 154, 74, 0.2)',
    position: 'relative',
    zIndex: 1,
  }}
>
  SPACE
</span>

<span
  style={{
    display: 'block',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '0.82em',
    marginTop: '-0.2em',
    letterSpacing: '0.15em',
    background:
      'linear-gradient(135deg, #ffffff 0%, #f5f5f0 40%, rgba(199, 154, 74, 0.4) 60%, #ffffff 100%)',
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textShadow:
      '0 2px 20px rgba(0, 0, 0, 0.4), 0 0 40px rgba(199, 154, 74, 0.15)',
    position: 'relative',
    zIndex: 1,
    animation: 'shimmer 3s ease-in-out infinite',
  }}
>
  SPHERE
</span>



                </h1>

                {/* Enhanced elegant divider with animated elements */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '20px',
                  margin: '40px auto 45px',
                  width: 'fit-content',
                  animation: 'fadeInUp 1s ease-out 0.4s both',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '50px',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(199, 154, 74, 0.3), rgba(199, 154, 74, 0.7))',
                    boxShadow: '0 0 8px rgba(199, 154, 74, 0.4)'
                  }} />
                  <div style={{
                    position: 'relative',
                    width: '10px',
                    height: '10px'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: 'rgba(199, 154, 74, 0.9)',
                      boxShadow: '0 0 15px rgba(199, 154, 74, 0.8), 0 0 30px rgba(199, 154, 74, 0.4)',
                      animation: 'pulse 2.5s ease-in-out infinite'
                    }} />
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      border: '1px solid rgba(199, 154, 74, 0.3)',
                      animation: 'ripple 2.5s ease-out infinite'
                    }} />
                  </div>
                  <div style={{
                    width: '50px',
                    height: '1px',
                    background: 'linear-gradient(90deg, rgba(199, 154, 74, 0.7), rgba(199, 154, 74, 0.3), transparent)',
                    boxShadow: '0 0 8px rgba(199, 154, 74, 0.4)'
                  }} />
                </div>


                {/* Unique subheading with modern typography treatment */}
                <div style={{ 
                  position: 'relative', 
                  marginBottom: '40px',
                  padding: '0 10px'
                }}>
                  {/* Animated word-by-word display */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0px',
                    position: 'relative'
                  }}>
                    {/* First phrase - "Where Investments" */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'center',
                      gap: '12px',
                      flexWrap: 'wrap',
                      animation: 'fadeInUp 1s ease-out 0.5s both',
                      marginBottom: '0px'
                    }}>
                      <span style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 'clamp(1.4rem, 2.2vw + 0.8rem, 2rem)',
                        fontWeight: 400,
                        color: 'rgba(245, 245, 240, 0.85)',
                        fontStyle: 'italic',
                        letterSpacing: '0.05em',
                        textShadow: '0 2px 15px rgba(0, 0, 0, 0.4)'
                      }}>
                        Where
                      </span>
                      <span style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(1.8rem, 3vw + 1rem, 2.6rem)',
                        fontWeight: 600,
                        background: 'linear-gradient(135deg, #ffffff 0%, rgba(199, 154, 74, 0.5) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        letterSpacing: '0.08em',
                        textShadow: '0 3px 20px rgba(0, 0, 0, 0.3)',
                        position: 'relative'
                      }}>
                        Investments
                      </span>
                    </div>

                    {/* Connecting element */}
                    <div style={{
                      width: '2px',
                      height: '6px',
                      background: 'linear-gradient(180deg, transparent, rgba(199, 154, 74, 0.5), transparent)',
                      margin: '0px 0',
                      animation: 'fadeInUp 1s ease-out 0.55s both'
                    }} />

                    {/* Second phrase - "Become Legacies" */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'center',
                      gap: '12px',
                      flexWrap: 'wrap',

                      transform: 'translateX(20px)',
                      animation: 'fadeInUp 1s ease-out 0.6s both'
                    }}>
                      <span style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 'clamp(1rem, 1.3vw + 0.6rem, 1.4rem)',
                        fontWeight: 500,
                        color: 'rgba(245, 245, 240, 0.9)',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        textShadow: '0 2px 12px rgba(0, 0, 0, 0.4)'
                      }}>
                        Become
                      </span>
                      <span style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(1.6rem, 2.5vw + 0.9rem, 2.2rem)',
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, rgba(199, 154, 74, 0.4) 0%, #ffffff 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        letterSpacing: '0.1em',
                        textShadow: '0 3px 20px rgba(0, 0, 0, 0.3)',
                        position: 'relative'
                      }}>
                        Legacies
                      </span>
                    </div>
                  </div>

                  {/* Modern decorative underline */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    margin: '30px auto 0',
                    width: 'fit-content',
                    animation: 'fadeInUp 1s ease-out 0.65s both'
                  }}>
                    <div style={{
                      width: '25px',
                      height: '1px',
                      background: 'rgba(199, 154, 74, 0.4)'
                    }} />
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'rgba(199, 154, 74, 0.7)',
                      boxShadow: '0 0 10px rgba(199, 154, 74, 0.6)',
                      animation: 'pulse 2.5s ease-in-out infinite'
                    }} />
                    <div style={{
                      width: '60px',
                      height: '1px',
                      background: 'linear-gradient(90deg, rgba(199, 154, 74, 0.4), rgba(199, 154, 74, 0.7), rgba(199, 154, 74, 0.4))'
                    }} />
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'rgba(199, 154, 74, 0.7)',
                      boxShadow: '0 0 10px rgba(199, 154, 74, 0.6)',
                      animation: 'pulse 2.5s ease-in-out infinite 0.5s'
                    }} />
                    <div style={{
                      width: '25px',
                      height: '1px',
                      background: 'rgba(199, 154, 74, 0.4)'
                    }} />
                  </div>
                </div>
                


                {/* Premium CTA buttons */}


                <div className="hero-cta-row" style={{ 
                  display: 'flex', 
                  gap: '20px', 
                  justifyContent: 'center',
                  flexWrap: 'nowrap',
                  animation: 'fadeInUp 1s ease-out 0.7s both',
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                  maxWidth: '800px',
                  margin: '10px auto 0',
                  padding: '0 10px'
                }}>
<div className="hero-buttons"   style={{
    display: 'flex',
    gap: '20px',          // 👈 DESKTOP GAP BETWEEN BUTTONS
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
                  <button
  className="hero-secondary mobile-shift"
  onClick={() => setIsModalOpen(true)}
                    style={{
                      padding: '16px 32px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      background: 'linear-gradient(135deg, rgba(199, 154, 74, 0.98) 0%, rgba(212, 175, 106, 0.95) 50%, rgba(199, 154, 74, 0.98) 100%)',
                      backgroundSize: '200% 200%',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '50px',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 10px 30px rgba(199, 154, 74, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.15) inset, 0 0 40px rgba(199, 154, 74, 0.2)',
                      position: 'relative',
                      overflow: 'hidden',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      minWidth: 'fit-content'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-3px) scale(1.03)';
                      e.target.style.boxShadow = '0 15px 40px rgba(199, 154, 74, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.25) inset, 0 0 60px rgba(199, 154, 74, 0.3)';
                      e.target.style.backgroundPosition = '100% 0';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0) scale(1)';
                      e.target.style.boxShadow = '0 10px 30px rgba(199, 154, 74, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.15) inset, 0 0 40px rgba(199, 154, 74, 0.2)';
                      e.target.style.backgroundPosition = '0 0';
                    }}
                  >
                    {/* Shimmer effect overlay */}
                   
                    <span className="hero-primary-text" style={{ position: 'relative', zIndex: 1, display: 'block' }}>
  Book a Private Consultation
</span>
                  </button>

                  <button
                     className="hero-secondary mobile-shift"
                    onClick={() => {
                      const edgeSection = document.getElementById('projects');
                      if (edgeSection) {
                        edgeSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    style={{
                      padding: '16px 32px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      background: 'linear-gradient(135deg, rgba(199, 154, 74, 0.98) 0%, rgba(212, 175, 106, 0.95) 50%, rgba(199, 154, 74, 0.98) 100%)',
                      backgroundSize: '200% 200%',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '50px',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 10px 30px rgba(199, 154, 74, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.15) inset, 0 0 40px rgba(199, 154, 74, 0.2)',
                      position: 'relative',
                      overflow: 'hidden',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      minWidth: 'fit-content'
                    }}
                    onMouseEnter={(e) => {
                      const btn = e.currentTarget;
                      btn.style.transform = 'translateY(-3px) scale(1.03)';
                      btn.style.boxShadow =
                        '0 15px 40px rgba(199, 154, 74, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.25) inset, 0 0 60px rgba(199, 154, 74, 0.3)';
                      btn.style.backgroundPosition = '100% 0';
                    }}
                    
                    onMouseLeave={(e) => {
                      const btn = e.currentTarget;
                      btn.style.transform = 'translateY(0) scale(1)';
                      btn.style.boxShadow =
                        '0 10px 30px rgba(199, 154, 74, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.15) inset, 0 0 40px rgba(199, 154, 74, 0.2)';
                      btn.style.backgroundPosition = '0 0';
                    }}
>                    
                    {/* Animated border glow */}
                    <div style={{
                      position: 'absolute',
                      top: '-2px',
                      left: '-2px',
                      right: '-2px',
                      bottom: '-2px',
                      background: 'linear-gradient(45deg, rgba(199, 154, 74, 0.3), rgba(255, 255, 255, 0.3), rgba(199, 154, 74, 0.3))',
                      backgroundSize: '200% 200%',
                      borderRadius: '50px',
                      zIndex: -1,
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      animation: 'shimmer 3s ease-in-out infinite'
                    }} />
                    <span style={{ position: 'relative', zIndex: 1, display: 'block' }}>
                      View listings
                    </span>
                  </button>
                </div>
                </div>




                
                {/* Corner accent lines */}
                <div style={{
                  position: 'absolute',
                  top: '3%',
                  right: '8%',
                  width: '40px',
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(199, 154, 74, 0.4))',
                  transform: 'rotate(45deg)',
                  pointerEvents: 'none'
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '5%',
                  left: '8%',
                  width: '35px',
                  height: '1px',
                  background: 'linear-gradient(90deg, rgba(199, 154, 74, 0.4), transparent)',
                  transform: 'rotate(-45deg)',
                  pointerEvents: 'none'
                }} />
              </div>
            </div>
          </div>
        </div>


        <div className="slider-dots-bar" style={{ display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'center', padding: '4px 14px' }}>
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
      </section>

      <section id="about" className="about-slab">
        <div className="about-wrap">




        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 className="about-hero-title">Welcome To Space Sphere</h2>
          <h4 className="office-subheading">
          Exclusive Homes. Investment-worthy Properties. Prestigious Addresses.
  </h4>
          
          {/* Mobile-only image after subheading */}
          <div className="about-image-frame md:hidden" style={{ margin: '20px auto 0', maxWidth: '300px' }}>
            <img src="/about1.jpg" alt="Luxury estate poolside" />
          </div>
          
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p>
              Space Sphere is a trusted partner in Indian real estate, bringing together expert advisory, premium property sourcing, and a seamless ownership experience. We believe a property is more than real estate - it’s a statement, an asset, and a lifetime belonging. With elite partnerships across premium developers in Pune, Hyderabad, and surrounding regions, we offer access to refined spaces for those who desire more.
              </p>
             
              <div style={{ display: 'grid', gap: '8px' }}>
                <p   className="text-center md:text-center"
 style={{ margin: 0, fontWeight: 600 }}>
                  With Us You Get :
                </p>
                <ul
  style={{
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '14px 24px', // row gap | column gap
  }}
>

  <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

  <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
  stroke="#b67e5b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
  <rect x="3" y="6" width="7" height="15" rx="1"/>
  <rect x="14" y="3" width="7" height="18" rx="1"/>
  <path d="M6 10h1M6 13h1M6 16h1"/>
  <path d="M17 7h1M17 10h1M17 13h1M17 16h1"/>
</svg>

    <span>Design &amp; Architecture Value</span>

  </li>

  <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

  <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
  stroke="#b67e5b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="2"/>
  <path d="M3 9h18M9 3v18"/>
  <circle cx="15" cy="15" r="2"/>
</svg>


    <span>Location Advantage &amp; Appreciation</span>
  </li>

  <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

  <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
  stroke="#b67e5b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
  <rect x="4" y="3" width="14" height="18" rx="2"/>
  <path d="M8 7h6M8 11h6"/>
  <circle cx="18" cy="16" r="2"/>
  <path d="M20 16h2"/>
</svg>


    <span>Builder Credibility &amp; Delivery History</span>
  </li>

  <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

  <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
  stroke="#b67e5b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
  <rect x="5" y="4" width="5" height="17"/>
  <rect x="14" y="2" width="5" height="19"/>
  <path d="M7.5 8h0M7.5 11h0M7.5 14h0"/>
  <path d="M16.5 6h0M16.5 9h0M16.5 12h0M16.5 15h0"/>
</svg>


    <span>Lifestyle Amenities &amp; Luxury Quotient</span>
  </li>
</ul>

              </div>
              <button
                className="about-button"
                onClick={() => setIsModalOpen(true)}
              >
                Schedule a Site Experience 
              </button>
            </div>

            <div className="about-image-frame hidden md:block">
              <img src="/about1.jpg" alt="Luxury estate poolside" />
            </div>
          </div>
        </div>
      </section>


      <section id = "space-sphere-edge-section" className="space-sphere-edge-section" style={{ padding: '80px 0', position: 'relative', overflow: 'hidden', background: '#ffffff', color: '#ffffff' }}>
        {/* Building Background Assets with Transparency */}
        




        {/* Left Side Building Silhouette - Hidden on Mobile */}
        <div className="hidden md:block" style={{
          position: 'absolute',
          left: '-100px',
          bottom: '0',
          width: '300px',
          height: '400px',
          background: `url("data:image/svg+xml,%3Csvg width='300' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='rgba(199, 154, 74, 0.4)' fill-rule='evenodd'%3E%3Cpath d='M20 380h260v20H20zM40 320h20v60h-20zM80 280h20v100h-20zM120 240h20v140h-20zM160 200h20v180h-20zM200 160h20v220h-20zM240 120h20v260h-20z'/%3E%3Crect x='40' y='280' width='200' height='100' fill='rgba(199, 154, 74, 0.35)'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom left',
          zIndex: 1,
          pointerEvents: 'none'
        }}></div>
        

        {/* Right Side Building Complex - Hidden on Mobile */}
        <div className="hidden md:block" style={{
          position: 'absolute',
          right: '-80px',
          bottom: '0',
          width: '280px',
          height: '350px',
          background: `url("data:image/svg+xml,%3Csvg width='280' height='350' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='rgba(199, 154, 74, 0.35)' fill-rule='evenodd'%3E%3Crect x='10' y='200' width='60' height='140'/%3E%3Crect x='80' y='150' width='70' height='190'/%3E%3Crect x='160' y='100' width='80' height='240'/%3E%3Crect x='250' y='180' width='20' height='160'/%3E%3Crect x='120' y='280' width='40' height='60'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom right',
          zIndex: 1,
          pointerEvents: 'none'
        }}></div>
        
        {/* Center Back Building Silhouette */}
        <div className="hidden md:block" style={{
          position: 'absolute',
          left: '50%',
          bottom: '0',
          transform: 'translateX(-50%)',
          width: '200px',
          height: '300px',
          background: `url("data:image/svg+xml,%3Csvg width='200' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='rgba(199, 154, 74, 0.3)' fill-rule='evenodd'%3E%3Cpath d='M20 280h160v20H20zM40 200h40v80h-40zM100 160h40v120h-40zM60 120h30v80h-30zM130 100h30v100h-30z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom center',
          zIndex: 1,
          pointerEvents: 'none'
        }}></div>
        
        {/* Architectural Grid Pattern */}
       
        
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
          <h2 className="about-hero-title">The Space Sphere Edge</h2>
          <h4 className="office-subheading">
          Because Luxury Deserves Precision.
  </h4>
          
          </div>


          {/* Floating Cards Grid - refreshed design */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(5, minmax(240px, 1fr))',
            gridTemplateAreas: `
              "card1 . card2 . card3"
              ". card4 . card5 ."
            `,
            gap: '28px',
            justifyContent: 'center',
            justifyItems: 'center',
            position: 'relative',
            marginTop: '40px'
          }}>



            {/* SVG Connections Overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 1
            }}>
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{ overflow: 'visible' }}
              >
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(199, 154, 74, 0.4)" />
                    <stop offset="50%" stopColor="rgba(212, 175, 106, 0.8)" />
                    <stop offset="100%" stopColor="rgba(199, 154, 74, 0.4)" />
                  </linearGradient>
                  <style>
                    {`
                      @keyframes dashFlow {
                        to {
                          stroke-dashoffset: -100;
                        }
                      }
                      .connection-line {
                        stroke-dasharray: 3 3;
                        animation: dashFlow 20s linear infinite;
                        vector-effect: non-scaling-stroke;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                      }
                      @media (max-width: 1024px) {
                        .connection-lines {
                          display: none;
                        }
                      }
                    `}
                  </style>
                </defs>
                <g className="connection-lines" fill="none" stroke="rgba(199, 154, 74, 0.8)" strokeWidth="2">
                  
                  {/* 
                      Grid Layout: 5 columns with gaps, 2 rows
                      Based on gridTemplateAreas: "card1 . card2 . card3" / ". card4 . card5 ."
                      
                      Each column is 20% width. Cards are centered in their columns.
                      Row 1 (top): Cards 1, 2, 3 - Y center around 25%
                      Row 2 (bottom): Cards 4, 5 - Y center around 75%
                      
                      Card centers:
                      Card 1 (Col 1): ~10% X, ~25% Y
                      Card 4 (Col 2): ~30% X, ~75% Y
                      Card 2 (Col 3): ~50% X, ~25% Y
                      Card 5 (Col 4): ~70% X, ~75% Y
                      Card 3 (Col 5): ~90% X, ~25% Y
                  */}


                  {/* Card 1 -> Card 4 - Right then Down
                      From Card 1 center (10%, 25%) to Card 4 center (30%, 75%)
                      Path: Go right, then down
                  */}
                  <path d="M 10 25 L 20 25 L 20 75 L 30 75" className="connection-line" />
                  
                  {/* Card 4 -> Card 2 - Right then Up
                      From Card 4 center (30%, 75%) to Card 2 center (50%, 25%)
                      Path: Go right, then up
                  */}
                  <path d="M 30 75 L 40 75 L 40 25 L 50 25" className="connection-line" />

                  {/* Card 2 -> Card 5 - Right then Down
                      From Card 2 center (50%, 25%) to Card 5 center (70%, 75%)
                      Path: Go right, then down
                  */}
                  <path d="M 50 25 L 60 25 L 60 75 L 70 75" className="connection-line" />

                  {/* Card 5 -> Card 3 - Right then Up
                      From Card 5 center (70%, 75%) to Card 3 center (90%, 25%)
                      Path: Go right, then up
                  */}
                  <path d="M 70 75 L 80 75 L 80 25 L 90 25" className="connection-line" />

                </g>
              </svg>
            </div>








            {/* Card 1 */}

            <div className="floating-card" style={{
              gridArea: 'card1',
              background: 'linear-gradient(135deg, #ffffff 0%, #faf7f1 100%)',
              padding: '24px 22px',
              borderRadius: '18px',
              boxShadow: '0 14px 40px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(199, 154, 74, 0.25)',
              position: 'relative',
              width: '100%',
              maxWidth: '450px',
              minHeight: '160px',
              height: '190px',
              transform: 'none',
              transition: 'all 0.35s ease',
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
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>


              
              
              <div style={{ marginTop: '18px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
                Personalized Curation

                </h3>
                <p style={{ fontSize: '14px', color: '#4a4a4a', lineHeight: '1.5', margin: 0 }}>
                Tailored to your taste & investment vision, every property is hand-selected for your unique lifestyle.                </p>
              </div>
            </div>




            {/* Card 2 */}

            <div className="floating-card" style={{
              gridArea: 'card2',
              background: 'linear-gradient(135deg, #ffffff 0%, #faf7f1 100%)',
              padding: '24px 22px',
              borderRadius: '18px',
              boxShadow: '0 14px 40px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(199, 154, 74, 0.25)',
              position: 'relative',
              width: '100%',
              maxWidth: '450px',
              minHeight: '160px',
              height: '190px',
              transform: 'none',
              transition: 'all 0.35s ease',
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
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>


              <div style={{ marginTop: '18px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
                  Elite Developer Network
                </h3>
                <p style={{ fontSize: '14px', color: '#4a4a4a', lineHeight: '1.5', margin: 0 }}>
                  Exclusive partnerships across premium developers in Pune & Hyderabad region.
                </p>
              </div>
            </div>




            {/* Card 3 */}

            <div className="floating-card" style={{
              gridArea: 'card3',
              background: 'linear-gradient(135deg, #ffffff 0%, #faf7f1 100%)',
              padding: '24px 22px',
              borderRadius: '18px',
              boxShadow: '0 14px 40px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(199, 154, 74, 0.25)',
              position: 'relative',
              width: '100%',
              maxWidth: '450px',
              minHeight: '160px',
              height: '190px',
              transform: 'none',
              transition: 'all 0.35s ease',
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
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
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



            {/* Card 4 */}

            <div className="floating-card" style={{
              gridArea: 'card4',
              background: 'linear-gradient(135deg, #ffffff 0%, #faf7f1 100%)',
              padding: '24px 22px',
              borderRadius: '18px',
              boxShadow: '0 14px 40px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(199, 154, 74, 0.25)',
              position: 'relative',
              width: '100%',
              maxWidth: '450px',
              minHeight: '160px',
              height: '190px',
              transform: 'none',
              transition: 'all 0.35s ease',
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
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>


              <div style={{ marginTop: '20px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
                End-to-End Support                </h3>
                <p style={{ fontSize: '14px', color: '#4a4a4a', lineHeight: '1.5', margin: 0 }}>
                From search to keys, we guide you through every step of your property journey                </p>
              </div>
            </div>



            {/* Central Feature Card */}

            <div className="floating-card central-card" style={{
              gridArea: 'card5',
              background: 'linear-gradient(135deg, #ffffff 0%, #faf7f1 100%)',
              padding: '24px 22px',
              borderRadius: '18px',
              boxShadow: '0 14px 40px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(199, 154, 74, 0.25)',
              position: 'relative',
              transform: 'none',
              zIndex: 4,
              margin: '1px auto',
              width: '100%',
              maxWidth: '450px',
              minHeight: '160px',
              height: '190px',
              alignSelf: 'center'
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>

              
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a', marginBottom: '10px', fontFamily: "'Playfair Display', serif" }}>
                Investment-Led Advisory
                </h3>
                <p style={{ fontSize: '14px', color: '#4a4a4a', lineHeight: '1.6', margin: 0 }}>
                Data-driven insights on growth potential, rental yields & market appreciation trends. </p>
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

      <section 
        style={{ 
          paddingTop: '120px',
          paddingRight: '80px',
          paddingBottom: '90px',
          paddingLeft: '80px',
          background: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95))', 
          minHeight: '40vh',
          backgroundImage: `url('/villa1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          color: '#000000'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>



<h4 className="office-subheading" style={{ color: 'white', fontSize: '40px', marginTop: '26px', fontWeight: '600', textAlign: 'center'}} >
        Connecting People With Properties That Matter.
  </h4>
          
        </div>


      

      </section>
      <section id="what-we-offer" ref={timelineSectionRef} className="what-we-offer" style={{ padding: '80px 0', position: 'relative', overflow: 'hidden', background: '#1a1a1a' }}>
        {/* Background Decorative Elements */}
        <div style={{ 
          position: 'absolute', 
          top: '-100px', 
          left: '-100px', 
          width: '300px', 
          height: '300px', 
          background: 'radial-gradient(circle, rgba(199, 154, 74, 0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 1
        }}></div>
        
        <div style={{ 
          position: 'absolute', 
          bottom: '-80px', 
          right: '-80px', 
          width: '250px', 
          height: '250px', 
          background: 'conic-gradient(from 180deg, rgba(199, 154, 74, 0.08) 0deg, transparent 90deg, rgba(199, 154, 74, 0.1) 180deg, transparent 270deg, rgba(199, 154, 74, 0.08) 360deg)',
          zIndex: 1,
          animation: 'rotate 25s linear infinite reverse'
        }}></div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 className="about-hero-title">What We Offer? </h2>
          <h4 className="office-subheading" style={{color:"white"}} >
          A Seamless Ownership Journey
  </h4>
           
          </div>



          {/* Timeline Process Flow */}
          <div style={{ position: 'relative', marginTop: '50px' }}>
            {/* Central Timeline Line - Dynamic Background */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '4px',
              background: 'linear-gradient(180deg, rgba(199, 154, 74, 0.2) 0%, rgba(212, 175, 106, 0.15) 50%, rgba(199, 154, 74, 0.2) 100%)',
              transform: 'translateX(-50%)',
              borderRadius: '2px',
              zIndex: 1,
              boxShadow: '0 0 10px rgba(199, 154, 74, 0.1)'
            }}></div>


            {/* Central Timeline Line - Dynamic Filled Portion */}
            <div 
              style={{
                position: 'absolute',
                left: '50%',
                top: '0',
                width: '4px',
                height: `${timelineScrollProgress * 100}%`,
                background: 'linear-gradient(180deg, rgba(199, 154, 74, 0.8) 0%, rgba(212, 175, 106, 0.9) 50%, rgba(199, 154, 74, 0.8) 100%)',
                transform: 'translateX(-50%)',
                borderRadius: '2px',
                zIndex: 2,
                boxShadow: timelineScrollProgress > 0 ? '0 0 20px rgba(199, 154, 74, 0.4), 0 0 40px rgba(199, 154, 74, 0.2)' : 'none',
                transition: 'height 0.1s ease-out',
                overflow: 'hidden'
              }}
            >
              {/* Animated glow effect */}
              {timelineScrollProgress > 0.1 && (
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '-20px',
                    left: '50%',
                    width: '20px',
                    height: '20px',
                    background: 'radial-gradient(circle, rgba(212, 175, 106, 0.6) 0%, transparent 70%)',
                    borderRadius: '50%',
                    transform: 'translateX(-50%)',
                    animation: 'pulse 2s ease-in-out infinite'
                  }}
                />
              )}
            </div>




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
                  background: 'linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)',
                  padding: '35px 20px',
                  borderRadius: '16px',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3), 0 5px 15px rgba(199, 154, 74, 0.15)',
                  border: '1px solid rgba(199, 154, 74, 0.3)',
                  maxWidth: '350px',
                  position: 'relative',
                  transform: 'translateX(0)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  backdropFilter: 'blur(10px)'
                }}>
                  
                  
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f5f5f5', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
                    Discovery Consultation
                  </h3>
                  <p style={{ fontSize: '14px', color: '#b8b3a8', lineHeight: '1.5', margin: 0 }}>
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
                border: '3px solid #1a1a1a',
                boxShadow: '0 0 15px rgba(199, 154, 74, 0.5), 0 0 25px rgba(199, 154, 74, 0.3)',
                zIndex: 3
              }}></div>
              
              <div style={{ flex: '1', paddingLeft: '50px' }}>
                <div style={{
                  width: '350px',
                  height: '180px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
                  border: '2px solid rgba(199, 154, 74, 0.4)',
                  margin: '0 auto',
                  position: 'relative',
                  background: 'linear-gradient(135deg, rgba(199, 154, 74, 0.1), rgba(199, 154, 74, 0.05))'
                }}>
                  <img 
                    src="/1.jpg" 
                    alt="Consultation Meeting"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(1.05) contrast(1.05) saturate(1.1)'
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
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
                  border: '2px solid rgba(199, 154, 74, 0.4)',
                  margin: '0 auto',
                  position: 'relative',
                  background: 'linear-gradient(135deg, rgba(199, 154, 74, 0.1), rgba(199, 154, 74, 0.05))'
                }}>
                  <img 
                    src="/2.jpg" 
                    alt="Premium Villa Properties"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(1.05) contrast(1.05) saturate(1.1)'
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
                border: '3px solid #1a1a1a',
                boxShadow: '0 0 15px rgba(199, 154, 74, 0.5), 0 0 25px rgba(199, 154, 74, 0.3)',
                zIndex: 3
              }}></div>
              
              <div style={{ flex: '1', paddingLeft: '50px' }}>
                <div className="timeline-card" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)',
                  padding: '35px 20px',
                  borderRadius: '16px',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3), 0 5px 15px rgba(199, 154, 74, 0.15)',
                  border: '1px solid rgba(199, 154, 74, 0.3)',
                  maxWidth: '350px',
                  position: 'relative',
                  transform: 'translateX(0)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  backdropFilter: 'blur(10px)'
                }}>
                  
                  
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f5f5f5', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
                    Curated Project Showcase
                  </h3>
                  <p style={{ fontSize: '14px', color: '#b8b3a8', lineHeight: '1.5', margin: 0 }}>
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
                  background: 'linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)',
                  padding: '35px 20px',
                  borderRadius: '16px',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3), 0 5px 15px rgba(199, 154, 74, 0.15)',
                  border: '1px solid rgba(199, 154, 74, 0.3)',
                  maxWidth: '350px',
                  position: 'relative',
                  transform: 'translateX(0)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  backdropFilter: 'blur(10px)'
                }}>
                  
                  
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f5f5f5', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
                    Guided Site Tours
                  </h3>
                  <p style={{ fontSize: '14px', color: '#b8b3a8', lineHeight: '1.5', margin: 0 }}>
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
                border: '3px solid #1a1a1a',
                boxShadow: '0 0 15px rgba(199, 154, 74, 0.5), 0 0 25px rgba(199, 154, 74, 0.3)',
                zIndex: 3
              }}></div>
              
              <div style={{ flex: '1', paddingLeft: '50px' }}>
                <div style={{
                  width: '350px',
                  height: '180px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
                  border: '2px solid rgba(199, 154, 74, 0.4)',
                  margin: '0 auto',
                  position: 'relative',
                  background: 'linear-gradient(135deg, rgba(199, 154, 74, 0.1), rgba(199, 154, 74, 0.05))'
                }}>
                  <img 
                    src="/3.jpg" 
                    alt="Luxury Apartment Tour"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(1.05) contrast(1.05) saturate(1.1)'
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
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
                  border: '2px solid rgba(199, 154, 74, 0.4)',
                  margin: '0 auto',
                  position: 'relative',
                  background: 'linear-gradient(135deg, rgba(199, 154, 74, 0.1), rgba(199, 154, 74, 0.05))'
                }}>
                  <img 
                    src="/4.jpg" 
                    alt="Commercial Property Negotiation"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(1.05) contrast(1.05) saturate(1.1)'
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
                border: '3px solid #1a1a1a',
                boxShadow: '0 0 15px rgba(199, 154, 74, 0.5), 0 0 25px rgba(199, 154, 74, 0.3)',
                zIndex: 3
              }}></div>
              
              <div style={{ flex: '1', paddingLeft: '50px' }}>
                <div className="timeline-card" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)',
                  padding: '35px 20px',
                  borderRadius: '16px',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3), 0 5px 15px rgba(199, 154, 74, 0.15)',
                  border: '1px solid rgba(199, 154, 74, 0.3)',
                  maxWidth: '350px',
                  position: 'relative',
                  transform: 'translateX(0)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  backdropFilter: 'blur(10px)'
                }}>
                  
                  
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f5f5f5', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
                    Negotiation & Closure
                  </h3>
                  <p style={{ fontSize: '14px', color: '#b8b3a8', lineHeight: '1.5', margin: 0 }}>
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
                  background: 'linear-gradient(135deg, rgba(199, 154, 74, 0.1), rgba(199, 154, 74, 0.05))',
                  padding: '35px 20px',
                  borderRadius: '16px',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(199, 154, 74, 0.4)',
                  maxWidth: '350px',
                  position: 'relative',
                  transform: 'scale(1.02)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
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
                border: '3px solid #1a1a1a',
                boxShadow: '0 0 20px rgba(199, 154, 74, 0.6), 0 0 30px rgba(199, 154, 74, 0.4)',
                zIndex: 3,
                animation: 'pulse 2s ease-in-out infinite'
              }}></div>
              
              <div style={{ flex: '1', paddingLeft: '50px' }}>
                <div style={{
                  width: '350px',
                  height: '180px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
                  border: '2px solid rgba(199, 154, 74, 0.4)',
                  margin: '0 auto',
                  position: 'relative',
                  background: 'linear-gradient(135deg, rgba(199, 154, 74, 0.1), rgba(199, 154, 74, 0.05))'
                }}>
                  <img 
                    src="/5.jpg" 
                    alt="Property Handover & Keys"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(1.05) contrast(1.05) saturate(1.1)'
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
                background: 'linear-gradient(135deg, #c79a4a 0%, #d4af6a 100%)',
                borderRadius: '16px',
                boxShadow: '0 20px 40px rgba(199, 154, 74, 0.4), 0 10px 25px rgba(199, 154, 74, 0.3)',
                border: '2px solid rgba(255, 255, 255, 0.25)',
                boxShadow: '0 20px 40px rgba(199, 154, 74, 0.4), 0 10px 25px rgba(199, 154, 74, 0.3), 0 0 30px rgba(199, 154, 74, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'black', marginBottom: '8px' }}>Effortless</h3>
                <p style={{ fontSize: '16px', color: 'white', margin: 0 }}>Your journey is seamless</p>
              </div>
              <div style={{
                padding: '30px',
                background: 'linear-gradient(135deg, #c79a4a 0%, #d4af6a 100%)',
                borderRadius: '16px',
                boxShadow: '0 20px 40px rgba(199, 154, 74, 0.4), 0 10px 25px rgba(199, 154, 74, 0.3)',
                border: '2px solid rgba(255, 255, 255, 0.25)',
                boxShadow: '0 20px 40px rgba(199, 154, 74, 0.4), 0 10px 25px rgba(199, 154, 74, 0.3), 0 0 30px rgba(199, 154, 74, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'black', marginBottom: '8px' }}>Exceptional</h3>
                <p style={{ fontSize: '16px', color: 'white', margin: 0 }}>The destination is extraordinary</p>
              </div>
            </div>
            
            <p style={{ fontSize: '18px', color: '#f5f5f5', fontStyle: 'italic', fontWeight: 500, fontFamily: "'Playfair Display', serif" }}>
              "Crafted for Comfort, Precision & Peace of Mind"
            </p>
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
                <img src="/apartment.jpg" alt="Montecito coastline" />
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
      <section id="projects" style={{ padding: '80px 24px', background: 'linear-gradient(135deg, rgba(199, 154, 74, 0.05) 0%, rgba(199, 154, 74, 0.02) 100%)' }}>

<div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
<h2 className="about-hero-title" style={{ textAlign: 'center' }}>Featured Premium Properties</h2>
  <h4 className="office-subheading">
Invest with confidence. Live with pride.
</h4>

{/* Ultra-Luxury Vineyard Estate Hero Section */}
  <div style={{ 
    position: 'relative', 
    borderRadius: '20px',
    marginTop: '37px', 
    overflow: 'hidden',
    boxShadow: '0 25px 80px rgba(0,0,0,0.15), 0 10px 30px rgba(0,0,0,0.1)',
    aspectRatio: '16/9',
    minHeight: '600px',
    background: '#1a1a1a'
  }}>
    {/* Hero Image with Cinematic Overlay */}
    <div style={{
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url("/avinea.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'brightness(1.02) contrast(1.05) saturate(1.1)'
    }} />
    
    {/* Premium Gradient Overlays - Golden Hour Effect */}
    <div style={{
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.4) 0%, transparent 50%, rgba(199, 154, 74, 0.15) 100%)'
    }} />
    <div style={{
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(26, 26, 26, 0.85) 0%, rgba(26, 26, 26, 0.4) 35%, transparent 60%)'
    }} />
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '200px',
      background: 'linear-gradient(to bottom, rgba(26, 26, 26, 0.3) 0%, transparent 100%)'
    }} />
    
    {/* Subtle Warm Light Accent */}
    <div style={{
      position: 'absolute',
      top: '20%',
      right: '-10%',
      width: '400px',
      height: '400px',
      background: 'radial-gradient(circle, rgba(212, 175, 106, 0.12) 0%, transparent 70%)',
      pointerEvents: 'none'
    }} />










    {/* Content Container with Ample Negative Space */}
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '0px 0 0px 0',
      color: 'white'
    }}>

      {/* Top Badge */}
      <div style={{
        position: 'absolute',
        top: '100px',
        left: '60px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div className="exclusive-collection" style={{
          width: '40px',
          height: '2px',
          background: 'linear-gradient(90deg, #c79a4a, #d4af6a)'
        }} />
        <span className="exclusive-collection" style={{
          fontSize: '11px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          color: 'rgba(255, 255, 255, 0.7)'
        }}>
          Exclusive Collection
        </span>
      </div>



      {/* Main Content Area */}
      <div style={{ 
        maxWidth: '800px',
        margin: '0 0 60px 60px',
        textAlign: 'left'
      }}>
        {/* Category Tag */}
        <div className="exclusive-collection1" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '20px',
          padding: '8px 16px',
          background: 'rgba(199, 154, 74, 0.15)',
          backdropFilter: 'blur(10px)',
          borderRadius: '50px',
          border: '1px solid rgba(199, 154, 74, 0.3)'
        }}>
          <div   style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#d4af6a',
            boxShadow: '0 0 10px rgba(212, 175, 106, 0.5)'
          }} />
          <span  style={{
            fontSize: '12px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#d4af6a'
          }}>
            Featured Estate
          </span>
        </div>

        {/* Title */}
        <h3 className="exclusive-collection2" style={{
          fontSize: 'clamp(36px, 5vw, 52px)',
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: '16px',
          fontFamily: "'Playfair Display', serif",
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          textShadow: '0 2px 20px rgba(0,0,0,0.3)',
        }}>
          Avinea Estate
        </h3>

        {/* Subtitle */}
        <p className="exclusive-collection3" style={{
          fontSize: '18px',
          color: 'rgba(255, 255, 255, 0.85)',
          marginBottom: '12px',
          fontWeight: 500,
          letterSpacing: '0.01em'
        }}>
          Modern Luxury Living with Premium Amenities
        </p>

        {/* Description */}
        <p className="exclusive-collection4" style={{
          fontSize: '15px',
          color: '#ffffff',
          marginBottom: '32px',
          lineHeight: 1.7,
          maxWidth: '500px'
        }}>
          Experience contemporary architecture with thoughtful design, expansive layouts, and world-class amenities in an exclusive gated community.
        </p>

        {/* CTA Buttons */}
        <div className="exclusive-collection5" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <a 
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              background: 'linear-gradient(135deg, #c79a4a 0%, #d4af6a 100%)',
              border: 'none',
              color: 'white',
              padding: '16px 36px',
              borderRadius: '4px',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 8px 25px rgba(199, 154, 74, 0.35)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(199, 154, 74, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(199, 154, 74, 0.35)';
            }}
          >
            Explore Estate

            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
            style={{ 
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '4px',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}
          >
            Schedule Visit
          </a>
        </div>
      </div>


      {/* Bottom Stats Bar */}
      <div className="hero-stats2" style={{
        position: 'absolute',
        bottom: '60px',
        right: '60px',
        display: 'flex',
        gap: '40px',
        alignItems: 'center'
      }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '28px', fontWeight: 700, color: '#d4af6a', margin: 0, fontFamily: "'Playfair Display', serif" }}>50+</p>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>Units</p>
        </div>
        <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.15)' }} />
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '28px', fontWeight: 700, color: '#d4af6a', margin: 0, fontFamily: "'Playfair Display', serif" }}>2-5</p>
          <p className="hero-stats2" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>BHK</p>
        </div>
        <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.15)' }} />
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '28px', fontWeight: 700, color: '#d4af6a', margin: 0, fontFamily: "'Playfair Display', serif" }}>2028</p>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>Ready</p>
        </div>
      </div>
    </div>
  </div>
</div>
</section>


      <section style={{ padding: '30px 24px', background: '', position: 'relative', overflow: 'hidden' }}>
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
          <h2 className="about-hero-title" style={{ textAlign: 'center' }}>Client Impressions </h2>
          <h4 className="office-subheading">
          Real Words. Refined Experiences.
  </h4>
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
              padding: '22px 18px', 
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
                fontSize: '18px', 
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
                }}>VP</div>
                <div>
                  <p style={{ fontSize: '14px', color: '#1a1a1a', fontWeight: 600, margin: '0 0 4px 0' }}>Venkat Prasad V</p>
                  <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>Premium Property Owner</p>
                </div>
              </div>
            </div>
            
            {/* Second Testimonial - Right Side (Smaller, Offset) */}
            <div style={{ 
              padding: '20px 16px', 
              background: 'white', 
              borderRadius: '16px', 
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              border: '1px solid rgba(199, 154, 74, 0.1)',
              position: 'relative',
              transform: 'translateY(30px)',
              zIndex: 2,
              marginTop: '-10px'
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
                fontSize: '18px', 
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
                }}>PM</div>
                <div>
                  <p style={{ fontSize: '14px', color: '#1a1a1a', fontWeight: 600, margin: '0 0 4px 0' }}>Prathamesh Mhatre</p>
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
              <p style={{ fontSize: '18px', color: '#666', margin: 0, fontStyle: 'italic' }} >
                Trusted by discerning clients across Pune & Hyderabad
              </p>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c79a4a' }}></div>
            </div>
          </div>
        </div>
      </section>



      {/* Luxury Connect With Us Section */}
      <section 
        id="contact" 
        ref={contactSectionRef}
        className="luxury-connect-section"
        style={{
          position: 'relative',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url("/contact.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          overflow: 'hidden'
        }}
      >
        {/* Parallax Background Layer */}
        <div 
          className="parallax-bg"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("/villa1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        />

        {/* Dark Glassmorphism Overlay */}
        <div 
          className="glassmorphism-overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(15, 15, 15, 0.4)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        />

        {/* Soft Vignette Edges */}
        <div 
          className="vignette-overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.3) 100%)',
            pointerEvents: 'none'
          }}
        />


        {/* Content Container */}
        <div 
          className="connect-content"
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '900px',
            width: '100%',
            padding: '80px 24px',
            textAlign: 'center',
            opacity: contactSectionInView ? 1 : 0,
            transform: contactSectionInView ? 'translateY(0)' : 'translateY(50px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* Primary Heading */}
          <h1 
            className="connect-heading"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 300,
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              margin: '0 0 32px 0',
              fontFamily: "'Inter', 'Neue Haas Grotesk', 'Helvetica Neue', sans-serif",
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)',
              lineHeight: 1.1
            }}
          >
            CONNECT WITH US
          </h1>

          {/* Subheading */}
          <p 
            className="connect-subheading"
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              color: 'rgba(255, 255, 255, 0.88)',
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              margin: '0 0 64px 0',
              fontWeight: 400,
              textShadow: '0 1px 10px rgba(0, 0, 0, 0.3)',
              lineHeight: 1.4
            }}
          >
            Let's Discover Your Next Address of Prestige.
          </p>

         


          {/* Premium CTAs */}
          <div 
            className="premium-ctas"
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >

            {/* Primary CTA - Book a Private Consultation */}
            <button
              className="primary-cta"
              onClick={() => setIsModalOpen(true)}
              style={{
                background: 'transparent',
                border: '2px solid #C79A4A',
                color: '#ffffff',
                padding: '18px 32px',
                fontSize: '0.9rem',
                fontWeight: 300,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden',
                minWidth: '280px',
                flex: '1',
                maxWidth: '320px',
                fontFamily: "'Inter', 'Neue Haas Grotesk', 'Helvetica Neue', sans-serif",
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(199, 154, 74, 0.4)';
                e.currentTarget.style.borderColor = '#D4AF6A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#C79A4A';
              }}
            >
              <span style={{ position: 'relative', zIndex: 2 }}>Book a Private Consultation</span>
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(199, 154, 74, 0.1), transparent)',
                  transition: 'left 0.6s ease'
                }}
                className="cta-shine"
              />
            </button>

            {/* Secondary CTA - Schedule a Site Experience */}
            <button
              className="secondary-cta"
              onClick={() => setIsModalOpen(true)}
              style={{
                background: 'transparent',
                border: '2px solid #C79A4A',
                color: '#ffffff',
                padding: '18px 32px',
                fontSize: '0.9rem',
                fontWeight: 300,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden',
                minWidth: '280px',
                flex: '1',
                maxWidth: '320px',
                fontFamily: "'Inter', 'Neue Haas Grotesk', 'Helvetica Neue', sans-serif",
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(199, 154, 74, 0.4)';
                e.currentTarget.style.borderColor = '#D4AF6A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#C79A4A';
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
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '80px',
            height: '80px',
            background: 'radial-gradient(circle, rgba(199, 154, 74, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite',
            zIndex: 1
          }}
        />
        <div 
          className="floating-element"
          style={{
            position: 'absolute',
            bottom: '25%',
            right: '15%',
            width: '60px',
            height: '60px',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 8s ease-in-out infinite reverse',
            zIndex: 1
          }}
        />
      </section>


      <footer className="footer" style={{ background: '#111111', color: '#F2C66E', padding: '80px 24px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '48px', 
            marginBottom: '60px',
            ...(isMobile && {
              gridTemplateColumns: '1fr',
              gap: '32px',
              textAlign: 'left'
            })
          }}>

            <div style={{ textAlign: isMobile ? 'left' : 'center' }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, color: '#c79a4a', margin: '0 0 20px 0' }}>
                SpaceSphere
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#b8b3a8', margin: '0 0 16px 0' }}>
                Where Luxury Meets Location. Where Investments Become Legacies.
              </p>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#8a857a', margin: '0 0 24px 0', fontStyle: 'italic' }}>
                Your Trusted Partner for Smart Real Estate Choices.
              </p>

              <div style={{ 
                display: 'flex', 
                gap: '12px',
                justifyContent: isMobile ? 'flex-start' : 'center'
              }}>
                <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(199, 154, 74, 0.1)', border: '1px solid rgba(199, 154, 74, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c79a4a', transition: 'all 0.3s ease' }}>
                  <svg width="38" height="38" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(199, 154, 74, 0.1)', border: '1px solid rgba(199, 154, 74, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c79a4a', transition: 'all 0.3s ease' }}>
                  <svg width="38" height="38" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(199, 154, 74, 0.1)', border: '1px solid rgba(199, 154, 74, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c79a4a', transition: 'all 0.3s ease' }}>
                  <svg width="38" height="38" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319.937 20.651.525 19.86.22c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.07-1.649-.07-4.844 0-3.18.015-3.586.07-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
                <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(199, 154, 74, 0.1)', border: '1px solid rgba(199, 154, 74, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c79a4a', transition: 'all 0.3s ease' }}>
                  <svg width="38" height="38" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>


            <div style={{ textAlign: isMobile ? 'left' : 'center' }}>
              <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#F2C66E', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Quick Links
              </h4>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0, 
                display: 'grid', 
                gap: '12px',
                textAlign: isMobile ? 'left' : 'center'
              }}>
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


            <div style={{ textAlign: isMobile ? 'left' : 'center' }}>
              <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#F2C66E', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Projects
              </h4>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0, 
                display: 'grid', 
                gap: '12px',
                textAlign: isMobile ? 'left' : 'center'
              }}>
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


            <div style={{ textAlign: isMobile ? 'left' : 'center' }}>
  
              <h4 className="office-subheading" style={{ fontSize: '18px', fontWeight: 600, color: '#F2C66E', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
    Contact Info
  </h4>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0, 
                display: 'grid', 
                gap: '16px',
                textAlign: isMobile ? 'left' : 'center'
              }}>
                <li style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                  <svg width="18" height="18" fill="#c79a4a" viewBox="0 0 24 24" style={{ marginTop: '2px', flexShrink: 0 }}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>

                  <div style={{ textAlign: isMobile ? 'left' : 'center' }}>
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


          <div style={{ 
            borderTop: '1px solid rgba(199, 154, 74, 0.2)', 
            paddingTop: '40px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px', 
            alignItems: isMobile ? 'flex-start' : 'center', 
            textAlign: isMobile ? 'left' : 'center' 
          }}>
            <p style={{ color: '#8a857a', fontSize: '14px', margin: 0 }}>
              © {new Date().getFullYear()} SpaceSphere Realty. All rights reserved.
            </p>

            <div
  style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    justifyContent: isMobile ? 'flex-start' : 'center',
    textAlign: isMobile ? 'left' : 'center',
    width: '100%'
  }}
>
  <a
    href="#"
    style={{
      color: '#8a857a',
      textDecoration: 'none',
      fontSize: '13px',
      transition: 'color 0.3s ease'
    }}
  >
    Privacy Policy
  </a>

  <span style={{ color: '#8a857a' }}>|</span>

  <a
    href="#"
    style={{
      color: '#8a857a',
      textDecoration: 'none',
      fontSize: '13px',
      transition: 'color 0.3s ease'
    }}
  >
    Terms & Conditions
  </a>

  <span style={{ color: '#8a857a' }}>|</span>

  <a
    href="#"
    style={{
      color: '#8a857a',
      textDecoration: 'none',
      fontSize: '13px',
      transition: 'color 0.3s ease'
    }}
  >
    Disclaimer
  </a>
</div>

          </div>
        </div>
      </footer>

    </main>
  );
}
