import React from 'react'
import diceSide from '../images/diceSide.svg'
import Button from './Button'
const GamePlay = () => {
  return (
    <div className=' w-full flex justify-center items-center  flex-col mt-36'>
        <img src={diceSide} alt="diceSide-img" className='w-[250px]'/>
      <p className='text-xl font-semibold'>Click on Dice to roll</p>
      <Button css="bg-white text-black rounded-lg border border-black hover:bg-gray-500 hover:text-white"/>
      <Button css="bg-black text-white rounded-lg "/>

    </div>
  )
}

export default GamePlay
