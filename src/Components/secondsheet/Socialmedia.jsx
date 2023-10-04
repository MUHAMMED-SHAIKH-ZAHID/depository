import React from "react";
import { RiCodeSSlashFill } from "react-icons/ri";
import { BsLink } from "react-icons/bs";
import { FiInfo } from "react-icons/fi";
import socialmedialight from "../../Images/socialmediawhite.png";
import socialmediatab from "../../Images/socialmedia-tab.jpg";
import profile from "../../Images/profile.png";
import iphone from "../../Images/phone14 Pro.png";
import notification from "../../Images/notification.png";
import search from "../../Images/search.png";
import Howerbtn from "../Howerbtn";
import node from "../../Images/svg/nodejs.svg";
import mongodb from "../../Images/svg/mongodb.png";
import Reactsvg from "../../Images/svg/reactjs.svg";
import Tailwindsvg from "../../Images/svg/tailwind.79614a5f61617ba49a0891494521226b.svg";
import redux from "../../Images/svg/redux.svg";
import chatbox from "../../Images/chatbox.png";


const Socialmedia = () => {
  return (
    <div>
      <div className="h-screen  ">
        <div className="md:text-[2rem] pt-10 font-noto text-3xl  text-center">
          Social Media
        </div>
        <div className="grid lg:grid-cols-[3fr,2fr,3fr] md:grid-cols-[2fr,2fr]   pt-10">
          <div className=" hidden md:flex   ">
            <div className="flex items-end align ">
              <img
                className="h-[6rem] rounded-lg  transform transition-transform duration-300 hover:scale-150  origin-bottom "
                src={search}
                alt=""
              />
            </div>
        
            <div className="flex justify-center align-middle pt-5 ">
              <img
                className="h-[20rem] rounded-2xl transform transition-transform duration-300 hover:scale-125  origin-top-left"
                src={chatbox}
                alt=""
              />
            </div>
          </div>

          <div className=" md:pt-5   flex justify-center">
            <div className="absolute overflow-scroll website h-[30rem] rounded-[2.5rem]">
              <img
                className="  rounded-[2.2rem] w-[15rem] px-3 mt-3 "
                src={socialmedialight}
                alt="website"
              />
              <img
                className=" z-50 rounded-xl rounded-b-3xl ml-[1rem]  bottom-2 sticky w-[13rem] "
                src={socialmediatab}
                alt=""
              />
            </div>
            <img
              className="  z-10 w-[15rem] relative top-0 "
              style={{ pointerEvents: "none" }}
              src={iphone}
              alt=""
            />
          </div>

          <div className=" hidden lg:flex     ">
            <div className="flex ">
              <img
                className="h-[5rem] mt-15 rounded-xl transform transition-transform duration-300 hover:scale-150  origin-left"
                src={notification}
                alt=""
              />
            </div>
            <div className="flex items-end mb-5 justify-end ">
              <img
                className="h-[20rem] rounded-2xl transform transition-transform duration-300 hover:scale-125  origin-center"
                src={profile}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="grid md:hidden pt-4">
          <div className="px-4">
            <div className="standard">
              Social Media website is an online platform enabling individuls and
              communities to connect, share, and interact through user-generated
              content, fostering communication and networking on a global scale.
            </div>
          </div>
          <div className="">
            <div className="flex justify-center items-center gap-2 mt-2 standard font-medium ">
              <img className="h-5 w-5" src={Reactsvg} alt="" />
              <img className="h-5 w-5" src={redux} alt="" />
              <img className="h-5 w-5" src={Tailwindsvg} alt="" />
              <img className="h-5 w-5" src={node} alt="" />
              <img className="h-5 w-5" src={mongodb} alt="" />
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-3 pb-3 md:pb-0 md:pt-8">
          <div className="flex justify-between md:gap-14">
           <a href="https://socialmedia123.netlify.app/" target='_blank' rel="noopener noreferrer"> <Howerbtn
              icon={<BsLink className="mr-2 mt-1" />}
              content={"website"}
            /></a>
            <a href="https://github.com/MUHAMMED-SHAIKH-ZAHID/Social-Media" target='_blank' rel="noopener noreferrer">
            <Howerbtn
              icon={<RiCodeSSlashFill className="mr-2 mt-1" />}
              content={"code"}
            /></a>
            <div className="hidden relative md:flex infobtn ">
              <div className="flex justify-center  p-3 text-sm md:text-lg uppercase font-noto infotext ">
                <FiInfo className="mr-2 mt-1 " /> Info
              </div>
              <div className="infodiv absolute top-[-1.7rem] ml-[-4rem] ">
                <div className="bg-gray-200 bg-opacity-30 backdrop-blur-md rounded-xl px-2 py-1 infobackground ">
                  <div className="flex justify-center pb-1 info-absheading text-sm md:text-lg uppercase font-noto ">
                    <FiInfo className="mr-2 mt-1  " /> INFO
                  </div>
                  <div className="infodetails">
                    <div className="standard">
                    Social Media website is an online platform enabling individuls to connect, share, and interact through people
                    </div>
                  </div>

                  <div className="flex justify-center items-center gap-2 mt-2 standard font-medium infoicons ">
                    <img className="h-5 w-5" src={Reactsvg} alt="" />
                    <img className="h-5 w-5" src={redux} alt="" />
                    <img className="h-5 w-5" src={Tailwindsvg} alt="" />
                    <img className="h-5 w-5" src={node} alt="" />
                    <img className="h-5 w-5" src={mongodb} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socialmedia;
