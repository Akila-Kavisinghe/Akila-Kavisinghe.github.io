import "./App.css";
import React, { useState } from "react";

import BackToTop from "./components/BackToTop";
import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import Experience from "./components/Experience";
import Project from "./components/Project";
import About from "./components/About";

import ADP from "./assets/ADP.png";
import CASEWARE from "./assets/CASEWARE.png";
import LIFION from "./assets/LIFION.png";
import BELL from "./assets/BELL.png";

import {
  AWS,
  JS,
  GO,
  JAVA,
  KUBERNETES,
  JENKINS,
  NODE,
  POSTMAN,
  GIT,
  TYPESCRIPT,
  SPRING,
  REACT,
  REDUX,
  POSTGRES,
  SELENIUM,
  PYTHON,
  REDIS,
  HTML,
  ANGULAR,
  GITHUBACTIONS,
  CSSIcon
} from "./icons";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("Experience"); // Default selection

  const handleMenuChange = (menu) => {
    if (menu !== selectedMenu) {
      setSelectedMenu(menu);
    }
  };

  return (
    <div className="min-h-screen px-4 md:px-10 lg:max-w-6xl mx-auto">
      <BackToTop />
      <NavBar onMenuSelect={handleMenuChange} />
      <div className="flex flex-col">
        {/* INTRO */}
        <div className="min-h-screen">
          <Introduction></Introduction>
        </div>
        {/* ABOUT */}
        <div id="about" className="min-h-screen">
          <About></About>
        </div>
        {/* EXPERIENCE */}
        <div id="experience" className="min-h-screen">
          <div className="flex flex-col md:flex-row justify-center items-center space-x-4 pt-10">
            <Experience
              logo={LIFION}
              title="Backend Platform Engineer"
              period="Mar 2023 - Sept 2023"
              description="Developed seamless traffic distributor, created monitoring dashboards, and improved functional parity in software engines."
              techIcons={[
                JAVA,
                GO,
                AWS,
                KUBERNETES,
                JENKINS,
                JS,
                NODE,
                POSTMAN,
                GIT,
              ]}
            />
            <Experience
              logo={ADP}
              title="Full Stack Software Developer"
              period="Sept 2022 - Mar 2023"
              description="Resolved front and backend issues, increased accessibility compliance, and participated in UI component upgrades."
              techIcons={[
                TYPESCRIPT,
                JAVA,
                SPRING,
                REACT,
                REDUX,
                POSTGRES,
                REDIS,
                JENKINS,
                HTML,
                CSSIcon,
                POSTMAN,
                GIT,
              ]}
            />
            <Experience
              logo={BELL}
              title="Full Stack Software Contractor"
              period="Apr 2021 - Sept 2022"
              description="Automated power plant control interface password rotation and developed a webscraper for power plant control."
              techIcons={[SELENIUM, PYTHON, POSTGRES, POSTMAN, GIT]}
            />
            <Experience
              logo={CASEWARE}
              title="Data Analytics Software Developer"
              period="May 2020 - Aug 2020"
              description="Aided in code migration and refactoring, and developed software bindings using external accounting software APIs."
              techIcons={[
                JS,
                HTML,
                CSSIcon,
                ANGULAR,
                AWS,
                POSTMAN,
                GITHUBACTIONS,
                GIT,
              ]}
            />
          </div>
        </div>
        {/* PROJECTs*/}
        <div id="projects" className="min-h-screen">
          <div className="flex"></div>
          <Project
            techStack="React, Node.js, Express, MongoDB"
            title="My Project"
            description="This is a description of my project. It was built using React, Node.js, Express, and MongoDB."
            projectUrl="https://www.example.com"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
