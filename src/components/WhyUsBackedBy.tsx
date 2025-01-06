"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import localFont from "next/font/local";
import BackedBy from "./BackedBy";
import { Italiana } from "next/font/google";

const primary = Italiana({
  weight: "400",
  subsets: ["latin"],
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
          <div className="flex w-full justify-center items-center">
            <h1
              className={`${primary.className} text-6xl z-50 relative w-full text-center flex-1`}
            >
              UB
            </h1>
            <h1 className={`text-red-800   ${secondary.className} text-3xl`}>
              X
            </h1>
            <h1
              className={`${primary.className} text-6xl z-50 relative w-full text-center flex-1`}
            >
              EZ
            </h1>
          </div>
          <div className="flex ">
            <h1
              className={`${secondary.className} text-2xl z-50 relative w-1/2 text-center flex-1 px-20 `}
            >
              The iconic UB City aligns with EZ’s vision to be a global brand in
              the lifestyle space. And it provides the perfect launchpad for the
              brand.
            </h1>
            <h1
              className={`${secondary.className} text-2xl z-50 relative w-1/2 text-center flex-1 px-20 `}
            >
              We believe our brand will align seamlessly with the mall’s
              environment and look forward to discussing the potential for
              leasing a space.
            </h1>
          </div>
        </div>
        <BackedBy />
      </div>
    </div>
  );
}

export default WhyUsBackedBy;
