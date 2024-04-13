import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();


  return (
    <div className='bg-white dark:bg-slate-950'>
      <div className='max-w-7xl w-screen justify-center text-black p-12 mx-auto'>
        <div className='grid lg:grid-cols-3'>
          <div>
            <h2 className='mt-3 text-red-500 text-2xl md:text-3xl lg:4xl font-semibold '>HELLO<span className='text-black dark:text-white'>CHEF.</span></h2>
            <p className='text-xl mt-4 dark:text-white'>Contact Us:</p>
            <ul className='mt-1 ml-4'>
              <li className='mt-1 cursor-pointer text-gray-500 hover:text-red-500 duration-300'><a target='_blank' href="mailto:thrhhrhrhehhehe@gmail.com">thrhhrhrhehhehe@gmail.com</a></li>
              <li className='mt-1 cursor-pointer text-gray-500 hover:text-red-500 duration-300'><a target='_blank' href="telto:+234 808 123 4567">+234 808 123 4567</a></li>
            </ul>
            <div className='text-gray-600 mt-6 flex justify-start gap-3'>
              <a href="#" className='hover:text-red-500 duration-300'>
                <FaLinkedin size={25} />
              </a>
              <a href="#" className='hover:text-red-500 duration-300'>
                <FaTwitter size={25} />
              </a>
              <a href="#" className='hover:text-red-500 duration-300'>
                <FaGithub size={25} />
              </a>
            </div>
          </div>
          <div className='col-span-2 grid sm:grid-cols-3 mt-14 lg:mt-5 '>
            <div className='mt-14 sm:mt-0 justify-center text-center'>
              <h3 className='text-[16px] dark:text-white mb-3'>About Us:</h3>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >Our Plans</a>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >How it Works</a>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >Our Plans</a>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >How it Works</a>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >Our Plans</a>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >How it Works</a>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >Our Plans</a>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >How it Works</a>
            </div>
            <div className='mt-14 sm:mt-0 justify-center text-center'>
              <h3 className='text-[16px] mb-3 dark:text-white'>More Info:</h3>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >Our Plans</a>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >How it Works</a>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >Our Plans</a>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >How it Works</a>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >Our Plans</a>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >How it Works</a>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >Our Plans</a>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >How it Works</a>
            </div>
            <div className='mt-14 sm:mt-0 justify-center text-center'>
              <h3 className='text-[16px] mb-3 dark:text-white'>Our Blog:</h3>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >Our Plans</a>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >How it Works</a>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >Our Plans</a>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >How it Works</a>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >Our Plans</a>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >How it Works</a>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >Our Plans</a>
              <a href="" className='block text-sm dark:text-white hover:underline hover:text-red-600 duration-300' >How it Works</a>
            </div>
          </div>
        </div>
        <hr className='border-none mt-12 bg-black w-[100%] dark:bg-white h-[1px]' />
        <div className=''>
          <p className='dark:text-white text-right'>Made with ❤️ for UAE</p>
          <p className='dark:text-white text-center'>Copyright&copy; {year} | All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer