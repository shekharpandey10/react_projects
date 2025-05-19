import React from 'react'

const Button = ({divProp,toggleBtn,css,value}) => {
  return (
    <div className={divProp}>
        <button className={`w-[220px] h-[55px] mt-5 ${css} hover:bg-gray-600` }
        onClick={toggleBtn}
        onToggle={toggleBtn}
        >{value}</button>
    </div>
  )
}

export default Button
