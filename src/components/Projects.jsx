import React from "react";
import ProjectItems from "./ProjectItems";
import Skills from "./Skills";
import Recipe from "../images/RecipeApp.png";
import Todo from "../images/TodoApp.png";
import Auth from "../images/Auth.png";
import Movie from "../images/MovieApp.png";
import Html from "../images/html5.png";
import Css from "../images/css3.png";
import Firebase from "../images/firebase.png";
import Tailwind from "../images/tailwind.png";
import react from "../images/react.png";
import Javascript from "../images/javascript.png";
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import Pdf from "../images/Resume-Metin-Isakhanli.pdf";
const Projects = () => {
  return (
    <>
      <div className="absolute w-full h-16 bg-gradient-to-b from-purple-900 to-white"></div>
      <div id="projects" className="w-full">
        <div className="max-w-[1040px]  m-auto md:pl-20 p-4 py-16">
          <a
            id="skills"
            href={Pdf}
            download="Metin_Isakhanli_Resume"
            className="w-[50%] mb-3 flex justify-center items-center rounded-full shadow-lg text-black bg-gray-100 m-auto min-w-[150px] p-4 cursor-pointer hover:bg-gray-800 hover:scale-105 hover:text-white ease-in duration-200"
          >
            <div className="flex flex-col items-center text-center">
              <span>Download Resume</span>
              <BsFillCloudArrowDownFill size={20} />
            </div>
          </a>
          <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8">
            Projects
          </h1>
          <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItems
              img={Recipe}
              title="Recipe App"
              link={"https://github.com/MetinIsakhanli/Recipe-App"}
            />
            <ProjectItems
              img={Todo}
              title="Todo App"
              link={
                "https://github.com/MetinIsakhanli/TodoApp-Firebase-ReactJS"
              }
            />
            <ProjectItems
              img={Auth}
              title="Authentication"
              link={"https://github.com/MetinVn/User-Atuh-Firebase-ReactJS"}
            />
            <ProjectItems
              img={Movie}
              title="Movie App"
              link={"https://github.com/MetinIsakhanli/Movie-App"}
            />
          </div>
          <p className="text-xl font-bold text-center text-[#001b5e] mt-8 py-8">
            Skills i used to create these websites:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
            <Skills img={Html} skill={"Html"} />
            <Skills img={Css} skill={"Css"} />
            <Skills img={Javascript} skill={"JavaScript"} />
            <Skills img={react} skill={"ReactJS"} />
            <Skills img={Tailwind} skill={"Tailwind"} />
            <Skills img={Firebase} skill={"Firebase"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
