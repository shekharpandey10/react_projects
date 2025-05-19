import React from 'react'
import { useState } from 'react'

const ToDo = () => {
    const [tasks,setTask]=useState([])
    const [newTask,setNewTask]=useState('')
    const addTask=()=>{
        if(newTask.trim()!==''){
            setTask([...tasks,{
                id:Date.now(),
                text:newTask,
                completed:false
            }])
        }
    }
  return (
    <div>
        <h1>ToDo list</h1>
        <input type="text" name="" id="" 
        value={newTask}
        onChange={(e)=>setNewTask(e.target.value)}
        placeholder='Enter info'/>
        <button onClick={addTask}>Add</button>
        <ul>
            {tasks.map(task=>(

                <li key={task.id}>
                <input type="checkbox" name="" id=""
                
                />
                <span className={task.completed?'line-through':'none'}>{task.text}</span>
                 <button>Delete</button>    
            </li>
            ))}
        </ul>
        
    </div>
  )
}

export default ToDo
