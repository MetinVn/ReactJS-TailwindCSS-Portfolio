import React from "react";

const ProjectItems = ({ img, title, link }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img
        src={img}
        alt={title}
        className="rounded-xl group-hover:opacity-10 ease-in-out duration-300"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-md md:text-2xl font-bold text-white text-center mb-[10px]">
          {title}
        </h3>
        <a href={link} target="_blank">
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-sm hover:bg-white/50 hover:text-white ease-in-out duration-200">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItems;
