import React from 'react'
import {TfiArrowTopRight} from 'react-icons/tfi'
import {BsArrowDownRight} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'


const Footer = () => {
  return (
    <div className='bg-[#F9F9F9] rounded-t-xl' id='contact'>
        <div className="pt-5">SHaikh Zahid</div>
        <div className="grid md:grid-cols-[1fr,1fr] pt-10  h-[20rem] mb-10 md:mb-0">
          <div className="self-end">
            <div className=" flex">
            <div className="md:text-[3rem] text-[2.5rem] flex-1">LETS CONNECT <TfiArrowTopRight className='h-10 w-10 hidden md:block ' /> <BsArrowDownRight className='h-7 w-7  md:hidden' /></div>

            </div>
             
          </div>

            <div className="flex justify-center ">
              <div className="w-[18rem] ">
              <div className="bg-white rounded-xl border p-2 grid  text-center items-center">
                
              <div className='flex justify-center items-center py-1 pt-2'><AiOutlineMail className='h-5 w-5' /></div>
    <div className="font-semibold medium text-zinc-600 ">Email</div>
    <a className='text-zinc-400 font-medium ' href="mailto:muhdshaikhzahid@gmail.com"> <div className='py-1'>muhdshaikhzahid@gmail.com</div> 
    <div className="standard py-2 text-zinc-400">write me {"\u2192"}</div></a>
</div>
          <div className="bg-white rounded-xl border p-2 grid  text-center items mt-2">
                
                <div className='flex justify-center items-center py-1 pt-2'><BsWhatsapp className='h-5 w-5' /></div>
                <div className="font-semibold medium text-zinc-600">Whatsapp</div>
                <div className='py-1 text-zinc-400 font-medium'>  <a href="tel:+919207783535">+91 9207783535</a></div> 
                <div className="standard py-2 text-zinc-400">write me {"\u2192"}</div>
            </div>


              </div>
            

           
            </div>
                
            
        </div>
        <div className="flex justify-between pt-16 pb-2 small ">
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