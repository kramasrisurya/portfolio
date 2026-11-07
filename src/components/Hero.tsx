import React from 'react';
import { ArrowDown, Sparkles, Terminal, Trophy, MapPin } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 px-4 sm:px-8 overflow-hidden">
      {/* Ambient Radial Lights */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/8 blur-[140px] rounded-full pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-cyan-500/6 blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Typography & Copy */}
          <div className="lg:col-span-7">
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-emerald-300 shadow-xl mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for AI/ML & Agentic Roles</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">Amrita CSE '29</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.06]">
              Building systems with{' '}
              <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 pr-2">
                deliberative reasoning
              </span>{' '}
              and spatial intelligence.
            </h1>

            {/* Narrative Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              I am <strong className="text-white font-medium">{PROFILE.name}</strong> — an AI & autonomous systems engineer and{' '}
              <span className="text-amber-300 font-medium inline-flex items-center gap-1">
                <Trophy className="w-4 h-4 inline" /> 3x consecutive hackathon champion
              </span>{' '}
              with victories at <strong className="text-white">IIIT Kottayam</strong> and <strong className="text-white">Epochon 2.0</strong>. I design multi-agent consensus architectures, sub-millisecond vision backends, and schema-deterministic multimodal GenAI.
            </p>

            {/* Call-to-Action Group */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-medium text-xs sm:text-sm hover:bg-slate-200 transition shadow-2xl active:scale-[0.98]"
              >
                <span>Inspect Engineering Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#terminal"
                className="flex items-center gap-2 px-5 py-3.5 rounded-full glass-panel text-slate-200 hover:text-white font-mono text-xs sm:text-sm hover:border-slate-500 transition"
              >
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Launch Console</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-3.5 rounded-full bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] text-xs sm:text-sm font-medium border border-white/[0.08] transition"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>View ATS Resume</span>
              </button>
            </div>

            {/* Quick Metadata Bar */}
            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400 pt-6 border-t border-white/[0.08]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{PROFILE.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">●</span>
                <span>Python • PyTorch • FastAPI • Gemini API</span>
              </div>
            </div>
          </div>

          {/* Right Column: Surya's Portrait in High-End Editorial Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              {/* Outer decorative ambient blur behind image */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500/20 via-teal-500/10 to-amber-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition duration-500" 
              />

              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/[0.12] shadow-2xl p-2.5">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900">
                  <img
                    src={PROFILE.avatarUrl}
                    alt={PROFILE.name}
                    className="w-full h-full object-cover object-center filter saturate-[0.92] contrast-[1.04] group-hover:scale-[1.02] transition duration-700 ease-out"
                  />
                  {/* Subtle inner dark gradient overlay at base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

                  {/* Corner Badge on image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <div className="text-white font-medium text-sm tracking-tight">
                        {PROFILE.name}
                      </div>
                      <div className="text-[11px] font-mono text-emerald-300">
                        Amrita CSE • Class of 2029
                      </div>
                    </div>
                    <div className="px-2.5 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-[10px] font-mono text-amber-300 font-semibold">
                      🏆 3x Winner
                    </div>
                  </div>
                </div>

                {/* Subtext below photo */}
                <div className="px-3 py-2.5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Lead AI Architect</span>
                  <span className="text-slate-500">Autonomous Workflows</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
