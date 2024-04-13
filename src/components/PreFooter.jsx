import React from 'react'
import PicBig from '../assets/images/image.png'
import Newsletter from './Newsletter'

const PreFooter = () => {
  return (
    <div className='bg-[#FFF4EB] mx-auto'>
      <div className='w-screen pb-36 min-h-screen relative max-w-7xl'>
        <img src={PicBig} alt="" className='object-cover h-full min-h-screen -z-10' />
        <div className='absolute top-0 h-fit left-0'>
          <Newsletter />
          <p className='px-12 mt-12 md:text-2xl text-center'>We are a weekly meal subscription service based in Dubai, delivering pre-portioned ingredients and easy-to-follow
recipe cards across the UAE. Our healthy meal delivery service means you can say goodbye to stressful meal planning
and instead, spend time enjoying delicious food with loved ones. Our pre-measured, ready-to-cook boxes make it easier
than ever for you to discover new flavours every week.</p>

        </div>
      </div>
    </div>
  )
}

export default PreFooter