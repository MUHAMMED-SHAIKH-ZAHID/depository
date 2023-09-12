import React from 'react'
import Index1 from './firstsheet/Index1'
import Navbar from './firstsheet/Navbar'
import SecondIndex from './secondsheet/SecondIndex'
import TestingComponent from './TestingComponent'
import Test2 from './Test2'
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
       {/* <TestingComponent />   */}
       {/* <Test2 />  */}
    </div>
  )
}

export default Main