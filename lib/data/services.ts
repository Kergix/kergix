export interface Service {
  slug: string;
  name: string;
  iconName: string; // Map to Lucide icon string
  shortDescription: string;
  longDescription: string;
  features: string[];
  process: { title: string; description: string }[];
  benefits: string[];
}

export const services: Service[] = [
  {
    slug: "website-development",
    name: "Website Development",
    iconName: "Globe",
    shortDescription: "High-performance, responsive websites built with modern frameworks to engage users and drive conversions.",
    longDescription: "Our website development service focuses on creating blazingly fast, visually stunning, and conversion-optimized websites. We leverage modern web standards and cutting-edge frontend frameworks like Next.js to deliver websites that load instantly, score perfect SEO audits, and provide seamless user experiences across all devices. From high-growth startup landing pages to complex corporate portals, we build web architectures that grow with your business.",
    features: [
      "Custom React & Next.js Development",
      "Jamstack & Headless CMS Architectures",
      "SEO-First Semantic HTML Structure",
      "Core Web Vitals & Performance Optimization",
      "Adaptive & Responsive Mobile-First Design",
      "Interactive Animations & Micro-interactions"
    ],
    process: [
      { title: "Discovery & Blueprinting", description: "We define user flows, map out site architecture, and align on visual design guidelines." },
      { title: "UI/UX High-Fidelity Design", description: "We craft interactive wireframes and design systems in dark mode and brand colors." },
      { title: "Production-Grade Engineering", description: "Our developers build clean, modular code with React, Next.js, and Tailwind CSS." },
      { title: "Performance Tuning & Launch", description: "We optimize LCP/CLS metrics and deploy on Vercel edge networks for maximum speed." }
    ],
    benefits: [
      "Improve conversion rates with sub-second loading times.",
      "Achieve top search engine rankings with semantic code frameworks.",
      "Scale traffic indefinitely without worrying about server crashes."
    ]
  },
  {
    slug: "software-development",
    name: "Software Development",
    iconName: "Code",
    shortDescription: "Custom web applications, backend APIs, and enterprise software solutions tailored to your unique requirements.",
    longDescription: "We build bespoke software applications that automate workflows, streamline operations, and solve complex business problems. Our senior engineers design and implement robust architectures utilizing Node.js, TypeScript, Python, and modern relational/NoSQL databases. Whether you need a customer dashboard, SaaS platform, internal operations portal, or database migrations, we construct systems focused on security, maintainability, and clean code principles.",
    features: [
      "Custom SaaS & Web Application Engineering",
      "Robust REST & GraphQL API Design",
      "Database Modeling & Performance Tuning",
      "Third-Party Integration & Middleware",
      "Automated CI/CD Pipelines & Testing",
      "State Management & Real-time Synchronization"
    ],
    process: [
      { title: "Requirements Analysis", description: "We translate business processes into system schemas, API designs, and feature specifications." },
      { title: "Database & API Modeling", description: "We map out ERDs and endpoints in TypeScript to ensure strong contract integrity." },
      { title: "Agile Feature Sprints", description: "We build features iteratively, shipping updates weekly to a staging environment." },
      { title: "Automated Testing & Deployment", description: "We execute unit tests, integration pipelines, and release to scalable servers." }
    ],
    benefits: [
      "Automate manual business tasks to save hours of operating costs.",
      "Achieve high software reliability with TypeScript-typed codebases.",
      "Expand functionality seamlessly using modular service patterns."
    ]
  },
  {
    slug: "wordpress-development",
    name: "WordPress Development",
    iconName: "Layout",
    shortDescription: "Custom Gutenberg blocks, bespoke theme engineering, and WooCommerce integrations for flexible content management.",
    longDescription: "We design custom WordPress solutions that escape template bloat. By engineering custom Gutenberg blocks, building bespoke light themes, and developing tailor-made plugins, we provide you with the easy-to-use editor experience of WordPress combined with the performance and security standards of modern custom web apps. We also build secure, high-traffic WooCommerce stores that integrate seamlessly with ERP and payment systems.",
    features: [
      "Bespoke Gutenberg Custom Block Development",
      "Lightweight, Asset-Optimized Themes",
      "WooCommerce Store Engineering & Scaling",
      "Custom Plugin Engineering & Integrations",
      "Security Auditing & Core Hardening",
      "Automated Staging-to-Production Workflows"
    ],
    process: [
      { title: "Content Architecture Setup", description: "We map custom post types, fields, and editor requirements for your content creators." },
      { title: "Bespoke Theme & Blocks Development", description: "We write clean PHP/React code for blocks, loading only necessary CSS assets." },
      { title: "WooCommerce & Extension Setup", description: "We wire payment gateways, tax calculation tables, and shipping rules." },
      { title: "Speed Optimization & Go-Live", description: "We configure object caching, asset CDNs, and robust database queries." }
    ],
    benefits: [
      "Empower your marketing team with a fully custom Gutenberg page builder.",
      "Reduce page load time and bounce rates compared to off-the-shelf templates.",
      "Ensure data safety with hardened database configurations and automated backups."
    ]
  },
  {
    slug: "artificial-intelligence",
    name: "Artificial Intelligence",
    iconName: "Cpu",
    shortDescription: "Intelligent features, chatbot integrations, and LLM-powered applications to revolutionize your operations.",
    longDescription: "Bring the power of Generative AI and Machine Learning to your customer-facing tools and backend operations. We build pipelines using LangChain, OpenAI, and Claude APIs, as well as custom vector databases like Pinecone for retrieval-augmented generation (RAG). From semantic document search tools and contextual customer agents to custom data classification models, we bridge the gap between AI theory and active business utility.",
    features: [
      "RAG (Retrieval-Augmented Generation) Systems",
      "Custom LLM Integrations (GPT-4, Claude 3.5)",
      "Cognitive Agents & Automated Customer Chatbots",
      "Natural Language Processing & Classification",
      "Vector Database Vectorization (Pinecone, pgvector)",
      "Prompt Engineering & Token Budget Optimization"
    ],
    process: [
      { title: "AI Feasibility Analysis", description: "We analyze your internal data corpus and identify the optimal LLM and integration patterns." },
      { title: "RAG & Vector Pipeline Setup", description: "We process documents, generate embeddings, and build context retrievers." },
      { title: "UI/UX & API Construction", description: "We engineer conversational panels, streaming APIs, and fallback guardrails." },
      { title: "Evaluation & Prompt Tuning", description: "We benchmark response latency, test accuracy, and optimize API consumption cost." }
    ],
    benefits: [
      "Respond to customer inquiries instantly with deep contextual knowledge.",
      "Extract insights from millions of unstructured text documents automatically.",
      "Lower operational costs by automating data entry and routing pipelines."
    ]
  },
  {
    slug: "seo-optimization",
    name: "SEO Optimization",
    iconName: "TrendingUp",
    shortDescription: "Strategic technical search engine audits, on-page optimization, and semantic schemas to grow organic traffic.",
    longDescription: "Organic search is the highest-value channel for B2B and consumer web platforms. Our technical SEO services ensure your web applications are perfectly understandable by search crawlers. We audit site architecture, configure advanced JSON-LD structured schemas, resolve indexation issues, and optimize core web vitals. Beyond technical audits, we build search-optimized layout templates that highlight your core landing pages and maximize search engine rankings.",
    features: [
      "Deep Core Web Vitals Optimization",
      "Rich Snippets & JSON-LD Structured Data Schema",
      "XML Sitemap & Robots.txt Routing",
      "Canonicalization & Crawl Budget Audits",
      "Page Speed, Asset Optimization, and Semantic HTML",
      "Keyword & Competitive Search Intent Research"
    ],
    process: [
      { title: "SEO Crawl Audit", description: "We identify indexation blocks, duplicate contents, and bad status codes using SEO crawlers." },
      { title: "Schema Layout Design", description: "We structure metadata rules for pages, blogs, services, and local locations." },
      { title: "Performance Refinement", description: "We compress images, optimize asset loads, and ensure high-score mobile usability." },
      { title: "Indexation & Google Console Setup", description: "We index clean canonical pages and monitor search impressions and rankings." }
    ],
    benefits: [
      "Capture targeted client search queries by ranking higher in Google results.",
      "Obtain rich snippets and higher CTRs through robust structured schema.",
      "Maintain search equity across rebuilds with zero broken paths."
    ]
  },
  {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    iconName: "Cloud",
    shortDescription: "AWS/GCP architectures, Docker containers, Kubernetes orchestration, and serverless scaling strategies.",
    longDescription: "We construct reliable cloud architectures designed to handle millions of requests without breaking the bank. Our cloud specialists build automated, infrastructure-as-code deployments using Terraform, AWS, and GCP. We migrate legacy monolithic applications to isolated Docker containers, orchestrate with Kubernetes, and build serverless API structures that automatically scale with user demand, keeping operational maintenance overhead to a minimum.",
    features: [
      "AWS & Google Cloud Infrastructure Design",
      "Infrastructure-as-Code (Terraform) Templates",
      "Docker Containerization & Kubernetes Deployments",
      "Serverless Architectures & Edge Edge Computing",
      "Continuous Integration & Continuous Deployment (CI/CD)",
      "Cloud Cost Audit & Optimization Services"
    ],
    process: [
      { title: "Architecture Blueprinting", description: "We design multi-availability zone networks, load balancers, and db setups." },
      { title: "IaC & Scripting", description: "We write clean Terraform setups to make deployment steps version-controlled." },
      { title: "Container Setup", description: "We package app modules into Docker containers and configure container settings." },
      { title: "Monitoring & Recovery Setup", description: "We configure Prometheus dashboard graphs, alert systems, and backups." }
    ],
    benefits: [
      "Achieve 99.99% system uptime with auto-scaling instances.",
      "Spin up identical staging/testing servers in seconds using Terraform scripts.",
      "Reduce server overhead costs by transitioning to serverless architectures."
    ]
  },
  {
    slug: "it-consulting",
    name: "IT Consulting",
    iconName: "Users",
    shortDescription: "Strategic technology roadmap consulting, architecture reviews, and engineering team training processes.",
    longDescription: "Navigate complex technology transitions with confidence. Our senior IT consulting services provide your leadership team with the architectural foresight, risk analysis, and software roadmap blueprints needed to succeed. We conduct thorough audits of legacy codebases, perform security vulnerability reviews, plan digital transformations, and train internal development teams on agile engineering practices and modern stack architectures.",
    features: [
      "Technology Stacks & Architecture Audits",
      "Software Engineering Roadmap Blueprinting",
      "Legacy Migration & Cloud Re-architecting Plan",
      "Team Technical Training & Agile Mentorship",
      "Data Analytics & Business Intelligence Blueprint",
      "Disaster Recovery & Risk Mitigation Planning"
    ],
    process: [
      { title: "Discovery Interview", description: "We audit your existing development team setup, legacy pipelines, and software tools." },
      { title: "Architecture Analysis", description: "We run vulnerability tests, find code bottlenecks, and analyze cost models." },
      { title: "Strategic Recommendations", description: "We construct a phased engineering roadmap outlining tools, steps, and budgets." },
      { title: "Execution Advisory", description: "We work alongside your teams during migration sprints to ensure correct implementation." }
    ],
    benefits: [
      "Avoid expensive technical debt by making right architecture choices early.",
      "Elevate your internal team's engineering standards and velocity.",
      "Reduce system risk with professional disaster recovery blueprints."
    ]
  },
  {
    slug: "cybersecurity-solutions",
    name: "Cybersecurity Solutions",
    iconName: "Shield",
    shortDescription: "Advanced penetration testing, data encryption, compliance hardening, and active threat mitigation.",
    longDescription: "Protect your customer data and build business trust with comprehensive cybersecurity services. We implement security protocols including HTTPS configurations, JWT token protocols, encryption-at-rest/in-transit, and API rate-limiting. Our certified security specialists conduct vulnerability scans, set up identity access controls, and configure firewalls to prevent SQL injections, cross-site scripting (XSS), and data leaks, ensuring compliance with industry standards.",
    features: [
      "Penetration Testing & Vulnerability Assessment",
      "Data Encryption at Rest & in Transit (AES-256)",
      "OWASP Top 10 Hardening (SQLi, XSS, CSRF protection)",
      "IAM Identity & Role-Based Access Controls",
      "Web Application Firewalls & Rate Limiting",
      "Compliance Support (GDPR, HIPAA, SOC 2 guidance)"
    ],
    process: [
      { title: "Vulnerability Scan", description: "We execute automated scans and manual injection testing on API routes and servers." },
      { title: "Security Hardening", description: "We apply security patches, write request sanitizers, and seal API endpoints." },
      { title: "Access Control Setup", description: "We configure token-expiry, refresh tokens, and strict role permissions." },
      { title: "Continuous Monitoring Setup", description: "We implement audit logs, database connection alerts, and firewalls." }
    ],
    benefits: [
      "Defend against expensive data breaches and malware threats.",
      "Build enterprise client trust with SOC2-compliant system configurations.",
      "Achieve full peace of mind with 24/7 security monitoring systems."
    ]
  }
];

export interface ServiceModule {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  icon: 'Globe' | 'Code2' | 'Layout' | 'BrainCircuit' | 'TrendingUp' | 'Cloud' | 'Users' | 'ShieldCheck';
  /** 2–3 paragraph deep-dive narrative shown in the paginated detail viewer. */
  fullDescription: string;
  /** 3–4 headline capabilities rendered as a checklist. */
  keyFeatures: string[];
  /** The primary tangible outcome the client walks away with. */
  deliverable: string;
}

export const serviceModules: ServiceModule[] = [
  {
    id: 'web-dev',
    slug: 'website-development',
    title: 'Website Development',
    shortDescription: 'Fast, scalable, custom-built websites engineered for growth.',
    icon: 'Globe',
    fullDescription:
      'We architect high-performance websites that load instantly, rank effortlessly, and convert visitors into customers. Built on modern frameworks like Next.js and React, every project is engineered for perfect Core Web Vitals, semantic SEO, and pixel-precise responsive behaviour across every device.\n\nFrom conversion-focused landing pages to complex corporate platforms, we treat the frontend as a product — not a template. Clean component architecture, thoughtful micro-interactions, and an obsessive attention to load performance produce experiences that feel effortless to your users and maintainable for your team.\n\nThe result is a web presence that grows with your business, scales under traffic spikes without flinching, and gives your brand the polish it deserves.',
    keyFeatures: [
      'Custom React & Next.js engineering',
      'Perfect Core Web Vitals & Lighthouse scores',
      'Mobile-first responsive design systems',
      'Headless CMS & Jamstack architecture',
    ],
    deliverable: 'Production-Ready Website',
  },
  {
    id: 'software-dev',
    slug: 'software-development',
    title: 'Software Development',
    shortDescription: 'Bespoke software built around your exact business logic.',
    icon: 'Code2',
    fullDescription:
      'We design and build bespoke software that automates workflows, eliminates manual overhead, and solves the problems off-the-shelf tools cannot. Our senior engineers craft robust architectures with TypeScript, Node.js, and battle-tested database patterns built for reliability and scale.\n\nWhether you need a SaaS platform, an internal operations portal, or a customer-facing dashboard, we design clean API contracts, model data with intention, and ship features iteratively so you see progress every week rather than every quarter.\n\nSecurity, maintainability, and clean code principles sit at the core of everything we deliver, ensuring the system you launch today remains an asset — not a liability — years from now.',
    keyFeatures: [
      'Custom SaaS & web application engineering',
      'REST & GraphQL API architecture',
      'Automated CI/CD pipelines & testing',
      'Scalable database modelling & tuning',
    ],
    deliverable: 'Custom Web Application',
  },
  {
    id: 'wordpress-dev',
    slug: 'wordpress-development',
    title: 'WordPress Development',
    shortDescription: 'Secure, high-performance WordPress builds and migrations.',
    icon: 'Layout',
    fullDescription:
      'We engineer WordPress solutions that escape template bloat entirely. By building bespoke Gutenberg blocks, lightweight custom themes, and tailor-made plugins, we combine the familiar editing experience your team loves with the performance and security standards of a modern custom application.\n\nOur builds strip away unnecessary assets, harden the core against common vulnerabilities, and load only what each page truly needs — delivering the speed of a static site with the flexibility of a full CMS.\n\nFor commerce, we build secure, high-traffic WooCommerce stores that integrate cleanly with your payment, tax, and fulfilment systems, giving you an editor-friendly platform without compromise.',
    keyFeatures: [
      'Bespoke Gutenberg block development',
      'Lightweight, asset-optimised custom themes',
      'WooCommerce store engineering & scaling',
      'Security hardening & core auditing',
    ],
    deliverable: 'Custom WordPress Platform',
  },
  {
    id: 'ai',
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    shortDescription: 'AI-powered automation and intelligent product features.',
    icon: 'BrainCircuit',
    fullDescription:
      'We bring generative AI and machine learning out of the lab and into your day-to-day operations. Using modern LLM APIs, vector databases, and retrieval-augmented generation, we build intelligent features that understand your data and respond with genuine context.\n\nFrom conversational support agents and semantic document search to automated classification and routing pipelines, we bridge the gap between AI capability and real business utility — always with guardrails, evaluation, and cost discipline built in.\n\nEvery integration is benchmarked for accuracy, latency, and token efficiency, so you get intelligent automation that is reliable in production and sustainable at scale.',
    keyFeatures: [
      'RAG & semantic search pipelines',
      'Custom LLM & chatbot integrations',
      'Automated classification & routing',
      'Prompt engineering & cost optimisation',
    ],
    deliverable: 'Deployed AI Integration',
  },
  {
    id: 'seo',
    slug: 'seo-optimization',
    title: 'SEO Optimization',
    shortDescription: 'Technical and on-page SEO built to rank and convert.',
    icon: 'TrendingUp',
    fullDescription:
      'Organic search is the highest-value channel you can own, and we make sure search engines understand your platform perfectly. Our technical SEO service audits site architecture, resolves indexation issues, and configures advanced structured data so your pages earn richer, higher-ranking results.\n\nWe go beyond audits — optimising Core Web Vitals, engineering semantic HTML, and structuring content around genuine search intent to capture the queries that actually convert.\n\nThe outcome is durable search equity: rankings that hold through redesigns, clean canonical structures, and a measurable lift in the qualified organic traffic that drives your pipeline.',
    keyFeatures: [
      'Deep technical & crawl audits',
      'JSON-LD structured data & rich snippets',
      'Core Web Vitals performance tuning',
      'Keyword & search-intent research',
    ],
    deliverable: 'SEO Strategy & Audit',
  },
  {
    id: 'cloud',
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    shortDescription: 'Scalable, secure cloud infrastructure and DevOps.',
    icon: 'Cloud',
    fullDescription:
      'We build reliable cloud architectures that handle millions of requests without breaking your budget. Using infrastructure-as-code with Terraform across AWS and GCP, every environment is version-controlled, reproducible, and provisioned in seconds rather than days.\n\nWe containerise applications with Docker, orchestrate with Kubernetes, and design serverless structures that scale automatically with demand — keeping operational overhead low and uptime high.\n\nWith monitoring, alerting, and automated recovery baked in from day one, you get infrastructure that stays resilient under pressure and predictable in cost.',
    keyFeatures: [
      'AWS & GCP infrastructure design',
      'Infrastructure-as-Code with Terraform',
      'Docker & Kubernetes orchestration',
      'CI/CD & cloud cost optimisation',
    ],
    deliverable: 'Cloud Infrastructure Setup',
  },
  {
    id: 'it-consulting',
    slug: 'it-consulting',
    title: 'IT Consulting',
    shortDescription: 'Strategic technology guidance to de-risk every decision.',
    icon: 'Users',
    fullDescription:
      'Navigate complex technology decisions with senior expertise on your side. We give leadership teams the architectural foresight, risk analysis, and roadmap clarity needed to invest confidently and avoid costly missteps.\n\nOur consultants audit legacy codebases, review security posture, and plan digital transformations grounded in your real constraints — not textbook ideals. We translate ambition into a phased, budgeted engineering roadmap you can actually execute.\n\nWhere it helps, we work alongside your teams through delivery, mentoring on modern practices and ensuring the plan on paper becomes results in production.',
    keyFeatures: [
      'Architecture & technology stack audits',
      'Phased engineering roadmap blueprints',
      'Legacy migration & re-architecture plans',
      'Team mentorship & agile enablement',
    ],
    deliverable: 'Technology Roadmap',
  },
  {
    id: 'cybersecurity',
    slug: 'cybersecurity-solutions',
    title: 'Cybersecurity Solutions',
    shortDescription: 'Proactive security audits, hardening, and monitoring.',
    icon: 'ShieldCheck',
    fullDescription:
      'Protect your customer data and earn lasting trust with comprehensive, proactive security. We implement layered defences — encryption at rest and in transit, strict access controls, and hardened API surfaces — to keep your systems resilient against modern threats.\n\nOur specialists run penetration tests and vulnerability assessments, then remediate against the OWASP Top 10, sealing the injection, XSS, and CSRF gaps attackers rely on.\n\nWith continuous monitoring, audit logging, and compliance guidance for standards like GDPR, HIPAA, and SOC 2, you gain enterprise-grade peace of mind and a security posture that scales with your business.',
    keyFeatures: [
      'Penetration testing & vulnerability assessment',
      'OWASP Top 10 hardening & remediation',
      'Encryption & role-based access controls',
      'Continuous monitoring & compliance guidance',
    ],
    deliverable: 'Security Audit & Hardening',
  },
];
