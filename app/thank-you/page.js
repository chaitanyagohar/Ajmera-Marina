// app/thank-you/page.jsx

import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 text-center p-6">
      <div className="bg-white/90 backdrop-blur-xl p-10 rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-500 hover:scale-[1.02]">
        <svg
          className="w-20 h-20 mx-auto text-green-500 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <h1 className="text-4xl font-extrabold text-[#1a1a1a] mt-6">
          Thank You!
        </h1>
        <p className="text-gray-600 mt-3 text-lg leading-relaxed">
          Your enquiry has been received successfully.  
          Our team will reach out to you shortly.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 bg-[#c82a2b] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#a82425] transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
