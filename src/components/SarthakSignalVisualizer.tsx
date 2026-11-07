import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { SignalText } from './SignalText';

export interface SarthakSignalVisualizerProps {
  mode: 'build' | 'reason' | 'scale';
  impact?: boolean;
}

export const SarthakSignalVisualizer: React.FC<SarthakSignalVisualizerProps> = ({
  mode,
  impact = false,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasMountRef = useRef<HTMLDivElement | null>(null);
  const wireframeRef = useRef<HTMLDivElement | null>(null);
  const targetModeRef = useRef<number>(0);
  const pulseRef = useRef<number>(0);

  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const modeIndex = mode === 'build' ? 0 : mode === 'reason' ? 1 : 2;
  const currentShape = modeIndex === 0 ? 'structure' : modeIndex === 1 ? 'ripples' : 'constellation';
  const label = modeIndex === 0 ? 'STRUCTURE' : modeIndex === 1 ? 'DELIBERATE' : 'NETWORK';

  useEffect(() => {
    targetModeRef.current = modeIndex;
    pulseRef.current = 1.0;
  }, [modeIndex]);

  // Three.js WebGL Particle Scene
  useEffect(() => {
    const container = containerRef.current;
    const canvasMount = canvasMountRef.current;
    if (!container || !canvasMount) return;

    let animId = 0;
    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;
    let geometry: THREE.BufferGeometry | null = null;
    let material: THREE.ShaderMaterial | null = null;
    let points: THREE.Points | null = null;
    let isRunning = true;

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'default',
        failIfMajorPerformanceCaveat: false,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
      camera.position.z = impact ? 5.8 : 5.0;

      geometry = new THREE.BufferGeometry();
      const count = 2400;
      const posArr = new Float32Array(count * 3);
      const ripplesArr = new Float32Array(count * 3);
      const sphereArr = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        const t = (i % 60) / 59;
        const r = Math.floor(i / 60) / 39;

        // 1. Structure (Concentric floating matrix grid)
        posArr[i * 3] = (t - 0.5) * 3.2;
        posArr[i * 3 + 1] = (r - 0.5) * 3.0;
        posArr[i * 3 + 2] = 0.18 * Math.sin(18 * t);

        // 2. Ripples (Polar orbital wave ripples)
        const theta = t * Math.PI * 2;
        const radius = 0.2 + 1.6 * r;
        ripplesArr[i * 3] = Math.cos(theta) * radius;
        ripplesArr[i * 3 + 1] = Math.sin(theta) * radius;
        ripplesArr[i * 3 + 2] = 0.25 * Math.sin(8 * radius);

        // 3. Network / Constellation (Fibonacci spiral sphere)
        const zCoord = 1 - (2 * i) / (count - 1);
        const phi = 2.399963 * i;
        const radiusSphere = Math.sqrt(Math.max(0, 1 - zCoord * zCoord));
        sphereArr[i * 3] = Math.cos(phi) * radiusSphere * 1.65;
        sphereArr[i * 3 + 1] = 1.65 * zCoord;
        sphereArr[i * 3 + 2] = Math.sin(phi) * radiusSphere * 1.65;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
      geometry.setAttribute('aTeach', new THREE.BufferAttribute(ripplesArr, 3));
      geometry.setAttribute('aConnect', new THREE.BufferAttribute(sphereArr, 3));

      const uniforms = {
        uTime: { value: 0 },
        uWeights: {
          value: new THREE.Vector3(
            targetModeRef.current === 0 ? 1 : 0,
            targetModeRef.current === 1 ? 1 : 0,
            targetModeRef.current === 2 ? 1 : 0
          ),
        },
        uPointer: { value: new THREE.Vector2(4, 4) },
        uPulse: { value: 0 },
      };

      material = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms,
        vertexShader: `
          attribute vec3 aTeach;
          attribute vec3 aConnect;
          uniform vec3 uWeights;
          uniform float uTime;
          uniform float uPulse;
          uniform vec2 uPointer;
          varying float vGlow;

          void main() {
            vec3 p = position * uWeights.x + aTeach * uWeights.y + aConnect * uWeights.z;
            float d = distance(p.xy, uPointer);
            float wave = sin(length(p.xy) * 8.0 - uTime * 2.8);
            p.z += wave * (0.08 + 0.22 * uWeights.y);
            p.xy += normalize(p.xy + vec2(0.001)) * sin(d * 6.5 - uTime * 4.0) * exp(-d * 1.2) * 0.22;
            p *= 1.0 + uPulse * 0.12;
            vGlow = 0.55 + 0.45 * exp(-d * 2.0) + 0.2 * wave;
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            gl_Position = projectionMatrix * mv;
            // Generous point size so particles are brilliantly crisp and visible
            gl_PointSize = clamp(26.0 / -mv.z, 2.5, 6.5);
          }
        `,
        fragmentShader: `
          varying float vGlow;
          void main() {
            float d = length(gl_PointCoord - 0.5);
            if (d > 0.5) discard;
            // Warm golden cream to luminous amber glow
            vec3 col = mix(vec3(0.85, 0.78, 0.68), vec3(1.0, 0.55, 0.22), smoothstep(0.4, 0.85, vGlow));
            float alpha = (1.0 - smoothstep(0.05, 0.5, d)) * 0.92;
            gl_FragColor = vec4(col, alpha);
          }
        `,
      });

      points = new THREE.Points(geometry, material);
      scene.add(points);

      const canvas = renderer.domElement;
      canvas.style.position = 'absolute';
      canvas.style.inset = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.pointerEvents = 'none';

      canvasMount.innerHTML = '';
      canvasMount.appendChild(canvas);

      const updateSize = () => {
        if (!container || !renderer || !camera) return;
        const w = Math.max(container.clientWidth || 0, 320);
        const h = Math.max(container.clientHeight || 0, 260);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h, false);
      };

      const resizeObserver = new ResizeObserver(updateSize);
      resizeObserver.observe(container);
      updateSize();

      const targetWeights = new THREE.Vector3();
      let lastTime = 0;

      const animate = (timestamp: number) => {
        if (!isRunning) return;

        if (timestamp - lastTime > 25) {
          uniforms.uTime.value = 0.001 * timestamp;

          const tMode = targetModeRef.current;
          targetWeights.set(
            tMode === 0 ? 1 : 0,
            tMode === 1 ? 1 : 0,
            tMode === 2 ? 1 : 0
          );
          uniforms.uWeights.value.lerp(targetWeights, 0.07);

          uniforms.uPulse.value += (pulseRef.current - uniforms.uPulse.value) * 0.12;
          pulseRef.current *= 0.92;

          if (points) {
            points.rotation.y = 0.18 * Math.sin(0.00015 * timestamp);
          }

          if (renderer && scene && camera) {
            renderer.render(scene, camera);
          }
          lastTime = timestamp;
        }

        animId = requestAnimationFrame(animate);
      };

      animId = requestAnimationFrame(animate);

      // Pointer interaction on 3D particles
      const handlePointerMove = (e: PointerEvent) => {
        const rect = container.getBoundingClientRect();
        const normX = ((e.clientX - rect.left) / rect.width) * 4 - 2;
        const normY = 2 - ((e.clientY - rect.top) / rect.height) * 4;
        uniforms.uPointer.value.set(normX, normY);

        // 3D Gyroscopic tilt for the wireframe structure
        const tiltX = (-(e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)) * 14;
        const tiltY = ((e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)) * 14;
        setTilt({ x: tiltX, y: tiltY });
      };

      const handlePointerLeave = () => {
        uniforms.uPointer.value.set(4, 4);
        setTilt({ x: 0, y: 0 });
      };

      container.addEventListener('pointermove', handlePointerMove);
      container.addEventListener('pointerleave', handlePointerLeave);

      return () => {
        isRunning = false;
        cancelAnimationFrame(animId);
        resizeObserver.disconnect();
        container.removeEventListener('pointermove', handlePointerMove);
        container.removeEventListener('pointerleave', handlePointerLeave);
        geometry?.dispose();
        material?.dispose();
        renderer?.dispose();
        if (canvasMount.contains(canvas)) {
          canvasMount.removeChild(canvas);
        }
      };
    } catch (err) {
      console.warn('Three.js WebGL unavailable, falling back to 2D particle canvas:', err);
      try {
        const fallbackCanvas = document.createElement('canvas');
        fallbackCanvas.style.position = 'absolute';
        fallbackCanvas.style.inset = '0';
        fallbackCanvas.style.width = '100%';
        fallbackCanvas.style.height = '100%';
        fallbackCanvas.style.pointerEvents = 'none';
        canvasMount.innerHTML = '';
        canvasMount.appendChild(fallbackCanvas);

        const ctx = fallbackCanvas.getContext('2d');
        if (ctx) {
          let fAnimId = 0;
          let fw = (fallbackCanvas.width = (container.clientWidth || 380) * (window.devicePixelRatio || 1));
          let fh = (fallbackCanvas.height = (container.clientHeight || 300) * (window.devicePixelRatio || 1));

          const renderFallback = (timeMs: number) => {
            if (!isRunning) return;
            ctx.clearRect(0, 0, fw, fh);
            const t = timeMs * 0.002;
            const rows = 26;
            const cols = 40;
            const sp = Math.min(fw, fh) / 34;
            const cx = fw / 2;
            const cy = fh / 2;

            for (let r = 0; r < rows; r++) {
              for (let c = 0; c < cols; c++) {
                const x = cx + (c - cols / 2) * sp;
                const y = cy + (r - rows / 2) * sp;
                const d = Math.hypot(c - cols / 2, r - rows / 2);
                const wave = Math.sin(d * 0.45 - t) * 8;
                ctx.beginPath();
                ctx.arc(x, y + wave, Math.max(1.2, 2.2 + wave * 0.15), 0, Math.PI * 2);
                ctx.fillStyle = d < 8 ? '#ff8c59' : 'rgba(235, 215, 195, 0.65)';
                ctx.fill();
              }
            }
            fAnimId = requestAnimationFrame(renderFallback);
          };
          fAnimId = requestAnimationFrame(renderFallback);

          return () => {
            isRunning = false;
            cancelAnimationFrame(fAnimId);
          };
        }
      } catch (fallbackErr) {
        console.error('Particle fallback failed:', fallbackErr);
      }
    }
  }, [impact]);

  return (
    <div ref={containerRef} className="signal-visual" aria-hidden="true">
      {/* Dynamic Ambient Background Glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 140, 89, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Layer 1: Three.js 2400-Point Interactive WebGL Particle Cloud */}
      <div
        ref={canvasMountRef}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Layer 2: 3D Concentric Wireframe Shapes (Structure Squares, Ripple Circles, Constellation Orbits) */}
      <div
        ref={wireframeRef}
        className={`signal-fallback shape-${currentShape}`}
        style={{
          zIndex: 3,
          pointerEvents: 'none',
          transform: `translate(-50%, -50%) perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>

      {/* Layer 3: Interactive Signal Text Decode Label at Bottom */}
      <span className="signal-center-label" style={{ zIndex: 4 }}>
        <SignalText key={label}>{label}</SignalText>
      </span>
    </div>
  );
};
