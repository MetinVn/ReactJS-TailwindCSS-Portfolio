import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineHome,AiOutlineProject,AiOutlineMail,AiOutlineClose} from "react-icons/ai"
const Sidenav = () => {
    const [nav,setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    } 
  return (
    <div>
        <AiOutlineMenu onClick={handleNav} size={30} className={nav?'fixed top-4 right-4 z-[99] md:hidden text-black  border-2 border-red-500 rounded-sm cursor-pointer':'fixed cursor-pointer top-4 right-4 z-[99] md:hidden text-[#ffba08] border-2 border-red-500 rounded-sm'}/>
        {
            nav?(
                <div className='fixed md:hidden translate-y-0 duration-400 w-full h-[40%] bg-white/80 flex flex-col justify-center items-center z-20'>
                    <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineHome size={20}/>
                        <span className='pl-4'>Home</span>
                    </a>
                    <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineProject size={20}/>
                        <span className='pl-4'>Projects</span>
                    </a>
                    <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineMail size={20}/>
                        <span className='pl-4'>Contact</span>
                    </a>
                </div>
            )
            : (<div className='fixed md:hidden translate-y-[-100%] ease-in-out duration-500 w-full h-[40%] bg-white/90 flex flex-col justify-center items-center z-20'>
                <h1>Closing...</h1>
                </div>
                )
        }

        <div className='md:block hidden fixed top-[25%] z-10 '>
            <div className='flex flex-col'>
                <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineHome size={20}/>
                </a>
                <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineProject size={20}/>
                </a>
                <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail size={20}/>
                </a>
            </div>
        </div>

    </div>
  )
}

export default Sidenav