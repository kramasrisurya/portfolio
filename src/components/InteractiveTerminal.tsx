import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Play, RefreshCw } from 'lucide-react';
import { PROFILE, HACKATHONS, FEATURED_PROJECTS } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'status --profile',
      output: (
        <div className="text-emerald-400 font-mono text-xs space-y-1">
          <div>[OK] Profile: Rama Sri Surya | AI & Autonomous Systems Engineer</div>
          <div>[OK] Accolades: 3x Inter-College Hackathon Winner (IIIT Kottayam, Epochon 2.0, Sem 1)</div>
          <div>[OK] Core Focus: Deliberative Multi-Agent Systems, Spatial AI, and Gemini API Architectures.</div>
          <div className="text-slate-400 mt-1">Type <span className="text-cyan-300 font-semibold">'help'</span> to see available commands or click the shortcut chips below.</div>
        </div>
      )
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const raw = cmdText.trim();
    if (!raw) return;

    const lower = raw.toLowerCase();
    let output: React.ReactNode = null;

    switch (lower) {
      case 'help':
        output = (
          <div className="font-mono text-xs space-y-1 text-slate-300">
            <div className="text-cyan-400 font-bold mb-1">Available Commands:</div>
            <div>• <span className="text-emerald-400 font-semibold">projects</span> : Inspect featured AI & Vision systems</div>
            <div>• <span className="text-emerald-400 font-semibold">hackathons</span> : View 3x hackathon victory timeline</div>
            <div>• <span className="text-emerald-400 font-semibold">skills</span> : Output technical stack & proficiencies</div>
            <div>• <span className="text-emerald-400 font-semibold">contact</span> : Get direct email, phone & profiles</div>
            <div>• <span className="text-emerald-400 font-semibold">clear</span> : Clear console buffer</div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="font-mono text-xs space-y-2 text-slate-300">
            <div className="text-emerald-400 font-bold">Featured Production Projects:</div>
            {FEATURED_PROJECTS.map((p, idx) => (
              <div key={idx} className="pl-2 border-l border-emerald-500/30">
                <span className="text-white font-semibold">{p.title}</span> ({p.category})
                <div className="text-slate-400 text-[11px]">{p.headline}</div>
                <div className="text-slate-500 text-[11px]">Stack: {p.techStack.join(', ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'hackathons':
        output = (
          <div className="font-mono text-xs space-y-2 text-slate-300">
            <div className="text-amber-400 font-bold">3x Consecutive Hackathon Triumphs:</div>
            {HACKATHONS.map((h, idx) => (
              <div key={idx} className="pl-2 border-l border-amber-500/30">
                <span className="text-amber-300 font-semibold">{h.title}</span> — {h.semester} ({h.year})
                <div className="text-slate-300 text-[11px]">{h.placement} at {h.organization}</div>
                <div className="text-slate-400 text-[11px]">{h.projectFocus}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
      case 'stack':
        output = (
          <div className="font-mono text-xs space-y-2 text-slate-300">
            <div className="text-cyan-400 font-bold">Engineering Taxonomy:</div>
            <div>• <span className="text-white font-medium">GenAI & Agents:</span> Google Gemini API, Multi-Agent Deliberative Reasoning, Structured JSON, Prompt Chaining</div>
            <div>• <span className="text-white font-medium">Vision & DL:</span> PyTorch, Keras 3, Person ReID, CNNs, OpenCV, Object Tracking</div>
            <div>• <span className="text-white font-medium">Backend & Cloud:</span> FastAPI, Redis (AsyncIO), Supabase SSR, Docker, SQLAlchemy</div>
            <div>• <span className="text-white font-medium">Languages:</span> Python (Proficient), TypeScript, JavaScript, Java, C, SQL</div>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="font-mono text-xs space-y-1 text-slate-300">
            <div className="text-emerald-400 font-bold">Direct Channels:</div>
            <div>• Email: <a href={`mailto:${PROFILE.email}`} className="text-cyan-300 hover:underline">{PROFILE.email}</a></div>
            <div>• Phone: <span className="text-slate-300">{PROFILE.phone}</span></div>
            <div>• GitHub: <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">{PROFILE.github}</a></div>
            <div>• LinkedIn: <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">{PROFILE.linkedin}</a></div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = (
          <div className="font-mono text-xs text-slate-400">
            Command not recognized: <span className="text-rose-400">'{raw}'</span>. Run <button onClick={() => handleCommand('help')} className="text-cyan-400 underline font-semibold">help</button> to see options.
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
    <section id="terminal" className="py-24 px-4 sm:px-8 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Terminal Header Bar */}
        <div className="rounded-t-3xl bg-[#0d0d10] border border-white/[0.1] border-b-0 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <span className="ml-3 font-mono text-xs text-slate-400 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              surya@agentic-systems: ~
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleCommand('clear')}
              title="Clear terminal"
              className="text-slate-400 hover:text-white text-xs font-mono p-1 rounded-full hover:bg-white/[0.05]"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
              Interactive CLI
            </span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="rounded-b-3xl bg-[#060608] border border-white/[0.1] p-6 sm:p-8 shadow-2xl font-mono min-h-[320px] flex flex-col justify-between">
          <div className="space-y-4 overflow-y-auto max-h-[380px] pr-2">
            {history.map((item, index) => (
              <div key={index} className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span className="text-white font-medium">{item.command}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Prompt input and shortcuts */}
          <div className="mt-8 pt-5 border-t border-white/[0.08]">
            <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
              <span className="text-emerald-400 font-bold text-xs">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type 'projects', 'hackathons', 'skills', or 'contact'..."
                className="flex-1 bg-transparent border-0 text-white font-mono text-xs focus:outline-none focus:ring-0 placeholder:text-slate-600"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition text-xs"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Quick command buttons */}
            <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
              <span className="text-slate-500 mr-1">Quick Run:</span>
              {['projects', 'hackathons', 'skills', 'contact'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className="px-3 py-1 rounded-full bg-white/[0.04] hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-300 border border-white/[0.08] hover:border-emerald-500/30 transition flex items-center gap-1.5"
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
