import React from 'react';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
      <nav className="w-full">
        <div className="fixed top-3 left-1/2 transform -translate-x-1/2 
                        w-[92%] lg:w-[70%] max-w-4xl h-10 rounded-2xl overflow-clip
                        bg-white/10 backdrop-blur-xl shadow-lg 
                        border border-white/20 z-50">
          <ul className="flex justify-around items-center h-full text-[11px] sm:text-xs lg:text-sm text-white font-medium tracking-wide px-2">
            <li 
              className="cursor-pointer hover:text-[rgba(0,213,241,1)] glow transition"
              onClick={() => scrollToSection('home')}
            >
              Home
            </li>
            <li 
              className="cursor-pointer hover:text-[rgba(0,213,241,1)] glow transition"
              onClick={() => scrollToSection('education')}
            >
              Education
            </li>
            <li 
              className="cursor-pointer hover:text-[rgba(0,213,241,1)] glow transition"
              onClick={() => scrollToSection('technologies')}
            >
              Technologies
            </li>
            <li 
              className="cursor-pointer hover:text-[rgba(0,213,241,1)] glow transition"
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </li>
            <li 
              className="cursor-pointer hover:text-[rgba(0,213,241,1)] glow transition"
              onClick={() => scrollToSection('achievements')}
            >
              Achievements
            </li>
            <li 
              className="cursor-pointer hover:text-[rgba(0,213,241,1)] glow transition"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </li>
          </ul>
        </div>
      </nav>

  );
};

export default Navbar;