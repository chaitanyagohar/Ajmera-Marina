'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    const disclaimerText = `
        Disclaimer: The content is for information purposes only and does not constitute an offer to avail of any service. 
        Prices mentioned are subject to change without notice and properties mentioned are subject to availability. 
        Images for representation purposes only. This is the official website of authorized marketing partner. 
        We may share data with RERA registered brokers of companies for further processing. 
        We may also send updates to the mobile number/email id registered with us.
    `;

    return (
        <motion.footer 
            // UPDATED: A slightly softer dark background to match the screenshot
            className="bg-gray-900 py-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto px-6 text-center text-gray-400">
                {/* UPDATED: Disclaimer text from your screenshot */}
                <p className="text-xs sm:text-sm leading-relaxed max-w-5xl mx-auto">
                    {disclaimerText}
                </p>
                {/* KEPT: Copyright notice for completeness */}
                <p className="mt-6 text-sm">
                    &copy; {new Date().getFullYear()} Ajmera Group. All Rights Reserved.
                </p>
            </div>
        </motion.footer>
    );
}