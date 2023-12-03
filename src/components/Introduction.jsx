import React from "react";
import ProfileImage from "../assets/profile.png";
import "../index.css";

const Introduction = () => {
  const resumePath = "/AKILA_RESUME_2024.pdf";

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center pt-40">
      <div
        className={`flex flex-col text-center sm:text-right sm:pr-10 transition-transform duration-500 ease-in-out transform hover:scale-105`}
      >
        <div className="font text-black text-2xl mb-2">Hi my name is</div>
        <div className="font-bold text-black text-5xl mb-2">
          Akila Kavisinghe
        </div>
        <div className="font text-black text-3xl mb-2">
          I am a Software Engineer 👨🏾‍💻
        </div>
      </div>
      <div className="image-container">
        <a
          href={resumePath}
          download="Akila_Kavisinghe_Resume.pdf"
          className="relative group"
        >
          <img
            src={ProfileImage}
            alt="Akila Kavisinghe"
            style={{ width: "275px", height: "275px" }}
            className="rounded-full object-cover shadow-2xl transition-transform duration-500 ease-in-out transform group-hover:scale-105"
          />
          <div className="overlay absolute inset-0 rounded-full flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-500 ease-in-out">
            <span className="text-white font-bold text-opacity-0 group-hover:text-opacity-100 transition-opacity duration-500 ease-in-out">
              Click to Download Resume
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Introduction;
