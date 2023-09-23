import React from 'react'
import { Slide } from "react-awesome-reveal";

const Timeline = () => {
  return (
    <>
      <section className="border-b border-gray-700 lg:px-24 px-8 relative">
        <div className="flex flex-col items-center justify-center py-12">
          <Slide direction="down" triggerOnce={true}>
            <h2 className="text-2xl mb-3 lg:text-3xl font-bold lg:mb-5">
              Timeline
            </h2>
            <p className=" text-[0.8rem] w-[80%] mx-auto mb-12 lg:mb-0 lg:text-[1rem] lg:w-[70%]">
              Here is the breakdown of the time we anticipate using for the
              upcoming event.
            </p>
          </Slide>
        </div>
        <div className="">
          <div className="flex flex-col lg:grid grid-cols-9 mx-auto lg:p-2 text-blue-50">
            {/* 1*/}
            <div className="flex flex-row-reverse lg:contents">
              <div className=" col-start-1 col-end-5 lg:p-4 lg:my-4 lg:ml-auto">
                <Slide delay={200} triggerOnce={true}>
                  <h3 className="font-semibold lg:text-lg lg:text-right text-left mb-1 text-primary-color">
                    Hackathon Announcement
                  </h3>
                  <p className="leading-tight text-justify lg:text-right text-sm">
                    The getlinked texh hackathon 1.0 formally announced to the
                    general public and teams begin to get ready to register
                  </p>
                  <h3 className="mt-2 lg:hidden font-semibold text-left text-md mb-1 text-primary-color">
                    November 18, 2023
                  </h3>
                </Slide>
              </div>
              {/* stepper  */}
              <div className="col-start-5 col-end-6 lg:mx-auto relative mr-10  ">
                <div className="h-full w-8 flex items-center justify-center">
                  <div className="h-full w-1 bg-primary-color pointer-events-none"></div>
                </div>
                <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-primary-color flex items-center justify-center font-bold  ">
                  1
                </div>
              </div>
              {/* right  */}
              <div className="col-start-6 col-end-10 lg:p-4 lg:my-4 mr-auto lg:flex items-center justify-center hidden">
                <Slide direction="right" triggerOnce={true}>
                  <h3 className=" font-semibold text-lg mb-1 text-primary-color">
                    November 18, 2023
                  </h3>
                </Slide>
              </div>
            </div>

            {/* 2 */}
            <div className="flex lg:contents">
              {/* left */}
              <div className="col-start-1 col-end-5 p-4 my-4 ml-auto lg:flex items-center justify-center hidden">
                <Slide direction="left" delay={300} triggerOnce={true}>
                  <h3 className=" font-semibold text-lg mb-1 text-primary-color">
                    November 18, 2023
                  </h3>
                </Slide>
              </div>
              {/* stepper  */}
              <div className="col-start-5 col-end-6 lg:mx-auto relative mr-10">
                <div className="h-full w-8 flex items-center justify-center">
                  <div className="h-full w-1 bg-primary-color pointer-events-none"></div>
                </div>
                <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-primary-color shadow flex items-center justify-center font-bold  border-main">
                  2
                </div>
              </div>
              {/* right */}
              <div className=" col-start-6 col-end-10 lg:p-4 pt-3 lg:pt-0 my-4 lg:mr-auto shadow-lg">
                <Slide direction="right" triggerOnce={true}>
                  <h3 className="font-semibold lg:text-lg lg:text-left text-left mb-1 text-primary-color">
                    Team Registation begins
                  </h3>
                  <p className="leading-tight text-justify text-sm ">
                    Interested teams can now show their interest in the
                    getlinked tech hackathon 1.0 2023 by proceeding to register
                  </p>
                  <h3 className="mt-2 lg:hidden text-left font-semibold text-md mb-1 text-primary-color">
                    November 18, 2023
                  </h3>
                </Slide>
              </div>
            </div>

            {/* 3*/}
            <div className="flex flex-row-reverse lg:contents lg:text-right">
              <div className=" col-start-1 col-end-5 lg:p-4 my-4 lg:ml-auto">
                <Slide direction="left" delay={400} triggerOnce={true}>
                  <h3 className="font-semibold lg:text-lg text-left lg:text-right mb-1 text-primary-color">
                    Team Registration ends
                  </h3>
                  <p className="leading-tight lg:text-right text-left text-sm ">
                    Interested participants are no longer allowed to register
                  </p>
                  <h3 className="mt-2 lg:hidden font-semibold text-left text-mb mb-1 text-primary-color">
                    November 18, 2023
                  </h3>
                </Slide>
              </div>
              {/* stepper  */}
              <div className="col-start-5 col-end-6 lg:mx-auto relative mr-10  ">
                <div className="h-full w-8 flex items-center justify-center">
                  <div className="h-full w-1 bg-primary-color pointer-events-none"></div>
                </div>
                <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-primary-color shadow flex items-center justify-center font-bold  border-main">
                  3
                </div>
              </div>
              {/* right  */}
              <div className="col-start-6 col-end-10 p-4 my-4 mr-auto lg:flex items-center justify-center hidden">
                <Slide direction="right" triggerOnce={true}>
                  <h3 className=" font-semibold text-lg mb-1 text-primary-color">
                    November 18, 2023
                  </h3>
                </Slide>
              </div>
            </div>

            {/* 4 */}
            <div className="flex lg:contents">
              {/* left */}
              <div className="col-start-1 col-end-5 p-4 my-4 ml-auto hidden lg:flex items-center justify-center">
                <Slide direction="left" triggerOnce={true} delay={500}>
                  <h3 className=" font-semibold text-lg mb-1 text-primary-color">
                    November 18, 2023
                  </h3>
                </Slide>
              </div>
              {/* stepper  */}
              <div className="col-start-5 col-end-6 lg:mx-auto relative mr-10">
                <div className="h-full w-8 flex items-center justify-center">
                  <div className="h-full w-1 bg-primary-color pointer-events-none"></div>
                </div>
                <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-primary-color shadow flex items-center justify-center font-bold  border-main">
                  4
                </div>
              </div>
              {/* right */}
              <div className=" col-start-6 col-end-10 lg:p-4 my-4 lg:mr-auto shadow-lg">
                <Slide direction="right" triggerOnce={true}>
                  <h3 className="font-semibold lg:text-lg mb-1 text-left text-primary-color">
                    Announcement of the accepted teams and ideas
                  </h3>
                  <p className="leading-tight text-left text-sm ">
                    All teams whom idea has been accepted into getlinked tech
                    hackathon 1.0 2023 are formally announced
                  </p>
                  <h3 className="mt-2 lg:hidden font-semibold text-md text-left mb-1 text-primary-color">
                    November 18, 2023
                  </h3>
                </Slide>
              </div>
            </div>

            {/* 5*/}
            <div className="flex flex-row-reverse lg:contents">
              <div className=" col-start-1 col-end-5 lg:p-4 my-4 ml-auto">
                <Slide direction="left" triggerOnce={true} delay={600}>
                  <h3 className="font-semibold lg:text-lg mb-1 lg:text-right text-left text-primary-color">
                    Getlinked Hackathon 1.0 Officially Begins
                  </h3>
                  <p className="leading-tight lg:text-right text-justify text-sm ">
                    Accepted teams can now proceed to build their ground
                    breaking skill driven solutions
                  </p>
                  <h3 className="mt-2 lg:hidden font-semibold text-md text-left mb-1 text-primary-color">
                    November 18, 2023
                  </h3>
                </Slide>
              </div>
              {/* stepper  */}
              <div className="col-start-5 col-end-6 lg:mx-auto relative mr-10  ">
                <div className="h-full w-8 flex items-center justify-center">
                  <div className="h-full w-1 bg-primary-color pointer-events-none"></div>
                </div>
                <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-primary-color shadow flex items-center justify-center font-bold  border-main">
                  5
                </div>
              </div>
              {/* right  */}
              <div className="col-start-6 col-end-10 p-4 my-4 mr-auto hidden lg:flex items-center justify-center">
                <Slide direction="right" triggerOnce={true}>
                  <h3 className=" font-semibold text-lg mb-1 text-primary-color">
                    November 18, 2023
                  </h3>
                </Slide>
              </div>
            </div>

            {/* 6 */}
            <div className="flex lg:contents">
              {/* left */}
              <div className="col-start-1 col-end-5 p-4 my-4 ml-auto lg:flex items-center justify-center hidden">
                <Slide direction="left" triggerOnce={true} delay={700}>
                  <h3 className=" font-semibold text-lg mb-1 text-primary-color">
                    November 18, 2023
                  </h3>
                </Slide>
              </div>
              {/* stepper  */}
              <div className="col-start-5 col-end-6 lg:mx-auto relative mr-10">
                <div className="h-20 w-8 flex items-center justify-center">
                  <div className="h-full w-1 bg-primary-color pointer-events-none"></div>
                </div>
                <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-primary-color shadow flex items-center justify-center font-bold  border-main">
                  6
                </div>
              </div>
              {/* right */}
              <div className=" col-start-6 col-end-10 lg:p-4 my-4 mr-auto shadow-lg">
                <Slide triggerOnce={true} direction="right">
                  <h3 className="font-semibold lg:text-lg text-left mb-1 text-primary-color">
                    Demo Day
                  </h3>
                  <p className="leading-tight text-left text-sm ">
                    Teams get the opportunity to pitch their projects to judges.
                    The winner of the hackathon will also be announced this day
                  </p>
                  <h3 className="mt-2 lg:hidden font-semibold text-md text-left mb-1 text-primary-color">
                    November 18, 2023
                  </h3>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Timeline