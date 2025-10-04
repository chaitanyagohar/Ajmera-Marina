'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.footer 
            className="bg-black py-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto px-4 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Ajmera Marina. All Rights Reserved.</p>
                <p className="text-sm mt-2">Disclaimer: This is a conceptual website created for demonstration purposes.</p>
            </div>
        </motion.footer>
    );
}
