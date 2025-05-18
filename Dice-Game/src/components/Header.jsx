import React, { useState } from 'react'
import Number from './Number'
const Header = () => {
   const arrNo=[1,2,3,4,5,6];
//    const [slectedNumber,setSelectedNumber]=useState()
    const [selectedNumber, setSelectedNumber] = useState(null)
    const [isNumberSelected, setIsNumberSelected] = useState(false);

//    isNumberSelected = selectedNumber !== null; 

  
      
   
  return (
      <header className='h-[151] w-[1280px] mx-auto my-10 flex justify-end  overflow-none'>
       <div>
         <h1 className='text-5xl font-bold'>0</h1>
        <p className='font-semibold text-xl'>Total Score</p>
       </div>
       <div className='flex gap-8 m-auto pl-[450px]'>
       <p className={`text-red-500 text-xl whitespace-nowrap absolute right-15 top-4 ${isNumberSelected?'hidden':""}`}>You have not selected any number</p>

        {arrNo.map((val,i)=>(
            <Number key={i} 
           isSelected={val === selectedNumber}
            onClick={
             ()=>{
                setSelectedNumber(val)
                console.log(val)
                setIsNumberSelected((prev)=>{
                    if(prev===null && selectedNumber==val) return false;
                    else return true
                })
             }
            }
            >{val}</Number>
             ))}
       </div>
    </header>
  )
}

export default Header
