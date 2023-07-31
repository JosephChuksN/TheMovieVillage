import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/tmv.png'

const Header = () => {
   const navLinks = [
    {name:"Home", link:"/"}, 
    {name:"Movies", link:"movielist"}
  ]

  return (
    <div className="py-5 fixed px-3 bg-[#ffffff06] backdrop-blur-sm z-40 text-white lg:px-40 w-full mx-auto flex justify-between items-center">
       <img className="w-16 h-9"
       src={logo} alt="logo" />

        <div className="flex gap-2 text-white w-2/5 lg:w-40 items-center justify-between">
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