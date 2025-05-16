import React from 'react'

const Input = ({ value, className,id }) => {
  return (
     <div className="relative w-[440px] mt-6">
      <label htmlFor={id} className="absolute top-[-10px] left-3 bg-white px-2 text-sm text-gray-700">
        {value}
      </label>
      <input
        type="text"
        id={id}
        placeholder={value}
        className={`border border-black px-4 py-2 w-full h-[60px] focus:outline-none focus:ring-2 focus:ring-black ${className}`}
      />
    </div>
  )
}

export default Input
