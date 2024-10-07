import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
// import {ArrowBackIcon} from "@chakra-ui/icons"
import Navbar from "../utils/Navbar";
// import { useDisclosure } from "@chakra-ui/react";
import ReturnModal from "../utils/ReturnModal";
import Footer from "../utils/Footer";

const Classic = () => {
  const [input, setInput] = useState([[], [], [], []]);
  const [currentRow, setCurrentRow] = useState(0);
  const [currentInput, setCurrentInput] = useState([]);
  const [randomNum, setRandomNum] = useState("");
  const [isMatch, setIsMatch] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);
  const [win, setWin] = useState(false);
  const [isGuessed, setIsGuessed] = useState(false);
  const [instructions, setInstructions] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const { isOpen, onOpen, onClose } = useDisclosure()

<<<<<<< HEAD:frontend/src/Pages/Classic.jsx
<<<<<<< HEAD:frontend/src/Pages/Classic.jsx
  // const gridRefs = useRef();
  // const numRefs = useRef();
  const fullPage = useRef();
  const insref = useRef();
=======
  const gridRefs = useRef([]);
  const numRefs = useRef([]);
  const nav = useNavigate();
>>>>>>> main:frontend/src/Components/Pages/Classic.jsx

  // const timeline = gsap.timeline();

  useGSAP(() => {
    gsap.from(fullPage.current, {
      x: 1000,
      // y:-1000,
      rotate: 10,
      duration: 1,
      ease: "back.out(1)",
    });
  }, []);
=======
  // const gridRefs = useRef([]);
  // const numRefs = useRef([]);
  const nav = useNavigate();
  const container = useRef([]);
  const ins = useRef();

  useGSAP(() => {
    gsap.from(ins.current, {
      scaleX: 0,
      scaleY:0,
      duration: 0.5,
    });
  }, [instructions]);

  //Animation-01
  // useGSAP(() => {
  //   const timeline = gsap.timeline();
  //   timeline.from(container.current[0], {
  //     scale:0,
  //     duration: 0.35,
  //     opacity: 0,
  //     // stagger:0.2
  //   });
  //   timeline.from(container.current[1], {
  //     scale:0,
  //     duration: 0.35,
  //     opacity: 0,
  //     // stagger:0.2
  //   });
  //   timeline.from(container.current[2], {
  //     scale:0,
  //     duration: 0.35,
  //     opacity: 0,
  //     // stagger:0.2
  //   });
  // }, []);
  //--------------------

  //Animation-02
  useGSAP(() => {
    // const timeline = gsap.timeline();
    gsap.from(container.current, {
      scale: 0,
      duration: 0.5,
      opacity: 0,
      // stagger:0.2
    });
  });
  //--------------------
>>>>>>> kiron-working-branch:frontend/src/Components/Pages/Classic.jsx

  const handleKeyClick = (key) => {
    if (key === "Delete") {
      setCurrentInput((prev) => prev.slice(0, -1));
    } else if (key === "Enter") {
      if (currentInput.length === 4) {
        let newInput = [...input];
        newInput[currentRow] = currentInput;
        setInput(newInput);
        setCurrentInput([]);

        if (currentInput.join("") === randomNum) {
          setIsMatch(true);
          setIsGuessed(true);
          setWin(true);
          setPlayAgain(true);
        } else {
          setIsMatch(false);
          if (currentRow < 3) {
            setCurrentRow(currentRow + 1);
          } else {
            setPlayAgain(true);
            setIsGuessed(true);
            setWin(false);
          }
        }
      } else {
        alert("Please enter 4 digits before pressing Enter.");
      }
    } else if (currentInput.length < 4) {
      setCurrentInput((prev) => [...prev, key]);
    }
  };

  const resetGame = () => {
    setInput([[], [], [], []]);
    setCurrentRow(0);
    setCurrentInput([]);
    setIsMatch(false);
    setPlayAgain(false);
    setWin(false);
    setIsGuessed(false);
    setRandomNum(generateNumber());
  };

  useEffect(() => {
    setRandomNum(generateNumber());
    console.log(randomNum);
  }, []);

  const generateNumber = () => {
    let digits = [];
    while (digits.length < 4) {
      let randomDigit = Math.floor(Math.random() * 10);
      if (!digits.includes(randomDigit)) {
        digits.push(randomDigit);
      }
    }
    return digits.join("");
  };

  const getBgColor = (digit, index) => {
    if (randomNum[index] === digit) {
      return "bg-green-300";
    } else if (randomNum.includes(digit)) {
      return "bg-yellow-300";
    } else {
      return "bg-red-300";
    }
  };

  useGSAP(() => {
    if (instructions) {
      gsap.from(insref.current, {
        x: 100,
        y: -100,
        scale: 0,
        opacity: 0,
        duration: 1,
        rotate:30,
        ease: "back.out(1)",
      });

    } 
    //This is not working still some issue to resolve
    else {
      gsap.to(insref.current, {
        x: 0,
        y: 0,
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.in(1)",
      });
    }
  }, [instructions]);

  const showInstructions = () => {
<<<<<<< HEAD:frontend/src/Pages/Classic.jsx
    setInstructions((prev) => !prev); // Toggle instructions visibility
=======
    console.log(instructions);
    setInstructions(!instructions);
>>>>>>> kiron-working-branch:frontend/src/Components/Pages/Classic.jsx
  };

  const handleBackClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div
<<<<<<< HEAD:frontend/src/Pages/Classic.jsx
      ref={fullPage}
      className="h-[100vh] w-full flex gap-5 flex-col items-center"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #b3e0e8, #a4c8d6, #95b1c4, #88a1b1, #7a8b9e, #748a8d, #708c8b, #6c8e88, #66909c, #7aa2ab, #8fb3ba, #a6c4c9)",
      }}
    >
      <div className="w-full h-[10%] p-2">
        <nav className="flex justify-between items-center px-2 py-1 bg-white border-2 border-black bg-opacity-20 rounded-[80px] backdrop-blur-3xl">
          <div className="flex items-center gap-1">
            <ArrowBackIcon boxSize={7} onClick={() => {handleBackClick()}} />
            <img
              src="logo.jpeg"
              alt="DigiCipher logo"
              className="h-12 w-12 rounded-full"
            />
            <p className="text-[22px] font-bold font-audiowide">DigiCipher</p>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <h1
              className="bg-white h-10 w-10 text-3xl flex justify-center items-center rounded-full"
              onClick={showInstructions}
            >
              i
            </h1>
            <img
              src="https://avatar.iran.liara.run/public/3"
              alt="User avatar"
              className="h-[49px] w-auto"
            />
          </div>
        </nav>
      </div>

      <div className="h-[35%] w-[75%]">
        <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-2">
          {input.flat().map((digit, index) => (
            <div
              key={index}
              className={`h-full w-full font-audiowide rounded-xl flex items-center justify-center text-4xl ${getBgColor(
                digit,
                index % 4
              )}`}
            >
              {digit}
            </div>
          ))}

          {currentInput.map((digit, index) => (
            <div
              key={index + input.flat().length}
              className="h-full w-full bg-red-300 font-audiowide rounded-2xl flex items-center justify-center text-4xl"
            >
              {digit}
            </div>
          ))}

          {Array.from({ length: 16 - input.flat().length }).map((_, index) => (
            <div
              key={`empty-${index}`}
              className="h-full w-full bg-red-300 font-audiowide rounded-2xl flex items-center justify-center text-4xl"
            ></div>
          ))}
        </div>
      </div>

      {/* Keyboard */}
      <div className="h-[30%] w-[70%]">
        <div className="h-full w-full grid grid-cols-3 grid-rows-4 gap-4">
          {[
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "0",
            "Delete",
            "Enter",
          ].map((key, index) => (
            <button
              key={key}
              className="h-full w-full bg-black text-green-400 flex justify-center items-center text-2xl font-orbitron rounded-2xl"
              onClick={() => handleKeyClick(key)}
            >
              {key === "Delete" ? "Del." : key === "Enter" ? "Ent." : key}
            </button>
          ))}
        </div>
      </div>

      {/* Play Again */}
      {playAgain && (
        <div className="h-[100vh] w-[100%] absolute gap-4 flex-col font-pressStart bg-white bg-opacity-20 backdrop-blur-lg flex justify-center items-center">
          <h1 className="text-7xl">
            {win ? (
              "You Won"
            ) : (
              <div className="text-4xl font-pressStart text-center">
                Correct Number is {randomNum}
              </div>
            )}
          </h1>

=======
      className="h-[100vh] w-full flex gap-5 flex-col items-center bg-black"
      style={{ backgroundImage: "url('./bg.svg')", backgroundSize: "cover" }}
      // style={{
      //   backgroundImage:
      //     "linear-gradient(to right top, #b3e0e8, #a4c8d6, #95b1c4, #88a1b1, #7a8b9e, #748a8d, #708c8b, #6c8e88, #66909c, #7aa2ab, #8fb3ba, #a6c4c9)",
      // }}
    >
      <div className="h-full w-full bg-opacity-20 backdrop-blur-sm flex flex-col items-center gap-8">
        <div className="w-full h-[10%] p-2">
          <Navbar />
        </div>
        <div
          ref={(el) => (container.current[0] = el)}
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "flex-end",
          }}
        >
>>>>>>> kiron-working-branch:frontend/src/Components/Pages/Classic.jsx
          <button
            style={{
              color: "white",
              border: "1px solid white",
              padding: "7px",
              fontWeight: "600",
              background: "",
            }}
            onClick={showInstructions}
          >
            How To Play
          </button>
        </div>

        <div
          ref={(el) => (container.current[1] = el)}
          className="h-[35%] w-[75%]"
        >
          <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-2">
            {input.flat().map((digit, index) => (
              <div
                key={index}
                style={{ fontFamily: "origami" }}
                // ref={(el) => (gridRefs.current[index] = el)} // Attach each box to refs array
                className={`h-full w-full rounded-xl flex items-center justify-center text-5xl ${getBgColor(
                  digit,
                  index % 4
                )}`}
              >
                {digit}
              </div>
            ))}

<<<<<<< HEAD:frontend/src/Pages/Classic.jsx
      {/* Instructions */}
      {instructions && (
        <div
          ref={insref}
          className="absolute w-[85%] z-50 top-[12vh] left-[5vw] flex flex-col gap-3 p-5 rounded-lg shadow-2xl border-2 border-black bg-white bg-opacity-30 backdrop-blur-xl"
        >
          <h1 className="font-bold font-audiowide text-[23px]">Instructions</h1>
          <p className="font-bold font-orbitron text-sm text-black">
            1. Guess the 4 digit code.
          </p>
          <p className="font-bold font-orbitron text-sm text-black">
            2. Use the numbers to guess.
          </p>
          <p className="font-bold font-orbitron text-sm text-black">
            3. Press 'Del.' to delete and 'Ent.' to confirm your guess.
          </p>
=======
            {currentInput.map((digit, index) => (
              <div
                key={index + input.flat().length}
                // ref={(el) =>
                //   (gridRefs.current[input.flat().length + index] = el)
                // }
                style={{ fontFamily: "origami" }}
                className="h-full w-full bg-white border-2 border-white rounded-2xl flex items-center justify-center text-5xl text-white backdrop-blur-3xl bg-opacity-15"
              >
                {digit}
              </div>
            ))}

            {Array.from({ length: 16 - input.flat().length }).map(
              (_, index) => (
                <div
                  key={`empty-${index}`}
                  // ref={(el) =>
                  //   (gridRefs.current[
                  //     input.flat().length + currentInput.length + index
                  //   ] = el)
                  // }
                  style={{ fontFamily: "lunar" }}
                  className="h-full w-full bg-white border-2 border-white rounded-2xl flex items-center justify-center text-4xl backdrop-blur-3xl bg-opacity-15"
                ></div>
              )
            )}
          </div>
>>>>>>> kiron-working-branch:frontend/src/Components/Pages/Classic.jsx
        </div>

        {/* Keyboard */}
        <div
          ref={(el) => (container.current[2] = el)}
          className="h-[30%] w-[70%]"
        >
          <div className="h-full w-full grid grid-cols-3 grid-rows-4 gap-4">
            {[
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "0",
              "Delete",
              "Enter",
            ].map((key, index) => (
              <button
                // ref={(el) => (numRefs.current[index] = el)} // Corrected reference to use index
                key={key}
                className="h-full w-full bg-black border-2 border-green-500 text-green-400 flex justify-center items-center text-3xl rounded-2xl"
                style={{ fontFamily: "lunar" }}
                onClick={() => handleKeyClick(key)}
              >
                {key === "Delete" ? "Del." : key === "Enter" ? "Ent." : key}
              </button>
            ))}
          </div>
        </div>

        {/* Play Again */}
        {playAgain && (
          <div className="h-[100vh] w-[100%] absolute gap-4 flex-col font-pressStart bg-white bg-opacity-20 backdrop-blur-lg flex justify-center items-center">
            <h1 className="text-7xl">
              {win ? (
                "You Won"
              ) : (
                <div className="text-4xl font-pressStart text-center">
                  Correct Number is {randomNum}
                </div>
              )}
            </h1>

            <button
              className="bg-blue-500 text-white font-pressStart h-[12vh] w-[40%] text-2xl rounded-2xl"
              onClick={resetGame}
            >
              Play Again
            </button>
          </div>
        )}

        {/* Instructions */}
        {instructions && (
          <div
            ref={ins}
            className="h-[200px] w-[90%] absolute z-50 top-[22vh] right-6 flex flex-col gap-3 p-5 rounded-lg shadow-2xl border-2 border-black bg-white bg-opacity-70 backdrop-blur-xl"
          >
            <h1 className="font-bold font-audiowide text-[23px]">
              Instructions
            </h1>
            <p className="font-bold font-orbitron text-sm text-black">
              1. Guess the 4 digit code.
            </p>
            <p className="font-bold font-orbitron text-sm text-black">
              2. Use the numbers to guess.
            </p>
            <p className="font-bold font-orbitron text-sm text-black">
              3. Press 'Del.' to delete and 'Ent.' to confirm your guess.
            </p>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Classic;
