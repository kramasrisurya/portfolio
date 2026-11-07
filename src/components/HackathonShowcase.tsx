import React from 'react';
import { Trophy, Award, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { HACKATHONS } from '../data/portfolioData';

export const HackathonShowcase: React.FC = () => {
  return (
    <section id="hackathons" className="py-24 px-4 sm:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
              <Trophy className="w-4 h-4" />
              <span>Competitive Honors</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              3x Consecutive <span className="font-serif-italic font-normal text-amber-300">Hackathon Champion.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-normal leading-relaxed">
            Consistently out-building competitive teams across 24-48 hour hackathons by pairing rapid execution velocity with production architecture standards.
          </p>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HACKATHONS.map((hackathon, idx) => (
            <div
              key={hackathon.id}
              className="relative p-8 rounded-3xl glass-panel border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              {/* Highlight badge for the latest win at IIIT Kottayam */}
              {idx === 0 && (
                <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-mono font-bold text-[10px] uppercase tracking-wider shadow-lg">
                  Latest Victory • 3rd Sem
                </div>
              )}

              <div>
                {/* Header with icon and semester */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                    {hackathon.semester}
                  </span>
                </div>

                {/* Placement & Title */}
                <div className="mb-3">
                  <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider font-mono mb-1">
                    {hackathon.placement}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-200 transition tracking-tight">
                    {hackathon.title}
                  </h3>
                </div>

                {/* Organization & Date */}
                <div className="flex flex-col gap-1 text-xs text-slate-400 mb-5 font-mono">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{hackathon.organization}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{hackathon.year}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {hackathon.description}
                </p>
              </div>

              {/* Focus tag */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{hackathon.projectFocus}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
