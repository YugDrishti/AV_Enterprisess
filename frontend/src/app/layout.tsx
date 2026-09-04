import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | AV Enterprises Real Estate",
    default: "AV Enterprises | Premium Real Estate for Buying, Selling, and Renting",
  },
  description: "Find your dream property with AV Enterprises. Expert real estate consultation for buying, selling, and renting properties. Get your free consultation today.",
  keywords: ["Real Estate", "Buy Property", "Sell Property", "Rent Property", "Property Consultation", "Real Estate Agent"],
  openGraph: {
    title: "AV Enterprises | Premium Real Estate",
    description: "Expert real estate consultation for buying, selling, and renting properties.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
