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
      className={`lg:h-24 lg:flex lg:items-center lg:justify-center fixed z-50 backdrop-blur-lg w-full -top-1 border-bottom transition-transform duration-300 transform ${
        isScrolled ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className=" hidden lg:flex justify-between items-center lg:mx-[7%] lg:w-full">
        <Link href="/" className="text-3xl font-bold">
          get<span className="text-primary-color">linked</span>
        </Link>
        <div className="lg:flex justify-end gap-[20%] items-center lg:w-[50%] lg:mr-[2%]">
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex w-[50%] font-semibold text-[1rem] justify-around items-center">
            <li>
              <Link href="#timeline" className="hovered-link">
                Timeline
              </Link>
            </li>
            <li>
              <Link href="/" className="hovered-link">
                Overview
              </Link>
            </li>
            <li>
              <Link href="#faqs" className="hovered-link">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hovered-link">
                Contact
              </Link>
            </li>
          </ul>
          <Link
            href="/register"
            className="moving bg-gradient-to-r from-pink via-primary-color to-secondary-color  px-12 py-2 rounded-lg "
          >
            Register
          </Link>
        </div>
      </div>

      <div className="lg:hidden flex px-5 justify-between h-16 items-center">
        <Link href="/" className="text-2xl font-bold">
          get<span className="text-primary-color">linked</span>
        </Link>

        <div className="lg:hidden">
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
          className={`lg:hidden h-screen overflow-y-hidden py-4 px-8 w-full animate-${
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
              <Link href="/" onClick={closeMobileNav}>
                Overview
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#faqs" onClick={closeMobileNav}>
                FAQs
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/contact" onClick={closeMobileNav}>
                Contact
              </Link>
            </li>
          </ul>
          <Link
            href="/register"
            className="lg:hidden bg-gradient-to-r from-pink via-primary-color to-secondary-color px-6 py-2 rounded-lg "
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
