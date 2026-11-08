import React from 'react';
import { ArrowDown, ArrowUpRight, Activity } from 'lucide-react';
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
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          <i className="live-dot live-dot-pulse" style={{ marginRight: '10px' }}></i>
          ENGINEER. RESEARCHER. BUILDER.
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <Activity className="w-3 h-3 text-teal-400" />
          BASED IN INDIA • AMRITA CSE '29
        </span>
      </div>

      {/* Central Hero Content */}
      <div className="hero-content">
        <span className="hero-kicker floating-elem">
          <SignalText>AN AGENTIC PERSPECTIVE ON INTELLIGENCE</SignalText>
        </span>

        <h1>
          <span className="line-mask">
            <span className="reveal-line">
              Rama Sri <em className="shimmer-text">Surya</em>
            </span>
          </span>
        </h1>

        <div className="hero-description">
          <p>
            I architect autonomous multi-agent reasoning, spatial computer vision pipelines,
            <br className="desktop-break" /> and production-grade GenAI systems.
          </p>

          <div className="hero-actions">
            <a
              className="pill-link"
              href="#work"
              style={{ transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <SignalText>Explore my work</SignalText>
              <ArrowDown className="w-3.5 h-3.5 ml-1 text-teal-400" />
            </a>

            <a
              className="text-link"
              href="#contact"
              style={{ transition: 'all 0.2s ease' }}
            >
              <SignalText>Start a conversation</SignalText>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-teal-400" />
            </a>

            <button
              onClick={onOpenResume}
              className="text-link"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#2dd4bf',
                display: 'inline-flex',
                alignItems: 'center',
                transition: 'all 0.2s ease',
              }}
            >
              <SignalText>View ATS Resume</SignalText>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Side Note with Telemetry */}
      <div className="hero-side-note">
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <span className="live-dot-pulse" style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#2dd4bf', display: 'inline-block' }} />
          01 / PRESENCE
        </span>
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
        <a href="#about" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <span className="scroll-line"></span> SCROLL TO DISCOVER
        </a>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <span className="live-dot-pulse" style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#2dd4bf', display: 'inline-block' }} />
          3X CONSECUTIVE HACKATHON CHAMPION
        </span>
        <span className="hero-edition">IIIT KOTTAYAM • EPOCHON 2.0 • SEM 1 →</span>
      </div>
    </section>
  );
};
