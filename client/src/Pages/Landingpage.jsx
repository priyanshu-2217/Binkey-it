// src/pages/LandingPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import WorkFlow from "../components/WorkFlow";
import Footer from "../components/Footer";
import { useTheme } from "../context/Themecontext"; // ✅ Import theme context

function LandingPage() {
  const { theme } = useTheme();

  const backgroundClasses =
    theme === "dark"
      ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"
      : "bg-gradient-to-br from-yellow-100 via-white to-yellow-200 text-black";

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${backgroundClasses}`}
    >
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
      <Features />
      <WorkFlow />
      <Footer />
    </div>
  );
}

export default LandingPage;
