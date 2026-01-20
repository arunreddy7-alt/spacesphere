"use client";
// Home page composed from section components in the components folder

import { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SpaceSphereEdge from "../components/SpaceSphereEdge";
import WhatWeOfferSection from "../components/WhatWeOfferSection";
import PortfolioSection from "../components/PortfolioSection";
import ProjectsSection from "../components/ProjectsSection";
import ClientImpressionSection from "../components/ClientImpressionSection";
import ConnectWithUsSection from "../components/ConnectWithUsSection";
import FooterSection from "../components/FooterSection";

const navLinks = [
  { name: "HOME", href: "#space-sphere-edge-section" },
  { name: "WHAT WE OFFER", href: "#what-we-offer" },
  { name: "PORTFOLIO", href: "#portfolio" },
  { name: "PROJECTS", href: "#projects" },
  { name: "ABOUT US", href: "#about" },
  { name: "CONTACT US", href: "#contact" },
];

const heroImages = [
  "/villa.webp",
  "/GalleryDown.webp",
  "/aprtment.webp",
  "/commercial.webp",
];

const projects = [
  {
    title: "Luxury Residential Apartments & High-Rise Towers",
    images: ["/apartment1.jpg", "/apartment2.jpg", "/apartment3.jpg"],
  },
  {
    title: "Signature Villas & Gated Communities",
    images: ["/villas1.jpg", "/villas2.jpg", "/villas3.jpg"],
  },
  {
    title: "Premium Open Plots with Future Growth Vision",
    images: ["/plot1.jpg", "/plot2.jpg", "/plot3.jpg"],
  },
  {
    title: "Commercial Spaces for High-Return Investors",
    images: ["/commercial1.jpg", "/commercial2.jpg", "/commercial3.jpg"],
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
  const [modalType, setModalType] = useState("consultation");
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [timelineScrollProgress, setTimelineScrollProgress] = useState(0);
  const timelineSectionRef = useRef(null);

  const [contactSectionInView, setContactSectionInView] = useState(false);
  const contactSectionRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "India (+91)",
    mobileNumber: "",
    projectName: "",
    projectType: "",
    budget: "",
    consent: true,
  });

  // Generate dynamic date options starting from tomorrow (used by FooterSection form)
  const getDateOptions = () => {
    const options = [];
    const today = new Date();
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dateStr = date.toISOString().split("T")[0];
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

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const savedData = localStorage.getItem("spacesphere_contact_form");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
      } catch (error) {
        console.warn("Failed to parse saved form data:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "spacesphere_contact_form",
      JSON.stringify(formData)
    );
  }, [formData]);

  // slideshow + scroll logic (same as original)
  useEffect(() => {
    const FADE_DURATION = 2800;
    const SLIDE_INTERVAL = 3000;

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
          if (nextIdx >= projects[i].images.length) {
            return 0;
          }
          return nextIdx;
        })
      );
    }, 4000);
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
      setExperienceImageIndex(
        (prev) => (prev + 1) % experienceCenterImages.length
      );
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

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    setIsMobile(window.innerWidth < 768);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const easeInOutCubic = (t) => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  useEffect(() => {
    const handleTimelineScroll = () => {
      if (!timelineSectionRef.current) return;

      const section = timelineSectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      const startPoint = sectionTop - windowHeight * 0.8;
      const endPoint =
        sectionTop + sectionHeight - windowHeight * 0.2;

      let progress = 0;

      if (scrollPosition <= startPoint) {
        progress = 0;
      } else if (scrollPosition >= endPoint) {
        progress = 1;
      } else {
        progress =
          (scrollPosition - startPoint) / (endPoint - startPoint);
        progress = Math.max(0, Math.min(1, progress));
      }

      const easedProgress = easeInOutCubic(progress);
      setTimelineScrollProgress(easedProgress);
    };

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

    window.addEventListener("scroll", throttledHandleScroll, {
      passive: true,
    });

    handleTimelineScroll();

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  useEffect(() => {
    const scrolled = window.pageYOffset;
    const parallaxElements =
      document.querySelectorAll(".parallax-bg");
    parallaxElements.forEach((element) => {
      const speed = 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
  }, []);

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
        threshold: 0.2,
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

  useEffect(() => {
    const brand = document.getElementById("mobile-brand");
    if (!brand) return;

    const isMobileQuery =
      window.matchMedia("(max-width: 768px)").matches;

    if (!isMobileQuery) return;

    brand.classList.remove("visible");

    const handleScroll = () => {
      if (window.scrollY > 80) {
        brand.classList.add("visible");
      } else {
        brand.classList.remove("visible");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInquiryModalOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-white text-foreground">
      <Header
        isScrolled={isScrolled}
        isMobile={isMobile}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        navLinks={navLinks}
      />

      <HeroSection
        heroImages={heroImages}
        currentSlide={currentSlide}
        nextSlide={nextSlide}
        isTransitioning={isTransitioning}
        isMobile={isMobile}
        navLinks={navLinks}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        setIsInquiryModalOpen={setIsInquiryModalOpen}
      />

      <AboutSection
        isMobile={isMobile}
        setIsInquiryModalOpen={setIsInquiryModalOpen}
      />
      <SpaceSphereEdge />


      <WhatWeOfferSection
        isMobile={isMobile}
        timelineScrollProgress={timelineScrollProgress}
        timelineSectionRef={timelineSectionRef}
        setIsModalOpen={setIsModalOpen}
      />

      <PortfolioSection />

      <ProjectsSection
        isMobile={isMobile}
        setIsModalOpen={setIsModalOpen}
      />

      <ClientImpressionSection />

      <ConnectWithUsSection
        contactSectionRef={contactSectionRef}
        contactSectionInView={contactSectionInView}
        setIsInquiryModalOpen={setIsInquiryModalOpen}
      />

      <FooterSection
        isMobile={isMobile}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isInquiryModalOpen={isInquiryModalOpen}
        setIsInquiryModalOpen={setIsInquiryModalOpen}
        dateOptions={dateOptions}
      />

    </main>
  );
}

