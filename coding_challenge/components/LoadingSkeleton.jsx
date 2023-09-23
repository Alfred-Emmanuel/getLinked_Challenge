// "use client";

// import { useRef, useEffect } from "react";
// import Typed from "typed.js";

// const LoadingComponent = () => {
//   const typedElementRef = useRef(null);
//   useEffect(() => {
//     const options = {
//       strings: ["Your days of Job Hunting are Over"], // An array of strings to type out
//       typeSpeed: 50, // Typing speed in milliseconds
//     };
//     const typed = new Typed(typedElementRef.current, options);
//     return () => {
//       typed.destroy(); // Clean up Typed.js on component unmount
//     };
//   }, []);
//   return <span ref={typedElementRef}></span>;
// };

// export default LoadingComponent;

"use client";

import { useRef, useEffect } from "react";
import Typed from "typed.js";

const LoadingComponent = () => {
  const typedElementRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["Your days of Job Hunting are Over"], // An array of strings to type out
      typeSpeed: 100, // Typing speed in milliseconds
    };
    const typed = new Typed(typedElementRef.current, options);
    return () => {
      typed.destroy(); // Clean up Typed.js on component unmount
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <span
        ref={typedElementRef}
        className="text-4xl font-bold text-center border-4 border-gradient p-4"
      ></span>
    </div>
  );
};

export default LoadingComponent;

