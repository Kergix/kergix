"use client";

import React from "react";
import Link from "next/link";
import { KergixLogo } from "./Navbar";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const homeLinks = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/portfolio" },
    { label: "Services", href: "/services" },
  ];

  const servicesLinks = [
    { label: "Custom Software", href: "/services/software-development" },
    { label: "Web Development", href: "/services/website-development" },
    { label: "Mobile Development", href: "/services/wordpress-development" },
  ];

  const quickLinks = [
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/testimonials" },
  ];

  const infoItems = [
    { label: "(065) 119-2930", href: "tel:+6567891234" },
    { label: "201 Air Street, 3rd Floor", href: "#" },
    { label: "support@kergix.com", href: "mailto:support@kergix.com" },
  ];

  return (
    <footer className="bg-bg-primary pt-20 pb-8 px-4 md:px-8 relative overflow-hidden z-10">
      {/* Footer ambient glow — matches reference bottom-edge glow */}
      <div className="glow-bg-footer" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <Link href="/" aria-label="Kergix home">
              <span className="font-heading font-bold text-xl text-text-primary tracking-tight">Kergix</span>
            </Link>
          </div>

          {/* Home column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-text-primary text-sm">Home</h4>
            <ul className="flex flex-col gap-2.5">
              {homeLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent-cyan text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-text-primary text-sm">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent-cyan text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Link column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-text-primary text-sm">Quick Link</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent-cyan text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-text-primary text-sm">Information</h4>
            <ul className="flex flex-col gap-2.5">
              {infoItems.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("mailto:") || item.href.startsWith("tel:") ? (
                    <a
                      href={item.href}
                      className="text-text-secondary hover:text-accent-cyan text-sm transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-text-secondary text-sm">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Privacy Policy row — matches reference top-right alignment */}
        <div className="flex justify-end pb-8">
          <Link href="/privacy" className="text-text-secondary hover:text-accent-cyan text-sm transition-colors">
            Privacy Policy
          </Link>
        </div>

        {/* Divider */}
        <div className="section-divider" />

        {/* Bottom row: socials + copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          {/* Social icons */}
          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border-subtle text-text-muted hover:text-accent-cyan hover:border-accent-cyan/40 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border-subtle text-text-muted hover:text-accent-cyan hover:border-accent-cyan/40 transition-all"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border-subtle text-text-muted hover:text-accent-cyan hover:border-accent-cyan/40 transition-all"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Terms */}
          <Link href="/terms" className="text-text-secondary hover:text-accent-cyan text-sm transition-colors">
            Term Of Condition
          </Link>
        </div>
      </div>
    </footer>
  );
}
