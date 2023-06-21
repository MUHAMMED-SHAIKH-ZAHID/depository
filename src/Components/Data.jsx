import React from 'react'
import { gsap } from 'gsap'


import Wave from '../Images/Waving Hand Sign Emoji.png'
import {FiSend} from 'react-icons/fi'

const Data = () => {
  return (
    <div>
        <div className=" ">
                <div className="lg:font-semibold lg:pt-0 pt-10 font-custom text-5xl text-gray-800 flex">Shaikh Zahid&nbsp;
                <img src={Wave} alt='handwave' className='h-10 w-10 ' />
                </div>
                <div className="text-xl flex text-center py-4 "><hr className='border border-gray-400  my-4 w-[65px] mr-3' />  Web developer</div>
                <div className="text-gray-500  text-[17px]">I'm creative developer based in Calicut , and I'm very passionate and dedicated to my work.</div>
                <div className='flex pt-8'>
                  <div className="bg-gray-800 p-5 px-8 font-medium rounded-xl flex   text-white">Say Hello 
                  <div className="pl-2 p-1"><FiSend /></div>
               </div>
                </div>
            </div>
    </div>
  )
}

export default Data