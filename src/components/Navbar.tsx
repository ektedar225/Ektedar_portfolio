import React, { useState, useEffect } from 'react';
import { navItems } from '../data/userData';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Check which section is currently in view
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute('id');
        
        if (sectionTop < 100 && sectionTop > -300 && sectionId) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-primary bg-opacity-90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#home" className="text-2xl font-display font-bold text-text-primary">
          Ektedar<span className="text-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className={`nav-link text-sm uppercase tracking-wider font-medium transition-colors duration-300 ${
                activeSection === item.path.substring(1) 
                  ? 'text-accent active' 
                  : 'text-text-primary hover:text-accent'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-text-primary focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-primary bg-opacity-95 backdrop-blur-md transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className={`py-2 text-sm uppercase tracking-wider font-medium transition-colors duration-300 ${
                activeSection === item.path.substring(1)
                  ? 'text-accent'
                  : 'text-text-primary hover:text-accent'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;