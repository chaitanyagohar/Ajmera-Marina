// app/thank-you/page.jsx

import Link from "next/link";
import Script from 'next/script'; // Still need this for the inline script

export default function ThankYouPage() {
  return (
    <>
      {/* This script just sends the event. It relies on the gtag loaded in layout.jsx */}
      <Script id="google-ads-conversion-event" strategy="afterInteractive">
        {`
          gtag('event', 'ads_conversion_submit_lead_form');
        `}
      </Script>

      {/* Your page design */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 text-center p-6">
        <div className="bg-white/90 backdrop-blur-xl p-10 rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-500 hover:scale-[1.02]">
          {/* ... Your page content (SVG, h1, p, etc.) ... */}
          <h1 className="text-4xl font-extrabold text-[#1a1a1a] mt-6">
            Thank You!
          </h1>
          <p className="text-gray-600 mt-3 text-lg leading-relaxed">
            Your enquiry has been received successfully. Our team will reach out to you shortly.
          </p>
          <Link
            href="/"
            className="inline-block mt-8 bg-[#c82a2b] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#a82425] transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}