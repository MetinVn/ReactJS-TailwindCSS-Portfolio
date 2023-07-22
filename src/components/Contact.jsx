import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 min-h-[550px]'>
        <div className='min-w-[150px] h-[100%] p-5 flex flex-col justify-between'>
            <div className='flex flex-col'>
                <h1 className='py-4 text-sm font-bold text-[#2a9d8f]'>Get in Touch</h1>
                <p className='text-2xl md:text-4xl text-[#2a9d8f]'>Do you think i am a good candidate for your company? Contact Me!</p>
            </div>
            <div className='text-[#2a9d8f] flex flex-col gap-2 w-full p-1 md:p-10'>
                <div className='flex flex-col sm:flex-row gap-2'>
                    <span className='hover:bg-white hover:text-[#1b1b1b] ease-in duration-200 cursor-pointer  text-sm md:text-lg p-2 mx-auto w-full text-center'>misaxanli@gmail.com</span>
                    <span className='hover:bg-white hover:text-[#1b1b1b] ease-in duration-200 cursor-pointer  text-sm md:text-lg p-2 mx-auto w-full text-center'>+994557615069</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <a href='https://www.linkedin.com/in/metin-isakhanli-217374266/' target='_blank' className='hover:bg-blue-500 hover:text-white ease-in duration-200 cursor-pointer text-sm md:text-lg p-2 mx-auto w-full text-center border-[1px] rounded-full'>linkedin</a>
                    <a href='https://github.com/MetinIsakhanli' target='_blank' className='hover:bg-gray-700 hover:text-gray-300 ease-in duration-200 cursor-pointer text-sm md:text-lg p-2 mx-auto w-full text-center border-[1px] rounded-full '>github</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact