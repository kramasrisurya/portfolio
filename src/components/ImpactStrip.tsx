import React from 'react';
import { Trophy, Cpu, Target, Network } from 'lucide-react';

export const ImpactStrip: React.FC = () => {
  return (
    <section className="py-14 px-4 sm:px-8 border-y border-white/[0.08] bg-black/40 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          
          {/* Eyebrow and Statement */}
          <div className="lg:max-w-xs">
            <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold block mb-2">
              Verified Technical Footprint
            </span>
            <p className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
              Competitive honors. <br />
              <span className="font-serif-italic font-normal text-slate-300">
                Sub-millisecond execution.
              </span>
            </p>
          </div>

          {/* Metric Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 flex-1">
            
            {/* Stat 1: Hackathons */}
            <div className="flex flex-col border-l border-white/[0.1] pl-5">
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-1">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>Victories</span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                3x <span className="font-serif-italic font-normal text-amber-400 text-2xl">🏆</span>
              </div>
              <div className="text-xs text-slate-400 mt-1 font-sans">
                IIIT Kottayam, Epochon 2.0 & Sem 1
              </div>
            </div>

            {/* Stat 2: Latency */}
            <div className="flex flex-col border-l border-white/[0.1] pl-5">
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-1">
                <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                <span>State Cache</span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-300 font-mono tracking-tight">
                &lt; 1 ms
              </div>
              <div className="text-xs text-slate-400 mt-1 font-sans">
                Redis AsyncIO state store
              </div>
            </div>

            {/* Stat 3: CNN Accuracy */}
            <div className="flex flex-col border-l border-white/[0.1] pl-5">
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-1">
                <Target className="w-3.5 h-3.5 text-cyan-400" />
                <span>CNN Accuracy</span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-200 font-mono tracking-tight">
                &gt; 98%
              </div>
              <div className="text-xs text-slate-400 mt-1 font-sans">
                MNIST test benchmark
              </div>
            </div>

            {/* Stat 4: Systems */}
            <div className="flex flex-col border-l border-white/[0.1] pl-5">
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-1">
                <Network className="w-3.5 h-3.5 text-indigo-400" />
                <span>Core Systems</span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                5+
              </div>
              <div className="text-xs text-slate-400 mt-1 font-sans">
                Agents, Vision & GenAI backends
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
