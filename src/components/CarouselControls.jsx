import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CarouselControls = ({ handlePrevClick, handleNextClick }) => (
  <div className="flex justify-center gap-4">
    <button
      onClick={handlePrevClick}
      className="border border-white text-white p-2 rounded-full hover:opacity-60 duration-200 ease-in-out w-10 h-10 flex items-center justify-center">
      <FaChevronLeft size={20} />
    </button>
    <button
      onClick={handleNextClick}
      className="border border-white text-white p-2 rounded-full hover:opacity-60 duration-200 ease-in-out w-10 h-10 flex items-center justify-center">
      <FaChevronRight size={20} />
    </button>
  </div>
);

export default CarouselControls;
