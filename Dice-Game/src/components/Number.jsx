import React, { useState } from 'react'
import Header from './Header';
const Number = ({css,children,onClick,isSelected }) => {
    const [clicked,setClicked]=useState(false);
    
    
     const handleClick=(e)=>{
       setClicked((prev)=>!prev)
      if (onClick) onClick(e);
     }
  return (
    <>
        <button className={`w-[56px] h-[56px] border border-black flex items-center justify-center ${isSelected? 'bg-black text-white':'bg-white text-black '}`} 
        onClick={handleClick}
        >
          {children}
        </button>
    </>
  )
}

export default Number
