
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import Lightbox from '../components/Lightbox';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [selectedMedia, setSelectedMedia] = useState<{ src: string; type: 'image' | 'video' } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedMedia(null);
  }, [projectId]);

  const projectIndex = PROJECTS.findIndex(p => p.id === projectId);
  const project = PROJECTS[projectIndex];

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <Link to="/projects" className="mt-8 inline-block text-lg text-[var(--accent-color)]">
          &larr; Back to All Projects
        </Link>
      </div>
    );
  }

  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : null;
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : null;

  // Helper to convert embed URL to watch URL for redirection
  const getWatchUrl = (embedUrl: string) => {
    return embedUrl.replace('embed/', 'watch?v=');
  };

  return (
    <>
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <p className="font-semibold mb-2 text-[var(--accent-color)]">{project.affiliation}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-color-strong)]">{project.title}</h1>
          
          {/* TOP NAVIGATION */}
          <div className="mb-12 pt-4 border-t border-[var(--border-color)] flex justify-between items-center text-lg">
            <div>
              {prevProject && (
                <Link to={`/projects/${prevProject.id}`} className="transition-colors duration-300 text-[var(--text-muted)] hover:text-[var(--accent-color)]">
                  &larr; Previous
                </Link>
              )}
            </div>
            <Link to="/projects" className="transition-colors duration-300 text-[var(--text-muted)] hover:text-[var(--accent-color)]">
              All Projects
            </Link>
            <div>
              {nextProject && (
                <Link to={`/projects/${nextProject.id}`} className="transition-colors duration-300 text-[var(--text-muted)] hover:text-[var(--accent-color)]">
                  Next &rarr;
                </Link>
              )}
            </div>
          </div>

          {/* GALLERY */}
          <div className="mb-12">
            {project.gallery && project.gallery.length > 0 && (
              <div className="flex flex-col gap-8">
                {/* Videos Section - Direct Redirection to YouTube */}
                {project.gallery.some(item => item.type === 'video') && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.gallery.filter(item => item.type === 'video').map((item, index) => (
                      <div 
                        key={index}
                        className="aspect-video w-full relative overflow-hidden [border-radius:var(--card-border-radius)] border border-[var(--border-color)] bg-black"
                      >
                        <a 
                          href={getWatchUrl(item.src || '')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full h-full relative cursor-pointer group block"
                        >
                          <img 
                            src={item.thumbnail} 
                            alt={`${project.title} Video Thumbnail`} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300">
                            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full border border-white/30 transform transition-transform group-hover:scale-110">
                              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Images Section */}
                {project.gallery.some(item => item.type === 'image') && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.gallery.filter(item => item.type === 'image').map((item, index) => (
                      <div 
                        key={index} 
                        className="overflow-hidden [border-radius:var(--card-border-radius)] [border-width:var(--border-width)] border border-[var(--border-color)] cursor-pointer group"
                        onClick={() => setSelectedMedia({ src: item.src, type: 'image' })}
                      >
                        <img
                          src={item.src}
                          alt={`${project.title} - Screenshot ${index + 1}`}
                          className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>


          <div className="space-y-10 text-lg leading-relaxed text-[var(--text-color)]">
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--text-color-strong)]">The Challenge</h3>
              <p>{project.challenge}</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--text-color-strong)]">My Solution</h3>
              <p>{project.solution}</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--text-color-strong)]">Technologies & Methods</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="bg-[var(--bg-card-hover)] text-[var(--text-color)] px-3 py-1 text-sm rounded-full">{tech}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--text-color-strong)]">Outcomes & Impact</h3>
              <p>{project.outcomes}</p>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-[var(--border-color)] flex justify-between items-center text-lg">
            <div>
              {prevProject && (
                <Link to={`/projects/${prevProject.id}`} className="transition-colors duration-300 text-[var(--text-muted)] hover:text-[var(--accent-color)]">
                  &larr; Previous
                </Link>
              )}
            </div>
            <Link to="/projects" className="transition-colors duration-300 text-[var(--text-muted)] hover:text-[var(--accent-color)]">
              All Projects
            </Link>
            <div>
              {nextProject && (
                <Link to={`/projects/${nextProject.id}`} className="transition-colors duration-300 text-[var(--text-muted)] hover:text-[var(--accent-color)]">
                  Next &rarr;
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <Lightbox media={selectedMedia} onClose={() => setSelectedMedia(null)} />
    </>
  );
};

export default ProjectDetail;
