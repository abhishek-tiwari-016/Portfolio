import React, { useState, useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import { AnimatePresence, motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaDownload } from "react-icons/fa";

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
                {/* <div className="px-5 py-1 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md shadow border border-white/20"> */}
                <span
                    className="
                    bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400
                    bg-[length:200%_200%]
                    animate-gradient-x
                    bg-clip-text text-transparent
                    font-black text-xl tracking-tight
                    "
                >
                    Abhishek
                </span>
                {/* </div> */}

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
                    {/* Resume Button */}
                    <li>
                        <a
                            href="/Abhishek_Tiwari_Resume_FullStack.pdf"
                            download
                            target="_blank"
                            rel="noopener"
                            className="font-abhi px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 text-white text-sm shadow hover:scale-105 transition-all flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-4 h-4"><path fill="currentColor" d="M9 2.75A.75.75 0 0 1 10 2a.75.75 0 0 1 .75.75V12l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06L9 12V2.75ZM2.75 17a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1-.75-.75Z" /></svg>
                            {/* <FaDownload className="w-5 h-5"/> */}
                            Resume
                        </a>
                    </li>
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
                            <a
                                href="/Abhishek_Tiwari_Resume_FullStack.pdf"
                                download
                                target="_blank"
                                rel="noopener"
                                className="mt-4 block font-abhi px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 text-white text-center text-base shadow hover:scale-105 transition-all"
                            >
                                <span className="inline-flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-4 h-4"><path fill="currentColor" d="M9 2.75A.75.75 0 0 1 10 2a.75.75 0 0 1 .75.75V12l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06L9 12V2.75ZM2.75 17a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1-.75-.75Z" /></svg>
                                    Resume
                                </span>
                            </a>
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