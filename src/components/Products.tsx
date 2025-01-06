"use client";
import Image from "next/image";
import React, { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import localFont from "next/font/local";

const secondary = localFont({
  src: "./../app/fonts/ppneuemontreal-thin.otf",
});

function Products() {
  const AboutSectionRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      if (window.matchMedia("(min-width: 640px)").matches) {
        const ctx = gsap.context(() => {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: AboutSectionRef.current,
              start: "top top", // Starts at 40% of viewport height
              end: "bottom bottom", // Ends at 100vh from the start of videoContainerRef
              scrub: true,
            },
          });

          timeline
            .to(".card-one", { rotate: 3, duration: 1 })
            .to(".card-two", { rotate: -4, duration: 1 }, "+=2.5")
            .to(".card-three", { rotate: 5, duration: 1 }, "+=2.5")
            .to(".card-four", { rotate: -5, duration: 1 }, "+=2.5");
        }, AboutSectionRef);

        return () => ctx.revert();
      }
    },
    { scope: AboutSectionRef }
  );

  return (
    <div
      className="flex w-[90vw] h-full justify-between items-center "
      ref={AboutSectionRef}
    >
      {/* Parent div -total height */}

      <div className="relative h-[480vh] w-full md:w-1/2 flex flex-col items-center justify-between">
        {/* Sticky Sections */}
        <div className="sticky top-4 w-full h-screen flex justify-around items-center flex-col  card-one">
          <div className="h-[85vh]  w-5/6  overflow-hidden">
            <Image
              src="/one.jpg"
              alt="bg"
              className="h-full object-cover w-full object-top"
              priority={true}
              loading="eager"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="sticky top-4 w-full h-screen flex justify-around items-center flex-col  card-two">
          <div className="h-[85vh]  w-5/6  overflow-hidden">
            <Image
              src="/two.jpg"
              alt="bg"
              className="h-full object-cover w-full  object-top"
              priority={true}
              loading="eager"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="sticky top-4 w-full h-screen flex justify-around items-center flex-col  card-three">
          <div className="h-[85vh]  w-5/6  overflow-hidden">
            <Image
              src="/three.jpg"
              alt="bg"
              className="h-full object-cover w-full object-top"
              priority={true}
              loading="eager"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="sticky top-4 w-full h-screen flex justify-around items-center flex-col  card-four">
          <div className="h-[85vh]  w-5/6  overflow-hidden">
            <Image
              src="/four.jpg"
              alt="bg"
              className="h-full object-cover w-full  object-top"
              priority={true}
              loading="eager"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="sticky top-4 w-full h-screen flex justify-around items-center flex-col  card-two">
          <div className="h-[85vh]  w-5/6  overflow-hidden">
            <Image
              src="/five.jpg"
              alt="bg"
              className="h-full object-cover w-full  object-top"
              priority={true}
              loading="eager"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex relative h-[480vh] w-1/2  flex-col items-center justify-between">
        {" "}
        <div className="sticky top-0  h-screen flex gap-4 justify-center items-start flex-col ">
          <h1 className={`${secondary.className} text-4xl`}>Product Preview</h1>
        </div>
      </div>
    </div>
  );
}

export default Products;
