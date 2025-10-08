// app/thank-you/page.jsx - Simplified Code

import Link from "next/link";
import Script from 'next/script';

export default function ThankYouPage() {
  // This single value should be your complete conversion tracking ID
  // For example: 'AW-123456789/AbC-D_efG-h12iJ34kL5m'
  const GADS_CONVERSION_TAG = process.env.NEXT_PUBLIC_GADS_CONVERSION_TAG;

  return (
    <>
      {/* Google Ads Conversion Event Snippet */}
      {GADS_CONVERSION_TAG && (
        <Script id="google-ads-conversion-event" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {
                'send_to': '${GADS_CONVERSION_TAG}',
            });
          `}
        </Script>
      )}

      {/* Your page design */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 text-center p-6">
        <div className="bg-white/90 backdrop-blur-xl p-10 rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-500 hover:scale-[1.02]">
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