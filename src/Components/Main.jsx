import React from 'react'
import Index1 from './firstsheet/Index1'
import Navbar from './firstsheet/Navbar'
import Footer from './lastsheet/Footer'
import About from './about/About'
import Projects from './secondsheet/Projects'



const Main = () => {
  return (
    <div>
       <Navbar />
       <Index1 />
       <About />
       <Projects />
      <Footer />

    </div>
  )
}

export default Main