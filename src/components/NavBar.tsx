import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Publication", href: "#publications" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/80 dark:bg-[#0f172a]/80 transition-all ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-abhi text-xl bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text font-black">
          Abhishek
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm md:text-base items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-abhi text-text dark:text-text hover:text-accent transition-all"
              >
                {item.label}
              </a>
            </li>
          ))}
          <ThemeToggle />
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl font-bold text-accent"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3 font-abhi text-base">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-text dark:text-text hover:text-accent transition-all"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;