import React from "react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { useTheme } from "../context/Themecontext"; // ✅ Theme hook

const Footer = () => {
  const { theme } = useTheme();

  // Conditional styles based on theme
  const backgroundColor =
    theme === "dark"
      ? "bg-gradient-to-t from-slate-900 via-purple-900 to-slate-900"
      : "bg-gradient-to-t from-yellow-100 via-white to-yellow-200";

  const borderColor =
    theme === "dark" ? "border-neutral-700" : "border-yellow-400/50";
  const headingText = theme === "dark" ? "text-white" : "text-black";
  const linkText =
    theme === "dark"
      ? "text-neutral-300 hover:text-white"
      : "text-gray-700 hover:text-black";

  return (
    <footer
      className={`flex justify-center mt-20 py-10  ${borderColor} ${backgroundColor} transition-all duration-500`}
    >
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="mr-20">
          <h3 className={`text-md font-semibold mb-4 ${headingText}`}>
            Resources
          </h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className={linkText}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mr-10">
          <h3 className={`text-md font-semibold mb-4 ${headingText}`}>
            Platform
          </h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className={linkText}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={`text-md font-semibold mb-4 ${headingText}`}>
            Community
          </h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className={linkText}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
