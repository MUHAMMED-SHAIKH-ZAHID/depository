import React from 'react'
import Index1 from './firstsheet/Index1'
import Navbar from './firstsheet/Navbar'
import SecondIndex from './secondsheet/SecondIndex'
import Socialmedia from './secondsheet/Socialmedia'
import Footer from './lastsheet/Footer'



const Main = () => {
  return (
    <div>
       <Navbar />
       <Index1 />
       <Socialmedia />
       <SecondIndex />
      <Footer />

    </div>
  )
}

export default Main