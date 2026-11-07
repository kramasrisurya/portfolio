import React, { useEffect, useState } from 'react';
import { Play, Pause } from 'lucide-react';

export const MotionToggle: React.FC = () => {
  const [isMotionOn, setIsMotionOn] = useState<boolean>(true);

  useEffect(() => {
    const current = document.documentElement.dataset.motion !== 'off';
    setIsMotionOn(current);
  }, []);

  const toggleMotion = () => {
    const nextState = !isMotionOn;
    setIsMotionOn(nextState);
    document.documentElement.dataset.motion = nextState ? 'on' : 'off';
    try {
      sessionStorage.setItem('motion', nextState ? 'on' : 'off');
    } catch {
      // Ignore session storage errors
    }
  };

  return (
    <button
      className="motion-toggle"
      onClick={toggleMotion}
      aria-label={isMotionOn ? 'Motion on — pause animations' : 'Motion off — enable animations'}
      aria-pressed={isMotionOn}
    >
      {isMotionOn ? <Pause size={10} /> : <Play size={10} />}
      <span>MOTION {isMotionOn ? 'ON' : 'OFF'}</span>
    </button>
  );
};
