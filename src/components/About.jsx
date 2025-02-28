import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../index.css";
import IMAGE1 from "../assets/about/TRAVEL.png";
import IMAGE2 from "../assets/about/MUSIC.png";
import IMAGE3 from "../assets/about/CAT.png";
import IMAGE4 from "../assets/about/BIKE.png";

const About = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center">
      <div className="w-full md:w-1/2 px-10">
        <h1 className="text-2xl font-bold transition-transform duration-500 ease-in-out transform hover:scale-105">WHO AM I?</h1>
        <p className="mt-2 text-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
          I'm a passionate software engineer 🛠 with 5 years of work experience and a knack for
          turning complex challenges into efficient solutions.
        </p>
        <p className="mt-2 text-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
          I graduated from McMaster University 🎓 with a Bachelors in Software Engineering.
        </p>
        <p className="mt-2 text-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
          I love travelling 🌴, making music in my bedroom 🎹, MMA 🤼‍♂️, and spending quality time with my cat 🐱.
        </p>
        <p className="mt-2 text-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
          My journey through tech has been as diverse as my interests,
          reflecting in the dynamic solutions I bring to the table.
        </p>
      </div>
      <div className="w-full md:w-1/2 pt-5 md:pt-0 px-10">
        <Carousel showThumbs={false} showStatus={false}>
          <div>
            <img src={IMAGE1} alt="Profile 1" />
          </div>
          <div>
            <img src={IMAGE2} alt="Profile 2" />
          </div>
          <div>
            <img src={IMAGE3} alt="Profile 3" />
          </div>
          <div>
            <img src={IMAGE4} alt="Profile 3" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default About;
