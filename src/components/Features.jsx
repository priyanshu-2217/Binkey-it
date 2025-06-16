import React from "react";
import { features } from "../constants/index.jsx";

const Features = () => {
  return (
    <div className="relative mt-10 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="text-lg uppercase text-orange-400 py-2 px-2 rounded-full font-medium">
          Features
        </span>
        <h2 className="text-3xl sm:text-3xl lg:text-6xl lg:mt-20 tracking-wide">
          Access Our
          <span className="ml-2 bg-gradient-to-r from-orange-300 to-orange-700 text-transparent bg-clip-text">
            Services
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-10">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-6 mb-12">
            <div className="flex items-center">
              <div className="flex h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <h5 className="ml-4 text-xl font-semibold">{feature.text}</h5>
            </div>
            <p className="text-md mt-4 text-neutral-500">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
