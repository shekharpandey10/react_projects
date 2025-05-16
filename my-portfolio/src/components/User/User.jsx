import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId}=useParams();
  return (
    <div className='bg-gray-600 text-2xl p-4 text-white text-center'>
      User: {userId}
    </div>
  )
}

export default User
