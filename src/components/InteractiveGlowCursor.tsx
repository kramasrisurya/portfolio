import React, { useEffect, useRef, useState } from 'react';

export const InteractiveGlowCursor: React.FC = () => {
  const ambientRef = useRef<HTMLDivElement | null>(null);
  const pointerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(hover: none)').matches) return;

    let targetX = -1000;
    let targetY = -1000;
    let ambientX = -1000;
    let ambientY = -1000;
    let pointerX = -1000;
    let pointerY = -1000;
    let animId = 0;

    const handlePointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, summary, input, .flagship-interactive-card, .brief-row-interactive, .chip-btn');
        setIsHovering(!!interactive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const renderLoop = () => {
      // Smooth lerp: ambient aura lags slightly for liquid feel (0.09)
      ambientX += (targetX - ambientX) * 0.09;
      ambientY += (targetY - ambientY) * 0.09;

      // Precision pointer tracks closely (0.22)
      pointerX += (targetX - pointerX) * 0.22;
      pointerY += (targetY - pointerY) * 0.22;

      if (ambientRef.current) {
        ambientRef.current.style.left = `${ambientX.toFixed(2)}px`;
        ambientRef.current.style.top = `${ambientY.toFixed(2)}px`;
      }

      if (pointerRef.current) {
        pointerRef.current.style.left = `${pointerX.toFixed(2)}px`;
        pointerRef.current.style.top = `${pointerY.toFixed(2)}px`;
      }

      animId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    animId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  return (
    <>
      {/* Liquid Ambient Ethereal Glow Aura */}
      <div
        ref={ambientRef}
        className="interactive-glow-cursor glow-aura-ambient"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
        aria-hidden="true"
      />

      {/* Precision Micro Reticle Pointer */}
      <div
        ref={pointerRef}
        className={`interactive-glow-cursor glow-aura-pointer ${isHovering ? 'is-hovering' : ''}`}
        style={{
          opacity: isVisible ? 1 : 0,
        }}
        aria-hidden="true"
      />
    </>
  );
};
