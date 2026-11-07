import React, { useState } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';

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
          A few core systems I’ve architected and brought to life.
        </p>
      </div>

      <div className="work-gallery">
        {FEATURED_PROJECTS.map((project, idx) => {
          const number = `0${idx + 1}`;
          const isPipelineOpen = activePipeline === project.id;

          return (
            <article
              key={project.id}
              className="work-piece"
              data-editorial-reveal="true"
              style={{ marginBottom: '60px' }}
            >
              <a
                className="work-artwork"
                aria-label={`Explore ${project.title}`}
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="project-visual real-work-visual"
                  style={{
                    background: 'linear-gradient(135deg, #101014, #08080a)',
                    border: '1px solid var(--line)',
                    borderRadius: '16px',
                    padding: '24px',
                    minHeight: '260px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div className="work-browser-bar">
                    <span style={{ display: 'flex', gap: '5px', flexShrink: 0 }}>
                      <i></i>
                      <i></i>
                      <i></i>
                    </span>
                    <span style={{ minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', padding: '0 8px' }}>
                      github.com/kramasrisurya/{project.id}
                    </span>
                    <span style={{ flexShrink: 0 }}>→</span>
                  </div>

                  {/* Architecture Metrics in Mockup */}
                  <div style={{ margin: '24px 0' }}>
                    <div
                      style={{
                        fontSize: '22px',
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

                  <div className="work-artifact-label">
                    <span>{project.category.toUpperCase()}</span>
                    <span>PRODUCTION REPOSITORY</span>
                  </div>
                </div>
                <span className="work-artwork-arrow">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>

              <div className="work-caption">
                <span className="work-number">{number}</span>
                <div>
                  <span className="eyebrow">{project.category}</span>
                  <h3>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  </h3>
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
                </div>

                <a className="text-link" href={project.githubUrl} target="_blank" rel="noreferrer">
                  Explore the engineering <ArrowUpRight className="w-3.5 h-3.5 ml-1 inline" />
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {/* Work More list */}
      <div className="work-more">
        <span className="eyebrow">ADDITIONAL ENGINEERING WORK</span>
        <a href="https://github.com/kramasrisurya/movie-recommendation-system" target="_blank" rel="noreferrer">
          <span>
            <small>05 / MACHINE LEARNING</small>Movie Recommendation Engine <em>TF-IDF &amp; Cosine</em>
          </span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
        <a href="https://github.com/kramasrisurya" target="_blank" rel="noreferrer">
          <span>
            <small>06 / APPLICATION BACKEND</small>FinTech Bank Management Model
          </span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
        <a className="all-work-link" href="https://github.com/kramasrisurya" target="_blank" rel="noreferrer">
          Explore all repositories on GitHub <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};
