import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Loader = () => {
  const line = useRef();
  const lettersRef = useRef([]);
  const home = useRef();

  // Create array of spans for each letter
  const text = "Welcome".split("");

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(home.current, {
      x: 1000,
      opacity: 0,
      scale: 0.8,
      rotate: 10,
      duration: 1.5,
      ease: "power4.out", // Custom easing for a smooth and refined animation
      stagger: {
        amount: 0.3, // Adds a small delay between items if animating multiple elements
      },
    });

    tl.from(line.current, {
      y: 100,
      opacity: 0,
      duration: 1,
    });
    tl.from(lettersRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.25,
      stagger: 0.15,
    });
  });

  return (
    <div
      ref={home}
      className="h-[100vh] w-full bg-black flex justify-center items-center"
    >
      <div className="font-mono text-6xl text-white flex flex-col h-[100px] w-[250px] justify-center overflow-hidden">
        <div className="flex">
          {text.map((letter, index) => (
            <span
              style={{ fontFamily: "caleb" }}
              key={index}
              ref={(el) => (lettersRef.current[index] = el)}
              className="inline-block"
            >
              {letter}
            </span>
          ))}
        </div>
        <span
          ref={line}
          className="border-blue-50 border-b-8 w-full text-center mt-2"
        ></span>
      </div>
    </div>
  );
};

export default Loader;
