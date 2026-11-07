import React from 'react';
import { Layers, Bot, Eye, Server, Code } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Generative AI & Agentic Systems':
        return <Bot className="w-4 h-4 text-emerald-400" />;
      case 'Deep Learning & Computer Vision':
        return <Eye className="w-4 h-4 text-cyan-400" />;
      case 'Backend & Distributed Infrastructure':
        return <Server className="w-4 h-4 text-indigo-400" />;
      default:
        return <Code className="w-4 h-4 text-amber-400" />;
    }
  };

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30';
      case 'Advanced':
        return 'text-cyan-300 bg-cyan-500/10 border-cyan-500/30';
      default:
        return 'text-slate-300 bg-white/[0.04] border-white/[0.08]';
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Engineering Stack & <span className="font-serif-italic font-normal text-slate-300">Tooling.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-normal leading-relaxed">
            From deep learning frameworks and person re-identification backbones to distributed asynchronous event streaming.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl glass-panel border border-white/[0.08] hover:border-slate-500 transition shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                <div className="p-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {cat.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between px-4 py-2.5 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] transition"
                  >
                    <span className="text-xs sm:text-sm text-slate-200 font-mono">
                      {skill.name}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${getLevelBadgeColor(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
