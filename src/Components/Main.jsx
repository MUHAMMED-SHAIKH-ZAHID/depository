import React from 'react'

import './main.css'
import Social from './Social'
import Data from './Data'
import Stack from './Stack'

const Main = () => {
  return (
    <div>
        <div className="text-black grid py-6 pb-2  ">
          <div className=" grid gap-y-6  gap-1.5">
            
            <div className="grid lg:grid-cols-[116px_1fr_1fr] grid-cols-[20px_1fr]  gap-x-2 pt-[5.5rem] items-center">
             <div className="">
               <Social />
              </div>  
                <div className="  home__img order-2">
                </div>
                <div className="lg:order-1 order-2 col-start-1  col-end-3 lg:col-auto  ">    <Data /></div>
                
            </div>
           
            </div>
                <Stack />
        </div>
    </div>
  )
}

export default Main