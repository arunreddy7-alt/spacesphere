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
  "/GalleryDown.jpg",
  "/aprtment.jpg",
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
  const [nextSlide, setNextSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentSlideRef = useRef(0);
  const nextSlideRef = useRef(1);
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
  const [modalType, setModalType] = useState('consultation'); // 'consultation' or 'schedule'
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [timelineScrollProgress, setTimelineScrollProgress] = useState(0);
  const timelineSectionRef = useRef(null);

  // Contact section animation states
  const [contactSectionInView, setContactSectionInView] = useState(false);
  const contactSectionRef = useRef(null);

  // Generate dynamic date options starting from tomorrow
  const getDateOptions = () => {
    const options = [];
    const today = new Date();
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dateStr = date.toISOString().split('T')[0];
      const dayName = dayNames[date.getDay()];
      const monthName = monthNames[date.getMonth()];
      const dayNum = date.getDate();

      let label;
      if (i === 1) {
        label = "Tomorrow";
      } else {
        label = `${monthName} ${dayNum}, ${dayName}`;
      }
      options.push({ value: dateStr, label });
    }
    return options;
  };

  const dateOptions = getDateOptions();

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

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
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

  // Hero slideshow - cross-fade transition
  useEffect(() => {
    const FADE_DURATION = 2800; // must match CSS transition
    const SLIDE_INTERVAL = 3000; // always greater than fade duration
  
    const advanceSlide = () => {
      setIsTransitioning(true);
  
      setTimeout(() => {
        const newCurrent = nextSlideRef.current;
        const newNext = (newCurrent + 1) % heroImages.length;
  
        setCurrentSlide(newCurrent);
        setNextSlide(newNext);
  
        currentSlideRef.current = newCurrent;
        nextSlideRef.current = newNext;
  
        setIsTransitioning(false);
      }, FADE_DURATION);
    };
  
    const intervalId = setInterval(advanceSlide, SLIDE_INTERVAL);
    return () => clearInterval(intervalId);
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
      setIsScrolled(scrollPosition > 200);
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

  // Auto-open inquiry modal after 5 seconds on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInquiryModalOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-white text-foreground">
      {/* Sticky Navbar that appears on scroll */}



      <header 
  className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-5 transition-all duration-300 ${
    isScrolled
      ? 'translate-y-0 opacity-100 backdrop-blur-md shadow-lg'
      : 'translate-y-0 opacity-100 md:-translate-y-full md:opacity-0'
  }`}
  style={{
    background: isScrolled ? 'rgba(245, 245, 240, 0.95)' : 'transparent',
  }}
>


<div
  id="mobile-brand"
  className={`flex items-center gap-2 ml-3 md:ml-10 ${isScrolled ? 'visible' : ''}`}
>
<img
  src="/logo2.png"
  alt="Space Sphere Logo"
  className="md:block object-contain transition-all duration-300"
  style={{
    maxHeight: '60px',
    maxWidth: '180px',
    width: 'auto',
    filter: isMobile ?  'none':'brightness(0) saturate(100%)' ,
    transform: isMobile ?  'scale(1.4) translateY(5px) translateX(-3px)':'scale(1.8) translateY(2px) translateX(10px)',   // combine both
    transformOrigin: 'center left',
    transition: 'transform 0.3s ease, filter 0.3s ease',
  }}
/>





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
          style={{ color: isScrolled ? '#1a1a1a' : '#f0ede6', marginLeft: 'auto', marginRight: '11px' }}
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
        {/* Current slide layer - always visible */}
        <div
          className="hero-fade-layer hero-fade-current"
          style={{
            ["--hero-url"]: `url("${heroImages[currentSlide]}")`,
          }}
        />
        
        {/* Next slide layer - fades in over current */}
        <div
          className={`hero-fade-layer hero-fade-next ${isTransitioning ? 'hero-fade-active' : ''}`}
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
    height: '140px',
    maxWidth: '220px',
    width: 'auto',
    transform: 'translateY(-35px)',   // moves image up slightly
    transition: 'height 0.3s ease, max-width 0.3s ease, transform 0.3s ease',
  }} 
/>

              </div>

              <nav
  className="hero-nav"
  style={{
    transform: "translateY(-35px)",   // move a little up
    transition: "transform 0.3s ease"
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
    transform: "translateY(-35px)",   // same upward shift
    transition: "transform 0.3s ease"
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
        fontStyle: "italic",
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
    transform:isMobile ? "translateX(56px)" : "translateY(15px)",
    borderLeft: isMobile ? "2px solid #F5C36A" : "3px solid #F5C36A",
  }}
>
  <p
    style={{
      margin: 0,
      marginLeft: isMobile ? "-58px" : "0px",   // stronger pull
      fontSize: isMobile ? "1.05rem" : "1.4rem",
      fontWeight: 500,
      color: "#ffffff",
      fontStyle: "italic",
      letterSpacing: "0.04em",
    }}
  >
    Discover{" "}
    <span style={{ color: "#F5C36A", fontWeight: 600, fontStyle: "italic" }}>
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
      marginLeft: isMobile ? "-58px" : "0px",   // same pull here
      fontSize: isMobile ? "1.05rem" : "1.4rem",
      fontWeight: 500,
      color: "#ffffff",
      fontStyle: "italic",
      letterSpacing: "0.04em",
    }}
  >
    Expand{" "}
    <span style={{ color: "#F5C36A", fontWeight: 600, fontStyle: "italic" }}>
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
      transition: "transform 0.25s ease, box-shadow 0.25s ease",
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
              Space Sphere is a trusted partner in Indian real estate, bringing together expert advisory, premium property sourcing, and a seamless ownership experience. With elite partnerships across premium developers in Pune, Hyderabad, and surrounding regions, we offer access to refined spaces for those who desire more.
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

<span
    style={{
      fontSize: isMobile ? "16px" : "19px",   // smaller on mobile
      lineHeight: "1.4",
    }}
  >
    Design & Architecture Value
  </span>
  </li>

  <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

  <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
  stroke="#b67e5b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="2"/>
  <path d="M3 9h18M9 3v18"/>
  <circle cx="15" cy="15" r="2"/>
</svg>


    <span style={{
      fontSize: isMobile ? "15px" : "19px",   // smaller on mobile
      lineHeight: "1.4",
    }}
  >Location Edge & Appreciation</span>
  </li>

  <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

  <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
  stroke="#b67e5b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
  <rect x="4" y="3" width="14" height="18" rx="2"/>
  <path d="M8 7h6M8 11h6"/>
  <circle cx="18" cy="16" r="2"/>
  <path d="M20 16h2"/>
</svg>


    <span style={{
      fontSize: isMobile ? "15px" : "19px",   // smaller on mobile
      lineHeight: "1.4",
    }}
  >Builder Credibility & Delivery    </span>
  </li>

  <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

  <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
  stroke="#b67e5b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
  <rect x="5" y="4" width="5" height="17"/>
  <rect x="14" y="2" width="5" height="19"/>
  <path d="M7.5 8h0M7.5 11h0M7.5 14h0"/>
  <path d="M16.5 6h0M16.5 9h0M16.5 12h0M16.5 15h0"/>
</svg>


    <span style={{
      fontSize: isMobile ? "15px" : "19px",   // smaller on mobile
      lineHeight: "1.4",
    }}
  >Luxury Lifestyle Amenities     </span>
  </li>
</ul>

              </div>
              <button
                className="about-button"
                onClick={() => {
                  setIsInquiryModalOpen(true);
                }}
              >
                Get in touch 
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
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(5, minmax(240px, 1fr))',
            gridTemplateAreas: isMobile ? '"card1" "card2" "card3" "card4" "card5"' : `
              "card1 . card2 . card3"
              ". card4 . card5 ."
            `,
            gap: isMobile ? '20px' : '28px',
            justifyContent: isMobile ? 'stretch' : 'center',
            justifyItems: isMobile ? 'stretch' : 'center',
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
{/* CARD 1 */}
<div
  
  style={{
    gridArea: "card1",
    background: "linear-gradient(135deg, #ffffff 0%, #faf7f1 100%)",
    padding: isMobile ? "20px 18px" : "24px 22px",
    borderRadius: "18px",
    boxShadow: "0 14px 40px rgba(0,0,0,0.08)",
    border: "1px solid rgba(199,154,74,0.25)",
    position: "relative",
    width: "100%",
    maxWidth: isMobile ? "100%" : "450px",
    height: "auto",
    overflow: "visible",
    zIndex: 3,
    marginBottom: isMobile ? "22px" : "18px" 
  }}
>
  {/* Icon */}
  <div
    style={{
      position: "absolute",
      top: isMobile ? "-16px" : "-10px",
      left: "20px",
      width: isMobile ? "34px" : "38px",
      height: isMobile ? "34px" : "38px",
      background: "linear-gradient(135deg,#c79a4a,#d4af6a)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 5px 15px rgba(199,154,74,0.4)",
      zIndex: 20
    }}
  >
    <svg
      width={isMobile ? 18 : 20}
      height={isMobile ? 18 : 20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  </div>

  {/* Content */}
  <div
    style={{
      marginTop: isMobile ? "42px" : "20px"
    }}
  >
    <h3
      style={{
        fontSize: isMobile ? "20px" : "18px",
        fontWeight: 700,
        color: "#1a1a1a",
        marginTop: isMobile ? "-19px" : "28px",
        marginBottom: isMobile ? "20px" : "16px",
        fontFamily: "'Playfair Display', serif",
        lineHeight: "0.3"
      }}
    >
      Personalized Curation
    </h3>

    <p
      style={{
        fontSize: isMobile ? "17px" : "16px",
        color: "#4a4a4a",
        margin: 0,
        lineHeight: isMobile ? "1.6" : "1.5"
      }}
    >
      Tailored to taste & investment vision
    </p>
  </div>
</div>


{/* CARD 2 */}
<div style={{
  gridArea: "card2",
  background: "linear-gradient(135deg, #ffffff 0%, #faf7f1 100%)",
  padding: isMobile ? "20px 18px" : "24px 22px",
  borderRadius: "18px",
  boxShadow: "0 14px 40px rgba(0,0,0,0.08)",
  border: "1px solid rgba(199,154,74,0.25)",
  position: "relative",
  width: "100%",
  maxWidth: isMobile ? "100%" : "450px",
  height: "auto",
  overflow: "visible",
  zIndex: 3,
  marginBottom: isMobile ? "22px" : "18px" 
}}>
  <div style={{
    position: "absolute",
    top: isMobile ? "-16px" : "-10px",
    left: "20px",
    width: isMobile ? "34px" : "38px",
    height: isMobile ? "34px" : "38px",
    background: "linear-gradient(135deg,#c79a4a,#d4af6a)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 5px 15px rgba(199,154,74,0.4)",
    zIndex: 20
  }}>
    <svg width={isMobile ? 18 : 20} height={isMobile ? 18 : 20} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  </div>

  <div style={{ marginTop: isMobile ? "42px" : "20px" }}>
    <h3 style={{
      fontSize: isMobile ? "20px" : "18px",
      fontWeight: 700,
      color: "#1a1a1a",
      marginTop: isMobile ? "-19px" : "28px",
      marginBottom: isMobile ? "20px" : "16px",
      fontFamily: "'Playfair Display', serif",
      lineHeight: "0.3"
    }}>
      Elite Developer Network
    </h3>
    <p style={{
      fontSize: isMobile ? "17px" : "16px",
      color: "#4a4a4a",
      margin: 0,
      lineHeight: isMobile ? "1.6" : "1.5"
    }}>
      Access to elite developers across Pune & Hyderabad
    </p>
  </div>
</div>


{/* CARD 3 */}
<div
  style={{
    gridArea: "card3",
    background: "linear-gradient(135deg, #ffffff 0%, #faf7f1 100%)",
    padding: isMobile ? "20px 18px" : "24px 22px",
    borderRadius: "18px",
    boxShadow: "0 14px 40px rgba(0,0,0,0.08)",
    border: "1px solid rgba(199,154,74,0.25)",
    position: "relative",
    width: "100%",
    maxWidth: isMobile ? "100%" : "450px",
    height: "auto",
    overflow: "visible",
    zIndex: 3,
    marginBottom: isMobile ? "22px" : "18px" 
  }}
>
  <div
    style={{
      position: "absolute",
      top: isMobile ? "-16px" : "-10px",
      left: "20px",
      width: isMobile ? "34px" : "38px",
      height: isMobile ? "34px" : "38px",
      background: "linear-gradient(135deg,#c79a4a,#d4af6a)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 5px 15px rgba(199,154,74,0.4)",
      zIndex: 20
    }}
  >
    <svg
      width={isMobile ? 18 : 20}
      height={isMobile ? 18 : 20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  </div>

  <div style={{ marginTop: isMobile ? "42px" : "20px" }}>
    <h3
      style={{
        fontSize: isMobile ? "20px" : "18px",
        fontWeight: 700,
        color: "#1a1a1a",
        marginTop: isMobile ? "-29px" : "28px",
        marginBottom: isMobile ? "15px" : "16px",
        fontFamily: "'Playfair Display', serif",
        lineHeight: "1.1"
      }}
    >
      Complete Transparency
    </h3>

    <p
      style={{
        fontSize: isMobile ? "17px" : "16px",
        color: "#4a4a4a",
        margin: 0,
        lineHeight: isMobile ? "1.6" : "1.5"
      }}
    >
      No grey lines, no inflated numbers
    </p>
  </div>
</div>



{/* CARD 4 */}
<div
  style={{
    gridArea: "card4",
    background: "linear-gradient(135deg, #ffffff 0%, #faf7f1 100%)",
    padding: isMobile ? "20px 18px" : "24px 22px",
    borderRadius: "18px",
    boxShadow: "0 14px 40px rgba(0,0,0,0.08)",
    border: "1px solid rgba(199,154,74,0.25)",
    position: "relative",
    width: "100%",
    maxWidth: isMobile ? "100%" : "450px",
    height: "auto",
    overflow: "visible",
    zIndex: 3,
    marginBottom: isMobile ? "22px" : "18px" 
  }}
>
  <div
    style={{
      position: "absolute",
      top: isMobile ? "-16px" : "-10px",
      left: "20px",
      width: isMobile ? "34px" : "38px",
      height: isMobile ? "34px" : "38px",
      background: "linear-gradient(135deg,#c79a4a,#d4af6a)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 5px 15px rgba(199,154,74,0.4)",
      zIndex: 20
    }}
  >
    <svg
      width={isMobile ? 18 : 20}
      height={isMobile ? 18 : 20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  </div>

  <div style={{ marginTop: isMobile ? "42px" : "20px" }}>
    <h3
      style={{
        fontSize: isMobile ? "20px" : "18px",
        fontWeight: 700,
        color: "#1a1a1a",
        marginTop: isMobile ? "-27px" : "28px",
        marginBottom: isMobile ? "17px" : "16px",
        fontFamily: "'Playfair Display', serif",
        lineHeight: "1.1"
      }}
    >
      End-to-End Support
    </h3>

    <p
      style={{
        fontSize: isMobile ? "17px" : "16px",
        color: "#4a4a4a",
        margin: 0,
        lineHeight: isMobile ? "1.6" : "1.5"
      }}
    >
      Till the moment you hold your keys
    </p>
  </div>
</div>



{/* CENTRAL CARD */}
<div
  style={{
    gridArea: "card5",
    background: "linear-gradient(135deg, #ffffff 0%, #faf7f1 100%)",
    padding: isMobile ? "22px 18px" : "28px 22px",
    borderRadius: "18px",
    boxShadow: "0 14px 40px rgba(0,0,0,0.08)",
    border: "1px solid rgba(199,154,74,0.25)",
    position: "relative",
    width: "100%",
    maxWidth: isMobile ? "100%" : "480px",
    height: "auto",
    overflow: "visible",
    zIndex: 4
  }}
>
  <div
    style={{
      position: "absolute",
      top: isMobile ? "-18px" : "-12px",
      left: "20px",
      width: isMobile ? "36px" : "40px",
      height: isMobile ? "36px" : "40px",
      background: "linear-gradient(135deg,#c79a4a,#d4af6a)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 6px 18px rgba(199,154,74,0.45)",
      zIndex: 30
    }}
  >
    <svg
      width={isMobile ? 20 : 22}
      height={isMobile ? 20 : 22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  </div>

  <div style={{ marginTop: isMobile ? "46px" : "24px" }}>
    <h3
      style={{
        fontSize: isMobile ? "22px" : "20px",
        fontWeight: 700,
        color: "#1a1a1a",
        marginTop: isMobile ? "-32px" : "22px",
        marginBottom: isMobile ? "18px" : "18px",
        fontFamily: "'Playfair Display', serif",
        lineHeight: "1.1"
      }}
    >
      Investment-Led Advisory
    </h3>

    <p
      style={{
        fontSize: isMobile ? "18px" : "17px",
        color: "#4a4a4a",
        margin: 0,
        lineHeight: isMobile ? "1.6" : "1.5"
      }}
    >
      Growth, rental yield & appreciation insights
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
              <p style={{ fontSize: '18px', color: '#1a1a1a', fontStyle: 'italic', fontWeight: 500, margin: 0, fontFamily: "'Playfair Display', serif" }}>
                "Luxury begins with clarity. We deliver both."
              </p>
            </div>
          </div>
        </div>
        </section>

      <section 
        style={{ 
          paddingTop: '80px',
          paddingRight: '80px',
          paddingBottom: '60px',
          paddingLeft: '80px',
          background: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95))', 
          minHeight: '30vh',
          backgroundImage: `url('/villa1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
          color: '#000000'
        }}
      >
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
      <h4
    style={{
      color: "white",
      fontSize: isMobile ? "clamp(120px, 38vw, 50px)" : "47px",
      marginTop: "26px",
      fontWeight: 600,
      textAlign: "center",
      lineHeight: "1",
      textShadow: "0 4px 30px rgba(0,0,0,0.6), 0 1px 0 rgba(0,0,0,0.3)",
      
      transition: "font-size 0.3s ease"
    }}
  >
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
                  
                  
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#f5f5f5', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
                    Discovery Consultation
                  </h3>
                  <p style={{ fontSize: '16px', color: '#b8b3a8', lineHeight: '1.5', margin: 0 }}>
                  Define requirements, expectations & aspirations                  </p>
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
                  
                  
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#f5f5f5', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
                    Curated Project Showcase
                  </h3>
                  <p style={{ fontSize: '16px', color: '#b8b3a8', lineHeight: '1.5', margin: 0 }}>
                  Only premium & value-aligned options                  </p>
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
                  
                  
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#f5f5f5', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
                    Guided Site Tours
                  </h3>
                  <p style={{ fontSize: '16px', color: '#b8b3a8', lineHeight: '1.5', margin: 0 }}>
                  Experience spaces before deciding                  </p>
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
                  
                  
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#f5f5f5', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
                    Negotiation & Closure
                  </h3>
                  <p style={{ fontSize: '16px', color: '#b8b3a8', lineHeight: '1.5', margin: 0 }}>
                  Transparent & confident pricing
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
                  
                  
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
                    Complete Assistance
                  </h3>
                  <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.5', margin: 0 }}>
                  We simplify everything                  </p>
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
                <p style={{ fontSize: '20px', color: 'white', margin: 0 }}>Your journey is seamless</p>
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
                <p style={{ fontSize: '20px', color: 'white', margin: 0 }}>The destination is extraordinary</p>
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
                <img src="/apartment1.png" alt="Montecito coastline" />
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
                <img src="/plot1.png" alt="Santa Ynez vineyards" />
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
        top: isMobile ? "70px" : "120px", 
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
          fontSize: '20px',
          color: 'rgba(255, 255, 255, 0.85)',
          marginBottom: '12px',
          fontWeight: 500,
          letterSpacing: '0.01em'
        }}>
          Modern Luxury Living with Premium Amenities
        </p>

        {/* Description */}
        <p className="exclusive-collection4" style={{
          fontSize: '17px',
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
            href="https://avinea.vercel.app/"
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
          <p style={{ fontSize: '28px', fontWeight: 700, color: '#d4af6a', margin: 0, fontFamily: "'Playfair Display', serif" }}>1100+</p>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>Units</p>
        </div>
        <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.15)' }} />
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '28px', fontWeight: 700, color: '#d4af6a', margin: 0, fontFamily: "'Playfair Display', serif" }}>2-6</p>
          <p className="hero-stats2" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>BHK</p>
        </div>
        <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.15)' }} />
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '28px', fontWeight: 700, color: '#d4af6a', margin: 0, fontFamily: "'Playfair Display', serif" }}>2028</p>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>Onwards</p>
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
                  <p style={{ fontSize: '17px', color: '#1a1a1a', fontWeight: 600, margin: '0 0 4px 0' }}>Venkat Prasad V</p>
                  <p style={{ fontSize: '15px', color: '#666', margin: 0 }}>Premium Property Owner</p>
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
                  <p style={{ fontSize: '17px', color: '#1a1a1a', fontWeight: 600, margin: '0 0 4px 0' }}>Prathamesh Mhatre</p>
                  <p style={{ fontSize: '15px', color: '#666', margin: 0 }}>Investment Partner</p>
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
          {/* Schedule a Consultation Heading */}
          <h1 
            className="consultation-heading"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#F2C66E',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              margin: '0 0 24px 0',
              fontFamily: "'Playfair Display', serif",
              textShadow: '0 2px 15px rgba(0, 0, 0, 0.5)',
              lineHeight: 1.2
            }}
          >
            Schedule a Consultation
          </h1>

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
              onClick={() => {
                setIsInquiryModalOpen(true);
              }}
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
              onClick={() => {
                setIsInquiryModalOpen(true);
              }}
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
            <div style={{ marginTop: '0', marginRight: '0', marginBottom: '20px', marginLeft: '0' }}>
  <img 
  src="/logo2.png"
  alt="Space Sphere Logo"
  style={{ 
    height: isMobile ? '50px' : '120px',
    maxHeight: isMobile ? '90px' : '120px',
    maxWidth: isMobile ? '90px' : '180px',
    width: 'auto',
    display: 'block',

    /* Replace margin shorthand with individual values */
    marginTop: '0px',
    marginRight: isMobile ? 'auto' : '0px',
    marginBottom: isMobile ? '10px' : '20px',
    marginLeft: isMobile ? '-16px' : '90px',

    transition: 'all 0.3s ease'
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
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#8a857a', margin: '0 0 24px 0', fontStyle: 'italic', transform: "translateY(-15px)"}}>
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
              <h4 style={{ fontSize: '20px', fontWeight: 600, color: '#F2C66E', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
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
                  style={{ color: '#b8b3a8', textDecoration: 'none', fontSize: '17px', transition: 'color 0.3s ease', cursor: 'pointer' }}
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
                  style={{ color: '#b8b3a8', textDecoration: 'none', fontSize: '17px', transition: 'color 0.3s ease', cursor: 'pointer' }}
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
                  style={{ color: '#b8b3a8', textDecoration: 'none', fontSize: '17px', transition: 'color 0.3s ease', cursor: 'pointer' }}
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
                  style={{ color: '#b8b3a8', textDecoration: 'none', fontSize: '17px', transition: 'color 0.3s ease', cursor: 'pointer' }}
                >Contact Us</a></li>
              </ul>
            </div>


            <div style={{ textAlign: isMobile ? 'left' : 'center' }}>
              <h4 style={{ fontSize: '20px', fontWeight: 600, color: '#F2C66E', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
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
                  style={{ color: '#b8b3a8', textDecoration: 'none', fontSize: '17px', transition: 'color 0.3s ease', cursor: 'pointer' }}
                >Avinea by Vyom-Sigma</a></li>
              </ul>
            </div>


            <div style={{ textAlign: isMobile ? 'left' : 'center' }}>
  
              <h4 className="office-subheading" style={{ fontSize: '20px', fontWeight: 600, color: '#F2C66E', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
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
                  <svg width="18" height="18" fill="#c79a4a" viewBox="0 0 24 24" style={{ marginTop: '5px', flexShrink: 0 }}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>

                  <div style={{ textAlign: isMobile ? 'left' : 'left' }}>
                    <div style={{ color: '#b8b3a8', fontSize: '17px', lineHeight: '1.6', marginBottom: '8px' }}>
204 Sapphire Chambers, First Floor, Suite 1186, Baner Road, Baner, Pune 411045
                    </div>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="18" height="18" fill="#c79a4a" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <a href="tel:+919121772320" style={{ color: '#b8b3a8', textDecoration: 'none', fontSize: '17px' }}>+91 9121772320</a>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="18" height="18" fill="#c79a4a" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <a href="mailto:crm@spacesphere.in" style={{ color: '#b8b3a8', textDecoration: 'none', fontSize: '17px' }}>crm@spacesphere.in</a>
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
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
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
              maxHeight: '95vh',
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
                top: '8px',
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
              <input
                                                type="text"
                                                placeholder="Full Name"
                                                required
                                                className="w-full px-4 py-3 text-black bg-black/5 border border-black/10 focus:border-[#997B29] focus:outline-none placeholder:text-black/30 text-black rounded-lg transition-colors text-sm"
                                            />
                                            <input
                                                type="tel"
                                                placeholder="Phone Number"
                                                required
                                                className="w-full px-4 py-3 bg-black/5 border border-black/10 focus:border-[#997B29] focus:outline-none placeholder:text-black/30 text-black rounded-lg transition-colors text-sm"
                                            />
                                            <input
                                                type="tel"
                                                placeholder="WhatsApp Number"
                                                className="w-full px-4 py-3 bg-black/5 border border-black/10 focus:border-[#997B29] focus:outline-none placeholder:text-black/30 text-black rounded-lg transition-colors text-sm"
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                required
                                                className="w-full px-4 py-3 bg-black/5 border border-black/10 focus:border-[#997B29] focus:outline-none placeholder:text-black/30 text-black rounded-lg transition-colors text-sm"
                                            />
                                            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3">
                                                {/* Mobile: Dropdown Time */}
                                                <div className="relative block md:hidden">
                                                    <select
                                                        required
                                                        defaultValue=""
                                                        className="w-full px-2 py-2 bg-black/5 border border-black/10 focus:border-[#997B29] focus:outline-none text-black rounded-lg transition-colors text-sm appearance-none cursor-pointer"
                                                    >
                                                        <option value="" disabled className="bg-black text-black">Time</option>
                                                        <option value="09:00" className="bg-black text-black">09:00 AM</option>
                                                        <option value="10:00" className="bg-black text-black">10:00 AM</option>
                                                        <option value="11:00" className="bg-black text-black">11:00 AM</option>
                                                        <option value="12:00" className="bg-black text-black">12:00 PM</option>
                                                        <option value="14:00" className="bg-black text-black">02:00 PM</option>
                                                        <option value="15:00" className="bg-black text-black">03:00 PM</option>
                                                        <option value="16:00" className="bg-black text-black">04:00 PM</option>
                                                        <option value="17:00" className="bg-black text-black">05:00 PM</option>
                                                    </select>
                                                    <svg
  className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none"
  fill="none"
  stroke="black"
  viewBox="0 0 24 24"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M19 9l-7 7-7-7"
  />
</svg>
</div>
                                                {/* Mobile: Dropdown Date */}
                                                <div className="relative block md:hidden">
                                                    <select
                                                        required
                                                        defaultValue=""
                                                        className="w-full px-2 py-2 bg-black/5 border border-black/10 focus:border-[#997B29] focus:outline-none text-black rounded-lg transition-colors text-sm appearance-none cursor-pointer"
                                                    >
                                                        <option value="" disabled className="bg-black text-black">Date</option>
                                                        {dateOptions.map((opt) => (
                                                            <option key={opt.value} value={opt.value} className="bg-black text-black">
                                                                {opt.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <svg
  className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none"
  fill="none"
  stroke="black"
  viewBox="0 0 24 24"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M19 9l-7 7-7-7"
  />
</svg>

                                                </div>
                                                {/* Desktop: Native Time */}
                                                <div className="relative hidden md:block">
                                                <input
  type="time"
  required
  className="w-full px-2.5 py-2 bg-black/5 border border-black/10 focus:border-[#997B29] focus:outline-none text-black rounded-lg transition-colors text-sm"
/>
                                                </div>
                                                {/* Desktop: Native Date */}
                                                <div className="relative hidden md:block">
                                                <input
  type="date"
  required
  className="w-full px-2.5 py-2 bg-black/5 border border-black/10 focus:border-[#997B29] focus:outline-none text-black rounded-lg transition-colors text-sm"
/>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-black/5 border border-black/10 rounded-lg">
                                                <p className="text-xs font-bold uppercase tracking-widest text-black mb-3">Interests</p>
                                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                                {["2 BHK", "3 BHK", "4 BHK", "5 BHK", "6 BHK"].map((item, index) => (
  <label
    key={item}
    className="flex items-center gap-2 cursor-pointer group select-none"
  >
    <div className="relative w-4 h-4 border border-black/30 flex items-center justify-center transition-colors">
      <input
        type="checkbox"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        onChange={(e) => {
          const box = e.target.nextSibling;
          const check = box.nextSibling;
          if (e.target.checked) {
            box.style.opacity = "1";
            check.style.opacity = "1";
          } else {
            box.style.opacity = "0";
            check.style.opacity = "0";
          }
        }}
      />

      {/* Background fill */}
      <div
        
      />

      {/* Check icon */}
      <svg
        style={{
          position: "absolute",
          width: "12px",
          height: "12px",
          color: "black",
          opacity: 0,
          transition: "opacity 0.2s ease",
        }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeWidth="3" strokeLinecap="round" d="M5 12l5 5L20 7" />
      </svg>
    </div>

    <span className="text-sm text-black/70 truncate">{item}</span>
  </label>
))}

                                                  
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full py-3 md:py-4 bg-gradient-to-r from-[#997B29] via-[#FFF5B2] to-[#997B29] bg-[length:200%_auto] animate-flow text-black font-bold uppercase tracking-widest rounded-full transition-all duration-500 hover:scale-105 text-xs"
                                            >
                                                Submit
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
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <div
            className="inquiry-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: isMobile ? '3px' : '40px',
              maxWidth: isMobile ? '65vw' : '500px',
              width: '100%',
              maxHeight: '95vh',
              overflowY: 'auto',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              animation: 'slideUp 0.3s ease-out',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setIsInquiryModalOpen(false)}
              style={{
                position: 'absolute',
                top: isMobile ? "-1px" : "8px",
right: isMobile ? "1px" : "16px",

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
      
            <h2
  style={{
    fontSize: isMobile ? "20px" : "28px",
    fontWeight: 700,
    color: "#1a1a1a",
    marginBottom: "8px",
    fontFamily: "'Playfair Display', serif"
  }}
>
  Get In Touch
</h2>

<p
  style={{
    fontSize: "16px",
    color: "#666",
    marginBottom: isMobile ? "20px" : "35px",
    marginTop: isMobile ? "10px" : "0px"   // move down only on mobile
  }}
>
  Let us understand your requirements better. Please fill out the form below.
</p>

            
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission here
                alert('Thank you for your inquiry! Our team will contact you soon to schedule your private consultation.');
                setIsInquiryModalOpen(false);
              }}
              style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
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
                  Additional Message
                </label>
                <textarea
                  rows={isMobile ? 1 : 3}
                  style={{
                    width: '100%',
                    padding: '0px 5px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '15px',
                    transition: 'border-color 0.2s ease',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    color:'black'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#c79a4a'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#ddd'}
                  placeholder="Tell us about your requirements"
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
            <p style={{ color: '#8a857a', fontSize: '16px', margin: 0 }}>
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
      fontSize: '16px',
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
      fontSize: '16px',
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
      fontSize: '16px',
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
