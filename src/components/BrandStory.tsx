"use client";
import Image from "next/image";
import { Italiana } from "next/font/google";

const primary = Italiana({
  weight: "400",
  subsets: ["latin"],
});

import React, { useRef } from "react";
import localFont from "next/font/local";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// const primary = localFont({
//   src: "./../app/fonts/RadiantLight.ttf",
// });

const secondary = localFont({
  src: "./../app/fonts/ppneuemontreal-thin.otf",
});

// clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

function BrandStory() {
  const BrandStoryRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      if (window.matchMedia("(min-width: 640px)").matches) {
        const ctx = gsap.context(() => {
          gsap.set(".brand_story", {
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
          });
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: BrandStoryRef.current,
              start: "top 50% ", // Starts at 40% of viewport height
              end: "bottom bottom", // Ends at 100vh from the start of videoContainerRef
              toggleActions: "play none none reverse",
            },
          });
          timeline
            .to(".brand_story", {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              duration: 2,
            })
            .fromTo(
              ".image-1",
              {
                scale: 1.2,
              },
              { scale: 1, duration: 2 },
              "<"
            );
        }, BrandStoryRef);

        return () => ctx.revert();
      }
    },
    { scope: BrandStoryRef }
  );
  useGSAP(
    () => {
      if (window.matchMedia("(min-width: 640px)").matches) {
        const ctx = gsap.context(() => {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: BrandStoryRef.current,
              start: "top 10%", // Starts at 40% of viewport height
              end: "bottom bottom", // Ends at 100vh from the start of videoContainerRef
              toggleActions: "play none none reset",
            },
          });

          timeline
            .fromTo(
              ".main",
              { xPercent: -20, opacity: 0 },
              { xPercent: 0, opacity: 1, duration: 1 }
            )
            .to(".strike", { scaleX: 1, duration: 1.5, delay: 0.5 })

            .fromTo(
              ".main-2",
              { xPercent: -20, opacity: 0 },
              { xPercent: 0, opacity: 1, duration: 1 }
            )
            .fromTo(
              ".sub",
              { xPercent: 20, opacity: 0 },
              { xPercent: 0, opacity: 1, duration: 1 }
            );
        }, BrandStoryRef);

        return () => ctx.revert();
      }
    },
    { scope: BrandStoryRef }
  );
  return (
    <div
      className="h-screen w-full flex-col relative flex justify-between items-center px-56 overflow-hidden py-20"
      ref={BrandStoryRef}
    >
      <div className="absolute mx-auto inset-0 z-10 w-1/2 overflow-hidden my-10 brand_story">
        <Image
          src="/brand_story.jpg"
          width={1000}
          height={1000}
          alt="brand_story"
          className="image-1 opacity-90"
          priority
        />
      </div>
      <div className="w-full uppercase">
        <h1
          className={`${primary.className} text-5xl z-50 relative  main w-fit pt-4 `}
        >
          Brand’s History
          <span className="w-full h-1 absolute left-0 top-1/2 -translate-y-1/2 bg-red-800 mt-2 scale-x-0 origin-left strike"></span>
        </h1>
        <h1
          className={`${primary.className} text-5xl z-50 relative w-full main-2 pt-4`}
        >
          Fiction, Now Transpiring
        </h1>
      </div>

      <h1
        className={`${secondary.className} text-2xl z-50 relative w-full text-start font-bold sub`}
      >
        En <span className="text-red-800 font-bold">Vision</span> the EZ era at
        the curtains drop
      </h1>
    </div>
  );
}

export default BrandStory;
