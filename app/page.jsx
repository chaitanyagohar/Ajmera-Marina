'use client';

// 1. Import useState to manage the modal's state
import { useState } from 'react'; 

// Import all your components
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import Amenities from '@/components/Amenities';
import FloorPlans from '@/components/FloorPlans';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import StickyButtons from './components/StickyButtons';
import EnquireNowButton from './components/EnquireNowButton'; // 2. Import the EnquireNowButton
import EnquiryFormModal from './components/EnquiryFormModal'; // 3. Import the EnquiryFormModal

export default function HomePage() {
  // 4. Add state to control when the modal is open or closed
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Helper function to open the form, which we'll pass to other components
  const handleOpenForm = () => setIsFormOpen(true);

  return (
    <>
      <Header />
      
      <main>
        {/* You can pass `handleOpenForm` to any component that needs to open the modal */}
        <section id="home">
          <Hero onEnquire={handleOpenForm} />
        </section>
        
        <section id="overview">
          <Overview />
        </section>
        
        <section id="amenities">
          <Amenities />
        </section>
        
        <section id="plans">
          <FloorPlans />
        </section>
        
        <section id="gallery">
          <Gallery />
        </section>
        
        <section id="location">
          <Location />
        </section>
        
        <section id="contact">
          {/* Your contact component or info can go here */}
        </section>
      </main>
      
      <Footer />

      {/* Your existing components */}
      <StickyButtons />

      <EnquiryFormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}