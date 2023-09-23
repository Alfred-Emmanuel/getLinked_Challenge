// import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-5 lg:px-36 relative bg-[#100B20]">
      <Image
        src="/star.png"
        alt="third star"
        width={5}
        height={5}
        className=" absolute top-[14%] left-[6%] w-[4%] lg:w-[1%] lg:top-[12%] lg:left-[6%] lg:z-[10] lg:opacity-90 blink-animation"
      />
      <Image
        src="/star(3).png"
        alt="third star"
        width={20}
        height={20}
        className=" absolute top-[92%] left-[23%] w-[3%] lg:w-[1%] lg:top-[80%] lg:left-[45%] lg:z-[10] lg:opacity-90 blink-animation"
      />
      <Image
        src="/star(2).png"
        alt="third star"
        width={20}
        height={20}
        className=" absolute top-[50%] left-[50%] w-[4%] lg:w-[1%] lg:top-[17%] lg:left-[70%] lg:z-[10] lg:opacity-90 blink-animation"
      />
      <Image
        src="/star.png"
        alt="third star"
        width={20}
        height={20}
        className=" absolute top-[79%] left-[62%] w-[3%] lg:w-[1%] lg:top-[62%] lg:left-[93%] lg:z-[10] lg:opacity-90 blink-animation"
      />
      <div className="block px-12 pb-5 lg:px-0 lg:pb-0 lg:flex lg:justify-between mx-auto lg:mb-12 ">
        <div className="lg:w-[30%] mb-7 lg:mb-0">
          <h1 className=" text-2xl mb-5 md:text-3xl md:mb-5 font-bold">
            get<span className="text-primary-color">linked</span>
          </h1>
          <p className="text-[0.9rem] leading-6 w-[80%] mb-3 md:w-[100%] md:mb-10 md:leading-7 md:text-[0.9rem] font-medium">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <div className="flex gap-4 text-[0.9rem] md:text-[1rem]">
            <p className="border-r-4 border-pink pr-4">Terms of Use</p>
            <p className="">Privacy Policy</p>
          </div>
        </div>
        <div>
          <h1 className="text-[1.1rem] mb-3 text-primary-color md:text-[1.2rem] md:font-semibold md:mb-4">
            Useful Links
          </h1>
          <div className="">
            <div className="mb-2 ">
              <Link href="/" className="hovered-link">
                Overview
              </Link>
            </div>
            <div className="mb-2">
              <Link href="#timeline" className="hovered-link">
                Timeline
              </Link>
            </div>
            <div className="mb-2">
              <Link href="#faqs" className="hovered-link">
                FAQs
              </Link>
            </div>
            <div className="mb-10">
              <Link href="/register" className="hovered-link">
                Register
              </Link>
            </div>
          </div>
          <div className="flex items-center mb-10 lg:mb-0 lg:items-start gap-4">
            <h3 className="text-[1.1rem] text-primary-color md:text-[1.2rem] md:font-semibold ">
              Follow Us:
            </h3>
            <div className="flex items-center gap-5 ">
              <Link href="#" className="cursor-not-allowed">
                <Image
                  src="/instagram.png"
                  alt="insta icon"
                  width={20}
                  height={30}
                  className=" hover:opacity-50 "
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
          </div>
        </div>
        <div>
          <h1 className="text-primary-color text-[1.1rem] md:text-[1.2rem] font-semibold mb-2 md:mb-4">
            Contact Us
          </h1>
          <div className="flex items-center gap-3 md:mb-4">
            <Image
              src="/telephone.png"
              alt="telephone"
              width={0}
              height={0}
              className="w-[5%] md:w-[3%] md:h-[2%] lg:w-[8%] lg:h-[5%]"
            />
            <Link href="tel:+23467981819">+234 679 81819</Link>
          </div>
          <div className="flex items-center gap-3 mt-2 md:mt-0">
            <Image
              src="/location.png"
              alt="telephone"
              width={0}
              height={0}
              className="w-[5%] -mt-[16%] md:w-[3%] md:h-[2%] md:-mt-[5%] lg:w-[8%] lg:h-[1%] lg:-mt-[30%]"
            />
            <p>
              27, Alara Street <br /> Yaba 100012 <br /> Lagos State
            </p>
          </div>
        </div>
      </div>
      <h5 className="mt-4 lg:mt-0 text-center text-[0.8rem] md:text-[1.1rem]">
        All rights reserved. &copy; getlinked Ltd.
      </h5>
    </footer>
  );
};

export default Footer;
