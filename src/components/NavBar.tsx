import React, { useState, useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import { AnimatePresence, motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

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
            className={`
            fixed top-0 left-0 w-full z-50
            backdrop-blur
            bg-white/80 dark:bg-[#0f172a]/80
            transition-all
            ${scrolled ? "shadow-2xl border-b-2 border-pink-500/40 dark:border-pink-600/40" : ""}
            `}
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

                {/* Desktop Quick Contact */}
                <div className="hidden md:flex items-center gap-2 ml-4">
                    <a href="mailto:at03163@gmail.com" aria-label="Email" title="Email"
                        className="p-2 rounded-full hover:bg-pink-100/40 transition text-pink-500 text-xl">
                        <FaEnvelope />
                    </a>
                    <a href="tel:+918449974297" aria-label="Phone" title="Phone"
                        className="p-2 rounded-full hover:bg-green-100/40 transition text-green-500 text-xl">
                        <FaPhone />
                    </a>
                    <a href="https://linkedin.com/in/abhishektiwari016" aria-label="LinkedIn" target="_blank" rel="noopener"
                        className="p-2 rounded-full hover:bg-blue-100/40 transition text-blue-500 text-xl" title="LinkedIn">
                        <FaLinkedin />
                    </a>
                </div>

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
                            <div className="flex gap-4 justify-center mt-5">
                                <a href="mailto:at03163@gmail.com" aria-label="Email" className="p-2 rounded-full text-pink-500 text-2xl bg-white/20 dark:bg-pink-900/10">
                                    <FaEnvelope />
                                </a>
                                <a href="tel:+918449974297" aria-label="Phone" className="p-2 rounded-full text-green-500 text-2xl bg-white/20 dark:bg-green-900/10">
                                    <FaPhone />
                                </a>
                                <a href="https://linkedin.com/in/abhishektiwari016" aria-label="LinkedIn" target="_blank" rel="noopener"
                                    className="p-2 rounded-full text-blue-500 text-2xl bg-white/20 dark:bg-blue-900/10">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;