'use client';

import { useState } from 'react';

// Keep static imports (SSR intact)
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import Amenities from '@/components/Amenities';
import FloorPlans from '@/components/FloorPlans';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

// Defer ONLY floating / interactive UI
import dynamic from 'next/dynamic';

const StickyButtons = dynamic(
  () => import('./components/StickyButtons'),
  { ssr: false }
);

const EnquiryFormModal = dynamic(
  () => import('./components/EnquiryFormModal'),
  { ssr: false }
);

export default function HomePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => setIsFormOpen(true);

  return (
    <>
      <Header />

      <main>
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
      </main>

      <Footer />

      {/* Client-only interactive UI */}
      <StickyButtons />
      <EnquiryFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </>
  );
}
