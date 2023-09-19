"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GetLinked",
  description: "",
};

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Function to handle changes in isDarkMode
  const handleDarkModeChange = value => {
    setIsDarkMode(value);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);


  return (
    <html lang="en">
      <body
        className={`text-white ${
          isDarkMode
            ? "bg-dark-mode-background-color text-dark-mode-font-color"
            : "bg-light-mode-background-color text-light-mode-font-color"
        } ${inter.className}`}
      >
        <div className="md-relative overflow-x-hidden">
          <Navbar
            isDarkMode={isDarkMode}
            handleDarkModeChange={handleDarkModeChange}
          />
          <Image
            src="/Purple-Lens-Flare-PNG.png"
            width={700}
            height={900}
            className="hidden md:block absolute md:top-4 md:left-20 md:z-[-1] md:opacity-50"
          />
          <div className="md:pl-[7%]">{children}</div>
        </div>
      </body>
    </html>
  );
}
