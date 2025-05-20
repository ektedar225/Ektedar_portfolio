import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-10 bg-primary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-text-secondary/10 pt-6">
          <div className="mb-4 md:mb-0">
            <p className="text-text-secondary">
              &copy; {new Date().getFullYear()} Ektedar Ahmad. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;