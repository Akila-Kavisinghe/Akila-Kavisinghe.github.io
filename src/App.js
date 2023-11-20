import ProjectComponent from "./components/ProjectComponent";
import "./App.css";
import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";

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
      <div className="flex">
        {/* Left Side */}
        <Introduction></Introduction>
        {/* Right Side */}
        <div
          className={`relative w-1/2 overflow-y-auto max-h-[90vh] ${contentClass}`}
          style={{ scrollBehavior: "smooth" }}
        >
          {/* Experience */}
          {selectedMenu === "Experience" && (
            <div class="flex flex-col pt-5 pl-5"></div>
          )}
          {selectedMenu === "Projects" && (
            <div class="flex flex-col pt-5 pl-5">
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
          )}
          {/* Contact */}
          {selectedMenu === "Contact" && (
            <div class="flex flex-col pt-5 pl-5"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
