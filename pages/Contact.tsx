import React from 'react';
import { CONTACT_INFO } from '../constants';

const EnvelopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--accent-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--accent-color)]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--accent-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);


const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-color-strong)]">Let's Connect</h1>
        <p className="text-lg text-[var(--text-muted)] mb-12">
          I'm currently available for freelance opportunities and innovative roles in the generative media space.
        </p>
        
        <div className="space-y-6 text-left">
          {/* Email Card */}
          <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center p-6 bg-[var(--bg-card)] border border-[var(--border-color)] [border-radius:var(--card-border-radius)] [border-width:var(--border-width)] transition-all duration-300 hover:bg-[var(--bg-card-hover)] hover:border-[var(--accent-color)] group">
            <EnvelopeIcon />
            <div className="ml-4">
              <p className="text-sm font-semibold text-[var(--text-muted)] uppercase">Email</p>
              <p className="text-lg text-[var(--text-color-strong)] group-hover:text-[var(--accent-color)] transition-colors">
                {CONTACT_INFO.email}
              </p>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center p-6 bg-[var(--bg-card)] border border-[var(--border-color)] [border-radius:var(--card-border-radius)] [border-width:var(--border-width)] transition-all duration-300 hover:bg-[var(--bg-card-hover)] hover:border-[var(--accent-color)] group">
            <LinkedInIcon />
            <div className="ml-4">
              <p className="text-sm font-semibold text-[var(--text-muted)] uppercase">LinkedIn</p>
              <p className="text-lg text-[var(--text-color-strong)] group-hover:text-[var(--accent-color)] transition-colors">
                Vrinda Bansal
              </p>
            </div>
          </a>

          {/* Phone Card */}
          <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center p-6 bg-[var(--bg-card)] border border-[var(--border-color)] [border-radius:var(--card-border-radius)] [border-width:var(--border-width)] transition-all duration-300 hover:bg-[var(--bg-card-hover)] hover:border-[var(--accent-color)] group">
            <PhoneIcon />
            <div className="ml-4">
              <p className="text-sm font-semibold text-[var(--text-muted)] uppercase">Phone</p>
              <p className="text-lg text-[var(--text-color-strong)] group-hover:text-[var(--accent-color)] transition-colors">
                {CONTACT_INFO.phone}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;