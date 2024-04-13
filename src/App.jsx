import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import HowWorks from './components/HowWorks'
import Ready from './components/Ready'
import HelloChef from './components/HelloChef'
import Newsletter from './components/Newsletter'
import PreFooter from './components/PreFooter'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='font-outfit'>
      <Header />
      <Hero />
      <WhyUs />
      <HowWorks />
      <Ready />
      <HelloChef />
      <PreFooter />
      <Footer />
    </div>
  )
}

export default App