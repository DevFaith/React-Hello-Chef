import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SalmonKatsu from '../assets/images/salmon_katsu.webp'
import { useEffect } from 'react'

const Ready = () => {
  const controls1 = useAnimation();

  const [ref1, inView1] = useInView();

  const variants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: 50, opacity: 0 }
  };

  useEffect(() => {
    if (inView1) {
      controls1.start('visible');
    } else {
      controls1.start('hidden');
    }
  }, [inView1, controls1]);


  return (
    <div className='bg-white mx-auto'>
      <div className='max-w-7xl p-12 mx-auto'>
        <h2 className='text-2xl md:text-3xl lg:text-5xl text-center text-black'>Ready to cook healthy and inspiring meals?</h2>
        <p className='text-gray-500 mt-9 text-center'>Choose from 24+ recipes every week - from light, low-calorie dishes to hearty, family favourites. Look out for our handy recipe tags to make choosing even simpler.</p>
        <div className='grid md:grid-cols-3 gap-2 mt-5 mx-auto '>
          <motion.div
          ref={ref1}
          initial='hidden'
          animate={controls1}
          variants={variants}
          transition={{ duration: 0.5, delay: 0 }}
          >
            <img src={SalmonKatsu} alt="" className='rounded-lg' />
          </motion.div>
          <motion.div
          ref={ref1}
          initial='hidden'
          animate={controls1}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src={SalmonKatsu} alt="" className='rounded-lg' />
          </motion.div>
          <motion.div
          ref={ref1}
          initial='hidden'
          animate={controls1}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img src={SalmonKatsu} alt="" className='rounded-lg' />
          </motion.div>
        </div>
        <button className='py-4 px-14 bg-red-500 text-black rounded-3xl mt-3 block mx-auto text-xl'>View Menu</button>
      </div>

    </div>
  )
}

export default Ready