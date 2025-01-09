"use client";
import React, { useRef } from "react";
import localFont from "next/font/local";

import gsap from "gsap";
import { Italiana } from "next/font/google";

const primary = Italiana({
  weight: "400",
  subsets: ["latin"],
});

const secondary = localFont({
  src: "./../app/fonts/ppneuemontreal-thin.otf",
});

function TargetAudience() {
  const hiddenTextRef = useRef<HTMLSpanElement | null>(null);
  const questionMarkRef = useRef<HTMLSpanElement | null>(null);
  const hyphenRef = useRef<HTMLSpanElement | null>(null);
  const forWhomRef = useRef<HTMLHeadingElement | null>(null);

  const handleClick = () => {
    const timeline = gsap.timeline();

    // Animate the question mark, hyphen, and "For Whom" text
    timeline
      .to(questionMarkRef.current, {
        opacity: 0,
        filter: "blur(10px)",
        duration: 1,
      })
      .to(forWhomRef.current, { color: "#991b1b" })
      .to(
        hyphenRef.current,
        {
          opacity: 1,
          duration: 1,
        },
        "-=0.8"
      )

      .to(hiddenTextRef.current, {
        opacity: 1,
        duration: 1.5,
      })
      .to(
        ".different",
        {
          opacity: 1,
          duration: 1.5,
        },
        "<"
      );
  };

  return (
    <div className="h-screen w-[90vw] relative flex justify-center flex-col items-center md:px-40 ">
      {/* "For Whom" Text */}
      <div
        className="flex justify-center items-center hover:text-red-800 transition-all duration-200 cursor-pointer"
        ref={forWhomRef}
      >
        <h1
          className={`text-6xl md:text-7xl ${primary.className}  md:pl-8`}
          onClick={handleClick}
        >
          For Whom{" "}
        </h1>
        <h1
          className={`text-6xl md:text-7xl ${primary.className} relative pl-2`}
        >
          <span ref={questionMarkRef} className="transition-opacity text-7xl">
            ?
          </span>
          <span
            ref={hyphenRef}
            className="absolute left-0  opacity-0 transition-opacity pl-2 md:pl-4"
          >
            -
          </span>
        </h1>
      </div>

      {/* Hidden Text */}
      <span
        ref={hiddenTextRef}
        className={`text-2xl  ${secondary.className} opacity-0 pr-2 text-center md:text-left `}
      >
        Different Isn’t Daring, It’s Essential.
      </span>
      <h1
        className={`absolute -bottom-10 right-0 text-8xl md:text-[10rem] ${secondary.className} opacity-0 transition-opacity different`}
      >
        <span className=" opacity-20 "> Different</span>
        <span className="text-red-800">.</span>
      </h1>
    </div>
  );
}

export default TargetAudience;
