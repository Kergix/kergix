import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kergix",
  description: "Kergix is a premium IT Services & Products provider delivering high-performance Website Development, Software Engineering, AI Integrations, Cloud Solutions, WordPress Development, SEO, and Cybersecurity.",
  keywords: ["Software Development", "Web Development", "AI Integration", "Cloud Solutions", "WordPress Development", "SEO", "Cybersecurity", "IT Consulting", "Kergix"],
  authors: [{ name: "Kergix" }],
  metadataBase: new URL("https://kergix.com"), // Fallback, will be overridden by NEXT_PUBLIC_SITE_URL in production env
  openGraph: {
    title: "Kergix",
    description: "Powering Tomorrow, Today. Tailored software development, high-performance web systems, and intelligent solutions.",
    url: "https://kergix.com",
    siteName: "Kergix",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kergix",
    description: "Powering Tomorrow, Today. Tailored software development, high-performance web systems, and intelligent solutions.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans bg-bg-primary text-text-primary relative selection:bg-metal-light selection:text-bg-primary">
        {/* Ambient background glows */}
        <div className="glow-bg-top-right" />
        <div className="glow-bg-bottom-left" />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col relative z-10">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
