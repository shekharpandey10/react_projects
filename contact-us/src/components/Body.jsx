import React from 'react'
import call from '../images/call.svg'
import sms from '../images/sms.svg'
import smsBlack from '../images/smsBlack.svg'
import service from '../images/service.svg'
import Input from './input'

const Body = () => {
  return (
    <div className='m-auto w-[95%] my-16 p-8'>
      <div className=''>
        <h1 className='text-6xl font-bold mb-6'>CONTACT US</h1>
        <p className='text-gray-600 w-[60%]'>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.{' '}
        </p>
      </div>
      <div className='w-full mt-8 pl-8 flex gap-40'>
        <div>
          <div className='flex gap-8 flex-wrap'>
            <button className='flex items-center gap-2 bg-black text-white px-4 py-2 rounded w-fit'>
              <img src={sms} alt='Chat Icon' className='h-5 w-5' />
              <span>VIA SUPPORT CHAT</span>
            </button>
            <button className='flex items-center gap-2 bg-black text-white px-4 py-2 rounded w-fit px-16'>
              <img src={call} alt='Chat Icon' className='h-5 w-5' />
              <span>VIA CALL</span>
            </button>
          </div>
          <div>
            <button className='flex justify-center items-center px-36 gap-2 py-2 w-fit border border-black rounded-md mt-6'>
              <img src={smsBlack} alt='' />
              <span>VIA EMAIL FORM</span>
            </button>
          </div>
          <form className='flex flex-col relative'>
            <Input id='name' value='Name' />
            <Input id='email' value='Email' />

            <Input value='Text' id="textbox" className=' h-[150px]' />
            <button className='bg-black w-28 h-10 m-4 text-white rounded-sm self-end '>Submit</button>
          </form>
        </div>
        <div>
          <img src={service} alt='service-btn-img' />
        </div>
      </div>
    </div>
  )
}

export default Body
