export interface PricingTier {
  name: string;
  price: string;
  startingPriceLabel: string;
  description: string;
  features: string[];
  ctaText: string;
  popular: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter Package",
    price: "Custom",
    startingPriceLabel: "Ideal for startups needing rapid landing pages & MVPs",
    description: "Build a solid foundation with modern performance standards, semantic code, and a clean, responsive interface.",
    features: [
      "Custom Next.js Website (Up to 5 Pages)",
      "Tailwind CSS Layout Styling",
      "Mobile-First Responsive Optimization",
      "Core Web Vitals Performance Audit (>90)",
      "Contact Form Integration (Resend API)",
      "SEO Metadata Configuration Set",
      "1 Month Post-Launch Maintenance Support"
    ],
    ctaText: "Request a Starter Quote",
    popular: false
  },
  {
    name: "Growth Scale",
    price: "Bespoke",
    startingPriceLabel: "Perfect for scaling businesses requiring custom apps & CMS",
    description: "Unlock advanced integrations, dynamic content pipelines, headless CMS hubs, and custom data visualizations.",
    features: [
      "Dynamic Web Application (Next.js App Router)",
      "Custom Gutenberg Blocks or Headless CMS sync",
      "Advanced Third-Party API Integrations",
      "Interactive SVG Animations & Custom Sliders",
      "Robust Database Schema Design (PostgreSQL/Redis)",
      "SEO JSON-LD Structured Schema Integration",
      "3 Months Dedicated Performance Tuning Support"
    ],
    ctaText: "Request a Growth Quote",
    popular: true
  },
  {
    name: "Enterprise Architecture",
    price: "Bespoke Enterprise",
    startingPriceLabel: "For large-scale, high-security, and high-volume platforms",
    description: "Deploy robust cloud orchestration, advanced penetration testing, HIPAA/SOC 2 compliance, and serverless data feeds.",
    features: [
      "Full-Scale Custom Software Engineering",
      "High-Traffic Headless E-Commerce Engines",
      "Infrastructure-as-Code Setup (Terraform + AWS)",
      "Real-Time WebSocket & Telemetry Dashboards",
      "Vulnerability Pentesting & Compliance Hardening",
      "AI/LLM retrieval pipelines (RAG setups)",
      "Dedicated 24/7 SLA Engineering Support Agreements"
    ],
    ctaText: "Get Enterprise Consulting",
    popular: false
  }
];
