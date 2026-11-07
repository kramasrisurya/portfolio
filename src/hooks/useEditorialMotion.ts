import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export const useEditorialMotion = () => {
  useEffect(() => {
    // Check user preference and session storage
    const motionPref = sessionStorage.getItem('motion');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!document.documentElement.dataset.motion) {
      document.documentElement.dataset.motion =
        motionPref === 'off' || prefersReduced.matches ? 'off' : 'on';
    }

    gsap.registerPlugin(ScrollTrigger);

    let lenis: Lenis | null = null; return;
    let ctx: gsap.Context | null = null;
    let currentRafHandler: ((time: number) => void) | null = null;

    const setupMotion = () => {
      ctx?.revert();
      if (currentRafHandler) {
        gsap.ticker.remove(currentRafHandler);
        currentRafHandler = null;
      }
      lenis?.destroy();
      lenis = null;

      const isMotionOff = document.documentElement.dataset.motion === 'off' || prefersReduced.matches;
      if (isMotionOff) {
        return;
      }

      // 1. Initialize Lenis Smooth Scroll
      try {
        lenis = new Lenis({
          lerp: 0.12,
          smoothWheel: true,
          syncTouch: false,
          autoRaf: false,
        });
        lenis.stop();
        window.scrollTo(0, 0);
        setTimeout(() => {
          lenis?.start();
          lenis?.scrollTo(0, { immediate: true });
        }, 150);

        lenis.on('scroll', ScrollTrigger.update);
        lenis.scrollTo(0, { immediate: true });
        window.scrollTo(0, 0);

        currentRafHandler = (time: number) => {
          lenis?.raf(time * 1000);
        };
        gsap.ticker.add(currentRafHandler);
        gsap.ticker.lagSmoothing(0);
      } catch (err) {
        console.warn('Lenis smooth scrolling not active:', err);
      }

      // 2. Setup GSAP Scoped Animations
      ctx = gsap.context(() => {
        // A. Hero Initial Page Reveal
        gsap.fromTo(
          '.hero .reveal-line',
          { yPercent: 105, filter: 'blur(6px)' },
          {
            yPercent: 0,
            filter: 'blur(0px)',
            duration: 1.25,
            stagger: 0.14,
            ease: 'power4.out',
            clearProps: 'transform,filter',
          }
        );

        gsap.fromTo(
          '.hero-description > p',
          { filter: 'blur(4px)', y: 12, opacity: 0 },
          {
            filter: 'blur(0px)',
            y: 0,
            opacity: 1,
            duration: 0.85,
            delay: 0.2,
            ease: 'power2.out',
            clearProps: 'filter,transform,opacity',
          }
        );

        gsap.fromTo(
          '.hero-topline, .hero-actions, .hero-side-note, .hero-bottom',
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.35,
            stagger: 0.08,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
          }
        );

        // B. Hero Parallax Exit Scrub on Scroll
        gsap.to('.hero-content', {
          y: -70,
          opacity: 0.3,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero',
            start: '20% top',
            end: 'bottom top',
            scrub: 1,
          },
        });

        // C. Chapter Headings & Subheadings Signature Blur Float Reveal
        const headingTargets = gsap.utils.toArray<HTMLElement>(
          '.chapter h2, .brand-story h3, .social-intro h3, .impact-title h2, .selected-heading h2'
        );
        headingTargets.forEach((heading) => {
          gsap.fromTo(
            heading,
            { filter: 'blur(8px)', y: 18, opacity: 0.5 },
            {
              filter: 'blur(0px)',
              y: 0,
              opacity: 1,
              duration: 0.85,
              ease: 'power2.out',
              immediateRender: false,
              clearProps: 'filter,transform,opacity',
              scrollTrigger: {
                trigger: heading,
                start: 'top 92%',
                once: true,
              },
            }
          );
        });

        // D. Data Editorial Reveal Items
        const editorialTargets = gsap.utils.toArray<HTMLElement>(
          '[data-editorial-reveal], .case-body > section, .editorial-section, .work-piece'
        );
        editorialTargets.forEach((el) => {
          gsap.fromTo(
            el,
            { y: 32, opacity: 0.2 },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              ease: 'power3.out',
              clearProps: 'transform,opacity',
              scrollTrigger: {
                trigger: el,
                start: 'top 94%',
                once: true,
              },
            }
          );
        });

        // E. General [data-reveal] Items
        const revealTargets = gsap.utils.toArray<HTMLElement>('[data-reveal]');
        revealTargets.forEach((el) => {
          gsap.fromTo(
            el,
            { y: 36, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: 'power3.out',
              clearProps: 'transform,opacity',
              scrollTrigger: {
                trigger: el,
                start: 'top 92%',
                once: true,
              },
            }
          );
        });

        // F. Work Artwork Clip-Path Inset Wipe on Scroll
        const artworkTargets = gsap.utils.toArray<HTMLElement>('.work-artwork');
        artworkTargets.forEach((artwork) => {
          gsap.fromTo(
            artwork,
            { clipPath: 'inset(6% 3% 6% 3%)' },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              ease: 'none',
              scrollTrigger: {
                trigger: artwork,
                start: 'top 95%',
                end: 'top 40%',
                scrub: 0.65,
              },
            }
          );
        });

        // G. Impact Value Letter-Spacing Scrub
        const impactValue = document.querySelector('.impact-value');
        if (impactValue) {
          gsap.fromTo(
            impactValue,
            { letterSpacing: '-0.08em' },
            {
              letterSpacing: '-0.045em',
              ease: 'none',
              scrollTrigger: {
                trigger: '.impact-lead',
                start: 'top bottom',
                end: 'top 35%',
                scrub: 0.8,
              },
            }
          );
        }

        // H. Timeline & Milestone Cards Horizontal Entrance
        const milestoneTargets = gsap.utils.toArray<HTMLElement>(
          '.timeline article, .brand-milestones > div'
        );
        milestoneTargets.forEach((card, idx) => {
          gsap.fromTo(
            card,
            { x: 24, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.75,
              delay: 0.08 * idx,
              ease: 'power3.out',
              clearProps: 'transform,opacity',
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                once: true,
              },
            }
          );
        });
      });
    };

    setupMotion();

    const observer = new MutationObserver(() => setupMotion());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-motion'],
    });

    const handlePrefChange = () => setupMotion();
    prefersReduced.addEventListener('change', handlePrefChange);

    return () => {
      ctx?.revert();
      if (currentRafHandler) {
        gsap.ticker.remove(currentRafHandler);
      }
      lenis?.destroy();
      observer.disconnect();
      prefersReduced.removeEventListener('change', handlePrefChange);
    };
  }, []);
};
