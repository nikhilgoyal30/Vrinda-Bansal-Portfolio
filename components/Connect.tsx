import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM6 9H2v12h4V9zM4 6a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
);

const Connect: React.FC = () => {
    return (
        <section className="text-center">
            <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent mb-16"></div>
            <h2 className="text-4xl font-bold mb-4 text-[var(--text-color-strong)]">Let's Connect</h2>
            <p className="max-w-xl mx-auto text-lg text-[var(--text-muted)] mb-8">
                Open to new opportunities and collaborations. Let's discuss how I can help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-10 text-lg">
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors">
                    <MailIcon />
                    <span>{CONTACT_INFO.email}</span>
                </a>
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors">
                    <LinkedInIcon />
                    <span>LinkedIn Profile</span>
                </a>
            </div>
            <Link
                to="/contact"
                className="inline-block px-8 py-3 text-base font-medium text-[var(--text-color)] bg-[var(--bg-card)] border border-[var(--border-color)] rounded-md transition-colors duration-300 hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-color-strong)]"
            >
                More Contact Options
            </Link>
        </section>
    );
};

export default Connect;