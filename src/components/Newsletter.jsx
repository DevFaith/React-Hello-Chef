import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-transparent mx-auto'>
      <div className='max-w-7xl grid md:grid-cols-3 gap-8 p-12 mt-14'>
        <div className='md:col-span-2'>
          <h2 className='text-black text-2xl md:text-3xl lg:text-5xl'>Hungry for more?</h2>
          <p className='mt-3 text-xl'>Sign up to our newsletter for exciting updates and weekly recipe inspiration, delivered straight to your inbox.</p>
        </div>
        <div>
          <input type="email" className='mt-6 md:mt-0 bg-transparent block outline-none border border-solid placeholder:text-black border-black w-72 h-9 pl-2 focus:pl-6 focus:border-red-500 duration-200' placeholder='Email' />
          <button className='h-9 px-12 bg-red-500 text-black w-72 mt-2'>Subscribe</button>
      
        </div>
      </div>
    </div>
  )
}

export default Newsletter