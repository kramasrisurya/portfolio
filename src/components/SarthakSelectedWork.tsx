import React, { useState } from 'react';
import { ArrowUpRight, Layers, ExternalLink, Globe, Activity, Radio, Cpu, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './Icons';
import { FEATURED_PROJECTS, ADDITIONAL_PROJECTS, Project } from '../data/portfolioData';

interface CardTiltState {
  rotateX: number;
  rotateY: number;
  x: number;
  y: number;
  isHovered: boolean;
}

const FlagshipCardVisual: React.FC<{ project: Project }> = ({ project }) => {
  const [tilt, setTilt] = useState<CardTiltState>({
    rotateX: 0,
    rotateY: 0,
    x: 0,
    y: 0,
    isHovered: false,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4.5;
    const rotateY = ((x - centerX) / centerX) * 4.5;
    setTilt({ rotateX, rotateY, x, y, isHovered: true });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, x: 0, y: 0, isHovered: false });
  };

  const cleanVercelHost = project.liveUrl.replace(/^https?:\/\//, '');

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="project-visual real-work-visual flagship-interactive-card"
      style={{
        background: 'linear-gradient(135deg, #0e0f14, #060709)',
        border: '1px solid rgba(204, 220, 245, 0.12)',
        borderRadius: '18px',
        padding: '24px',
        minHeight: '310px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        transform: tilt.isHovered
          ? `perspective(1000px) rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg) translateY(-4px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)',
        transition: tilt.isHovered ? 'transform 0.08s ease-out' : 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      {tilt.isHovered && (
        <div
          className="card-spotlight-layer"
          style={{
            background: `radial-gradient(circle 380px at ${tilt.x}px ${tilt.y}px, rgba(45, 212, 191, 0.13), transparent 75%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Domain-Specific Cybernetic Effects */}
      {project.id === 'orbit' && (
        <>
          <div className="scanline-beam" aria-hidden="true" />
          {/* Cybernetic Reticle Corner Brackets */}
          <div style={{ position: 'absolute', top: 12, left: 12, width: 10, height: 10, borderTop: '2px solid #2dd4bf', borderLeft: '2px solid #2dd4bf', pointerEvents: 'none', opacity: 0.8 }} />
          <div style={{ position: 'absolute', top: 12, right: 12, width: 10, height: 10, borderTop: '2px solid #2dd4bf', borderRight: '2px solid #2dd4bf', pointerEvents: 'none', opacity: 0.8 }} />
          <div style={{ position: 'absolute', bottom: 12, left: 12, width: 10, height: 10, borderBottom: '2px solid #2dd4bf', borderLeft: '2px solid #2dd4bf', pointerEvents: 'none', opacity: 0.8 }} />
          <div style={{ position: 'absolute', bottom: 12, right: 12, width: 10, height: 10, borderBottom: '2px solid #2dd4bf', borderRight: '2px solid #2dd4bf', pointerEvents: 'none', opacity: 0.8 }} />
        </>
      )}

      {/* Browser Bar with Status & Links */}
      <div
        className="work-browser-bar"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.03)',
          padding: '8px 14px',
          borderRadius: '10px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          zIndex: 2,
        }}
      >
        <span style={{ display: 'flex', gap: '6px', flexShrink: 0, alignItems: 'center' }}>
          <i style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }}></i>
          <i style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }}></i>
          <i style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }}></i>
        </span>

        {/* Quick Access Badges inside Mockup */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden', fontSize: '11px', fontFamily: 'var(--font-mono)', minWidth: 0, flex: 1 }}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#10b981',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            title={`Open Live Vercel App: ${cleanVercelHost}`}
          >
            <Globe className="w-3 h-3 text-emerald-400" />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cleanVercelHost}</span>
          </a>
          <span style={{ color: '#444' }}>|</span>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#2dd4bf',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            title="Open GitHub Repository"
          >
            <GithubIcon size={12} />
            <span>Git</span>
          </a>
        </div>

        <span style={{ color: '#777', fontSize: '10px', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span className="live-dot-pulse" style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#2dd4bf', display: 'inline-block' }} />
          Verified
        </span>
      </div>

      {/* Live Animated Telemetry Ribbon */}
      <div style={{ margin: '18px 0', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
          <span
            style={{
              fontSize: '10px',
              fontFamily: 'var(--font-mono)',
              padding: '3px 9px',
              borderRadius: '6px',
              background: 'rgba(45, 212, 191, 0.15)',
              border: '1px solid rgba(45, 212, 191, 0.35)',
              color: '#2dd4bf',
              fontWeight: 'bold',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <ShieldCheck className="w-3 h-3" />
            {project.tier}
          </span>

          {/* Interactive Live Status Indicator */}
          {project.id === 'orbit' && (
            <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#5eead4', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="live-dot-pulse" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2dd4bf', display: 'inline-block' }} />
              <Activity className="w-3 h-3 text-teal-400" />
              <span>468 MESH • 60 FPS • SUB-50MS</span>
            </div>
          )}

          {project.id === 's2-legal-ai' && (
            <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#5eead4', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="live-dot-pulse" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2dd4bf', display: 'inline-block' }} />
              <Cpu className="w-3 h-3 text-teal-400" />
              <span>MULTI-AGENT GRAPH • VERIFIED</span>
            </div>
          )}

          {project.id === 'cosmos' && (
            <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#5eead4', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="live-dot-pulse" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2dd4bf', display: 'inline-block' }} />
              {/* Animated Equalizer Waves */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '14px' }}>
                <span className="eq-bar-1" style={{ width: '2px', background: '#2dd4bf', borderRadius: '1px', display: 'inline-block' }} />
                <span className="eq-bar-2" style={{ width: '2px', background: '#5eead4', borderRadius: '1px', display: 'inline-block' }} />
                <span className="eq-bar-3" style={{ width: '2px', background: '#2dd4bf', borderRadius: '1px', display: 'inline-block' }} />
                <span className="eq-bar-4" style={{ width: '2px', background: '#5eead4', borderRadius: '1px', display: 'inline-block' }} />
                <span className="eq-bar-5" style={{ width: '2px', background: '#2dd4bf', borderRadius: '1px', display: 'inline-block' }} />
              </div>
              <span>NASA SOL 4120 TELEMETRY</span>
            </div>
          )}

          {project.id === 'smart-retail-ai' && (
            <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#5eead4', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="live-dot-pulse" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2dd4bf', display: 'inline-block' }} />
              <Radio className="w-3 h-3 text-teal-400" />
              <span>REID CAMERA HANDOFF • &lt;1MS</span>
            </div>
          )}
        </div>

        <div
          style={{
            fontSize: '25px',
            fontWeight: '600',
            color: '#f1eee8',
            fontFamily: 'var(--font-sans)',
            letterSpacing: '-0.5px',
            transition: 'color 0.2s ease',
          }}
        >
          {project.title}
        </div>
        <div style={{ fontSize: '13px', color: '#2dd4bf', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
          {project.headline}
        </div>

        {/* Live Traveling Light Bus for Multi-Agent Card */}
        {project.id === 's2-legal-ai' && (
          <div style={{ margin: '14px 0 6px', position: 'relative', height: '2px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '2px', overflow: 'hidden' }}>
            <div className="traveling-packet" />
          </div>
        )}

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginTop: '16px',
          }}
        >
          {project.impactMetrics.map((m, i) => (
            <span
              key={i}
              style={{
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                padding: '4px 10px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#d4d4d8',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'border-color 0.2s ease, background 0.2s ease',
              }}
            >
              <span style={{ color: '#2dd4bf', fontWeight: 'bold' }}>✓</span> {m}
            </span>
          ))}
        </div>
      </div>

      <div className="work-artifact-label" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
        <span style={{ color: '#888', fontSize: '10px', fontFamily: 'var(--font-mono)' }}>
          {project.category.toUpperCase()}
        </span>
        <span style={{ color: '#10b981', fontSize: '10px', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
          VERCEL PRODUCTION DEPLOYMENT
        </span>
      </div>
    </div>
  );
};

export const SarthakSelectedWork: React.FC = () => {
  const [activePipeline, setActivePipeline] = useState<string | null>(null);

  const togglePipeline = (id: string) => {
    setActivePipeline(activePipeline === id ? null : id);
  };

  return (
    <section id="work" className="selected-work chapter solid-section">
      <div className="section-label">
        <span>02 / SELECTED WORK</span>
        <span>BUILT. BENCHMARKED. PUT INTO THE WORLD.</span>
      </div>

      <div className="selected-heading" data-editorial-reveal="true">
        <h2>
          Prototypes are a start.
          <br />
          <em>This is the production work.</em>
        </h2>
        <p>
          From high-throughput spatial computer vision to deliberative multi-agent reasoning.
          <br />
          A complete engineering matrix: 4 flagship systems and 3 verified production deployments.
        </p>
      </div>

      {/* BLOCK 1: Top 4 Flagship Systems (In-Depth Big Block) */}
      <div className="work-gallery">
        {FEATURED_PROJECTS.map((project) => {
          const isPipelineOpen = activePipeline === project.id;

          return (
            <article
              key={project.id}
              className="work-piece"
              data-editorial-reveal="true"
              style={{ marginBottom: '70px' }}
            >
              <div className="work-artwork" style={{ cursor: 'default' }}>
                <FlagshipCardVisual project={project} />
              </div>

              <div className="work-caption">
                <span className="work-number">{project.rank}</span>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span className="eyebrow">{project.category}</span>
                    <span
                      style={{
                        fontSize: '9px',
                        fontFamily: 'var(--font-mono)',
                        padding: '2px 7px',
                        borderRadius: '4px',
                        background: 'rgba(45, 212, 191, 0.12)',
                        border: '1px solid rgba(45, 212, 191, 0.3)',
                        color: '#2dd4bf',
                      }}
                    >
                      {project.tier}
                    </span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  {/* Highlights list */}
                  <div style={{ marginTop: '14px' }}>
                    {project.highlights.map((h, i) => (
                      <div
                        key={i}
                        style={{
                          fontSize: '12.5px',
                          color: '#bbb',
                          marginBottom: '6px',
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '8px',
                          lineHeight: '1.6',
                        }}
                      >
                        <span style={{ color: '#2dd4bf', fontSize: '14px' }}>•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Pipeline Button */}
                  <div style={{ marginTop: '16px' }}>
                    <button
                      onClick={() => togglePipeline(project.id)}
                      style={{
                        background: 'rgba(45, 212, 191, 0.08)',
                        border: '1px solid rgba(45, 212, 191, 0.35)',
                        borderRadius: '6px',
                        color: '#2dd4bf',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        cursor: 'pointer',
                        padding: '6px 12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>{isPipelineOpen ? 'Hide System Pipeline [-]' : 'Inspect Pipeline Architecture [+]'}</span>
                    </button>

                    {isPipelineOpen && (
                      <div
                        style={{
                          marginTop: '12px',
                          padding: '16px',
                          background: 'rgba(45, 212, 191, 0.04)',
                          border: '1px solid rgba(45, 212, 191, 0.25)',
                          borderRadius: '12px',
                          fontSize: '11.5px',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        <div style={{ fontWeight: 'bold', color: '#2dd4bf', marginBottom: '10px', letterSpacing: '0.5px' }}>
                          VERIFIED SYSTEM ARCHITECTURE SEQUENCE:
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          {project.architectureFlow.map((flow) => (
                            <div key={flow.step} style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
                              <span style={{ color: '#2dd4bf', fontWeight: 'bold' }}>[{flow.step}]</span>
                              <span style={{ color: '#fff', fontWeight: '600' }}>{flow.label}:</span>
                              <span style={{ color: '#bbb' }}>{flow.detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tech stack pills */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      marginTop: '16px',
                    }}
                  >
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '10px',
                          fontFamily: 'var(--font-mono)',
                          padding: '3px 9px',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#999',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Dual Action Buttons: Live Vercel App + GitHub Repo */}
                  <div style={{ marginTop: '22px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '9px 20px',
                        borderRadius: '24px',
                        background: '#2dd4bf',
                        color: '#030303',
                        fontSize: '12px',
                        fontWeight: '600',
                        fontFamily: 'var(--font-mono)',
                        textDecoration: 'none',
                        boxShadow: '0 4px 16px rgba(45, 212, 191, 0.3)',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(45, 212, 191, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(45, 212, 191, 0.3)';
                      }}
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Live Vercel App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '9px 18px',
                        borderRadius: '24px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#f1eee8',
                        fontSize: '12px',
                        fontFamily: 'var(--font-mono)',
                        textDecoration: 'none',
                        transition: 'transform 0.2s ease, border-color 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.borderColor = 'rgba(45, 212, 191, 0.6)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                      }}
                    >
                      <GithubIcon size={14} />
                      <span>GitHub Repo</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* BLOCK 2: Minimal "Work More" list for projects 05 to 07 */}
      <div className="work-more" style={{ marginTop: '70px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}>
        <span className="eyebrow" style={{ color: '#2dd4bf', marginBottom: '24px', display: 'block', letterSpacing: '1.2px' }}>
          02.B / ADDITIONAL PRODUCTION SYSTEMS
        </span>

        {ADDITIONAL_PROJECTS.map((proj) => (
          <div
            key={proj.id}
            className="brief-row-interactive"
            style={{
              borderBottom: '1px solid var(--line)',
              padding: '24px 12px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              borderRadius: '8px',
            }}
          >
            {/* Luminous left accent indicator */}
            <div className="row-accent-bar" />

            <div>
              <small
                style={{
                  font: '9px/1.6 var(--font-mono)',
                  color: '#b6a998',
                  marginBottom: '6px',
                  display: 'block',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                }}
              >
                {proj.rank} / {proj.category}
              </small>
              <div
                style={{
                  font: '400 clamp(22px, 2.6vw, 36px)/1.2 var(--font-display)',
                  color: '#f1eee8',
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <span>{proj.title}</span>
                <em
                  style={{
                    font: '9px var(--font-mono)',
                    verticalAlign: 'middle',
                    color: '#5eead4',
                    border: '1px solid rgba(45, 212, 191, 0.35)',
                    background: 'rgba(45, 212, 191, 0.08)',
                    borderRadius: '30px',
                    padding: '3px 10px',
                    display: 'inline-block',
                    fontStyle: 'normal',
                  }}
                >
                  {proj.tier.split(' ')[0]}
                </em>
              </div>
            </div>

            {/* Minimal dual buttons: Live Vercel & Git Repo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="brief-action-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  background: 'rgba(56, 189, 248, 0.08)',
                  color: '#38bdf8',
                  fontSize: '11.5px',
                  fontFamily: 'var(--font-mono)',
                  textDecoration: 'none',
                }}
                title="Launch Live Vercel App"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Live Vercel</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="brief-action-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: '1px solid rgba(45, 212, 191, 0.35)',
                  background: 'rgba(45, 212, 191, 0.08)',
                  color: '#2dd4bf',
                  fontSize: '11.5px',
                  fontFamily: 'var(--font-mono)',
                  textDecoration: 'none',
                }}
                title="Inspect GitHub Repository"
              >
                <GithubIcon size={12} />
                <span>Git Repo</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}

        <div style={{ marginTop: '28px' }}>
          <a
            href="https://github.com/kramasrisurya?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="text-link"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '1px',
              color: '#888',
              transition: 'color 0.2s ease',
            }}
          >
            Explore all 20+ open-source repositories on GitHub
            <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
