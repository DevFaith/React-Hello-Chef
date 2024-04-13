import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SalmonKatsu from '../assets/images/salmon_katsu.webp'
import { useEffect } from 'react'

const HelloChef = () => {
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
    <div className='bg-[#06FAFA] text-black mx-auto'>
      <div className='max-w-7xl p-12'>
        <h2 className='text-2xl md:text-3xl lg:text-5xl text-center text-black'>Hello Chef</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-8'>
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
          transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src={SalmonKatsu} alt="" className='rounded-lg' />
          </motion.div>
          <motion.div
          ref={ref1}
          initial='hidden'
          animate={controls1}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.4 }}
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
        <h2 className='text-2xl md:text-3xl lg:text-5xl text-center text-black'>Over 3 million meals Cooked and loved by our customers</h2>
      </div>
    </div>
  )
}

export default HelloChef