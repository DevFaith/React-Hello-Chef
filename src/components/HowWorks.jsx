import React, { useEffect } from 'react';
import Family from '../assets/images/Family_cooking.webp';
import { motion, useAnimation } from 'framer-motion'; // Import motion and useAnimation from Framer Motion
import { useInView } from 'react-intersection-observer';

const HowWorks = () => {
  // Use useAnimation to control animations
  const controls1 = useAnimation();

  // Use useInView to detect when the element is in view
  const [ref1, inView1] = useInView();

  // Define the animation variants
  const variants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 50, opacity: 0 }
  };

  // Trigger animations when element is in view
  useEffect(() => {
    if (inView1) {
      controls1.start('visible');
    } else {
      controls1.start('hidden');
    }
  }, [inView1, controls1]);

  return (
    <div className='mx-auto bg-white'>
      <div className='max-w-7xl px-12 grid lg:grid-cols-2 rounded-3lg pb-2'>
        <div>
          <img src={Family} alt="" className='' />
        </div>
        <motion.div
          ref={ref1}
          initial='hidden'
          animate={controls1}
          variants={variants}
          transition={{ duration: 0.5, delay: 1.0 }}
          className='bg-red-300 px-12 pt-8 py-auto'>
          <h2 className='text-4xl font-semibold text-red-700'>How it works</h2>
          <p className='text-gray-600 mt-3 text-xl'>Simplify home cooking in just 4 easy steps. Get quality ingredients & great recipes delivered to your door.</p>
          <ul className='mt-7'>
            <li className='ml-4 text-black'><span className='text-red-700 mr-2'>1.</span>Select Your Box</li>
            <li className='ml-4 text-black'><span className='text-red-700 mr-2'>2.</span>Choose your recipes</li>
            <li className='ml-4 text-black'><span className='text-red-700 mr-2'>3.</span>Receive your delivery</li>
            <li className='ml-4 text-black'><span className='text-red-700 mr-2'>4.</span>Cook,eat and enjoy!</li>
          </ul>
          <button className='bg-red-500 mb-10 lg:mb-0 mt-6 rounded-3xl text-black py-4 px-16 text-xl'>Learn More</button>
        </motion.div>
      </div>
    </div>
  )
}

export default HowWorks;
