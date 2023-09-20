"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0 && currentScrollY > prevScrollY);
      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    document.body.style.overflow = isMobileNavOpen ? "auto" : "hidden"; // Toggle body scrolling
  };

  const closeMobileNav = () => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
      document.body.style.overflow = "auto"; // Enable body scrolling
    }
  };

  return (
    <nav
      className={`md:h-24 md:flex md:items-center md:justify-center fixed z-50 backdrop-blur-lg w-full -top-1 border-bottom transition-transform duration-300 transform ${
        isScrolled ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className=" hidden md:flex justify-between items-center md:mx-[7%] md:w-full">
        <h2 className="text-2xl font-bold">
          get<span className="text-primary-color">linked</span>
        </h2>
        <div className="md:flex justify-between items-center md:w-[50%] md:mr-[10%]">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex w-[50%] justify-around items-center">
            <li>
              <Link href="#timeline" className="hovered-link">
                Timeline
              </Link>
            </li>
            <li>
              <Link href="#timeline" className="hovered-link">
                Overview
              </Link>
            </li>
            <li>
              <Link href="#timeline" className="hovered-link">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="#timeline" className="hovered-link">
                Contact
              </Link>
            </li>
          </ul>
          <Link
            href="#"
            className="moving bg-gradient-to-r from-pink via-primary-color to-secondary-color  px-12 py-2 rounded-lg "
          >
            Register
          </Link>
        </div>
      </div>

      <div className="md:hidden flex px-5 justify-between h-16 items-center">
        <h2 className="text-2xl font-bold">
          get<span className="text-primary-color">linked</span>
        </h2>

        <div className="md:hidden">
          <button
            onClick={toggleMobileNav}
            className="block text-3xl text-primary-color"
          >
            {isMobileNavOpen ? (
              <Image
                src="/menu-close.png"
                width={15}
                height={15}
                alt=""
                className="transition-transform transform rotate-0"
                style={{ animation: "openToClose 0.5s ease-in-out forwards" }}
              />
            ) : (
              <Image
                src="/menu-open.png"
                width={20}
                height={20}
                alt=""
                className="transition-transform transform rotate-0"
                style={{ animation: "closeToOpen 0.5s ease-in-out forwards" }}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileNavOpen && (
        <div
          className={`md:hidden h-screen overflow-y-hidden py-4 px-8 w-full animate-${
            isMobileNavOpen ? "slideIn" : "slideOut"
          } `}
        >
          <ul className="">
            <li className="mb-4">
              <Link href="#timeline" onClick={closeMobileNav}>
                Timeline
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#timeline" onClick={closeMobileNav}>
                Overview
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#timeline" onClick={closeMobileNav}>
                FAQs
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#timeline" onClick={closeMobileNav}>
                Contact
              </Link>
            </li>
          </ul>
          <Link
            href="#"
            className="md:hidden bg-gradient-to-r from-pink via-primary-color to-secondary-color px-12 py-2 rounded-lg "
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
