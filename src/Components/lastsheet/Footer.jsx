import React from 'react'
import {TfiArrowTopRight} from 'react-icons/tfi'
import {BsArrowDownRight} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='bg-gray-50 rounded-t-xl'>
        <div className="pt-5">SHaikh Zahid</div>
        <div className="grid md:grid-cols-[1fr,1fr] pt-10  h-[20rem]">
          <div className="self-end">
            <div className=" flex">
            <div className="md:text-[3rem] text-[2.5rem] flex-1">LETS CONNECT <TfiArrowTopRight className='h-10 w-10 hidden md:block ' /> <BsArrowDownRight className='h-7 w-7  md:hidden' /></div>

            </div>
             
          </div>

            <div className="flex justify-center">
              <div className="">
                <div className="pt-5">

              <a className='' href="mailto:muhdshaikhzahid@gmail.com">muhdshaikhzahid@gmail.com</a>
                </div>
                <div className="">

               <a href="tel:+919207783535">+91 9207783535</a>
                </div>

              </div>
            

           
            </div>
                
            
        </div>
        <div className="flex justify-between pt-16 pb-3 text-sm ">
         <div className="">
          <div className="">version</div>
          <div className="">2023 ©</div>
         </div>
         <div className="">
          <div className="">socials</div>
          <div className="flex gap-3">

          <a href="https://www.instagram.com/_shaikh_zahid/" >Instagram</a>
          <a href="https://www.linkedin.com/in/muhammed-shaikh-zahid-u-155a98248/">LinkedIn</a>
          <a href="https://twitter.com/muhdshaikhzahid">Twitter</a>
          </div>
         </div>
        </div>
    </div>
  )
}

export default Footer