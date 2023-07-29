import React from "react";

const Skills = ({ img, title, skill }) => {
  return (
    <div className="relative flex flex-row items-center justify-between cursor-pointer min-w-[200px] md:w-[300px] w-full mx-auto scale-1 shadow-xl hover:scale-[110%] duration-500 shadow-gray-400 rounded-xl p-5 px-7">
      <img src={img} alt={title} className="h-12 sm:h-16" />
      <span className="font-bold text-lg ">{skill}</span>
    </div>
  );
};

export default Skills;
