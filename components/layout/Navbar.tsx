"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Cpu, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, NavItem } from "@/lib/data/nav";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Monitor scrolling to add frosted glass visual depth
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
            ? "bg-bg-primary/80 backdrop-blur-md border-b border-border-subtle py-3"
            : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between relative">
          {/* Logo link */}
          <Link href="/" className="flex items-center gap-2.5 group/logo" aria-label="Kergix home page">
            <Image
              src="/kergix-mark-mono.png"
              alt=""
              width={256}
              height={235}
              priority
              className="h-9 w-auto select-none transition-transform duration-300 group-hover/logo:scale-105"
            />
            <span className="font-heading font-bold text-xl text-text-primary tracking-tight transition-colors group-hover/logo:text-metal-light">
              Kergix
            </span>
          </Link>

          {/* Desktop Navigation Link bar — centered */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => {
              const hasDropdown = !!item.children;
              const isItemActive = pathname === item.href || (item.children?.some(child => pathname === child.href));

              return (
                <div
                  key={item.label}
                  className="relative group py-2"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-semibold flex items-center gap-1.5 transition-colors focus:outline-none ${isItemActive
                        ? "text-text-primary"
                        : "text-text-secondary hover:text-white"
                      }`}
                  >
                    <span>{item.label}</span>
                    {hasDropdown && (
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    )}
                    {/* Active underline indicator */}
                    {isItemActive && (
                      <span className="absolute -bottom-0.5 left-4 right-4 h-0.5 rounded-full bg-silver-bright shadow-[0_0_8px_rgba(255,255,255,0.45)]" />
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] max-w-[80vw] bg-bg-elevated border border-border-strong rounded-xl p-4 mt-2 grid grid-cols-2 gap-4 shadow-2xl glass-panel"
                        >
                          {item.children?.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={`p-3 rounded-lg flex flex-col gap-1 transition-all ${pathname === child.href
                                  ? "bg-white/8 border border-white/20"
                                  : "hover:bg-white/5 hover:border-white/10 border border-transparent"
                                }`}
                            >
                              <span className="font-heading font-bold text-sm text-text-primary transition-colors">
                                {child.label}
                              </span>
                              <span className="text-[11px] text-text-muted leading-snug">
                                {child.description}
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg border border-border-subtle bg-bg-secondary text-text-primary focus:outline-none"
            aria-label="Toggle Navigation Drawer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg-primary/95 lg:hidden flex flex-col pt-24 px-6 overflow-y-auto"
          >
            {/* Ambient glows inside drawer */}
            <div className="absolute right-[-10%] top-[-10%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]" />
            <div className="absolute left-[-10%] bottom-[-10%] w-[300px] h-[300px] bg-white/4 rounded-full blur-[80px]" />

            <div className="flex flex-col gap-6 w-full max-w-lg mx-auto pb-10 z-10">
              {navItems.map((item) => {
                const hasDropdown = !!item.children;
                const isDropdownOpen = activeDropdown === item.label;

                return (
                  <div key={item.label} className="flex flex-col gap-2">
                    {hasDropdown ? (
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="w-full text-left font-heading font-bold text-xl text-text-primary py-2 flex items-center justify-between border-b border-border-subtle"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-text-secondary transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="font-heading font-bold text-xl text-text-primary py-2 border-b border-border-subtle block"
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* Mobile Expandable dropdown items */}
                    {hasDropdown && isDropdownOpen && (
                      <div className="flex flex-col gap-3 pl-4 pt-2 pb-2 bg-bg-secondary/40 rounded-xl border border-border-subtle mt-1">
                        {item.children?.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="flex flex-col gap-0.5 py-1.5"
                          >
                            <span className="font-heading font-bold text-sm text-text-primary">
                              {child.label}
                            </span>
                            <span className="text-[10px] text-text-muted">
                              {child.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-6 w-full py-4 rounded-xl btn-metal font-heading font-bold text-base text-center flex items-center justify-center gap-2"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
