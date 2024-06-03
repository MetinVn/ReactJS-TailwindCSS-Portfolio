import React, { useState } from "react";

const ProjectItems = ({
  img,
  blurImg,
  title,
  linkProject,
  linkSource,
  description,
  techStack,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-white overflow-hidden border rounded-lg border-transparent hover:border-[#008080]">
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <img
          src={blurImg}
          alt={title}
          className="w-full h-full object-cover"
          style={{ filter: "blur(10px)", opacity: imageLoaded ? 0 : 1 }}
        />
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="p-4">
        <p className="text-xl font-semibold mb-2 text-[#9966CC]">{title}</p>
        <h1 className="text-[15px] leading-tight font-semibold mb-2 text-[#9966CC]">
          Technologies/Skills Used: {techStack}
        </h1>
        <h3 className="text-gray-700 mb-4 text-xs sm:text-sm">
          <span className="font-semibold text-xs text-[#9966CC]">
            Description:{" "}
          </span>
          {description}
        </h3>
        <div className="flex gap-1">
          <a
            href={linkProject || undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs sm:text-base px-2 py-1 md:px-4 md:py-2 bg-[#9966CC] text-white hover:bg-[#008080] transition duration-300 ease-in-out rounded">
            View Project
          </a>
          <a
            href={linkSource}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs sm:text-base px-2 py-1 md:px-4 md:py-2 border border-[#9966CC] rounded hover:border-[#008080] transition duration-300 ease-in-out">
            {"Source Code </>"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItems;
