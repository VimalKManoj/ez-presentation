import React from "react";
import { Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";

const primary = localFont({
  src: "./../app/fonts/vogue.ttf",
});
const secondary = localFont({
  src: "./../app/fonts/ppneuemontreal-medium.otf",
});

const nanum = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

function BackedBy() {
  return (
    <section className="w-full min-h-screen flex flex-col gap-20 justify-around z-20 px-6 md:px-10 bg-white text-black md:text-inherit md:bg-transparent mb-96">
      <div className="flex flex-col md:flex-row justify-around items-center w-full md:h-screen">
        <div className="flex flex-col items-start justify-around flex-1 p-6 xl:p-10 2xl:p-14  h-full border-x md:border-white/80  border-black/20 ">
          <h1
            className={`${primary.className} text-3xl md:text-6xl 2xl:text-7xl pb-4 md:pb-0 text-center md:text-left w-full`}
          >
            Backed By
          </h1>
        </div>
        <ContentBlock number="350" tag="& counting" title="Team Size" />

        <ContentBlock number="29" title="Years In Business" />
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center w-full h-full xl:h-[90vh] 2xl:h-screen">
        <ContentBlock number="3" tag="rd Generation" title="Lineage" />
        <ContentBlock number="70" tag="Thousand" title="Sq.ft" />
        <ContentBlock number="6+1" tag="In Making" title="Store" />
      </div>
    </section>
  );
}

export default BackedBy;

type ContentBlockProps = {
  number: string;
  title: string;
  tag?: string;
};

const ContentBlock = ({ number, title, tag }: ContentBlockProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center flex-1 p-10 py-20 md:py-0 md:p-6  xl:p-10 2xl:p-14 h-[50vh] md:h-full border-x md:border-r md:border-white/80 border-black/20  overflow-hidden  md:first:border-l">
      <div className="absolute -top-6 left-6 flex number">
        <h2
          className={`${nanum.className} relative text-[9rem]  z-0 opacity-70 `}
        >
          {number} <span className="absolute bottom-14 text-xl  ">{tag} </span>
        </h2>
      </div>

      <div className="">
        <h2
          className={`${secondary.className} font-bold text-2xl 2xl:text-3xl pt-20`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};
