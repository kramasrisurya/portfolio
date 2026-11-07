import React, { useState } from 'react';
import { useEditorialMotion } from './hooks/useEditorialMotion';
import { MotionToggle } from './components/MotionToggle';
import { SarthakBackdrop } from './components/SarthakBackdrop';
import { SarthakNav } from './components/SarthakNav';
import { SarthakHero } from './components/SarthakHero';
import { SarthakProofStrip } from './components/SarthakProofStrip';
import { SarthakAbout } from './components/SarthakAbout';
import { SarthakSelectedWork } from './components/SarthakSelectedWork';
import { SarthakExpertise } from './components/SarthakExpertise';
import { SarthakHackathons } from './components/SarthakHackathons';
import { SarthakTerminal } from './components/SarthakTerminal';
import { SarthakJourney } from './components/SarthakJourney';
import { SarthakContact } from './components/SarthakContact';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  React.useEffect(() => {
    // Aggressively pin initial viewport to absolute origin (0, 0)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    let frame = 0;
    const pinToTop = () => {
      if (window.scrollY > 0 && frame < 30) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      }
      frame++;
      if (frame < 60) {
        requestAnimationFrame(pinToTop);
      }
    };
    requestAnimationFrame(pinToTop);

    const interval = setInterval(() => {
      if (frame >= 60) {
        clearInterval(interval);
      } else if (window.scrollY > 0) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  useEditorialMotion();

  return (
    <>
      {/* Exact Visual Backdrop with Surya's Masked Portrait */}
      <SarthakBackdrop />

      {/* Floating Motion Toggle Switch */}
      <MotionToggle />

      {/* Exact Glass Floating Navigation Bar */}
      <SarthakNav onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Sections Hierarchy */}
      <main id="main">
        <SarthakHero onOpenResume={() => setIsResumeOpen(true)} />
        <SarthakProofStrip />
        <SarthakAbout />
        <SarthakSelectedWork />
        <SarthakExpertise />
        <SarthakHackathons />
        <SarthakTerminal />
        <SarthakJourney />
        <SarthakContact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* In-App ATS Resume Modal with PDF Download */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
};

export default App;
