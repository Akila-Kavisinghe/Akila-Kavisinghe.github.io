import React from 'react';

const ExperienceComponent = ({ logo, title, period, description }) => {
  return (
    <div className="w-2/3 rounded-xl flex overflow-hidden">
      {/* Logo Section */}
      <div className="w-1/3 bg-white flex items-center justify-center aspect-w-1 aspect-h-1">
        <img
          src={logo}
          alt={`${title} logo`}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Description Section */}
      <div className="w-2/3 p-4 flex flex-col bg-white justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-black">{period}</p>
          <p className="text-sm mt-2 text-black">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;