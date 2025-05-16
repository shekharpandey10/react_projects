import React from 'react'
import logo from '../images/logo.svg'
const NavBar = () => {
  return (
    <nav className='w-[95%] m-auto flex justify-between  shadow-xl'>
        <div className=''>
            <img src={logo} alt="" />
        </div>
       <div className='flex text-xl justify-around gap-8 font-semibold py-4 mr-16'>
         <h4 className='hover:underline cursor-pointer'>Home</h4>
         <h4 className='hover:underline cursor-pointer'>About</h4>
         <h4 className='hover:underline cursor-pointer'>Contact</h4>
       </div>
    </nav>
  )
}

export default NavBar
