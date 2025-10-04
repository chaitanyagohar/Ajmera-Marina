// components/EnquireNowButton.js

'use client';

import { motion } from 'framer-motion';

// UPDATED: The component now accepts an `onEnquire` prop
export default function EnquireNowButton({ onEnquire }) {
    
    // Animation variants (no change)
    const buttonVariants = {
        hidden: { x: '110%' },
        visible: {
            x: 0,
            transition: {
                duration: 0.6,
                ease: [0.6, 0.05, -0.01, 0.9],
                delay: 0.8
            }
        }
    };

    return (
        // UPDATED: Changed from an `<a>` tag to a `<button>` for semantic correctness
        <motion.button
            onClick={onEnquire} // It now calls the passed-in function
            className="fixed top-1/2 right-0 z-40 transform -translate-y-1/2"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
        >
            <div className="
                bg-[#c82a2b] btn-glare text-white font-bold text-sm uppercase tracking-wider
                px-4 py-2 shadow-lg
                transform origin-bottom-right -rotate-90
                rounded-tr-lg rounded-bl-lg
                cursor-pointer
                hover: transition-colors duration-300
            ">
                Enquire Now
            </div>
        </motion.button>
    );
}