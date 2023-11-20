import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-background text-white p-4">
      <div className="container mx-auto flex justify-center">
        <div className="flex items-center">
          <a href="#home" className="px-3 py-2 rounded-md text-l font-medium">Experience</a>
          <a href="#about" className="px-3 py-2 rounded-md text-l font-medium">Projects</a>
          <a href="#contact" className="px-3 py-2 rounded-md text-l font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;