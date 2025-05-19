import React, { useState } from 'react'
import Button from './Button'
import useImages from '../hooks/useImages'
import Header from './Header'
const GamePlay = () => {
  const [score, setScore] = useState(0)
  const [currentDice, setCurrentDice] = useState(1)
  const [selectedNumber, setSelectedNumber] = useState(null)
  const [isNumberSelected, setIsNumberSelected] = useState(false)
  const [error, setError] = useState('')
  const [rule, setRule] = useState(false)
  const genRendomNo = () => {
    const rendom = Math.floor(Math.random() * 6 + 1)
    console.log(rendom)
    return rendom
  }
  const roleDice = () => {
    if (isNumberSelected == false) {
      setError('You have not selected any number')
      return
    }
    setError('')
    const randomNum = genRendomNo()
    setCurrentDice((prev) => randomNum)

    setIsNumberSelected(true)
    if (selectedNumber == randomNum) {
      setScore((prev) => prev + randomNum)
    } else {
      setScore((prev) => prev - randomNum)
    }
    setSelectedNumber(null)
    setIsNumberSelected(false)
  }

  return (
    <div>
      <Header
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        score={score}
        error={error}
        setIsNumberSelected={setIsNumberSelected}
      />

      <div className=' w-full flex justify-center items-center  flex-col mt-36'>
        <div onClick={roleDice}>
          <img
            src={useImages[currentDice - 1]}
            alt='diceSide-img'
            className='w-[250px]'
          />
        </div>
        <p className='text-xl font-semibold'>Click on Dice to roll</p>
        <Button
          css='bg-white text-black rounded-lg border border-black hover:bg-gray-500 hover:text-white'
          value='Reset Score'
          toggleBtn={() => setScore(0)}
        />
        <Button
          css='bg-black text-white rounded-lg '
          value='Show Rules'
          toggleBtn={() => setRule((prev) => !prev)}
        />
      </div>
      <div>
        {rule && (
          <div className='flex flex-col w-[40%] mx-auto my-12 h-50 justify-center items-center text-center rounded-xl bg-pink-300 border border-black font-medium p-4'>
            <h3 className='text-2xl'>How to play dice game</h3>
            <br />
            <ul>
              <li>Select any number</li>

              <li>Click on dice image</li>

              <li>
                after click on dice if selected number is equal to dice number
                you will get same point as dice{' '}
              </li>

              <li>if you get wrong guess then 2 point will be dedcuted </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default GamePlay
