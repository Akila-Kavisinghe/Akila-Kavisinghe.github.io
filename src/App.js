import ProjectComponent from './components/ProjectComponent';
import './App.css';
import NavBar from './components/NavBar';
import ProfileImage from './assets/profile.jpg'

function App() {
  return (
    <div className="bg-background min-h-screen px-4 md:px-10 lg:max-w-6xl mx-auto">
      <NavBar></NavBar>
      <div className="flex">
        {/* Left Side */}
        <div className="w-1/2 flex flex-col items-center pt-3">
          <div className="flex flex-col items-center w-full">
            <img
              src={ProfileImage}
              alt="Your Name"
              style={{ width: '275px', height: '275px' }}
              className="rounded-full object-cover ring-4 ring-white"
            />
          </div>
          <div className="w-full px-6 pt-10 py-4 text-center">
            <div className="font-bold text-white text-5xl mb-2">Akila Kavisinghe</div>
            <div className="font text-white text-4xl mb-2">Software Engineer</div>
          </div>
          <div className="w-full px-20 text-center">
            <div className="font text-white text-s mb-2">I am a results-driven software engineer with over three years of experience, adept at translating intricate challenges into impactful solutions.</div>
          </div>
        </div>
        {/* Right Side */}
        <div className="relative w-1/2 overflow-y-auto max-h-[90vh]" style={{ scrollBehavior: 'smooth' }}>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
