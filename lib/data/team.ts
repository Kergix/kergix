export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio: string;
  linkedinUrl?: string;
}

export const team: TeamMember[] = [
  {
    name: "Alex Kerg",
    role: "Chief Executive Officer & Founder",
    bio: "Over 15 years of technology experience leading custom software engineering and digital transformation projects for enterprise clients.",
    linkedinUrl: "https://linkedin.com"
  },
  {
    name: "Sarah Chen",
    role: "Lead Software Architect",
    bio: "Specializes in high-throughput backend APIs, cloud scaling, and serverless Node.js / TypeScript infrastructure setup.",
    linkedinUrl: "https://linkedin.com"
  },
  {
    name: "Marcus Vance",
    role: "Director of Cybersecurity",
    bio: "Certified ethical hacker focused on OWASP auditing, compliance setups (SOC 2, HIPAA), and secure cloud configurations.",
    linkedinUrl: "https://linkedin.com"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Frontend Engineering",
    bio: "Passionate about semantic markup, Core Web Vitals optimization, responsive layout architectures, and interactive Next.js interfaces.",
    linkedinUrl: "https://linkedin.com"
  },
  {
    name: "Vikram Malhotra",
    role: "Senior AI Solutions Engineer",
    bio: "Focuses on retrieval-augmented generation (RAG) setups, vector database indexing, and custom LLM model deployments.",
    linkedinUrl: "https://linkedin.com"
  },
  {
    name: "David Sterling",
    role: "Senior Cloud & DevOps Engineer",
    bio: "Expert in Terraform scripting, Kubernetes cluster management, Docker builds, and automated CI/CD deployment pipelines.",
    linkedinUrl: "https://linkedin.com"
  }
];
