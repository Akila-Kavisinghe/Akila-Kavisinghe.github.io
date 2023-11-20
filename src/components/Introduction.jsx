import React from "react";
import ProfileImage from "../assets/profile.jpg";
import "../index.css";

const Introduction = () => {
  return (
    <div className="w-1/2 flex flex-col items-center pt-3">
      <div className="flex flex-col items-center w-full">
        <img
          src={ProfileImage}
          alt="Your Name"
          style={{ width: "275px", height: "275px" }}
          className="rounded-full object-cover ring-4 ring-white"
        />
      </div>
      <div className="w-full px-6 pt-10 py-4 text-center">
        <div className="font-bold text-white text-5xl mb-2">
          Akila Kavisinghe
        </div>
        <div className="font text-white text-4xl mb-2">Software Engineer</div>
      </div>
      <div className="w-full px-20 text-center">
        <div className="font text-white text-s mb-2">
          I am a results-driven software engineer with over three years of
          experience, adept at translating intricate challenges into impactful
          solutions.
        </div>
      </div>
    </div>
  );
};

export default Introduction;
