'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Array of background images for the slideshow from the public folder
const images = [
    '/hero-1.jpg',
    '/hero-2.webp',
    '/hero-3.jpg'
];

export default function Hero({ onEnquire }) {
    const [currentImage, setCurrentImage] = useState(0);

    // Effect to cycle through images every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section 
            id="home" 
            className="relative flex items-center justify-center h-screen overflow-hidden"
        >
            {/* Animated background images */}
            <AnimatePresence>
                <motion.div
                    key={currentImage}
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${images[currentImage]})` }}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            </AnimatePresence>

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Text content */}
            <motion.div
                className="relative z-10 text-center text-white px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                    Welcome to <span className="text-[#c82a2b]">Ajmera Marina</span>
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200 drop-shadow">
                    Luxury Apartments with World-Class Amenities
                </p>
                <button 
                   onClick={onEnquire}
                    className="btn-glare bg-[#c82a2b] hover:bg-[#a82425] text-white font-semibold rounded-lg text-lg px-6 py-3 shadow-lg transition-colors duration-300"
                >
                    Book a Visit
                </button>
            </motion.div>
        </section>
    );
}
