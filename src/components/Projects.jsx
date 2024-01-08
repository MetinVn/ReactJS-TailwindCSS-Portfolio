import React from "react";
import ProjectItems from "./ProjectItems";
import Skills from "./Skills";
import Recipe from "../images/Recipe.png";
import Translator from "../images/Translator.png";
import Converter from "../images/YoutubeMP3Convert.png";
import Rock from "../images/RockPS.png";
import US from "../images/us.png";
import Movie from "../images/MovieApp.png";
import Html from "../images/html5.png";
import Css from "../images/css3.png";
import Nodejs from "../images/node-js.svg";
import Tailwind from "../images/tailwind.png";
import react from "../images/react.png";
import Javascript from "../images/javascript.png";
import { BsFillCloudArrowDownFill ,BsArrowUpRightCircle} from "react-icons/bs";
import Pdf from "../images/MyResume.pdf";
const Projects = () => {
  return (
    <>
      <div className="absolute w-full h-2 bg-gradient-to-b from-black/30 to-white"></div>
      <div className="w-full">
        <div className="max-w-[1040px]  m-auto md:pl-20 p-4 py-16">
          <a
            id="skills"
            href={Pdf}
            download="Metin_Isakhanli_Resume"
            className="w-[40%] mb-3 flex justify-center items-center rounded-full shadow-lg shadow-gray-400 text-black bg-[#bbdbfe] m-auto p-1 sm:py-4 cursor-pointer hover:bg-[#baebff] ease-in-out duration-200"
          >
            <div className="flex flex-col items-center text-center">
              <span className="text-black text-sm sm:text-lg whitespace-break-spaces">
                Download Resume
              </span>
              <BsFillCloudArrowDownFill size={20} />
            </div>
          </a>
          <h1
            id="projects"
            className="text-4xl font-bold text-center text-[#001b5e] mb-8"
          >
            Projects
          </h1>
          <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItems
              img={Recipe}
              title="Recipe App"
              link={"https://metinvn.github.io/Recipe-App/recipe.html"}
            />
            <ProjectItems
              img={Movie}
              title="Movie App"
              link={"https://metinvn.github.io/Movie-App/"}
            />
            <ProjectItems
              img={US}
              title="Statistics"
              link={"https://metinvn.github.io/Bireysel-Silahlanma/"}
            />
            <ProjectItems
              img={Rock}
              title="R.P.S Game"
              link={
                "https://metinvn.github.io/Rock-Paper-Scissor-Game/RockPaperScissor.html"
              }
            />
            <ProjectItems
              img={Converter}
              title="MP3 Converter"
              link={"https://metinvn.github.io/YotuTube-Convert2MP3/"}
            />
            <ProjectItems
              img={Translator}
              title="Translator"
              link={"https://metinvn.github.io/Translator/"}
            />
          </div>
          <div className="w-full flex justify-center mt-12">
              <a href="https://github.com/MetinVn?tab=repositories" target="_blank" className="w-full min-w-[130px] max-w-[350px] text-center justify-around flex-wrap rounded-xl bg-slate-800 text-slate-400 hover:shadow-inner hover:shadow-black flex flex-row py-4 px-3 md:py-10 md:px-5 duration-200">See my other projects on Github <BsArrowUpRightCircle size={20}/></a>
          </div>
          <p className="text-xl font-bold text-center text-[#001b5e] mt-8 py-8">
            Skills i used to create these websites:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
            <Skills img={Html} skill={"Html"} color={'text-[#ff3e00]'}/>
            <Skills img={Css} skill={"Css"} color={'text-[#39a0ed]'}/>
            <Skills img={Javascript} skill={"JavaScript"} color={'text-[#f7e018]'}/>
            <Skills img={react} skill={"ReactJS"} color={'text-[#48cae4]'}/>
            <Skills img={Tailwind} skill={"Tailwind"} color={'text-[#219ebc]'}/>
            <Skills img={Nodejs} skill={"NodeJS"} color={'text-[#72b01d]'}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
