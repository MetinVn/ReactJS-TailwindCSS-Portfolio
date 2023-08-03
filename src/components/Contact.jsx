import React from "react";
import Tailwind from "../images/tailwind-css.svg";
import ReactSVG from "../images/react.svg";
const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 px-4 py-16">
      <div className="min-w-[150px] flex flex-col justify-between">
        <div className="flex flex-col">
          <h1 className="py-4 text-sm font-bold text-[#2a9d8f]">
            Get in Touch
          </h1>
          <p className="text-2xl md:text-4xl text-[#2a9d8f]">
            Do you think i am a good candidate for your company? Contact Me!
          </p>
        </div>
        <div className="text-[#2a9d8f] flex flex-col gap-2 w-full p-1 md:p-10">
          <div className="flex flex-col sm:flex-row gap-2">
            <span className="hover:bg-white hover:text-[#1b1b1b] ease-in duration-200 cursor-pointer  text-sm md:text-lg p-2 mx-auto w-full text-center">
              misaxanli@gmail.com
            </span>
            <span className="hover:bg-white hover:text-[#1b1b1b] ease-in duration-200 cursor-pointer  text-sm md:text-lg p-2 mx-auto w-full text-center">
              +994557615069
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="https://www.linkedin.com/in/metin-isakhanli-217374266/"
              target="_blank"
              className="hover:bg-blue-500 hover:text-white ease-in duration-200 cursor-pointer text-sm md:text-lg p-2 mx-auto w-full text-center border-[1px] rounded-full"
            >
              linkedin
            </a>
            <a
              href="https://github.com/MetinIsakhanli"
              target="_blank"
              className="hover:bg-gray-700 hover:text-gray-300 ease-in duration-200 cursor-pointer text-sm md:text-lg p-2 mx-auto w-full text-center border-[1px] rounded-full "
            >
              github
            </a>
          </div>
        </div>
      </div>
      <div className="m-auto bg-gray-800 w-full p-3 rounded-sm">
        <h6 className="flex flex-row justify-center items-center text-white">
          Website created with :
          <a href="https://react.dev" target="_blank">
            <img className="h-8 mx-1 sm:mx-3" src={ReactSVG} size={20} />
          </a>
          <a href="https://tailwindcss.com" target="_blank">
            <img className="h-8" src={Tailwind} size={20} />
          </a>
        </h6>
      </div>
    </div>
  );
};

export default Contact;
