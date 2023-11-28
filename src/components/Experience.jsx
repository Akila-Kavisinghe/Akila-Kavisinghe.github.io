import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Experience = ({
  logo,
  title,
  period,
  description,
  techIcons,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        onClick={handleClick}
        className="flex-1 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 flex flex-col transition-transform duration-500 ease-in-out w-64 h-[455px] hover:shadow-xl"
      >
        {/* Logo Section */}
        <div className="flex items-center justify-center">
          <img
            className="h-48 w-half sm:w-full object-cover md:h-full md:w-48"
            src={logo}
            alt={`${title} logo`}
          />
        </div>

        {/* Description Section */}
        <div className="p-8 pt-5">
          <div className="uppercase tracking-wide text-sm text-bold text-background font-semibold">
            {title}
          </div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black">
            {period}
          </p>
          <p className="mt-2 text-gray-500">{description}</p>
        </div>
      </div>

      <div
        onClick={handleClick}
        className="flex-1 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-auto md:max-w-2xl m-4 flex flex-col w-64 h-[455px] hover:shadow-xl"
      >
        <div className="sticky top-0 bg-white z-10 tracking-wide text-sm text-center ext-bold text-background font-bold px-8 pt-5">
          Tech Stack
        </div>
        <hr className="sticky top-6 bg-white shadow-lg z-10 mt-4" />
        <div className="px-8 py-4 overflow-auto">
          <div className="grid grid-cols-2 gap-4">
            {techIcons.map((icon, index) => (
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
                className="h-20 w-20"
              />
            ))}
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default Experience;
