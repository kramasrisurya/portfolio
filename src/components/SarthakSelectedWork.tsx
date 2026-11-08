import React, { useState } from 'react';
import { ArrowUpRight, Layers, ExternalLink, Globe } from 'lucide-react';
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
          A complete engineering matrix: 4 flagship systems and 6 verified production deployments.
        </p>
      </div>

      {/* BLOCK 1: Top 4 Flagship Systems (In-Depth Big Block) */}
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
                          padding: '14px',
                          background: 'rgba(255, 140, 89, 0.04)',
                          border: '1px solid rgba(255, 140, 89, 0.2)',
                          borderRadius: '10px',
                          fontSize: '11px',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        <div style={{ fontWeight: 'bold', color: '#ff8c59', marginBottom: '8px' }}>
                          VERIFIED SYSTEM ARCHITECTURE SEQUENCE:
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {project.architectureFlow.map((flow) => (
                            <div key={flow.step} style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
                              <span style={{ color: '#ff8c59', fontWeight: 'bold' }}>[{flow.step}]</span>
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
                          padding: '2px 8px',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--line)',
                          color: '#888',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Dual Action Buttons: Live Vercel App + GitHub Repo */}
                  <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 18px',
                        borderRadius: '20px',
                        background: '#ff8c59',
                        color: '#030303',
                        fontSize: '12px',
                        fontWeight: '600',
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

      {/* BLOCK 2: Minimal "Work More" list for projects 05 to 10 */}
      <div className="work-more" style={{ marginTop: '70px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}>
        <span className="eyebrow" style={{ color: '#ff8c59', marginBottom: '24px', display: 'block' }}>
          02.B / ADDITIONAL PRODUCTION SYSTEMS
        </span>

        {ADDITIONAL_PROJECTS.map((proj) => (
          <div
            key={proj.id}
            style={{
              borderBottom: '1px solid var(--line)',
              padding: '22px 0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div>
              <small
                style={{
                  font: '9px/1.6 var(--font-mono)',
                  color: '#b6a998',
                  marginBottom: '6px',
                  display: 'block',
                  letterSpacing: '0.5px',
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
                  gap: '10px',
                }}
              >
                <span>{proj.title}</span>
                <em
                  style={{
                    font: '9px var(--font-mono)',
                    verticalAlign: 'middle',
                    color: '#ffac82',
                    border: '1px solid #8d6747',
                    borderRadius: '30px',
                    padding: '3px 9px',
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
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '7px 14px',
                  borderRadius: '20px',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  background: 'rgba(56, 189, 248, 0.06)',
                  color: '#38bdf8',
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                title="Launch Live Vercel App"
              >
                <Globe className="w-3 h-3" />
                <span>Live Vercel</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '7px 14px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 140, 89, 0.35)',
                  background: 'rgba(255, 140, 89, 0.06)',
                  color: '#ff8c59',
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                title="Open GitHub Repository"
              >
                <GithubIcon size={12} />
                <span>Git Repo</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}

        <a
          className="all-work-link"
          href="https://github.com/kramasrisurya"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginTop: '32px',
            fontSize: '13px',
            fontFamily: 'var(--font-mono)',
            color: '#b6a998',
            textDecoration: 'none',
          }}
        >
          <span>Explore all 20+ open-source repositories on GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};
