import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "../src/components/Features";
import WorkFlow from "./components/WorkFlow";
import Footer from "./components/Footer";

function App() {
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

export default App;
