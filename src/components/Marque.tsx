"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Marque() {
  const MarqueRef = React.useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(min-width: 640px)").matches) {
        const ctx = gsap.context(() => {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: MarqueRef.current,
              start: "top 80%", // Animation starts when the top of the container reaches 80% of the viewport
              end: "bottom 20%", // Animation ends when the bottom of the container reaches 20% of the viewport
              scrub: true, // Makes the animation follow the scroll position smoothly
            },
          });

          timeline.to(".slider-container", {
            x: "-120%", // Moves the slider container completely out of view
            ease: "power1.inOut",
          });
        }, MarqueRef);

        return () => ctx.revert();
      }
    },
    { scope: MarqueRef }
  );

  return (
    <div
      className="w-full md:h-[40vh] flex flex-col md:flex-row justify-start items-center overflow-hidden  mb-40"
      ref={MarqueRef}
    >
      <div className="w-full h-full flex flex-col md:flex-row  justify-start items-center mt-30 md:mt-0 gap-6 slider-container">
        <Image
          src="/place_1.jpg"
          width={1000}
          height={1000}
          alt="bg"
          className="h-full object-contain"
          priority={true}
          loading="eager"
        />
        <Image
          src="/place_2.jpg"
          width={1000}
          height={1000}
          alt="bg"
          className="h-full object-contain"
          priority={true}
          loading="eager"
        />
        <Image
          src="/place_6.jpg"
          width={1000}
          height={1000}
          alt="bg"
          className="h-full object-contain"
          priority={true}
          loading="eager"
        />
        <Image
          src="/place_4.jpg"
          width={1000}
          height={1000}
          alt="bg"
          className="h-full object-contain"
          priority={true}
          loading="eager"
        />
        <Image
          src="/place_5.jpg"
          width={1000}
          height={1000}
          alt="bg"
          className="h-full object-contain"
          priority={true}
          loading="eager"
        />
      </div>
    </div>
  );
}

export default Marque;
