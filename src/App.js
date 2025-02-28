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
import BELL from "./assets/experience/BELL.png";
import LIMELIGHT from "./assets/experience/LIMELIGHT.png";
import PARALLELZ from "./assets/experience/PARALLELZ.png";
import STOMPERS from "./assets/experience/STOMPERS.png";

import Project_2_1 from "./assets/projects/amberalertplus-summary.png"
import Project_3_1 from "./assets/projects/spaceship-ship1.png"
import Project_3_2 from "./assets/projects/spaceship-ship2.png"
import Project_3_3 from "./assets/projects/spaceship-shop.png"

import {
  AWS,
  JS,
  GO,
  JAVA,
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
  NEXTJS,
  FIREBASE,
  FIGMA,
  C,
  MONGO,
  LINUX,
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
        <div id="experience" className="min-h-screen flex justify-center items-center">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
              <Experience
                logo={STOMPERS}
                title="Full Stack and Mobile Engineer"
                period="Dec 2024 - Present"
                description="Contributed to the development of a real-time multiplayer walking game, focusing on network optimization and gameplay mechanics."
                techIcons={[
                  TYPESCRIPT,
                  REACT,
                  MONGO,
                  FIREBASE,
                  NEXTJS,
                  FIGMA,
                  AWS,
                ]}
              />
              <Experience
                logo={PARALLELZ}
                title="Lead Full Stack Engineer"
                period="March 2024 - March 2025"
                description="Worked on developing parallel computing solutions to enhance processing speed and efficiency."
                techIcons={[
                  TYPESCRIPT,
                  NEXTJS,
                  PYTHON,
                  GO,
                  C,
                  POSTGRES,
                  MONGO,
                  NODE,
                  AWS,
                  LINUX,
                ]}
              />
              <Experience
                logo={LIMELIGHT}
                title="Full Stack and Mobile Engineer"
                period="October 2023 - April 2024"
                description="Developed a live streaming app, leading UI/UX redesign, metric tracking, and marketing to engage over 500 daily users."
                techIcons={[
                  REACT,
                  TYPESCRIPT,
                  NODE,
                  NEXTJS,
                  FIREBASE,
                  FIGMA,
                  AWS
                ]}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
              <Experience
                logo={ADP}
                title="Full Stack Software Engineer"
                period="Sept 2022 - Sept 2023"
                description="Developed new features, optimized performance, and contributed to ADP's next-gen HR product."
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
                title="Full Stack Software Engineer"
                period="Sept 2021 - Aug 2022"
                description="Enhanced cell tower connectivity for Bell Canada with a cutting-edge automation service, significantly improving network stability."
                techIcons={[SELENIUM, PYTHON, POSTGRES, POSTMAN, GIT]}
              />
              <Experience
                logo={CASEWARE}
                title="Data Analytics Software Engineer"
                period="May 2020 - Aug 2021"
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
        </div>
        {/* PROJECTs*/}
        <div id="projects" className="min-h-screen pt-40">
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
              <FaLinkedin style={{ color: "#0B66C2" }} className="w-24 h-24 transition-transform duration-500 ease-in-out transform hover:scale-105" />
            </a>
            <a
              href="https://github.com/akila-kavisinghe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={{ color: "#161515" }} className="w-24 h-24 transition-transform duration-500 ease-in-out transform hover:scale-105" />
            </a>
            <a href="mailto:akilakavisinghe1999@gmail.com">
              <FaEnvelope style={{ color: "#F14335" }} className="w-24 h-24 transition-transform duration-500 ease-in-out transform hover:scale-105" />
            </a>
          </div>
          <footer className="mt-4 text text-center pb-10 transition-transform duration-500 ease-in-out transform hover:scale-105">
            &copy; Akila Kavisinghe 2025
          </footer>
          <div id="contact"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
