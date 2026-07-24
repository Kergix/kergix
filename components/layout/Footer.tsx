import React from "react";
import Link from "next/link";
import { KergixFooterLogo } from "@/components/shared/KergixFooterLogo";

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
  ];

  const infoItems = [
    { label: "contact@kergix.com", href: "mailto:contact@kergix.com" },
  ];

  return (
    <footer className="bg-black pt-24 pb-12 px-4 md:px-8 relative overflow-hidden border-t border-white/5 z-10">
      {/* Footer ambient glow */}
      <div className="glow-bg-footer pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10 lg:gap-12 pb-16">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2 flex flex-col gap-5">
            <Link href="/" aria-label="Kergix home" className="w-fit">
              <KergixFooterLogo />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Architecting premium digital experiences, enterprise-grade software systems, and modern web architectures for ambitious brands.
            </p>
          </div>

          {/* Home column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase text-xs opacity-40">Home</h4>
            <ul className="flex flex-col gap-3">
              {homeLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase text-xs opacity-40">Services</h4>
            <ul className="flex flex-col gap-3">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Link column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase text-xs opacity-40">Company</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase text-xs opacity-40">Inquiries</h4>
            <ul className="flex flex-col gap-3">
              {infoItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm transition-colors break-all"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-white/10" />

        {/* Bottom row: socials + copyright + terms */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 text-xs text-white/40">
          <div className="flex items-center gap-6">
            <span>&copy; {currentYear} Kergix. All rights reserved.</span>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>

          {/* Social icons */}
          <div className="flex gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
