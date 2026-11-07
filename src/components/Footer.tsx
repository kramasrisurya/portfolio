import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-24 px-4 sm:px-8 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Contact Container */}
        <div className="rounded-3xl glass-panel border border-white/[0.1] p-8 sm:p-14 mb-16 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Open for AI/ML Engineering & Autonomous Systems Roles
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
              Let's engineer what comes <span className="font-serif-italic font-normal text-emerald-300">next.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-10 font-normal">
              Whether you are developing deliberative multi-agent workflows, real-time spatial vision backends, or production GenAI pipelines, let's connect.
            </p>

            {/* Direct Channel Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {/* Email */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-mono text-slate-200 truncate">{PROFILE.email}</span>
                </div>
                <button
                  onClick={handleCopy}
                  title="Copy email"
                  className="p-1.5 rounded-full text-slate-400 hover:text-emerald-300 hover:bg-emerald-500/10 transition shrink-0"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs font-mono text-slate-200">{PROFILE.phone}</span>
              </div>
            </div>

            {/* Social & Direct Email Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs hover:bg-slate-200 transition shadow-2xl"
              >
                Send Direct Email
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.04] text-slate-200 hover:text-white border border-white/[0.08] hover:border-slate-500 text-xs font-mono transition"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.04] text-slate-200 hover:text-sky-300 border border-white/[0.08] hover:border-sky-500/40 text-xs font-mono transition"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 pt-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <span>{PROFILE.location}</span>
          </div>
          <div>
            Built with React 19, TypeScript & Tailwind CSS • © 2026 Rama Sri Surya
          </div>
        </div>
      </div>
    </footer>
  );
};
