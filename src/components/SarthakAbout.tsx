import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SarthakSignalVisualizer } from './SarthakSignalVisualizer';
import { SignalText } from './SignalText';

export const SarthakAbout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'build' | 'reason' | 'scale'>('build');

  const disciplines = {
    build: {
      step: '01 / 03',
      label: 'STRUCTURE',
      heading: 'Give an idea structure.',
      body: 'Pairing asynchronous FastAPI event loops and Redis with deep computer vision pipelines so state is tracked in sub-millisecond real time.',
      linkText: 'Explore spatial systems',
      linkHref: '#work',
    },
    reason: {
      step: '02 / 03',
      label: 'DELIBERATE',
      heading: 'Reason before acting.',
      body: 'Designing multi-agent graphs with reflection loops where agents validate intermediate outputs against statutory constraints before committing recommendations.',
      linkText: 'Explore agentic reasoning',
      linkHref: '#work',
    },
    scale: {
      step: '03 / 03',
      label: 'SHIP',
      heading: 'Production velocity.',
      body: 'Hackathon speed with industrial standards: strict Pydantic v2 schemas, 100% pytest test suites, and reproducible Docker containerization.',
      linkText: 'Explore hackathons',
      linkHref: '#hackathons',
    },
  };

  const current = disciplines[activeTab];

  return (
    <section id="about" className="about chapter solid-section">
      <div className="section-label">
        <span>01 / THE PERSON BEHIND THE WORK</span>
        <span>A CONNECTED PERSPECTIVE</span>
      </div>

      <div className="about-grid">
        <div className="about-copy" data-reveal="true">
          <h2>
            Autonomous systems are
            <br />
            the starting point.
            <br />
            <em>Deliberative reasoning is the point.</em>
          </h2>

          <p className="lead">
            I connect algorithmic rigor, distributed backend speed, and schema-deterministic GenAI.
          </p>

          <p>
            Computer Science undergraduate at Amrita Vishwa Vidyapeetham (Class of 2029) and{' '}
            <strong className="copy-highlight" style={{ color: '#ff8c59' }}>
              3x consecutive hackathon champion
            </strong>{' '}
            (IIIT Kottayam, Epochon 2.0, Sem 1). Rather than building fragile prompt wrappers, I engineer
            multi-agent systems that verify domain constraints and spatial computer vision engines that track
            real-world state.
          </p>

          <a className="text-link" href="#work">
            Explore the engineering <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
          </a>

          <div className="identity-notes">
            <span>ENGINEERING RIGOR.</span>
            <span>AGENTIC INTELLECT.</span>
            <span>BUILDER'S VELOCITY.</span>
          </div>
        </div>

        {/* Signal Explorer Interactive Widget */}
        <div className="signal-explorer signal-about" data-editorial-reveal="true">
          <div className="signal-topline">
            <span className="eyebrow">
              <SignalText>THREE DISCIPLINES. ONE PERSPECTIVE.</SignalText>
            </span>
            <span aria-hidden="true">{current.step}</span>
          </div>

          {/* 3D Dynamic Particle & Shape Visualizer */}
          <SarthakSignalVisualizer mode={activeTab} />

          <div className="signal-options" role="group" aria-label="Explore my disciplines">
            <button
              aria-pressed={activeTab === 'build'}
              onClick={() => setActiveTab('build')}
            >
              <SignalText>Build</SignalText>
              <span aria-hidden="true">→</span>
            </button>
            <button
              aria-pressed={activeTab === 'reason'}
              onClick={() => setActiveTab('reason')}
            >
              <SignalText>Reason</SignalText>
              <span aria-hidden="true">→</span>
            </button>
            <button
              aria-pressed={activeTab === 'scale'}
              onClick={() => setActiveTab('scale')}
            >
              <SignalText>Scale</SignalText>
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="signal-story" aria-live="polite">
            <h3 key={current.heading}>{current.heading}</h3>
            <p key={current.body}>{current.body}</p>
            <a className="text-link" href={current.linkHref}>
              <SignalText>{current.linkText}</SignalText> <span aria-hidden="true">→</span>
            </a>
          </div>

          <p className="signal-hint">Choose a perspective.</p>
        </div>
      </div>
    </section>
  );
};
