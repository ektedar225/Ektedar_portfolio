import React, { useEffect, useRef } from 'react';
import { achievementsData } from '../data/userData';
import { Trophy } from 'lucide-react';

const AchievementsSection: React.FC = () => {
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
      id="achievements"
      ref={sectionRef}
      className="content-section py-20 bg-primary"
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-display font-bold mb-12 text-center reveal">
          <span className="text-accent">Achievements</span> & Awards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((achievement, index) => (
            <div
              key={index}
              className="hover-card h-full relative reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent flex items-center justify-center rounded-full shadow-lg">
                <Trophy size={24} className="text-white" />
              </div>
              
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
                <p className="text-text-secondary">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-accent hover:bg-opacity-80 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
          >
            View Certificates
          </a>
        </div>

        <div className="mt-16 text-center reveal">
          <a
            href="https://drive.google.com/file/d/1DKTTzKsQsxBYyDtPk15_biG-ryJss0GZ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-accent hover:bg-opacity-80 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 mr-4"
          >
            Machine Learning Certificate
          </a>
          <a
            href="https://drive.google.com/file/d/1DKBp03BazSlzUfu-0sXZdxYh1ny13pAj/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-accent hover:bg-opacity-80 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 mr-4"
          >
            WorldQuant Brain Certificate
          </a>
          <a
            href="https://drive.google.com/file/d/19e5D9DpyviX-uCRsdzuGz2E-X4jMk_Wj/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-accent hover:bg-opacity-80 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
          >
            MainFlow Intern Certificate
          </a>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;