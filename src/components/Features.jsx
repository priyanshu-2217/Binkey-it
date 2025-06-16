import React from "react";

const Features = () => {
  return (
    <div className="relative mt-10 border-b border-neutral-800   min-h-[800px] ">
      <div className="text-center">
        <span className="text-lg uppercase text-center text-orange-400 py-2 px-2 rounded-full font-medium">
          Features
        </span>
        <h2 className="text-3xl sm:3xl lg:6xl lg:mt-20 tracking-wide">
          Access Our
          <span className="ml-2 bg-gradient-to-r from-orange-300 to-orange-700 text-transparent bg-clip-text ">
            Services
          </span>
        </h2>
      </div>
      <div class="grid grid-cols-2 gap-4 p-4">
        <div class="w-full h-80 bg-blue-200 rounded-lg shadow-md flex items-center justify-center">
          Box 1
        </div>
        <div class="w-full h-80 bg-green-200 rounded-lg shadow-md flex items-center justify-center">
          Box 2
        </div>
        <div class="w-full h-80 bg-yellow-200 rounded-lg shadow-md flex items-center justify-center">
          Box 3
        </div>
        <div class="w-full h-80 bg-red-200 rounded-lg shadow-md flex items-center justify-center">
          Box 4
        </div>
      </div>
    </div>
  );
};

export default Features;
