import React from 'react';
import { Award, GraduationCap, CheckCircle, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS, PROFILE } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-8 relative border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Education Summary Card */}
          <div className="lg:col-span-1 p-8 rounded-3xl glass-panel border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-6">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Rigor</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1.5 tracking-tight">
                {PROFILE.education.institution}
              </h3>
              <p className="text-xs font-mono text-slate-400 mb-6">
                {PROFILE.education.location} • {PROFILE.education.graduationYear}
              </p>

              <div className="text-sm font-semibold text-slate-200 mb-4">
                {PROFILE.education.degree}
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 font-mono mb-6">
                🏆 {PROFILE.education.honors}
              </div>

              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Foundation Coursework:
                </div>
                {PROFILE.education.coursework.map((course, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="lg:col-span-2 p-8 rounded-3xl glass-panel border border-white/[0.08]">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400">
                <Award className="w-4 h-4" />
                <span>Verified Credentials & Specializations</span>
              </div>
              <span className="text-xs font-mono text-slate-400">5 Credentials</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-slate-500 transition group flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1.5">
                      {cert.category}
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition mb-3">
                      {cert.name}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.04] text-xs font-mono text-slate-400">
                    <span>{cert.issuer}</span>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-cyan-400 transition" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
