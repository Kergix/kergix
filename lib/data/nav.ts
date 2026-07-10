export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description: string }[];
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Website Development", href: "/services/website-development", description: "Modern React & Next.js web applications built for speed." },
      { label: "Software Development", href: "/services/software-development", description: "Bespoke APIs, custom databases, and workflow automation." },
      { label: "WordPress Development", href: "/services/wordpress-development", description: "Bespoke themes and custom Gutenberg blocks without bloat." },
      { label: "Artificial Intelligence", href: "/services/artificial-intelligence", description: "LLM integration, Pinecone vector RAG pipelines, chatbots." },
      { label: "SEO Optimization", href: "/services/seo-optimization", description: "Technical audits, Core Web Vitals tuning, and schema markups." },
      { label: "Cloud Solutions", href: "/services/cloud-solutions", description: "Terraform IaC blueprints, Docker containers, AWS scaling." },
      { label: "IT Consulting", href: "/services/it-consulting", description: "Architecture audits, engineering guidelines, tech roadmaps." },
      { label: "Cybersecurity Solutions", href: "/services/cybersecurity-solutions", description: "Penetration tests, AES encryptions, OWASP hardening." }
    ]
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Real Estate", href: "/industries/real-estate", description: "Fast IDX listing searches, agent panels, Mapbox GL charts." },
      { label: "Logistics", href: "/industries/logistics", description: "WebSocket fleets tracking, route optimization, shipping updates." },
      { label: "E-Commerce", href: "/industries/e-commerce", description: "Headless Shopify backends, Stripe engines, dynamic catalogs." },
      { label: "Government", href: "/industries/government", description: "WCAG-accessible citizen registries, document uploads." },
      { label: "Healthcare", href: "/industries/healthcare", description: "HIPAA-ready appointment calendars, telehealth WebRTC streams." },
      { label: "Oil & Gas", href: "/industries/oil-and-gas", description: "Refinery yield monitors, telemetry panels, sensor alerts." }
    ]
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "FAQ", href: "/faq", description: "Frequently asked questions regarding our software methodologies." },
      { label: "Testimonials", href: "/testimonials", description: "Read reviews and case results directly from our B2B clients." },
      { label: "About Us", href: "/about", description: "Learn about Kergix values, our approach, and engineering team." }
    ]
  },
  { label: "Contact", href: "/contact" }
];
