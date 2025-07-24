"use client";

import { useState } from "react";
import Image from "next/image";
import GetInTouch from "@/components/features/GetInTouch";
import Testimonials from "@/components/features/Testimonials";
import AboutNumerics from "@/components/ui/AboutNumerics";
import Clients from "@/components/features/Clients";
import About from "@/components/features/About";
import FaqItem from "@/components/features/FaqItem";

const Page = () => {
  const projects = [
    // type 1: all
    // type 2: website
    // type 3: application
    // type 4: software
    // type 5: ui/ux
    // type 6: designing
    // type 7: Ads
    // type 8: marketing
    {
      id: 1,
      type: 2,
      title: "Loading Walla",
      category: "Website Development",
      img: "/Project1.svg",
    },
    {
      id: 2,
      type: 3,
      title: "Loading Walla",
      category: "Application Development",
      img: "/Project1.svg",
    },
    {
      id: 3,
      type: 2,
      title: "Utility Choice",
      category: "Website Development",
      img: "/Project1.svg",
    },
    {
      id: 4,
      type: 4,
      title: "Scale CRMS",
      category: "Software Development",
      img: "/Project1.svg",
    },
    {
      id: 5,
      type: 4,
      title: "Employee Track CRMS",
      category: "Software Development",
      img: "/Project1.svg",
    },
    {
      id: 6,
      type: 4,
      title: "ZFour HRMS",
      category: "Software Development",
      img: "/Project1.svg",
    },
    {
      id: 7,
      type: 2,
      title: "Britannia Nutrition",
      category: "Website Development",
      img: "/Project1.svg",
    },
    {
      id: 8,
      type: 2,
      title: "Power Market",
      category: "Website Development",
      img: "/Project1.svg",
    },
    {
      id: 9,
      type: 5,
      title: "Thought Power",
      category: "UI/UX",
      img: "/Project1.svg",
    },
    {
      id: 10,
      type: 6,
      title: "Thought Power",
      category: "Logo Designing",
      img: "/Project1.svg",
    },
    {
      id: 11,
      type: 6,
      title: "Prashidhi",
      category: "Logo Designing",
      img: "/Project1.svg",
    },
    {
      id: 12,
      type: 2,
      title: "Connecting VoIP",
      category: "Website Development",
      img: "/Project1.svg",
    },
    {
      id: 13,
      type: 2,
      title: "Dsmart Services",
      category: "Website Development",
      img: "/Project1.svg",
    },
    {
      id: 14,
      type: 2,
      title: "Select My College",
      category: "Website Development",
      img: "/Project1.svg",
    },
    {
      id: 15,
      type: 6,
      title: "Select My College",
      category: "Logo Designing",
      img: "/Project1.svg",
    },
    {
      id: 16,
      type: 7,
      title: "Utility Choice",
      category: "Ads",
      img: "/Project1.svg",
    },
    {
      id: 17,
      type: 7,
      title: "Power Market",
      category: "Ads",
      img: "/Project1.svg",
    },
    {
      id: 18,
      type: 7,
      title: "ZFour",
      category: "Ads",
      img: "/Project1.svg",
    },
    {
      id: 19,
      type: 7,
      title: "Power Market",
      category: "Ads",
      img: "/Project1.svg",
    },
    {
      id: 20,
      type: 6,
      title: "Select My College",
      category: "Logo Designing",
      img: "/Project1.svg",
    },
    {
      id: 21,
      type: 6,
      title: "Loading Walla",
      category: "Logo Designing",
      img: "/Project1.svg",
    },
    {
      id: 22,
      type: 8,
      title: "Social post designing",
      category: "Marketing",
      img: "/Project1.svg",
    },
  ];

  const list = [
    { id: 1, type: "All" },
    { id: 2, type: "Website" },
    { id: 3, type: "Application" },
    { id: 4, type: "UI/UX" },
    { id: 5, type: "Designing" },
    { id: 6, type: "Marketing" },
  ];

  const [type, setType] = useState(1);

  return (
    <div className="w-full h-full flex flex-col items-center">
      {/* project section starts */}
      <div className="bg-[#212121] w-[90%] sm:w-[80%] h-full mt-32 flex flex-col items-center rounded-4xl sm:p-8 p-4">
        <h1 className="font-geometric font-bold text-white text-xl sm:text-5xl sm:mt-12 mt-4">
          Works & Projects
        </h1>
        <p className="sm:w-[70%] w-full font-avenir-medium  text-white text-sm sm:text-2xl text-center mt-4 sm:mt-12">
          Check out some of my design projects, meticulously crafted with love
          and dedication, each one reflecting the passion and soul I poured into
          every detail.
        </p>

        {/* all types */}
        <div className="flex w-full  mt-12 sm:mt-24 pb-2 sm:pb-4 overflow-y-scroll">
          {list.map((item) => (
            <button
              key={item.id}
              className="ml-4"
              onClick={() => setType(item.id)}
            >
              <span
                className={`font-avenir-demi sm:text-xl text-xs cursor-pointer duration-300 ${
                  type === item.id ? "text-[#FF4D4D] underline" : "text-white"
                } `}
              >
                {item.type}
              </span>
            </button>
          ))}
        </div>
        {/* main body for projects */}
        <div className="w-full mt-4 sm:mt-12 grid sm:grid-cols-3 grid-cols-1 gap-8 place-items-center">
          {type === 1
            ? projects.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[282] min-h-[241] w-full h-auto flex flex-col rounded-3xl overflow-clip"
                >
                  {/* image */}
                  <div className="w-full h-full min-w-full min-h-[60%] bg-white">
                    <Image
                      src={item.img}
                      alt={item.title + "image"}
                      width="0"
                      height="0"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="w-full flex flex-col bg-black p-2 sm:p-4">
                    <h4 className="text-white font-avenir-demi text-sm sm:text-xl">
                      {item.title}
                    </h4>
                    <p className="text-white opacity-50 font-avenir-light sm:text-md text-xs">
                      {item.category}
                    </p>
                  </div>
                </div>
              ))
            : projects
                .filter((item) => item.type === type)
                .map((item) => (
                  <div
                    key={item.id}
                    className="min-w-[282] min-h-[241] w-full h-auto flex flex-col rounded-3xl overflow-clip"
                  >
                    {/* image */}
                    <Image
                      src={item.img}
                      alt=""
                      width="0"
                      height="0"
                      className="w-full h-full min-w-full min-h-[60%] bg-white"
                    />

                    <div className="w-full flex flex-col bg-black p-2 sm:p-4">
                      <h4 className="text-white font-avenir-demi text-sm sm:text-xl">
                        {item.title}
                      </h4>
                      <p className="text-white opacity-50 font-avenir-light sm:text-md text-xs">
                        {item.category}
                      </p>
                    </div>
                  </div>
                ))}
        </div>
      </div>
      {/* project seciton ends */}

      {/* get in touch section */}
      <GetInTouch />

      {/* Our Trusted Clients */}
      <Clients />

      {/* Testimonial section */}
      <div className="w-[90%] md:w-[80%] mt-12 md:mt-24">
        <h4 className="font-avenir-20 opacity-60 text-white text-xs md:text-xl text-center">
          Testimonials
        </h4>
        <h1 className="font-geometric text-xl md:text-4xl text-white text-center my-4">
          100+ satisfied clients worldwide
        </h1>
        <Testimonials speed="normal" direction="right" testimonials={[]} />
        <Testimonials speed="normal" direction="left" testimonials={[]} />
      </div>

      {/* About Numerics */}
      <AboutNumerics />

      <div className="mt-12 md:mt-24" />
      {/* About Section */}
      <About />

      {/* Faq Section */}
      <div className="w-[90%] md:w-[80%] mt-12 md:mt-24">
        <h1 className="font-geometric text-lg md:text-4xl text-white text-center my-4 ">
          Frequently Asked Questions
        </h1>
        <div className=" w-[80%] md:w-[60%] border-b-1 border-white mx-auto mb-8" />
        <FaqItem
          ques="What sets Pantheon Digital apart from other digital agencies?"
          ans="Pantheon Digital builds digital ecosystems rather than just campaigns. Not only for short-term outcomes but also for long-term corporate effect, our holistic strategy integrates marketing, technology, and design."
        />
        <FaqItem
          ques="Do you run Meta Ads and Google PPC campaigns both?"
          ans="Pantheon Digital builds digital ecosystems rather than just campaigns. Not only for short-term outcomes but also for long-term corporate effect, our holistic strategy integrates marketing, technology, and design."
        />
        <FaqItem
          ques="How does your SMO and SEO approach help my company?"
          ans="Pantheon Digital builds digital ecosystems rather than just campaigns. Not only for short-term outcomes but also for long-term corporate effect, our holistic strategy integrates marketing, technology, and design."
        />
        <FaqItem
          ques="Will Pantheon Digital enable me to create and keep my app or website?"
          ans="Pantheon Digital builds digital ecosystems rather than just campaigns. Not only for short-term outcomes but also for long-term corporate effect, our holistic strategy integrates marketing, technology, and design."
        />
      </div>
    </div>
  );
};

export default Page;
