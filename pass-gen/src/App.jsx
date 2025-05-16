import { useCallback, useEffect, useState ,useRef} from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8);
  const [isNumAllowed,setIsNumAllowed]=useState(false);
  const [isCharAllowed,setIsCharAllowed]=useState(false);
  const [Password,setPassword]=useState("")
  const passRef=useRef(null)
  const useCopyPassword=useCallback(()=>{
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,99)
   window.navigator.clipboard.writeText(Password)
  },[Password])

  const PasswordGenrator=useCallback(()=>{
    let pass=""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(isCharAllowed) str +="!@#$%^&*()_+-=[]{}|;:',.<>?/\\~\`"
    if(isNumAllowed) str += "0123456789"

    for(let i=1;i<length;i++){
        let char=Math.round(Math.random()*str.length+1)
        pass+=str.charAt(char)
    }
setPassword(pass)
  },[length,isCharAllowed,isNumAllowed,setPassword  ])

useEffect(()=>{
  PasswordGenrator()
},[length,isCharAllowed,isNumAllowed,setPassword])

  return (
    <>
      <div className='bg-gray-700 py-4 rounded-lg w-122 text-orange-500'>
        <h2 className='text-white text-4xl py-3 mx-auto'>Password Generator</h2>
        <div className='h-36 shadow-sm  overflow-hidden  flex items-center justify-center'>
          <input className='outline-none py-4 px-10 rounded-sm'
           type="text" 
           value={Password}
          placeholder='Password'
          ref={passRef}
          readOnly
            />
            <button
            onClick={useCopyPassword}
            className='bg-blue-700 text-white py-4 px-2 rounded-md m-0.5 '
            
            >Copy</button>
        </div>
        <div className='flex justify-center items-center'>
          <input type="range" 
          className='m-1'
          min={8}
          max={100}
          value={length}
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label className='mr-2'>length:{length}</label>
          <input
          className=' p-4'
           type="checkbox"
           value={isNumAllowed}
           onClick={()=>{setIsNumAllowed(prev=>!prev)}}
           />
           <label className='mr-2'>:Number</label>

            <input
          className=' p-4'
           type="checkbox"
           value={isCharAllowed}
           onClick={()=>{setIsCharAllowed(prev=>!prev)}}
           />
           <label className='mr-2'>:Character</label>
        </div>

      </div>
    </>
  )
}

export default App
