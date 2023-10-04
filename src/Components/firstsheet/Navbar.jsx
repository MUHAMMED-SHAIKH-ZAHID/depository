import React, { useState } from 'react'

const Navbar = () => {
  const [active,Setactive] = useState('home')
  const navbardata = [
    {id:1,name:"home"},
    {id:2,name:"about"},
    {id:3,name:"project"},
    {id:4,name:"contact"},

  ]
  const scrolltosection = (id) => {
   
    const section = document.getElementById(id)
    section.scrollIntoView({behavior:'smooth'})
  }
  return (<>
      <div className="grid md:grid-cols-[4fr,2fr] md:sticky top-0 z-[99999] bg-white">
       <div className=""></div>
      <div className="flex justify-between pt-4 md:pb-3">
        {navbardata.map((item)=>(
        <div className={`uppercase  cursor-pointer small mx-1 md:mx-0 ${active === item.name ? "text-black":"text-black"}` } key={item.id} onClick={()=>{scrolltosection(item.name);Setactive(item.name)}}>{item.name}</div> 
        ))}
      </div>
      </div>
      </>
   
  )
}

export default Navbar