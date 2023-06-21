import React from 'react'
import {RxInstagramLogo} from 'react-icons/rx'
import {RiDribbbleFill} from 'react-icons/ri'
import {VscGithubAlt} from 'react-icons/vsc'
import Wave from '../Images/Waving Hand Sign Emoji.png'
import {FiSend} from 'react-icons/fi'
import './main.css'

const Main = () => {
  return (
    <div>
        <div className="text-black flex gap-20 lg:mt-20 ">
            <div className="icons gap-5 w-1/12 flex flex-col h-96 lg:mt-24 ">
                <a href="https://www.instagram.com/_shaikh_zahid/" ><RxInstagramLogo className='h-5 w-5'  /></a>  
                <RiDribbbleFill className='h-5 w-5' />
                <VscGithubAlt className='h-5 w-5' />
                
            </div>
            <div className=" w-6/12 mt-6">
                <div className="font-semibold font-custom text-5xl text-gray-800 flex">Shaikh Zahid&nbsp;
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
            <div className=" w-5/12 home__img">
          
            </div>
        </div>
    </div>
  )
}

export default Main