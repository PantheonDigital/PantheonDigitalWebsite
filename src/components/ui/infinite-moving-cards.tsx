"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <>
      <div></div>
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              className="relative w-[267px] h-[230px] md:h-auto max-w-full shrink-0 rounded-2xl border border-b-0 px-4 py-3 md:px-8 md:py-6 md:w-[450px] shadow-[0.5px_0.5px_1px_rgba(0,0,0,0.6)] shadow-[#006FC6] border-zinc-700 bg-[linear-gradient(180deg,#27272a,#18181b)] flex gap-4"
              key={item.name}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>

                {/* for profile picture, name & title. */}
                <div className="flex items-center">
                  {/* for image */}
                  <Image
                    src="/Testimonial1.svg"
                    alt=""
                    width="0"
                    height="0"
                    className="w-[40px] h-[40px] md:w-[57px] md:h-[57px]"
                  />
                  {/* title and name */}
                  <div className="ml-2 md:ml-4 flex flex-col">
                    <span className="font-avenir-bold font-bold leading-[1.6] text-md sm:text-base text-white">
                      {item.name}
                    </span>
                    <span className="sm:text-lg text-xs leading-[1.6] font-avenir-medium font-medium text-white">
                      {item.title}
                    </span>
                  </div>
                </div>

                <span className="relative top-2 z-20 text-xs sm:text-sm leading-[1.6] font-avenir-medium text-white ">
                  {item.quote}
                </span>

                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1"></span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
