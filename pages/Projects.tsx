import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[var(--text-color-strong)]">Key Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;