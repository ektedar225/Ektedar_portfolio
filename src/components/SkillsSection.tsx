import React, { useEffect, useRef } from 'react';
import { skillsData } from '../data/userData';
import { Code, Database, GitBranch, ServerIcon, Settings, Terminal } from 'lucide-react';

const SkillsSection: React.FC = () => {
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

  // Icons for each category
  const categoryIcons = {
    'Programming Languages': <Code size={24} />,
    'Libraries/Frameworks': <Database size={24} />,
    'Developer Tools': <Settings size={24} />,
    'Technologies/Platforms': <ServerIcon size={24} />,
    'Operating Systems': <Terminal size={24} />,
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="content-section py-20 bg-gradient-to-b from-secondary to-primary"
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-display font-bold mb-12 text-center reveal">
          Technical <span className="text-accent">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="hover-card reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <span className="text-accent mr-3">
                  {categoryIcons[category.category as keyof typeof categoryIcons] || <GitBranch size={24} />}
                </span>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center reveal">
          <h3 className="text-2xl font-display font-semibold mb-6">My Approach</h3>
          <p className="text-text-secondary">
            I combine strong theoretical foundations with practical implementation skills, allowing me to tackle complex problems with innovative solutions. Whether it's developing machine learning algorithms or building full-stack applications, I focus on creating efficient, maintainable, and impactful technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;