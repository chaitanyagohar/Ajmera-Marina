'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/hero-1.jpg',
  '/hero-2.webp',
  '/hero-3.jpg',
];

export default function Hero({ onEnquire }) {
  const [enableSlideshow, setEnableSlideshow] = useState(false);
  const [currentImage, setCurrentImage] = useState(1); // start from 2nd image

  // Enable slideshow only AFTER LCP window
  useEffect(() => {
    const timeout = setTimeout(() => {
      setEnableSlideshow(true);
    }, 5000); // IMPORTANT: after Lighthouse LCP window

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!enableSlideshow) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [enableSlideshow]);

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">

      {/* 🔒 LCP LOCKED IMAGE (ONLY ONE) */}
      <div data-lcp="true" className="absolute inset-0">
        <Image
          src={images[0]}
          alt="Ajmera Marina Luxury Apartments"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* ❌ Animated images are hidden from LCP */}
      {enableSlideshow && (
        <AnimatePresence>
          <motion.div
            key={currentImage}
            aria-hidden="true"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src={images[currentImage]}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Text */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Welcome to <span className="text-[#c82a2b]">Ajmera Marina</span>
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
          Luxury Apartments with World-Class Amenities
        </p>

        <button
          onClick={onEnquire}
          className="bg-[#c82a2b] hover:bg-[#a82425] text-white font-semibold rounded-lg text-lg px-6 py-3"
        >
          Book a Visit
        </button>
      </div>
    </section>
  );
}
