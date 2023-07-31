import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
   const navLinks = [
    {name:"Home", link:"/"}, 
    {name:"Movies", link:"movielist"}
  ]

  return (
    <div className="py-5 fixed px-3 bg-[#ffffff06] backdrop-blur-sm z-40 text-white lg:px-40 w-full mx-auto flex justify-between items-center">
        <p className="lg:px-5 text-md lg:text-3xl font-extrabold text-[#0047AB] ">The Movie Village</p>

        <div className="flex gap-2 text-white lg:w-40 items-center justify-between">
          {navLinks.map(item=>(
            <NavLink className={({isActive})=> isActive? "text-[#0047AB] font-semibold" : ""}
            id={item.name} 
            to={item.link}>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
    </div>
  )
}

export default Header