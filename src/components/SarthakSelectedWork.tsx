import React, { useState } from 'react';
import { ArrowUpRight, Layers, ExternalLink, Globe, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { FEATURED_PROJECTS, ADDITIONAL_PROJECTS } from '../data/portfolioData';

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
          A complete engineering matrix: 3 flagship S-Tier systems and 7 verified production deployments.
        </p>
      </div>

      {/* BLOCK 1: Top 3 S-Tier Flagship Systems (In-Depth) */}
      <div className="work-gallery">
        {FEATURED_PROJECTS.map((project) => {
          const isPipelineOpen = activePipeline === project.id;
          const cleanVercelHost = project.liveUrl.replace(/^https?:\/\//, '');

          return (
            <article
              key={project.id}
              className="work-piece"
              data-editorial-reveal="true"
              style={{ marginBottom: '70px' }}
            >
              <div
                className="work-artwork"
                style={{ cursor: 'default' }}
              >
                <div
                  className="project-visual real-work-visual"
                  style={{
                    background: 'linear-gradient(135deg, #101014, #08080a)',
                    border: '1px solid var(--line)',
                    borderRadius: '16px',
                    padding: '24px',
                    minHeight: '280px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  {/* Browser Bar with BOTH Git Repo and Vercel links */}
                  <div
                    className="work-browser-bar"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      padding: '8px 12px',
                      borderRadius: '10px',
                    }}
                  >
                    <span style={{ display: 'flex', gap: '5px', flexShrink: 0 }}>
                      <i style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }}></i>
                      <i style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }}></i>
                      <i style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }}></i>
                    </span>

                    {/* Quick Access Badges inside Mockup */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', overflow: 'hidden', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
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
                        }}
                        title={`Open Live Vercel App: ${cleanVercelHost}`}
                      >
                        <Globe className="w-3 h-3" />
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cleanVercelHost}</span>
                      </a>
                      <span style={{ color: '#444' }}>|</span>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: '#ff8c59',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          textDecoration: 'none',
                        }}
                        title="Open GitHub Repository"
                      >
                        <GithubIcon size={12} />
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Git Repo</span>
                      </a>
                    </div>

                    <span style={{ color: '#666', fontSize: '10px', fontFamily: 'var(--font-mono)' }}>
                      {project.status}
                    </span>
                  </div>

                  {/* Architecture Metrics in Mockup */}
                  <div style={{ margin: '20px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span
                        style={{
                          fontSize: '10px',
                          fontFamily: 'var(--font-mono)',
                          padding: '2px 8px',
                          borderRadius: '6px',
                          background: 'rgba(255, 140, 89, 0.15)',
                          color: '#ff8c59',
                          fontWeight: 'bold',
                        }}
                      >
                        {project.tier}
                      </span>
                    </div>

                    <div
                      style={{
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#f1eee8',
                        fontFamily: 'var(--font-sans)',
                        letterSpacing: '-0.5px',
                      }}
                    >
                      {project.title}
                    </div>
                    <div style={{ fontSize: '13px', color: '#ff8c59', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
                      {project.headline}
                    </div>

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
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid var(--line)',
                            color: '#ccc',
                          }}
                        >
                          ✓ {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="work-artifact-label" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#888', fontSize: '10px', fontFamily: 'var(--font-mono)' }}>
                      {project.category.toUpperCase()}
                    </span>
                    <span style={{ color: '#10b981', fontSize: '10px', fontFamily: 'var(--font-mono)' }}>
                      VERCEL PRODUCTION DEPLOYMENT
                    </span>
                  </div>
                </div>
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
                        padding: '1px 6px',
                        borderRadius: '4px',
                        background: 'rgba(255, 140, 89, 0.1)',
                        color: '#ff8c59',
                      }}
                    >
                      {project.tier}
                    </span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  {/* Highlights list */}
                  <div style={{ marginTop: '12px' }}>
                    {project.highlights.map((h, i) => (
                      <div
                        key={i}
                        style={{
                          fontSize: '12px',
                          color: '#aaa',
                          marginBottom: '4px',
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '6px',
                        }}
                      >
                        <span style={{ color: '#ff8c59' }}>•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Pipeline Button */}
                  <div style={{ marginTop: '14px' }}>
                    <button
                      onClick={() => togglePipeline(project.id)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#ff8c59',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        cursor: 'pointer',
                        padding: '0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>{isPipelineOpen ? 'Hide System Pipeline [-]' : 'Inspect Pipeline Architecture [+]'}</span>
                    </button>

                    {isPipelineOpen && (
                      <div
                        style={{
                          marginTop: '12px',
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                          gap: '10px',
                        }}
                      >
                        {project.architectureFlow.map((flow) => (
                          <div
                            key={flow.step}
                            style={{
                              background: '#121215',
                              border: '1px solid rgba(255, 140, 89, 0.3)',
                              borderRadius: '10px',
                              padding: '12px',
                            }}
                          >
                            <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#ff8c59', fontWeight: 'bold' }}>
                              STEP {flow.step}
                            </div>
                            <div style={{ fontSize: '12px', color: '#fff', fontWeight: '600', marginTop: '2px' }}>
                              {flow.label}
                            </div>
                            <div style={{ fontSize: '11px', color: '#888', marginTop: '4px', lineHeight: '1.4' }}>
                              {flow.detail}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* DUAL ACTION BUTTONS: Live Vercel Link & Git Repo Link */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: '14px',
                      marginTop: '20px',
                      paddingTop: '16px',
                      borderTop: '1px solid var(--line)',
                    }}
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        background: '#ff8c59',
                        color: '#030303',
                        fontWeight: '600',
                        fontSize: '12px',
                        fontFamily: 'var(--font-mono)',
                        textDecoration: 'none',
                        boxShadow: '0 4px 14px rgba(255, 140, 89, 0.25)',
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
                        padding: '8px 16px',
                        borderRadius: '20px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--line)',
                        color: '#f1eee8',
                        fontSize: '12px',
                        fontFamily: 'var(--font-mono)',
                        textDecoration: 'none',
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

      {/* BLOCK 2: Production Systems Directory (Rank 04 to 10) */}
      <div
        className="production-directory"
        style={{
          marginTop: '60px',
          paddingTop: '50px',
          borderTop: '1px solid var(--line)',
        }}
      >
        <div style={{ marginBottom: '32px' }}>
          <span className="eyebrow" style={{ color: '#ff8c59' }}>
            02.B / PRODUCTION SYSTEMS DIRECTORY
          </span>
          <h3
            style={{
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              fontWeight: '500',
              color: '#fff',
              margin: '8px 0 12px',
              letterSpacing: '-0.5px',
            }}
          >
            Ranked Production Deployments &amp; Utilities
          </h3>
          <p style={{ color: '#888', fontSize: '13px', maxWidth: '680px', lineHeight: '1.6' }}>
            Beyond the three core S-Tier reasoning graphs, here are 7 verified production deployments spanning NASA telemetry, biometric edge vision, industrial robotics, and cloud utilities.
          </p>
        </div>

        {/* Directory Matrix Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '16px',
          }}
        >
          {ADDITIONAL_PROJECTS.map((proj) => {
            const cleanHost = proj.liveUrl.replace(/^https?:\/\//, '');

            return (
              <div
                key={proj.id}
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 20, 24, 0.7), rgba(10, 10, 12, 0.9))',
                  border: '1px solid var(--line)',
                  borderRadius: '14px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
              >
                <div>
                  {/* Top Bar: Rank + Tier + Status */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontFamily: 'var(--font-mono)',
                          color: '#ff8c59',
                          fontWeight: 'bold',
                        }}
                      >
                        RANK {proj.rank}
                      </span>
                      <span
                        style={{
                          fontSize: '10px',
                          fontFamily: 'var(--font-mono)',
                          padding: '2px 8px',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: '#ddd',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                      >
                        {proj.tier}
                      </span>
                    </div>

                    <span
                      style={{
                        fontSize: '9px',
                        fontFamily: 'var(--font-mono)',
                        color: proj.status.includes('100%') ? '#10b981' : '#ffbd2e',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      {proj.status}
                    </span>
                  </div>

                  {/* Title & Headline */}
                  <h4
                    style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#fff',
                      margin: '0 0 4px',
                      letterSpacing: '-0.3px',
                    }}
                  >
                    {proj.title}
                  </h4>
                  <div
                    style={{
                      fontSize: '12px',
                      fontFamily: 'var(--font-mono)',
                      color: '#ff8c59',
                      marginBottom: '10px',
                    }}
                  >
                    {proj.headline}
                  </div>

                  <p
                    style={{
                      fontSize: '12px',
                      color: '#aaa',
                      lineHeight: '1.5',
                      marginBottom: '14px',
                    }}
                  >
                    {proj.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '5px',
                      marginBottom: '16px',
                    }}
                  >
                    {proj.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '10px',
                          fontFamily: 'var(--font-mono)',
                          padding: '2px 7px',
                          borderRadius: '4px',
                          background: 'rgba(255, 255, 255, 0.03)',
                          color: '#888',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Dual Action Links: Vercel Repo + Git Repo */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '14px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      color: '#10b981',
                      textDecoration: 'none',
                      fontWeight: '500',
                    }}
                    title={`Open Live Vercel: ${cleanHost}`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>{cleanHost}</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: '#bbb',
                      textDecoration: 'none',
                    }}
                    title="Open GitHub Repository"
                  >
                    <GithubIcon size={14} />
                    <span>Git Repo</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Link to GitHub */}
        <div style={{ marginTop: '28px', textAlign: 'center' }}>
          <a
            className="all-work-link"
            href="https://github.com/kramasrisurya"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '12px',
              fontFamily: 'var(--font-mono)',
              color: '#888',
              padding: '10px 20px',
              borderRadius: '20px',
              border: '1px solid var(--line)',
            }}
          >
            <span>Explore all 20+ open-source repositories on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
