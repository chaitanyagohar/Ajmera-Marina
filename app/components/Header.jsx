'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Brand-aligned navigation links ---
const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#overview', label: 'Overview' },
    { href: '#amenities', label: 'Amenities' },
    { href: '#plans', label: 'Floor Plans' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#location', label: 'Location' },
];

// --- SVG Icons ---
const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5h-1.5A13.5 13.5 0 0 1 2 3.5Z" clipRule="evenodd" />
    </svg>
);


// --- Reusable NavLink Component ---
const NavLink = ({ href, label, activeSection, onClick }) => {
    const handleClick = (e) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        if (onClick) {
            setTimeout(() => onClick(), 300);
        }
    };

    const isActive = activeSection === href.substring(1);

    return (
        <a
            href={href}
            onClick={handleClick}
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300 relative ${
                isActive ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
        >
            {label}
            {isActive && (
                <motion.div
                    // UPDATED: Using the brand's red color
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#c82a2b]"
                    layoutId="underline"
                    transition={{ duration: 0.3 }}
                />
            )}
        </a>
    );
};


// --- Main Header Component ---
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const sections = navLinks.map(link => document.querySelector(link.href));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.getAttribute('id'));
                    }
                });
            },
            { rootMargin: '-40% 0px -40% 0px' }
        );

        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const mobileMenuVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const mobileMenuItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-gray-900/80 backdrop-blur-lg shadow-xl' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    <a href="#home" className="flex-shrink-0">
                        {/* UPDATED: Increased logo size for better visibility */}
                        <img src="/logo.png" alt="Ajmera Logo" className="h-16 w-auto" />
                    </a>

                    <nav className="hidden md:flex items-center space-x-4">
                        {navLinks.map(link => (
                            <NavLink key={link.href} {...link} activeSection={activeSection} />
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        {/* UPDATED: Redesigned button with brand color and icon */}
                        <a href="tel:+1234567890" className="btn-glare flex items-center gap-2 text-white bg-[#c82a2b] hover:bg-[#a82425] font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300 shadow-md">
                            <PhoneIcon />
                            Call Us
                        </a>
                    </div>

                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white z-50">
                        <MenuIcon />
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-lg"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                        <motion.nav
                            className="flex flex-col items-center py-6 space-y-4"
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {navLinks.map(link => (
                                <motion.div key={link.href} variants={mobileMenuItemVariants}>
                                    <NavLink
                                        {...link}
                                        activeSection={activeSection}
                                        onClick={() => setIsMenuOpen(false)}
                                    />
                                </motion.div>
                            ))}
                            <motion.div variants={mobileMenuItemVariants} className="w-11/12 pt-4">
                                 <a href="tel:+916366026847" className="flex justify-center items-center gap-2 w-full text-center text-white bg-[#c82a2b] hover:bg-[#a82425] font-medium rounded-lg text-sm px-5 py-3 transition-colors duration-300 shadow-md">
                                    <PhoneIcon />
                                    Call Us
                                </a>
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}