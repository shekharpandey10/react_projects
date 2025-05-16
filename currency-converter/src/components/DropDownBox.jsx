import React from 'react'

const DropDownBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencychange,
  currencyOption=[],
  slectedCurrency="usd",
  amountDisable=false,
  currencyDisable=false
}) => {
  return (
    <div className='flex w-1/2 border border-black spacing-px h-36 bg-blue m-2 '>
      <input type="search" 
      className='shadow-lg w-full h-full outline-none text-2xl overflow-x-auto'
      
      />
      <select className='outline-none w-64 h-10 shadow-lg shadow-blue-600 items-center'>
        <option  value="">{slectedCurrency}</option>
        <option value="">{currencyOption}</option>
      </select>
     
    </div>
  )
}

export default DropDownBox
