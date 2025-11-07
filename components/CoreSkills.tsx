import React from 'react';
import { Link } from 'react-router-dom';

const GenerativeAIIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4 text-[var(--accent-color)]">
        <path d="M17 3.5H5C3.89543 3.5 3 4.39543 3 5.5V18.5C3 19.6046 3.89543 20.5 5 20.5H19C20.1046 20.5 21 19.6046 21 18.5V9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 6L15.5 7.5L17 8L15.5 8.5L15 10L14.5 8.5L13 8L14.5 7.5L15 6Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor"/>
    </svg>
);

const InstagramIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4 text-[var(--accent-color)]">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></line>
    </svg>
);

const NoCodeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4 text-[var(--accent-color)]">
    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 9L7 12L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 9L17 12L14 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GrowthIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4 text-[var(--accent-color)]">
        <path d="M4 20V14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 20V10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 20V4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 20V10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 20V14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const coreSkills = [
    { name: 'Generative AI & Content Creation', icon: <GenerativeAIIcon /> },
    { name: 'AI-Driven Social Media Strategy', icon: <InstagramIcon /> },
    { name: 'No-Code Automation', icon: <NoCodeIcon /> },
    { name: 'Instagram Growth', icon: <GrowthIcon /> },
];

const CoreSkills: React.FC = () => {
    return (
        <section>
            <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-color-strong)]">Core Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {coreSkills.map((skill, index) => (
                    <div key={index} className="bg-[#181C29] p-8 rounded-lg flex flex-col items-center justify-center text-center min-h-[12rem]">
                        {skill.icon}
                        <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <Link
                    to="/skills"
                    className="inline-block px-8 py-3 text-base font-medium text-[var(--text-color)] border border-[var(--border-color)] rounded-md transition-colors duration-300 hover:bg-[var(--border-color)] hover:text-[var(--text-color-strong)]"
                >
                    View All Skills
                </Link>
            </div>
        </section>
    );
};

export default CoreSkills;