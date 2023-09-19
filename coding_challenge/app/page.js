"use client"
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Typist from "react-typist";

export default function Home() {
  return (
    <main>
      <section className="md:pl-[7%] mt-8 md:mt-0 text-center md:text-left relative ">
        <Image
          src="/Purple-Lens-Flare-PNG.png"
          width={250}
          height={250}
          className=" md:hidden absolute top-16 -left-10 opacity-60"
        />
        <Image
          src="/star.png"
          alt="first star"
          width={20}
          height={20}
          className=" absolute top-10 left-[20%] w-[3%] md:w-[1%] md:top-50 md:left-40 md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/star(1).png"
          alt="second star"
          width={20}
          height={20}
          className=" absolute top-12 left-[80%] w-[3%] md:w-[1%] md:top-[30%] md:right-[50%] md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/star(2).png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute top-[35%] left-[80%] w-[3%] md:w-[1%] md:top-[77%] md:left-[30%] md:z-[10] md:opacity-90 blink-animation"
        />
        <div className=" md:text-right md:pr-[15%] md:mt-10">
          <h2 className="md:text-3xl md:relative italic font-medium w-auto ">
            <Typist avgTypingDelay={100}>
              Igniting a Revolution in HR Innovation
            </Typist>
            <img
              src="/vector 4.png"
              alt="Curved Arch"
              className="absolute w-24 left-[73%] md:left-1/2 transform -translate-x-1/2 md:w-48 md:h-3 md:ml-[42%]"
            />
          </h2>
        </div>
        <div className="md:mt-[3%] md:flex ">
          <div>
            <Image
              src="/Title.png"
              width={650}
              height={650}
              className="w-[70%] mt-6 md:mt-0 md:w-[100%] mx-auto md:mx-0 z-10"
            />
            <p className="text-[0.7rem] w-[60%] text-center mx-auto pt-1 mb-6 md:pt-0 md:mx-0 md:text-left md:text-[1rem] md:mb-10 md:mt-5 md:w-[60%]">
              Participate in getLinked Tech Hackathon 2023 and stand a chance to
              win a big prize
            </p>
            <Link
              href="#"
              className="bg-gradient-to-r from-pink-500 via-primary-color to-secondary-color px-8 py-3 md:px-12 md:py-3 rounded-lg "
            >
              Register
            </Link>
            <Image
              src="/Countdown time.png"
              width={200}
              height={200}
              className="mt-5 md:mt-10 mx-auto md:mx-0 "
            />
          </div>
          <div className="relative">
            <Image
              src="/man-wearing-smart-glasses.png"
              alt="man wearing smart glasses"
              width={500}
              height={500}
              className="grayscale grayscale-100"
            />
            <Image
              src="/globe.png"
              alt="the globe"
              width={700}
              height={700}
              className=" top-1  absolute md:-top-5 md:-left-10 md:z-[10] md:opacity-90 rolling-animation"
            />
            <Image
              src="/Purple-Lens-Flare-PNG.png"
              alt="the globe"
              width={900}
              height={900}
              className="hidden md:block top-1 absolute md:-top-20 md:left-10 md:z-[10] md:opacity-90"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
