export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What frameworks do you use for web development?",
    answer: "We primarily build websites using Next.js (App Router) paired with Tailwind CSS for styling and TypeScript for typing safety. This ensures our sites are blazing fast, statically optimized via SSG, and fully secure, delivering perfect Core Web Vitals performance score metrics.",
    category: "General"
  },
  {
    question: "Do you build custom WordPress sites or use generic templates?",
    answer: "We design entirely bespoke WordPress themes and custom Gutenberg blocks from scratch. We do not use bloated pre-built templates or page builders (like Elementor or Divi). This keeps the website exceptionally lightweight, fast, and easy for your editors to use.",
    category: "Services"
  },
  {
    question: "How long does a typical software development project take?",
    answer: "A standard website project takes 3 to 6 weeks from initial design to final launch. More complex software development projects (like custom SaaS applications, real-time dispatch systems, or LLM integrations) vary between 6 and 14 weeks. We work in weekly sprints and deploy to a staging environment so you can track progress in real-time.",
    category: "Services"
  },
  {
    question: "What is your pricing model for custom applications?",
    answer: "Because we build bespoke software tailored to your specific operations, we work on a project-based pricing model. Following a discovery session, we provide a detailed scope document and flat-rate quote. This prevents budget creep and ensures you know the exact cost before engineering begins.",
    category: "Pricing"
  },
  {
    question: "How do you ensure data security in your web applications?",
    answer: "We follow industry-standard security protocols. All data is encrypted in transit using SSL/TLS and at rest using AES-256 databases. We implement secure token authentications, API rate-limiting, and SQLi/XSS sanitization to safeguard your company and citizen records.",
    category: "Security"
  },
  {
    question: "Can you migrate legacy systems to the cloud?",
    answer: "Yes, we specialize in cloud migrations. We containerize legacy apps using Docker, write infrastructure blueprints using Terraform, and deploy them to auto-scaling clusters on AWS or Google Cloud Platform, ensuring high availability and cost optimization.",
    category: "Cloud"
  },
  {
    question: "Do you offer post-launch support and hosting maintenance?",
    answer: "We offer monthly maintenance plans covering core updates, server performance monitoring, regular database backups, and content updates. We also configure and monitor web application firewalls to block potential security threats.",
    category: "Support"
  },
  {
    question: "How do you handle website SEO optimizations?",
    answer: "We implement technical SEO directly into our code. This includes semantic HTML layouts, dynamic XML sitemaps, robots.txt directives, and advanced JSON-LD structured schemas so search crawlers can parse and rank your service pages easily.",
    category: "General"
  }
];
