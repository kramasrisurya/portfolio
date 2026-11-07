import React from 'react';
import { HACKATHONS } from '../data/portfolioData';

export const SarthakHackathons: React.FC = () => {
  return (
    <section id="hackathons" className="impact-stage chapter">
      <div className="impact-stage-content">
        <div className="section-label">
          <span>04 / COMPETITIVE TRIUMPHS</span>
          <span>PRESSURE. VELOCITY. TOP HONORS.</span>
        </div>

        <div className="impact-title" data-editorial-reveal="true">
          <h2>
            Hackathons test velocity.
            <br />
            <em>Architecture wins them.</em>
          </h2>
          <p>
            Every 24-48 hour hackathon is an opportunity
            <br />
            to out-engineer and out-execute under pressure.
          </p>
        </div>

        {/* Lead Impact Metric */}
        <div className="impact-lead" data-editorial-reveal="true">
          <div className="impact-value">
            <span>3x</span>
            <em>🏆</em>
          </div>
          <div className="impact-context">
            <h3>
              Consecutive championships.
              <br />
              Possibilities proven.
            </h3>
            <p>
              Secured 1st place in Semester 1, Semester 2 (Epochon 2.0), and Semester 3 (IIIT Kottayam).
              <br />
              Delivering production architectures under stringent time limits.
            </p>
          </div>
        </div>

        {/* 3 Hackathons Grid Pair */}
        <div className="impact-pair">
          {HACKATHONS.map((hackathon) => (
            <div key={hackathon.id} data-editorial-reveal="true">
              <strong>
                {hackathon.semester}
                <em>🏆</em>
              </strong>
              <h3>{hackathon.title}</h3>
              <p>{hackathon.description}</p>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: '#ff8c59',
                  marginTop: '8px',
                }}
              >
                {hackathon.organization} • {hackathon.year}
              </div>
            </div>
          ))}

          <div className="impact-principle">
            <span className="eyebrow">THE COMMON THREAD</span>
            <p>
              Build something useful.
              <br />
              Enforce domain constraints.
              <br />
              <em>Ship under pressure.</em>
            </p>
          </div>
        </div>

        {/* Reach / Attribution Strip */}
        <div className="reach-strip" style={{ marginTop: '50px' }}>
          <div className="reach-intro">
            <span className="eyebrow">
              COMPETITIVE ARENAS.
              <br />
              CONSISTENT EXECUTION.
            </span>
            <p>
              Proven ability to lead,
              <br />
              architect, and win.
            </p>
          </div>

          <div>
            <strong>
              1st<em>🏆</em>
            </strong>
            <span>IIIT Kottayam Inter-College Hackathon</span>
          </div>

          <div>
            <strong>
              Top<em>🏆</em>
            </strong>
            <span>Epochon 2.0 Agentic AI Hackathon</span>
          </div>
        </div>

        <p className="reach-attribution" style={{ marginTop: '16px' }}>
          Consecutive wins awarded across university and inter-institute hackathons for real-world software architecture and autonomous AI.
        </p>
      </div>
    </section>
  );
};
