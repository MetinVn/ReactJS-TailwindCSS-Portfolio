import React, { useState } from "react";
import ImageLoader from "./ImageLoader";
import CarouselControls from "./CarouselControls";

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
      <ImageLoader
        blurImg={blurImg}
        title={title}
        handleImageLoad={handleImageLoad}
        currentIndex={currentIndex}
        imageLoaded={imageLoaded}
        img={img}
      />

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
            <CarouselControls
              handleNextClick={handleNextClick}
              handlePrevClick={handlePrevClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItems;
