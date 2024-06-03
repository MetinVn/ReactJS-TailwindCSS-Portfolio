import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import hero from "../images/hero.png";
import heroBlur from "../images/reduced/hero.jpg";

const Main = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div>
      <img
        className={`w-full h-screen object-cover object-center ${
          imageLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
        src={heroBlur}
        alt="Image"
        style={{ filter: "blur(20px)" }}
      />
      <img
        className={`w-full h-screen object-cover object-center absolute top-0 left-0 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
        src={hero}
        alt="Image"
        onLoad={() => setImageLoaded(true)}
        style={{ filter: "blur(0px)" }}
      />
      {!imageLoaded && (
        <div className="flex items-center justify-center h-screen">
          <div className="flex items-center justify-center">
            <svg
              className="animate-pulse h-12 w-12 text-black mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <p className="text-black">Loading...</p>
          </div>
        </div>
      )}
      {imageLoaded && (
        <div className="w-full h-screen absolute top-0 left-0 text-white">
          <div className="max-w-[1400px] m-auto h-full w-full flex flex-col justify-center items-center lg:items-start">
            <h1 className="sm:text-5xl text-4xl font-bold text-white">
              {`I'm Metin`}
            </h1>
            <h2 className="flex text-white sm:text-3xl text-2xl pt-4 first-line:">
              {`I'm a`}
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Coder",
                  2000,
                  "Tech Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  color: "#9966CC",
                  fontSize: "1em",
                  display: "inline-block",
                  paddingLeft: "5px",
                }}
                repeat={Infinity}
              />
            </h2>
            <div className="flex justify-center pt-6 max-w-[200px] w-full">
              <a
                href="https://github.com/MetinVn"
                target="_blank"
                rel="noreferrer">
                <FaGithub
                  className="p-1 mr-1 cursor-pointer hover:bg-gray-700 ease-in-out duration-300 rounded-sm"
                  size={35}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/metin-isakhanli-217374266"
                target="_blank"
                rel="noreferrer">
                <FaLinkedinIn
                  className="p-1 cursor-pointer hover:bg-blue-600 ease-in-out duration-300 rounded-sm"
                  size={35}
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
