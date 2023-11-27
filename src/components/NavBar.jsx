const NavBar = ({ onMenuSelect }) => {
  const scrollToSection = (event, sectionId) => {
    onMenuSelect(sectionId.replace('#', ''));
  
    event.preventDefault();
  
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      console.error(`Element with id ${sectionId} does not exist`);
    }
  };

  return (
    <nav className="sticky top-0 z-10 bg-background text-white p-4">
      <div className="container mx-auto flex justify-center">
        <div className="flex items-center">
        <a href="#about" className="px-3 py-2 rounded-md text-l font-medium" onClick={(e) => scrollToSection(e, '#about')}>About</a>
          <a href="#experiences" className="px-3 py-2 rounded-md text-l font-medium" onClick={(e) => scrollToSection(e, '#experience')}>Experience</a>
          <a href="#projects" className="px-3 py-2 rounded-md text-l font-medium" onClick={(e) => scrollToSection(e, '#projects')}>Projects</a>
          <a href="#contact" className="px-3 py-2 rounded-md text-l font-medium" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;