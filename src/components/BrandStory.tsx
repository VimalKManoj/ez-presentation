"use client";
import Image from "next/image";
import React, { useRef } from "react";
import localFont from "next/font/local";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const primary = localFont({
  src: "./../app/fonts/vogue.ttf",
});
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
              start: "top 20% ", // Starts at 40% of viewport height
              end: "bottom bottom", // Ends at 100vh from the start of videoContainerRef
              scrub: true,
            },
          });

          timeline.fromTo(
            ".main",
            { xPercent: -20, opacity: 0 },
            { xPercent: 0, opacity: 1, duration: 2 }
          );
          timeline.fromTo(
            ".sub",
            { xPercent: 20, opacity: 0 },
            { xPercent: 0, opacity: 1, duration: 2 },
            "-=1.5"
          );
        }, BrandStoryRef);

        return () => ctx.revert();
      }
    },
    { scope: BrandStoryRef }
  );
  return (
    <div
      className="h-screen w-full flex-col relative flex justify-between items-center px-40 overflow-hidden py-20"
      ref={BrandStoryRef}
    >
      <div className="absolute mx-auto inset-0 z-10 w-1/2 overflow-hidden my-10 brand_story">
        <Image
          src="/brand_story.jpg"
          width={1000}
          height={1000}
          alt="brand_story"
          className="image-1"
          priority
        />
      </div>

      <h1 className={`${primary.className} text-6xl z-50 relative w-full main`}>
        Legacy in Making
      </h1>
      <h1
        className={`${secondary.className} text-4xl z-50 relative w-full text-right sub`}
      >
        We design for those who never settle.
      </h1>
    </div>
  );
}

export default BrandStory;
