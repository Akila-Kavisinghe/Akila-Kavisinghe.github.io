import "./App.css";
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import BackToTop from "./components/BackToTop";
import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import Experience from "./components/Experience";
import Project from "./components/Project";
import About from "./components/About";

import ADP from "./assets/experience/ADP.png";
import CASEWARE from "./assets/experience/CASEWARE.png";
import LIFION from "./assets/experience/LIFION.png";
import BELL from "./assets/experience/BELL.png";

import Project_1_1 from "./assets/projects/energize-1.png"
import Project_1_2 from "./assets/projects/energize-2.png"
import Project_2_1 from "./assets/projects/amberalertplus-summary.png"
import Project_3_1 from "./assets/projects/spaceship-ship1.png"
import Project_3_2 from "./assets/projects/spaceship-ship2.png"
import Project_3_3 from "./assets/projects/spaceship-shop.png"
import Project_4_1 from "./assets/projects/animematch-main_menu.png"
import Project_4_2 from "./assets/projects/animematch-login.png"
import Project_4_3 from "./assets/projects/animematch-chat.png"

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
  CSSIcon,
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
        <div id="about" className="min-h-screen pt-20">
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
          <div className="flex flex-row">
            <Project
              techStack="React, JavaScript/TypeScript, Node.js, MySQL, Express"
              title="Energize (2023)"
              description="This is an ongoing project meant to show off my skills as a full stack engineer. It will be a web application that allows users to track their nutrition, and exercise. I work on it daily and I am very excited to show it off when it is done! Since it is still in development I've included some AI generated images that are being used for UI Inspiration."
              projectUrl="https://www.example.com"
              direction={"left"}
              images={[Project_1_1, Project_1_2]}
              showProjectButton={true}
            />
          </div>
          <div className="flex flex-row">
            <Project
              techStack="Python, Django, MySQL, React, JavaScript"
              title="Amber Alert Plus (2021)"
              description="This was my 6 developer project for my Capstone Project. It was a complete overhaul of the existing Amber Alert system. It featured enhanced alert messaging, a centralised information hub, and sight reporting. Unforunately the code base is not available anymore."
              projectUrl=""
              direction={"right"}
              images={[Project_2_1]}
            />
          </div>
          <div className="flex flex-row">
            <Project
              techStack="Python, Pygame"
              title="iSpaceship (2019)"
              description="This was a 5 developer project for my Software Architecture Course. We utilized a Model View Presenter which is common in video game development. Checkout the deliverable folder on my Github to see the thought that went into the project!"
              projectUrl="https://github.com/Akila-Kavisinghe/iSpaceship"
              direction={"left"}
              images={[Project_3_1, Project_3_2, Project_3_3]}
              showProjectButton={true}
            />
          </div>
          <div className="flex flex-row">
            <Project
              techStack="Java, MySQL"
              title="AnimeMatch (2019)"
              description="This was a 4 developer project for my Data Structure and Algoirthms Course. It was a dating application that uses complex graphing algorithms to match users based on their anime preferences."
              projectUrl="https://github.com/Akila-Kavisinghe/AnimeMatch"
              direction={"right"}
              images={[Project_4_1, Project_4_2, Project_4_3]}
              showProjectButton={true}
            />
          </div>
        </div>
        <div
          className="min-h-screen flex flex-col justify-center items-center"
        >
          <div className="flex md:flex-row flex-col justify-center items-center space-y-2 md:space-y-0 space-x-0 md:space-x-2">
            <a
              href="https://www.linkedin.com/in/akila-kavisinghe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={{color: "#0B66C2"}} className="w-24 h-24 transition-transform duration-500 ease-in-out transform hover:scale-105" />
            </a>
            <a
              href="https://github.com/akila-kavisinghe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={{color: "#161515"}} className="w-24 h-24 transition-transform duration-500 ease-in-out transform hover:scale-105" />
            </a>
            <a href="mailto:akilakavisinghe1999@gmail.com">
              <FaEnvelope style={{color: "#F14335"}} className="w-24 h-24 transition-transform duration-500 ease-in-out transform hover:scale-105" />
            </a>
          </div>
          <footer className="mt-4 text text-center pb-10 transition-transform duration-500 ease-in-out transform hover:scale-105">
            &copy; Akila Kavisinghe 2023
          </footer>
          <div id="contact"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
