import React, { useEffect } from 'react';
import { X, Download, ExternalLink, Printer, FileText, CheckCircle2 } from 'lucide-react';
import { PROFILE, HACKATHONS, FEATURED_PROJECTS, ADDITIONAL_PROJECTS, CERTIFICATIONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Rama Sri Surya Resume"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#090a0d',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '24px',
          boxShadow: '0 25px 70px -15px rgba(0, 0, 0, 0.9)',
        }}
      >
        {/* Modal Top Bar */}
        <div
          className="modal-top-bar"
          style={{
            padding: '16px 24px',
            borderBottom: '1px solid var(--line)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#0e0f14',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                padding: '6px',
                borderRadius: '8px',
                background: 'rgba(255, 140, 89, 0.1)',
                border: '1px solid rgba(255, 140, 89, 0.3)',
                color: '#ff8c59',
              }}
            >
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#fff' }}>
                ATS Professional Resume — {PROFILE.name}
              </h3>
              <p style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#ff8c59' }}>
                Updated: November 2026 • 3x Consecutive Hackathon Champion Edition
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Download PDF button */}
            <a
              href="./RAMA_SRI_SURYA_ATS_RESUME.pdf"
              download="RAMA_SRI_SURYA_ATS_RESUME.pdf"
              className="pill-link"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                fontSize: '11px',
                color: '#fff',
                background: '#151311',
                border: '1px solid var(--line)',
                borderRadius: '20px',
              }}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Open Raw HTML button */}
            <a
              href="./resume.html"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                fontSize: '11px',
                color: '#ccc',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--line)',
                borderRadius: '20px',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>HTML</span>
            </a>

            {/* Print button */}
            <button
              onClick={() => window.open('./resume.html', '_blank')?.print()}
              style={{
                padding: '8px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--line)',
                color: '#aaa',
                cursor: 'pointer',
              }}
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                padding: '8px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--line)',
                color: '#aaa',
                cursor: 'pointer',
              }}
              aria-label="Close Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="modal-scroll-body" style={{ overflowY: 'auto', padding: '32px', color: '#e0e0e0', fontSize: '13px' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', paddingBottom: '20px', borderBottom: '1px solid var(--line)', marginBottom: '24px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
              {PROFILE.name}
            </h1>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#888', marginBottom: '8px' }}>
              {PROFILE.location} | {PROFILE.phone} | {PROFILE.email}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#ff8c59' }}>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <span style={{ color: '#555' }}>|</span>
              <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
              <span style={{ color: '#555' }}>|</span>
              <a href={PROFILE.portfolio} target="_blank" rel="noreferrer">Portfolio</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px', color: '#ff8c59', fontWeight: 'bold', borderBottom: '1px solid var(--line)', paddingBottom: '4px', marginBottom: '8px' }}>
              Professional Summary
            </h2>
            <p style={{ color: '#ccc', lineHeight: '1.6', fontSize: '12.5px' }}>
              AI &amp; Autonomous Systems Engineer and Computer Science undergraduate with hands-on experience building deliberative multi-agent reasoning architectures, spatial computer vision pipelines, and production-grade LLM applications. Winner of 3 competitive hackathons (including IIIT Kottayam and Epochon 2.0) with demonstrated proficiency in Python, PyTorch, FastAPI, and the Google Gemini API. Passionate about applying deep learning, agentic workflows, and high-performance backend systems to solve real-world problems.
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px', color: '#ff8c59', fontWeight: 'bold', borderBottom: '1px solid var(--line)', paddingBottom: '4px', marginBottom: '8px' }}>
              Education
            </h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px', marginBottom: '4px' }}>
              <span style={{ fontWeight: 'bold', color: '#fff' }}>{PROFILE.education.institution} — {PROFILE.education.location}</span>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#888' }}>{PROFILE.education.graduationYear}</span>
            </div>
            <div style={{ fontSize: '12px', color: '#bbb', marginBottom: '6px' }}>{PROFILE.education.degree}</div>
            <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '12px', color: '#aaa', lineHeight: '1.6' }}>
              <li><strong>Coursework:</strong> {PROFILE.education.coursework.join(', ')}</li>
              <li><strong>Honors:</strong> 3x Consecutive Hackathon Champion (Semester 1, Semester 2 / Epochon 2.0, Semester 3 / IIIT Kottayam).</li>
            </ul>
          </div>

          {/* BLOCK 1: Top 4 In-Depth Featured Projects */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--line)', paddingBottom: '4px', marginBottom: '12px' }}>
              <h2 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px', color: '#ff8c59', fontWeight: 'bold' }}>
                Featured Systems &amp; Architecture (In-Depth)
              </h2>
              <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#888' }}>Top 4 Flagship Systems</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {FEATURED_PROJECTS.map((proj) => (
                <div key={proj.id} style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '14px 16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '6px', marginBottom: '6px' }}>
                    <div>
                      <span style={{ fontFamily: 'var(--font-mono)', color: '#ff8c59', fontWeight: 700, marginRight: '6px' }}>{proj.rank}</span>
                      <span style={{ fontWeight: 'bold', color: '#fff' }}>{proj.title}</span>
                      <span style={{ color: '#bbb', fontSize: '12px' }}> — {proj.headline}</span>
                      <span style={{ marginLeft: '10px', display: 'inline-flex', gap: '8px' }}>
                        <a href={proj.githubUrl} target="_blank" rel="noreferrer" style={{ color: '#ff8c59', textDecoration: 'none', fontSize: '11px', fontWeight: 600 }}>[GitHub]</a>
                        <a href={proj.liveUrl} target="_blank" rel="noreferrer" style={{ color: '#38bdf8', textDecoration: 'none', fontSize: '11px', fontWeight: 600 }}>[Live Vercel]</a>
                      </span>
                    </div>
                    <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#ff8c59' }}>{proj.techStack.slice(0, 5).join(', ')}</span>
                  </div>
                  <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '12px', color: '#ccc', lineHeight: '1.55' }}>
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* BLOCK 2: Additional Production Systems (Brief Summary) */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--line)', paddingBottom: '4px', marginBottom: '10px' }}>
              <h2 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px', color: '#ff8c59', fontWeight: 'bold' }}>
                Additional Production Deployments (Brief Summary)
              </h2>
              <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#888' }}>Ranks 05–10 Directory</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {ADDITIONAL_PROJECTS.map((proj) => (
                <div key={proj.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '6px', fontSize: '12px', borderBottom: '1px dashed rgba(255,255,255,0.06)', paddingBottom: '6px' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', color: '#ff8c59', fontWeight: 700, marginRight: '6px' }}>{proj.rank}</span>
                    <strong style={{ color: '#fff' }}>{proj.title}</strong>
                    <span style={{ color: '#888', margin: '0 6px' }}>|</span>
                    <span style={{ color: '#bbb' }}>{proj.headline}</span>
                    <span style={{ marginLeft: '8px', display: 'inline-flex', gap: '6px' }}>
                      <a href={proj.githubUrl} target="_blank" rel="noreferrer" style={{ color: '#ff8c59', textDecoration: 'none', fontSize: '11px' }}>[GitHub]</a>
                      <a href={proj.liveUrl} target="_blank" rel="noreferrer" style={{ color: '#38bdf8', textDecoration: 'none', fontSize: '11px' }}>[Live Vercel]</a>
                    </span>
                  </div>
                  <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#888' }}>
                    {proj.techStack.slice(0, 3).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px', color: '#ff8c59', fontWeight: 'bold', borderBottom: '1px solid var(--line)', paddingBottom: '4px', marginBottom: '8px' }}>
              Achievements &amp; Hackathons
            </h2>
            <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '12px', color: '#ccc', lineHeight: '1.6' }}>
              {HACKATHONS.map((h) => (
                <li key={h.id}>
                  <strong style={{ color: '#fff' }}>{h.title} ({h.semester} — {h.organization}):</strong> {h.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h2 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px', color: '#ff8c59', fontWeight: 'bold', borderBottom: '1px solid var(--line)', paddingBottom: '4px', marginBottom: '8px' }}>
              Certifications
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px', fontSize: '12px', color: '#ccc' }}>
              {CERTIFICATIONS.map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span><strong>{c.name}</strong> — {c.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '14px 24px',
            borderTop: '1px solid var(--line)',
            background: '#0e0f14',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '11px',
            color: '#888',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <span>Standard Single-Page ATS Format</span>
          <button
            onClick={onClose}
            style={{
              padding: '6px 14px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--line)',
              color: '#ccc',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
