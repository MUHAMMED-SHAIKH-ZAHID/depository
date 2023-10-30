// VideoComponent.js
import React from 'react';
import blackstretch from "../../Images/blackstretch.mp4"
import mac from "../../Images/Mac.png";


const VideoComponent = () => {
  return (
    <>
       <img className="relative z-50" src={mac} alt="" />
     <video   autoPlay loop muted controls={false} className=" absolute rounded-3xl xl:rounded-[2.4rem] md:top-[-25px] xl:top-[-1.7rem]  top-[-1.2vh] left-[10vw] sm:left-[4.2rem] md:left-[5.5rem] lg:left-[6.2rem] xl:left-[6.2rem] w-[80%] h-full" poster="poster-image.jpg">
        <source src={blackstretch} type="video/mp4"  />      </video>
    </>
 
  );
};

export default VideoComponent;
