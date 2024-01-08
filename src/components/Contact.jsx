import React from "react";
import Tailwind from "../images/tailwind-css.svg";
import ReactSVG from "../images/react.svg";
import Right from "../images/right.svg";
const Contact = () => {
  return (
    <>
      <div className="max-w-[1040px] m-auto md:pl-20 px-4 my-20">
        <div className="min-w-[150px] p-10 flex flex-col justify-between border-2 rounded-lg bg-gray-800 border-green-400 mb-10 shadow-lg shadow-green-400">
          <div className="flex flex-col  rounded-xl cursor-default">
            <h1 className="py-4 text-sm font-bold text-[#bbdbfe]">
              Get in touch
            </h1>
            <p className="text-xl md:text-2xl text-[#bbdbfe]">
              Do you think i am a good candidate for your company? Contact me!
            </p>
          </div>
          <div className="text-[#bbdbfe] flex flex-col gap-2 w-full p-1 md:p-10 items-center max-w-[1000px]">
            <div className="flex flex-col sm:flex-row gap-2">
              <span className="border border-transparent hover:border-green-400  ease-in duration-200 rounded-md cursor-pointer  text-sm md:text-lg p-2 mx-auto w-full text-center">
                misaxanli@gmail.com
              </span>
              <span className="border border-transparent hover:border-green-400  ease-in duration-200 rounded-md cursor-pointer  text-sm md:text-lg p-2 mx-auto w-full text-center">
                +994557615069
              </span>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <a
                href="https://www.linkedin.com/in/metin-isakhanli-217374266/"
                target="_blank"
                className="bg-blue-500 flex flex-row items-center justify-start text-[#bbdbfe] hover:bg-transparent hover:text-blue-500 w-full md:max-w-[420px] ease-in duration-200 cursor-pointer text-sm md:text-lg p-2 mx-auto text-center border-[1px] border-blue-500 rounded-sm  group"
              >
                <img
                  src={Right}
                  className="h-5 -translate-x-1 group-hover:translate-x-0 duration-200"
                />
                linkedin
              </a>
              <a
                href="https://github.com/MetinVn"
                target="_blank"
                className="bg-gray-700 flex flex-row items-center justify-start text-[#bbdbfe] hover:bg-transparent hover:text-gray-400 md:max-w-[420px] ease-in duration-200 cursor-pointer text-sm md:text-lg p-2 mx-auto w-full text-center border-[1px] border-gray-700 rounded-sm  group"
              >
                <img
                  src={Right}
                  className="h-5 -translate-x-1 group-hover:translate-x-0 duration-200"
                />
                github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="max-w-[1040px] md:pl-20 m-auto px-4 my-20 "
      >
        <h6 className="min-w-[150px] text-xs sm:text-sm md:text-lg items-center p-6 flex flex-row justify-center text-[#bbdbfe] border-2 rounded-lg bg-gray-800 border-green-400 mb-10 shadow-lg shadow-green-400">
          Website created with :
          <a href="https://react.dev" target="_blank">
            <img className="h-8 mx-1 sm:mx-3" src={ReactSVG} size={20} />
          </a>
          <a href="https://tailwindcss.com" target="_blank">
            <img className="h-8" src={Tailwind} size={20} />
          </a>
        </h6>
      </div>
    </>
  );
};

export default Contact;
