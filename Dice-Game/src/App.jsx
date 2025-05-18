import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FrontPage from './components/FrontPage'
import GamePage from './components/GamePage'

function App() {
  const [isGameStart, setIsGameStart] = useState(false)

  const toggleGamePlay=()=>{
    setIsGameStart((prev)=>!prev)
  }
  return (
    <>
    {
      isGameStart?<GamePage/>:<FrontPage
      toggle={toggleGamePlay}
      />
    }
   
    </>
  )
}

export default App
