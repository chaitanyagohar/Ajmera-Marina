// components/StickyButtons.js

'use client';

// --- SVG Icons (No changes) ---
const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M16.6 14.2l-1.5-0.7c-0.3-0.1-0.5-0.1-0.7 0.1l-0.9 1.1c-1.3-0.7-2.4-1.8-3.2-3.2l1.1-0.9c0.2-0.2 0.3-0.5 0.1-0.7l-0.7-1.5c-0.2-0.3-0.5-0.5-0.8-0.5h-1.6c-0.4 0-0.8 0.4-0.8 0.8C7.2 12.2 11.8 16.8 15.2 16.8c0.4 0 0.8-0.3 0.8-0.8v-1.6C16.1 14.7 15.8 14.4 15.6 14.2zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5h-1.5A13.5 13.5 0 0 1 2 3.5Z" clipRule="evenodd" />
    </svg>
);

export default function StickyButtons() {
    // UPDATED: The phone number is now fetched from your .env.local file
    const phoneNumber = process.env.NEXT_PUBLIC_CONTACT_NUMBER;

    const whatsappLink = `https://wa.me/${phoneNumber}?text=Hello! I'm interested in your project.`;
    const callLink = `tel:${phoneNumber}`;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden">
            {/* WhatsApp Button */}
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glare flex-1 flex items-center justify-center gap-2 p-4 text-white font-bold bg-[#25D366] hover:bg-[#1DAE52] transition-colors duration-300"
            >
                <WhatsAppIcon />
                WhatsApp
            </a>

            {/* Call Us Button */}
            <a
                href={callLink}
                className="btn-glare flex-1 flex items-center justify-center gap-2 p-4 text-white font-bold bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
                <PhoneIcon />
                Call Us
            </a>
        </div>
    );
}