import React, { useEffect, useRef } from 'react';

export const SarthakBackdrop: React.FC = () => {
  const progressRef = useRef<HTMLDivElement | null>(null);
  const portraitRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 1. Scroll progress bar
    const handleScroll = () => {
      if (!progressRef.current) return;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? window.scrollY / total : 0;
      progressRef.current.style.transform = `scaleX(${progress})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 2. Interactive subtle mouse parallax on portrait
    let animId = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handlePointerMove = (e: PointerEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 20;
      targetY = (e.clientY / window.innerHeight - 0.5) * 14;
    };

    const loop = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      if (portraitRef.current) {
        portraitRef.current.style.transform = `translate(calc(-50% + ${currentX.toFixed(2)}px), ${currentY.toFixed(2)}px)`;
      }
      animId = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={progressRef} className="scroll-progress" style={{ transformOrigin: '0 0' }} />
      <div className="scene-backdrop" aria-hidden="true">
        <div ref={portraitRef} className="artifact-fallback" style={{ transition: 'transform 0.1s linear' }}>
          <img
            src="./surya-editorial.webp"
            alt="Rama Sri Surya"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </>
  );
};
