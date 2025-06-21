import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
const HeroSection = () => {
  return (
    <div className="flex flex-col  items-center  lg:mt-20">
      <h1 className="text-3xl sm:text-2xl lg:text-4xl text-center tracking-wide">
        Get every assistant
        <br />{" "}
        <span className="mt-5 bg-gradient-to-r from-orange-200 to-orange-600 text-transparent bg-clip-text">
          At StalkStock
        </span>
      </h1>
      <p className="text-neutral-600 text-1xl mt-10 text-center max-w-3xl ">
        Just write anything here Prevent long lines of text (which are hard to
        read on wide screens). Keep content looking clean and centered
        (especially when used with mx-auto).
      </p>
      <div className="mt-10 px-2 py-3  flex justify-center">
        <a
          href="#"
          className=" flex-1 py-2 px-3 bg-gradient-to-r from-orange-300 to-orange-600 border rounded-md"
        >
          Here 1
        </a>
        <a
          href="#"
          className="flex-1 ml-5 py-2 px-3  border border-red-400 rounded-md"
        >
          Features
        </a>
      </div>
      <div className="mt-10 flex justify-center">
        <video className="autoplay loop muted rounded-lg w-1/2 border border-red-400 shadow-amber-100 mx-2 my-2">
          <source src={video1} type="video/mp4" />
          Your browser don't support the video tag
        </video>
        <video className="autoplay loop muted rounded-lg w-1/2 border border-red-400 shadow-amber-100 mx-2 my-2">
          <source src={video2} type="video/mp4" />
          Your browser don't support the video tag
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
