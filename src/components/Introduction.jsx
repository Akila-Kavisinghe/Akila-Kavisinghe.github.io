import React, { useState, useEffect, useRef } from "react";
import ProfileImage from "../assets/profile.jpg";
import "../index.css";

const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current; // Capture the current value of ref.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center pt-20 pb-40 ${
        isVisible ? "animate-fadeIn" : "opacity-0"
      }`}
    >
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
