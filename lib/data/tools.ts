export interface Tool {
  name: string;
  category: "Web Platform" | "Cloud & DevOps" | "Database" | "Mobile Apps";
  iconName: string;
  colorClass: string;
}

export const tools: Tool[] = [
  // Web Platform
  { name: "Next.js", category: "Web Platform", iconName: "Layers", colorClass: "text-[#00E6FA]" },
  { name: "React.js", category: "Web Platform", iconName: "Code2", colorClass: "text-[#00D2F0]" },
  { name: "TypeScript", category: "Web Platform", iconName: "FileCode", colorClass: "text-[#0082AA]" },
  { name: "Tailwind CSS", category: "Web Platform", iconName: "Paintbrush", colorClass: "text-[#00E6FA]" },
  { name: "Node.js", category: "Web Platform", iconName: "Terminal", colorClass: "text-[#00D2F0]" },
  { name: "WordPress", category: "Web Platform", iconName: "LayoutTemplate", colorClass: "text-[#0082AA]" },

  // Cloud & DevOps
  { name: "AWS", category: "Cloud & DevOps", iconName: "Cloud", colorClass: "text-[#00E6FA]" },
  { name: "Google Cloud", category: "Cloud & DevOps", iconName: "CloudLightning", colorClass: "text-[#00D2F0]" },
  { name: "Docker", category: "Cloud & DevOps", iconName: "Box", colorClass: "text-[#0082AA]" },
  { name: "Kubernetes", category: "Cloud & DevOps", iconName: "Network", colorClass: "text-[#00E6FA]" },
  { name: "Terraform", category: "Cloud & DevOps", iconName: "Cpu", colorClass: "text-[#00D2F0]" },
  { name: "GitHub Actions", category: "Cloud & DevOps", iconName: "Play", colorClass: "text-[#0082AA]" },

  // Database
  { name: "PostgreSQL", category: "Database", iconName: "Database", colorClass: "text-[#00E6FA]" },
  { name: "Redis", category: "Database", iconName: "Zap", colorClass: "text-[#00D2F0]" },
  { name: "MongoDB", category: "Database", iconName: "DatabaseBackup", colorClass: "text-[#0082AA]" },
  { name: "Pinecone", category: "Database", iconName: "BrainCircuit", colorClass: "text-[#00E6FA]" },
  { name: "InfluxDB", category: "Database", iconName: "LineChart", colorClass: "text-[#00D2F0]" },
  { name: "MySQL", category: "Database", iconName: "HardDrive", colorClass: "text-[#0082AA]" },

  // Mobile Apps
  { name: "React Native", category: "Mobile Apps", iconName: "Smartphone", colorClass: "text-[#00E6FA]" },
  { name: "Expo", category: "Mobile Apps", iconName: "Cpu", colorClass: "text-[#00D2F0]" },
  { name: "Swift", category: "Mobile Apps", iconName: "Apple", colorClass: "text-[#0082AA]" },
  { name: "Kotlin", category: "Mobile Apps", iconName: "SmartphoneNfc", colorClass: "text-[#00E6FA]" },
  { name: "Flutter", category: "Mobile Apps", iconName: "Wind", colorClass: "text-[#00D2F0]" }
];
