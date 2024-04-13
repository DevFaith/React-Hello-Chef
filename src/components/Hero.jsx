import React from 'react'
import Banner from '../assets/images/banner.webp'

const Hero = () => {
  return (
    <div className='mx-auto bg-white dark:bg-slate-950 pt-[70px]' >
      <div className='w-screen h-full min-h-screen relative'>
        <img src={Banner} alt="" className='object-cover h-screen dark:opacity-50 -z-10' />
        <div className='absolute w-full top-0 left-0 flex justify-center flex-col mx-auto px-12 mt-44'>
          <p className='text-2xl block w-full md:text-4xl lg:text-6xl mx-auto text-center'>Say Hello To a New Way of Cooking</p>
          <p className='md:text-2xl block w-full mx-auto text-center text-gray-500 mt-16 dark:text-gray-400'>Delicious recipes. Delivered by us, made by you. Ready to unbox mealtime?</p>
          <button className='mt-16 bg-red-500 text-black block mx-auto w-fit px-16 py-3 dark:text-white dark:hover:text-black rounded-3xl hover:text-white hover:scale-105 duration-200'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Hero