// layout.js - This code is correct!

import './globals.css'
import { Inter } from 'next/font/google'
import StickyButtons from "@/components/StickyButtons";
import GlobalEnquiryProvider from "@/components/GlobalEnquiryProvider";
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ajmera Marina - Luxury Apartments',
  description: 'Where Luxury Meets Unparalleled Comfort',
}

export default function RootLayout({ children }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <StickyButtons />
        <GlobalEnquiryProvider />

        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}