import React from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface SarthakContactProps {
  onOpenResume: () => void;
}

export const SarthakContact: React.FC<SarthakContactProps> = ({ onOpenResume }) => {
  return (
    <section id="contact" className="contact chapter">
      <div className="section-label">
        <span>06 / THE NEXT CHAPTER</span>
        <span>LET’S MAKE IT MATTER</span>
      </div>

      <div className="contact-inner" data-editorial-reveal="true">
        <span className="availability">
          <i className="live-dot" style={{ marginRight: '8px' }}></i>
          OPEN TO MEANINGFUL CONVERSATIONS
        </span>

        <h2>
          Something great
          <br />
          starts with <em>a hello.</em>
        </h2>

        <a className="contact-cta" href={`mailto:${PROFILE.email}`}>
          Let’s connect <ArrowUpRight className="w-4 h-4 ml-1 inline" />
        </a>

        <p>
          AI/ML engineering, autonomous systems research, and ambitious software architectures.
          <br />
          If our worlds overlap, I’d love to hear from you.
        </p>
      </div>

      <footer>
        <a className="footer-name" href="#top">
          {PROFILE.name}
          <span>.</span>
        </a>

        <div className="socials">
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <ArrowUpRight className="w-3 h-3 ml-0.5 inline" />
          </a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">
            GitHub <ArrowUpRight className="w-3 h-3 ml-0.5 inline" />
          </a>
          <a href={`mailto:${PROFILE.email}`}>
            Email <ArrowUpRight className="w-3 h-3 ml-0.5 inline" />
          </a>
          <button
            onClick={onOpenResume}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', font: 'inherit' }}
          >
            Resume <ArrowUpRight className="w-3 h-3 ml-0.5 inline" />
          </button>
        </div>

        <a href="#top" className="back-top" aria-label="Back to top">
          <ArrowUp className="w-4 h-4" />
        </a>

        <div className="footer-bottom">
          <span>{PROFILE.location.toUpperCase()}</span>
          <span>AMRITA CSE '29 • 3X HACKATHON CHAMPION</span>
          <span>© 2026 RAMA SRI SURYA</span>
        </div>
      </footer>
    </section>
  );
};
