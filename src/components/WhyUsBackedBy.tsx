"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import localFont from "next/font/local";
import BackedBy from "./BackedBy";
const primary = localFont({
  src: "./../app/fonts/Vogue.ttf",
});
const secondary = localFont({
  src: "./../app/fonts/ppneuemontreal-thin.otf",
});

function WhyUsBackedBy() {
  const WhyContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: WhyContainerRef.current,
            start: "top top", // Starts at 40% of viewport height
            end: "bottom -10%", // Ends at 100vh from the start of videoContainerRef
            scrub: true,
          },
        });

        timeline.to(".parallax-img", {
          y: 400,

          ease: "power1.inOut",
        });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: WhyContainerRef.current,
              start: "30% top", // Starts at 40% of viewport height
              end: "bottom -20%", // Ends at 100vh from the start of videoContainerRef
              scrub: true,
            },
          })
          .to(".number", { y: 100, ease: "power1.inOut" });

        // .to(".video-wrapper", { scale: 0.8, duration: 1 });
      }, WhyContainerRef);

      return () => ctx.revert();
    },
    { scope: WhyContainerRef }
  );
  return (
    <div
      className="relative w-full h-full overflow-hidden "
      ref={WhyContainerRef}
    >
      <div className="absolute top-0 left-0 h-[20vh] w-full  z-20 bg-gradient-to-b from-[#09090b] "></div>
      <div className="absolute bottom-0 left-0 h-[20vh] w-full  z-20 bg-gradient-to-t from-[#09090b] "></div>
      <div className="absolute top-0 left-0 h-full w-[35vw]  z-20 bg-gradient-to-r from-[#09090b] "></div>
      <div className="absolute top-0 right-0 h-full w-[30vw]  z-20 bg-gradient-to-l from-[#09090b] "></div>
      <div>
        <Image
          src="/place.jpg"
          width={1000}
          height={1000}
          alt="bg"
          className=" w-full h-full object-cover relative bottom-60 z-0 parallax-img hidden md:block grayscale opacity-60"
          priority={true}
          loading="eager"
        />
      </div>

      <div className="md:absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full">
        {/* <OurServices /> */}
        <div className="flex flex-col justify-center items-center w-full h-full py-52 pb-64 gap-10">
          <h1
            className={`${primary.className} text-6xl z-50 relative w-full text-center`}
          >
            Why Us?
          </h1>
          <h1
            className={`${secondary.className} text-4xl z-50 relative w-1/2 text-center  `}
          >
            Our focus is on creating garments that combine elegance and
            function. Every detail serves a purpose, ensuring you’re always
            dressed for success.
          </h1>
        </div>
        <BackedBy />
      </div>
    </div>
  );
}

export default WhyUsBackedBy;
