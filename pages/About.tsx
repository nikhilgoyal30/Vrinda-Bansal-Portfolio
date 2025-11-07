import React from 'react';
import { PROFILE_IMAGE_URL } from '../constants';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      <div className="grid lg:grid-cols-5 gap-16 items-start">
        <div className="lg:col-span-2 flex justify-center lg:justify-start">
          <img
            src={PROFILE_IMAGE_URL}
            alt="Vrinda Bansal"
            className="w-full max-w-sm object-cover shadow-2xl [border-radius:var(--card-border-radius)] border [border-width:var(--border-width)] border-[var(--border-color)]"
          />
        </div>
        <div className="lg:col-span-3 space-y-10">
           <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-color-strong)]">About Me</h1>
           <div>
            <h2 className="text-2xl font-bold mb-3 text-[var(--text-color-strong)]">JOURNEY</h2>
            <p className="text-[var(--text-muted)] text-lg leading-relaxed">
              I’ve always been fascinated by how imagination could merge with technology to create something new. My journey into AI creativity started with simple curiosity — experimenting with photo and video tools that turned rough ideas into vivid visuals.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3 text-[var(--text-color-strong)]">PHILOSOPHY & APPROACH</h2>
            <p className="text-[var(--text-muted)] text-lg leading-relaxed">
              I see creativity as a collaboration between imagination and intelligence — the mind and the machine. I use AI as an extension of my creative process, not a replacement for it, blending emotion, storytelling, and data-driven design to create impactful visuals and experiences.
            </p>
          </div>
           <div>
            <h2 className="text-2xl font-bold mb-3 text-[var(--text-color-strong)]">BEYOND TECH</h2>
            <p className="text-[var(--text-muted)] text-lg leading-relaxed">
              What truly drives me goes beyond the technology itself it is the stories we tell, the emotions we evoke, and the meaningful connections we create. This passion inspires me to be both a content creator and a dancer, weaving narrative and expression into every project I undertake.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;