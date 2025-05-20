import React, { useEffect, useRef } from 'react';
import { personalInfo } from '../data/userData';
import { ArrowDownCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const section = sectionRef.current;
      if (!section) return;

      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      const titleElement = section.querySelector('.title-animation');
      const subtitleElement = section.querySelector('.subtitle-animation');

      if (titleElement) {
        (titleElement as HTMLElement).style.transform = `translate(${xPos * 0.5}px, ${yPos * 0.5}px)`;
      }

      if (subtitleElement) {
        (subtitleElement as HTMLElement).style.transform = `translate(${xPos * 0.3}px, ${yPos * 0.3}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/portfolio.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="title-animation text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
          <span className="block">
            Hi, I'm <span className="text-accent">Ektedar Ahmad</span>
          </span>
        </h1>
        <div className="subtitle-animation max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
            {personalInfo.title} | {personalInfo.institute}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="#about"
              className="btn px-8 py-3 bg-accent hover:bg-opacity-80 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              Discover My Work
            </a>
            <a
              href="#contact"
              className="btn px-8 py-3 bg-transparent border-2 border-white/30 hover:border-white/60 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={scrollToNext}></div>
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-300"
        aria-label="Scroll down"
      >
        <ArrowDownCircle size={32} className="animate-float" />
      </button>
    </section>
  );
};

export default HeroSection;