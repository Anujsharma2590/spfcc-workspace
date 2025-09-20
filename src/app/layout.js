import { Geist, Geist_Mono } from "next/font/google";
import config from '@/content/site.config'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: config.seo.title,
  description: config.seo.description,
  metadataBase: new URL(config.siteUrl)
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        <Header />
        {/* <main className="min-h-screen container mx-auto px-4">{children}</main> */}
        <main className="min-h-[calc(100vh-var(--header-h))]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
