import React from "react";
import { features } from "../constants/index.jsx";
import { useTheme } from "../context/Themecontext"; // Get theme context

const Features = () => {
  const { theme } = useTheme();

  // Theme-based styles
  const backgroundClasses =
    theme === "dark"
      ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      : "bg-gradient-to-br from-yellow-100 via-white to-yellow-200";

  const headingTextColor = theme === "dark" ? "text-white" : "text-black";
  const subTextColor = theme === "dark" ? "text-neutral-500" : "text-gray-600";
  const iconBg = theme === "dark" ? "bg-neutral-900" : "bg-yellow-200";
  const iconText = theme === "light" ? "text-orange-700" : "text-yellow-700";
  const borderColor =
    theme === "dark" ? "border-neutral-800" : "border-yellow-400/50";

  return (
    <div
      className={`relative mt-10 border-b ${borderColor} min-h-[800px] ${backgroundClasses} transition-all duration-500`}
    >
      <div className="text-center">
        <span className="text-lg uppercase text-orange-400 py-2 px-2 rounded-full font-medium">
          Features
        </span>
        <h2
          className={`text-3xl sm:text-3xl lg:text-6xl lg:mt-20 tracking-wide ${headingTextColor}`}
        >
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
              <div
                className={`flex h-10 w-10 p-2 ${iconBg} ${iconText} justify-center items-center rounded-full`}
              >
                {feature.icon}
              </div>
              <h5 className={`ml-4 text-xl font-semibold ${headingTextColor}`}>
                {feature.text}
              </h5>
            </div>
            <p className={`text-md mt-4 ${subTextColor}`}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
