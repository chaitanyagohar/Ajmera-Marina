// components/EnquiryFormModal.js

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- SVG Icon for the close button ---
const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export default function EnquiryFormModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would handle the form submission, e.g., send to an API
        console.log('Form Submitted:', formData);
        alert('Thank you for your enquiry! We will get back to you soon.');
        onClose(); // Close the modal after submission
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 50 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="relative bg-white rounded-lg shadow-xl w-full max-w-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-5 border-b border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-800">Enquire Now</h3>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-gray-800 transition-colors"
                                aria-label="Close"
                            >
                                <CloseIcon />
                            </button>
                        </div>

                        {/* Form Body */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input type="text" id="name" name="name" required placeholder="" onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#c82a2b] focus:border-transparent transition" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" id="email" name="email" required placeholder="you@example.com" onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#c82a2b] focus:border-transparent transition" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input type="tel" id="phone" name="phone" required placeholder="+91 12345 67890" onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#c82a2b] focus:border-transparent transition" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea id="message" name="message" rows="4" placeholder="I would like to know more about..." onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#c82a2b] focus:border-transparent transition"></textarea>
                            </div>
                            
                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#c82a2b] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#a82425] transition-colors duration-300 text-lg"
                            >
                                Submit Enquiry
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}