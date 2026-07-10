"use client";

import React from "react";
import Link from "next/link";
import { services, Service } from "@/lib/data/services";

interface ServiceCapabilityListProps {
  limit?: number;
  highlightedSlug?: string;
}

export default function ServiceCapabilityList({ limit, highlightedSlug }: ServiceCapabilityListProps) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <div className="w-full flex flex-col">
      {displayServices.map((service, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={service.slug}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center py-10 md:py-14 border-b border-border-subtle/40 last:border-b-0"
          >
            {/* Column A: Name + Description + bullet points (left for even, right for odd) */}
            <div
              className={`md:col-span-6 flex flex-col gap-4 ${
                isEven ? "md:order-1" : "md:order-2"
              }`}
            >
              {/* Bullet points — shown on left side for odd rows */}
              {!isEven && (
                <div className="flex flex-col gap-3 mb-2">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center cyan-bullet text-text-secondary text-sm">
                      {feat}
                    </div>
                  ))}
                </div>
              )}

              <h3 className="text-xl md:text-2xl font-heading font-bold text-text-primary">
                {service.name}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed max-w-lg">
                {service.longDescription}
              </p>

              {/* Bullet points — shown on left side for even rows */}
              {isEven && (
                <div className="flex flex-col gap-3 mt-2">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center cyan-bullet text-text-secondary text-sm">
                      {feat}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Column B: Bullet points on opposite side */}
            <div
              className={`md:col-span-6 flex flex-col gap-4 ${
                isEven ? "md:order-2" : "md:order-1"
              }`}
            >
              {isEven ? (
                <div className="flex flex-col gap-3">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center cyan-bullet text-text-secondary text-sm">
                      {benefit}
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-text-primary md:hidden">
                    {service.name}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-lg md:hidden">
                    {service.longDescription}
                  </p>
                  <div className="flex flex-col gap-3">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center cyan-bullet text-text-secondary text-sm">
                        {benefit}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
