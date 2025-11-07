import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

declare global {
  interface Window {
    VANTA: any;
  }
}

const Hero: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (vantaEffect) {
      vantaEffect.destroy();
    }
    
    if (!window.VANTA || !window.VANTA.FOG) return;

    let effect;
    const isLight = theme === 'light';
    effect = window.VANTA.FOG({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: isLight ? 0xc0c0c0 : 0x222222,
        midtoneColor: isLight ? 0xd3d3d3 : 0x555555,
        lowlightColor: isLight ? 0xe0e0e0 : 0x0,
        baseColor: isLight ? 0xf9fafb : 0x0,
        blurFactor: 0.6,
        speed: 0.5,
        zoom: 0.6
    });
    setVantaEffect(effect);

    return () => {
      if (effect) effect.destroy();
    };
  }, [theme]);

  return (
    <div ref={vantaRef} className="relative w-full h-screen flex items-center justify-center text-center -mt-20">
      <div className="z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--text-color-strong)] tracking-tight">
          VRINDA BANSAL
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-light text-[var(--text-color)]">
          AI Creative Specialist
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-[var(--text-muted)]">
          A dynamic creator and video editor with hands-on expertise in generative AI, transforming creative concepts into high-impact digital experiences.
        </p>
        <Link
          to="/projects"
          className="mt-10 inline-block px-8 py-3 text-lg font-semibold text-[var(--accent-color-text)] bg-[var(--accent-color)] transition-transform duration-300 hover:scale-105 [border-radius:var(--card-border-radius)] [border-width:var(--border-width)] [border-color:var(--border-color)]"
        >
          Explore My Work
        </Link>
      </div>
    </div>
  );
};

export default Hero;