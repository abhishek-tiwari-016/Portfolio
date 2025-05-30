import React, { useState, useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import { AnimatePresence, motion } from "framer-motion";

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navMenuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!menuOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                navMenuRef.current &&
                !navMenuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);
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
            className={`fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/80 dark:bg-[#0f172a]/80 transition-all ${scrolled ? "shadow-md" : ""
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
                        ref={buttonRef}
                        onClick={() => setMenuOpen((open) => !open)}
                        className="text-xl font-bold text-accent"
                        aria-label="Toggle Menu"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        ref={navMenuRef}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div ref={navMenuRef} className="md:hidden px-4 pb-4">
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
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;