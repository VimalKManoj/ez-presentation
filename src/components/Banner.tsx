"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

import localFont from "next/font/local";
const primary = localFont({
  src: "./../app/fonts/ppneuemontreal-thin.otf",
});
const secondary = localFont({
  src: "./../app/fonts/ppneuemontreal-medium.otf",
});

function Banner() {
  const BannerRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      if (window.matchMedia("(min-width: 640px)").matches) {
        const ctx = gsap.context(() => {
          const timeline = gsap.timeline({});

          gsap.set(".logo", { backgroundColor: "white" });
          gsap.set(".logo-ez", { opacity: 0, scale: 1.2, xPercent: 0 });
          gsap.set(".tag", { opacity: 0 });
          gsap.set(".image", { scale: 1.2, opacity: 0.8 });

          timeline
            .to(".logo-ez", { opacity: 1, duration: 1, delay: 0.5 })
            .to(".logo", {
              backgroundColor: "transparent",
              duration: 1,
            })
            .to(".image", { scale: 1, opacity: 1, duration: 1 }, "<")
            .to(".logo-ez", { scale: 1, duration: 1 }, "<")
            .to(".logo-ez", {
              xPercent: -180,
              duration: 2,
              ease: "power2.inOut",
            })
            .to(".tag", { opacity: 1, duration: 2 });
        }, BannerRef);

        return () => ctx.revert();
      }
    },
    { scope: BannerRef }
  );
  useGSAP(
    () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        const ctx = gsap.context(() => {
          const timeline = gsap.timeline({});

          gsap.set(".logo", { backgroundColor: "white" });
          gsap.set(".logo-ez", { opacity: 0, scale: 1.2, xPercent: 0 });
          gsap.set(".tag-mobile", { opacity: 0 });
          gsap.set(".image", { scale: 1.2, opacity: 0.8 });

          timeline
            .to(".logo-ez", { opacity: 1, duration: 1, delay: 0.5 })
            .to(".logo", {
              backgroundColor: "transparent",
              duration: 1,
            })
            .to(".image", { scale: 1, opacity: 1, duration: 1 }, "<")
            .to(".logo-ez", { scale: 1, duration: 1 }, "<")
            .to(".logo", {
              yPercent: 20,
              duration: 2,
              ease: "power2.inOut",
            })

            .to(".tag-mobile", { opacity: 1, duration: 2 });
        }, BannerRef);

        return () => ctx.revert();
      }
    },
    { scope: BannerRef }
  );
  return (
    <div
      className="h-screen w-full relative flex justify-between items-center px-24 overflow-hidden"
      ref={BannerRef}
    >
      <Image
        src="/banner.jpg"
        alt="banner"
        width={1500}
        height={1500}
        className="absolute top-0 left-0 w-full h-full image object-cover md:hidden"
        priority
      />
      <Image
        src="/banner.jpg"
        alt="banner"
        layout="fill"
        className="absolute top-0 left-0 w-full h-full image object-cover hidden md:block"
        priority
      />
      <div className="z-50 logo  h-full w-full flex flex-col justify-center items-center  absolute top-0 left-0 ">
        <Image
          src="/red_logo.png"
          alt="logo"
          width={250}
          height={250}
          priority
          className="logo-ez relative w-40 md:w-60"
        />
        <h1
          className={`${primary.className} z-50 tag-mobile relative text-2xl md:hidden`}
        >
          Business{" "}
          <span className={`font-bold ${secondary.className}`}>
            Presentation
          </span>
        </h1>
      </div>
      <div className="z-50 h-full flex justify-start items-center opacity-0">
        <Image
          src="/red_logo.png"
          alt="logo"
          width={250}
          height={250}
          priority
          className=""
        />
      </div>
      <h1
        className={`${primary.className} z-50 tag relative text-2xl hidden md:block`}
      >
        Business{" "}
        <span className={`font-bold ${secondary.className}`}>Presentation</span>
      </h1>
    </div>
  );
}

export default Banner;
