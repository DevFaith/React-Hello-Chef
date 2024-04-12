import React from 'react'
import Banner from '../assets/images/banner.webp'

const Hero = () => {
  return (
    <div className='mx-auto bg-gradient-to-b pt-[70px] from-gray-300 to-white via-white overflow-hidden' >
      <div className='w-screen h-screen min-h-screen relative'>
        <img src={Banner} alt="" />
        <div className='absolute top-0 left-0 z-10'>
          trhhhrhr
        </div>

      </div>
    </div>
  )
}

export default Hero