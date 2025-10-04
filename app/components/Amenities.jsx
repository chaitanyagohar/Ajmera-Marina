'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {
  Dumbbell,
  Baby,
  Building2,
  UtensilsCrossed,
  BedDouble,
  Waves,
  Bike,
  Trees,
  Activity,
  PersonStanding,
} from 'lucide-react';

const amenities = [
  { name: 'Indoor GYM', icon: <Dumbbell className="w-6 h-6 text-yellow-500" />, desc: 'State-of-the-art fitness center with modern equipment.', img: '/gym.jpg' },
  { name: 'Yoga', icon: <PersonStanding className="w-6 h-6 text-green-500" />, desc: 'Calm yoga spaces for meditation and mindfulness.', img: '/yoga.jpg' },
  { name: "Kid's Play Area", icon: <Baby className="w-6 h-6 text-yellow-500" />, desc: 'Safe and engaging play zones for children.', img: '/kids-play.jpg' },
  { name: 'Banquet Hall', icon: <BedDouble className="w-6 h-6 text-red-500" />, desc: 'Spacious hall for gatherings and celebrations.', img: '/banquet.jpeg' },
  { name: 'Cafe', icon: <UtensilsCrossed className="w-6 h-6 text-green-500" />, desc: 'A cozy cafe for refreshments and conversations.', img: '/cafe.jpeg' },
  { name: 'Kids Pool', icon: <Waves className="w-6 h-6 text-green-500" />, desc: 'Dedicated kids pool for fun and safety.', img: '/kids-pool.jpeg' },
  { name: 'Multipurpose Hall', icon: <Building2 className="w-6 h-6 text-orange-500" />, desc: 'Versatile indoor hall for multiple activities.', img: '/multipurpose.webp' },
  { name: 'Cycling Track', icon: <Bike className="w-6 h-6 text-red-500" />, desc: 'Dedicated cycling track for fitness enthusiasts.', img: '/cycling.jpg' },
  { name: 'Jogging Track', icon: <Trees className="w-6 h-6 text-yellow-500" />, desc: 'Safe jogging track surrounded by greenery.', img: '/jogging.webp' },
  { name: 'Swimming Pool', icon: <Waves className="w-6 h-6 text-sky-500" />, desc: 'A sparkling pool designed for leisure and fitness.', img: '/swimming.jpg' },
  { name: 'Aerobics Centre', icon: <Activity className="w-6 h-6 text-orange-500" />, desc: 'Stay fit with guided aerobic sessions.', img: '/aerobics.jpg' },
  { name: 'Zumba Centre', icon: <PersonStanding className="w-6 h-6 text-green-600" />, desc: 'Dance-based fitness with energy and fun.', img: '/zumba.jpg' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Amenities() {
  return (
    <motion.section
      id="amenities"
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-10"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Amenities
        </motion.h2>

        {/* Desktop Grid */}
        <motion.div
          className="hidden sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {amenities.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
              variants={itemVariants}
              whileHover={{ scale: 1.04 }}
            >
              <div className="w-full h-20 mb-3 rounded-md overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-2 rounded-full bg-gray-100 mb-2 group-hover:bg-gray-200 transition">
                {item.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-800">{item.name}</h3>
              <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Slider */}
        <div className="sm:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.2}
            breakpoints={{
              400: { slidesPerView: 1.5 },
              500: { slidesPerView: 2 },
            }}
          >
            {amenities.map((item, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
                  whileHover={{ scale: 1.04 }}
                >
                  <div className="w-full h-24 mb-3 rounded-md overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-2 rounded-full bg-gray-100 mb-2 group-hover:bg-gray-200 transition">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
}
