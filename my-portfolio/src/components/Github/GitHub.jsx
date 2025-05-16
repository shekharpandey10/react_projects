import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function GitHub() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/shekharpandey10')
    //     .then((res)=>res.json()).then((data)=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-4xl'>
        Github Follwers: {data?.followers }
        <img src={data.avatar_url} alt="" width={300}/>
      
    </div>
  )
}


export default GitHub

export const gitHubInfoLoader=async()=>{
  const response= await fetch("https://api.github.com/users/shekharpandey10")
        return response.json(); 
}


