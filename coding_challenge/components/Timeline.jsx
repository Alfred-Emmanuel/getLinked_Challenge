// import React from 'react'
// import Image from 'next/image';


// const Timeline = () => {
//   return (
//     <>
//       {/* timeline  */}
//       <section className="border-b border-gray-700 md:px-24 px-8 relative">
//         <Image
//           src="/star(2).png"
//           alt="star"
//           width={10}
//           height={10}
//           className="absolute md:top-[10%] md:left-[10%] w-4 animate-pulse"
//         />
//         <Image
//           src="/star(2).png"
//           alt="star"
//           width={10}
//           height={10}
//           className="absolute md:bottom-[10%] md:left-[20%] bottom-[47%] right-[10%] w-4 animate-pulse"
//         />

//         <div className="flex flex-col items-center justify-center py-12">
//           <Slide direction="down">
//             <h2 className="font-clash-display font-bold text-2xl">Timeline</h2>
//             <p className="text-center max-w-md text-sm">
//               Here is the breakdown of the time we anticipate using for the
//               upcoming event.
//             </p>
//           </Slide>
//         </div>

//         <div className="">
//           <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
//             {/* 1*/}
//             <div className="flex flex-row-reverse md:contents">
//               <div className=" col-start-1 col-end-5 p-4 my-4 ml-auto">
//                 <Slide delay={200}>
//                   <h3 className="font-semibold md:text-lg mb-1 text-secondary">
//                     Hackathon Announcement
//                   </h3>
//                   <p className="leading-tight text-justify font-montserrat text-sm">
//                     The getlinked texh hackathon 1.0 formally announced to the
//                     general public and teams begin to get ready to register
//                   </p>
//                   <h3 className="mt-2 md:hidden font-semibold text-md mb-1 text-secondary">
//                     September 18, 2023
//                   </h3>
//                 </Slide>
//               </div>
//               {/* stepper  */}
//               <div className="col-start-5 col-end-6 md:mx-auto relative mr-10  ">
//                 <div className="h-full w-8 flex items-center justify-center">
//                   <div className="h-full w-1 bg-secondary pointer-events-none"></div>
//                 </div>
//                 <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-lgrad to-grad shadow flex items-center justify-center font-bold border-4 border-main">
//                   1
//                 </div>
//               </div>
//               {/* right  */}
//               <div className="col-start-6 col-end-10 p-4 my-4 mr-auto md:flex items-center justify-center hidden">
//                 <Slide direction="right">
//                   <h3 className=" font-semibold text-lg mb-1 text-secondary">
//                     September 18, 2023
//                   </h3>
//                 </Slide>
//               </div>
//             </div>

//             {/* 2 */}
//             <div className="flex md:contents">
//               {/* left */}
//               <div className="col-start-1 col-end-5 p-4 my-4 ml-auto md:flex items-center justify-center hidden">
//                 <Slide direction="left" delay={300}>
//                   <h3 className=" font-semibold text-lg mb-1 text-secondary">
//                     September 18, 2023
//                   </h3>
//                 </Slide>
//               </div>
//               {/* stepper  */}
//               <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
//                 <div className="h-full w-8 flex items-center justify-center">
//                   <div className="h-full w-1 bg-secondary pointer-events-none"></div>
//                 </div>
//                 <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-lgrad to-grad shadow flex items-center justify-center font-bold border-4 border-main">
//                   2
//                 </div>
//               </div>
//               {/* right */}
//               <div className=" col-start-6 col-end-10 p-4 my-4 mr-auto shadow-md">
//                 <Slide direction="right">
//                   <h3 className="font-semibold md:text-lg mb-1 text-secondary">
//                     Team Registation begins
//                   </h3>
//                   <p className="leading-tight text-justify text-sm font-montserrat">
//                     Interested teams can now show their interest in the
//                     getlinked tech hackathon 1.0 2023 by proceeding to register
//                   </p>
//                   <h3 className="mt-2 md:hidden font-semibold text-md mb-1 text-secondary">
//                     September 18, 2023
//                   </h3>
//                 </Slide>
//               </div>
//             </div>

//             {/* 3*/}
//             <div className="flex flex-row-reverse md:contents">
//               <div className=" col-start-1 col-end-5 p-4 my-4 ml-auto">
//                 <Slide direction="left" delay={400}>
//                   <h3 className="font-semibold md:text-lg mb-1 text-secondary">
//                     Team Registration ends
//                   </h3>
//                   <p className="leading-tight md:text-right text-sm font-montserrat">
//                     Interested participants are no longer allowed to register
//                   </p>
//                   <h3 className="mt-2 md:hidden font-semibold text-md mb-1 text-secondary">
//                     September 18, 2023
//                   </h3>
//                 </Slide>
//               </div>
//               {/* stepper  */}
//               <div className="col-start-5 col-end-6 md:mx-auto relative mr-10  ">
//                 <div className="h-full w-8 flex items-center justify-center">
//                   <div className="h-full w-1 bg-secondary pointer-events-none"></div>
//                 </div>
//                 <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-lgrad to-grad shadow flex items-center justify-center font-bold border-4 border-main">
//                   3
//                 </div>
//               </div>
//               {/* right  */}
//               <div className="col-start-6 col-end-10 p-4 my-4 mr-auto md:flex items-center justify-center hidden">
//                 <Slide direction="right">
//                   <h3 className=" font-semibold text-lg mb-1 text-secondary">
//                     September 18, 2023
//                   </h3>
//                 </Slide>
//               </div>
//             </div>

//             {/* 4 */}
//             <div className="flex md:contents">
//               {/* left */}
//               <div className="col-start-1 col-end-5 p-4 my-4 ml-auto hidden md:flex items-center justify-center">
//                 <Slide direction="left" delay={500}>
//                   <h3 className=" font-semibold text-lg mb-1 text-secondary">
//                     September 18, 2023
//                   </h3>
//                 </Slide>
//               </div>
//               {/* stepper  */}
//               <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
//                 <div className="h-full w-8 flex items-center justify-center">
//                   <div className="h-full w-1 bg-secondary pointer-events-none"></div>
//                 </div>
//                 <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-lgrad to-grad shadow flex items-center justify-center font-bold border-4 border-main">
//                   4
//                 </div>
//               </div>
//               {/* right */}
//               <div className=" col-start-6 col-end-10 p-4 my-4 mr-auto shadow-md">
//                 <Slide direction="right">
//                   <h3 className="font-semibold md:text-lg mb-1 text-secondary">
//                     Announcement of the accepted teams and ideas
//                   </h3>
//                   <p className="leading-tight text-justify text-sm font-montserrat">
//                     All teams whom idea has been accepted into getlinked tech
//                     hackathon 1.0 2023 are formally announced
//                   </p>
//                   <h3 className="mt-2 md:hidden font-semibold text-md mb-1 text-secondary">
//                     September 18, 2023
//                   </h3>
//                 </Slide>
//               </div>
//             </div>

//             {/* 5*/}
//             <div className="flex flex-row-reverse md:contents">
//               <div className=" col-start-1 col-end-5 p-4 my-4 ml-auto">
//                 <Slide direction="left" delay={600}>
//                   <h3 className="font-semibold md:text-lg mb-1 text-secondary">
//                     Getlinked Hackathon 1.0 Officially Begins
//                   </h3>
//                   <p className="leading-tight text-justify text-sm font-montserrat">
//                     Accepted teams can now proceed to build their ground
//                     breaking skill driven solutions
//                   </p>
//                   <h3 className="mt-2 md:hidden font-semibold text-md mb-1 text-secondary">
//                     September 18, 2023
//                   </h3>
//                 </Slide>
//               </div>
//               {/* stepper  */}
//               <div className="col-start-5 col-end-6 md:mx-auto relative mr-10  ">
//                 <div className="h-full w-8 flex items-center justify-center">
//                   <div className="h-full w-1 bg-secondary pointer-events-none"></div>
//                 </div>
//                 <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-lgrad to-grad shadow flex items-center justify-center font-bold border-4 border-main">
//                   5
//                 </div>
//               </div>
//               {/* right  */}
//               <div className="col-start-6 col-end-10 p-4 my-4 mr-auto hidden md:flex items-center justify-center">
//                 <Slide direction="right">
//                   <h3 className=" font-semibold text-lg mb-1 text-secondary">
//                     September 18, 2023
//                   </h3>
//                 </Slide>
//               </div>
//             </div>

//             {/* 6 */}
//             <div className="flex md:contents">
//               {/* left */}
//               <div className="col-start-1 col-end-5 p-4 my-4 ml-auto md:flex items-center justify-center hidden">
//                 <Slide direction="left" delay={700}>
//                   <h3 className=" font-semibold text-lg mb-1 text-secondary">
//                     September 18, 2023
//                   </h3>
//                 </Slide>
//               </div>
//               {/* stepper  */}
//               <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
//                 <div className="h-20 w-8 flex items-center justify-center">
//                   <div className="h-full w-1 bg-secondary pointer-events-none"></div>
//                 </div>
//                 <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-lgrad to-grad shadow flex items-center justify-center font-bold border-4 border-main">
//                   6
//                 </div>
//               </div>
//               {/* right */}
//               <div className=" col-start-6 col-end-10 p-4 my-4 mr-auto shadow-md">
//                 <Slide direction="right">
//                   <h3 className="font-semibold md:text-lg mb-1 text-secondary">
//                     Demo DAy
//                   </h3>
//                   <p className="leading-tight text-justify text-sm font-montserrat">
//                     Teams get the opportunity to pitch their projects to judges.
//                     The winner of the hackathon will also be announced this day
//                   </p>
//                   <h3 className="mt-2 md:hidden font-semibold text-md mb-1 text-secondary">
//                     September 18, 2023
//                   </h3>
//                 </Slide>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Timeline