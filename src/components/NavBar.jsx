import React from 'react';

const NavBar = ({ onMenuSelect }) => {
  return (
    <nav className="bg-background text-white p-4">
      <div className="container mx-auto flex justify-center">
        <div className="flex items-center">
          <a href="#experiences" className="px-3 py-2 rounded-md text-l font-medium" onClick={() => onMenuSelect('Experience')}>Experience</a>
          <a href="#projects" className="px-3 py-2 rounded-md text-l font-medium" onClick={() => onMenuSelect('Projects')}>Projects</a>
          <a href="#contact" className="px-3 py-2 rounded-md text-l font-medium" onClick={() => onMenuSelect('Contact')}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;