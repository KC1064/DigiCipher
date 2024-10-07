import React, { useRef, useState } from "react";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const pages = [
    {
      link: "classic",
      name: "Classic",
    },
    {
      link: "challenger",
      name: "Challenger",
    },
    {
      link: "/rules",
      name: "How To Play",
    },
    {
      link: "leaderboard",
      name: "Leaderboard",
    },
  ];

  const ref3 = useRef([]);

  const goto = (index, path) => {
    gsap.to(ref3.current[index], {
      duration: 0.5,
      scale: 0,
      opacity: 0,
      onComplete: () => navigate(path),
    });
  };

  useGSAP(() => {
    gsap.from(ref3.current, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.4,
      delay: 0.8,
    });
  });

  return (
    <div
      className="bg-black flex flex-col"
      style={{
        backgroundImage: "url('./bg.svg')",
        backgroundSize: "cover",
      }}
    >
      <div className="h-full w-full bg-opacity-20 backdrop-blur-sm">
        <Navbar showNav={true} />
        <div className="h-[82vh] w-full flex items-center flex-col gap-8">
          <p
            className="text-7xl w-full text-[#00FFFF] text-center mt-16 mb-6"
            style={{ fontFamily: "pixel" }}
          >
            DIGICIPHER
          </p>
            {pages.map((page, index) => (
              <button
                key={index}
                ref={(el) => (ref3.current[index] = el)}
                style={{ fontFamily: "origami" }}
                onClick={() => goto(index, page.link)}
                className="h-[8%] w-[60%] py-2 bg-white bg-opacity-25 border-2 border-[#00FFCC] backdrop-blur-3xl
            text-[#00FFCC] flex items-center font-semibold 
            justify-center uppercase">
                <p className="mt-2 lg:text-4xl md:text-3xl sm:text-2xl text-[28px]">
                  {page.name}
                </p>
              </button>
            ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
