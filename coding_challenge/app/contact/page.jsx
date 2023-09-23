"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <main className="">
      <div className="lg:flex gap-[5%] lg:pt-10 lg:mx-[11%] relative">
        <Image
          src="/Purple-Lens-Flare-PNG.png"
          alt="the globe"
          width={100}
          height={100}
          className=" top-[10%] -left-[40%] w-[90%] lg:block absolute lg:w-[42%] lg:top-[47%] lg:left-[72%] lg:z-[10] opacity-80 blink-later-animation"
        />
        <Image
          src="/Purple-Lens-Flare-PNG.png"
          alt="the globe"
          width={100}
          height={100}
          className=" top-[10%] -left-[40%] w-[90%] lg:block absolute lg:w-[42%] lg:top-[4%] lg:-left-[20%] lg:z-[10] opacity-80 blink-animation"
        />
        <Image
          src="/star(4).png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute top-[10%] left-[49%] w-[3%] lg:w-[1%] lg:top-[6%] lg:left-[4%] lg:z-[10] lg:opacity-90 blink-animation"
        />{" "}
        <Image
          src="/star(4).png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute top-[67%] left-[92%] w-[3%] lg:w-[1%] lg:top-[65%] lg:left-[44%] lg:z-[10] lg:opacity-90 blink-animation"
        />{" "}
        <Image
          src="/star(4).png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute top-[76%] left-[8%] w-[3%] lg:w-[1%] lg:top-[2%] lg:left-[90%] lg:z-[10] lg:opacity-90 blink-animation"
        />{" "}
        <Image
          src="/star.png"
          alt="third star"
          width={20}
          height={20}
          className=" absolute top-[20%] left-[80%] w-[3%] lg:w-[1%] lg:top-[85%] lg:left-[95%] lg:z-[10] lg:opacity-90 blink-animation"
        />
        <div className="lg:w-[40%] hidden lg:block">
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <h2 className="lg:text-3xl text-primary-color font-semibold lg:mt-12 lg:mb-5">
              Get in Touch
            </h2>
          </Fade>
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <p className="lg:text-[1.1rem] lg:mb-3">
              Contact <br /> information
            </p>
          </Fade>
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <p className="lg:mb-3">
              27, Alara Street <br /> Yaba 100012 <br /> Lagos State
            </p>
          </Fade>
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <p className="lg:mb-3">Call us: 07067981819</p>
          </Fade>
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <p className="lg:mb-3">
              We are open from Monday to Friday <br /> 08:00am - 35:00pm
            </p>
          </Fade>
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <p className="text-primary-color lg:text-[1.1rem] lg:mb-5">
              Share on
            </p>
          </Fade>
          <Fade direction="up" duration={2000} triggerOnce={true}>
            <div className="flex lg:gap-3 lg:items-center ">
              <Link href="#" className="cursor-not-allowed">
                <Image
                  src="/instagram.png"
                  alt="insta icon"
                  width={20}
                  height={30}
                  className=" hover:opacity-50"
                />
              </Link>
              <Link href="https://twitter.com/getLinkedai" target="_blank">
                <Image
                  src="/twitter.png"
                  alt="twitter icon"
                  width={20}
                  height={30}
                  className=" hover:opacity-50"
                />
              </Link>
              <Link href="#" className="cursor-not-allowed">
                <Image
                  src="/facebook.png"
                  alt="facebook icon"
                  width={11}
                  height={10}
                  className=" hover:opacity-50"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/getlinked-ai/"
                target="_blank"
              >
                <Image
                  src="/linkedin.png"
                  alt="linkedin icon"
                  width={25}
                  height={30}
                  className=" hover:opacity-50"
                />
              </Link>
            </div>
          </Fade>
        </div>
        <div className="py-7 px-10 shadow-lg lg:bg-white lg:bg-opacity-5 lg:border-primary-color lg:border-opacity-40 lg:w-[48%] lg:px-20 lg:py-9">
          <ContactForm />
          <div className="lg:hidden text-center mt-5">
            <Fade direction="up" duration={2000} triggerOnce={true}>
              <p className="text-primary-color lg:text-[1.1rem] lg:mb-5">
                Share on
              </p>
            </Fade>
            <Fade direction="up" duration={2000} triggerOnce={true}>
              <div className="flex gap-3 justify-center items-center mt-3 ">
                <Link href="#">
                  <Image
                    src="/instagram.png"
                    alt="insta icon"
                    width={20}
                    height={30}
                    className=" hover:opacity-50"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/twitter.png"
                    alt="twitter icon"
                    width={20}
                    height={30}
                    className=" hover:opacity-50"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/facebook.png"
                    alt="facebook icon"
                    width={11}
                    height={10}
                    className=" hover:opacity-50"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/linkedin.png"
                    alt="linkedin icon"
                    width={25}
                    height={30}
                    className=" hover:opacity-50"
                  />
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
