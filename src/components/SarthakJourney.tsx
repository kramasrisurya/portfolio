import React from 'react';

export const SarthakJourney: React.FC = () => {
  return (
    <section id="journey" className="journey chapter solid-section">
      <div className="section-label">
        <span>INTERLUDE / STILL BECOMING</span>
        <span>A JOURNEY IN MOTION</span>
      </div>

      <div className="journey-grid">
        <h2>
          Started with code.
          <br />
          <em>Kept asking why.</em>
        </h2>

        <div className="timeline">
          <article data-editorial-reveal="true">
            <span>2024</span>
            <h3>Algorithmic foundations.</h3>
            <p>
              Commenced Bachelor of Technology in Computer Science &amp; Engineering at Amrita Vishwa Vidyapeetham,
              Kollam. Immersed in data structures, linear algebra, and deep learning architectures.
            </p>
          </article>

          <article data-editorial-reveal="true">
            <span>2025</span>
            <h3>Freshman triumph &amp; credentials.</h3>
            <p>
              Secured 1st place in university-wide hackathon (Semester 1) recognized by evaluators for clean modular
              software architecture. Completed the rigorous IIT Patna AIML Specialization and AWS Cloud Practitioner
              program.
            </p>
          </article>

          <article data-editorial-reveal="true">
            <span>2026 (SEM 2)</span>
            <h3>Epochon 2.0 Winner — Autonomous Agents.</h3>
            <p>
              Awarded 1st place for architecting S2 Deliberative Legal Agent (OmniBots) — an autonomous multi-agent
              system with self-reflection and statutory deadline verification.
            </p>
          </article>

          <article data-editorial-reveal="true">
            <span>2026 (SEM 3)</span>
            <h3>IIIT Kottayam Hackathon Champion.</h3>
            <p>
              Won top honors competing against competitive inter-college engineering teams at the Indian Institute of
              Information Technology, Kottayam, delivering an intelligent end-to-end system under strict time limits.
            </p>
          </article>

          <article data-editorial-reveal="true">
            <span>TODAY</span>
            <h3>Connecting the whole picture.</h3>
            <p>
              Building high-throughput spatial computer vision, deliberative multi-agent reasoning, and schema-deterministic
              GenAI architectures.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
