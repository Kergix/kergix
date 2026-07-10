export interface Testimonial {
  author: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    author: "Richard Apex",
    role: "Chief Operating Officer",
    company: "Apex Realty Group",
    rating: 5,
    quote: "Kergix completely transformed our digital pipeline. Our listing synchronization dropped from hours to minutes, and the fast search map they built has significantly increased our mobile conversion rates. Their codebase is exceptionally clean and well-structured.",
    initials: "RA"
  },
  {
    author: "Elena Swift",
    role: "VP of Logistics Solutions",
    company: "SwiftCargo Logistics",
    rating: 5,
    quote: "The fleet tracking and dispatch optimizer Kergix built saved us 22% in fuel costs in the first three months. Their developers worked closely with our operations team, delivering a highly polished interface that our dispatchers love using.",
    initials: "ES"
  },
  {
    author: "Julius Vogue",
    role: "Founder & Creative Director",
    company: "VogueThreads UK",
    rating: 5,
    quote: "Our previous site crashed constantly during holiday sales. Kergix migrated us to a headless Shopify storefront that handled our Black Friday traffic surges with zero downtime. Checkouts are now instantaneous, and sales have soared.",
    initials: "JV"
  },
  {
    author: "Clara Care",
    role: "Director of Patient Services",
    company: "CareFirst Medical Network",
    rating: 5,
    quote: "We were worried about HIPAA data security compliance for our booking portal. Kergix constructed a robust, encrypted WebRTC booking system that passed our security audit with flying colors. Patient feedback has been outstanding.",
    initials: "CC"
  },
  {
    author: "William Energy",
    role: "Lead Instrumentation Engineer",
    company: "Nordic Energy Corp",
    rating: 5,
    quote: "Kergix's real-time telemetry dashboard has redefined how our control rooms monitor pipeline sensors. Pressure anomalies are detected and flagged on a Map interface within 1.5 seconds. Their technical engineering caliber is unmatched.",
    initials: "WE"
  }
];
