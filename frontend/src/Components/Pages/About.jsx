import React from "react";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";

const About = () => {
  return (
    <div
      style={{
        backgroundImage: "url('./bg.svg')",
        backgroundSize: "cover",
      }}
      className="h-[100vh] w-full"
    >
      <Navbar />
      <div className="h-[82vh] px-3 py-3">
      </div>
      <Footer />
    </div>
  );
};

export default About;
