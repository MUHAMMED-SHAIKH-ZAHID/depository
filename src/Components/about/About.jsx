import React, { useState } from 'react'
import './about.css'
import google from '../../Images/About/Google.svg'
import jwt from '../../Images/About/jwt.svg'
import socketio from '../../Images/About/socketio.svg'
import twilio from '../../Images/About/twilio.png'
import shaikhimg from '../../Images/shaikh.png'

const About = () => {
    const API = [
        {src:google,title:"Google Auth -",description:"us" },
        {src:jwt,title:"JWT -",description:"json web T" },
        {src:socketio,title:"Socket.io -",description:"Real " },
        {src:twilio,title:"Twilio - ",description:" for mes" }
    ]
    
      const [password, setPassword] = useState('');
      const [showPassword, setShowPassword] = useState(false);
    
      const toggleVisibility = () => {
        setShowPassword(!showPassword);
      }

  return (
    <div className='md:h-screen' id='about'>
      <div className="grid md:grid-cols-[1fr,2fr]">
      <div className="grid grid-rows-[2fr,8fr] md:h-screen ">
        <div className=""></div>
        <div className="p-2 flex mb-4">

        <div className="p-3 border-2 container  ">
          <div className="bg-zinc-100 h-full grid  front  "> 
          <div className="flex justify-around items-center">
            <div className="font-semibold text-xl" draggable="true">Portfolio</div>
          </div>
          
          </div>
        </div>
        </div>
          
      </div>
      <div className="second-col  " >
       <div className=" md:h-full w-full md:py-20 py-5 pl-5 md:pl-20">
        <div className="grid sm:grid-cols-[3fr,2fr] grid-cols-[6fr,8rem] w-full   h-full 
        ">
          
            <div className="flex  border-r-2 relative firstpage border border-s-4  ">
            <div className="absolute bottom-[.3rem] w-[90%]   block right-[1rem] custom-shadow"></div>
            <div className="absolute top-[-2rem] w-[98%]   block right-0 custom-shadow"></div>
            <div className=" ">
                <div className="flex justify-between tiny p-2">
                    <div className="">shaikh zahid</div>
                    <div className="">About</div>
                    <div className="">2023</div>
                </div>
                <div className="md:px-16 px-4 pt-8 md:pt-20 items-center md:text-base small font-bold md:py-10 py-5">
                    <div className="">something</div>
                    <div className="">About me</div>
                </div>
                <div className="flex md:px-16 px-5 ">
                    <div className="flex">

                    <div className="font-bold md:text-2xl text-lg pr-2  ">#1.</div>
                <div className="md:small smaller">I am Muhammed Shaikh Zahid a self-taught mern stack developer who is more passionate about UI/UX and cretes fully responsive websites</div>
                    </div>
                    
                </div>
                <div className="flex md:px-16 px-5 pt-3">
                    <div className="font-bold md:text-2xl text-lgmd:text-2xl text-lg pr-2  ">02.</div>
                <div className="md:small smaller">In addition to my professional pursuits, I also have a love for traveling and photography</div>
                    </div>
                <div className="flex md:px-16 px-5 pt-3 pb-[3rem]">
                    <div className="font-bold md:text-2xl text-lg pr-2  ">03.</div>
                <div className="md:small smaller">I am always experimenting with new technologies and design trends, as well as finding inspiration on User Experience. </div>
                    </div>
                    <div className="absolute tiny bottom-0 p-4">02</div>


            </div>
           </div>
            <div className="border-t-2 border-b-2 secondpage relative">
            <div className="absolute bottom-[.3rem] w-[70%]   block left-[1rem] custom-shadow"></div>
            <div className="absolute top-[-2rem] w-[40%]   block left-[1rem] custom-shadow"></div>
            <div className="">
            <div className="flex justify-between tiny p-2">
                    <div className="">shaikh zahid</div>
                    <div className="">About</div>
                </div>
                <div className="md:pl-20 pl-5 pt-10 md:pt-20 md:pb-14 pb-2 font-bold small md:text-base">API That impleme</div>
              {API.map((item)=>(
                <>
                <div className="md:pl-20 pl-7 md:pt-5 pt-4 flex small  items-center  ">
                    <img src={item.src} className='md:w-12 md:h-12 w-5 h-5 md:mr-1 mr-2 hover:zoom' alt="" />
                    <span className='md:font-bold font-semibold md:small smaller'>{item.title} </span> <span className='sevenpx md:small'>{item.description}</span>
                    <div className=""></div>
                    
                </div>
                </>
              ))}
               
            </div>
            </div>
        </div>
       </div>
      </div>
      </div>
    </div>
  )
}

export default About