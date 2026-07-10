"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { contactSchema, ContactFormData } from "@/lib/validations/contactSchema";
import CTADecorative from "./CTADecorative";

export default function CTAFormSection() {
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
    `w-full bg-bg-primary/80 text-text-primary placeholder:text-text-muted/50 px-4 py-3.5 rounded-xl border focus:outline-none transition-all text-sm ${
      hasError
        ? "border-danger focus:border-danger focus:ring-1 focus:ring-danger"
        : "border-border-subtle/60 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/30"
    }`;

  return (
    <section className="py-20 md:py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Dark elevated card wrapper — matches reference */}
        <div className="dark-card p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle glow inside the card */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
            {/* Left: Title + Form */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary tracking-tight leading-tight">
                  Ready to Start<br />
                  Your Project?
                </h2>
              </div>

              {submitStatus === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <CheckCircle2 className="w-16 h-16 text-success animate-bounce" />
                  <h3 className="text-2xl font-heading font-bold text-text-primary">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-text-secondary max-w-sm">
                    Thank you for reaching out. A Kergix representative will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="mt-4 px-6 py-2.5 rounded-full border border-border-strong text-accent-cyan hover:bg-bg-elevated transition-all text-sm font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <input
                      id="name"
                      type="text"
                      placeholder="Name"
                      {...register("name")}
                      className={inputClasses(!!errors.name)}
                    />
                    {errors.name && (
                      <span className="text-xs text-danger flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Phone + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <input
                        id="phone"
                        type="tel"
                        placeholder="Phone"
                        {...register("phone")}
                        className={inputClasses(!!errors.phone)}
                      />
                      {errors.phone && (
                        <span className="text-xs text-danger flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.phone.message}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        {...register("email")}
                        className={inputClasses(!!errors.email)}
                      />
                      {errors.email && (
                        <span className="text-xs text-danger flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Message"
                      {...register("message")}
                      className={`${inputClasses(!!errors.message)} resize-none`}
                    />
                    {errors.message && (
                      <span className="text-xs text-danger flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.message.message}
                      </span>
                    )}
                  </div>

                  {/* Error message */}
                  {submitStatus === "error" && (
                    <div className="p-3 bg-danger/10 border border-danger/20 rounded-lg text-danger text-sm flex gap-2 items-start">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-fit px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-cyan via-accent-cyan-mid to-accent-teal-deep text-bg-primary font-heading font-bold text-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group shadow-[0_0_24px_rgba(0,210,240,0.25)]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-bg-primary border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
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

            {/* Right: Decorative graphic */}
            <div className="lg:col-span-5 hidden lg:block overflow-visible">
              <CTADecorative />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
