// components/EnquiryFormModal.js
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FiUser, FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
  </svg>
);

export default function EnquiryFormModal({ isOpen, onClose }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Enter a valid email address";
    if (!formData.phone.match(/^[0-9]{10}$/))
      newErrors.phone = "Enter a valid 10-digit phone number";
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" })); // clear error on typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Network error');

      onClose();
      setFormData({ name: '', email: '', phone: '', message: '' });
      router.push('/thank-you');
    } catch (error) {
      console.error(error);
      setErrors({ global: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-md border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Logo Section */}
            <div className="flex flex-col items-center pt-6">
              <img src="/logo.png" alt="Logo" className="h-12 mb-3" />
            </div>

            {/* Header */}
            <div className="flex justify-between items-center px-6 pb-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800">Enquire Now</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-800 transition-colors"
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Full Name */}
              <div>
                <div className="relative">
                  <FiUser className="absolute left-3 top-3.5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="John Doe"
                    onChange={handleInputChange}
                    className="w-full pl-10 p-3 rounded-lg border border-gray-300 bg-gray-50 
                               placeholder-gray-500 text-gray-800 focus:ring-2 
                               focus:ring-[#c82a2b] focus:border-transparent transition"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <div className="relative">
                  <FiMail className="absolute left-3 top-3.5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="you@example.com"
                    onChange={handleInputChange}
                    className="w-full pl-10 p-3 rounded-lg border border-gray-300 bg-gray-50 
                               placeholder-gray-500 text-gray-800 focus:ring-2 
                               focus:ring-[#c82a2b] focus:border-transparent transition"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <div className="relative">
                  <FiPhone className="absolute left-3 top-3.5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    placeholder="+91 12345 67890"
                    onChange={handleInputChange}
                    className="w-full pl-10 p-3 rounded-lg border border-gray-300 bg-gray-50 
                               placeholder-gray-500 text-gray-800 focus:ring-2 
                               focus:ring-[#c82a2b] focus:border-transparent transition"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Message */}
              <div>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3 top-3.5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    rows="4"
                    placeholder="I would like to know more about..."
                    onChange={handleInputChange}
                    className="w-full pl-10 p-3 rounded-lg border border-gray-300 bg-gray-50 
                               placeholder-gray-500 text-gray-800 focus:ring-2 
                               focus:ring-[#c82a2b] focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Error message global */}
              {errors.global && <p className="text-red-500 text-sm">{errors.global}</p>}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#c82a2b] to-[#a82425] text-white font-bold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-lg disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    <span>Submitting...</span>
                  </span>
                ) : (
                  "Download Brochure"
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
