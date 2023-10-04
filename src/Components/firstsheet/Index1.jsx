import '../firstsheet/index.css'
import Social from './Social'
import Stack from './Stack'
import Data from './Data'
import { useEffect, useState } from 'react'



const Index1 = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);


  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);
  
  
  return (
    <div id='home'>
         <div className="text-black grid   md:h-screen md:mb-5  mb-10">
          <div className=" grid gap-y-6  gap-1.5">
            
            <div className="grid lg:grid-cols-[116px_1fr_1fr] grid-cols-[5px_1fr]  gap-x-2 pt-[2.5rem] items-center">
             <div className="">
               <Social />
              </div>  
                <div className={isLargeScreen ? "home__img order-2":"home__imges order-2"}>
                </div>
                <div className="lg:order-1 order-2 col-start-1  col-end-3 lg:col-auto  ">    <Data /></div>
                
            </div>
           
            </div>
                <Stack />
        </div>
    </div>
  )
}

export default Index1