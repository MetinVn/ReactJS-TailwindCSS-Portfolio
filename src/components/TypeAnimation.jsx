import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const TypeAnimations = () => (
  <div className="w-full h-full absolute top-0 left-0 text-white font-mono">
    <div className="max-w-[1400px] m-auto h-full w-full flex flex-col justify-center items-center ">
      <h1 className="sm:text-6xl text-4xl font-bold text-white">
        {`I'm `} <span className="text-blue-400">Metin</span>
      </h1>

      <div className="flex text-white sm:text-2xl md:text-3xl text-xl pt-4 text-center">
        <span className="opacity-50">I'm a</span>
        <TypeAnimation
          sequence={["Developer", 1500, "Learner", 1500, "Night Owl", 1500]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "1em",
            display: "inline-block",
            paddingLeft: "5px",
          }}
          repeat={0}
        />
      </div>
      <div className="flex justify-center pt-6 max-w-[200px] w-full">
        <a href="https://github.com/MetinVn" target="_blank" rel="noreferrer">
          <FaGithub
            className="p-1 mr-1 cursor-pointer hover:bg-gray-700 ease-in-out duration-300 rounded-sm"
            size={32}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/metin-isakhanli-217374266"
          target="_blank"
          rel="noreferrer">
          <FaLinkedinIn
            className="p-1 cursor-pointer hover:bg-blue-600 ease-in-out duration-300 rounded-sm"
            size={32}
          />
        </a>
      </div>
    </div>
  </div>
);

export default TypeAnimations;
