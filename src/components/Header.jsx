import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [nav, setNav] = useState(false);
  

  return (
    <div className='bg-gray-300 mx-auto overflow-hidden z-20 fixed w-full'>
      <div className='max-w-7xl flex justify-between h-[70px]'>

        <h1 className='pl-6 mt-3 text-red-500 text-2xl md:text-3xl lg:4xl font-semibold '>HELLO<span className='text-black'>CHEF.</span></h1>

        <ul className='hidden md:flex flex-row justify-between gap-6 pr-6'>
          <li className='mt-5 cursor-pointer hover:scale-105 duration-300'>Our Plans</li>
          <li className='mt-5 cursor-pointer hover:scale-105 duration-300'>Weekly Menu</li>
          <li className='mt-5 cursor-pointer hover:scale-105 duration-300'>How It Works</li>
          <li className='mt-4 cursor-pointer hover:text-black duration-300 bg-red-600 h-[34px] text-white py-1 px-6 rounded-lg'>Sign Up</li>
        </ul>

        { nav && (
          <ul className='md:hidden block px-10 z-30 bg-gray-300 absolute right-0 p-0 h-screen w-full flex-cols justify-between gap-6'>

            <div className='md:hidden ml-[96%] pr-6' onClick={() => setNav(!nav)}>
              { !nav ? <FaBars className='cursor-pointer mt-[18px]' size={30} /> : <FaTimes className='cursor-pointer mt-[18px]' size={30} /> }
            </div>

            <li className='block text-center mx-auto mt-16 cursor-pointer hover:scale-105 duration-300'>Our Plans</li>
            <li className='block text-center mx-auto mt-5 cursor-pointer hover:scale-105 duration-300'>Weekly Menu</li>
            <li className='block text-center mx-auto mt-5 cursor-pointer hover:scale-105 duration-300'>How It Works</li>
            <li className='block text-center mx-auto mt-4 cursor-pointer hover:text-black duration-300 bg-red-600 h-[34px] text-white py-1 px-6 rounded-lg'>Sign Up</li>
          </ul>
        )}

        <div className='md:hidden pr-6' onClick={() => setNav(!nav)}>
          { !nav ? <FaBars className='cursor-pointer mt-[18px]' size={30} /> : <FaTimes className='cursor-pointer mt-[18px]' size={30} /> }
        </div>

      </div>
    </div>
  )
}

export default Header