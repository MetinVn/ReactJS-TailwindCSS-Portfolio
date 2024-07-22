import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CarouselControls = ({ handlePrevClick, handleNextClick }) => (
  <div className="flex gap-4">
    <button
      onClick={handlePrevClick}
      className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white p-2 rounded-full shadow-md transition duration-300 ease-in-out w-10 h-10 flex items-center justify-center">
      <FaChevronLeft size={20} />
    </button>
    <button
      onClick={handleNextClick}
      className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white p-2 rounded-full shadow-md transition duration-300 ease-in-out w-10 h-10 flex items-center justify-center">
      <FaChevronRight size={20} />
    </button>
  </div>
);

export default CarouselControls;
