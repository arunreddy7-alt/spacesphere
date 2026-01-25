"use client";
import React from "react";

const Header = React.memo(({
  isScrolled,
  isMobile,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  navLinks,
}) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-5 transition-all duration-300 ${isScrolled
        ? "translate-y-0 opacity-100 shadow-lg"
        : "translate-y-0 opacity-100 md:-translate-y-full md:opacity-0"
        }`}
      style={{
        background: isScrolled ? "rgba(245, 245, 240, 0.95)" : "transparent",
      }}
    >
      <div
        id="mobile-brand"
        className={`flex items-center gap-2 ml-3 md:ml-10 ${isScrolled ? "visible" : ""
          }`}
      >
        <img
          src="/logo2.png"
          alt="Space Sphere Logo"
          className="md:block object-contain transition-all duration-300"
          style={{
            maxHeight: "60px",
            maxWidth: "180px",
            width: "auto",
            filter: isMobile
              ? isScrolled
                ? "brightness(0) saturate(100%)"
                : "none"
              : "brightness(0) saturate(100%)",
            transform: isMobile
              ? "scale(1.9) translateY(3px) translateX(-9px)"
              : "scale(1.8) translateY(2px) translateX(10px)",
            transformOrigin: "center left",
            transition: "transform 0.3s ease, filter 0.3s ease",
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
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
              color: isScrolled ? "#1a1a1a" : "#f0ede6",
            }}
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="block md:hidden p-2 z-50"
        aria-label="Toggle menu"
        style={{
          color: isScrolled ? "#1a1a1a" : "#f0ede6",
          marginLeft: "auto",
          marginRight: "11px",
        }}
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 shadow-lg z-40"
          style={{
            background: isScrolled
              ? "rgba(245, 245, 240, 0.98)"
              : "rgba(0, 0, 0, 0.95)",
            animation: "slideDown 0.3s ease-out",
            transformOrigin: "top",
          }}
        >
          <nav className="flex flex-col px-6 py-4 gap-2 w-full">
            {navLinks.map((item) => (
              <a
                key={item.name}
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
                  border: "none",
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
});

Header.displayName = "Header";

export default Header;
