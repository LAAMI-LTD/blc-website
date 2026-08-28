import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { institution } from "@/config/institution";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${institution.name} | ${institution.shortName} Kenya`,
    template: `%s | ${institution.shortName}`,
  },
  description: institution.description,
  metadataBase: new URL("https://bbtikenya.co.ke"),
  keywords: [
    "Berlin Business Training Institute",
    "BBTI",
    "TVET college Kenya",
    "business training institute Kenya",
    "professional courses Kenya",
    "ICT training Kenya",
    "language courses Kenya",
  ],
  openGraph: {
    title: `${institution.name} (${institution.shortName})`,
    description: institution.description,
    siteName: institution.name,
    locale: "en_KE",
    type: "website",
    images: ["/logo/bbti-logo-lockup.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${institution.name} (${institution.shortName})`,
    description: institution.tagline,
    images: ["/logo/bbti-logo-lockup.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
