import React from 'react'
import {TypeAnimation} from "react-type-animation"
import { FaLinkedinIn,FaGithub } from 'react-icons/fa'
const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-center' src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1120&q=80" alt="Image" />
        <div className='w-full h-screen absolute top-0 left-0 text-white'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center lg:items-start'>
            <h1 className='sm:text-5xl text-4xl font-bold '>I'm Metin</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 first-line:'>I'm a
            <TypeAnimation
                sequence={[
                    'Developer',
                    2000, 
                    'Coder',
                    2000,
                    'Tech Enthusiast',
                    2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block',paddingLeft:'5px'}}
                repeat={Infinity}
                />
            </h2>
            <div className='flex justify-center pt-6 max-w-[200px] w-full'>
                <a href="https://github.com/MetinIsakhanli" target='_blank'><FaGithub className='p-1 mr-1 cursor-pointer hover:bg-gray-700 ease-in-out duration-300 rounded-sm' size={35}/></a>
               <a href="https://www.linkedin.com/in/metin-isakhanli-217374266" target='_blank'> <FaLinkedinIn className='p-1 cursor-pointer hover:bg-blue-600 ease-in-out duration-300 rounded-sm' size={35}/></a>
            </div>
        </div>
            </div>
    </div>
  )
}

export default Main