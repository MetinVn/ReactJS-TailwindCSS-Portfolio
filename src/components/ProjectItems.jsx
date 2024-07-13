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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(Array(img.length).fill(false));

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? img.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === img.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleImageLoad = (index) => {
    setImageLoaded((prevLoaded) => {
      const newLoaded = [...prevLoaded];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  return (
    <div className="bg-white overflow-hidden border rounded-lg border-transparent hover:border-[#008080] relative">
      <div className="relative" style={{ paddingBottom: "56.25%" }}>
        {blurImg.map((blurImage, index) => (
          <img
            key={`blur-${index}`}
            src={blurImage}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{
              filter: "blur(10px)",
              opacity: currentIndex === index && !imageLoaded[index] ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        ))}
        {img.map((image, index) => (
          <img
            key={`img-${index}`}
            src={image}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-contain"
            style={{
              opacity: currentIndex === index && imageLoaded[index] ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
            onLoad={() => handleImageLoad(index)}
          />
        ))}
      </div>

      <div className="p-4 flex flex-col items-start">
        <h3 className="text-xl font-bold mb-2 text-[#9966CC]">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-sm  mb-4 text-[#008080]">{techStack}</p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          {linkProject && (
            <a
              href={linkProject}
              className=" inline-block text-xs sm:text-base px-2 py-1 md:px-4 md:py-2 bg-[#9966CC] text-white hover:bg-[#008080] transition duration-300 ease-in-out rounded"
              target="_blank"
              rel="noopener noreferrer">
              Live Project
            </a>
          )}
          {linkSource && (
            <a
              href={linkSource}
              className="inline-block text-xs sm:text-base px-2 py-1 md:px-4 md:py-2 border border-[#9966CC] rounded hover:border-[#008080] transition duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer">
              Source Code
            </a>
          )}
          {(img.length > 1 || blurImg.length > 1) && (
            <div className="flex gap-4">
              <button
                onClick={handlePrevClick}
                className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white p-2 rounded-full shadow-md transition duration-300 ease-in-out w-10 h-10 flex items-center justify-center opacity-75">
                {"<"}
              </button>
              <button
                onClick={handleNextClick}
                className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white p-2 rounded-full shadow-md transition duration-300 ease-in-out w-10 h-10 flex items-center justify-center opacity-75">
                {">"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItems;
