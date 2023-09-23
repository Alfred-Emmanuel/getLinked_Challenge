"use client";
import { useEffect, useState } from "react";

const ScrollLine = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const percentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="h-1 bg-white fixed top-0 left-0 z-50 transition-width duration-300"
      style={{ width: `${scrollPercentage}%` }}
    ></div>
  );
};

export default ScrollLine;
