import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Play, RefreshCw } from 'lucide-react';
import { PROFILE, HACKATHONS, FEATURED_PROJECTS } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const SarthakTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'agent --status',
      output: (
        <div style={{ color: '#10b981', fontFamily: 'var(--font-mono)', fontSize: '12px', lineHeight: '1.6' }}>
          <div>[OK] Profile: Rama Sri Surya | AI &amp; Autonomous Systems Engineer</div>
          <div>[OK] Accolades: 3x Consecutive Hackathon Champion (IIIT Kottayam, Epochon 2.0, Sem 1)</div>
          <div>[OK] Focus: Deliberative Multi-Agent Workflows, Person ReID Spatial Vision, and Gemini API.</div>
          <div style={{ color: '#888', marginTop: '4px' }}>
            Type <span style={{ color: '#ff8c59' }}>'help'</span> to see available commands or click the shortcut chips below.
          </div>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);
  const isInitialMount = useRef<boolean>(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const raw = cmdText.trim();
    if (!raw) return;

    const lower = raw.toLowerCase();
    let output: React.ReactNode = null;

    switch (lower) {
      case 'help':
        output = (
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', lineHeight: '1.6', color: '#ccc' }}>
            <div style={{ color: '#ff8c59', fontWeight: 'bold' }}>Available Commands:</div>
            <div>• <span style={{ color: '#10b981' }}>projects</span> : Inspect featured AI &amp; Vision systems</div>
            <div>• <span style={{ color: '#10b981' }}>hackathons</span> : View 3x hackathon championship records</div>
            <div>• <span style={{ color: '#10b981' }}>skills</span> : Inspect technical stack &amp; proficiencies</div>
            <div>• <span style={{ color: '#10b981' }}>contact</span> : Get direct email, phone &amp; profiles</div>
            <div>• <span style={{ color: '#10b981' }}>clear</span> : Clear console buffer</div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', lineHeight: '1.6', color: '#ccc' }}>
            <div style={{ color: '#10b981', fontWeight: 'bold' }}>Featured Production Systems:</div>
            {FEATURED_PROJECTS.map((p, idx) => (
              <div key={idx} style={{ paddingLeft: '8px', borderLeft: '2px solid rgba(16, 185, 129, 0.4)', marginTop: '6px' }}>
                <span style={{ color: '#fff', fontWeight: 'bold' }}>{p.title}</span> ({p.category})
                <div style={{ color: '#aaa', fontSize: '11px' }}>{p.headline}</div>
                <div style={{ color: '#ff8c59', fontSize: '11px' }}>Stack: {p.techStack.join(', ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'hackathons':
        output = (
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', lineHeight: '1.6', color: '#ccc' }}>
            <div style={{ color: '#ff8c59', fontWeight: 'bold' }}>3x Consecutive Hackathon Championships:</div>
            {HACKATHONS.map((h, idx) => (
              <div key={idx} style={{ paddingLeft: '8px', borderLeft: '2px solid rgba(255, 140, 89, 0.4)', marginTop: '6px' }}>
                <span style={{ color: '#fff', fontWeight: 'bold' }}>{h.title}</span> — {h.semester} ({h.year})
                <div style={{ color: '#ccc', fontSize: '11px' }}>{h.placement} at {h.organization}</div>
                <div style={{ color: '#888', fontSize: '11px' }}>{h.projectFocus}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
      case 'stack':
        output = (
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', lineHeight: '1.6', color: '#ccc' }}>
            <div style={{ color: '#ff8c59', fontWeight: 'bold' }}>Engineering Capabilities:</div>
            <div>• <span style={{ color: '#fff' }}>GenAI &amp; Agents:</span> Google Gemini API, Multi-Agent Deliberative Reasoning, Structured Output Schemas</div>
            <div>• <span style={{ color: '#fff' }}>Vision &amp; Deep Learning:</span> PyTorch, Person ReID, OpenCV, CNNs, Object Tracking</div>
            <div>• <span style={{ color: '#fff' }}>Backend &amp; Distributed:</span> FastAPI, Redis AsyncIO, Supabase SSR, Docker, SQLAlchemy</div>
            <div>• <span style={{ color: '#fff' }}>Languages:</span> Python (Proficient), TypeScript, JavaScript, Java, C, SQL</div>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', lineHeight: '1.6', color: '#ccc' }}>
            <div style={{ color: '#10b981', fontWeight: 'bold' }}>Direct Communication:</div>
            <div>• Email: <a href={`mailto:${PROFILE.email}`} style={{ color: '#ff8c59', textDecoration: 'underline' }}>{PROFILE.email}</a></div>
            <div>• Phone: <span style={{ color: '#fff' }}>{PROFILE.phone}</span></div>
            <div>• GitHub: <a href={PROFILE.github} target="_blank" rel="noreferrer" style={{ color: '#ff8c59', textDecoration: 'underline' }}>{PROFILE.github}</a></div>
            <div>• LinkedIn: <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" style={{ color: '#ff8c59', textDecoration: 'underline' }}>{PROFILE.linkedin}</a></div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = (
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#888' }}>
            Command not recognized: <span style={{ color: '#ff8c59' }}>'{raw}'</span>. Type <button onClick={() => handleCommand('help')} style={{ color: '#10b981', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}>help</button> to see options.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: raw, output }]);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <section id="terminal" className="media-showcase chapter solid-section">
      <div className="section-label">
        <span>05 / THE AGENTIC RUNTIME</span>
        <span>INTERACTIVE CLI &amp; LIVE INTROSPECTION</span>
      </div>

      <div className="media-heading" data-editorial-reveal="true">
        <h2>
          A developer console.
          <br />
          <em>With real-time introspection.</em>
        </h2>
        <div>
          <p>
            Inspect system architecture, query technical capabilities,
            <br />
            and review verified benchmark metrics in real time.
          </p>
        </div>
      </div>

      {/* Terminal Window */}
      <div
        data-reveal="true"
        style={{
          maxWidth: '900px',
          margin: '30px auto 0',
          background: '#09090b',
          border: '1px solid var(--line)',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
        }}
      >
        <div
          className="terminal-header"
          style={{
            background: '#121215',
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--line)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }}></span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }}></span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }}></span>
            <span style={{ marginLeft: '12px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#aaa', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              surya@agentic-systems: ~
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => handleCommand('clear')}
              style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', padding: '2px' }}
              title="Clear terminal"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
            <span style={{ fontSize: '9px', fontFamily: 'var(--font-mono)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '2px 8px', borderRadius: '12px' }}>
              INTERACTIVE
            </span>
          </div>
        </div>

        <div className="terminal-body" style={{ padding: '24px', minHeight: '260px' }}>
          <div style={{ maxHeight: '320px', overflowY: 'auto', paddingRight: '8px' }}>
            {history.map((item, index) => (
              <div key={index} style={{ marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#888', fontFamily: 'var(--font-mono)' }}>
                  <span style={{ color: '#10b981', fontWeight: 'bold' }}>$</span>
                  <span style={{ color: '#fff' }}>{item.command}</span>
                </div>
                <div style={{ paddingLeft: '16px', marginTop: '6px' }}>{item.output}</div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type 'projects', 'hackathons', 'skills', or 'contact'..."
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#fff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'rgba(255, 140, 89, 0.1)',
                  border: '1px solid rgba(255, 140, 89, 0.3)',
                  color: '#ff8c59',
                  borderRadius: '6px',
                  padding: '4px 8px',
                  cursor: 'pointer',
                }}
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
              <span style={{ fontSize: '10px', color: '#666', fontFamily: 'var(--font-mono)' }}>Quick commands:</span>
              {['projects', 'hackathons', 'skills', 'contact'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  style={{
                    fontSize: '10px',
                    fontFamily: 'var(--font-mono)',
                    color: '#aaa',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--line)',
                    borderRadius: '12px',
                    padding: '2px 8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <Play className="w-2.5 h-2.5 text-emerald-400" />
                  <span>{cmd}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
