'use client';

import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <motion.section 
            id="contact" 
            className="py-20 bg-gray-50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                    We would love to hear from you. Fill out the form below to schedule a site visit or request more information.
                </p>
                <motion.div 
                    className="max-w-2xl mx-auto bg-white p-8 rounded-xl border border-gray-200 shadow-md"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <form>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <input type="text" placeholder="Your Name" className="w-full bg-gray-100 text-gray-800 rounded-md p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c82a2b] transition" />
                            <input type="email" placeholder="Your Email" className="w-full bg-gray-100 text-gray-800 rounded-md p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c82a2b] transition" />
                        </div>
                        <div className="mb-6">
                            <input type="tel" placeholder="Your Phone Number" className="w-full bg-gray-100 text-gray-800 rounded-md p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c82a2b] transition" />
                        </div>
                        <div className="mb-6">
                            <textarea placeholder="Your Message" rows="4" className="w-full bg-gray-100 text-gray-800 rounded-md p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c82a2b] transition"></textarea>
                        </div>
                        <div className="text-center">
                            <motion.button 
                                type="submit" 
                                className="-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#a82425]"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                Submit Enquiry
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </motion.section>
    );
}
