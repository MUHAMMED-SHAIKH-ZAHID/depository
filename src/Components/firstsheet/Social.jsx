import React from 'react'
import {RxInstagramLogo} from 'react-icons/rx'
import {RiDribbbleFill} from 'react-icons/ri'
import {VscGithubAlt} from 'react-icons/vsc'

const Social = () => {
  return (
    <div className='grid grid-cols-[max-content] gap-y-5 '>
         <a href="https://www.instagram.com/_shaikh_zahid/" ><RxInstagramLogo className='h-5 w-5'  /></a>  
                <RiDribbbleFill className='h-5 w-5' />
                <VscGithubAlt className='h-5 w-5' />
    </div>
  )
}

export default Social