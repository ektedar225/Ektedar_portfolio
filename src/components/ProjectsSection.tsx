import React, { useEffect, useRef } from 'react';
import { projectsData } from '../data/userData';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.reveal');
            elements?.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="content-section py-20 bg-secondary"
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-display font-bold mb-12 text-center reveal">
          My <span className="text-accent">Projects</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-xl md:text-2xl">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="hover-card h-full flex flex-col reveal bg-gradient-to-br from-secondary/80 to-primary/60 border-2 border-accent/30 shadow-2xl rounded-2xl p-8 transition-transform duration-300 hover:scale-105 hover:shadow-accent/30"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex-1">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-accent drop-shadow-lg">{project.title}</h3>
                  <span className="text-accent text-base font-semibold bg-accent/10 px-3 py-1 rounded-full shadow">{project.date}</span>
                </div>
                <div className="mb-6">
                  <ul className="space-y-4">
                    {project.description.map((desc, idx) => (
                      <li key={idx} className="flex gap-3 text-text-secondary text-lg md:text-xl">
                        <span className="text-accent font-bold text-2xl">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="skill-pill bg-accent/10 text-accent text-base font-semibold px-4 py-2 rounded-full shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6 mt-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent hover:underline text-lg font-semibold"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent hover:underline text-lg font-semibold"
                    >
                      <Github size={20} className="mr-2" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;