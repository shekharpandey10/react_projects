import React from 'react'
import dice from '../images/dice.svg'
import Button from './Button'

const FrontPage = ({toggle}) => {
  return (
    <div className=' h-[522px] w-[1182px] m-auto flex justify-center items-center my-36'>
        <div className=''>
            <img src={dice} alt="" />
        </div>
        <div className='flex flex-col' >
            <h1 className='text-7xl font-bold'>DICE GAME</h1>
            <Button css="bg-black text-white rounded-lg self-end " divProp="ml-auto" 
            toggleBtn={toggle}
            />
        </div>
    </div>
  )
}

export default FrontPage
