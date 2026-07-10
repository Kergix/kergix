export interface Project {
  slug: string;
  title: string;
  category: string;
  client: string;
  challenge: string;
  solution: string;
  results: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  accentGradient: string; // e.g. "from-[#00E6FA] to-[#0082AA]"
}

export const portfolio: Project[] = [
  {
    slug: "nextgen-mls-portal",
    title: "Real-Time MLS Listing & Synchronization Portal",
    category: "Real Estate",
    client: "Apex Realty Group",
    challenge: "Apex Realty had a legacy IDX listing platform that took up to 6 hours to sync new property listings, resulting in outdated data and lost buyer inquiries. Their search maps were also slow and unresponsive on mobile devices.",
    solution: "We engineered a custom Next.js frontend with an optimized serverless backend API that connects to the RESO Web API. We implemented a cron job syncing properties every 15 minutes, using Redis for instant caching of listing payloads. We also integrated Mapbox GL JS with clustering for property visualizations.",
    results: "Listing synchronization times were reduced from 6 hours to less than 12 minutes. The mobile conversion rate increased by 45% because property detail pages loaded under 350ms, earning perfect 100/100 Core Web Vitals marks.",
    technologies: ["Next.js", "TypeScript", "Node.js", "Redis", "RESO Web API", "Mapbox GL JS", "Tailwind CSS"],
    metrics: [
      { label: "Sync Latency Reduction", value: "95%" },
      { label: "Mobile Conversions Lift", value: "45%" },
      { label: "Page Load Speed", value: "280ms" }
    ],
    accentGradient: "from-[#00E6FA] to-[#0082AA]"
  },
  {
    slug: "smart-fleet-dispatch",
    title: "AI-Powered Fleet Dispatch & Route Optimizer",
    category: "Logistics",
    client: "SwiftCargo Logistics",
    challenge: "SwiftCargo had dispatchers manually planning delivery stops for 120 regional trucks, leading to high fuel consumption, delayed shipments, and an inability to adapt to real-time traffic conditions.",
    solution: "We designed a WebSocket-enabled dispatch panel. The backend runs a route optimization model that calculates stops in real-time, taking truck capacities and road closures into account. Drivers receive turn-by-turn adjustments via an offline-capable web companion app.",
    results: "Fleet driving distance was reduced by 22% in the first quarter of deployment. Customer support calls regarding delivery updates decreased by 35% thanks to real-time SMS tracking pages.",
    technologies: ["React", "TypeScript", "WebSocket", "AWS Lambda", "PostgreSQL", "Google Maps API", "Tailwind CSS"],
    metrics: [
      { label: "Fuel Cost Reductions", value: "22%" },
      { label: "Dispatcher Automation", value: "80%" },
      { label: "On-Time Deliveries", value: "98.4%" }
    ],
    accentGradient: "from-[#00D2F0] to-[#0082AA]"
  },
  {
    slug: "headless-fashion-store",
    title: "Headless E-Commerce Migration & Stripe Engine",
    category: "E-Commerce",
    client: "VogueThreads UK",
    challenge: "During holiday sale rushes, VogueThreads' monolithic e-commerce store routinely crashed, and checkout loading times soared above 8 seconds, leading to a massive 65% shopping cart abandonment rate.",
    solution: "We migrated the storefront to a headless Next.js architecture using Shopify's Storefront API. Product pages were statically generated at build time and revalidated using ISR. We built a custom checkout process using Stripe Elements to handle one-click wallets.",
    results: "The website successfully handled a 4x traffic spike on Black Friday with 100% uptime. Checkout latency dropped to under 1.2s, resulting in a 30% increase in cart conversions.",
    technologies: ["Next.js", "Shopify API", "Stripe SDK", "Tailwind CSS", "Framer Motion", "Vercel Edge"],
    metrics: [
      { label: "Black Friday Uptime", value: "100%" },
      { label: "Conversion Lift", value: "30%" },
      { label: "LCP Score", value: "1.1s" }
    ],
    accentGradient: "from-[#00E6FA] to-[#00C8E6]"
  },
  {
    slug: "secure-citizen-registry",
    title: "WCAG-Accessible Document & Licensing Portal",
    category: "Government",
    client: "Metro Municipal Council",
    challenge: "The city's licensing system was built in 2008, failed accessibility tests, and did not support secure upload of citizenship documents, creating a backlog at city offices.",
    solution: "We engineered a clean, responsive portal that complies with WCAG 2.1 AA. We built secure file upload APIs that encrypt records at rest with AES-256 and store metadata in a PostgreSQL database behind a Web Application Firewall.",
    results: "Over 85,000 citizens successfully processed their license renewals online, reducing office foot traffic by 55%. The platform achieved a perfect audit from the government accessibility panel.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AWS S3 (KMS)", "PostgreSQL", "OWASP Hardening"],
    metrics: [
      { label: "Accessibility Score", value: "100/100" },
      { label: "Licensing Backlog Drop", value: "85%" },
      { label: "Offline foot traffic", value: "-55%" }
    ],
    accentGradient: "from-[#00D2F0] to-[#0082AA]"
  },
  {
    slug: "telehealth-clinic-portal",
    title: "HIPAA-Aligned Booking & Telehealth Room",
    category: "Healthcare",
    client: "CareFirst Medical Network",
    challenge: "CareFirst wanted to launch a remote consultation program but lacked a HIPAA-compliant scheduling database and did not want to pay high licensing fees for third-party medical software.",
    solution: "We constructed a secure telehealth portal. We integrated Twilio WebRTC for peer-to-peer video streams and built custom scheduling calendars. Patient data is encrypted, and backend access logs are stored in a read-only audit database.",
    results: "The system launched across 14 clinics, enabling over 12,000 video consultations. Patient no-shows dropped by 30% due to automated SMS scheduling notifications.",
    technologies: ["React", "TypeScript", "Twilio WebRTC", "Node.js", "PostgreSQL", "AES-256", "Tailwind CSS"],
    metrics: [
      { label: "Patient Consultations", value: "12,000+" },
      { label: "Appointment No-Shows", value: "-30%" },
      { label: "Security Audit Pass", value: "100%" }
    ],
    accentGradient: "from-[#00E6FA] to-[#0082AA]"
  },
  {
    slug: "pipeline-telemetry-dashboard",
    title: "Industrial Pipeline Telemetry & GIS Monitor",
    category: "Oil & Gas",
    client: "Nordic Energy Corp",
    challenge: "Nordic Energy had pipeline sensors transmitting telemetry data that was displayed on separate, disjointed platforms, making it difficult for control rooms to identify leaks quickly.",
    solution: "We developed a centralized telemetry monitor. Using WebSockets, the dashboard streams pressure, temperature, and flow data onto a real-time SVG grid, with alert markers mapped on a leaflet-driven GIS system.",
    results: "The control room's mean time to detect pressure drops and potential leaks dropped from 22 minutes to 1.5 seconds, preventing several ecological and costly hazards.",
    technologies: ["React", "TypeScript", "WebSocket", "Leaflet Maps", "InfluxDB (Time Series)", "Tailwind CSS", "SVG"],
    metrics: [
      { label: "Leak Detection Speed", value: "1.5s" },
      { label: "Centralized Sensors", value: "4,500" },
      { label: "Incident Avoidance", value: "100%" }
    ],
    accentGradient: "from-[#00C8E6] to-[#0082AA]"
  }
];
