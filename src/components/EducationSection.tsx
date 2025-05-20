import React, { useEffect, useRef } from 'react';
import { educationData } from '../data/userData';
import { GraduationCap } from 'lucide-react';

const EducationSection: React.FC = () => {
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
      id="education"
      ref={sectionRef}
      className="content-section py-20 bg-gradient-to-b from-primary to-secondary"
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-display font-bold mb-12 text-center reveal">
          <span className="text-accent">Education</span> Background
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-3.5 top-0 h-full w-px bg-accent/30"></div>
            
            {educationData.map((item, index) => (
              <div
                key={index}
                className="mb-12 relative pl-12 reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent">
                  <GraduationCap size={16} className="text-white" />
                </div>
                
                <div className="hover-card">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-semibold">{item.degree}</h3>
                    <span className="text-accent font-medium">{item.year}</span>
                  </div>
                  <p className="text-text-secondary mb-2">{item.institute}</p>
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent font-medium text-sm">
                    {item.gpa}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center reveal">
          <div className="inline-block hover-card">
            <h3 className="text-xl font-semibold mb-3">Key Courses</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="skill-pill bg-accent/20 text-accent text-lg md:text-xl">Data Structures & Algorithms</span>
              <span className="skill-pill bg-accent/20 text-accent text-lg md:text-xl">Artificial Intelligence</span>
              <span className="skill-pill bg-accent/20 text-accent text-lg md:text-xl">Machine Learning</span>
              <span className="skill-pill bg-accent/20 text-accent text-lg md:text-xl">Linear Algebra</span>
              <span className="skill-pill bg-accent/20 text-accent text-lg md:text-xl">Probability</span>
              <span className="skill-pill bg-accent/20 text-accent text-lg md:text-xl">Statistics</span>
              <span className="skill-pill bg-accent/20 text-accent text-lg md:text-xl">Differential Equations</span>
              <span className="skill-pill bg-accent/20 text-accent text-lg md:text-xl">Signals and Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;