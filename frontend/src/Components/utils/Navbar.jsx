import React, { useRef,useState } from "react";
import User from "./Avatar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";
import {useNavigate} from "react-router-dom";
import ReturnModal from "./ReturnModal";

const Navbar = ({showNav}) => {
  const ref2 = useRef();
  const [showModal, setShowModal] = useState(false);
  // const [showNav,setShowNav] = useState(true)
  const nav = useNavigate()

  useGSAP(() => {
    gsap.from(ref2.current, {
      y: -200,
      opacity: 0,
      duration: 0.8,
    });
  });

  const showInstructions = () => {
    setInstructions(!instructions);
  };

  const handleBackClick = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };
  // const i = false;
  return (
    <>
    <div className="h-[9vh] w-full flex justify-center items-center">
      {showNav && (
        <div
          ref={ref2}
          className="h-[100%] w-[100%] px-4 flex justify-between items-center rounded-br-3xl rounded-bl-3xl "
        >
          <div className="h-full w-full flex items-center justify-between">
            <Link to="https://github.com/KC1064/open_the_vault" target="_blank">
              <FaGithub size={"29px"} color="white" />
            </Link>
            <User />
          </div>
        </div>
      )}
      {!showNav && (
        <div className="h-[100%] w-[100%] px-4 flex justify-between items-center">
          <FaHouseChimney color="white" size={"25px"} onClick={() => {handleBackClick()}}/>
          <div className="text-emerald-300 text-5xl mt-2" style={{fontFamily:"pixel",color:""}}>DIGICIPHER</div>
          <User />
        </div>
      )}
    </div>
    
    {showModal && (
        <ReturnModal
          isOpen={showModal}
          onClose={handleCloseModal} // Pass function to close modal
          onConfirm={() => nav("/")} // Navigate to another route on confirmation
        />
      )}
    </>
  );
};

export default Navbar;
