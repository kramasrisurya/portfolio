import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { SignalText } from './SignalText';

interface SarthakHeroProps {
  onOpenResume: () => void;
}

export const SarthakHero: React.FC<SarthakHeroProps> = ({ onOpenResume }) => {
  return (
    <section className="hero" id="top">
      {/* Background Architectural Grid Lines */}
      <div className="hero-grid" aria-hidden="true"></div>

      {/* Topline Telemetry */}
      <div className="hero-topline">
        <span>
          <i className="live-dot" style={{ marginRight: '8px' }}></i>
          ENGINEER. RESEARCHER. BUILDER.
        </span>
        <span>BASED IN INDIA • AMRITA CSE '29</span>
      </div>

      {/* Central Hero Content */}
      <div className="hero-content">
        <span className="hero-kicker">
          <SignalText>AN AGENTIC PERSPECTIVE ON INTELLIGENCE</SignalText>
        </span>

        <h1>
          <span className="line-mask">
            <span className="reveal-line">
              Rama Sri <em>Surya</em>
            </span>
          </span>
        </h1>

        <div className="hero-description">
          <p>
            I architect autonomous multi-agent reasoning, spatial computer vision pipelines,
            <br className="desktop-break" /> and production-grade GenAI systems.
          </p>

          <div className="hero-actions">
            <a className="pill-link" href="#work">
              <SignalText>Explore my work</SignalText>
              <ArrowDown className="w-3.5 h-3.5 ml-1" />
            </a>

            <a className="text-link" href="#contact">
              <SignalText>Start a conversation</SignalText>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </a>

            <button
              onClick={onOpenResume}
              className="text-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ff8c59' }}
            >
              <SignalText>View ATS Resume</SignalText>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Side Note */}
      <div className="hero-side-note">
        <span>01 / PRESENCE</span>
        <span>
          AUTONOMOUS AGENTS
          <br />
          SPATIAL VISION
          <br />
          DELIBERATIVE AI
        </span>
      </div>

      {/* Hero Bottom Telemetry */}
      <div className="hero-bottom">
        <a href="#about">
          <span className="scroll-line"></span> SCROLL TO DISCOVER
        </a>
        <span>3X CONSECUTIVE HACKATHON CHAMPION</span>
        <span className="hero-edition">IIIT KOTTAYAM • EPOCHON 2.0 • SEM 1 →</span>
      </div>
    </section>
  );
};
