import './globals.css'
import { Inter } from 'next/font/google'
import StickyButtons from "@/components/StickyButtons";
import GlobalEnquiryProvider from "@/components/GlobalEnquiryProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ajmera Marina - Luxury Apartments',
  description: 'Where Luxury Meets Unparalleled Comfort',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <StickyButtons />
        <GlobalEnquiryProvider />
      </body>
    </html>
  )
}
