// src/pages/LandingPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import WorkFlow from "../components/WorkFlow";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
      <Features />
      <WorkFlow />
      <Footer />
    </>
  );
}

export default LandingPage;
