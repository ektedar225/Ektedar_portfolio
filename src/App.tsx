import React, { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useScrollReveal } from './utils/useScrollReveal';

function App() {
  // Use the scroll reveal hook
  useScrollReveal('.reveal');

  // Update document title
  useEffect(() => {
    document.title = "Ektedar Ahmad | Portfolio";
  }, []);

  return (
    <div className="App">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;