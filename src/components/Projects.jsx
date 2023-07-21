import React from 'react'
import ProjectItems from './ProjectItems'
import Recipe from "../images/RecipeApp.png"
import Todo from "../images/TodoApp.png"
import Password from "../images/Password.png"
import Movie from "../images/MovieApp.png"
const Projects = () => {
  return (
    <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>All projects are written in HTML,CSS and JavaScript</p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItems img={Recipe} title="Recipe App" link={"https://github.com/MetinIsakhanli/Recipe-App"}/>
            <ProjectItems img={Todo} title="Todo App" link={"https://github.com/MetinIsakhanli/Todo-App"}/>
            <ProjectItems img={Password} title="Password App" link={"https://github.com/MetinIsakhanli/Password-Generator"}/>
            <ProjectItems img={Movie} title="Movie App" link={"https://github.com/MetinIsakhanli/Movie-App"}/>
        </div>
    </div>
  )
}

export default Projects