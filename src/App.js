import "./App.css";
import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import ExperienceComponent from "./components/ExperienceComponent";
import ProjectComponent from "./components/ProjectComponent";
import ADP from "./assets/ADP.jpg";

import React, { useState } from "react";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("Experience"); // Default selection
  const [contentClass, setContentClass] = useState("fadeIn");

  const handleMenuChange = (menu) => {
    if (menu !== selectedMenu) {
      setContentClass("fadeOut");
      setTimeout(() => {
        setSelectedMenu(menu);
        setContentClass("fadeIn");
      }, 500); // match the duration of your CSS transition
    }
  };

  return (
    <div className="bg-background min-h-screen px-4 md:px-10 lg:max-w-6xl mx-auto">
      <NavBar onMenuSelect={handleMenuChange} />
      <div className="flex flex-col">
        <Introduction id="about"></Introduction>
        <div
          className={`relative max-h-[90vh] ${contentClass}`}
          style={{ scrollBehavior: "smooth" }}
        >
          {/* Experience */}
          <div id="experience" class="flex flex-col justify-center items-center pt-80 pb-80 pl-5">
            <ExperienceComponent
              logo={ADP}
              title="Senior Developer"
              period="Jan 2020 - Present"
              description="Responsible for leading the development team..."
            />
          </div>

          {/* Projects */}
          <div id="projects" class="grid grid-cols-3 pt-5 pl-5 pb-40">
            <div class="pb-4">
              <ProjectComponent
                techStack="python, django"
                title="Amber Alert Plus"
                description="OpenCityAI is a AI trained on open city data, able to generate accurate responses with citations for any city data question."
                projectUrl="link-to-project"
              />
            </div>
            <div class="pb-4">
              <ProjectComponent
                techStack="javascript, react"
                title="Spaceship killer"
                description="OpenCityAI is a AI trained on open city data, able to generate accurate responses with citations for any city data question."
                projectUrl="link-to-project"
              />
            </div>
            <div class="pb-4">
              <ProjectComponent
                techStack="javascript, react"
                title="Spaceship killer"
                description="OpenCityAI is a AI trained on open city data, able to generate accurate responses with citations for any city data question."
                projectUrl="link-to-project"
              />
            </div>
            <div class="pb-4">
              <ProjectComponent
                techStack="javascript, react"
                title="Spaceship killer"
                description="OpenCityAI is a AI trained on open city data, able to generate accurate responses with citations for any city data question."
                projectUrl="link-to-project"
              />
            </div>
            <div class="pb-4">
              <ProjectComponent
                techStack="javascript, react"
                title="Spaceship killer"
                description="OpenCityAI is a AI trained on open city data, able to generate accurate responses with citations for any city data question."
                projectUrl="link-to-project"
              />
            </div>
            <div class="pb-4">
              <ProjectComponent
                techStack="javascript, react"
                title="Spaceship killer"
                description="OpenCityAI is a AI trained on open city data, able to generate accurate responses with citations for any city data question."
                projectUrl="link-to-project"
              />
            </div>
          </div>
          {/* Contact */}
          <div id="contact" class="flex flex-col pt-5 pl-5">
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
