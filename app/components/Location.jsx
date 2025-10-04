'use client';

import { motion } from 'framer-motion';
import { School, Plane, Building2, Briefcase, Train, ShoppingCart } from 'lucide-react';

const connectivity = [
  { icon: School, label: 'Swami Vivekanand Int. School', time: '5 Mins' },
  { icon: Plane, label: 'Kempegowda International Airport', time: '20 Mins' },
  { icon: Building2, label: 'Manyata Tech Park', time: '20 Mins' },
  { icon: Briefcase, label: 'RMZ Galleria Commercials', time: '10 Mins' },
  { icon: Train, label: 'Yelahanka Railway Station', time: '20 Mins' },
  { icon: ShoppingCart, label: 'D-Mart', time: '8 Mins' },
];

export default function Location() {
  return (
    <motion.section
      id="location"
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Connectivity
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column: Connectivity List */}
          <div className="space-y-6">
            {connectivity.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-gray-200 pb-4"
              >
                <div className="flex items-center gap-4">
                  <item.icon className="w-7 h-7 text-[#c82a2b]" />
                  <span className="text-gray-800 text-lg">{item.label}</span>
                </div>
                <span className="text-gray-600 font-medium">{item.time}</span>
              </div>
            ))}
          </div>

          {/* Right Column: Google Map */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 h-96 md:h-full md:min-h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31086.643754759436!2d77.558817!3d13.109924000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae2394845c63f7%3A0x85cbdccde57e7722!2sAjmera%20Marina!5e0!3m2!1sen!2sin!4v1759396806212!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
