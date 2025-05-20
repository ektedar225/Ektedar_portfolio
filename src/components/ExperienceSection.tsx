import React, { useEffect, useRef } from 'react';
import { experienceData } from '../data/userData';
import { Briefcase, Link as LinkIcon } from 'lucide-react';

const ExperienceSection: React.FC = () => {
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
      id="experience"
      ref={sectionRef}
      className="content-section py-20 bg-primary"
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-display font-bold mb-12 text-center reveal">
          Professional <span className="text-accent">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto text-lg md:text-xl">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="mb-12 reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="hover-card relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
                <div className="ml-2 p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold flex items-center">
                        <Briefcase size={20} className="text-accent mr-2" />
                        {exp.title}
                      </h3>
                      <p className="text-text-secondary">
                        {exp.company}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <div className="text-accent font-medium">{exp.date}</div>
                      <div className="text-text-secondary">{exp.location}</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-accent font-bold">•</span>
                          <span className="text-text-secondary">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="skill-pill bg-accent/10 text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {exp.link && (
                    <div className="mt-4 flex gap-4 flex-wrap">
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-accent hover:underline"
                      >
                        <LinkIcon size={16} className="mr-1" />
                        Live Project
                      </a>
                      {exp.githubLink && (
                        <a
                          href={exp.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-accent hover:underline"
                        >
                          <LinkIcon size={16} className="mr-1" />
                          GitHub Repo
                        </a>
                      )}
                    </div>
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

export default ExperienceSection;