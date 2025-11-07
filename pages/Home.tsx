import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS, PROFILE_IMAGE_URL } from '../constants';

const Home: React.FC = () => {
  const allProjects = PROJECTS;

  return (
    <div>
      <Hero />
      <div className="container mx-auto px-6 py-16 md:py-24 space-y-24">
        {/* About Me Snippet */}
        <section>
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2 flex justify-center">
              <img
                src={PROFILE_IMAGE_URL}
                alt="Vrinda Bansal"
                className="w-64 h-64 rounded-full object-cover border-2 border-[var(--border-color)] shadow-lg"
              />
            </div>
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold mb-4 text-[var(--text-color-strong)]">A Passion for AI-Driven Creativity</h2>
              <p className="text-[var(--text-muted)] text-lg mb-6">
                I'm an AI Creator and Video Editor specializing in LoRA model training, product visualizations, and advanced content production. I thrive on using AI to pioneer new forms of visual storytelling and user-centric design.
              </p>
              <Link
                to="/about"
                className="inline-block px-6 py-2 text-base font-medium text-[var(--accent-color)] border-2 border-[var(--accent-color)] [border-radius:var(--card-border-radius)] transition-all duration-300 hover:bg-[var(--accent-color)] hover:text-[var(--accent-color-text-hover)]"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </section>

        {/* My Projects */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-color-strong)]">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;