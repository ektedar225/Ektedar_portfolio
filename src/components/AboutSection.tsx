import React, { useEffect, useRef } from 'react';
import { personalInfo } from '../data/userData';
import { AtSign, Github, Globe, Linkedin, Phone } from 'lucide-react';

const AboutSection: React.FC = () => {
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
      id="about"
      ref={sectionRef}
      className="content-section py-20 bg-secondary bg-opacity-30"
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-display font-bold mb-12 text-center reveal">
          <span className="text-accent">About</span> Me
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/5 reveal">
            <div className="relative">
              <div className="absolute inset-0 border-2 border-accent rounded-lg transform translate-x-4 translate-y-4"></div>
              <img
                src="Ektedar.jpg"
                alt="Ektedar Ahmad"
                className="w-full h-auto rounded-lg object-cover shadow-xl"
              />
            </div>
          </div>

          <div className="lg:w-3/5">
            <h3 className="text-2xl font-display font-semibold mb-4 reveal">
              Chemical Engineering Student with a Passion for AI
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed reveal">
              I'm a B.Tech student at IIT Jodhpur, specializing in Chemical Engineering with a minor in Artificial Intelligence. My academic journey combines traditional engineering principles with cutting-edge AI technologies, allowing me to develop innovative solutions across different domains.
            </p>
            <p className="text-text-secondary mb-6 leading-relaxed reveal">
              With a strong foundation in data analysis, machine learning, and software development, I've successfully built trading systems, recommendation models, and web applications. I'm constantly seeking opportunities to apply my skills in real-world scenarios and contribute to meaningful projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center reveal">
                <Phone size={20} className="text-accent mr-3" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center reveal">
                <AtSign size={20} className="text-accent mr-3" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center reveal">
                <Github size={20} className="text-accent mr-3" />
                <span>{personalInfo.github}</span>
              </div>
              <div className="flex items-center reveal">
                <Globe size={20} className="text-accent mr-3" />
               
              </div>
            </div>

            <div className="flex flex-wrap gap-4 reveal">
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-6 py-2 bg-accent hover:bg-opacity-80 text-white rounded-full transition-all duration-300"
              >
                Contact Me
              </a>
              <a
                href="#"
                className="px-6 py-2 bg-transparent border border-accent text-accent hover:bg-accent hover:bg-opacity-10 rounded-full transition-all duration-300"
              >
                Download CV
              </a>
              <a
                href={`https://github.com/${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-transparent border border-accent/30 text-accent hover:border-accent hover:bg-accent hover:bg-opacity-10 rounded-full transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-transparent border border-accent/30 text-accent hover:border-accent hover:bg-accent hover:bg-opacity-10 rounded-full transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;