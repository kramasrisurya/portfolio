import React from 'react';
import { Milestone, Trophy, ArrowUpRight } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-24 px-4 sm:px-8 relative border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
              <Milestone className="w-3.5 h-3.5" />
              <span>Trajectory & Pivotal Moments</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              The Journey So <span className="font-serif-italic font-normal text-slate-300">Far.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-normal leading-relaxed">
            From algorithmic foundations to back-to-back competitive hackathon wins across South India's top technical institutes.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-4">
          {JOURNEY_MILESTONES.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/[0.08] hover:border-slate-500 transition duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
            >
              <div className="md:w-1/4">
                <span className="text-xs font-mono text-slate-400 block mb-1">
                  {item.date}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  <Trophy className="w-3 h-3" />
                  {item.tag}
                </span>
              </div>

              <div className="md:w-3/5">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-200 transition mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-emerald-400 mb-2">
                  {item.role}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {item.summary}
                </p>
              </div>

              <div className="md:w-auto flex md:justify-end">
                <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-white/20 transition">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
