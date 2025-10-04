'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    "/3.webp",
    "/4.webp",
    "/lake-view.jpg",
    "/hero-2.webp",
    "/Proj-Ajmera-Marina-Interior-2.jpg",
    "/Proj-Ajmera-Marina-Interior-1.jpg",
];

const sliderVariants = {
    enter: (direction) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0, scale: 0.9 }),
    center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? '100%' : '-100%', opacity: 0, scale: 0.9 })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const ChevronLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
);

const ChevronRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);

export default function Gallery() {
    const [[page, direction], setPage] = useState([0, 0]);
    const [fullscreen, setFullscreen] = useState(false);

    const imageIndex = (page % images.length + images.length) % images.length;

    const paginate = (newDirection) => setPage([page + newDirection, newDirection]);

    const handleDragEnd = (e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);
        if (swipe < -swipeConfidenceThreshold) paginate(1);
        if (swipe > swipeConfidenceThreshold) paginate(-1);
    };

    return (
        <motion.section id="gallery" className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visual Gallery</h2>
                <p className="text-gray-600 text-lg">Experience the elegance, interiors, and breathtaking views of Ajmera Marina.</p>
            </div>

            <div className="relative mt-10 max-w-5xl mx-auto flex flex-col items-center">
                <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-lg cursor-pointer">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={page}
                            src={images[imageIndex]}
                            alt={`Gallery ${imageIndex + 1}`}
                            custom={direction}
                            variants={sliderVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.3 } }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={handleDragEnd}
                            onClick={() => setFullscreen(true)}
                            className="absolute w-full h-full object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
                        />
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button onClick={() => paginate(-1)} className="z-1 absolute top-1/2 left-3 -translate-y-1/2 bg-white/50 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition">
                        <ChevronLeft />
                    </button>
                    <button onClick={() => paginate(1)} className="z-1 absolute top-1/2 right-3 -translate-y-1/2 bg-white/50 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition">
                        <ChevronRight />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-4 space-x-2">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage([i, i > imageIndex ? 1 : -1])}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${imageIndex === i ? 'bg-gray-900 scale-125' : 'bg-gray-400'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Fullscreen Modal */}
            <AnimatePresence>
                {fullscreen && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.img
                            src={images[imageIndex]}
                            alt={`Fullscreen ${imageIndex + 1}`}
                            className="max-w-full max-h-full rounded-lg shadow-xl"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                        />
                        <button
                            onClick={() => setFullscreen(false)}
                            className="absolute top-5 right-5 bg-white/90 hover:bg-white text-gray-900 px-4 py-2 rounded-full font-semibold shadow-lg"
                        >
                            Close
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
}
