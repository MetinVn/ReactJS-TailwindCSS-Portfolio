import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import hero from '../images/hero.png'
const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-center"
        src={hero}
        alt="Image"
      />
      <div className="w-full h-screen absolute top-0 left-0 text-white">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center lg:items-start">
          <h1 className="sm:text-5xl text-4xl font-bold text-[#9d4edd]">I'm Metin</h1>
          <h2 className="flex text-[#9d4edd] sm:text-3xl text-2xl pt-4 first-line:">
            I'm a
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
                color:"#9d4edd",
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-center pt-6 max-w-[200px] w-full">
            <a href="https://github.com/MetinVn" target="_blank">
              <FaGithub
                className="p-1 mr-1 cursor-pointer hover:bg-gray-700 ease-in-out duration-300 rounded-sm"
                size={35}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/metin-isakhanli-217374266"
              target="_blank"
            >
              {" "}
              <FaLinkedinIn
                className="p-1 cursor-pointer hover:bg-blue-600 ease-in-out duration-300 rounded-sm"
                size={35}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
