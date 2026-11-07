import React, { useState } from 'react';
import { FileText, Mail, Check, Menu, X, Trophy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PROFILE } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full glass-panel border border-white/[0.08] shadow-2xl backdrop-blur-2xl">
        {/* Monogram brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/[0.12] flex items-center justify-center font-mono text-emerald-400 font-semibold text-xs transition group-hover:border-emerald-400/60 group-hover:bg-emerald-500/10">
            RS
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-sm tracking-tight text-white group-hover:text-emerald-300 transition">
              {PROFILE.name}
            </span>
            <span className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Autonomous Systems & AI
            </span>
          </div>
        </a>

        {/* Editorial Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-medium text-slate-300">
          <a
            href="#projects"
            className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition"
          >
            Engineering Work
          </a>
          <a
            href="#philosophy"
            className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition"
          >
            Philosophy
          </a>
          <a
            href="#hackathons"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Hackathons</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
              3x
            </span>
          </a>
          <a
            href="#journey"
            className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition"
          >
            Journey
          </a>
          <a
            href="#terminal"
            className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition"
          >
            Agent Console
          </a>
          <a
            href="#skills"
            className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition"
          >
            Stack
          </a>
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Email quick copy */}
          <button
            onClick={handleCopyEmail}
            title="Copy email to clipboard"
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/[0.1] transition relative"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4" />}
            {copied && (
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full shadow">
                Copied!
              </span>
            )}
          </button>

          {/* Social links */}
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/[0.06] transition"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full text-slate-400 hover:text-sky-400 hover:bg-white/[0.06] transition"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          {/* Resume modal trigger */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 text-xs font-medium px-4 py-1.5 rounded-full bg-white/[0.08] text-white border border-white/[0.15] hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-400 transition duration-200"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="text-xs px-3 py-1 rounded-full bg-white/[0.08] text-white border border-white/[0.15]"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full text-slate-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-5 rounded-2xl glass-panel border border-white/[0.1] flex flex-col gap-3 font-medium text-sm">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-300 hover:text-white py-1"
          >
            Engineering Work
          </a>
          <a
            href="#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-300 hover:text-white py-1"
          >
            Philosophy
          </a>
          <a
            href="#hackathons"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-slate-300 hover:text-white py-1"
          >
            <span>🏆 Hackathons</span>
            <span className="text-xs font-mono text-amber-300">3x Winner</span>
          </a>
          <a
            href="#journey"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-300 hover:text-white py-1"
          >
            Journey
          </a>
          <a
            href="#terminal"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-300 hover:text-white py-1"
          >
            Agent Console
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-300 hover:text-white py-1"
          >
            Technical Stack
          </a>
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono truncate mr-2">{PROFILE.email}</span>
            <button
              onClick={handleCopyEmail}
              className="text-xs text-emerald-400 font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20"
            >
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
