"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import FAQs from "@/components/FAQs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Countdown from "@/components/Countdown";
import Timeline from "@/components/Timeline";
import Typewriter from "@/components/Typewriter";
import LoadingComponent from "@/components/LoadingSkeleton";

export default function Home() {
  const [pageLoadedBefore, setPageLoadedBefore] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const hasLoadedBefore = localStorage.getItem("hasLoadedBefore");

    if (hasLoadedBefore) {
      setPageLoadedBefore(true);
      setShowMainContent(true); // Show main content immediately if loaded before
    } else {
      localStorage.setItem("hasLoadedBefore", "true");

      setTimeout(() => {
        setShowMainContent(true); // Show main content after a delay (e.g., 7500 milliseconds)
      }, 7500);
    }
  }, []);
  return (
    <>
      {showMainContent ? (
        <>
          <div className="lg-relative overflow-x-hidden">
            <Navbar />
            <Image
              src="/Purple-Lens-Flare-PNG.png"
              width={700}
              height={900}
              className="hidden lg:block absolute lg:top-4 lg:left-20 lg:z-[-1] lg:opacity-50  blink-animation"
            />
            <main className="pl-0 lg:pl-[7%] mt-28 lg:mt-28 ">
              <section className=" mt-8 lg:mt-0 text-center lg:text-left relative ">
                <Image
                  src="/Purple-Lens-Flare-PNG.png"
                  width={250}
                  height={250}
                  alt=""
                  className=" lg:hidden absolute top-16 -left-10 opacity-60"
                />
                <Image
                  src="/star.png"
                  alt="first star"
                  width={20}
                  height={20}
                  className=" absolute top-10 left-[20%] w-[3%] lg:w-[1%] lg:top-50 lg:left-40 lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/star(1).png"
                  alt="second star"
                  width={20}
                  height={20}
                  className=" absolute top-12 left-[80%] w-[3%] lg:w-[1%] lg:top-[30%] lg:right-[50%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/star(2).png"
                  alt="third star"
                  width={20}
                  height={20}
                  className=" absolute top-[35%] left-[80%] w-[3%] lg:w-[1%] lg:top-[77%] lg:left-[30%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <div className=" lg:text-right lg:pr-[15%] lg:mt-0">
                  <h2 className="lg:text-3xl lg:relative md:text-2xl italic font-medium w-auto ">
                    <Typewriter />
                    <Image
                      width={50}
                      height={50}
                      src="/curved-arch.png"
                      alt="Curved Arch"
                      className="absolute w-24 left-[73%] lg:left-1/2 transform -translate-x-1/2 lg:w-44 lg:h-3 md:-ml-20 md:w-32 lg:ml-[42%]"
                    />
                  </h2>
                </div>
                <div className="lg:mt-[3%] lg:flex ">
                  <div>
                    <Fade direction="up" duration={2000} triggerOnce={true}>
                      <Image
                        src="/Title.png"
                        width={650}
                        height={650}
                        alt="title"
                        className=" w-[70%] mt-6 lg:mt-0 lg:w-[100%] mx-auto lg:mx-0 z-10"
                      />
                    </Fade>
                    <Fade direction="up" duration={2000} triggerOnce={true}>
                      <p className="text-[0.7rem] w-[60%] text-center mx-auto pt-1 mb-6 lg:pt-0 md:text-[1.4rem] md:mt-5 md:mb-10 lg:mx-0 lg:text-left lg:text-[1rem] lg:mb-10 lg:mt-5 lg:w-[60%]">
                        Participate in getLinked Tech Hackathon 2023 and stand a
                        chance to win a big prize
                      </p>
                    </Fade>
                    <Fade direction="up" duration={2000} triggerOnce={true}>
                      <Link
                        href="/register"
                        className="bg-gradient-to-r from-pink via-primary-color to-secondary-color px-8 py-3 md:px-16 md:py-4 lg:px-12 lg:py-3 rounded-lg "
                      >
                        Register
                      </Link>
                    </Fade>
                    <Fade direction="up" duration={2000} triggerOnce={true}>
                      <Countdown />
                    </Fade>
                  </div>
                  <Fade direction="up" duration={2000} triggerOnce={true}>
                    <div className="relative p-7 lg:p-0 lg:ml-[5%] md:mt-20 lg:mt-0">
                      <Image
                        src="/man-wearing-smart-glasses.png"
                        alt="man wearing smart glasses"
                        width={600}
                        height={600}
                        className="grayscale grayscale-100"
                      />
                      <Image
                        src="/globe.png"
                        alt="the globe"
                        width={700}
                        height={700}
                        className=" top-1 left-0 absolute lg:-top-5 lg:-left-10 lg:z-[10] lg:opacity-90 rolling-animation"
                      />
                      <Image
                        src="/Purple-Lens-Flare-PNG.png"
                        alt="the globe"
                        width={900}
                        height={900}
                        className="hidden lg:block top-1 absolute lg:-top-5 lg:left-20 lg:z-[10] lg:opacity-90"
                      />
                    </div>
                  </Fade>
                </div>
              </section>
              <section className=" text-center mt-9 lg:text-left lg:mt-20 mb-10 mr-[6%] relative">
                <Image
                  src="/star(3).png"
                  alt="fourth star"
                  width={20}
                  height={20}
                  className=" absolute top-[20%] left-[10%] w-[3%] lg:w-[1%] lg:top-[33%] lg:left-0 lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/star(4).png"
                  alt="fifth star"
                  width={20}
                  height={20}
                  className=" absolute top-[53%] left-[87%] w-[3%] lg:w-[1%] lg:top-[30%] lg:left-[85%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <div className="lg:flex lg:gap-[5%]">
                  <div className=" p-10 lg:p-0 lg:w-[45%]">
                    <Fade direction="up" duration={2000} triggerOnce={true}>
                      <Image
                        src="/The big idea.png"
                        width={500}
                        height={500}
                        alt="the big idea"
                        className="mx-auto lg:mx-0 md:mt-10 lg:mt-0 "
                      />
                    </Fade>
                  </div>
                  <div className=" lg:w-[50%] flex items-center">
                    <div>
                      <Fade direction="up" duration={2000} triggerOnce={true}>
                        <h1 className=" text-[1.2rem] mb-4 font-bold md:text-3xl lg:mb-3">
                          Introduction to getlinked <br />{" "}
                          <span className="text-primary-color">
                            tech Hackathon 1.0
                          </span>
                        </h1>
                      </Fade>
                      <Fade direction="up" duration={2000} triggerOnce={true}>
                        <p className=" w-[85%] text-left text-[0.8rem] md:leading-7 md:text-[1.2rem] mx-auto lg:mx-0 lg:w-[80%]">
                          Our tech hackathon is a meeting point of visionaries,
                          and it&apos;s purpose is as clear as day: to shape the
                          future. Whether you&apos;re a coding genius, a design
                          maverick, or a concept wizard, you&apos;ll have the
                          chance to transform your ideas into reality. Solving
                          real world problems, pushing the boundaries of
                          technology, and creating solutions that can change the
                          world, that&apos;s all we&apos;re all about!
                        </p>
                      </Fade>
                    </div>
                  </div>
                </div>
              </section>
              <section className="text-center mt-9 lg:text-left lg:mt-20 mb-10 mr-[6%] relative">
                <Image
                  src="/Purple-Lens-Flare-PNG.png"
                  alt="the globe"
                  width={100}
                  height={100}
                  className="w-[100%] -top-5 -left-[35%] absolute lg:w-[50%] lg:-top-[25%] lg:-left-[10%] lg:z-[10] opacity-70 blink-animation"
                />
                <Image
                  src="/Purple-Lens-Flare-PNG.png"
                  alt="the globe"
                  width={100}
                  height={100}
                  className=" w-[100%] top-[40%] left-[55%] absolute lg:w-[50%] lg:top-[30%] lg:left-[82%] lg:z-[10] opacity-80 blink-later-animation"
                />
                <Image
                  src="/star(1).png"
                  alt="fourth star"
                  width={20}
                  height={20}
                  className=" absolute top-[23%] left-[15%] w-[4%] lg:w-[2%] lg:top-[23%] lg:left-[17%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/star.png"
                  alt="fifth star"
                  width={20}
                  height={20}
                  className=" absolute top-[58%] left-[78%] w-[4%] lg:w-[2%] lg:top-[70%] lg:left-[50%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <div className="flex flex-col lg:flex-row lg:gap-[2%]">
                  <div className="order-2 lg:order-1 lg:w-[50%] flex items-center">
                    <div>
                      <Fade direction="up" duration={2000} triggerOnce={true}>
                        <h1 className="text-[1.2rem] mb-4 font-bold md:text-3xl lg:mb-3">
                          Rules and <br />{" "}
                          <span className="text-primary-color">Guidelines</span>
                        </h1>
                      </Fade>
                      <Fade direction="up" duration={2000} triggerOnce={true}>
                        <p className="w-[85%] text-left text-[0.8rem] md:text-[1.2rem] mx-auto lg:mx-0 lg:w-[80%]">
                          Our tech hackathon is a melting pot of visionaries,
                          and its purpose is as clear as day: to shape the
                          future. Whether you&apos;re a coding genius, a design
                          maverick, or a concept wizard, you&apos;ll have the
                          chance to transform your ideas into reality. Solving
                          real-world problems, pushing the boundaries of
                          technology, and creating solutions that can change the
                          world, that&apos;s what we&apos;re all about!
                        </p>
                      </Fade>
                    </div>
                  </div>
                  <div className="  order-1 lg:order-2 p-10 lg:p-0 lg:w-[48%]">
                    <Fade direction="up" duration={2000} triggerOnce={true}>
                      <Image
                        src="/girl-sitting.png"
                        width={500}
                        height={500}
                        className="mx-auto lg:mx-0"
                        alt="girl sitting"
                      />
                    </Fade>
                  </div>
                </div>
              </section>
              <section className="text-center mt-9 lg:text-left lg:mt-20 mb-10 mr-[6%] relative">
                <Image
                  src="/Purple-Lens-Flare-PNG.png"
                  alt="the globe"
                  width={100}
                  height={100}
                  className="w-[100%] -top-5 -left-[35%] absolute lg:w-[50%] lg:top-[40%] lg:-left-[15%] lg:z-[10] opacity-70 blink-animation"
                />
                <Image
                  src="/Purple-Lens-Flare-PNG.png"
                  alt="the globe"
                  width={100}
                  height={100}
                  className=" w-[100%] top-[40%] left-[55%] absolute lg:w-[50%] lg:top-[73%] lg:left-[78%] lg:z-[10] opacity-80 blink-later-animation"
                />
                <Image
                  src="/star(4).png"
                  alt="fourth star"
                  width={20}
                  height={20}
                  className=" absolute top-[0] left-[50%] w-[4%] lg:w-[1%] lg:top-[10%] lg:left-[8%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/star(1).png"
                  alt="fifth star"
                  width={20}
                  height={20}
                  className=" absolute top-[10%] left-[50%] w-[4%] lg:w-[1%] lg:top-[44%] lg:left-[18%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/star.png"
                  alt="fifth star"
                  width={20}
                  height={20}
                  className=" absolute top-[99%] left-[90%] w-[4%] lg:w-[1%] lg:top-[81%] lg:left-[38%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <div className="lg:flex lg:gap-[5%]">
                  <div className=" p-10 lg:p-0 lg:w-[45%] flex items-center md:justify-center lg:justify-normal ">
                    <Fade direction="up" duration={2000} triggerOnce={true}>
                      <Image
                        src="/man-and-woman.png"
                        width={600}
                        height={100}
                        alt="man and woman"
                        className="mx-auto lg:mx-0 "
                      />
                    </Fade>
                  </div>
                  <div className=" lg:w-[50%] flex items-center">
                    <div>
                      <Fade direction="up" duration={2000} triggerOnce={true}>
                        <h1 className=" text-[1.2rem] mb-4 font-bold md:text-3xl lg:mb-3">
                          Judging Criteria <br />{" "}
                          <span className="text-primary-color">
                            Key Attributes
                          </span>
                        </h1>
                      </Fade>

                      <div>
                        <Fade direction="up" duration={2000} triggerOnce={true}>
                          <p className=" w-[85%] text-left text-[0.8rem] md:text-[1.2rem] md:font-normal lg:font-medium font-medium mx-auto lg:mx-0 lg:w-[80%] mt-5">
                            <span className="text-pink font-semibold text-[1rem] md:text-[1.2rem] ">
                              Innovation and Creativity:
                            </span>{" "}
                            Evaluate the uniqueness and creativity of the
                            solution. Consider whether it addresses a real-world
                            problem in a novel way or introduces innovative
                            features.
                          </p>
                        </Fade>
                        <Fade direction="up" duration={2000} triggerOnce={true}>
                          <p className=" w-[85%] text-left text-[0.8rem] md:text-[1.2rem] md:font-normal lg:font-medium font-medium mx-auto lg:mx-0 lg:w-[80%] mt-5">
                            <span className="text-pink font-semibold text-[1rem] md:text-[1.2rem]">
                              Functionality:{" "}
                            </span>{" "}
                            Assess how well the solution works. Does it perform
                            its intended functions effectively and without major
                            issues? Judges would consider the completeness and
                            robustness of the solution.
                          </p>
                        </Fade>
                        <Fade direction="up" duration={2000} triggerOnce={true}>
                          <p className=" w-[85%] text-left text-[0.8rem] md:text-[1.2rem] md:font-normal lg:font-medium font-medium mx-auto lg:mx-0 lg:w-[80%] mt-5">
                            <span className="text-pink font-semibold text-[1rem] md:text-[1.2rem] ">
                              Impact and Relevance:{" "}
                            </span>{" "}
                            Determine the potential impact of the solution in
                            the real world. Does it address a significant
                            problem, and is it relevant to the target audience?
                            Judges would assess the potential social, economic,
                            or environmental benefits.
                          </p>
                        </Fade>
                        <Fade direction="up" duration={2000} triggerOnce={true}>
                          <p className=" w-[85%] text-left text-[0.8rem] md:text-[1.2rem] md:font-normal lg:font-medium font-medium mx-auto lg:mx-0 lg:w-[80%] mt-5">
                            <span className="text-pink font-semibold text-[1rem] md:text-[1.2rem] ">
                              {" "}
                              Technical Complexity:
                            </span>{" "}
                            Evaluate the technical sophistication of the
                            solution. Judges would consider the complexity of
                            the code, the use of advanced technologies or
                            algorithms, and the scalability of the solution.
                          </p>
                        </Fade>
                        <Fade direction="up" duration={2000} triggerOnce={true}>
                          <p className=" w-[85%] text-left text-[0.8rem] md:text-[1.2rem] md:font-normal lg:font-medium font-medium mx-auto lg:mx-0 lg:w-[80%] mt-5 mb-10 lg:mb-8">
                            <span className="text-pink font-semibold text-[1rem] md:text-[1.2rem]">
                              {" "}
                              Adherence to Hackathon Rules:{" "}
                            </span>{" "}
                            Judges will Ensure that the team adhered to the
                            rules and guidelines of the hackathon, including
                            deadlines, use of specific technologies or APIs, and
                            any other competition-specific requirements.
                          </p>
                        </Fade>
                      </div>
                      <Fade direction="up" duration={2000} triggerOnce={true}>
                        <Link
                          href="#"
                          className="bg-gradient-to-r from-pink via-primary-color to-secondary-color px-6 py-3 lg:px-12 lg:py-3 rounded-lg "
                        >
                          Read More
                        </Link>
                      </Fade>
                    </div>
                  </div>
                </div>
              </section>
              <section
                id="faqs"
                className=" text-center mt-20 lg:text-left lg:mt-32 mb-10 lg:mr-[6%] relative"
              >
                <Image
                  src="/star(4).png"
                  alt="fifth star"
                  width={20}
                  height={20}
                  className=" absolute -top-[3%] left-[15%] w-[4%] lg:w-[1%] lg:-top-[12%] lg:-left-[2%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/star(1).png"
                  alt="second star"
                  width={20}
                  height={20}
                  className=" absolute top-[78%] left-[12%] w-[4%] lg:w-[1%] lg:top-[57%] lg:left-[48%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/star.png"
                  alt="first star"
                  width={20}
                  height={20}
                  className=" absolute top-[95%] left-[73%] w-[4%] lg:w-[1%] lg:top-[100%] lg:left-[80%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/star(3).png"
                  alt="third star"
                  width={20}
                  height={20}
                  className=" absolute top-[60%] left-[45%] w-[4%] lg:w-[1%] lg:top-[15%] lg:left-[56%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/star(3).png"
                  alt="third star"
                  width={20}
                  height={20}
                  className=" absolute top-[72%] left-[23%] w-[4%] lg:w-[1%] lg:-top-[5%] lg:left-[70%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/middle-qm.png"
                  alt="question mark"
                  width={20}
                  height={20}
                  className=" absolute top-[58%] left-[37%] w-[5%] lg:w-[3%] lg:-top-[13%] lg:left-[64%] lg:z-[10] lg:opacity-90 "
                />{" "}
                <Image
                  src="/left-qm.png"
                  alt="question mark"
                  width={20}
                  height={20}
                  className=" absolute top-[61%] left-[25%] w-[4%] lg:w-[2%] lg:-top-[2%] lg:left-[55%] lg:z-[10] lg:opacity-90 "
                />{" "}
                <Image
                  src="/right-qm.png"
                  alt="question mark"
                  width={20}
                  height={20}
                  className=" absolute top-[61%] left-[54%] w-[4%] lg:w-[2%] lg:-top-[2%] lg:left-[75%] lg:z-[10] lg:opacity-90 "
                />
                <div className="flex flex-col lg:flex-row lg:gap-[2%]">
                  <div className=" lg:w-[50%] flex items-center">
                    <div>
                      <Fade duration={2000} direction="up" triggerOnce={true}>
                        <h1 className="text-[1.2rem] mb-4 font-bold md:text-3xl lg:mb-5">
                          Frequently Asked <br />{" "}
                          <span className="text-primary-color">Questions</span>
                        </h1>
                      </Fade>
                      <Fade duration={2000} direction="up" triggerOnce={true}>
                        <p className="w-[80%] mb-5 mx-auto text-[0.78rem] md:text-[1.2rem] font-normal lg:font-semibold lg:mb-0 lg:mx-0 lg:w-[60%]">
                          We&apos;ve got answers to the questions that you might
                          want to ask about{" "}
                          <span className="font-bold">
                            getlinked Hackathon 1.0
                          </span>
                        </p>
                      </Fade>
                      <FAQs />
                    </div>
                  </div>
                  <div className="p-10 lg:p-0  lg:w-[48%]">
                    <Fade duration={2000} direction="up" triggerOnce={true}>
                      <Image
                        src="/man-thinking.png"
                        width={500}
                        height={500}
                        alt="man thinking"
                        className="mx-auto lg:mx-0"
                      />
                    </Fade>
                  </div>
                </div>
              </section>
              <section
                id="timeline"
                className="text-center mt-9 mb-16 lg:mt-28 lg:mb-20 relative"
              >
                <Timeline />
                <div className="lg:hidden ml-5  gap-3 relative">
                  <Image
                    src="/star(3).png"
                    alt="third star"
                    width={20}
                    height={20}
                    className=" absolute -top-[5%] left-[13%] w-[4%] blink-animation"
                  />
                  <Image
                    src="/star.png"
                    alt="third star"
                    width={20}
                    height={20}
                    className=" absolute top-[46%] left-[60%] w-[4%] blink-animation"
                  />
                  <Image
                    src="/star(2).png"
                    alt="third star"
                    width={20}
                    height={20}
                    className=" absolute top-[103%] left-[10%] w-[4%] blink-animation"
                  />
                </div>
              </section>
              <section className="mt-16 mb-16 lg:mt-28 lg:mb-20 relative">
                <Image
                  src="/star(3).png"
                  alt="third star"
                  width={20}
                  height={20}
                  className=" absolute -top-[3%] left-[20%] w-[3%] lg:w-[1%] lg:top-[5%] lg:left-[10%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/star.png"
                  alt="first star"
                  width={20}
                  height={20}
                  className=" absolute top-[2%] left-[80%] w-[3%] lg:w-[1%] lg:top-[25%] lg:left-[45%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/star.png"
                  alt="third star"
                  width={20}
                  height={20}
                  className=" absolute top-[60%] left-[25%] w-[3%] lg:w-[1%] lg:top-[52%] lg:left-[83%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/star.png"
                  alt="third star"
                  width={20}
                  height={20}
                  className=" absolute top-[68%] left-[77%] w-[3%] lg:w-[1%] lg:top-[99%] lg:left-[15%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/star(1).png"
                  alt="third star"
                  width={20}
                  height={20}
                  className=" absolute top-[100%] left-[60%] w-[3%] lg:w-[1%] lg:top-[102%] lg:left-[70%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/Purple-Lens-Flare-PNG.png"
                  alt="the globe"
                  width={100}
                  height={100}
                  className=" w-[80%] top-[15%] -left-[10%] absolute lg:w-[50%] lg:top-[65%] lg:left-[78%] lg:z-[10] opacity-80 blink-animation"
                />
                <Image
                  src="/Purple-Lens-Flare-PNG.png"
                  alt="the globe"
                  width={100}
                  height={100}
                  className=" w-[100%] top-[80%] left-[55%] absolute lg:w-[50%] lg:top-[4%] lg:left-[0%] lg:z-[10] opacity-60 blink-later-animation"
                />
                <div className="lg:flex justify-center lg:justify-end">
                  <div className="w-[100%] text-center lg:text-left lg:w-[45%] ">
                    <Fade duration={2000} direction="up" triggerOnce={true}>
                      <h1 className="text-2xl md:text-3xl font-bold">
                        Prizes and <br />{" "}
                        <span className="text-primary-color">Rewards</span>
                      </h1>
                    </Fade>
                    <Fade duration={2000} direction="up" triggerOnce={true}>
                      <p className="w-[50%] text-[0.8rem] mx-auto mt-1 mb-3 lg:mb-0 lg:mx-0 md:text-[1.2rem] lg:w-[50%] lg:mt-5">
                        Highlight of the prizes for winner and runner-ups
                      </p>
                    </Fade>
                  </div>
                </div>
                <div className=" lg:flex lg:w-[92%] lg:pr-[10%] lg:justify-between">
                  <div className="p-5 w-[80%] mx-auto md:w-[60%] lg:mx-0 lg:w-auto lg:p-0">
                    <Fade duration={2000} direction="up" triggerOnce={true}>
                      <Image
                        src="/cup.png"
                        alt="cup"
                        width={500}
                        height={500}
                        className=""
                      />
                    </Fade>
                  </div>
                  <div className="p-5 w-[80%] mx-auto md:w-[60%] lg:mx-0 lg:w-auto lg:pt-[12%] lg:p-0">
                    <Fade duration={2000} direction="up" triggerOnce={true}>
                      <Image
                        src="/rewards.png"
                        alt="rewards"
                        width={500}
                        height={500}
                        className=""
                      />
                    </Fade>
                  </div>
                </div>
              </section>
              <section className="mt-20 mb-16 text-center flex items-center justify-center lg:mt-28 lg:mb-20 relative">
                <Image
                  src="/Purple-Lens-Flare-PNG.png"
                  alt="the globe"
                  width={100}
                  height={100}
                  className=" w-[80%] -top-[20%] -left-[30%] absolute lg:w-[50%] lg:top-[60%] lg:left-[78%] lg:z-[10] opacity-80 blink-animation"
                />
                <Image
                  src="/Purple-Lens-Flare-PNG.png"
                  alt="the globe"
                  width={100}
                  height={100}
                  className=" w-[100%] top-[70%] left-[55%] absolute lg:w-[50%] lg:top-[4%] lg:-left-[20%] lg:z-[10] opacity-60 blink-later-animation"
                />
                <Image
                  src="/star(3).png"
                  alt="third star"
                  width={20}
                  height={20}
                  className=" absolute -top-[3%] left-[20%] w-[3%] lg:w-[1%] lg:top-[16%] lg:left-[17%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/star(3).png"
                  alt="first star"
                  width={20}
                  height={20}
                  className=" absolute top-[48%] left-[13%] w-[3%] lg:w-[1%] lg:top-[40%] lg:left-[55%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/star.png"
                  alt="third star"
                  width={20}
                  height={20}
                  className=" absolute top-[85%] left-[85%] w-[3%] lg:w-[1%] lg:top-[78%] lg:left-[55%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <div>
                  <Fade duration={2000} direction="up" triggerOnce={true}>
                    <h1 className="text-2xl mb-2 md:text-3xl font-bold lg:mb-3">
                      Partners and Sponsors
                    </h1>
                  </Fade>
                  <Fade duration={2000} direction="up" triggerOnce={true}>
                    <p className="text-[0.8rem] w-[73%] md:text-[1.2rem] lg:w-[50%] mx-auto">
                      Getlinked Hackathon 1.0 is honored to have the following
                      major companies as it&apos;s partners and sponsors
                    </p>
                  </Fade>

                  <div className=" flex items-center justify-center p-7 lg:p-0 lg:mt-5">
                    <Fade duration={2000} direction="up" triggerOnce={true}>
                      <Image
                        src="/partners-and-sponsors.png"
                        width={1000}
                        height={1000}
                        alt="partners and sponsors"
                      />
                    </Fade>
                  </div>
                </div>
              </section>
              <section className="text-center lg:text-left mt-20 mb-5 lg:mt-28 lg:mb-20 relative">
                <Image
                  src="/Purple-Lens-Flare-PNG.png"
                  alt="the globe"
                  width={100}
                  height={100}
                  className=" top-[35%] -left-[40%] w-[100%] lg:block absolute lg:w-[50%] lg:top-[55%] lg:-left-[28%] lg:z-[10] opacity-80 blink-animation"
                />
                <Image
                  src="/star(2).png"
                  alt="third star"
                  width={20}
                  height={20}
                  className=" absolute -top-[3%] left-[80%] w-[3%] lg:w-[1%] lg:top-[0%] lg:left-[22%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/star(3).png"
                  alt="third star"
                  width={20}
                  height={20}
                  className=" absolute top-[11%] left-[75%] w-[3%] lg:w-[1%] lg:top-[13%] lg:left-[34%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/star.png"
                  alt="third star"
                  width={20}
                  height={20}
                  className=" absolute top-[71%] left-[70%] w-[3%] lg:w-[1%] lg:top-[13%] lg:left-[75%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/star(3).png"
                  alt="third star"
                  width={20}
                  height={20}
                  className=" absolute top-[35%] left-[3%] w-[3%] lg:w-[1%] lg:top-[66%] lg:left-[55%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/star.png"
                  alt="third star"
                  width={20}
                  height={20}
                  className=" absolute top-[88%] left-[20%] w-[3%] lg:w-[1%] lg:top-[73%] lg:left-[50%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/star(2).png"
                  alt="third star"
                  width={20}
                  height={20}
                  className=" absolute top-[91%] left-[76%] w-[3%] lg:w-[1%] lg:top-[79%] lg:left-[79%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <Image
                  src="/star(3).png"
                  alt="third star"
                  width={20}
                  height={20}
                  className=" absolute top-[70%] left-[10%] w-[4%] lg:w-[1%] lg:top-[80%] lg:-left-[2%] lg:z-[10] lg:opacity-90 blink-animation"
                />
                <div className=" lg:flex lg:justify-between lg:ml-[2%] lg:mr-[7%]">
                  <div className=" lg:w-[50%]">
                    <Fade duration={2000} direction="up" triggerOnce={true}>
                      <h1 className="text-2xl md:text-3xl lg:mb-5 font-bold">
                        Privacy Policy and <br />{" "}
                        <span className="text-primary-color">Terms</span>
                      </h1>
                    </Fade>

                    <Fade duration={2000} direction="up" triggerOnce={true}>
                      <p className="opacity-70 text-[0.7rem] mt-1 mb-3 lg:mt-0 lg:mb-4 md:text-[0.9rem]">
                        Last updated on September 12, 2023
                      </p>
                    </Fade>
                    <Fade duration={2000} direction="up" triggerOnce={true}>
                      <p className="opacity-90 text-[0.8rem] w-[85%] mb-5 mx-auto font-semibold lg:mx-0 md:text-[1rem] lg:mb-7 md:w-[70%]">
                        Below are our privacy & policy, which outline a lot of
                        goodies. it&apos;s our aim to always take of our
                        participant
                      </p>
                    </Fade>
                    <Fade duration={2000} direction="up" triggerOnce={true}>
                      <div className="px-5 py-10 text-left w-[85%] mx-auto bg-white bg-opacity-5 border-primary-color border-opacity-40 lg:mx-0 lg:p-12 lg:w-[80%] border-2">
                        <p className="text-[0.8rem] leading-7 md:text-[1rem] md:leading-8">
                          At getlinked tech Hackathon 1.0, we value your privacy
                          and are committed to protecting your personal
                          information. This Privacy Policy outlines how we
                          collect, use, disclose, and safeguard your data when
                          you participate in our tech hackathon event. By
                          participating in our event, you consent to the
                          practices described in this policy.
                        </p>
                        <h2 className="text-primary-color font-bold mt-3 md:mt-4 md:text-xl ">
                          Licensing Policy
                        </h2>
                        <h4 className="text-[0.9rem] md:text-[1rem] mt-4 font-semibold">
                          Here are terms of our Standard License:
                        </h4>
                        <div className="mt-3 mb-8 md:mt-4 md:mb-7">
                          <div className=" flex justify-center gap-2 md:pl-3 md:mb-3">
                            <Image
                              src="/list terms.png"
                              width={0}
                              height={0}
                              alt=""
                              className="w-[10%] h-[6%] pt-2 md:w-[5%] md:pt-2 md:h-[3%]"
                            />
                            <p className="text-[0.8rem] leading-6 md:text-[1rem] md:leading-7">
                              The Standard License grants you a non-exclusive
                              right to navigate and register for our event
                            </p>
                          </div>
                          <div className=" flex justify-center gap-2 md:pl-3 md:mb-3">
                            <Image
                              src="/list terms.png"
                              width={0}
                              height={0}
                              alt=""
                              className="w-[10%] h-[6%] pt-2 md:w-[5%] md:pt-2 md:h-[3%]"
                            />
                            <p className="text-[0.8rem] leading-6 md:text-[1rem] md:leading-7">
                              You are licensed to use the item available at any
                              free source sites, for your project development
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <Link
                            href="#"
                            className="bg-gradient-to-r from-pink via-primary-color to-secondary-color px-8 py-3 md:px-12 md:py-3 rounded-lg"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </Fade>
                  </div>
                  <div className="md:w-[50%] md:mx-auto lg:mx-0">
                    <div className="relative p-14 md:p-0">
                      <Fade duration={2000} direction="up" triggerOnce={true}>
                        <Image
                          src="/Vector.png"
                          width={500}
                          height={500}
                          alt=""
                          className="w-[] lg:absolute lg:w-[] lg:top-[5%]"
                        />
                      </Fade>

                      <Fade duration={2000} direction="up" triggerOnce={true}>
                        <Image
                          src="/man-on-padlock.png"
                          width={500}
                          height={500}
                          alt="man on padlock"
                          className="w-[] -mt-[90%] -ml-[10%] lg:mt-0 lg:w-[70%] lg:pt-[28%] lg:-ml-[5%]"
                        />
                      </Fade>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <Footer />
          </div>
        </>
      ) : (
        <LoadingComponent />
      )}
    </>
  );
}
