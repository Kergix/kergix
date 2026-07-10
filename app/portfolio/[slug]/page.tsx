import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft, Terminal, TrendingUp, Cpu, Award } from "lucide-react";
import { portfolio, Project } from "@/lib/data/portfolio";
import CaseStudiesGrid from "@/components/shared/CaseStudiesGrid";
import CTAFormSection from "@/components/shared/CTAFormSection";

interface CaseStudyDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolio.map((p) => ({
    slug: p.slug,
  }));
}

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const project = portfolio.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Cover image blueprint SVG drawing helper
  const renderBlueprintCover = (p: Project) => {
    return (
      <div className={`w-full aspect-[21/9] relative overflow-hidden bg-bg-secondary border border-border-subtle rounded-2xl flex items-center justify-center select-none shadow-2xl`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${p.accentGradient} opacity-5`} />
        
        <svg viewBox="0 0 600 250" className="w-[85%] h-[85%] opacity-45 select-none pointer-events-none">
          <g stroke="rgba(0, 210, 240, 0.08)" strokeWidth="0.5">
            {Array.from({ length: 15 }).map((_, i) => (
              <line key={`v-${i}`} x1={i * 40} y1={0} x2={i * 40} y2={250} />
            ))}
            {Array.from({ length: 7 }).map((_, i) => (
              <line key={`h-${i}`} x1={0} y1={i * 40} x2={600} y2={i * 40} />
            ))}
          </g>

          <g fill="none" stroke="#00E6FA" strokeWidth="1.5">
            <rect x="50" y="40" width="500" height="170" rx="15" strokeOpacity="0.2" />
            <path d="M100,125 Q200,30 300,125 T500,125" />
            <circle cx="300" cy="125" r="5" fill="#00E6FA" />
            <circle cx="100" cy="125" r="5" fill="#0082AA" />
            <circle cx="500" cy="125" r="5" fill="#0082AA" />
          </g>
        </svg>

        <span className="absolute top-6 left-6 bg-bg-elevated/90 text-xs font-bold tracking-widest px-3 py-2 rounded border border-border-subtle text-text-secondary">
          ARCHITECTURE SCHEMATIC B0{portfolio.indexOf(p) + 1}
        </span>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col relative overflow-hidden">
      {/* 1. Case Study Header */}
      <section className="relative pt-36 pb-12 px-4 md:px-8 bg-bg-primary border-b border-border-subtle">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs text-text-muted select-none">
            <Link href="/" className="hover:text-accent-cyan transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/portfolio" className="hover:text-accent-cyan transition-colors">Case Studies</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-secondary font-semibold truncate max-w-[200px]">{project.title}</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-accent-cyan font-heading text-xs font-extrabold uppercase tracking-widest">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight leading-tight max-w-4xl">
              {project.title}
            </h1>
            <span className="text-text-secondary text-sm md:text-base font-semibold mt-1">
              Client Portfolio: <span className="text-text-primary">{project.client}</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. Schematic Blueprint Cover */}
      <section className="py-12 px-4 md:px-8 bg-bg-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {renderBlueprintCover(project)}
        </div>
      </section>

      {/* 3. Metrics Stats Row */}
      <section className="py-8 px-4 md:px-8 bg-bg-secondary/40 border-t border-b border-border-subtle">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col gap-1.5 py-4 border-r border-border-subtle/50 last:border-r-0">
              <span className="text-3xl md:text-5xl font-heading font-extrabold text-accent-cyan-bright">
                {m.value}
              </span>
              <span className="text-xs md:text-sm text-text-secondary font-semibold uppercase tracking-wider">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Challenge / Solution / Results Anatomy */}
      <section className="py-24 px-4 md:px-8 bg-bg-primary relative overflow-hidden border-b border-border-subtle">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main 3 columns breakdown */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Challenge */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-text-primary">
                <Terminal className="w-5 h-5 text-danger" />
                <h3 className="font-heading font-bold text-xl md:text-2xl">The Challenge</h3>
              </div>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed pl-7">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-text-primary">
                <Cpu className="w-5 h-5 text-accent-cyan" />
                <h3 className="font-heading font-bold text-xl md:text-2xl">The Solution</h3>
              </div>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed pl-7">
                {project.solution}
              </p>
            </div>

            {/* Results */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-text-primary">
                <TrendingUp className="w-5 h-5 text-success" />
                <h3 className="font-heading font-bold text-xl md:text-2xl">The Results</h3>
              </div>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed pl-7">
                {project.results}
              </p>
            </div>
          </div>

          {/* Sidebar specs tag */}
          <div className="lg:col-span-4 flex flex-col gap-6 p-6 rounded-2xl bg-bg-secondary border border-border-subtle w-full h-fit">
            <h4 className="font-heading font-bold text-text-primary text-sm uppercase tracking-wider text-accent-cyan/80">
              Technology Stack Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1.5 rounded bg-bg-primary border border-border-subtle text-text-secondary font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="h-[1px] bg-border-subtle/50 my-2" />

            <div className="flex items-center gap-3">
              <Award className="w-10 h-10 text-accent-cyan shrink-0" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-text-primary text-xs">Production Grade</span>
                <span className="text-text-muted text-[10px] uppercase font-bold tracking-wider">Lighthouse Passed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Related Case Studies */}
      <section className="py-24 px-4 md:px-8 bg-bg-secondary/15 relative overflow-hidden border-b border-border-subtle">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-accent-cyan font-heading text-xs font-extrabold uppercase tracking-widest">
              More Work
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight">
              Related Case Studies
            </h2>
          </div>
          <CaseStudiesGrid limit={3} />
        </div>
      </section>

      {/* 6. CTA Form section */}
      <CTAFormSection />
    </div>
  );
}
