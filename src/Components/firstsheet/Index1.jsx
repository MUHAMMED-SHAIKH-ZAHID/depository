import '../firstsheet/index.css'
import Social from './Social'
import Stack from './Stack'
import Data from './Data'



const Index1 = () => {

  return (
    <div>
         <div className="text-black grid   md:h-screen md:mb-5  mb-10">
          <div className=" grid gap-y-6  gap-1.5">
            
            <div className="grid lg:grid-cols-[116px_1fr_1fr] grid-cols-[5px_1fr]  gap-x-2 pt-[5.5rem] items-center">
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

export default Index1