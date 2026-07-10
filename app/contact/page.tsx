"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight, Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
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

  return (
    <div className="w-full flex flex-col relative overflow-hidden">
      {/* 1. Page Header (Breadcrumbs + H1) */}
      <section className="relative pt-36 pb-16 px-4 md:px-8 bg-bg-secondary border-b border-border-subtle">
        <div className="absolute right-[10%] top-0 w-[250px] h-[250px] bg-accent-cyan/10 rounded-full blur-[80px]" />
        <div className="max-w-7xl mx-auto flex flex-col gap-4 relative z-10">
          <div className="flex items-center gap-1.5 text-xs text-text-muted select-none">
            <Link href="/" className="hover:text-accent-cyan transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-secondary font-semibold">Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-text-primary tracking-tight leading-tight">
            Contact Us
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
            Ready to start your project? Drop us a line and our engineering team will connect with you.
          </p>
        </div>
      </section>

      {/* 2. Contact Section (Form left, Cards & Map right) */}
      <section className="py-24 px-4 md:px-8 bg-bg-primary relative overflow-hidden border-b border-border-subtle">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form Panel */}
          <div className="lg:col-span-7 relative z-10">
            <div className="glass-panel rounded-2xl p-6 md:p-8 relative">
              {submitStatus === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <CheckCircle2 className="w-16 h-16 text-success animate-bounce" />
                  <h3 className="text-2xl font-heading font-bold text-text-primary">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-text-secondary max-w-sm">
                    Thank you for reaching out. A Kergix technology representative will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="mt-4 px-6 py-2 rounded-full border border-border-strong text-accent-cyan hover:bg-bg-elevated transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name field */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-semibold text-text-secondary">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="e.g. Alex Kerg"
                        {...register("name")}
                        className={`w-full bg-bg-primary text-text-primary px-4 py-3 rounded-lg border focus:outline-none transition-all ${
                          errors.name
                            ? "border-danger focus:border-danger focus:ring-1 focus:ring-danger"
                            : "border-border-subtle focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan"
                        }`}
                      />
                      {errors.name && (
                        <span className="text-xs text-danger flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.name.message}
                        </span>
                      )}
                    </div>

                    {/* Phone field */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-text-secondary">
                        Phone Number (Optional)
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="e.g. +65 6789 1234"
                        {...register("phone")}
                        className={`w-full bg-bg-primary text-text-primary px-4 py-3 rounded-lg border focus:outline-none transition-all ${
                          errors.phone
                            ? "border-danger focus:border-danger focus:ring-1 focus:ring-danger"
                            : "border-border-subtle focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan"
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-xs text-danger flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.phone.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-text-secondary">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. contact@kergix.com"
                      {...register("email")}
                      className={`w-full bg-bg-primary text-text-primary px-4 py-3 rounded-lg border focus:outline-none transition-all ${
                        errors.email
                          ? "border-danger focus:border-danger focus:ring-1 focus:ring-danger"
                          : "border-border-subtle focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-danger flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold text-text-secondary">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Describe your project, timeline, target features..."
                      {...register("message")}
                      className={`w-full bg-bg-primary text-text-primary px-4 py-3 rounded-lg border focus:outline-none transition-all resize-none ${
                        errors.message
                          ? "border-danger focus:border-danger focus:ring-1 focus:ring-danger"
                          : "border-border-subtle focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan"
                      }`}
                    />
                    {errors.message && (
                      <span className="text-xs text-danger flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.message.message}
                      </span>
                    )}
                  </div>

                  {/* Error message block */}
                  {submitStatus === "error" && (
                    <div className="p-4 bg-danger/10 border border-danger/20 rounded-lg text-danger text-sm flex gap-2 items-start animate-fade-in">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit CTA button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative mt-2 px-6 py-4 rounded-lg bg-gradient-to-r from-[#00E6FA] via-[#00D2F0] to-[#0082AA] text-bg-primary font-heading font-bold text-base hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group shadow-[0_0_20px_rgba(0,210,240,0.2)]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-bg-primary border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Contact Cards & Maps */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full z-10">
            {/* Contact Details Card */}
            <div className="glass-panel p-6 md:p-8 rounded-2xl border border-border-subtle flex flex-col gap-6">
              <h3 className="font-heading font-bold text-xl md:text-2xl text-text-primary">
                Contact Details
              </h3>
              
              <ul className="flex flex-col gap-5">
                <li className="flex gap-4 items-start pb-4 border-b border-border-subtle/50">
                  <div className="p-3 bg-bg-primary rounded-xl border border-border-subtle text-accent-cyan shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-text-muted text-xs font-bold uppercase tracking-wider">Office Address</span>
                    <span className="text-text-primary text-sm md:text-base leading-relaxed">
                      12 Marina Blvd, Marina Bay, Singapore 018982
                    </span>
                  </div>
                </li>

                <li className="flex gap-4 items-start pb-4 border-b border-border-subtle/50">
                  <div className="p-3 bg-bg-primary rounded-xl border border-border-subtle text-accent-cyan shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-text-muted text-xs font-bold uppercase tracking-wider">Email Inquiry</span>
                    <a href="mailto:contact@kergix.com" className="text-accent-cyan hover:text-accent-cyan-bright text-sm md:text-base transition-colors leading-relaxed">
                      contact@kergix.com
                    </a>
                  </div>
                </li>

                <li className="flex gap-4 items-start pb-4 border-b border-border-subtle/50">
                  <div className="p-3 bg-bg-primary rounded-xl border border-border-subtle text-accent-cyan shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-text-muted text-xs font-bold uppercase tracking-wider">Call Hotline</span>
                    <a href="tel:+6567891234" className="text-text-primary hover:text-accent-cyan text-sm md:text-base transition-colors leading-relaxed">
                      +65 6789 1234
                    </a>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <div className="p-3 bg-bg-primary rounded-xl border border-border-subtle text-accent-cyan shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-text-muted text-xs font-bold uppercase tracking-wider">Business Hours</span>
                    <span className="text-text-primary text-sm md:text-base leading-relaxed">
                      Monday - Friday: 9:00 AM - 6:00 PM (SGT)
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Lazy-Loaded Iframe Map Embed */}
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border-subtle shadow-xl bg-bg-secondary relative">
              <iframe
                title="Kergix Singapore Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8199224409395!2d103.8519!3d1.2796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190d79d72cc7%3A0x6a23730e7fa38a4d!2sMarina%20Bay%20Financial%20Centre!5e0!3m2!1sen!2ssg!4v1700000000000!5m2!1sen!2ssg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 invert filter brightness-[0.85] contrast-[0.95]"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
