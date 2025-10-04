// components/GlobalEnquiryProvider.jsx
'use client';

import { useState } from 'react';
import EnquireNowButton from './EnquireNowButton';
import EnquiryFormModal from './EnquiryFormModal';

export default function GlobalEnquiryProvider() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const openEnquiryForm = () => setIsEnquiryOpen(true);
  const closeEnquiryForm = () => setIsEnquiryOpen(false);

  return (
    <>
      {/* Floating Button */}
      <EnquireNowButton onEnquire={openEnquiryForm} />

      {/* Modal */}
      <EnquiryFormModal isOpen={isEnquiryOpen} onClose={closeEnquiryForm} />
    </>
  );
}
