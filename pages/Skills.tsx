import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  "AI & Content Creation": ["AI Content Generation", "LoRA Model Training & Customization", "Product Photoshoot with AI Tools", "Storyboarding & Scripting for AI Videos", "Design & Content Creation"],
  "Strategy & Automation": ["Creative Direction for Digital Campaigns", "Prompt Engineering & Automation"],
  "Platform Development": ["Development & Platforms (Lovable, Bolt, Firebase)"]
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
            className="bg-[var(--bg-card)] border border-[var(--border-color)] p-8 [border-radius:var(--card-border-radius)] [border-width:var(--border-width)]"
          >
            <h2 className="text-2xl font-semibold mb-6 text-[var(--text-color-strong)]">{category}</h2>
            <ul className="flex flex-wrap gap-3">
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