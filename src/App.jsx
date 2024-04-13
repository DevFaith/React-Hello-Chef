import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import HowWorks from './components/HowWorks'

const App = () => {
  return (
    <div className='font-outfit'>
      <Header />
      <Hero />
      <WhyUs />
      <HowWorks />
    </div>
  )
}

export default App