import React, { useState } from 'react';
import { Cpu, Layers, GitFork, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { FEATURED_PROJECTS, Project } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedArchitectureId, setExpandedArchitectureId] = useState<string | null>(null);

  const categories = ['All', 'Agentic AI', 'Computer Vision', 'GenAI', 'Deep Learning'];

  const filteredProjects = selectedCategory === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === selectedCategory);

  const toggleArchitecture = (id: string) => {
    setExpandedArchitectureId(expandedArchitectureId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>Core Systems & Architectures</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Production AI <span className="font-serif-italic font-normal text-slate-300">Case Studies.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-normal leading-relaxed">
            Deliberative agentic reasoning, spatial computer vision pipelines, and structured multimodal LLM conversions built for production performance.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                selectedCategory === category
                  ? 'bg-white text-black font-semibold shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05] border border-white/[0.08]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="space-y-10">
          {filteredProjects.map((project: Project) => {
            const isArchitectureOpen = expandedArchitectureId === project.id;

            return (
              <div
                key={project.id}
                className="rounded-3xl glass-panel border border-white/[0.08] hover:border-slate-500 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between shadow-2xl group"
              >
                <div>
                  {/* Top Bar with category & external links */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                        {project.category}
                      </span>
                      {project.id === 's2-legal-ai' && (
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                          🏆 Epochon 2.0 Winner
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-emerald-400 transition px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-emerald-500/40"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Inspect Repository</span>
                        <ArrowUpRight className="w-3 h-3 text-slate-500" />
                      </a>
                    </div>
                  </div>

                  {/* Title & headline */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  <div className="text-sm font-medium text-slate-400 mb-6">
                    {project.headline}
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-8 max-w-3xl font-normal">
                    {project.description}
                  </p>

                  {/* Impact metrics badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                    {project.impactMetrics.map((metric, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300 font-mono"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Architectural Highlights */}
                  <div className="mb-8">
                    <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                      Key Engineering Decisions:
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-emerald-400 font-mono mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architecture Flow Interactive Drawer */}
                  {project.architectureFlow && project.architectureFlow.length > 0 && (
                    <div className="pt-6 border-t border-white/[0.06]">
                      <button
                        onClick={() => toggleArchitecture(project.id)}
                        className="flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition"
                      >
                        <Layers className="w-4 h-4" />
                        <span>
                          {isArchitectureOpen
                            ? 'Close Architecture Pipeline [-]'
                            : 'Inspect Architecture Pipeline [+]'}
                        </span>
                      </button>

                      {isArchitectureOpen && (
                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in duration-200">
                          {project.architectureFlow.map((flow) => (
                            <div
                              key={flow.step}
                              className="p-4 rounded-2xl bg-black/70 border border-emerald-500/30 relative"
                            >
                              <div className="text-[10px] font-mono text-emerald-400 font-bold mb-1">
                                STEP {flow.step}
                              </div>
                              <div className="text-xs font-semibold text-white mb-1.5">
                                {flow.label}
                              </div>
                              <p className="text-[11px] text-slate-400 leading-snug">
                                {flow.detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-500 mr-2 flex items-center gap-1.5">
                    <GitFork className="w-3.5 h-3.5" /> Stack:
                  </span>
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
