import React, { useState, useEffect, useCallback } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.scrollY > 400){
      setShowScroll(true);
    } else if (showScroll && document.documentElement.scrollTop === 0){
      setShowScroll(false);
    }
  }, [showScroll]);
  
  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [checkScrollTop]);

  const scrollTop = () => {
    const scrollOptions = {
      top: 0,
      behavior: "smooth",
    };

    window.scrollTo(scrollOptions);

    const checkIfDone = setInterval(function () {
      const atTop = window.scrollY === 0;
      if (atTop) {
        setShowScroll(false);
        clearInterval(checkIfDone);
      }
    }, 100);
  };

  return (
    showScroll && (
      <button
        className="fixed bottom-7 right-7 z-10 p-2 rounded-full bg-background text-white w-12 h-12 flex items-center justify-center"
        onClick={scrollTop}
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default BackToTop;
