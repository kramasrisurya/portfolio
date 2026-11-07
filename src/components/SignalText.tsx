import React, { useEffect, useRef } from 'react';

export interface SignalTextProps {
  children: string;
  className?: string;
  scrambleOnMount?: boolean;
}

export const SignalText: React.FC<SignalTextProps> = ({
  children,
  className = '',
  scrambleOnMount = true,
}) => {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animId = 0;
    let startTime = 0;
    let lastFrame = 0;
    let lastTrigger = -Infinity;

    const reset = () => {
      cancelAnimationFrame(animId);
      animId = 0;
      if (el) el.textContent = children;
    };

    const canAnimate = () =>
      !reducedMotion.matches && document.documentElement.dataset.motion !== 'off';

    const scrambleChars = '01/·—';

    const frame = (time: number) => {
      if (!canAnimate() || document.hidden) {
        reset();
        return;
      }

      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / 520, 1);

      if (time - lastFrame > 32) {
        el.textContent = [...children]
          .map((char, i) => {
            if (char === ' ' || i < children.length * progress) {
              return char;
            }
            return scrambleChars[(i + Math.floor(time / 45)) % scrambleChars.length];
          })
          .join('');
        lastFrame = time;
      }

      if (progress < 1) {
        animId = requestAnimationFrame(frame);
      } else {
        reset();
      }
    };

    const trigger = () => {
      if (!canAnimate() || performance.now() - lastTrigger < 600) return;
      reset();
      startTime = 0;
      lastFrame = 0;
      lastTrigger = performance.now();
      animId = requestAnimationFrame(frame);
    };

    const interactiveParent = el.closest('button, a') ?? el.parentElement;
    interactiveParent?.addEventListener('pointerenter', trigger);
    interactiveParent?.addEventListener('focusin', trigger);

    let observer: IntersectionObserver | null = null;
    if (scrambleOnMount) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            trigger();
            observer?.disconnect();
          }
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
    }

    const handlePrefChange = () => {
      if (!canAnimate()) reset();
    };
    reducedMotion.addEventListener('change', handlePrefChange);

    return () => {
      reset();
      interactiveParent?.removeEventListener('pointerenter', trigger);
      interactiveParent?.removeEventListener('focusin', trigger);
      observer?.disconnect();
      reducedMotion.removeEventListener('change', handlePrefChange);
    };
  }, [children, scrambleOnMount]);

  return (
    <span className={`signal-text ${className}`}>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true" className="signal-text-size">
        {children}
      </span>
      <span aria-hidden="true" className="signal-text-live" ref={textRef}>
        {children}
      </span>
    </span>
  );
};
