"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Typist from "react-typist";

export default function Home() {
  return (
    <main>
      <section className=" mt-8 md:mt-0 text-center md:text-left relative ">
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
              className="bg-gradient-to-r from-pink via-primary-color to-secondary-color px-8 py-3 md:px-12 md:py-3 rounded-lg "
            >
              Register
            </Link>
            <Image
              src="/Countdown time.png"
              width={200}
              height={200}
              className="mt-5 mb-10 md:mb-0 md:mt-10 mx-auto md:mx-0 "
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
              className=" top-1 absolute md:-top-5 md:-left-10 md:z-[10] md:opacity-90 rolling-animation"
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
      <section className="text-center mt-9 md:text-left md:mt-20 mb-10 mr-[6%]">
        <div className="md:flex md:gap-[5%]">
          <div className=" p-10 md:p-0 md:w-[45%]">
            <Image
              src="/The big idea.png"
              width={500}
              height={500}
              className="mx-auto md:mx-0 "
            />
          </div>
          <div className=" md:w-[50%] flex items-center">
            <div>
              <h1 className=" text-[1.2rem] mb-4 font-bold md:text-3xl md:mb-3">
                Introduction to getlinked <br />{" "}
                <span className="text-primary-color">tech Hackathon 1.0</span>
              </h1>
              <p className=" w-[85%] font-semibold mx-auto md:mx-0 md:w-[80%]">
                Our tech hackathon is a meeting point of visionaries, and it's
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's all we're
                all about!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center mt-9 md:text-left md:mt-20 mb-10 mr-[6%]">
        <div className="flex flex-col md:flex-row md:gap-[2%]">
          <div className="order-2 md:order-1 md:w-[50%] flex items-center">
            <div>
              <h1 className="text-[1.2rem] mb-4 font-bold md:text-3xl md:mb-3">
                Rules and <br />{" "}
                <span className="text-primary-color">Guidelines</span>
              </h1>
              <p className="w-[85%]  font-semibold mx-auto md:mx-0 md:w-[80%]">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </p>
            </div>
          </div>
          <div className="  order-1 md:order-2 p-10 md:p-0 md:w-[48%]">
            <Image
              src="/girl-sitting.png"
              width={500}
              height={500}
              className="mx-auto md:mx-0"
            />
          </div>
        </div>
      </section>
      <section className="text-center mt-9 md:text-left md:mt-20 mb-10 mr-[6%]">
        <div className="md:flex md:gap-[5%]">
          <div className=" p-10 md:p-0 md:w-[45%] flex items-center ">
            <Image
              src="/man-and-woman.png"
              width={500}
              height={100}
              className="mx-auto md:mx-0 "
            />
          </div>
          <div className=" md:w-[50%] flex items-center">
            <div>
              <h1 className=" text-[1.2rem] mb-4 font-bold md:text-3xl md:mb-3">
                Judging Criteria <br />{" "}
                <span className="text-primary-color">Key Attributes</span>
              </h1>
              <p className=" w-[85%] font-semibold mx-auto md:mx-0 md:w-[80%]">
                <span className="text-pink">Innovation and Creativity:</span>{" "}
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </p>
              <p className=" w-[85%] font-semibold mx-auto md:mx-0 md:w-[80%] mt-5">
                <span className="text-pink">Functionality: </span> Assess how
                well the solution works. Does it perform its intended functions
                effectively and without major issues? Judges would consider the
                completeness and robustness of the solution.
              </p>
              <p className=" w-[85%] font-semibold mx-auto md:mx-0 md:w-[80%] mt-5">
                <span className="text-pink">Impact and Relevance: </span>{" "}
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </p>
              <p className=" w-[85%] font-semibold mx-auto md:mx-0 md:w-[80%] mt-5">
                <span className="text-pink"> Technical Complexity:</span>{" "}
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </p>
              <p className=" w-[85%] font-semibold mx-auto md:mx-0 md:w-[80%] mt-5 mb-10">
                <span className="text-pink">
                  {" "}
                  Adherence to Hackathon Rules:{" "}
                </span>{" "}
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </p>
              <Link
                href="#"
                className="bg-gradient-to-r from-pink via-primary-color to-secondary-color px-12 py-3 rounded-lg "
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
