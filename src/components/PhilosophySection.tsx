import React from 'react';
import { Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { PHILOSOPHY } from '../data/portfolioData';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 px-4 sm:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Engineering Manifesto</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              How I Think & <span className="font-serif-italic font-normal text-slate-300">Build.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-normal leading-relaxed">
            Autonomous AI is not about writing quick wrapper scripts. It requires deterministic constraints, deliberative reasoning loops, and zero tolerance for sloppy code.
          </p>
        </div>

        {/* 3 Tenets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PHILOSOPHY.map((item) => (
            <div
              key={item.number}
              className="p-8 rounded-3xl glass-panel border border-white/[0.08] hover:border-slate-500 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    Tenet {item.number}
                  </span>
                  <Sparkles className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition" />
                </div>

                <h3 className="text-xl font-bold text-white mb-1.5 tracking-tight group-hover:text-emerald-300 transition">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-slate-400 mb-4">
                  {item.subtitle}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {item.body}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Production Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
