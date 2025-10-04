'use client';

import { motion } from 'framer-motion';
import { Landmark, Building, Crown, Sparkles } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Overview() {
  const features = [
    {
      title: 'Inspired Living',
      desc: 'Drawing from Marina Bay’s global prestige, experience unmatched elegance every day.',
      icon: <Landmark className="w-7 h-7 text-[#a82425]" />,
    },
    {
      title: 'Architectural Brilliance',
      desc: 'Residences designed with precision, blending modern sophistication with timeless beauty.',
      icon: <Building className="w-7 h-7 text-[#a82425]" />,
    },
    {
      title: 'Exclusive Lifestyle',
      desc: 'From rooftop retreats to world-class amenities, luxury becomes your everyday reality.',
      icon: <Crown className="w-7 h-7 text-[#a82425]" />,
    },
    {
      title: 'Thoughtful Innovation',
      desc: 'Every detail curated for comfort, convenience, and community-driven living.',
      icon: <Sparkles className="w-7 h-7 text-[#a82425]" />,
    },
  ];

  return (
    <motion.section
      id="overview"
      className="py-24 bg-white relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Headings */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#c82a2b] mb-4 tracking-wide">
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            <span className="font-semibold text-gray-900">Ajmera Marina</span> is inspired by the USA’s
            iconic <span className="text-[#c82a2b]">Marina Bay</span> — a global symbol of grandeur and
            elegance. It is more than a residence; it is a tribute to sophistication, exclusivity, and
            innovation. From crafted residences to awe-inspiring rooftop amenities, every detail
            redefines how luxury is experienced.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left side image */}
          <motion.div
            className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src="/Proj-Ajmera-Marina-Interior-1.jpg"
              alt="Project Overview"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Right side content with features */}
          <div className="lg:col-span-6 space-y-8">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-5 bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
