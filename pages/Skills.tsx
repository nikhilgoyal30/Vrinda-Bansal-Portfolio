import React from 'react';
import { motion } from 'framer-motion';

// For AI & Content Creation
const AIIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4 text-[var(--accent-color)]">
        <path d="M17 3.5H5C3.89543 3.5 3 4.39543 3 5.5V18.5C3 19.6046 3.89543 20.5 5 20.5H19C20.1046 20.5 21 19.6046 21 18.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 6L15.5 7.5L17 8L15.5 8.5L15 10L14.5 8.5L13 8L14.5 7.5L15 6Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor"/>
    </svg>
);

// For Strategy & Automation
const AutomationIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4 text-[var(--accent-color)]">
        <path d="M12 20V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 5V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M19.0708 19.0711L18.678 18.6782" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M5.32178 5.32181L4.92896 4.92898" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M19.0708 4.92898L18.678 5.32181" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M5.32178 18.6782L4.92896 19.0711" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M5 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16.4999 15L14.4999 17L12.4999 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.5 17V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

// For Platform Development
const DevIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4 text-[var(--accent-color)]">
        <path d="M10 9L7 12L10 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 9L17 12L14 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);


const skills = {
  "AI & Content Creation": ["AI Content Generation", "LoRA Model Training & Customization", "Product Photoshoot with AI Tools", "Storyboarding & Scripting for AI Videos", "Design & Content Creation"],
  "Strategy & Automation": ["Creative Direction for Digital Campaigns", "Prompt Engineering & Automation"],
  "Platform Development": ["Development & Platforms (Lovable, Bolt, Firebase)"]
};

const skillIcons: { [key: string]: React.ReactNode } = {
    "AI & Content Creation": <AIIcon />,
    "Strategy & Automation": <AutomationIcon />,
    "Platform Development": <DevIcon />
};

const cardVariants = {
    offscreen: {
        y: 50,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const iconVariants = {
    offscreen: {
        scale: 0.5,
        opacity: 0
    },
    onscreen: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
        }
    }
};

const Skills: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[var(--text-color-strong)]">Skills</h1>
      <div className="max-w-4xl mx-auto space-y-12">
        {Object.entries(skills).map(([category, skillList]) => (
          <motion.div
            key={category}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-[var(--bg-card)] border border-[var(--border-color)] p-8 [border-radius:var(--card-border-radius)] [border-width:var(--border-width)] flex flex-col items-center"
          >
            <motion.div
                variants={iconVariants}
                whileHover={{ scale: 1.1, y: -5, transition: { type: 'spring', stiffness: 300 } }}
            >
                {skillIcons[category]}
            </motion.div>
            <h2 className="text-2xl font-semibold mb-6 text-center text-[var(--text-color-strong)]">{category}</h2>
            <ul className="flex flex-wrap gap-3 justify-center">
              {skillList.map((skill) => (
                <li key={skill} className="bg-[var(--bg-card-hover)] text-[var(--text-color)] px-4 py-2 text-base rounded-full shadow">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;