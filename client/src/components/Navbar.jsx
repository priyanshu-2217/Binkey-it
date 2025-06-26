import React from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index";
import { Link } from "react-router-dom";
import { useTheme } from "../context/Themecontext"; // ✅ Import theme context

const Navbar = () => {
  const { theme } = useTheme();

  // Conditional theme classes
  const bgColor =
    theme === "dark"
      ? "bg-neutral-900/60 border-neutral-700/80 text-white"
      : "bg-white/60 border-yellow-400/50 text-black";

  const linkTextColor =
    theme === "dark"
      ? "text-white hover:text-blue-400"
      : "text-black hover:text-blue-600";

  const signInBorder =
    theme === "dark"
      ? "border-white/30 text-white"
      : "border-gray-400 text-black";

  return (
    <div
      className={`nav sticky top-0 z-50 py-3 backdrop-blur-lg border-b ${bgColor} transition-all duration-500`}
    >
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10" src={logo} alt="StockTimes logo" />
            <span className="tracking-tight text-xl ml-2 font-semibold">
              StalkStock
            </span>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`${linkTextColor} transition duration-200`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile nav placeholder */}
          <div className="flex justify-between space-x-4 items-center">
            <Link
              to="/signIn"
              className={`py-2 px-3 border rounded-md ${signInBorder} transition duration-200`}
            >
              Sign In
            </Link>
            <Link
              to="/create-account"
              className="py-2 px-3 bg-gradient-to-r from-orange-300 to-orange-600 border rounded-md text-white"
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
