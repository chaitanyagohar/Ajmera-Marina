'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import EnquiryFormModal from './EnquiryFormModal'; // import enquiry form modal

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function FloorPlans() {
  const [selectedPlanImage, setSelectedPlanImage] = useState(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      type: '2 BHK',
      size: 1250,
      imageUrl: '2-bhk.jpg',
      largeImageUrl: '2-bhk.jpg'
    },
    {
      type: '3 BHK',
      size: 1680,
      imageUrl: '3-bhk.jpg',
      largeImageUrl: '3-bhk.jpg'
    }
  ];

  const openEnquiryForm = (plan) => {
    setSelectedPlan(plan);
    setIsEnquiryOpen(true);
  };

  const closeEnquiryForm = () => {
    setIsEnquiryOpen(false);
    setSelectedPlan(null);
  };

  return (
    <>
      <motion.section
        id="plans"
        className="py-20 bg-gray-50"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Thoughtfully Designed Floor Plans
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Explore spacious, airy, and well-ventilated residences crafted
            for modern living. Choose the perfect layout that complements
            your lifestyle.
          </motion.p>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              {plans.map((plan) => (
                <motion.div
                  key={plan.type}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="overflow-hidden relative h-64">
                    <img
                      src={plan.imageUrl}
                      alt={`${plan.type} Floor Plan`}
                      className="w-full h-full object-cover filter blur-sm group-hover:blur-none transition-all duration-500"
                    />
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-semibold text-gray-900">{plan.type} Apartment</h3>
                    <p className="text-gray-600 mt-2">
                      Starting from <span className="font-medium text-gray-800">{plan.size} Sq. Ft.</span>
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                      {/* View Plan opens IMAGE lightbox */}
                      <button
                        onClick={() => setSelectedPlanImage(plan.largeImageUrl)}
                        className="btn-glare flex-1 text-center bg-[#c82a2b] text-white px-5 py-3 rounded-lg font-medium hover:bg-[#a82425] transition-colors duration-300"
                      >
                        View Plan
                      </button>

                      {/* Download opens ENQUIRY FORM */}
                      <button
                        onClick={() => openEnquiryForm(plan)}
                        className="btn-glare flex-1 text-center bg-gray-700 text-white px-5 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300"
                      >
                        Download
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* IMAGE Lightbox */}
      {selectedPlanImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPlanImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedPlanImage} 
              alt="Enlarged floor plan" 
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl" 
            />
            <button
              onClick={() => setSelectedPlanImage(null)}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 transition-all text-2xl leading-none"
              aria-label="Close"
            >
              &times;
            </button>
          </motion.div>
        </div>
      )}

      {/* ENQUIRY FORM Modal */}
      {isEnquiryOpen && (
        <EnquiryFormModal 
          isOpen={isEnquiryOpen} 
          onClose={closeEnquiryForm} 
          plan={selectedPlan} 
        />
      )}
    </>
  );
}
