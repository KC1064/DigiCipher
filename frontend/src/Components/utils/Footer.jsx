import React, { useRef } from "react";
// import { FaGithub } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
// import { BsInfoCircle } from "react-icons/bs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Footer = () => {
  const ref1 = useRef();
  useGSAP(() => {
    gsap.from(ref1.current, {
      y: 200,
      opacity: 0,
      duration: 0.8,
    });
  });
  return (
    <div className="h-[9vh] w-full flex justify-center items-center">
      <div
        ref={ref1}
        className="flex justify-between w-[100%] h-[100%] bg-opacity-15 rounded-tr-3xl rounded-tl-3xl px-4"
      >
        <div className="flex items-center text-[white] gap-1 text-xl">
          <FaRegCopyright size={"16px"} color="white" />
          <p
            style={{ fontFamily: "origami" }}
            className="mt-1 font-thin text-sm"
          >
            All Rights Reserved
          </p>
        </div>
        <div className="flex items-center">
          <Link to="/about">
            <p style={{fontFamily:'origami'}}
             className="text-[white] text-sm mt-1">About Us</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
