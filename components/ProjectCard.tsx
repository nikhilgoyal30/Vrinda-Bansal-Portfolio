import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="block group [perspective:1000px]">
      <div
        className="relative overflow-hidden transition-transform duration-500 ease-out group-hover:[transform:var(--card-hover-transform)] [transform-style:preserve-3d] aspect-[5/3] bg-[var(--bg-card)] [border-radius:var(--card-border-radius)] [box-shadow:var(--card-shadow)] border [border-color:var(--border-color)] [border-width:var(--border-width)]"
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 [border-radius:var(--card-border-radius)]"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end p-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <h3 className="text-white text-xl font-semibold">{project.title}</h3>
        </div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
         <h3 className="absolute bottom-0 left-0 p-6 text-white text-xl font-semibold group-hover:opacity-0 transition-opacity duration-300">{project.title}</h3>
      </div>
    </Link>
  );
};

export default ProjectCard;