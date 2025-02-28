const NavBar = ({ onMenuSelect }) => {
  const scrollToSection = (event, sectionId) => {
    onMenuSelect(sectionId.replace("#", ""));

    event.preventDefault();

    const element = document.querySelector(sectionId);
    if (element) {
      const yCoordinate =
        element.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -100; // adjust this value to suit your needs

      window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
    } else {
      console.error(`Element with id ${sectionId} does not exist`);
    }
  };

  return (
    <nav className="sticky min-w-screen top-0 z-10 bg-white text-background p-4">
      <div className="container mx-auto flex justify-center">
        <div className="flex items-center">
          <a
            href="#about"
            className="px-3 py-2 rounded-md text-l font-medium transition-transform duration-500 ease-in-out transform hover:scale-110"
            onClick={(e) => scrollToSection(e, "#about")}
          >
            About
          </a>
          <a
            href="#experiences"
            className="px-3 py-2 rounded-md text-l font-medium transition-transform duration-500 ease-in-out transform hover:scale-110"
            onClick={(e) => scrollToSection(e, "#experience")}
          >
            Experience
          </a>
          <a
            href="#projects"
            className="px-3 py-2 rounded-md text-l font-medium transition-transform duration-500 ease-in-out transform hover:scale-110"
            onClick={(e) => scrollToSection(e, "#projects")}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-3 py-2 rounded-md text-l font-medium transition-transform duration-500 ease-in-out transform hover:scale-110"
            onClick={(e) => scrollToSection(e, "#contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
