"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { contactSchema, ContactFormData } from "@/lib/validations/contactSchema";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit request.");
      }

      setSubmitStatus("success");
      reset();
    } catch (err: any) {
      setSubmitStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (hasError: boolean) =>
    `w-full bg-[#070707] text-white placeholder:text-white/30 px-5 py-4 rounded-2xl border transition-all text-sm focus:outline-none ${
      hasError
        ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/20"
        : "border-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/10"
    }`;

  return (
    <div className="w-full flex flex-col relative overflow-hidden bg-black min-h-screen">
      {/* Background dot pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* 1. Page Header (Breadcrumbs + H1) */}
      <section className="relative pt-36 pb-16 px-4 md:px-8 border-b border-white/5 bg-[#030303]">
        <div className="absolute right-[10%] top-0 w-[250px] h-[250px] bg-white/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col gap-4 relative z-10">
          <div className="flex items-center gap-1.5 text-xs text-white/40 select-none">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70 font-semibold">Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Contact Us
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
            Ready to start your project? Drop us a line and our engineering team will connect with you.
          </p>
        </div>
      </section>

      {/* 2. Contact Section (Copy left, Form right) */}
      <section className="py-20 md:py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          
          {/* Left Column: Copy & Metadata */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <span className="text-white/40 font-heading text-xs font-bold uppercase tracking-widest">
                Official Channels
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white tracking-tight leading-[1.2]">
                Let&apos;s discuss your engineering requirements.
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mt-2 max-w-md">
                Whether you are looking to scale your engineering team, design a new system architecture, or develop an enterprise-grade application, we are here to support your goals.
              </p>
            </div>

            {/* Inquiries Card */}
            <div className="pt-6 border-t border-white/10 max-w-md">
              <div className="flex items-center gap-5 p-6 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all group/card">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/card:bg-white/10 transition-colors">
                  <Mail className="w-5 h-5 text-white/70 group-hover/card:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Client &amp; Project Inquiries</h4>
                  <a
                    href="mailto:contact@kergix.com"
                    className="text-white text-base font-semibold mt-0.5 hover:text-white/80 transition-colors block"
                  >
                    contact@kergix.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Panel */}
          <div className="lg:col-span-7">
            <div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 lg:p-12 rounded-[2.5rem] relative overflow-hidden shadow-2xl shadow-black/50">
              {/* Subtle inner glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-[80px] pointer-events-none" />

              {submitStatus === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-16 gap-6">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-heading font-bold text-white tracking-tight">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-white/60 text-sm max-w-sm">
                      Thank you for reaching out. A Kergix engineering representative will contact you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="mt-4 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all text-xs font-semibold tracking-wide uppercase"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold text-white/50 uppercase tracking-wider ml-1">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      {...register("name")}
                      className={inputClasses(!!errors.name)}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-400 flex items-center gap-1.5 mt-1 ml-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Phone + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-xs font-bold text-white/50 uppercase tracking-wider ml-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="Phone Number"
                        {...register("phone")}
                        className={inputClasses(!!errors.phone)}
                      />
                      {errors.phone && (
                        <span className="text-xs text-red-400 flex items-center gap-1.5 mt-1 ml-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.phone.message}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-bold text-white/50 uppercase tracking-wider ml-1">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Email Address"
                        {...register("email")}
                        className={inputClasses(!!errors.email)}
                      />
                      {errors.email && (
                        <span className="text-xs text-red-400 flex items-center gap-1.5 mt-1 ml-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-bold text-white/50 uppercase tracking-wider ml-1">
                      Details
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Describe your project, timeline, target features..."
                      {...register("message")}
                      className={`${inputClasses(!!errors.message)} resize-none`}
                    />
                    {errors.message && (
                      <span className="text-xs text-red-400 flex items-center gap-1.5 mt-1 ml-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.message.message}
                      </span>
                    )}
                  </div>

                  {/* Error message block */}
                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm flex gap-3 items-start animate-shake">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit CTA button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-fit px-8 py-4 rounded-full bg-white text-black font-heading font-extrabold text-sm hover:bg-white/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5 text-black" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
