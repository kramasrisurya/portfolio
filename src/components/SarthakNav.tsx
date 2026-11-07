import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { SignalText } from './SignalText';

interface SarthakNavProps {
  onOpenResume: () => void;
}

export const SarthakNav: React.FC<SarthakNavProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navigation refined-navigation glass-navigation" data-hidden="false">
      <a className="wordmark" href="#top" aria-label={PROFILE.name}>
        <span className="nav-identity">
          <span>{PROFILE.name}</span>
        </span>
      </a>

      <nav className={`nav-links ${mobileMenuOpen ? 'is-open' : ''}`} aria-label="Main navigation" id="main-nav">
        <a className="nav-destination" href="#work" onClick={() => setMobileMenuOpen(false)}>
          <SignalText>Work</SignalText>
          <span className="nav-mobile-arrow" aria-hidden="true">→</span>
        </a>
        <a className="nav-destination" href="#about" onClick={() => setMobileMenuOpen(false)}>
          <SignalText>About</SignalText>
          <span className="nav-mobile-arrow" aria-hidden="true">→</span>
        </a>
        <a className="nav-destination" href="#expertise" onClick={() => setMobileMenuOpen(false)}>
          <SignalText>Expertise</SignalText>
          <span className="nav-mobile-arrow" aria-hidden="true">→</span>
        </a>
        <a className="nav-destination" href="#hackathons" onClick={() => setMobileMenuOpen(false)}>
          <SignalText>Hackathons (3x)</SignalText>
          <span className="nav-mobile-arrow" aria-hidden="true">→</span>
        </a>
        <a className="nav-destination" href="#journey" onClick={() => setMobileMenuOpen(false)}>
          <SignalText>Journey</SignalText>
          <span className="nav-mobile-arrow" aria-hidden="true">→</span>
        </a>
        <button
          onClick={() => {
            setMobileMenuOpen(false);
            onOpenResume();
          }}
          className="nav-destination"
          style={{ background: 'transparent', border: 'none', textAlign: 'left', cursor: 'pointer' }}
        >
          <SignalText>Resume</SignalText>
          <span className="nav-mobile-arrow" aria-hidden="true">→</span>
        </button>
        <a className="nav-contact" href="#contact" onClick={() => setMobileMenuOpen(false)}>
          <SignalText>Let’s talk</SignalText>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </nav>

      <button
        className="menu-toggle"
        aria-expanded={mobileMenuOpen}
        aria-controls="main-nav"
        aria-label="Open menu"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span>Menu</span>
        {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>
    </header>
  );
};
