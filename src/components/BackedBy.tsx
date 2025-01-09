import React from "react";
import { Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { FaInstagram } from "react-icons/fa";

import { Italiana } from "next/font/google";

const primary = Italiana({
  weight: "400",
  subsets: ["latin"],
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
    <section className="w-full min-h-screen flex flex-col md:gap-20 justify-around z-20 px-6 md:px-10  md:text-inherit md:bg-transparent 2xl:mb-96">
      <div className="flex flex-col md:flex-row justify-around items-center w-full md:h-screen">
        <div className="w-full flex flex-col md:items-start justify-center items-center md:justify-start flex-1 p-6 xl:p-10 2xl:p-14  md:border-l h-[50vh] md:border-white/50  border-black/20 mb-10 md:mb-0">
          <h1
            className={`${primary.className} text-7xl md:text-6xl 2xl:text-7xl  md:pb-0 text-center md:text-left w-full `}
          >
            <span className="text-2xl pl-1 pb-2">Backed By</span> <br />
            <span className=" pb-2 inline-block">DAZZLES</span>
          </h1>
          <a
            href="https://www.instagram.com/dazzles_studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
          >
            {" "}
            <FaInstagram className="text-4xl text-white " />{" "}
          </a>
        </div>
        <ContentBlock number="350" tag="& counting" title="Team Size" />

        <ContentBlock number="29" title="Years In Business" />
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center w-full h-full xl:h-[90vh] 2xl:h-screen">
        <ContentBlock number="3" tag="rd Generation" title="Lineage" />
        <ContentBlock number="70" tag="Thousand" title="Sq.ft" />
        <ContentBlock number="6+1" tag="In Making" title="Stores" />
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
    <div className="relative flex flex-col items-center w-full justify-center flex-1 p-10 py-20 md:py-0 md:p-6  xl:p-10 2xl:p-14 h-[50vh] border-x md:border-r md:border-white/50 border-black/20  overflow-hidden  md:first:border-l">
      <div className="absolute mx-auto inset-0 w-full flex-col justify-start  flex-1  flex number ">
        <h2
          className={`${nanum.className} relative text-8xl md:text-[9rem] w-full text-center  z-0 opacity-70 `}
        >
          {number}
          <span className="w-full text-base">{tag}</span>
        </h2>
      </div>

      <div className="pt-20 2xl:pt-40">
        <h2
          className={`${secondary.className} font-bold text-2xl 2xl:text-3xl 2xl:pt-20`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};
