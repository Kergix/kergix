export interface IndustrySolution {
  title: string;
  description: string;
  highlighted?: boolean;
}

export interface Industry {
  slug: string;
  name: string;
  iconName: string;
  shortDescription: string;
  tagline: string;
  longDescription: string;
  solutions: IndustrySolution[];
  benefitsChecklist: string[];
  metrics: { label: string; value: string }[];
}

export const industries: Industry[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    iconName: "Building",
    shortDescription: "Custom CRM integrations, MLS feeds, and advanced property search tools for brokerage platforms.",
    tagline: "Digitizing Property Management and Brokerage Operations",
    longDescription: "The real estate market demands high-performance property searches, real-time map mapping, and clean data indexing. We develop custom IDX/MLS feeds and CRM portals that connect directly to your database, enabling estate agents and brokers to manage listings, track customer relationships, and serve users with fast, filterable maps and search indices.",
    solutions: [
      { title: "IDX/MLS Feed Synchronization", description: "Automated cron jobs syncing listings every 15 minutes with high performance caching." },
      { title: "Custom Agent/Client Portal", description: "Secure, interactive dashboard allowing agents to share listings and clients to save favorites.", highlighted: true },
      { title: "Interactive Interactive Mapping", description: "Custom Mapbox integrations loading thousands of properties smoothly with visual clustering." }
    ],
    benefitsChecklist: [
      "Eliminate manual listing uploads with custom RETS/Reso API sync",
      "Convert 40% more visitors with responsive maps and fast filters",
      "Automate email alerts to clients on new price cuts and listings",
      "Deliver speed optimization yielding Lighthouse performance scores >90"
    ],
    metrics: [
      { label: "Sync Latency Reduction", value: "85%" },
      { label: "Client Conversion Increase", value: "45%" },
      { label: "Search Loading Time", value: "0.4s" }
    ]
  },
  {
    slug: "logistics",
    name: "Logistics",
    iconName: "Truck",
    shortDescription: "Fleet tracking interfaces, automated route planning utilities, and dashboard delivery integrations.",
    tagline: "Powering Supply Chains with Real-Time Data Visibility",
    longDescription: "Efficiency in logistics requires real-time location insights, route optimization engines, and seamless freight coordination. We design logistics platforms and dashboards that connect IoT tracking devices to cloud databases, allowing dispatcher panels to organize shipments, estimate delivery times, and reduce fuel overhead.",
    solutions: [
      { title: "Real-Time Fleet Dashboards", description: "WebSocket-driven panels displaying vehicle coordinates, driver status, and alerts in real-time." },
      { title: "Automated Dispatch Routings", description: "Route optimization algorithms sorting stops for delivery vehicles based on traffic and capacity.", highlighted: true },
      { title: "Customer Track & Trace Gateways", description: "Self-service tracking pages with progress indicators and SMS notifications via Twilio." }
    ],
    benefitsChecklist: [
      "Increase fleet utilization by optimizing delivery drop-off schedules",
      "Reduce customer support load with self-service map tracking pages",
      "Collect telemetric data (speed, engine health) via unified API portals",
      "Integrate legacy warehouse inventory systems with modern web panels"
    ],
    metrics: [
      { label: "Fleet Routing Efficiency", value: "22%" },
      { label: "Support Ticket Reduction", value: "35%" },
      { label: "Average Response Latency", value: "80ms" }
    ]
  },
  {
    slug: "e-commerce",
    name: "E-Commerce",
    iconName: "ShoppingBag",
    shortDescription: "High-volume commerce architectures, custom headless integrations, and cart checkout logic.",
    tagline: "Headless E-Commerce Built for Speed and Scale",
    longDescription: "Slow checkouts and clunky mobile layouts lose sales. We design custom e-commerce stores using headless frameworks (like Shopify Storefront API, BigCommerce, or WooCommerce) paired with Next.js frontends. This delivers instantaneous transitions, customizable checkouts, and clean product catalogs that load instantly even under seasonal traffic spikes.",
    solutions: [
      { title: "Headless Storefront Frontend", description: "Next.js pages loading product listings, variants, and reviews instantly with SSG caching." },
      { title: "Custom Checkout & Stripe Flow", description: "One-click checkouts supporting Apple Pay, Google Pay, and localized bank rails.", highlighted: true },
      { title: "ERP & Inventory Syncing", description: "Integrations that keep store stock, ERP registers, and warehouse shipping lines perfectly aligned." }
    ],
    benefitsChecklist: [
      "Achieve near-instant page transitions, slashing abandonment rates by 25%",
      "Manage massive marketing campaign traffic without catalog loading lag",
      "Integrate multi-currency and multi-language features effortlessly",
      "Deploy custom personalization engines to boost average order value"
    ],
    metrics: [
      { label: "Cart Conversion Lift", value: "30%" },
      { label: "Mobile Bounce Rate Drop", value: "40%" },
      { label: "Product Load Velocity", value: "0.2s" }
    ]
  },
  {
    slug: "government",
    name: "Government",
    iconName: "ShieldAlert",
    shortDescription: "Highly accessible, secure public platforms complying with WCAG and strict data requirements.",
    tagline: "Secure, Accessible Web Infrastructure for Public Services",
    longDescription: "Public agency websites must remain accessible to all citizens while maintaining strict data compliance and protection. We build web solutions that comply with WCAG 2.1 AA accessibility rules, utilize secure encryption, and perform robust page loads under high concurrent usage.",
    solutions: [
      { title: "WCAG 2.1 AA Compliant UIs", description: "Semantic, screen-reader friendly designs tested thoroughly with keyboard navigation." },
      { title: "Secure Citizen Portal Pages", description: "Hardened user login gates for submitting documents, paying fees, and tracking permits.", highlighted: true },
      { title: "Optimized Document Registries", description: "Fast, database-indexed directories allowing citizens to search files and records." }
    ],
    benefitsChecklist: [
      "Ensure compliance with federal and regional web accessibility mandates",
      "Safeguard private citizen records with AES-256 data encryption guidelines",
      "Maximize uptime during high traffic events (tax deadlines, election alerts)",
      "Construct layouts that render cleanly on low-bandwidth connections"
    ],
    metrics: [
      { label: "Accessibility Compliance", value: "100%" },
      { label: "Infrastructure Uptime", value: "99.99%" },
      { label: "API Validation Speed", value: "120ms" }
    ]
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    iconName: "HeartPulse",
    shortDescription: "Patient engagement portals, secure scheduling interfaces, and telehealth infrastructure integrations.",
    tagline: "Connecting Doctors and Patients with Secure Web Platforms",
    longDescription: "Healthcare websites and portals demand strict user confidentiality and clear communication. We design secure patient booking engines, telemedicine dashboards, and staff scheduling panels that prioritize HIPAA-ready structure, data protection, and friendly user interfaces.",
    solutions: [
      { title: "Secure Patient Scheduling", description: "HIPAA-aligned calendars showing availability and locking bookings without overlap." },
      { title: "Telehealth Video Portals", description: "Encrypted WebRTC video chat rooms for remote consultations integrated into patient flows.", highlighted: true },
      { title: "EHR Data Integration Modules", description: "Secure APIs connecting website fields to internal electronic health records." }
    ],
    benefitsChecklist: [
      "Simplify patient booking flows, reducing missed appointments by 30%",
      "Protect patient record integrity with role-based access logs",
      "Deliver responsive telehealth dashboards that operate on mobile devices",
      "Hardened backend connections that prevent medical record leaks"
    ],
    metrics: [
      { label: "No-Show Rate Drop", value: "30%" },
      { label: "Patient Booking Speed", value: "2m" },
      { label: "Encryption Security", value: "AES-256" }
    ]
  },
  {
    slug: "oil-and-gas",
    name: "Oil & Gas",
    iconName: "Flame",
    shortDescription: "Operational status dashboards, sensor tracking portals, and logistics coordination pipelines.",
    tagline: "Visualizing Energy Data in Complex Systems",
    longDescription: "Industrial operations require robust dashboards to visualize pipeline metrics, refinery schedules, and field engineer schedules. We build high-availability portals that process telemetry data, rendering real-time SVG charts and GIS map coordinates.",
    solutions: [
      { title: "IoT Sensor Visualizations", description: "High-frequency dashboard widgets drawing pressure, heat, and flow data from pipes." },
      { title: "Field Dispatch Coordinations", description: "Panels scheduling technicians to repair locations using geo-routing rules.", highlighted: true },
      { title: "Refinery Yield Dashboards", description: "Operations tracking showing resource inputs, daily barrels processed, and safety logs." }
    ],
    benefitsChecklist: [
      "Streamline industrial sensor monitoring with secure data streams",
      "Coordinate operations across offshore rigs and onshore offices",
      "Reduce response latency when warning flags trigger in telemetry systems",
      "Deploy offline-first service forms for engineers in remote oilfields"
    ],
    metrics: [
      { label: "Sensor Refresh Cycle", value: "1.5s" },
      { label: "Incident Dispatch Speed", value: "15%" },
      { label: "Telemetry Accuracy", value: "99.9%" }
    ]
  }
];
