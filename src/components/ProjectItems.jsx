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
  const [showMore, setShowMore] = useState(false);

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

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const CHARACTER_LIMIT = 150;

  return (
    <div className="flex flex-col w-full md:flex-row bg-black rounded-lg p-3">
      <div className="w-full mb-4 md:mb-0">
        <div className="relative w-full">
          <ImageLoader
            blurImg={blurImg}
            title={title}
            handleImageLoad={handleImageLoad}
            currentIndex={currentIndex}
            imageLoaded={imageLoaded}
            img={img}
          />
        </div>
        <div className="flex flex-col space-y-4 mt-4">
          {linkProject && (
            <a
              href={linkProject}
              className="text-sm w-full px-4 py-2 border border-white text-white hover:opacity-60 transition duration-200 ease-in-out rounded"
              target="_blank"
              rel="noopener noreferrer">
              Live Project
            </a>
          )}
          {linkSource && (
            <a
              href={linkSource}
              className="text-sm w-full px-4 py-2 bg-white text-black hover:opacity-60 transition duration-300 ease-in-out rounded"
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
      <div className="w-full md:w-2/3 lg:w-2/3 md:pl-6">
        <h3 className="text-2xl font-semibold mb-2 text-blue-400">{title}</h3>
        <p className="text-gray-300 mb-4">
          {showMore
            ? description
            : `${description.substring(0, CHARACTER_LIMIT)}...`}
          {description.length > CHARACTER_LIMIT && (
            <button
              onClick={toggleShowMore}
              className="text-blue-400 ml-2 hover:underline">
              {showMore ? "Read Less" : "Read More"}
            </button>
          )}
        </p>
        <p className="text-sm mb-4 text-yellow-400">{techStack}</p>
      </div>
    </div>
  );
};

export default ProjectItems;
