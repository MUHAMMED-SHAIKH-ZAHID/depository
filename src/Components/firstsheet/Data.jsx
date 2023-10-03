import React from 'react'
import Wave from '../../Images/Waving Hand Sign Emoji.png'
import Name from './Name'



const Data = () => {

  return (
    <div>
        <div className=" ">
          <div className="grid grid-cols-[8fr,1fr]">

                <div className=" lg:pt-0 pt-10 text-3xl md:text-5xl text-gray-800 flex">  <Name />
               
                </div>
                <div className=""> <img src={Wave} alt='handwave' className='h-10 w-10 ' /></div>
          </div>
                <div className="text-xl flex text-center py-4 "><hr className='border border-gray-400  my-4 w-[65px] mr-3' />  Web developer</div>
                <span className='text-blue-400'>console</span>. <span className='text-yellow-400'>log</span> <span className='text-purple-500'>{'('}</span> <span className='text-purple-500'>{')'}</span>
                <div className="text-gray-500  text-[17px]">I'm creative developer based in Kerala , and I'm very passionate and Enjoy playing with UI , I Create fully responsive Websites</div>
                {/* <div className='flex pt-8'>
                  <div className="bg-gray-800 p-5 px-8 font-medium rounded-xl flex   text-white">Say Hello 
                  <div className="pl-2 p-1"><FiSend /></div>
               </div>
                </div> */}
            </div>
    </div>
  )
}

export default Data