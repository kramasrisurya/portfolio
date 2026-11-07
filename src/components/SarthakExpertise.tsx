import React, { useState } from 'react';
import { Minus, Plus, ArrowUpRight } from 'lucide-react';

export const SarthakExpertise: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const disciplines = [
    {
      id: 0,
      number: '01 / AGENTIC SYSTEMS & MULTI-AGENT REASONING',
      title: 'Reason before acting.',
      body: 'Single-turn prompt chains hallucinate under edge cases. I design deliberative multi-agent workflows where specialized sub-agents independently retrieve context, cross-verify outputs against statutory constraints, and synthesize validated decisions before returning answers.',
      strengths: 'Deliberative Workflows • Multi-Agent Consensus • Google Gemini API • Structured JSON • Pydantic Schemas',
    },
    {
      id: 1,
      number: '02 / SPATIAL COMPUTER VISION & REAL-TIME STATE',
      title: 'Perception without latency bottlenecks.',
      body: 'Real-time spatial intelligence requires bridging raw video frames with instant state updates. By coupling deep person re-identification (ReID) and Euclidean distance metric tracking with asynchronous Redis caching, customer journeys and hazard alerts are processed with sub-millisecond state persistence.',
      strengths: 'Person ReID • CNNs • Object Tracking • OpenCV • PyTorch • Redis AsyncIO State',
    },
    {
      id: 2,
      number: '03 / PRODUCTION INFRASTRUCTURE & RIGOR',
      title: 'Hackathon velocity, zero technical debt.',
      body: 'Speed should never come at the cost of brittle software. Every system I deliver enforces automated Ruff linting, thorough pytest test suites, asynchronous non-blocking event loops, and multi-stage Docker containerization.',
      strengths: 'FastAPI • Uvicorn • Docker • SQLAlchemy AsyncIO • Pytest • Ruff • Supabase SSR',
    },
  ];

  return (
    <section className="expertise chapter solid-section" id="expertise">
      <div className="section-label">
        <span>03 / HOW I THINK &amp; WORK</span>
        <span>DEPTH MEETS RIGOR</span>
      </div>

      <div className="expertise-grid expertise-studio">
        <div className="expertise-intro" data-reveal="true">
          <h2>
            How I work.
            <br />
            <em>From thesis to verified system.</em>
          </h2>
          <p className="muted">Choose a discipline. Follow the thinking.</p>

          <div className="thinking-path" aria-live="polite">
            <span className="eyebrow">
              <span className="signal-text">CORE ENGINEERING PRINCIPLES</span>
            </span>
            <ol>
              <li>
                <span>01</span>Model domain constraints
              </li>
              <li>
                <span>02</span>Enforce multi-agent verification
              </li>
              <li>
                <span>03</span>Ship sub-millisecond backends
              </li>
            </ol>
            <a href="#work" className="text-link">
              Explore the engineering <ArrowUpRight className="w-3.5 h-3.5 ml-1 inline" />
            </a>
          </div>
        </div>

        <div className="expertise-list">
          {disciplines.map((item) => {
            const isExpanded = expandedIndex === item.id;

            return (
              <article
                key={item.id}
                data-editorial-reveal="true"
                className={`expertise-item ${isExpanded ? 'expanded' : ''}`}
                style={{
                  borderBottom: '1px solid var(--line)',
                  paddingBottom: '20px',
                  marginBottom: '20px',
                }}
              >
                <h3>
                  <button
                    aria-expanded={isExpanded}
                    onClick={() => toggleAccordion(item.id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      padding: '12px 0',
                      cursor: 'pointer',
                    }}
                  >
                    <span>
                      <small className="eyebrow" style={{ display: 'block', marginBottom: '6px' }}>
                        <span className="signal-text">{item.number}</span>
                      </small>
                      <span style={{ fontSize: '20px', fontWeight: '500', color: '#f1eee8' }}>
                        {item.title}
                      </span>
                    </span>
                    {isExpanded ? (
                      <Minus className="w-5 h-5 text-amber-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-500" />
                    )}
                  </button>
                </h3>

                {isExpanded && (
                  <div className="expertise-body" style={{ marginTop: '14px', paddingLeft: '4px' }}>
                    <p style={{ color: '#ccc', fontSize: '14px', lineHeight: '1.7', marginBottom: '14px' }}>
                      {item.body}
                    </p>
                    <p
                      className="strengths"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: '#ff8c59',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {item.strengths}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
