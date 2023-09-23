"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "Can i work on a project if i started before the hackathon?",
      answer: "Answer 1",
    },
    {
      question: "What happens if i need help during the hackathon?",
      answer: "Answer 2",
    },
    {
      question: "What happens if i don't have an idea for a project?",
      answer: "Answer 3",
    },
    {
      question: "Can i join a team or do i have to come with one?",
      answer: "Answer 3",
    },
    {
      question: "What happens after the hackathon ends?",
      answer: "Answer 3",
    },
    {
      question: "What do i need to know before the hackathon starts?",
      answer: "Answer 3",
    },
  ];

  return (
    <div className="mx-auto lg:mx-0 mt-8 lg:mt-12">
      {faqs.map((faq, index) => (
        <div
          className="border-b border-primary-color pb-3 mb-3 w-[85%] mx-auto lg:mx-0 lg:w-[80%]"
          key={index}
        >
          <Fade duration={2000} direction="up" triggerOnce={true}>
            <div className="flex justify-between">
              <h3 className="text-[0.7rem] lg:font-semibold lg:text-[1rem] mb-2">
                {faq.question}
              </h3>
              <button className="toggle-btn" onClick={() => toggleFAQ(index)}>
                <Image
                  src="/+.png"
                  width={15}
                  height={15}
                  alt="plus"
                  className={`transform ${
                    activeIndex === index ? "rotate-45" : ""
                  } transition-transform`}
                />
              </button>
            </div>
          </Fade>
          <div
            className={`text-[0.7rem] lg:text-[1rem] text-left ${
              activeIndex === index
                ? "max-h-[1000px] opacity-100 transition-max-height ease-in duration-300 overflow-y-auto"
                : "max-h-0 opacity-0 transition-max-height ease-out duration-300 overflow-y-hidden"
            }`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
