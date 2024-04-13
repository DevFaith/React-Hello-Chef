import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'; // Import motion and useAnimation from Framer Motion
import { useInView } from 'react-intersection-observer'; // Import useInView from react-intersection-observer
import SalmonKatsu from '../assets/images/salmon_katsu.webp';

const WhyUs = () => {
  // Use useAnimation to control animations
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  // Use useInView to detect when the element is in view
  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();
  const { ref: ref3, inView: inView3 } = useInView();

  // Define the animation variants
  const variants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: 50, opacity: 0 }
  };


  // Trigger animations when element is in view
  useEffect(() => {
    if (inView1) {
      controls1.start('visible');
    } else {
      controls1.start('hidden');
    }
  }, [inView1, controls1]);

  useEffect(() => {
    if (inView2) {
      controls2.start('visible');
    } else {
      controls2.start('hidden');
    }
  }, [inView2, controls2]);

  useEffect(() => {
    if (inView3) {
      controls3.start('visible');
    } else {
      controls3.start('hidden');
    }
  }, [inView3, controls3]);


  return (
    <div className='mx-auto bg-white dark:bg-slate-950'>
      <div className='max-w-7xl px-12'>
        <p className='text-xl pt-14 block w-full sm:text-2xl lg:text-4xl mx-auto dark:text-white text-center'>Why Choose Us?</p>
        <p className='md:text-2xl block w-full mx-auto text-center text-gray-500 mt-16'>Eat well for less with impressively easy meals starting from AED 35 per serving.</p>
        <div className='grid lg:grid-cols-3 justify-center mt-3 gap-4 mx-auto max-w-md min-w-full'>
          {/* Wrap each animated element with motion */}
          <motion.div
            ref={ref1}
            initial='hidden'
            animate={controls1}
            variants={variants}
            transition={{ duration: 0.5 }}
            className='lg:shadow-sm lg:shadow-gray-500 border-none rounded-lg mb-12 pb-10'>
            <img src={SalmonKatsu} alt="" className='object-cover rounded-lg' />
            <p className='text-center text-3xl dark:text-white'>Convenience</p>
            <ul className='list-disc ml-4 mt-3 px-2 dark:text-white'>
              <li className='list-disc ml-3'>Pre-measured ingredients & easy recipes</li>
              <li className='list-disc ml-3'>Contactless, doorstep delivery across UAE</li>
              <li className='list-disc ml-3'>Skip a delivery or cancel anytime</li>
            </ul>
          </motion.div>
          <motion.div
            ref={ref2}
            initial='hidden'
            animate={controls2}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='lg:shadow-sm lg:shadow-gray-500 border-none rounded-lg mb-12 pb-10'>
            <img src={SalmonKatsu} alt="" className='object-cover rounded-lg' />
            <p className='text-center text-3xl dark:text-white'>Variety</p>
            <ul className='list-disc ml-4 mt-3 px-2 dark:text-white'>
              <li className='list-disc ml-3'>New recipes every week</li>
              <li className='list-disc ml-3'>24+ dishes to choose from</li>
              <li className='list-disc ml-3'>Low-calorie & family-friendly option</li>
            </ul>
          </motion.div>
          <motion.div
            ref={ref3}
            initial='hidden'
            animate={controls3}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='lg:shadow-sm lg:shadow-gray-500 border-none rounded-lg mb-12 pb-10'>
            <img src={SalmonKatsu} alt="" className=' object-cover rounded-lg' />
            <p className='text-center text-3xl dark:text-white'>Deliciousness</p>
            <ul className='list-disc ml-4 mt-3 px-2 dark:text-white'>
              <li className='list-disc ml-3'>No skimpin' on the portion size!</li>
              <li className='list-disc ml-3'>100% satisfaction guarantee, or we will make it right</li>
              <li className='list-disc ml-3'>Fresh ingredients from local, trusted suppliers</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs;
