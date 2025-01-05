"use client";
import React, { useRef } from "react";
import localFont from "next/font/local";

import gsap from "gsap";

const primary = localFont({
  src: "./../app/fonts/vogue.ttf",
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
    <div className="h-screen w-[90vw] relative flex justify-center flex-col items-center px-40 border-y">
      {/* "For Whom" Text */}
      <h1
        ref={forWhomRef}
        className={`text-7xl ${primary.className} hover:text-red-800 transition-all duration-200 cursor-pointer`}
        onClick={handleClick}
      >
        For Whom{" "}
        <span className="relative">
          <span ref={questionMarkRef} className="transition-opacity">
            ?
          </span>
          <span
            ref={hyphenRef}
            className="absolute left-0 top-2 opacity-0 transition-opacity"
          >
            -
          </span>
        </span>
      </h1>

      {/* Hidden Text */}
      <span
        ref={hiddenTextRef}
        className={`text-4xl pt-6 ${secondary.className} opacity-0 `}
      >
        Different isn't Daring, It's Essential.
      </span>
      <h1
        className={`absolute -bottom-10 right-0 text-[10rem] ${secondary.className} opacity-0 transition-opacity different`}
      >
        <span className=" opacity-20"> Different</span>
        <span className="text-red-800">.</span>
      </h1>
    </div>
  );
}

export default TargetAudience;
