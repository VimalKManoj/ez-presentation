"use client";
import React, { useRef, useState } from "react";
import localFont from "next/font/local";
import { IoVolumeMuteOutline } from "react-icons/io5";
import { GoUnmute } from "react-icons/go";

const secondary = localFont({
  src: "./../app/fonts/ppneuemontreal-thin.otf",
});

function Video() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleAudio = () => {
    if (videoRef.current) {
      // Toggle the muted state
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted); // Reflect the updated state
    }
  };

  return (
    <div className="h-full md:h-screen w-full flex flex-col md:flex-row relative justify-between items-center overflow-hidden py-20">
      <h1
        className={`${secondary.className} md:pl-32 text-4xl z-50 relative w-full text-center  md:text-left flex-1 order-2 md:order-1`}
      >
        Product Preview
      </h1>
      <div className="flex-1 relative order-1 md:order-2">
        <div className="h-[90vh] md:h-screen object-cover z-10 py-10 overflow-hidden flex flex-col justify-center items-center">
          <video
            ref={videoRef}
            className="w-full h-full object-cover hero-video"
            autoPlay
            playsInline
            muted={isMuted} // Controlled by state
            loop
            preload="auto"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Audio toggle button */}
          <button
            className="absolute bottom-10 right-0 bg-white/20 text-black px-10 py-2 backdrop-blur-2xl  rounded-ss-md shadow-md z-50"
            onClick={toggleAudio}
          >
            {isMuted ? (
              <GoUnmute size={30} />
            ) : (
              <IoVolumeMuteOutline size={30} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Video;
