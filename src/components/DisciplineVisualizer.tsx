import React, { useEffect, useRef } from 'react';

interface DisciplineVisualizerProps {
  mode: 'build' | 'reason' | 'scale';
}

export const DisciplineVisualizer: React.FC<DisciplineVisualizerProps> = ({ mode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const render = () => {
      t += 0.02;
      const w = (canvas.width = canvas.parentElement?.clientWidth || 360);
      const h = (canvas.height = 240);

      ctx.clearRect(0, 0, w, h);

      // Grid backdrop
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      const step = 24;
      for (let x = 0; x < w; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      if (mode === 'build') {
        // --- SPATIAL COMPUTER VISION & REID SIMULATION ---
        const cx = w * 0.5;
        const cy = h * 0.5;

        // Bounding box 1 (Target ReID)
        const bx = cx - 50 + Math.sin(t) * 20;
        const by = cy - 45 + Math.cos(t * 0.8) * 12;
        const bw = 95;
        const bh = 110;

        // Draw bounding box
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(bx, by, bw, bh);

        // Corner brackets
        const cornerLen = 12;
        ctx.strokeStyle = '#34d399';
        ctx.lineWidth = 2.5;

        // Top-left
        ctx.beginPath();
        ctx.moveTo(bx, by + cornerLen);
        ctx.lineTo(bx, by);
        ctx.lineTo(bx + cornerLen, by);
        ctx.stroke();

        // Top-right
        ctx.beginPath();
        ctx.moveTo(bx + bw - cornerLen, by);
        ctx.lineTo(bx + bw, by);
        ctx.lineTo(bx + bw, by + cornerLen);
        ctx.stroke();

        // Bottom-left
        ctx.beginPath();
        ctx.moveTo(bx, by + bh - cornerLen);
        ctx.lineTo(bx, by + bh);
        ctx.lineTo(bx + cornerLen, by + bh);
        ctx.stroke();

        // Bottom-right
        ctx.beginPath();
        ctx.moveTo(bx + bw - cornerLen, by + bh);
        ctx.lineTo(bx + bw, by + bh);
        ctx.lineTo(bx + bw, by + bh - cornerLen);
        ctx.stroke();

        // Target Tag badge
        ctx.fillStyle = 'rgba(16, 185, 129, 0.2)';
        ctx.fillRect(bx, by - 22, bw, 20);
        ctx.fillStyle = '#10b981';
        ctx.font = '9px "JetBrains Mono", monospace';
        ctx.fillText('TARGET #7F2B [98.4%]', bx + 4, by - 8);

        // Center crosshair
        ctx.strokeStyle = 'rgba(255, 140, 89, 0.7)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(bx + bw / 2, by + bh / 2, 8, 0, Math.PI * 2);
        ctx.stroke();

        // Scan line effect
        const scanY = by + ((Math.sin(t * 2) + 1) / 2) * bh;
        ctx.strokeStyle = 'rgba(52, 211, 153, 0.6)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(bx, scanY);
        ctx.lineTo(bx + bw, scanY);
        ctx.stroke();

        // Telemetry readout
        ctx.fillStyle = '#888';
        ctx.font = '9px "JetBrains Mono", monospace';
        ctx.fillText('CAM-01 [RTSP 60FPS] • LATENCY: 0.8ms • REDIS SYNC: OK', 14, h - 14);

      } else if (mode === 'reason') {
        // --- MULTI-AGENT DELIBERATIVE REASONING GRAPH ---
        const nodes = [
          { name: 'SUPERVISOR', x: w * 0.5, y: h * 0.28, color: '#ff8c59' },
          { name: 'STATUTE AGENT', x: w * 0.25, y: h * 0.72, color: '#38bdf8' },
          { name: 'VERIFIER AGENT', x: w * 0.5, y: h * 0.76, color: '#10b981' },
          { name: 'DEADLINE AGENT', x: w * 0.75, y: h * 0.72, color: '#f59e0b' },
        ];

        // Draw connections
        ctx.lineWidth = 1.5;
        for (let i = 1; i < nodes.length; i++) {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
          ctx.beginPath();
          ctx.moveTo(nodes[0].x, nodes[0].y);
          ctx.lineTo(nodes[i].x, nodes[i].y);
          ctx.stroke();

          // Animated data packet pulse
          const progress = (t * 0.8 + i * 0.3) % 1;
          const px = nodes[0].x + (nodes[i].x - nodes[0].x) * progress;
          const py = nodes[0].y + (nodes[i].y - nodes[0].y) * progress;
          ctx.fillStyle = nodes[i].color;
          ctx.beginPath();
          ctx.arc(px, py, 3.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Cross connection between workers
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(nodes[1].x, nodes[1].y);
        ctx.lineTo(nodes[2].x, nodes[2].y);
        ctx.lineTo(nodes[3].x, nodes[3].y);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw Nodes
        nodes.forEach((node) => {
          ctx.fillStyle = '#0f1117';
          ctx.strokeStyle = node.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 16, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Pulsing halo
          ctx.strokeStyle = `${node.color}33`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 22 + Math.sin(t * 2) * 3, 0, Math.PI * 2);
          ctx.stroke();

          // Node labels
          ctx.fillStyle = '#f1eee8';
          ctx.font = '8px "JetBrains Mono", monospace';
          ctx.textAlign = 'center';
          ctx.fillText(node.name, node.x, node.y + 28);
        });

        // Telemetry banner
        ctx.textAlign = 'left';
        ctx.fillStyle = '#10b981';
        ctx.font = '9px "JetBrains Mono", monospace';
        ctx.fillText('CONSENSUS: 100% VALIDATED • REFLECTION PASS: 2/2', 14, h - 14);

      } else {
        // --- SCALE & SUB-MILLISECOND ASYNC TELEMETRY ---
        const bars = 18;
        const barWidth = (w - 48) / bars;

        for (let i = 0; i < bars; i++) {
          const barHeight = Math.sin(t * 1.5 + i * 0.4) * 35 + 50;
          const x = 24 + i * barWidth;
          const y = h - 35 - barHeight;

          // Gradient bar
          const grad = ctx.createLinearGradient(0, y, 0, h - 35);
          grad.addColorStop(0, '#ff8c59');
          grad.addColorStop(1, 'rgba(255, 140, 89, 0.08)');

          ctx.fillStyle = grad;
          ctx.fillRect(x + 2, y, barWidth - 4, barHeight);

          // Top cap dot
          ctx.fillStyle = '#ff8c59';
          ctx.beginPath();
          ctx.arc(x + barWidth / 2, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }

        // Latency metric
        ctx.fillStyle = '#10b981';
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillText('LATENCY: 0.74ms [P99] • REDIS HIT RATIO: 99.8%', 14, 24);
        ctx.fillStyle = '#888';
        ctx.font = '9px "JetBrains Mono", monospace';
        ctx.fillText('THROUGHPUT: 4,200 REQS/SEC • ASYNC EVENT LOOP: 0 DROPPED', 14, h - 14);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [mode]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '240px',
        background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.06), #060608 75%)',
        borderRadius: '16px',
        border: '1px solid var(--line)',
        overflow: 'hidden',
        boxShadow: 'inset 0 1px 20px rgba(0, 0, 0, 0.8)',
      }}
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  );
};
