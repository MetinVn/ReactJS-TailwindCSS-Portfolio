import React from 'react'
import ProjectItems from './ProjectItems'
import Recipe from "../images/RecipeApp.png"
import Todo from "../images/TodoApp.png"
import Password from "../images/Password.png"
import Movie from "../images/MovieApp.png"
import {BsFillCloudArrowDownFill} from "react-icons/bs"
import Pdf from "../images/Metin_Isakhanli.pdf"
const Projects = () => {

  return (
    <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
      <a href={Pdf} download="Metin_Isakhanli_Resume" className='w-[50%] mb-3 flex justify-center items-center rounded-full shadow-lg text-black bg-gray-100 shadow-gray-400 m-auto min-w-[150px] p-4 cursor-pointer hover:bg-gray-800 hover:scale-105 hover:text-white ease-in duration-200'>
        <div className='flex flex-col items-center text-center'>
          <span>Download Resume</span>
          <BsFillCloudArrowDownFill size={20}/>
        </div>
      </a>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>All projects are written in HTML,CSS and JavaScript</p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItems img={Recipe} title="Recipe App" link={"https://github.com/MetinIsakhanli/Recipe-App"}/>
            <ProjectItems img={Todo} title="Todo App" link={"https://github.com/MetinIsakhanli/TodoApp-Firebase-ReactJS"}/>
            <ProjectItems img={Password} title="Password App" link={"https://github.com/MetinIsakhanli/Password-Generator"}/>
            <ProjectItems img={Movie} title="Movie App" link={"https://github.com/MetinIsakhanli/Movie-App"}/>
        </div>
    </div>
  )
}

export default Projects