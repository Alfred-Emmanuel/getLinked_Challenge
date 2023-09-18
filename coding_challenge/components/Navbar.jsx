// import React from 'react'
import { linearGradient } from "polished";

const color1 = "#D434FE";
const color2 = "#903AFF";

const mixedGradient = linearGradient({
  colorStops: [
    `${color1} 0%`,
    `${color1} 50%`,
    `${color2} 50%`,
    `${color2} 100%`,
  ],
  toDirection: "to right",
});

const Navbar = () => {
  return (
    <nav className=" md:h-24 md:flex md:items-center md:justify-center sticky border-bottom">
      <div className=" md:flex md:justify-between items-center md:mx-[7%] md:w-full  ">
        <h2 className="text-2xl font-bold">
          get<span className="text-[var(--primary-color)]">linked</span>
        </h2>
        <ul className="md:flex md:w-[50%] md:justify-around md:items-center ">
          <li>Home</li>
          <li>Overview</li>
          <li>FAQs</li>
          <li>Contact</li>
        </ul>
        <button
          className="p-5 bg-[var(--mixed-gradient)] text-white rounded-md"
          //   style={{ backgroundColor: mixedGradient }}
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
