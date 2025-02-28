import React from "react";
import "../index.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Project = ({
  techStack,
  title,
  description,
  projectUrl,
  images,
  direction,
  showDemoButton,
  showProjectButton,
}) => {
  const isLeft = direction === "left";
  
  // Apply conditional classes only for md screens and above
  const containerClasses = `flex flex-col sm:flex-row justify-center items-center mb-20`;
  const projectCardClasses = `max-w-md bg-white px-4 pt-1 pb-5 overflow-hidden cursor-pointer ${isLeft ? "md:order-2" : ""}`;
  const carouselClasses = `w-full md:w-1/2 pt-5 md:pt-0 px-10 ${isLeft ? "md:order-1" : ""}`;

  return (
    <div className={containerClasses}>
      <div className={projectCardClasses}>
        <div className="px-6 py-4 text-left">
          <div className="text-black text-s mb-2">{techStack}</div>
          <div className="font-bold text-black text-xl mb-2">{title}</div>
          <p className="text-black text-s">{description}</p>
        </div>
        <div className="flex justify-center w-full">
          {showDemoButton && (
            <a
              href={projectUrl}
              className="bg-white text-background text-center text-s font-bold py-2 px-4 w-3/8 outline outline-1 outline-background hover:opacity-50 transition-opacity duration-300"
            >
              View Demo
            </a>
          )}
          {showProjectButton && (
            <a
              href={projectUrl}
              className="bg-white text-background text-center text-s font-bold py-2 px-4 w-3/8 outline outline-1 outline-background hover:opacity-50 transition-opacity duration-300"
            >
              View Project
            </a>
          )}
        </div>
      </div>
      <div className={carouselClasses}>
        <Carousel showThumbs={false} showStatus={false}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Profile ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Project;
