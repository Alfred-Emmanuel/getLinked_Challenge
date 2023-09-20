"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
// import Typist from "react-typist";
import FAQs from "@/components/FAQs";

export default function Home() {
  return (
    <main>
      <section className=" mt-8 md:mt-0 text-center md:text-left relative ">
        <Image
          src="/Purple-Lens-Flare-PNG.png"
          width={250}
          height={250}
          alt=""
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
            {/* <Typist avgTypingDelay={100}>
              Igniting a Revolution in HR Innovation
            </Typist> */}
            <Image
              width={50}
              height={50}
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
              alt="title"
              className="w-[70%] mt-6 md:mt-0 md:w-[100%] mx-auto md:mx-0 z-10"
            />
            {/* <span className="flex">
              <h2 className="text-4xl">
                getlinked Tech <br /> Hackathon 1.0
              </h2><Image src="/chain.png" width={20} height={20}/>
            </span> */}
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
              alt="countdown time"
              width={200}
              height={200}
              className="mt-5 mb-10 md:mb-0 md:mt-10 mx-auto md:mx-0 "
            />
          </div>
          <div className="relative p-7 md:p-0 md:ml-[5%]">
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
              className=" top-1 left-0 absolute md:-top-5 md:-left-10 md:z-[10] md:opacity-90 rolling-animation"
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
      <section className=" text-center mt-9 md:text-left md:mt-20 mb-10 mr-[6%] relative">
        <Image
          src="/star(3).png"
          alt="fourth star"
          width={20}
          height={20}
          className=" absolute top-[20%] left-[10%] w-[3%] md:w-[1%] md:top-[33%] md:left-0 md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/star(4).png"
          alt="fifth star"
          width={20}
          height={20}
          className=" absolute top-[53%] left-[87%] w-[3%] md:w-[1%] md:top-[30%] md:left-[85%] md:z-[10] md:opacity-90 blink-animation"
        />
        <div className="md:flex md:gap-[5%]">
          <div className=" p-10 md:p-0 md:w-[45%]">
            <Image
              src="/The big idea.png"
              width={500}
              height={500}
              alt="the big idea"
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
                Our tech hackathon is a meeting point of visionaries, and
                it&apos;s purpose is as clear as day: to shape the future.
                Whether you&apos;re a coding genius, a design maverick, or a
                concept wizard, you&apos;ll have the chance to transform your
                ideas into reality. Solving real world problems, pushing the
                boundaries of technology, and creating solutions that can change
                the world, that&apos;s all we&apos;re all about!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center mt-9 md:text-left md:mt-20 mb-10 mr-[6%] relative">
        <Image
          src="/Purple-Lens-Flare-PNG.png"
          alt="the globe"
          width={100}
          height={100}
          className="w-[100%] -top-5 -left-[35%] absolute md:w-[50%] md:-top-[25%] md:-left-[10%] md:z-[10] opacity-70"
        />
        <Image
          src="/Purple-Lens-Flare-PNG.png"
          alt="the globe"
          width={100}
          height={100}
          className=" w-[100%] top-[40%] left-[55%] absolute md:w-[50%] md:top-[30%] md:left-[82%] md:z-[10] opacity-80"
        />
        <Image
          src="/star(1).png"
          alt="fourth star"
          width={20}
          height={20}
          className=" absolute top-[23%] left-[15%] w-[4%] md:w-[2%] md:top-[23%] md:left-[17%] md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/star.png"
          alt="fifth star"
          width={20}
          height={20}
          className=" absolute top-[58%] left-[78%] w-[4%] md:w-[2%] md:top-[70%] md:left-[50%] md:z-[10] md:opacity-90 blink-animation"
        />
        <div className="flex flex-col md:flex-row md:gap-[2%]">
          <div className="order-2 md:order-1 md:w-[50%] flex items-center">
            <div>
              <h1 className="text-[1.2rem] mb-4 font-bold md:text-3xl md:mb-3">
                Rules and <br />{" "}
                <span className="text-primary-color">Guidelines</span>
              </h1>
              <p className="w-[85%]  font-semibold mx-auto md:mx-0 md:w-[80%]">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether
                you&apos;re a coding genius, a design maverick, or a concept
                wizard, you&apos;ll have the chance to transform your ideas into
                reality. Solving real-world problems, pushing the boundaries of
                technology, and creating solutions that can change the world,
                that&apos;s what we&apos;re all about!
              </p>
            </div>
          </div>
          <div className="  order-1 md:order-2 p-10 md:p-0 md:w-[48%]">
            <Image
              src="/girl-sitting.png"
              width={500}
              height={500}
              className="mx-auto md:mx-0"
              alt="girl sitting"
            />
          </div>
        </div>
      </section>
      <section className="text-center mt-9 md:text-left md:mt-20 mb-10 mr-[6%] relative">
        <Image
          src="/Purple-Lens-Flare-PNG.png"
          alt="the globe"
          width={100}
          height={100}
          className="w-[100%] -top-5 -left-[35%] absolute md:w-[50%] md:top-[40%] md:-left-[15%] md:z-[10] opacity-70"
        />
        <Image
          src="/Purple-Lens-Flare-PNG.png"
          alt="the globe"
          width={100}
          height={100}
          className=" w-[100%] top-[40%] left-[55%] absolute md:w-[50%] md:top-[73%] md:left-[78%] md:z-[10] opacity-80"
        />
        <Image
          src="/star(4).png"
          alt="fourth star"
          width={20}
          height={20}
          className=" absolute top-[0] left-[50%] w-[4%] md:w-[2%] md:top-[10%] md:left-[8%] md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/star(1).png"
          alt="fifth star"
          width={20}
          height={20}
          className=" absolute top-[10%] left-[50%] w-[4%] md:w-[1%] md:top-[44%] md:left-[18%] md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/star.png"
          alt="fifth star"
          width={20}
          height={20}
          className=" absolute top-[99%] left-[90%] w-[4%] md:w-[2%] md:top-[81%] md:left-[38%] md:z-[10] md:opacity-90 blink-animation"
        />

        <div className="md:flex md:gap-[5%]">
          <div className=" p-10 md:p-0 md:w-[45%] flex items-center ">
            <Image
              src="/man-and-woman.png"
              width={500}
              height={100}
              alt="man and woman"
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
      <section className="text-center mt-20 md:text-left md:mt-32 mb-10 md:mr-[6%] relative">
        <Image
          src="/star(4).png"
          alt="fifth star"
          width={20}
          height={20}
          className=" absolute -top-[3%] left-[15%] w-[4%] md:w-[2%] md:-top-[12%] md:-left-[2%] md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/star(1).png"
          alt="second star"
          width={20}
          height={20}
          className=" absolute top-[78%] left-[12%] w-[4%] md:w-[2%] md:top-[57%] md:left-[48%] md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/star.png"
          alt="first star"
          width={20}
          height={20}
          className=" absolute top-[95%] left-[73%] w-[4%] md:w-[2%] md:top-[100%] md:left-[80%] md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/star(3).png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute top-[60%] left-[45%] w-[4%] md:w-[1%] md:top-[15%] md:left-[56%] md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/star(3).png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute top-[72%] left-[23%] w-[4%] md:w-[1%] md:-top-[5%] md:left-[70%] md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/middle-qm.png"
          alt="question mark"
          width={20}
          height={20}
          className=" absolute top-[58%] left-[37%] w-[5%] md:w-[3%] md:-top-[13%] md:left-[64%] md:z-[10] md:opacity-90 "
        />{" "}
        <Image
          src="/left-qm.png"
          alt="question mark"
          width={20}
          height={20}
          className=" absolute top-[61%] left-[25%] w-[4%] md:w-[2%] md:-top-[2%] md:left-[55%] md:z-[10] md:opacity-90 "
        />{" "}
        <Image
          src="/right-qm.png"
          alt="question mark"
          width={20}
          height={20}
          className=" absolute top-[61%] left-[54%] w-[4%] md:w-[2%] md:-top-[2%] md:left-[75%] md:z-[10] md:opacity-90 "
        />
        <div className="flex flex-col md:flex-row md:gap-[2%]">
          <div className=" md:w-[50%] flex items-center">
            <div>
              <h1 className="text-[1.2rem] mb-4 font-bold md:text-3xl md:mb-5">
                Frequently Asked <br />{" "}
                <span className="text-primary-color">Questions</span>
              </h1>
              <p className="w-[80%] mb-5 mx-auto text-[0.78rem] md:text-[1rem] font-normal md:font-semibold md:mb-0 md:mx-0 md:w-[60%]">
                We&apos;ve got answers to the questions that you might want to
                ask about{" "}
                <span className="font-bold">getlinked Hackathon 1.0</span>
              </p>
              <FAQs />
            </div>
          </div>
          <div className="p-10 md:p-0 md:w-[48%]">
            <Image
              src="/man-thinking.png"
              width={500}
              height={500}
              alt="man thinking"
              className="mx-auto md:mx-0"
            />
          </div>
        </div>
      </section>
      <section className="text-center mt-9 mb-16 md:mt-28 md:mb-20 relative">
        <h1 className="text-2xl mb-3 md:text-3xl font-bold md:mb-5">
          Timeline
        </h1>
        <p className="text-[0.8rem] w-[80%] mx-auto mb-12 md:mb-0 md:text-[1rem] md:w-[30%]">
          Here is the breakdown of the time we anticipate using for the upcoming
          event
        </p>
        <div className="hidden md:flex md:justify-center md:items-center">
          <Image
            src="/timeline.png"
            width={900}
            height={700}
            alt="timeline"
            className=""
          />
        </div>
        <div className="md:hidden ml-5 flex gap-3 relative">
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
          <Image
            src="/numbers.png"
            width={15}
            height={15}
            alt="timeline"
            className=""
          />
          <Image src="/Date and time.png" width={270} height={15} alt="" />
        </div>
      </section>
      <section className="mt-28 mb-16 md:mt-28 md:mb-20 relative">
        <Image
          src="/star(3).png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute -top-[3%] left-[20%] w-[3%] md:w-[1%] md:top-[5%] md:left-[10%] md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/star.png"
          alt="first star"
          width={20}
          height={20}
          className=" absolute top-[2%] left-[80%] w-[3%] md:w-[2%] md:top-[25%] md:left-[45%] md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/star.png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute top-[60%] left-[25%] w-[3%] md:w-[1%] md:top-[52%] md:left-[83%] md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/star.png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute top-[68%] left-[77%] w-[3%] md:w-[1%] md:top-[99%] md:left-[15%] md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/star(1).png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute top-[100%] left-[60%] w-[3%] md:w-[1%] md:top-[102%] md:left-[70%] md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/Purple-Lens-Flare-PNG.png"
          alt="the globe"
          width={100}
          height={100}
          className=" w-[80%] top-[15%] -left-[10%] absolute md:w-[50%] md:top-[65%] md:left-[78%] md:z-[10] opacity-80"
        />
        <Image
          src="/Purple-Lens-Flare-PNG.png"
          alt="the globe"
          width={100}
          height={100}
          className=" w-[100%] top-[80%] left-[55%] absolute md:w-[50%] md:top-[4%] md:left-[0%] md:z-[10] opacity-60"
        />
        <div className="md:flex justify-center md:justify-end">
          <div className="w-[100%] text-center md:text-left md:w-[45%] ">
            <h1 className="text-2xl md:text-3xl font-bold">
              Prizes and <br />{" "}
              <span className="text-primary-color">Rewards</span>
            </h1>
            <p className="w-[50%] text-[0.8rem] mx-auto mt-1 mb-3 md:mb-0 md:mx-0 md:text-[1.1rem] md:w-[50%] md:mt-5">
              Highlight of the prizes for winner and runner-ups
            </p>
          </div>
        </div>
        <div className=" md:flex md:w-[92%] md:pr-[10%] md:justify-between">
          <div className="p-5 w-[80%] mx-auto md:mx-0 md:w-auto md:p-0">
            <Image
              src="/cup.png"
              alt="cup"
              width={500}
              height={500}
              className=""
            />
          </div>
          <div className="p-5 w-[80%] mx-auto md:mx-0 md:w-auto md:p-0">
            <Image
              src="/rewards.png"
              alt="cup"
              width={500}
              height={500}
              className="md:mt-[23%] "
            />
          </div>
        </div>
      </section>
      <section className="mt-20 mb-16 text-center flex items-center justify-center md:mt-28 md:mb-20 relative">
        <Image
          src="/Purple-Lens-Flare-PNG.png"
          alt="the globe"
          width={100}
          height={100}
          className=" w-[80%] -top-[20%] -left-[30%] absolute md:w-[50%] md:top-[60%] md:left-[78%] md:z-[10] opacity-80"
        />
        <Image
          src="/Purple-Lens-Flare-PNG.png"
          alt="the globe"
          width={100}
          height={100}
          className=" w-[100%] top-[70%] left-[55%] absolute md:w-[50%] md:top-[4%] md:-left-[20%] md:z-[10] opacity-60"
        />
        <Image
          src="/star(3).png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute -top-[3%] left-[20%] w-[3%] md:w-[1%] md:top-[16%] md:left-[17%] md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/star(3).png"
          alt="first star"
          width={20}
          height={20}
          className=" absolute top-[48%] left-[13%] w-[3%] md:w-[1%] md:top-[40%] md:left-[55%] md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/star.png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute top-[85%] left-[85%] w-[3%] md:w-[1%] md:top-[78%] md:left-[55%] md:z-[10] md:opacity-90 blink-animation"
        />
        <div>
          <h1 className="text-2xl mb-2 md:text-3xl font-bold md:mb-3">
            Partners and Sponsors
          </h1>
          <p className="text-[0.8rem] w-[73%] md:text-[1.1rem] md:w-[50%] mx-auto">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as it&apos;s partners and sponsors
          </p>
          <div className=" flex items-center justify-center p-7 md:p-0 md:mt-5">
            <Image
              src="/partners-and-sponsors.png"
              width={1000}
              height={1000}
              alt="partners and sponsors"
            />
          </div>
        </div>
      </section>
      <section className="text-center md:text-left mt-20 mb-16 md:mt-28 md:mb-20 relative">
        <Image
          src="/Purple-Lens-Flare-PNG.png"
          alt="the globe"
          width={100}
          height={100}
          className=" top-[35%] -left-[40%] w-[100%] md:block absolute md:w-[50%] md:top-[55%] md:-left-[28%] md:z-[10] opacity-80"
        />
        <Image
          src="/star(2).png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute -top-[3%] left-[80%] w-[3%] md:w-[1%] md:top-[0%] md:left-[22%] md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/star(3).png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute top-[11%] left-[75%] w-[3%] md:w-[1%] md:top-[13%] md:left-[34%] md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/star.png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute top-[71%] left-[70%] w-[3%] md:w-[1%] md:top-[13%] md:left-[75%] md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/star(3).png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute top-[35%] left-[3%] w-[3%] md:w-[1%] md:top-[66%] md:left-[55%] md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/star.png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute top-[88%] left-[20%] w-[3%] md:w-[1%] md:top-[73%] md:left-[50%] md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/star(2).png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute top-[91%] left-[76%] w-[3%] md:w-[1%] md:top-[79%] md:left-[79%] md:z-[10] md:opacity-90 blink-animation"
        />
        <Image
          src="/star(3).png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute top-[70%] left-[10%] w-[4%] md:w-[1%] md:top-[80%] md:-left-[2%] md:z-[10] md:opacity-90 blink-animation"
        />
        <div className=" md:flex md:justify-between md:ml-[2%] md:mr-[7%]">
          <div className=" md:w-[50%]">
            <h1 className="text-2xl md:text-3xl md:mb-5 font-bold">
              Privacy Policy and <br />{" "}
              <span className="text-primary-color">Terms</span>
            </h1>
            <p className="opacity-70 text-[0.7rem] mt-1 mb-3 md:mt-0 md:mb-4 md:text-[0.9rem]">
              Last updated on September 12, 2023
            </p>
            <p className="opacity-90 text-[0.8rem] w-[85%] mb-5 mx-auto font-semibold md:mx-0 md:text-[1rem] md:mb-7 md:w-[70%]">
              Below are our privacy & policy, which outline a lot of goodies.
              it&apos;s our aim to always take of our participant
            </p>
            <div className="px-5 py-10 text-left w-[85%] mx-auto bg-white bg-opacity-5 border-primary-color border-opacity-40 md:mx-0 md:p-12 md:w-[80%] border-2">
              <p className="text-[0.8rem] leading-7 md:text-[1rem] md:leading-8">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
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
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
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
                    You are licensed to use the item available at any free
                    source sites, for your project development
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Link
                  href="#"
                  className="bg-gradient-to-r from-pink via-primary-color to-secondary-color px-8 py-3 md:px-12 md:py-3 rounded-md"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-[50%]">
            <div className="relative p-14 md:p-0">
              <Image
                src="/Vector.png"
                width={500}
                height={500}
                alt=""
                className="w-[] md:absolute md:w-[] md:top-[5%]"
              />
              <Image
                src="/man-on-padlock.png"
                width={500}
                height={500}
                alt="man on padlock"
                className="w-[] -mt-[90%] -ml-[10%] md:mt-0 md:w-[70%] md:pt-[28%] md:-ml-[5%]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
