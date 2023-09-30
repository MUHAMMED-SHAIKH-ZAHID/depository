import React from "react";
import "../secondsheet/secondindex.css";
import mac from "../../Images/Mac.png";
import blackwebsite from "../../Images/Black.jpg";
import blackstretch from "../../Images/blackstretch.mp4"
import { RiCodeSSlashFill } from "react-icons/ri";
import { BsLink } from "react-icons/bs";
import { FiInfo } from "react-icons/fi";
import Howerbtn from "../Howerbtn";
import bootstrap from '../../Images/svg/bootstrap.svg'
import node from '../../Images/svg/nodejs.svg'
import mongodb from '../../Images/svg/mongodb.png'
import hbs from '../../Images/svg/hbs.png'




const SecondIndex = () => {
  const blackclothing = [
    "B",
    "l",
    "a",
    "c",
    "k",
    " ",
    "C",
    "l",
    "o",
    "t",
    "h",
    "i",
    "n",
    "g",
  ];

  

  return (

        <div  className=" md:h-screen mt-10">

          <div className="grid lg:grid-cols-[1fr] gird-cols-1 pt-5  justify-center ">
           

            <div className="">
              <div className="relative">
                <img className="relative z-50" src={mac} alt="" />
                <video   autoPlay loop muted controls={false} className=" absolute rounded-3xl md:top-[-25px] sm:top[-20px] top-[-1vh] left-[10vw] sm:left-[4.2rem] md:left-[5.3rem] lg:left-[6.2rem] w-[80%] h-full" poster="poster-image.jpg">
        <source src={blackstretch} type="video/mp4"  />      </video>
              </div>
            </div>


         
          </div>
            <div className="flex justify-center  ">
                <div className="text-2xl z-10">
                 
                      {/* <marquee behavior="10fr" direction="down" loop="1" scrollamount="1" scrolldelay="100"  > */}
                      <div
                        className={`text-center font-noto mt-4 mb-1  ${
                          blackclothing === " " ? "invisible" : ""
                        }` }   
                      >
                        {blackclothing} 
                      </div>
                  {/* </marquee> */}
                
                </div>
              </div>
              <div className="grid md:hidden">
                <div className="px-3">

         <div className="standard">E-Commerse website with a focus on simplicity for black dress and clean design , this store priortize user experience </div>
                </div>
          <div className="">
          <div className="flex justify-center items-center gap-2 mt-2 standard font-medium ">
    <img className="h-6 w-6 " src={hbs} alt="" />
    <img className="h-6 w-6" src={bootstrap} alt="" />
    <img className="h-6 w-6" src={node} alt="" />
    <img className="h-6 w-6" src={mongodb} alt="" />
  </div>
          </div>
         </div>
              <div className="flex justify-center pt-3 pb-3 md:pb-0 md:pt-5">
            <div className="flex justify-between md:gap-14">
            <a href="https://blackclothing.cyclic.app/" target='_blank' rel="noopener noreferrer"><Howerbtn icon={<BsLink className='mr-2 mt-1' />}  content={"website"} /></a>
           <a href="https://github.com/MUHAMMED-SHAIKH-ZAHID/blackclothing.store" target='_blank' rel="noopener noreferrer"><Howerbtn icon={ <RiCodeSSlashFill className='mr-2 mt-1'/>} content={"code"} /></a>
            <div className="hidden relative md:flex infobtn ">
            <div className="flex justify-center  p-3 text-sm md:text-lg uppercase font-noto infotext ">
            <FiInfo    className='mr-2 mt-1 '/> Info  
            </div>
            <div className="infodiv absolute top-[-1.7rem] ml-[-4rem] ">
              <div className="bg-gray-200 bg-opacity-30 backdrop-blur-md rounded-xl px-2 py-1 infobackground ">
                <div className="flex justify-center pb-1 info-absheading text-sm md:text-lg uppercase font-noto ">
              <FiInfo    className='mr-2 mt-1  '/> INFO
              </div>
              <div className="infodetails">
              <div className="standard">E-Commerse website with a focus on simplicity for black dress and clean design , this store priortize user experience </div>

              </div>


            
  <div className="flex justify-center items-center gap-2 mt-2 standard font-medium infoicons ">
    <img className="h-6 w-6 " src={hbs} alt="" />
    <img className="h-6 w-6" src={bootstrap} alt="" />
    <img className="h-6 w-6" src={node} alt="" />
    <img className="h-6 w-6" src={mongodb} alt="" />
  </div>
 


              </div>
            </div>
            </div>

         
            </div>
          </div>
         
         

        </div>
     
  
  );
};

export default SecondIndex;

//tab
//              <img className="h-6 w-6" className=' z-50 rounded-xl rounded-b-3xl ml-4  bottom-2 sticky w-[13rem] ' src={socialmediatab} alt="" />
//<div className="">E-Commerse website with a focus on simplicity for black dress and clean design , this store priortize user experience ,making iteasy for customer to find and purchase the fashionable blackproducts</div>

