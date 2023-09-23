"use client";

import { useRef,useEffect } from "react";
import Typed from "typed.js";

const Typewriter = () => {
  const typedElementRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["Igniting a Revolution in HR Innovation"], // An array of strings to type out
      typeSpeed: 50, // Typing speed in milliseconds
    };
    const typed = new Typed(typedElementRef.current, options);
    return () => {
      typed.destroy(); // Clean up Typed.js on component unmount
    };
  }, []);
  return <span ref={typedElementRef}></span>;
};

export default Typewriter;
